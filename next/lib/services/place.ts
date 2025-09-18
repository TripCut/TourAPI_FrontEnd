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
    });
    const items = (res.data?.content || []).map((l: unknown, idx: number) => {
      const location = l as {
        id?: number;
        name: string;
        address?: string;
        images?: string[];
        tags?: string[];
      };
      return {
        id: String(location.id ?? idx),
        title: location.name,
        address: location.address || "",
        imageUrl: location.images?.[0] || "/window.svg",
        tags: location.tags || [],
      };
    });
    return { items, total: res.data?.totalElements ?? items.length };
  } catch {
    return mockGetPlaceList();
  }
}

export async function getPlaceDetail(id: string): Promise<PlaceDetail> {
  if (USE_MOCK) {
    return mockGetPlaceDetail(id);
  }
  try {
    const res = await locationApi.getFilmingLocation(Number(id));
    const l = res.data! as {
      id?: number;
      name: string;
      sceneDescription?: string;
      description?: string;
      images?: string[];
    };
    let reviews: PlaceDetail["reviews"] = [];
    try {
      const rv = await locationApi.getLocationReviews(Number(id), {
        page: 0,
        size: 2,
      });
      reviews = (rv.data?.content || []).map((r: unknown) => {
        const review = r as {
          id: number;
          userUsername: string;
          rating: number;
          createdAt: string;
          content: string;
        };
        return {
          id: String(review.id),
          author: review.userUsername,
          avatarUrl: "",
          rating: review.rating,
          visitedAt: review.createdAt,
          text: review.content,
        };
      });
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
  } catch {
    return mockGetPlaceDetail(id);
  }
}
