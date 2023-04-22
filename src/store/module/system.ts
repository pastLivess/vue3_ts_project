import { postUserListData } from "@/service/modules/system";
import { defineStore } from "pinia";
import type { ISystemStore } from "../types";

const useSystemStore = defineStore("system", {
  state: (): ISystemStore => ({
    userList: [],
    userTotalCount: 0
  }),
  actions: {
    async fetchUserListAction(formData: object) {
      const userListRes = await postUserListData(formData);
      console.log(formData);
      const { list, totalCount } = userListRes.data;
      this.userList = list;
      this.userTotalCount = totalCount;
    }
  }
});

export default useSystemStore;
