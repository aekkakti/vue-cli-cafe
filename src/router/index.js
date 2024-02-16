import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import HomeVue from "../components/HomeVue.vue";
import LoginVue from "../components/LoginVue.vue";
import UserVue from "../components/UserVue.vue"
import LogoutVue from "../components/LogoutVue.vue";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginVue,
    beforeEnter: ifNotAuthenticated,
  },
    // Регистрирование новых пользователей в системе
  {
    path: "/user",
    name: "user",
    component: UserVue,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutVue,
    beforeEnter: ifAuthenticated
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
