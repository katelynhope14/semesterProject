<template>
  <div>
    <h1>Checkout Cart</h1>
    <!-- router link to switch between both pages -->
    <!-- <router-link to="/category" replace>Add New Category</router-link> -->
    <div id="top">
    <section id="summary">
        <h2>Order Summary</h2>
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
              <td>Total: {{total.toFixed(2)}} </td>
            </tr>
          </tbody>
        </table>
      </section> 



      <section>
        <h2>Shipping Info</h2>
        <div id="firstbox">
          <!-- for using our nth-childs -->
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
          <!-- for saving category information -->
          <button id="saveButton" v-on:click="saveInfo(firstname, lastname, streetaddress, cityname, statename, zipcodenum, cardinfo, expdate, securitycode, phonenumber)">Save and Checkout</button>
        </div>
      </section>


 <section>
        <h2>Payment Method</h2>
        <div id="secondbox">
          <!-- for using our nth-childs -->
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
          
          <!-- for saving category information -->
        </div>
      </section>


    

     <!-- <section id= "expenses"> 
<h3> Payment Method </h3>
<table class="center-of-page">
    <thead>
        <th>Credit Card Number</th>
        <th> Exp. (MM/YY) </th>
        <th> Security Code</th>
        <th> Phone Number</th>
    </thead>
    <tbody>
        <tr v-for ="(z,pos) in allExpenses" :key="pos">
            <td> ${{z.amount.toFixed(2)}}</td>
            <td>  {{z.where}} </td>
            <td> {{z.category}}  </td>
            <td> {{z.date}} </td>
        </tr>
    </tbody>
</table> 
</section> -->
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

//MAKE SURE TO CREATE UPDATE AND DELETE BUTTONS 
//for shipping info
private firstname = "";
private lastname = "";
private streetaddress = "";
private cityname = "";
private statename = "";
private zipcodenum = "";

//for card information
private cardinfo="";
private expdate="";
private securitycode= "";
private phonenumber= "";
private userCart:any[] = [];
private itemDetails: any [] = [];
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
    setTimeout(() => {  console.log("World!"); }, 2000);

    this.$appDB
        .collection(`users/${this.uid}/cart`)
        .onSnapshot((qs: QuerySnapshot) => {
        this.userCart.splice(0);  // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
            const data = qds.data();
            this.docIDs.push(qds.id);
            if (qds.exists)
                this.userCart.push({
                  itemName: data.name,
                  itemDesc: data.desc,
                  itemPrice: parseFloat(data.price)
            });
            console.log(this.userCart);
            this.total = this.total + parseFloat(data.price) + parseFloat(data.price) * 0.06 ;
        });
    });
  }


  saveInfo(firstname, lastname, streetaddress, cityname, statename, zipcodenum, cardinfo, expdate, securitycode, phonenumber): void{
    this.uid = this.$appAuth.currentUser?.uid ?? "none";
    this.docIDs.forEach((id) => {
      this.$appDB.collection(`users/${this.uid}/cart`).doc(id).delete();
    })
    this.userCart.forEach((item) => {
      this.itemString = this.itemString + item.itemName + " - " + item.itemDesc + "\n";
    })
    this.address = firstname + " " + lastname + "\n" + streetaddress + "\n" + cityname + ", " + statename + ", " + zipcodenum;
    this.card = "**** **** **** " + cardinfo.substring(12);

    this.$appDB
        .collection(`users/${this.uid}/orders`)
        .add({
          name: this.itemString,
          address: this.address,
          card: this.card,
          price: this.total})
    this.docIDs.splice(0);
    this.userCart.splice(0);
    this.total = 0;
    this.$router.push("/user");


  }
}
</script>

<style scoped>
#top {
  display: inline-block;
  text-align: right;
  border: 2px solid hsl(120, 22%, 63%);
  border-radius: 1em;
  padding: 1em;
}

label {
  text-align: left;
  padding-right: 10px;
}

input,
select {
  height: 10%;
  width: 65%;
  box-sizing: border-box;
}

td,
th {
  border: 2px solid black;
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
    color:cornflowerblue
}
h2 {
  text-align: left;
  color: rgb(161, 161, 245)
}


button {
  text-align: right;
}
</style>
