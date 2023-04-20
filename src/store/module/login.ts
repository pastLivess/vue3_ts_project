import { accountLoginRequest } from "@/service/modules/login";
import { defineStore } from "pinia";
import type { ICcount } from "@/types";
import { localCache } from "@/utils/cache";
import { CACHE_TOKEN, CACHE_USERNAME } from "@/global/constants";
const useLoginStore = defineStore("login", {
  state: () => ({
    id: "",
    name: "",
    token: localCache.getCache(CACHE_TOKEN) ?? ""
  }),
  actions: {
    async loginAccountAction(account: ICcount) {
      const loginRes = await accountLoginRequest(account);
      if (loginRes.code === 0) {
        const { id, name, token } = loginRes.data;
        this.id = id;
        this.name = name;
        this.token = token;
        localCache.setCache(CACHE_TOKEN, this.token);
        localCache.setCache(CACHE_USERNAME, this.name);
        return 0;
      } else {
        return Promise.reject(new Error(loginRes.response.data));
      }
    }
  },
  getters: {}
});
export default useLoginStore;
