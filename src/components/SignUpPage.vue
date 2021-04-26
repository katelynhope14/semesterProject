<template>
  <div id="login">
    <img id="balloons" src="./photos/party.jpeg" />
    <div id="header">
      <h1>KLC Party Store</h1>
      <h2>
        Already have an account?
        <router-link to="/login" replace>Sign in!</router-link>
      </h2>
    </div>
    <div id="boxes">
      <label for="email">Email</label>
      <input type="text" id="usrmail" name="email" v-model="userEmail" />

      <label for="pswd">Password</label>
      <input type="password" id="pswd" name="password" v-model="userPswd" />

      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" v-model="fName" />

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" v-model="lName" />

      <label for="userphone">Phone Number</label>
      <input type="tel" id="userphone" name="userphone" v-model="userPhone" />
    </div>

    <button id="createAct" :disabled="noInput" @click="createAccount">
      Create Account
    </button>
    <div class="message">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";
import { FirebaseAuth, UserCredential } from "@firebase/auth-types";
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
  private uid = "none";

  get noInput(): boolean {
    return this.userEmail.length === 0 || this.userPswd.length === 0;
  }

  saveUserData(): void {
    this.$appDB.collection(`users/${this.uid}/userdata`).add({
      fname: this.fName,
      lname: this.lName,
      phone: this.userPhone,
      email: this.userEmail,
    });
  }
  createAccount(): void {
    this.$appAuth
      .createUserWithEmailAndPassword(this.userEmail, this.userPswd)
      .then((u) => {
        this.showMessage(`User create UID ${u.user?.uid}`);
        this.uid = this.$appAuth.currentUser?.uid ?? "none";
        this.$appDB.collection(`users/${this.uid}/userdata`).add({
          fname: this.fName,
          lname: this.lName,
          phone: this.userPhone,
          email: this.userEmail,
        });
        this.$router.push("/user");
      })
      .catch((err: any) => {
        console.log(err);
        this.showMessage(`Unable to create account ${err}`);
      });
  }

  showMessage(m: string): void {
    this.message = m;
    setTimeout(() => {
      // Auto disappear after 5 seconds
      this.message = "";
    }, 5000);
  }
}
</script>

<style scoped>
#balloons {
  height: 10%;
  width: 100%;
}
/*Styles KLC Party Store */
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 85px;
  border: 5px solid rgb(248, 209, 158);
  border-radius: 0.5em;
  color: rgb(175, 175, 175);
  background-color: rgb(250, 195, 122);
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*Styles the h2 element */
h2 {
  color: rgb(148, 148, 148);
  background-color: rgb(248, 209, 158);
  border-radius: 0.2em;
  font-size: 35px;
  align-items: center;
  font-weight: 800;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*Styles the borded around the input boxes */
#boxes {
  background-color: rgb(250, 223, 255);
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/*Styles the label of the input boxes */
label {
  font-family: Didot, serif;
  font-size: 22px;
  text-align: center;
  font-weight: 800;
}
/* Styles user inputs */
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
}

/*Styles the Create Account button */
#createAct {
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Didot, serif;
  background-color: rgb(163, 158, 158);
  font-size: 25px;
  color: black;
}
/* Add a background color to the submit button on mouse-over */
#createAct:hover {
  background-color: #45a049;
}
</style>
