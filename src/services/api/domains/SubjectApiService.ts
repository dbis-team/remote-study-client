import { ISubject } from 'types/entities/subject/ISubject';
import { ICreateSubject } from 'types/entities/subject/ICreateSubject';
import { ApiService } from '../ApiService';

class SubjectApiDomainService {
  createSubject(payload: ICreateSubject) {
    return ApiService.getInstance().postJson<ISubject>('/Subject/add', payload);
  }

  getSubjectsByEducationSet(educationSetId: string) {
    return ApiService.getInstance().getJson<ISubject[]>(`/Subject/EducationSet/${educationSetId}`);
  }

  deleteSubject(id: string) {
    return ApiService.getInstance().deleteJson(`/Subject/delete/${id}`);
  }
}

const subjectApiDomainService = new SubjectApiDomainService();

export { subjectApiDomainService };
