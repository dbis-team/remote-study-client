import { ApiService, IApiCallOptions } from './ApiService';
import { Either } from 'helpers/either';
import { IStorageServiceResponse } from 'types/interfaces/IStorageServiceResponse';

class StorageApiService extends ApiService {
  static instance: StorageApiService;

  static getInstance(): StorageApiService {
    if (!StorageApiService.instance) {
      StorageApiService.instance = new StorageApiService();
    }
    return StorageApiService.instance;
  }

  constructor() {
    super(process.env.REACT_APP_STORE_SERVICE_URL);
  }

  async sendFormData<T>(path: string, formData: FormData, options: Omit<IApiCallOptions, 'body'>): Promise<Either<any, T>> {
    try {
      const apiPath = `${this.apiUrl}${path}${options.queryParams ? this.queryParamsToQueryString(options.queryParams) : ''}`;
  
      const response = await fetch(apiPath, {
        method: options.method,
        headers: options.headers || {},
        body: formData
      });
  
      const body: IStorageServiceResponse<T> = await this.parseJson(response);
  
      return response.ok 
        ? Either.right(body.payload) 
        : Either.left(body as any);
    } catch (error) {
      return Either.left(error);
    }
  }
}

export { StorageApiService };
