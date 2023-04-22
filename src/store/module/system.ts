import { deleteUserById, postUserListData } from "@/service/modules/system";
import { defineStore } from "pinia";
import type { ISystemStore } from "../types";
import type { IdType } from "@/types";

const useSystemStore = defineStore("system", {
  state: (): ISystemStore => ({
    userList: [],
    userTotalCount: 0
  }),
  actions: {
    async fetchUserListAction(formData = { offset: 0, size: 6 }) {
      const userListRes = await postUserListData(formData);
      // console.log(formData);
      const { list, totalCount } = userListRes.data;
      this.userList = list;
      this.userTotalCount = totalCount;
    },
    async fetchDeleteUserAction(id: IdType) {
      await deleteUserById(id);
      this.fetchUserListAction();
    }
  }
});

export default useSystemStore;
