import { dramaApi } from "../api/drama";
import { DramaDetailResponse, DramaListResponse } from "../../types/drama";
import { USE_MOCK } from "../config";
import { mockGetDramaDetail, mockGetDramaList } from "../mock/drama";

export async function getDramaDetail(id: string): Promise<DramaDetailResponse> {
  if (USE_MOCK) {
    return mockGetDramaDetail(id);
  }
  try {
    const res = await dramaApi.getDrama(Number(id));
    const d = res.data!;
    return {
      id: String(d.id),
      title: d.title,
      year: Number(d.broadcastYear) || 0,
      episodes: 0,
      rating: d.averageRating ?? 0,
      posterUrl: "/window.svg",
      synopsis: d.description,
      tags: d.tags || [],
      locations: (d.filmingLocationNames || []).map((name, idx) => ({
        id: `${d.id}-${idx}`,
        name,
        city: "",
        imageUrl: "/window.svg",
      })),
      reviews: [],
      hashtagImages: [],
    };
  } catch (e) {
    return mockGetDramaDetail(id);
  }
}

export async function getDramaList(params?: {
  q?: string;
  page?: number;
  pageSize?: number;
}): Promise<DramaListResponse> {
  if (USE_MOCK) {
    return mockGetDramaList();
  }
  try {
    const res = await dramaApi.getDramas({
      page: (params?.page ?? 1) - 1,
      size: params?.pageSize ?? 20,
    });
    const items = (res.data?.content || []).map((d) => ({
      id: String(d.id),
      title: d.title,
      posterUrl: "/window.svg",
      rating: d.averageRating ?? 0,
      year: Number(d.broadcastYear) || 0,
    }));
    return { items, total: res.data?.totalElements ?? items.length };
  } catch (e) {
    return mockGetDramaList();
  }
}
