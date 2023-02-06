import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path: "/",
        name: "Users",
        component: () => import("./components/Users"),
    },
    {
        path: "/user/:id",
        name: "User",
        component: () => import("./components/User"),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;