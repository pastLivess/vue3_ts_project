// 依旧是刚刚的思路 封装成一个函数
export function mapPathToMenu(path: string, userMenus: any[]) {
  // console.log(userMenus)
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (path === submenu.url) {
        return submenu;
      }
    }
  }
}
