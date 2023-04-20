import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuById
} from "@/service/modules/login";
import { defineStore } from "pinia";
import type { ICcount, IdType } from "@/types";
import { localCache } from "@/utils/cache";
import { CACHE_TOKEN, CACHE_USERNAME } from "@/global/constants";

interface ILoginState {
  token: string;
  userInfo: any;
  userInfoMenus: any;
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: localCache.getCache(CACHE_TOKEN) ?? "",
    userInfo: {},
    userInfoMenus: []
  }),
  actions: {
    async loginAccountAction(account: ICcount) {
      const loginRes = await accountLoginRequest(account);

      const { id, name, token } = loginRes.data;

      this.token = token;
      localCache.setCache(CACHE_TOKEN, this.token);
      localCache.setCache(CACHE_USERNAME, name);
      // 获取用户信息与菜单(权限菜单)
      const userInfoRes = await this.userInfoAction(id);
      const userinfoMenuRes = await this.userInfoMenuAction(id);
      this.userInfo = userInfoRes.data;
      this.userInfoMenus = userinfoMenuRes.data;
    },
    async userInfoAction(id: IdType) {
      return await getUserInfoById(id);
    },
    async userInfoMenuAction(id: IdType) {
      return await getUserMenuById(id);
    }
  },
  getters: {}
});
export default useLoginStore;
