<template>
  <div id="app">
<<<<<<< HEAD
    <div id = "header"> 
    <h1> KLC Party Store </h1> 
    </div>
    <main-page></main-page>
=======
    <h1> KLC Party Store </h1>
    <img alt="Vuelogo" src="./assets/checkoutcart.png">
    <Checkout/>
>>>>>>> origin/laurasbranch
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
<<<<<<< HEAD
import {FirebaseFirestore} from "@firebase/firestore-types";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import MainPage from './components/MainPage.vue';

@Component({
  components: {
    MainPage,
=======

import Checkout from './components/Checkout.vue';

@Component({
  components: {
 
    Checkout
>>>>>>> origin/laurasbranch
  },
})
export default class App extends Vue {



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
