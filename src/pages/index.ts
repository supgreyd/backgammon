export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./home/index.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("./auth/index.vue"),
  },
];
