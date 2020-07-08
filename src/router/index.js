import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ListingDetails from "@/components/ListingDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dogs/:name",
    name: "ListingDetails",
    component: ListingDetails,
    props: true,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
