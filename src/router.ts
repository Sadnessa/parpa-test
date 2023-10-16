import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../src/pages/MainPage.vue";
import BasketPage from "../src/pages/BasketPage.vue";

const routes = [
  { path: "/", component: MainPage, name: "Home" },
  { path: "/cart/", component: BasketPage, name: "Basket" },
];

const router = createRouter({
  history: createWebHistory("/parpa/"),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
