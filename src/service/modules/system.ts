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
