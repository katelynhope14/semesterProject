<template>
  <div id="entire">
    <img id="fun" src="./photos/funner.png" />
    <h1>KLC Party Store</h1>
    <h2>Checkout Cart</h2>
    <img id="cart" alt="Vuelogo" src="../assets/checkoutcart.png" />

    <div id="top">
      <section id="summary">
        <h3>Order Summary</h3>
        <table class="center-of-page">
          <thead>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr v-for="(z, pos) in userCart" :key="pos">
              <td>{{ z.itemName }}</td>
              <td>${{ z.itemDesc }}</td>
              <td>${{ z.itemPrice }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Total: {{ total.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Shipping Info</h3>
        <div id="firstbox">
          <label for="first">First Name</label>
          <input
            type="text"
            name="first"
            id="first"
            v-model="firstname"
          /><br /><br />
          <label for="last">Last Name</label>
          <input
            type="text"
            name="last"
            id="last"
            v-model="lastname"
          /><br /><br />
          <label for="address">Street Address</label>
          <input
            type="text"
            name="address"
            id="address"
            v-model="streetaddress"
          /><br /><br />

          <label for="city">City </label>
          <input
            type="text"
            name="city"
            id="city"
            v-model="cityname"
          /><br /><br />
          <label for="state">State </label>
          <input
            type="text"
            name="state"
            id="state"
            v-model="statename"
          /><br /><br />
          <label for="zipcode">Zip Code</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            v-model="zipcodenum"
          /><br /><br />

          <button
            id="saveButton"
            v-on:click="
              saveInfo(
                firstname,
                lastname,
                streetaddress,
                cityname,
                statename,
                zipcodenum,
                cardinfo,
                expdate,
                securitycode,
                phonenumber
              )
            "
          >
            Save and Checkout
          </button>
        </div>
      </section>

      <section>
        <h3>Payment Method</h3>
        <div id="secondbox">
          <label for="credit">Credit Card Information</label>
          <input
            type="number"
            name="credit"
            id="credit"
            v-model="cardinfo"
          /><br /><br />
          <label for="date">Exp. (MM/YY)</label>
          <input
            type="date"
            name="date"
            id="date"
            v-model="expdate"
          /><br /><br />
          <label for="code">Security Code</label>
          <input
            type="text"
            name="code"
            id="code"
            v-model="securitycode"
          /><br /><br />

          <label for="phone"> Phone Number </label>
          <input
            type="text"
            name="phone"
            id="phone"
            v-model="phonenumber"
          /><br /><br />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { QuerySnapshot } from "@firebase/firestore-types";
import { FirebaseAuth } from "@firebase/auth-types";
import "firebase/auth";
@Component
//BudgetCategory
export default class MyExpense extends Vue {
  readonly $appDB!: FirebaseFirestore;

  //for shipping info
  private firstname = "";
  private lastname = "";
  private streetaddress = "";
  private cityname = "";
  private statename = "";
  private zipcodenum = "";
  //for card information
  private cardinfo = "";
  private expdate = "";
  private securitycode = "";
  private phonenumber = "";
  private userCart: any[] = [];
  private itemDetails: any[] = [];
  private docIDs: any[] = [];
  private itemString = "";
  private address = "";
  private card = "";
  private total = 0;
  readonly $appAuth!: FirebaseAuth;
  private uid = "none";
  private userDocID = "";
  //adding the expenses of current user

  //saveInfo (fname, lname, add, newcity, newstate, newzip, credit, expdate, security, phonenum) {
  //}
  //adding just the name and limit of the current user
  mounted(): void {
    this.uid = this.$appAuth.currentUser?.uid ?? "none";
    setTimeout(() => {
      console.log("World!");
    }, 2000);
    this.$appDB
      .collection(`users/${this.uid}/cart`)
      .onSnapshot((qs: QuerySnapshot) => {
        this.userCart.splice(0); // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
          const data = qds.data();
          this.docIDs.push(qds.id);
          if (qds.exists)
            this.userCart.push({
              itemName: data.name,
              itemDesc: data.desc,
              itemPrice: parseFloat(data.price),
            });
          console.log(this.userCart);
          this.total =
            this.total + parseFloat(data.price) + parseFloat(data.price) * 0.06;
        });
      });
  }
  saveInfo(
    firstname,
    lastname,
    streetaddress,
    cityname,
    statename,
    zipcodenum,
    cardinfo,
    expdate,
    securitycode,
    phonenumber
  ): void {
    this.uid = this.$appAuth.currentUser?.uid ?? "none";
    this.docIDs.forEach((id) => {
      this.$appDB
        .collection(`users/${this.uid}/cart`)
        .doc(id)
        .delete();
    });
    this.userCart.forEach((item) => {
      this.itemString =
        this.itemString + item.itemName + " - " + item.itemDesc + "\n";
    });
    this.address =
      firstname +
      " " +
      lastname +
      "\n" +
      streetaddress +
      "\n" +
      cityname +
      ", " +
      statename +
      ", " +
      zipcodenum;
    this.card = "**** **** **** " + cardinfo.substring(12);
    var date = new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    });
    this.$appDB.collection(`users/${this.uid}/orders`).add({
      time: date,
      name: this.itemString,
      address: this.address,
      card: this.card,
      price: this.total,
    });
    this.docIDs.splice(0);
    this.userCart.splice(0);
    this.total = 0;
    this.$router.push("/user");
  }
}
</script>

<style scoped>
#fun {
  height: 5%;
  width: 100%;
}

#cart {
  height: 10%;
  width: 5%;
  align-content: center;
}
#top {
  display: inline-block;
  text-align: right;
  border: 5px solid hsl(120, 22%, 63%);
  border-radius: 1em;
  padding: 1em;
}
label {
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: left;
  padding-right: 10px;
  font-size: 22px;
  font-weight: 300;
}
input,
select {
  height: 10%;
  width: 65%;
  box-sizing: border-box;
}
th {
  text-decoration: underline;
  font-size: 22px;
  text-align: center;
  color: hsl(120, 39%, 65%);
  font-weight: 300;
}
td {
  text-align: center;
  font-size: 18px;
  padding: 10px;
}
table {
  align-content: center;
}
#top {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "firstbox" "secondbox";
}
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 85px;
  border: 5px solid rgb(248, 209, 158);
  border-radius: 0.5em;
  color: rgb(175, 175, 175);
  background-color: rgb(250, 195, 122);
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h2 {
  color: rgb(148, 148, 148);
  background-color: rgb(248, 209, 158);
  border-radius: 0.2em;
  font-size: 45px;
  text-align: center;
  font-weight: 800;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h3 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 30px;
  text-align: left;
  color: hsl(120, 39%, 65%);
  font-size: bold;
}

#saveButton {
  text-align: right;
  font-family: Didot, serif;
  font-size: 20px;
}
</style>
