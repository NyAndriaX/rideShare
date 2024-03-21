import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/constants/app-constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const _get = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => apiClient.get<T>(url, config);

const _delete = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => apiClient.delete<T>(url, config);

const _put = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => apiClient.put<T>(url, data, config);

const _post = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => apiClient.post<T>(url, data, config);

export { _get, _delete, _put, _post };
