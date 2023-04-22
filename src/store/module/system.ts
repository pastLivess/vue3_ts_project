import {
  deletePageById,
  deleteUserById,
  patchPageById,
  patchUserById,
  postCreatePage,
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
    // 删除
    async fetchDeletePageAction(pageName: string, id: number) {
      await deletePageById(pageName, id);
      this.fetchPageListAction(pageName, { offset: 0, size: 6 });
    },
    // 创建
    async fetchCreatePageAction(pageName: string, formData: any) {
      await postCreatePage(pageName, formData);
      this.fetchPageListAction(pageName, { offset: 0, size: 6 });
    },
    // 修改
    async fetchEditPageAction(pageName: string, id: IdType, formData: any) {
      console.log(formData);
      await patchPageById(pageName, id, formData);
      this.fetchPageListAction(pageName, { offset: 0, size: 6 });
    }
  }
});

export default useSystemStore;
