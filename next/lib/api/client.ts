import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = API_BASE_URL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 요청 인터셉터
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // 요청 전 로깅 등
        console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 성공 응답 처리
        return response;
      },
      (error) => {
        // 에러 응답 처리
        if (error.response) {
          // 서버에서 응답을 받았지만 에러 상태
          const { status, data } = error.response;
          throw {
            message: data?.message || '요청 처리 중 오류가 발생했습니다.',
            status,
            code: data?.code,
          } as ApiError;
        } else if (error.request) {
          // 요청은 보냈지만 응답을 받지 못함
          throw {
            message: '네트워크 연결을 확인해주세요.',
            status: 0,
          } as ApiError;
        } else {
          // 요청 설정 중 오류
          throw {
            message: '요청 설정 중 오류가 발생했습니다.',
            status: 0,
          } as ApiError;
        }
      }
    );
  }

  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.request<T>(config);
      const data = response.data as Record<string, unknown>;

      return {
        success: true,
        data: (data.data as T) || (data as T),
        message: data.message as string,
      };
    } catch (error) {
      throw error;
    }
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'GET', url: endpoint });
  }

  async post<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'POST', url: endpoint, data });
  }

  async put<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'PUT', url: endpoint, data });
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'DELETE', url: endpoint });
  }

  setAuthToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  removeAuthToken() {
    delete this.axiosInstance.defaults.headers.common['Authorization'];
  }

  // axios 인스턴스 직접 접근 (고급 사용)
  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export const apiClient = new ApiClient();
