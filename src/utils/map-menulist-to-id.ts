export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = [];
  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children);
      }
      ids.push(item.id);
    }
  }
  recurseGetId(menuList);
  return ids;
}
