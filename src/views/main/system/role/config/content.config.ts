const contentConfig = {
  pageName: "role",
  header: {
    title: "角色列表",
    btnTitle: "新建角色"
  },
  propsList: [
    {
      type: "selection",
      label: "选择",
      width: "80px",
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
      label: "角色名称",
      prop: "name",
      width: "80px",
      align: "center"
    },
    {
      type: "normal",
      label: "权限介绍",
      prop: "intro",
      width: "100px",
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
      label: "更新时间",
      prop: "updateAt",
      align: "center"
    },
    {
      type: "handler",
      label: "操作",
      width: "180px",
      align: "center"
    }
  ]
};
export default contentConfig;