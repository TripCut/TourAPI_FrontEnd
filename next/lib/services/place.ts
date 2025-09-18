import { locationApi } from "../api/location";
import { PlaceDetail, PlaceListResponse } from "../../types/place";
import { USE_MOCK } from "../config";
import { mockGetPlaceDetail, mockGetPlaceList } from "../mock/place";

export async function getPlaceList(params?: {
  q?: string;
  tag?: string;
  page?: number;
  pageSize?: number;
}): Promise<PlaceListResponse> {
  if (USE_MOCK) {
    return mockGetPlaceList();
  }
  try {
    const res = await locationApi.getFilmingLocations({
      keyword: params?.q,
      tag: params?.tag,
      pageable: { page: (params?.page ?? 1) - 1, size: params?.pageSize ?? 20 },
    } as any);
    const items = (res.data?.content || []).map((l: any, idx: number) => ({
      id: String(l.id ?? idx),
      title: l.name,
      address: l.address,
      imageUrl: l.images?.[0] || "/window.svg",
      tags: l.tags || [],
    }));
    return { items, total: res.data?.totalElements ?? items.length };
  } catch (e) {
    return mockGetPlaceList();
  }
}

export async function getPlaceDetail(id: string): Promise<PlaceDetail> {
  if (USE_MOCK) {
    return mockGetPlaceDetail(id);
  }
  try {
    const res = await locationApi.getFilmingLocation(Number(id));
    const l = res.data! as any;
    let reviews: PlaceDetail["reviews"] = [];
    try {
      const rv = await locationApi.getLocationReviews(Number(id), {
        page: 0,
        size: 2,
      });
      reviews = (rv.data?.content || []).map((r: any) => ({
        id: String(r.id),
        author: r.userUsername,
        avatarUrl: "",
        rating: r.rating,
        visitedAt: r.createdAt,
        text: r.content,
      }));
    } catch {}

    return {
      id,
      title: l.name,
      subtitle: l.sceneDescription || l.description || "",
      imageUrl: l.images?.[0] || "/window.svg",
      stats: { currentVisitors: 0, rating: 0, reviewsCount: reviews.length },
      reviews,
      nearby: [],
    };
  } catch (e) {
    return mockGetPlaceDetail(id);
  }
}
