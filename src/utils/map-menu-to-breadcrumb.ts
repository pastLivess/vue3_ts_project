export function mapPathToBreadcrumbs(path: string, userinfoMenu: any[]) {
  const breadcrumbs: any[] = [];
  for (const menu of userinfoMenu) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        const { url } = menu.children[0];

        breadcrumbs.push({
          id: menu.id,
          name: menu.name,
          path: url
        });
        breadcrumbs.push({
          id: submenu.id,
          name: submenu.name,
          path: submenu.url
        });
      }
    }
  }
  return breadcrumbs;
}
