import { accountLoginRequest, getUserInfoById } from "@/service/modules/login";
import { defineStore } from "pinia";
import type { ICcount, IdType } from "@/types";
import { localCache } from "@/utils/cache";
import { CACHE_TOKEN, CACHE_USERNAME } from "@/global/constants";

interface ILoginState {
  token: string;
  userInfo: any;
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: localCache.getCache(CACHE_TOKEN) ?? "",
    userInfo: {}
  }),
  actions: {
    async loginAccountAction(account: ICcount) {
      const loginRes = await accountLoginRequest(account);

      const { id, name, token } = loginRes.data;

      this.token = token;
      localCache.setCache(CACHE_TOKEN, this.token);
      localCache.setCache(CACHE_USERNAME, name);
      // 获取权限
      const useInfoRes = await this.UserInfoAction(id);
      this.userInfo = useInfoRes.data;
    },
    async UserInfoAction(id: IdType) {
      return await getUserInfoById(id);
    }
  },
  getters: {}
});
export default useLoginStore;
