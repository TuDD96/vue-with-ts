import { createRouter, createWebHistory } from 'vue-router'
import authToken from "@/utils/token";
import store from "@/store/index";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (authToken.getToken()) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authToken.getToken()) {
      next({
        path: "/login",
      });
    } else {
      store
        .dispatch("Auth/getAuth")
        .then(() => {
          next();
        })
        .catch(() => {
          next("/login");
        });
    }
  } else {
    next();
  }
});

export default router
