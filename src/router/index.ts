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
      component: () => import("@/views/main/main.vue"),
      children: []
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/not-found/not-found.vue")
    }
  ]
});
const localRoutes = [
  {
    path: "/main/analysis/overview",
    component: () => import("@/views/main/analysis/overview/overview.vue")
  },
  {
    path: "/main/analysis/dashboard",
    component: () => import("@/views/main/analysis/dashboard/dashboard.vue")
  },
  {
    path: "/main/system/department",
    component: () => import("@/views/main/system/department/department.vue")
  },
  {
    path: "/main/system/menu",
    component: () => import("@/views/main/system/menu/menu.vue")
  },
  {
    path: "/main/system/role",
    component: () => import("@/views/main/system/role/role.vue")
  },
  {
    path: "/main/system/user",
    component: () => import("@/views/main/system/user/user.vue")
  },
  {
    path: "/main/product/category",
    component: () => import("@/views/main/product/category/category.vue")
  },
  {
    path: "/main/product/goods",
    component: () => import("@/views/main/product/goods/goods.vue")
  }
];
router.addRoute("main", localRoutes[0]);
router.addRoute("main", localRoutes[1]);
router.addRoute("main", localRoutes[2]);
router.addRoute("main", localRoutes[3]);
router.addRoute("main", localRoutes[4]);
router.addRoute("main", localRoutes[5]);
router.addRoute("main", localRoutes[6]);
router.addRoute("main", localRoutes[7]);

router.beforeEach((to, from, next) => {
  const token = localCache.getCache("token");
  if (!token && to.path === "/main") {
    return "/login";
  }
  next();
});
export default router;
