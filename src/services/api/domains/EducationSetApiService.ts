import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';
import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { ApiService } from '../ApiService';

class EducationSetApiDomainService {
  createEducationSet(payload: ICreateEducationSet) {
    return ApiService.getInstance().postJson<IEducationSet>('/EducationSet/add', payload);
  };

  getEducationSet() {
    return ApiService.getInstance().getJson<IEducationSet[]>('/EducationSet');
  };

  deleteEducationSet(id:string) {
    return ApiService.getInstance().deleteJson<IEducationSet>(`/EducationSet/delete/${id}`)
  };
}

const educationSetApiDomainService = new EducationSetApiDomainService();

export { educationSetApiDomainService };
