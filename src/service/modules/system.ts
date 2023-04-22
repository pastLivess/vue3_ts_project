import hyRequest from "..";

export function postUserListData() {
  return hyRequest.post({
    url: "/users/list",
    data: {
      offset: 0,
      size: 10
    }
  });
}
