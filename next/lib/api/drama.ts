import { apiClient, ApiResponse } from './client';
import { PageableObject, SortObject } from './types';

// === Request DTOs ===
export interface DramaCreateRequest {
  title: string;
  description: string;
  genre: string;
  broadcastYear: string;
  broadcastStation: string;
  filmingLocations: FilmingLocationPayload[];
  tags: string[];
}

export interface DramaUpdateRequest {
  title: string;
  description: string;
  genre: string;
  broadcastYear: string;
  broadcastStation: string;
  filmingLocations: FilmingLocationPayload[];
  tags: string[];
}

export interface FilmingLocationPayload {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

// === Response DTOs ===
export interface DramaDto {
  id: number;
  title: string;
  description: string;
  genre: string;
  broadcastYear: string;
  broadcastStation: string;
  averageRating: number;
  reviewCount: number;
  filmingLocationNames: string[];
  tags: string[];
}

export interface PageDramaDto {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: DramaDto[];
  number: number;
  sort: SortObject[];
  pageable: PageableObject;
  numberOfElements: number;
  empty: boolean;
}


// === API Functions ===
export const dramaApi = {
  // 드라마 목록 조회
  async getDramas(params?: {
    page?: number;
    size?: number;
    sort?: string;
  }): Promise<ApiResponse<PageDramaDto>> {
    return apiClient.get<PageDramaDto>('/api/v1/dramas', { params });
  },

  // 드라마 상세 조회
  async getDrama(id: number): Promise<ApiResponse<DramaDto>> {
    return apiClient.get<DramaDto>(`/api/v1/dramas/${id}`);
  },

  // 드라마 생성
  async createDrama(data: DramaCreateRequest): Promise<ApiResponse<DramaDto>> {
    return apiClient.post<DramaDto>('/api/v1/dramas', data);
  },

  // 드라마 수정
  async updateDrama(id: number, data: DramaUpdateRequest): Promise<ApiResponse<DramaDto>> {
    return apiClient.put<DramaDto>(`/api/v1/dramas/${id}`, data);
  },

  // 드라마 삭제
  async deleteDrama(id: number): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/api/v1/dramas/${id}`);
  },
};
