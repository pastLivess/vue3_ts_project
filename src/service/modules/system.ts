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
