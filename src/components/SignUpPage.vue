<template>
  <div id="login">
    <div id = "header"> 
        <h2>Already have an account? <router-link to="/login" replace>Sign in!</router-link> </h2>
    </div> 
  <div>
    <label for="email">Email</label>
    <input type="text" id="usrmail" name="email" v-model="userEmail">

    <label for="pswd">Password</label>
    <input type="password" id="pswd" name="password" v-model="userPswd">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" v-model="fName">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" v-model="lName">

    <label for="userphone">Phone Number</label>
    <input type="tel" id="userphone" name="userphone" v-model="userPhone">
  </div>
  <button :disabled="noInput" @click="createAccount">Create Account</button>
        <div class = "message">
            {{message}}
        </div>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {FirebaseFirestore} from "@firebase/firestore-types";
import {FirebaseAuth, UserCredential} from "@firebase/auth-types"; 
import "firebase/auth";

@Component
export default class SignUpPage extends Vue {
    private message = "";
    private userEmail = "";
    private userPswd = "";
    private fName = "";
    private lName = "";
    private userPhone = "";
    readonly $appAuth!: FirebaseAuth;
    readonly $appDB!: FirebaseFirestore;
    private uid = "none"


    get noInput(): boolean {
        return this.userEmail.length === 0 || this.userPswd.length === 0;
    }
  
    saveUserData(): void {
      this.$appDB
        .collection(`users/${this.uid}/userdata`)
        .add({
          fname: this.fName,
          lname: this.lName,
          phone: this.userPhone,
          email: this.userEmail})
    }
    createAccount(): void {
  this.$appAuth
    .createUserWithEmailAndPassword(this.userEmail, this.userPswd)
    .then((u) => {
      this.showMessage(`User create UID ${u.user?.uid}`);
      this.uid = this.$appAuth.currentUser?.uid ?? "none";
      this.$appDB
        .collection(`users/${this.uid}/userdata`)
        .add({
          fname: this.fName,
          lname: this.lName,
          phone: this.userPhone,
          email: this.userEmail})
      this.$router.push("/user");
    })
    .catch((err: any) => {
      console.log(err);
      this.showMessage(`Unable to create account ${err}`);
    });    
}

    showMessage(m: string): void {
        this.message = m;
        setTimeout(() => {    // Auto disappear after 5 seconds
            this.message = "";
        }, 5000);
    }


}




</script>

<style scoped>
 /* Style inputs */
  input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label{
  font-size: 20px;
  text-align: center;
  font-weight: 300;
}

h2{
    align-items: center;
}

/* Add a background color to the submit button on mouse-over */
button:hover { 
  background-color: #45a049;
} 
</style>