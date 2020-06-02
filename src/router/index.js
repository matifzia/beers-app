import Vue from "vue";
import VueRouter from "vue-router";
import BeersList from "../components/BeersList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "beersList",
    component: BeersList
  },
  {
    path: "/details",
    name: "bearDetails",
    component: () => import("../components/BeerDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
