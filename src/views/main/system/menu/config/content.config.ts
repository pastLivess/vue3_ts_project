const contentConfig = {
  pageName: "menu",
  header: {
    title: "菜单列表",
    btnTitle: "新建菜单"
  },
  propsList: [
    {
      label: "菜单名称",
      prop: "name",
      width: "150px",
      align: "center"
    },
    {
      type: "normal",
      label: "级别",
      prop: "type",
      width: "100px",
      align: "center"
    },
    {
      type: "normal",
      label: "菜单url",
      prop: "url",
      width: "150px",
      align: "center"
    },
    {
      type: "normal",
      label: "菜单icon",
      prop: "icon",
      width: "150px",
      align: "center"
    },
    {
      type: "normal",
      label: "排序",
      prop: "sort",
      width: "80px",
      align: "center"
    },
    {
      type: "normal",
      label: "权限",
      prop: "permission",
      width: "80px",
      align: "center"
    },
    {
      type: "timer",
      label: "创建时间",
      prop: "createAt",
      align: "center"
    },
    {
      type: "timer",
      label: "创建时间",
      prop: "updateAt",
      align: "center"
    },
    {
      type: "handler",
      label: "操作",
      width: "180px",
      align: "center"
    }
  ],
  childrenTree: {
    rowKey: "id",
    treeProps: {
      children: "children"
    }
  }
};
export default contentConfig;
