import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    if (!res.data) {
      throw new Error('API request failed');
    }
    const { status, data } = res;
    if (status === 200) {
      return data;
    }
    throw new Error('API request failed');
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
class APIClient {
  get<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  put<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' });
  }

  delete<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return axiosInstance.request<any, T>(config);
  }
}

export default new APIClient();
