import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuById
} from "@/service/modules/login";
import {
  postDepartmentData,
  postEntireMenus,
  postRoleData
} from "@/service/modules/system";
import { defineStore } from "pinia";
import type { ICcount, IdType } from "@/types";
import { localCache } from "@/utils/cache";
import {
  CACHE_PASSWORD,
  CACHE_TOKEN,
  CACHE_USERINFO,
  CACHE_USERINFO_MENU,
  CACHE_USERNAME
} from "@/global/constants";
import { mapMenuToRoute } from "@/utils/map-menu-to-route";

import router from "@/router";

interface IDepartment {
  createAt: string;
  id: number;
  leader: string;
  name: string;
  parentId: number;
  updateAt: string;
}
interface IRoles {
  createAt: string;
  id: number;
  intro: string;
  menuList: any[];
  name: string;
  updateAt: string;
}
interface ILoginState {
  token: string;
  userInfo: any;
  userInfoMenus: any;
  entireDepartment: IDepartment[];
  entireRoles: IRoles[];
  entireMenus: any[];
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: "",
    userInfo: {},
    userInfoMenus: [],
    entireDepartment: [],
    entireRoles: [],
    entireMenus: []
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
      this.loadLocalCacheAction();
    },
    loadLocalCacheAction() {
      const token = localCache.getCache(CACHE_TOKEN);
      const userInfo = localCache.getCache(CACHE_USERINFO);
      const userInfoMenu = localCache.getCache(CACHE_USERINFO_MENU) ?? [];
      // console.log(userInfoMenu);

      if (token && userInfo && userInfoMenu) {
        this.token = token;
        this.userInfo = userInfo;
        this.userInfoMenus = userInfoMenu;
        this.fetchEntireDataAction();
        this.fetchEntireMenusAction();
      } // 根据权限映射路由的函数
      const routes = mapMenuToRoute(userInfoMenu);
      routes.forEach((route) => router.addRoute("main", route));
    },
    removeLocalCacheAction() {
      localCache.removeCache(CACHE_TOKEN);
      localCache.removeCache(CACHE_PASSWORD);
      localCache.removeCache(CACHE_USERINFO);
      localCache.removeCache(CACHE_USERINFO_MENU);
      router.push("/login");
    },
    async userInfoAction(id: IdType) {
      return await getUserInfoById(id);
    },
    async userInfoMenuAction(id: IdType) {
      return await getUserMenuById(id);
    },
    // 获取用户和部门
    async fetchEntireDataAction() {
      const departmentRes = await postDepartmentData();
      const roleRes = await postRoleData();
      this.entireDepartment = departmentRes.data.list;
      this.entireRoles = roleRes.data.list;
      // console.log(departmentRes, roleRes);
    },
    // 获取完整菜单
    async fetchEntireMenusAction() {
      const entireMenusRes = await postEntireMenus();
      // console.log(entireMenusRes);

      this.entireMenus = entireMenusRes.data.list;
    }
  }
});
export default useLoginStore;
