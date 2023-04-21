import { CACHE_TOKEN } from "@/global/constants";
import { localCache } from "@/utils/cache";
import { firstMenu } from "@/utils/map-menu-to-route";
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
      name: "main",
      path: "/main",
      component: () => import("@/views/main/main.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/not-found/not-found.vue")
    }
  ]
});

router.beforeEach((to) => {
  const token = localCache.getCache(CACHE_TOKEN);
  if (!token && to.path.startsWith("/main")) {
    return "/login";
  }
  if (to.path === "/main") {
    return firstMenu?.url;
  }
});
export default router;
