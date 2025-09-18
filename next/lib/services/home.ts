import { HomeResponse } from "../../types/home";
import { apiClient } from "../api";
import { USE_MOCK } from "../config";
import { mockGetHomeData } from "../mock/home";

export async function getHomeData(): Promise<HomeResponse> {
  if (USE_MOCK) {
    return mockGetHomeData();
  }
  try {
    const res = await apiClient.get<HomeResponse>("/api/v1/home");
    return res.data!;
  } catch (error) {
    return mockGetHomeData();
  }
}
