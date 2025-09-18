import { PlaceDetail, PlaceListResponse } from "../../types/place";

export async function mockGetPlaceList(): Promise<PlaceListResponse> {
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
    ],
    total: 1,
  };
}

export async function mockGetPlaceDetail(id: string): Promise<PlaceDetail> {
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
    ],
    nearby: [],
  };
}
