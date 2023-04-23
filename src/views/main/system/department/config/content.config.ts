const contentConfig = {
  header: {
    title: "部门列表",
    btnTitle: "新建部门"
  },
  propsList: [
    {
      type: "selection",
      label: "选择",
      width: "60px",
      align: "center"
    },
    {
      type: "index",
      label: "序号",
      width: "80px",
      align: "center"
    },
    {
      type: "normal",
      label: "部门名称",
      prop: "name",
      width: "150px",
      align: "center"
    },
    {
      type: "custom",
      label: "部门领导",
      prop: "leader",
      width: "150px",
      align: "center",
      slotName: "leader"
    },
    {
      type: "custom",
      label: "上级部门",
      prop: "parentId",
      width: "150px",
      align: "center",
      slotName: "parent"
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
      align: "center"
    }
  ]
};
export default contentConfig;
