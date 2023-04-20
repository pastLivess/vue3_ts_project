import type { ICcount, IdType } from "@/types";
import hyRequest from "..";

export function accountLoginRequest(account: ICcount) {
  return hyRequest.post({
    url: "/login",
    data: account
  });
}

export function getUserInfoById(id: IdType) {
  return hyRequest.get({
    url: `/users/${id}`
  });
}

export function getUserMenuById(id: IdType) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  });
}
