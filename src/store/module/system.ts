import { postUserListData } from "@/service/modules/system";
import { defineStore } from "pinia";
import type { ISystemStore } from "../types";

const useSystemStore = defineStore("system", {
  state: (): ISystemStore => ({
    userList: [],
    userTotalCount: 0
  }),
  actions: {
    async fetchUserListAction(offset = 0, size = 6) {
      const userListRes = await postUserListData(offset, size);
      const { list, totalCount } = userListRes.data;
      this.userList = list;
      this.userTotalCount = totalCount;
    }
  }
});

export default useSystemStore;
