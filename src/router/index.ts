import { localCache } from "@/utils/cache";
import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/main",
      component: () => import("@/views/main/main.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/not-found/not-found.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  const token = localCache.getCache("token");
  if (!token && to.path === "/main") {
    return "/login";
  }
  next();
});
export default router;
