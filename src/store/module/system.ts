import { postUserListData } from "@/service/modules/system";
import { defineStore } from "pinia";
import type { ISystemStore } from "../types";

const useSystemStore = defineStore("system", {
  state: (): ISystemStore => ({
    userList: [],
    userTotalCount: 0
  }),
  actions: {
    async fetchUserListAction() {
      const userListRes = await postUserListData();
      const { list, totalCount } = userListRes.data;
      this.userList = list;
      this.userTotalCount = totalCount;
    }
  }
});

export default useSystemStore;
