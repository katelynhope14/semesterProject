<template>
  <div id="login">
    <img id="fun" src="./photos/funner.png" />
    <h1>KLC Party Store</h1>
    <h2>Account Information</h2>

    <table v-if="userData.length" class="userdetails">
      <tbody>
        <tr>
          <td>First Name:</td>
          <div class="details" v-if="!canEdit">{{ userData[0].fName }}</div>
          <div class="details">
            <input v-if="canEdit" type="text" v-model="userData[0].fName" />
          </div>
        </tr>
        <tr>
          <td>Last Name:</td>
          <div class="details" v-if="!canEdit">{{ userData[0].lName }}</div>
          <div class="details">
            <input v-if="canEdit" type="text" v-model="userData[0].lName" />
          </div>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <div class="details" v-if="!canEdit">{{ userData[0].userPhone }}</div>
          <div class="details">
            <input v-if="canEdit" type="text" v-model="userData[0].userPhone" />
          </div>
        </tr>

        <tr>
          <td>Email:</td>
          <div class="details">{{ userData[0].userEmail }}</div>
        </tr>
      </tbody>
    </table>
    <div class="buttons">
      <button @click="canEdit = true">Edit Values</button>
      <button :disabled="!canEdit" @click="editValues">Confirm</button>
    </div>
    <table class="userorders">
      <tbody>
        <label for="no orders" v-if="!orders.length"
          >Your orders will show up here once you have made one</label
        >
        <tr v-if="orders.length" class="user">
          <td>Purchase Date</td>
          <td>Items</td>
          <td>Address</td>
          <td>Payment</td>
          <td>Total</td>
        </tr>
        <tr v-for="(c, pos) in orders" :key="pos" class="usersInfo">
          <td>{{ c.date }}</td>
          <td class="text-block">{{ c.items }}</td>
          <td class="text-block">{{ c.addr }}</td>
          <td>{{ c.card }}</td>
          <td>${{ c.total.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    <h3>
      Ready to place an order?
      <router-link to="/main" replace>Shop for Party Supplies</router-link>
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";
import { FirebaseAuth, UserCredential } from "@firebase/auth-types";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { QuerySnapshot } from "@firebase/firestore-types";
import "firebase/auth";

@Component
export default class UserPage extends Vue {
  readonly $appDB!: FirebaseFirestore;
  readonly $appAuth!: FirebaseAuth;
  private userDocID = "";
  private uid = "none";
  private canEdit = false;
  private userData: any[] = [];
  private orders: any[] = [];
  private itemArr: any[] = [];
  private addArr: any[] = [];
  private filled = false;

  // get noInput(): boolean {
  //     return this.userEmail.length === 0 || this.userPswd.length === 0;
  // }

  editValues(): void {
    this.uid = this.$appAuth.currentUser?.uid ?? "none";
    this.$appDB
      .collection(`users/${this.uid}/userdata`)
      .doc(this.userDocID)
      .update({
        fname: this.userData[0].fName,
        lname: this.userData[0].lName,
        phone: this.userData[0].userPhone,
      });
    this.canEdit = false;
  }
  mounted(): void {
    this.$appAuth.setPersistence("local");
    this.uid = this.$appAuth.currentUser?.uid ?? "none";
    this.$appDB
      .collection(`users/${this.uid}/userdata`)
      .onSnapshot((qs: QuerySnapshot) => {
        this.userData.splice(0); // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
          const data = qds.data();
          this.userDocID = qds.id;
          if (qds.exists)
            this.userData.push({
              fName: data.fname,
              lName: data.lname,
              userPhone: data.phone,
              userEmail: data.email,
            });
        });
      });

    this.$appDB
      .collection(`users/${this.uid}/orders`)
      .onSnapshot((qs: QuerySnapshot) => {
        this.orders.splice(0); // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
          const data = qds.data();
          var currItems = data.name.split(".");
          var currAddr = data.address.split(".");
          if (qds.exists)
            this.orders.push({
              date: data.time,
              items: data.name,
              addr: data.address,
              card: data.card,
              total: data.price,
            });
        });
        console.log(this.orders);
        if (this.orders.length != 0) {
          this.filled = true;
        }
      });
  }
}
</script>

<style scoped>
/* Style the background image */
#fun {
  height: 5%;
  width: 100%;
}
/* Styles the color of the labels for the user information */
.user {
  color: rgb(140, 137, 137);
}

/*Styles the h1 element*/
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 85px;
  border: 5px solid rgb(248, 209, 158);
  border-radius: 0.5em;
  color: rgb(175, 175, 175);
  background-color: rgb(250, 195, 122);
  text-align: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*Styles the h2 element*/
h2 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 50px;
  border: 5px solid rgb(248, 209, 158);
  border-radius: 0.5em;
  color: rgb(175, 175, 175);
  background-color: rgb(250, 195, 122);
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*Styles the h3 element*/
h3 {
  align-items: center;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 30px;
  border: 5px solid rgb(248, 209, 158);
  border-radius: 0.5em;
  color: rgb(175, 175, 175);
  background-color: rgb(250, 195, 122);
}

/*Styles the button*/
button {
  font-family: Didot, serif;
  font-size: 20px;
}

/*Styles the table */
table {
  border: 5px solid cornflowerblue;
  border-radius: 1em;
  align-content: center;
  margin: auto;
  padding: 1em;
}

/*Styles the td element */
td {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 25px;
  text-align: left;
  font-weight: bold;
  padding: 20px;
  margin-right: 150px;
}

/*Styles the label element */
label {
  font-size: 20px;
  text-align: left;
  font-weight: 300;
}

/*Styles the details div class */
.details {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 25px;
  font-weight: 300;
  text-align: right;
  margin: 0;
  padding: 5px;
}

input {
  text-align: right;
}
.buttons {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.text-block {
  white-space: pre;
}
</style>
