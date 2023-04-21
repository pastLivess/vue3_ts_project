import type { RouteRecordRaw } from "vue-router";

// 映射路由
export function loadLocalRoutes() {
  // 动态添加路由的功能
  const localRoutes: RouteRecordRaw[] = [];

  // 读取route中main所有文件
  const files: Record<string, any> = import.meta.glob(
    "../router/main/**/*.ts",
    {
      eager: true
    }
  );

  for (const key in files) {
    const module = files[key];
    localRoutes.push(module.default);
    // console.log(module.default);
  }
  return localRoutes;
}

export function mapMenuToRoute(userInfoMenus: any) {
  const localRoutes = loadLocalRoutes();
  const routes = [];
  for (const menu of userInfoMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => {
        return item.path === submenu.url;
      });
      if (route) routes.push(route);
    }
  }
  return routes;
  // console.log(routes);
}
