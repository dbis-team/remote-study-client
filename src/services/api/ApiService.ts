import { Either } from 'helpers/either';
import { IApiError } from 'types/interfaces/IApiError';

export type QueryParams = {[queryParam: string]: string};
export type ApiMethods = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

export interface IApiCallOptions {
  method: ApiMethods; 
  body?: any; 
  headers?: {[header: string]: string}; 
  queryParams?: QueryParams
}

type PickedOptions = Pick<IApiCallOptions, 'queryParams'> & {
  headers?: {[header: string]: string};
};

class ApiService {
  static instance: ApiService;

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  protected apiUrl: string;

  constructor(apiUrl?: string) {
    this.apiUrl = apiUrl || process.env.REACT_APP_CORE_API_URL || 'No url';
  }

  protected queryParamsToQueryString(queryParams: QueryParams): string {
    console.info(queryParams)
    return '?' + Object.keys(queryParams)
      .map((queryParam) => `${queryParam}=${encodeURIComponent(queryParams[queryParam])}`)
      .join('&');
  }

  protected async parseJson(res: Response): Promise<any> {
    try {
      return await res.json();
    } catch (error) {
      return res.body;      
    }
  }

  protected async callJsonApi<T>(path: string, options: IApiCallOptions): Promise<Either<IApiError, T>> {
    try {
      const apiPath = `${this.apiUrl}${path}${options.queryParams ? this.queryParamsToQueryString(options.queryParams) : ''}`;
      const headers = { 'Content-Type': 'application/json' };

      const response = await fetch(apiPath, {
        method: options.method,
        headers: options.headers ? { ...headers, ...options.headers } : headers,
        body: JSON.stringify(options.body),
      });

      const body = await this.parseJson(response);

      return response.ok 
        ? Either.right(body as T) 
        : Either.left(body as IApiError);
    } catch (error) {
      return Either.left(error);
    }
  }

  getJson<T>(path: string, options?: PickedOptions): Promise<Either<IApiError, T>> {
    const callOptions: IApiCallOptions = { method: 'GET' };
    return this.callJsonApi<T>(
      path, 
      options ? { ...callOptions, ...options } : callOptions,
    );
  }

  postJson<T>(path: string, body: any, options?: PickedOptions): Promise<Either<IApiError, T>> {
    const callOptions: IApiCallOptions = { method: 'POST', body };

    return this.callJsonApi<T>(
      path, 
      options ? { ...callOptions, ...options } : callOptions,
    );
  }

  deleteJson<T>(path: string, options?: PickedOptions): Promise<Either<IApiError, T>> {
    const callOptions: IApiCallOptions = { method: 'DELETE' };

    return this.callJsonApi<T>(
      path, 
      options ? { ...callOptions, ...options } : callOptions,
    );
  }

  patchJson<T>(path: string, body: any, options?: PickedOptions): Promise<Either<IApiError, T>> {
    const callOptions: IApiCallOptions = { method: 'PATCH', body };

    return this.callJsonApi<T>(
      path, 
      options ? { ...callOptions, ...options } : callOptions,
    );
  }

  putJson<T>(path: string, body: any, options?: PickedOptions): Promise<Either<IApiError, T>> {
    const callOptions: IApiCallOptions = { method: 'PUT', body };

    return this.callJsonApi<T>(
      path, 
      options ? { ...callOptions, ...options } : callOptions,
    );
  }
}

export { ApiService };
