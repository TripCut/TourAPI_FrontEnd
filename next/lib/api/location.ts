import { apiClient, ApiResponse } from './client';
import { PageableObject, SortObject, Pageable } from './types';

// === Request DTOs ===
export interface FilmingLocationCreateRequest {
  name: string;
  address: string;
  description: string;
  sceneDescription: string;
  lat: number;
  lng: number;
  dramaId: number;
  images: string[];
  tags: string[];
}

export interface FilmingLocationUpdateRequest {
  name: string;
  address: string;
  description: string;
  sceneDescription: string;
  lat: number;
  lng: number;
  dramaId: number;
  images: string[];
  tags: string[];
}

export interface LocationReviewCreateRequest {
  title: string;
  content: string;
  rating: number;
}

export interface LocationReviewUpdateRequest {
  title: string;
  content: string;
  rating: number;
}

// === Response DTOs ===
export interface FilmingLocationDto {
  name: string;
  address: string;
  description: string;
  sceneDescription: string;
  lat: number;
  lng: number;
  dramaId: number;
  dramaTitle: string;
  images: string[];
  tags: string[];
}

export interface LocationReviewDto {
  id: number;
  locationId: number;
  userId: number;
  userUsername: string;
  title: string;
  content: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface PageFilmingLocationDto {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: FilmingLocationDto[];
  number: number;
  sort: SortObject[];
  pageable: PageableObject;
  numberOfElements: number;
  empty: boolean;
}

export interface PageLocationReviewDto {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: LocationReviewDto[];
  number: number;
  sort: SortObject[];
  pageable: PageableObject;
  numberOfElements: number;
  empty: boolean;
}


// === API Functions ===
export const locationApi = {
  // 촬영지 목록 조회
  async getFilmingLocations(params: {
    dramaId?: number;
    keyword?: string;
    tag?: string;
    pageable: Pageable;
  }): Promise<ApiResponse<PageFilmingLocationDto>> {
    return apiClient.get<PageFilmingLocationDto>('/api/v1/filmingLocation', { params });
  },

  // 촬영지 상세 조회
  async getFilmingLocation(id: number): Promise<ApiResponse<FilmingLocationDto>> {
    return apiClient.get<FilmingLocationDto>(`/api/v1/filmingLocation/${id}`);
  },

  // 촬영지 생성
  async createFilmingLocation(data: FilmingLocationCreateRequest): Promise<ApiResponse<FilmingLocationDto>> {
    return apiClient.post<FilmingLocationDto>('/api/v1/filmingLocation', data);
  },

  // 촬영지 수정
  async updateFilmingLocation(id: number, data: FilmingLocationUpdateRequest): Promise<ApiResponse<FilmingLocationDto>> {
    return apiClient.put<FilmingLocationDto>(`/api/v1/filmingLocation/${id}`, data);
  },

  // 촬영지 삭제
  async deleteFilmingLocation(id: number): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/api/v1/filmingLocation/${id}`);
  },

  // 촬영지 리뷰 목록 조회
  async getLocationReviews(locationId: number, pageable: Pageable): Promise<ApiResponse<PageLocationReviewDto>> {
    return apiClient.get<PageLocationReviewDto>(`/api/v1/locations/${locationId}/reviews`, { params: { pageable } });
  },

  // 촬영지 리뷰 생성
  async createLocationReview(locationId: number, data: LocationReviewCreateRequest): Promise<ApiResponse<LocationReviewDto>> {
    return apiClient.post<LocationReviewDto>(`/api/v1/locations/${locationId}/reviews`, data);
  },

  // 촬영지 리뷰 상세 조회
  async getLocationReview(reviewId: number): Promise<ApiResponse<LocationReviewDto>> {
    return apiClient.get<LocationReviewDto>(`/api/v1/locations/reviews/${reviewId}`);
  },

  // 촬영지 리뷰 수정
  async updateLocationReview(reviewId: number, data: LocationReviewUpdateRequest): Promise<ApiResponse<LocationReviewDto>> {
    return apiClient.put<LocationReviewDto>(`/api/v1/locations/reviews/${reviewId}`, data);
  },

  // 촬영지 리뷰 삭제
  async deleteLocationReview(reviewId: number): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/api/v1/locations/reviews/${reviewId}`);
  },

  // 내 촬영지 리뷰 목록 조회
  async getMyLocationReviews(pageable: Pageable): Promise<ApiResponse<PageLocationReviewDto>> {
    return apiClient.get<PageLocationReviewDto>('/api/v1/locations/reviews/me', { params: { pageable } });
  },
};
