const searchConfig = {
  pageName: "role",
  formItems: [
    {
      type: "input",
      prop: "name",
      label: "角色名称",
      placeholder: "请输入要查询的角色名称"
    },
    {
      type: "input",
      prop: "leader",
      label: "权限介绍",
      placeholder: "请输入要查询的权限介绍"
    },
    {
      type: "date-picker",
      prop: "createAt",
      label: "创建时间"
    }
  ]
};
export default searchConfig;
