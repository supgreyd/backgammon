export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./home"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("./auth"),
  },
];
