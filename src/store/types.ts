export interface IUser {
  cellphone: number;
  createAt: string;
  departmentId: number;
  enable: number;
  id: number;
  name: string;
  realname: string;
  roleId: number;
  updateAt: string;
}
export interface ISystemStore {
  userList: IUser[];
  userTotalCount: number;
}
