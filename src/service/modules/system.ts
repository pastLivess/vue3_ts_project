import type { IdType } from "@/types";
import hyRequest from "..";

export function postUserListData(formData: object) {
  return hyRequest.post({
    url: "/users/list",
    data: formData
  });
}

export function deleteUserById(id: IdType) {
  return hyRequest.delete({
    url: `/users/${id}`
  });
}

// 获取部门的信息
export function postDepartmentData() {
  return hyRequest.post({
    url: "department/list",
    data: {
      offset: 0,
      size: 100
    }
  });
}
// 创建部门
export function postCreateDepartment(formData: object) {
  return hyRequest.post({
    url: "/department",
    data: formData
  });
}
// 获取角色数据
export function postRoleData() {
  return hyRequest.post({
    url: "/role/list",
    data: {
      offset: 0,
      size: 100
    }
  });
}
// 创建用户
export function postNewUser(formData: object) {
  return hyRequest.post({
    url: "/users",
    data: formData
  });
}
// 编辑用户
export function patchUserById(id: IdType, formData: object) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: formData
  });
}

// 针对全部页面重构的网络请求
export function postPageListData(pageName: string, formData: object) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data: formData
  });
}
export function deletePageById(pageName: string, id: IdType) {
  return hyRequest.delete({
    url: `/${pageName}/${id}`
  });
}
export function postCreatePage(pageName: string, formData: object) {
  return hyRequest.post({
    url: `/${pageName}`,
    data: formData
  });
}
// 修改
export function patchPageById(pageName: string, id: IdType, formData: object) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: formData
  });
}

// 完整的菜单
export function postEntireMenus() {
  return hyRequest.post({
    url: "/menu/list"
  });
}
