import hyRequest from "..";

export function accountLoginRequest(account: any) {
  console.log(account);

  return hyRequest.post({
    url: "/login",
    data: account
  });
}
