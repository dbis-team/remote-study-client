import { ApiService } from '../ApiService';
import { ICreateSubjectFile } from 'types/entities/sybjectFile/ICreateSubjectFile';
import { ISubjectFile } from 'types/entities/sybjectFile/ISubjectFile';

class SubjectFileApiDomainService {
  addSubjectFile(payload: ICreateSubjectFile) {
    return ApiService.getInstance().postJson<any>('/Files/Create', payload);
  }

  getFilesBySubjectId(subjectId: string) {
    return ApiService.getInstance().getJson<ISubjectFile[]>(`/Files/Subject/${subjectId}`);
  }
}

const subjectFileApiDomainService = new SubjectFileApiDomainService();

export { subjectFileApiDomainService };
