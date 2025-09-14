import { PlaceListResponse, PlaceDetail } from "../types/place";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || "";

async function safeFetch<T>(input: string, init?: RequestInit): Promise<T> {
  const url = API_BASE_URL ? `${API_BASE_URL}${input}` : input;
  const res = await fetch(url, { ...init, cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as T;
}

export async function getPlaceList(params?: {
  q?: string;
  tag?: string;
  page?: number;
  pageSize?: number;
}): Promise<PlaceListResponse> {
  const query = new URLSearchParams();
  if (params?.q) query.set("q", params.q);
  if (params?.tag) query.set("tag", params.tag);
  if (params?.page) query.set("page", String(params.page));
  if (params?.pageSize) query.set("pageSize", String(params.pageSize));
  const qs = query.toString();
  try {
    return await safeFetch<PlaceListResponse>(`/places${qs ? `?${qs}` : ""}`);
  } catch (e) {
    return {
      items: [
        {
          id: "goblin-spot",
          title: "도깨비 촬영지",
          address: "강릉시 정동진",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuADLVcEVpfn3GgQ498lKr1v7RCBsU1bmttqlzg1ZkFPDhp_i1gscmtHLCp1qturs-I6jJihMLY1GloXs2SGzdo6DN5xqE2k34Es3qpnr75Wk3na31Vx_nHJojaSCt674r-65YLk2LcEqScMg4BX123vhpZ-JmHGHG0Mog3XBct0PfG6OJPY_ETxy-qCb6XjUxzfHQ2S9WX24BtnaTCyZnvuJCBed7k79cywfTeHVDrZUduP-GTWVBD8UiNz4ussNqpwuoIUtOGgKWc",
          tags: ["전체"],
        },
        {
          id: "wind-blows-1",
          title: "바람이 분다 촬영지",
          address: "전남 순천시 순천만국가정원",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuASz3XSmAdfnS8Aok4-hF8cr_aE0qhK5kOYLoobMqVO-UGKnNHgh4eUK_bL-dhU0IzOFHXPvJcJVTQeC8BXBFPGN7jgC0ldRaTia3whh85-hGGWzVeFOJruGdpVrX001Xf27of_nz5hVQ3oGEDnXuhMcdd4YavUuswxpAAxRvrFcqSRx0mwkxdyRz5MaaciMPLCzbHxHDjeRuZOCfjnuHI2bKOUKfcJqB8uPuBrDB_lAa69-Agv8wFR84NYpmZsjmiV8XnfgYdY9-g",
          tags: ["카페"],
        },
        {
          id: "wind-blows-2",
          title: "바람이 분다 촬영지",
          address: "전남 순천시 순천만국가정원",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDnp-WSH7X3ZBJO2ufZu2OVQ5ECWQ-ZT2AZr4ijfJJOggCPnxBbWqYzYC56dYWBqRo2hrBZU9WfOzrJMbQKumVHsNpUh5acWBnIZL4gkzzMtae8wmNdY2eOh0hhJwsRi8WMb9Yzv4rYpcFImh2TuqJyhdpe0Aly3k6tWmhocWZ9zUOLixBsUvzY7YQDYmE1fVxk6mrYkCha3kXelQHFL66fHH-Rzl7_Y-uAIqAZgk3ITuW9kbL_eZkyOrl7Jde5w7u8EjKljJvpago",
          tags: ["음식점"],
        },
      ],
      total: 3,
    };
  }
}

export async function getPlaceDetail(id: string): Promise<PlaceDetail> {
  try {
    return await safeFetch<PlaceDetail>(`/places/${id}`);
  } catch (e) {
    return {
      id,
      title: "월정리 해변",
      subtitle: "드라마 '오늘도 사랑스럽개' 촬영지",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCTUalEJRnBHPxY83ypM7r-IO5P8IKxzZPtKUWPp3glb1OVZxeFjPaafe-ILo20ETBaPtZkqT-lr8Z8igqv20c86DwZxUb4wqBd3oOtTAbJ3w3cNKPE69jxZ-8ucilbFnFLeI5OGblm7r2m7WH6C9viO2-eaBcx3XHOsrkS2j0lfUSyuWttRSfOqfx2BsR31BUoVoFU248oWvnTE_EEaSGtspkR_o1GBqHw56iPIvX5Og5nP8XRxVerEkoqyGiPmYvgiKsLGoIhXcs",
      stats: { currentVisitors: 1234, rating: 4.8, reviewsCount: 2345 },
      reviews: [
        {
          id: "r1",
          author: "김민준",
          avatarUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBfCQ6-fE6yWyVBnPJUshnhJ0bpNfxgLqxtEiTT4uKCegqzCZAriem5RkSaHAJT8pwCyd4ThF2A8YFnLOHSrmoQF2qt9-p2bbVRiHT9hX95W8OYyxzu37xY4QQtVZnZH0XJYbbYx5XqFoakrSIiu8ScVUzV_BocHi62DnNGoSmqGlHAA7vlEdaPbzoAWXqy13E6i8SoMNsFkkB_OFZ-R_SH75KEJmTABB4Fw75T_JgSM8oBwjBiJ8yZgdOkHHa_MgXZABAosSlndyI",
          rating: 4.5,
          visitedAt: "2023-10-26",
          text: "에메랄드빛 바다가 정말 아름다워요...",
        },
        {
          id: "r2",
          author: "이수진",
          avatarUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBvncq12of7dbBKKrTtxb78hDsQK-lmIhcvCLvX_dD613nyQ_MhFHbsCDTpvjcjAujzpaTGPFcYgYNlMStYZ94FvFOd388bHrC07iCJ1BmC5uuK5JLQfWDABuHMtgpDYOamgTTj2mQjKymbIF56QAvbOUjeBbFfgYx40XyDljyBQmA7lkI5aVrD8CKb69mwec9SnJj_Spyj7dyHs8k7f755c-FY2zmlOeL9DIcRUZqBIWXc1Zl9NDys-6Lb1Uni1evXIguocadidqo",
          rating: 4,
          visitedAt: "2023-10-25",
          text: "주변에 예쁜 카페가 많아서 좋았어요...",
        },
      ],
      nearby: [
        {
          id: "king-the-land-gapado",
          title: "가파도",
          subtitle: "킹더랜드",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAJCZEE9E1-yKg2dkJkejZ2UIsEXliwy-R-FQWfHrmWCHFb9SaAC1bGWXAgK_KU1t9UTqGAmk0TsNuwJVMpbT0tkMDWa0gMj_qd3IsQekdgJ2hyBqr3FcpqkPqh06jhNlQkPuzD5AZrsxeC-hbM1FQMU5yIjkdKBfI8yXaXq55xHvhzKcdzf2vQIt7gDzNwSPywg27SDahsnwQ3ndsOAqjiAdzhhOVLLl0SWBaNT_oDNRwjvr4F30RRa2k5lbovq1M5B_4od3rNR9k",
        },
        {
          id: "our-blues-geumneung",
          title: "금능해수욕장",
          subtitle: "우리들의 블루스",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDkBJSmhsZXp6lS7hf1CS2A5ndCrqntXzqQyIRt9FOUOtRlF-tLFWs3bARlRmI47Q_TPhFbhaIHcpXcF1uX_CuznRm231E8ym-ovz2aflraVUI42WKLGpHUobfP2vwBEfpJKeSVU2QLKXttmFm6K4atBtO4kIKvrhRaMSJBsiWOxJqwisq0sff_Ij6Ql6aGqoq7KnIEpqlxxTKyieQoiA2M7vGMO9jtf3lkpbC9EWbw_QfE-1VXFhCBl22tW0AgELuz0wSEXk0E04Y",
        },
      ],
    };
  }
}
