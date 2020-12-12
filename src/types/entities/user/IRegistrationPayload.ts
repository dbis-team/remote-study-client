import { UserRole } from '../../enums/userRole';
export interface IRegistrationPayload {
  email: string;
  password: string;
  userName: string; 
  role: UserRole 
}
