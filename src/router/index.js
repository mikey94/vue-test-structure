import { createRouter, createWebHistory } from "vue-router";

import HelloWorldView from "../components/HelloWorld.vue";
import ContactView from "../components/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "hello",
      component: HelloWorldView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
