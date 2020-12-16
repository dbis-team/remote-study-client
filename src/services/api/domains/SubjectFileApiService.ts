import { ApiService } from '../ApiService';
import { ICreateSubjectFile } from 'types/entities/sybjectFile/ICreateSubjectFile';

class SubjectFileApiDomainService {
  addSubjectFile(payload: ICreateSubjectFile) {
    return ApiService.getInstance().postJson<any>('/Files/Create', payload);
  }
}

const subjectFileApiDomainService = new SubjectFileApiDomainService();

export { subjectFileApiDomainService };
