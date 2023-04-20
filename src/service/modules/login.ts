import type { ICcount } from "@/types";
import hyRequest from "..";

export function accountLoginRequest(account: ICcount) {
  return hyRequest.post({
    url: "/login",
    data: account
  });
}
