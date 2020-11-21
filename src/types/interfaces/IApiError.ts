export interface IApiError {
  type: string;
  title: string;
  status: number;
  traceId: string;
  errors: {[field: string]: string[]};
}
