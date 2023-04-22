const searchConfig = {
  formItems: [
    {
      type: "input",
      prop: "name",
      label: "部门名称",
      placeholder: "请输入要查询的部门名称"
    },
    {
      type: "input",
      prop: "leader",
      label: "部门领导",
      placeholder: "请输入要查询的部门领导"
    },
    {
      type: "data-picker",
      prop: "createAt",
      label: "创建时间"
    }
  ]
};
export default searchConfig;
