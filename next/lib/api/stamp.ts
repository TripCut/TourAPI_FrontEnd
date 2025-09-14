import { apiClient, ApiResponse } from './client';
import { PageableObject, SortObject, Pageable } from './types';

// === Request DTOs ===
export interface StampDto {
  collectedAt: string;
  stampImage: string;
  stampType: string;
  stampDescription: string;
  stampPoints: number;
  locationId: number;
  locationName: string;
  userId: number;
  userUsername: string;
  isLocationValidated: boolean;
  userLatitude: number;
  userLongitude: number;
  locationLatitude: number;
  locationLongitude: number;
}

// === Response DTOs ===
export interface PageStampDto {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: StampDto[];
  number: number;
  sort: SortObject[];
  pageable: PageableObject;
  numberOfElements: number;
  empty: boolean;
}


// === API Functions ===
export const stampApi = {
  // 스탬프 수집
  async collectStamp(data: StampDto): Promise<ApiResponse<StampDto>> {
    return apiClient.post<StampDto>('/api/v1/stamps', data);
  },

  // 내 최근 스탬프 조회
  async getMyRecentStamps(limit = 10): Promise<ApiResponse<StampDto[]>> {
    return apiClient.get<StampDto[]>(`/api/v1/stamps/me/recent?limit=${limit}`);
  },

  // 내 총 포인트 조회
  async getMyTotalPoints(): Promise<ApiResponse<number>> {
    return apiClient.get<number>('/api/v1/stamps/me/points/total');
  },

  // 특정 촬영지의 내 스탬프 목록 조회
  async getMyStampsByLocation(filmingLocationId: number, pageable: Pageable): Promise<ApiResponse<PageStampDto>> {
    return apiClient.get<PageStampDto>(`/api/v1/stamps/me/locations/${filmingLocationId}`, { params: { pageable } });
  },

  // 특정 드라마의 내 스탬프 목록 조회
  async getMyStampsByDrama(dramaId: number): Promise<ApiResponse<StampDto[]>> {
    return apiClient.get<StampDto[]>(`/api/v1/stamps/me/dramas/${dramaId}`);
  },

  // 특정 드라마의 내 스탬프 개수 조회
  async getMyStampCountByDrama(dramaId: number): Promise<ApiResponse<number>> {
    return apiClient.get<number>(`/api/v1/stamps/me/dramas/${dramaId}/count`);
  },

  // 특정 촬영지의 모든 스탬프 목록 조회
  async getStampsByLocation(filmingLocationId: number, pageable: Pageable): Promise<ApiResponse<PageStampDto>> {
    return apiClient.get<PageStampDto>(`/api/v1/stamps/locations/${filmingLocationId}`, { params: { pageable } });
  },
};
