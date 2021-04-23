<template>
  <div id="login">
    <div id = "header"> 
        <h1> KLC Party Store </h1> 
        <h2>Don't have an account? <router-link to="/" replace>Create one!</router-link> </h2>
    </div> 
  <div>
    <label for="email">Email</label>
    <input type="text" id="usrmail" name="email" v-model="userEmail">

    <label for="pswd">Password</label>
    <input type="password" id="pswd" name="password" v-model="userPswd">
    <button :disabled="noInput" @click="authenticate">Sign In</button>
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

h2{
    align-items: center;
}

/* Add a background color to the submit button on mouse-over */
button:hover {
  background-color: #45a049;
} 
</style>