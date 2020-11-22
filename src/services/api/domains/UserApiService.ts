import { IUserData } from 'types/interfaces/IUserData';
import { ApiService } from '../ApiService';

class UserApiDomainService extends ApiService {
  async getUsers() {
    return this.getJson<IUserData[]>('/User');
  }
}

export { UserApiDomainService };
