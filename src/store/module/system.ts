import {
  deleteUserById,
  postDepartmentData,
  postRoleData,
  postUserListData
} from "@/service/modules/system";
import { defineStore } from "pinia";
import type { ISystemStore } from "../types";
import type { IdType } from "@/types";

const useSystemStore = defineStore("system", {
  state: (): ISystemStore => ({
    userList: [],
    userTotalCount: 0,
    entireDepartment: [],
    entireRoles: []
  }),
  actions: {
    async fetchUserListAction(formData = { offset: 0, size: 6 }) {
      const userListRes = await postUserListData(formData);
      // console.log(formData);
      const { list, totalCount } = userListRes.data;
      this.userList = list;
      this.userTotalCount = totalCount;
      this.fetchEntireDataAction();
    },
    async fetchDeleteUserAction(id: IdType) {
      await deleteUserById(id);
      this.fetchUserListAction();
    },
    // 获取用户和部门
    async fetchEntireDataAction() {
      const departmentRes = await postDepartmentData();
      const roleRes = await postRoleData();
      this.entireDepartment = departmentRes.data.list;
      this.entireRoles = roleRes.data.list;
      // console.log(departmentRes, roleRes);
    }
  }
});

export default useSystemStore;
