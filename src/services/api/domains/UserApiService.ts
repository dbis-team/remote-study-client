import { IUserData } from 'types/entities/user/IUserData';
import { ILoginPayload } from 'types/entities/user/ILoginPayload';
import { ILoginResponsePayload } from 'types/entities/user/ILoginResponse';
import { IRegistrationPayload } from 'types/entities/user/IRegistrationPayload';
import { IConfirmEmailPayload } from 'types/entities/user/IConfirmEmailPayload';
import { ApiService } from '../ApiService';

class UserApiDomainService {
  getUsers() {
    return ApiService.getInstance().getJson<IUserData[]>('/User');
  }

  login(payload: ILoginPayload) {
    return ApiService.getInstance().postJson<ILoginResponsePayload>('/User/login', payload);
  }

  register(payload: IRegistrationPayload) {
    return ApiService.getInstance().postJson<any>('/User/register', payload);
  }

  confirmEmail({ userId, code }: IConfirmEmailPayload) {
    return ApiService.getInstance().getJson<any>('/User/ConfirmEmail', {
      queryParams: { userId, code }
    });
  }
}

const userApiDomainService = new UserApiDomainService();

export { userApiDomainService };
