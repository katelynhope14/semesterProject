import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Checkout from "./components/Checkout.vue";
import MainPage from "./components/MainPage.vue";
import UserPage from "./components/UserPage.vue";
import LoginPage from "./components/LoginPage.vue";
import SignUpPage from "./components/SignUpPage.vue";
Vue.use(VueRouter);

const myRoutes: Array<RouteConfig> = [
  {
    name: "SignUp",
    path: "/",
    component: SignUpPage,
  },
  
  {
    name: "Main",
    path: "/main",
    component: MainPage,
  },
  {
    name: "Checkout",
    path: "/checkout",
    component: Checkout,
  },
  {
    name: "User",
    path: "/user",
    component: UserPage,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
  },
];

export const AppRouter = new VueRouter({ 
  routes: myRoutes, 
  mode: "history" 
}); 