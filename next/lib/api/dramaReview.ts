import { apiClient, ApiResponse } from './client';

// === Request DTOs ===
export interface DramaReviewCreateRequest {
  title: string;
  content: string;
  rating: number;
}

export interface DramaReviewUpdateRequest {
  title: string;
  content: string;
  rating: number;
}

// === API Functions ===
export const dramaReviewApi = {
  // 드라마 리뷰 생성
  async createDramaReview(dramaId: number, data: DramaReviewCreateRequest): Promise<ApiResponse<unknown>> {
    return apiClient.post<unknown>(`/api/v1/dramaReviews/${dramaId}/reviews`, data);
  },

  // 드라마 리뷰 수정
  async updateDramaReview(reviewId: number, userId: number, data: DramaReviewUpdateRequest): Promise<ApiResponse<unknown>> {
    return apiClient.put<unknown>(`/api/v1/dramaReviews/reviews/${reviewId}?userId=${userId}`, data);
  },

  // 드라마 리뷰 삭제
  async deleteDramaReview(reviewId: number, userId: number): Promise<ApiResponse<unknown>> {
    return apiClient.delete<unknown>(`/api/v1/dramaReviews/reviews/${reviewId}?userId=${userId}`);
  },
};
