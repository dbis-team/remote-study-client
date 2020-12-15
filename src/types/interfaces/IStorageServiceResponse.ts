export interface IStorageServiceResponse<T = any> {
  payload: T,
  success: boolean,
  errorMessage: string
}
