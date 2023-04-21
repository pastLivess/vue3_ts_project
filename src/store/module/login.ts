import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuById
} from "@/service/modules/login";
import { defineStore } from "pinia";
import type { ICcount, IdType } from "@/types";
import { localCache } from "@/utils/cache";
import {
  CACHE_TOKEN,
  CACHE_USERINFO,
  CACHE_USERINFO_MENU,
  CACHE_USERNAME
} from "@/global/constants";
import { mapMenuToRoute } from "@/utils/map-menu-to-route";

import router from "@/router";
interface ILoginState {
  token: string;
  userInfo: any;
  userInfoMenus: any;
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: localCache.getCache(CACHE_TOKEN) ?? "",
    userInfo: localCache.getCache(CACHE_USERINFO) ?? {},
    userInfoMenus: localCache.getCache(CACHE_USERINFO_MENU) ?? []
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
      localCache.setCache(CACHE_USERINFO, this.userInfo);
      localCache.setCache(CACHE_USERINFO_MENU, this.userInfoMenus);

      // 根据权限映射路由的函数
      const routes = mapMenuToRoute(userinfoMenuRes.data);
      routes.forEach((route) => router.addRoute("main", route));
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
