<template>
  <div id="app">
    <h1> KLC Party Store </h1>
    <img alt="Vuelogo" src="./assets/checkoutcart.png">
    <Checkout/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Checkout from './components/Checkout.vue';

@Component({
  components: {
 
    Checkout
  },
})
export default class App extends Vue {



}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
