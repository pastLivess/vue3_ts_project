import hyRequest from "..";

export function postUserListData(formData: object) {
  return hyRequest.post({
    url: "/users/list",
    data: formData
  });
}
