import { accountLoginRequest } from "@/service/modules/login";
import { defineStore } from "pinia";
import type { ICcount } from "@/types";
import { localCache } from "@/utils/cache";
const useLoginStore = defineStore("login", {
  state: () => ({
    id: "",
    name: "",
    token: localCache.getCache("token") ?? ""
  }),
  actions: {
    async loginAccountAction(account: ICcount) {
      const loginRes = await accountLoginRequest(account);

      const { id, name, token } = loginRes.data;
      this.id = id;
      this.name = name;
      this.token = token;
      localCache.setCache("token", this.token);
    }
  },
  getters: {}
});
export default useLoginStore;
