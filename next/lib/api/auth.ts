import { apiClient, ApiResponse } from './client';

// === Request DTOs ===
export interface LoginDto {
  memberId: string;
  memberPw: string;
}

export interface MemberDto {
  memberId: string;
  memberPw: string;
  name: string;
  email: string;
  role?: string;
  preferredLanguage?: string;
  preferredGenres?: string[];
  badges?: string[];
  authorities?: string[];
}

// === Response DTOs ===
export interface JoinResultDTO {
  userId: number;
  name: string;
  email: string;
  createAt: string;
}

export interface LoginResponse {
  user: JoinResultDTO;
  accessToken: string;
  refreshToken: string;
  firstLogin: boolean;
}

export interface BaseResponseLoginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: LoginResponse;
}

export interface TokenDto {
  accessToken: string;
  refreshToken: string;
}

// === API Functions ===
export const authApi = {
  // 일반 로그인
  async login(credentials: LoginDto): Promise<ApiResponse<TokenDto>> {
    return apiClient.post<TokenDto>('/api/v1/member/login', credentials);
  },

  // 회원가입
  async signup(userData: MemberDto): Promise<ApiResponse<MemberDto>> {
    return apiClient.post<MemberDto>('/api/v1/member/signup', userData);
  },

  // 토큰 갱신
  async refreshToken(refreshToken: string): Promise<ApiResponse<TokenDto>> {
    return apiClient.post<TokenDto>('/api/v1/refresh', { refreshToken });
  },

  // 회원 정보 조회
  async getMemberInfo(memberId: string): Promise<ApiResponse<MemberDto>> {
    return apiClient.get<MemberDto>(`/api/v1/member/${memberId}`);
  },

  // 내 정보 조회
  async getMyInfo(): Promise<ApiResponse<MemberDto>> {
    return apiClient.get<MemberDto>('/api/v1/member/list');
  },

  // 카카오 로그인 리다이렉트 URL 가져오기
  async getKakaoLoginUrl(): Promise<ApiResponse<string>> {
    return apiClient.get<string>('/api/auth/login/kakao');
  },

  // 카카오 로그인 (코드로 토큰 교환)
  async kakaoLogin(code: string): Promise<ApiResponse<BaseResponseLoginResponse>> {
    return apiClient.post<BaseResponseLoginResponse>(`/auth/login/kakao?code=${code}`);
  },
};
