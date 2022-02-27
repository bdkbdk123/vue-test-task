import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("@/views/EditView.vue"),
      props: (route) => ({
        person: { ...route.params },
      }),
    },
  ],
});

export default router;
