import { createRouter, createWebHistory } from "vue-router";

import TestName from "../components/TestName.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/test",
    component: TestName,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
