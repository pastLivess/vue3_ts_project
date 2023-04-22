import {
  deletePageById,
  deleteUserById,
  patchUserById,
  postNewUser,
  postPageListData,
  postUserListData
} from "@/service/modules/system";
import { defineStore } from "pinia";
import type { ISystemStore } from "../types";
import type { IdType } from "@/types";

const useSystemStore = defineStore("system", {
  state: (): ISystemStore => ({
    userList: [],
    userTotalCount: 0,
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async fetchUserListAction(formData: object) {
      const userListRes = await postUserListData({
        offset: 0,
        size: 6,
        ...formData
      });
      // console.log(formData);
      const { list, totalCount } = userListRes.data;
      this.userList = list;
      this.userTotalCount = totalCount;
    },
    async fetchDeleteUserAction(id: IdType) {
      await deleteUserById(id);
      this.fetchUserListAction({ offset: 0, size: 6 });
    },
    // 创建新用户
    async fetchCreateNewUser(formData: object) {
      await postNewUser(formData);
      this.fetchUserListAction({ offset: 0, size: 6 });
    },
    // 编辑用户
    async fetchEditUser(id: IdType, formData: object) {
      await patchUserById(id, formData);
      this.fetchUserListAction({ offset: 0, size: 6 });
    },
    // 重构-所有页面共用的请求
    async fetchPageListAction(pageName: string, formData: object) {
      const pageListRes = await postPageListData(pageName, formData);
      const { totalCount, list } = pageListRes.data;
      this.pageList = list;
      this.pageTotalCount = totalCount;
    },
    async fetchDeletePageAction(
      pageName: string,
      id: number,
      formData = { offset: 0, size: 6 }
    ) {
      await deletePageById(pageName, id);
      this.fetchPageListAction(pageName, formData);
    }
  }
});

export default useSystemStore;
