import { StorageApiService } from '../StrageApiService';
import { Either } from 'helpers/either';
import { ILearningMaterial } from 'types/entities/learningMaterials/ILearningMaterial';

class LearningMaterialsService {
  static instance: LearningMaterialsService;

  static getInstanse(): LearningMaterialsService {
    if (!LearningMaterialsService.instance) {
      LearningMaterialsService.instance = new LearningMaterialsService();
    }
    return LearningMaterialsService.instance;
  }

  storeLearningMaterials(files: File[]): Promise<Either<any, ILearningMaterial[]>> {
    const formData = new FormData()
    files.forEach(file => {
      formData.append(file.name, file);
    })
    return StorageApiService.getInstance().sendFormData<ILearningMaterial[]>(
      '/learning-materials', 
      formData, 
      { method: 'POST' }
    );
  }
}

export { LearningMaterialsService };
