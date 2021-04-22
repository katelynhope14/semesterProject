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
            <th>Tax</th>
            <th>Total</th>
          </thead>
          <tbody>
            <tr v-for="(z, pos) in itemDetails" :key="pos">
              <td>{{ z.name }}</td>
              <td>${{ z.quantity }}</td>
              <td>${{ z.tax }}</td>
              <td>{{ z.total }}</td>
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
  @Prop() userCart!: any[];

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



private itemDetails: any [] = [];
  private allExpenses: any[] = [];
  private allCategories: any[] = [];
  private expenseByCategory: any[] = [];

  groupedTotal = new Map<string, number>();

  readonly $appAuth!: FirebaseAuth;
  private uid = "none";

  //adding the expenses of current user
  
  //saveInfo (fname, lname, add, newcity, newstate, newzip, credit, expdate, security, phonenum) {
  //}

  //adding just the name and limit of the current user
  mounted(): void {
    this.uid = this.$appAuth.currentUser?.uid ?? "none";
    this.$appDB

      //grabs our provided categories and LISTS them
      .collection(`users/${this.uid}/categories`)
      .orderBy("name") // Sort by category date
      .onSnapshot((qs: QuerySnapshot) => {
        this.allCategories.splice(0); // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
          if (qds.exists) {
            var catData = qds.data();
            this.allCategories.push({
              name: catData.name,
              limit: catData.monthlyLimit,
            });
          }
        });
      });

    //odering by date for user expenses
    this.$appDB
      .collection(`users/${this.uid}/expenses`)
      .orderBy("date") // Sort by category name
      .onSnapshot((qs: QuerySnapshot) => {
        this.allExpenses.splice(0); // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
          if (qds.exists) {
            var catData = qds.data();
            this.allExpenses.push({
              amount: catData.amount,
              date: catData.date,
              category: catData.category,
              where: catData.where,

              city: catData.city,
              state: catData.state,
              zipcode: catData.zipcode


            });
          }
        });

        // code for grouped total
        this.allExpenses.forEach((ex: any) => {
          const { category, amount } = ex;
          console.log(category);
          if (this.groupedTotal.has(category)) {
            const oldTotal = this.groupedTotal.get(category) as number;
            this.groupedTotal.set(category, oldTotal + amount);
          } else {
            this.groupedTotal.set(category, amount);
          }
        });

        //if statments for over budget or okay budget
        this.expenseByCategory.splice(0);

        this.groupedTotal.forEach((spTotal: number, spCat: string) => {
          const pos = this.allCategories.findIndex(
            (d: any) => d.name === spCat
          );
          if (spTotal > this.allCategories[pos].limit) {
            this.expenseByCategory.push({
              category: spCat,
              amount: spTotal,
              limit: this.allCategories[pos].limit,
              status: "over budget",
            });
          } else if (spTotal <= this.allCategories[pos].limit) {
            this.expenseByCategory.push({
              category: spCat,
              amount: spTotal,
              limit: this.allCategories[pos].limit,
              status: "ok",
            });
          }
        });
      });
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
