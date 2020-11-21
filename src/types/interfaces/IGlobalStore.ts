import { IUserPartialData } from './IUserData';

export interface IGlobalStore {
    userData: IUserPartialData;
    isUserAuthenticated?: boolean;
}
