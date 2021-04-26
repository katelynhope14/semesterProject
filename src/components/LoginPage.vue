<template>
  <div id="login">
    <img id="balloons" src="./photos/party.jpeg">
    <div id = "header"> 
        <h1> KLC Party Store </h1> 
        <h2>Don't have an account? <router-link to="/" replace>Create one!</router-link> </h2>
    </div> 
  <div id = "logInBoxes">
    <label for="email">Email</label>
    <input type="text" id="usrmail" name="email" v-model="userEmail">

    <label for="pswd">Password</label>
    <input type="password" id="pswd" name="password" v-model="userPswd">
    <button id = "signUpBtn" :disabled="noInput" @click="authenticate">Sign In</button>
        <div class = "message">
            {{message}}
        </div>
  </div>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {FirebaseFirestore} from "@firebase/firestore-types";
import {FirebaseAuth, UserCredential} from "@firebase/auth-types"; 
import "firebase/auth";

@Component
export default class LoginPage extends Vue {
    private message = "";
    private userEmail= "";
    private userPswd = "";
    readonly $appAuth!: FirebaseAuth;
    

    get noInput(): boolean {
        return this.userEmail.length === 0 || this.userPswd.length === 0;
    }

    authenticate(): void {
        this.$appAuth
        .signInWithEmailAndPassword(this.userEmail, this.userPswd)
        .then((u: UserCredential) => {
            this.showMessage(`Login successful UID ${u.user?.uid}`);
            this.$router.push({ name: "Main" });
        })
        .catch((err: any) => {
            this.showMessage(`Unable to login ${err}`);
            console.log(err);
        });
        this.$appAuth.setPersistence("SESSION");
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
/* Styles the image */
 #balloons{
  height: 10%;
  width: 100%;
}

 /* Styles the user inputs */
  input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/*Styles KLC title */
h1{
 font-family: Georgia, 'Times New Roman', Times, serif;
 font-size: 85px;
 border:5px solid rgb(248, 209, 158);
 border-radius: .5em;
 color:rgb(175, 175, 175);
 background-color: rgb(250, 195, 122) ;
 position: absolute;
 top: 40%;
 left: 50%;
 transform: translate(-50%, -50%);
}

/* Style the h2 element */ 
h2{
  color: rgb(148, 148, 148);
  background-color: rgb(248, 209, 158);
  border-radius: .2em;
  font-size: 35px;
  align-items: center;
  font-weight: 800;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Styles the Login Boxes */
#logInBoxes{
 font-family: Didot, serif;
  background-color: rgb(250, 223, 255);
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*Styles the Sign Up Button */
#signUpBtn{
  font-family: Didot, serif;
  background-color: rgb(163, 158, 158);
  font-size: 25px;
  color: black;
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Add a background color to the submit button on mouse-over */
#signUpBtn:hover {
  background-color: #45a049;
} 
/*Styles the input box labels */
label{
  font-family: Didot, serif;
  font-size: 22px;
  text-align: center;
  font-weight: 800;
}
</style>