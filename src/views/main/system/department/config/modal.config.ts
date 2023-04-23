const modalConfig = {
  header: {
    newTitle: "新建部门",
    editTitle: "编辑部门"
  },
  propsList: [
    {
      type: "input",
      label: "部门名称",
      prop: "name",
      placeholder: "请输入部门名称"
    },
    {
      type: "input",
      label: "部门领导",
      prop: "leader",
      placeholder: "请输入部门领导"
    },
    {
      type: "select",
      label: "上级领导",
      prop: "parentId",
      placeholder: "请输入上级领导",
      options: [
        {
          label: "财务部",
          value: "111"
        },
        {
          label: "安保部",
          value: "222"
        }
      ]
    }
  ]
};
export default modalConfig;
