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
    {
      path: "/not-found",
      name: "not-found",
      component: () => import("@/views/errors/NotFoundView.vue"),
    },
    {
      path: "/server-error",
      name: "server-error",
      component: () => import("@/views/errors/ServerErrorView.vue"),
    },
  ],
});

export default router;
