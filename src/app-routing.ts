import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Checkout from "./components/Checkout.vue";
import MainPage from "./components/MainPage.vue";
Vue.use(VueRouter);

const myRoutes: Array<RouteConfig> = [
  {
    name: "Main",
    path: "/main",
    component: MainPage,
  },
  {
    name: "Checkout",
    path: "/checkout",
    component: Checkout,
    props: true,
  },
];

export const AppRouter = new VueRouter({ 
  routes: myRoutes, 
  mode: "history" 
}); 