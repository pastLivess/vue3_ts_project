import hyRequest from "..";

export function postUserListData(offset: number, size: number) {
  return hyRequest.post({
    url: "/users/list",
    data: {
      offset,
      size
    }
  });
}
