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
export interface IDepartment {
  createAt: string;
  id: number;
  leader: string;
  name: string;
  parentId: number;
  updateAt: string;
}
export interface IRoles {
  createAt: string;
  id: number;
  intro: string;
  menuList: any[];
  name: string;
  updateAt: string;
}
export interface ISystemStore {
  userList: IUser[];
  userTotalCount: number;
  entireDepartment: IDepartment[];
  entireRoles: IRoles[];
}
