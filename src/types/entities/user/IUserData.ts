import { UserRole } from '../../enums/userRole';
export interface IUserData {
  Id: string;
  UserName: string;
  Email: string;
  Role: UserRole;
}

export type IUserPartialData = Partial<IUserData>;
