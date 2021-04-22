<template>
  <div id="login">
    <div id = "header"> 
        <h1> KLC Party Store </h1> 
    </div> 
    <table class = "userdetails">
        <tbody>
            <tr>
            <td>First Name:</td>
            <div class = "details">{{userData[0].fName}}</div>
            </tr>
            <tr>
                <td>Last Name:</td>
                <div class = "details">{{userData[0].lName}}</div>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <div class = "details">{{userData[0].userPhone}}</div>
            <tr>
                <td>Email:</td>
                <div class = "details">{{userData[0].userEmail}}</div>
            </tr>

        </tbody>
    </table>
    <table class = "userorders">
        <tbody>
        
        </tbody>
    </table>

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
    private userfName;
    private userlName;
    private userPhone;
    private userEmail;
    private userPswd;
    readonly $appDB!: FirebaseFirestore;
    readonly $appAuth!: FirebaseAuth;
    private uid = "none"
    userData: any[] = [];

    // get noInput(): boolean {
    //     return this.userEmail.length === 0 || this.userPswd.length === 0;
    // }
    mounted(): void {
        this.uid = this.$appAuth.currentUser?.uid ?? "none";

        this.$appDB
        .collection(`users/${this.uid}/userdata`)
        .orderBy("fname")       // Sort by category name
        .onSnapshot((qs: QuerySnapshot) => {
        this.userData.splice(0);  // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
            const data = qds.data();
            if (qds.exists)
                this.userData.push({
                fName: data.fname,
                lName: data.lname,
                userPhone: data.phone,
                userEmail: data.email
            });
        });
    });
    }


}




</script>

<style scoped>

h2{
    align-items: center;
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
.details{
    font-size: 20px;
    font-weight: 300;
    text-align: right;
}
</style>