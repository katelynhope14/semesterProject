<template>
  <div id="app">
    <router-view></router-view>
    <button id="logOut" v-if="userLoggedIn()" @click="doLogout">Logout</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";
import MainPage from "./components/MainPage.vue";
import LoginPage from "./components/LoginPage.vue";
import SignUpPage from "./components/SignUpPage.vue";
import Checkout from "./components/Checkout.vue";
import UserPage from "./components/UserPage.vue";
import { FirebaseAuth, UserCredential } from "@firebase/auth-types";
import "firebase/auth";
@Component({
  components: {
    LoginPage,
    MainPage,
    Checkout,
    SignUpPage,
    UserPage,
  },
})
export default class App extends Vue {
  readonly $appAuth!: FirebaseAuth;
  userLoggedIn(): boolean {
    return this.$appAuth.currentUser?.uid !== undefined;
  }
  doLogout(): void {
    this.$appAuth.signOut();
    this.$router.push("/"); // Go backward in the "history stack"
  }
}
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
}

#logOut {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Didot, serif;
  background-color: rgb(163, 158, 158);
  font-size: 25px;
  color: black;
  font-weight: bold;
  margin-top: 25px;
}
</style>
