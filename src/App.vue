<template>
  <div id="app">
    <div id = "header"> 
    <h1> KLC Party Store </h1> 
    </div>
    <router-view></router-view>
    <button v-if="userLoggedIn()" @click="doLogout">Logout</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {FirebaseFirestore} from "@firebase/firestore-types";
import MainPage from './components/MainPage.vue';
import LoginPage from './components/LoginPage.vue';
import SignUpPage from './components/SignUpPage.vue';
import Checkout from './components/Checkout.vue';
import UserPage from './components/UserPage.vue'
import {FirebaseAuth, UserCredential} from "@firebase/auth-types"; 
import "firebase/auth";

@Component({
  components: {
    LoginPage, MainPage, Checkout, SignUpPage, UserPage
  },
})
export default class App extends Vue {

  readonly $appAuth!: FirebaseAuth;
  userLoggedIn(): boolean {
    return this.$appAuth.currentUser?.uid !== undefined;
  }
  doLogout(): void {
    this.$appAuth.signOut();
    this.$router.push("/");    // Go backward in the "history stack"
  }


}
</script>

<style>
#header {
  font-family:  Georgia, serif;
  font-size: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: cornflowerblue;
  margin-top: 60px;
}

img{
  width: 60px;
  height:60px;
}

h1{
color:cornflowerblue
}

</style>
