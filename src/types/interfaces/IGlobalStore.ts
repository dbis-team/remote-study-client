import { IUserPartialData } from '../entities/user/IUserData';

export interface IGlobalStore {
    userData: IUserPartialData;
    isUserAuthenticated?: boolean;
}
