<template>
  <div id="login">

    <table v-if="userData.length" class = "userdetails">
        <tbody>
            <tr>
            <td>First Name:</td>
            <div class = "details" v-if="!canEdit">{{userData[0].fName}}</div>
            <div class ="details"><input v-if="canEdit" type="text" v-model="userData[0].fName"/></div>
            </tr>
            <tr>
                <td>Last Name:</td>
                <div class = "details" v-if="!canEdit">{{userData[0].lName}}</div>
                <div class ="details"><input v-if="canEdit" type="text" v-model="userData[0].lName"/></div>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <div class = "details" v-if="!canEdit">{{userData[0].userPhone}}</div>
                <div class ="details"><input v-if="canEdit" type="text" v-model="userData[0].userPhone"/></div>
            <tr>
                <td>Email:</td>
                <div class = "details">{{userData[0].userEmail}}</div>
            </tr>

        </tbody>
    </table>
    <div class = "buttons">
        <button @click="canEdit = true">Edit Values</button>
        <button :disabled="!canEdit" @click="editValues">Confirm</button>
    </div>
    <table class = "userorders">
        <tbody>
            <label for="no orders" v-if="!orders.length">Your orders will show up here once you have made one</label>
            <tr v-if="orders.length" class = "user">
                <td>Items</td>
                <td>Address</td>
                <td>Payment</td>
                <td>Total</td>
            </tr>
            <tr v-for="(c, pos) in orders" :key="pos" class = "user">
                <td class ="text-block">{{c.items}}</td>
                <td class ="text-block">{{c.addr}}</td>
                <td>{{c.card}}</td>
                <td>${{c.total.toFixed(2)}}</td>
            </tr>


        
        </tbody>
    </table>
    <h2>Ready to place an order? <router-link to="/main" replace>Shop for Party Supplies</router-link> </h2>

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {FirebaseFirestore} from "@firebase/firestore-types";
import {FirebaseAuth, UserCredential} from "@firebase/auth-types"; 
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { QuerySnapshot } from "@firebase/firestore-types";

@Component
export default class UserPage extends Vue {
    readonly $appDB!: FirebaseFirestore;
    readonly $appAuth!: FirebaseAuth;
    private userDocID = "";
    private uid = "none"
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
        this.$appDB.collection(`users/${this.uid}/userdata`).doc(this.userDocID).update({fname: this.userData[0].fName, lname: this.userData[0].lName, phone: this.userData[0].userPhone});
        this.canEdit = false;
    }
    mounted(): void {
        this.uid = this.$appAuth.currentUser?.uid ?? "none";
        this.$appDB
        .collection(`users/${this.uid}/userdata`)
        .onSnapshot((qs: QuerySnapshot) => {
        this.userData.splice(0);  // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
            const data = qds.data();
            this.userDocID = qds.id;
            if (qds.exists)
                this.userData.push({
                fName: data.fname,
                lName: data.lname,
                userPhone: data.phone,
                userEmail: data.email
            });
        });
        });

        this.$appDB
        .collection(`users/${this.uid}/orders`)
        .onSnapshot((qs: QuerySnapshot) => {
        this.orders.splice(0);  // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
            const data = qds.data();
            var currItems = data.name.split(".");
            var currAddr = data.address.split(".");
            if (qds.exists)
                this.orders.push({
                items: data.name,
                addr: data.address,
                card: data.card,
                total: data.price,
            });
        });
        console.log(this.orders)
        if(this.orders.length != 0){
            this.filled = true;
        }
        });
    }
    }





</script>

<style scoped>

h2{
    align-items: center;
    text-align: center;
}
table {
  border:3px solid cornflowerblue;
  border-radius: 1em;
  align-content: center;
  margin: auto;
  padding:1em;
}
td
 {
  font-size: 20px;
  text-align: left;
  font-weight: 300;
}
label{
    font-size: 20px;
    text-align: left;
    font-weight: 300;
}
.details{
    font-size: 20px;
    font-weight: 300;
    text-align: right;
}
td{
    margin-right: 150px;
}
input{
    text-align: right;
}
.buttons{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.text-block {
    white-space: pre;
}
</style>