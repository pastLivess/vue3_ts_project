export function mapMenuListToPermissions(menuList: any) {
  const permissions: string[] = [];
  // 调用
  recurseGetPermissions(menuList);
  function recurseGetPermissions(menus: any[]) {
    // 循环传进来的菜单
    for (const menu of menus) {
      //1 一级菜单 2二级菜单 3 三级菜单 页面中的按钮
      // 如果type等于3表示找到页面中的按钮
      if (menu.type === 3) {
        // permission的就是每个按钮
        permissions.push(menu.permission);
      } else {
        // 如果不3 表示循环的是第一级和第二级菜单,递归调用,且这里给一个[]
        // 不然可能会报错
        recurseGetPermissions(menu.children ?? []);
      }
    }
  }
  return permissions;
}
