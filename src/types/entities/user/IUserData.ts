export interface IUserData {
  Id: string;
  UserName: string;
  Email: string;
  IsSysAdmin: boolean;
}

export type IUserPartialData = Partial<IUserData>;
