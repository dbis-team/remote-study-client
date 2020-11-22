import { IUserData } from 'types/entities/user/IUserData';
import { ILoginPayload } from 'types/entities/user/ILoginPayload';
import { ILoginResponsePayload } from 'types/entities/user/ILoginResponse';
import { IRegistrationPayload } from 'types/entities/user/IRegistrationPayload';
import { ApiService } from '../ApiService';

class UserApiDomainService extends ApiService {
  getUsers() {
    return this.getJson<IUserData[]>('/User');
  }

  login(payload: ILoginPayload) {
    return this.postJson<ILoginResponsePayload>('/User/login', payload);
  }

  register(payload: IRegistrationPayload) {
    return this.postJson<any>('/User/register', payload);
  }
}

export { UserApiDomainService };
