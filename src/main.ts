import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";
import { AppRouter } from "./app-routing";

const firebaseConfig = {
  apiKey: "AIzaSyBxFX3Rou7Tc1zUk0fLw6RnPw1AS0oURXQ",
  authDomain: "semesterproj-987a9.firebaseapp.com",
  projectId: "semesterproj-987a9",
  storageBucket: "semesterproj-987a9.appspot.com",
  messagingSenderId: "628072017066",
  appId: "1:628072017066:web:5290270b155ed80fdfb4d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$appDB = firebase.firestore();

Vue.prototype.$appAuth = firebase.auth();


Vue.config.productionTip = false

new Vue({
  router: AppRouter,
  render: h => h(App),
}).$mount('#app')
