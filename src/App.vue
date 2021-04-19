<template>
  <div id="app">
    <div id = "header"> 
    <h1> KLC Party Store </h1> 
    </div>
    <main-page></main-page>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {FirebaseFirestore} from "@firebase/firestore-types";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import MainPage from './components/MainPage.vue';

@Component({
  components: {
    MainPage,
  },
})
export default class App extends Vue {}
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
</style>
