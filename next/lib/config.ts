// 환경 토글 및 공통 설정
export const USE_MOCK =
  (process.env.NEXT_PUBLIC_USE_MOCK_DATA || "false").toLowerCase() === "true";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
