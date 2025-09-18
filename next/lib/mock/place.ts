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
      {
        id: "boseong-green-tea",
        title: "보성 녹차밭",
        address: "전남 보성군 보성읍 녹차로 763-65",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAQWUOu0iwV1-wQhs26xPDyMJ-dUMoBk9V6CiKk2ZyZwXKwN2kGBfiu2fDRS6yjftLVbKuUjpjfLDr14wJT--tzengZeeG-3ki6MQVUeXapmtoLRxfWbUsJA5KF7GQCohidTiShfXSZrnxeBOxdBSzvhDAmjIeEvfyDFVShWCzTpRleHen7oeSTGzK5wNsRLu3YqGKtsFgGVIo7IaQBTjrQSmKqS1DeSLDDe3gfB-V6Wrms3HtaF6cLd7oDP-Pm6qgQaqgHIYEkiFQ",
        tags: ["촬영지", "자연"],
      },
      {
        id: "jeju-woljeongri-beach",
        title: "제주 월정리 해변",
        address: "제주 제주시 구좌읍 월정리",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCTUalEJRnBHPxY83ypM7r-IO5P8IKxzZPtKUWPp3glb1OVZxeFjPaafe-ILo20ETBaPtZkqT-lr8Z8igqv20c86DwZxUb4wqBd3oOtTAbJ3w3cNKPE69jxZ-8ucilbFnFLeI5OGblm7r2m7WH6C9viO2-eaBcx3XHOsrkS2j0lfUSyuWttRSfOqfx2BsR31BUoVoFU248oWvnTE_EEaSGtspkR_o1GBqHw56iPIvX5Og5nP8XRxVerEkoqyGiPmYvgiKsLGoIhXcs",
        tags: ["바다", "촬영지"],
      },
      {
        id: "ikseon-dong",
        title: "익선동 한옥거리",
        address: "서울 종로구 익선동",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBhcG4vpYRIvEr7FkHptg_IXo-YFO4gFZKPGrIa1AtvzoEpTHuL6pdV02MRCosZzTz-VknW18HYq0w4NuZFP8l1cAFSB2IaXlHcr8qaUrLCkkATguaXMycSauPiOk8WIbs-NbhuPzVPbk_IRuJVb612g8A6faPk02kn8pDtbr4blrPQUO958jFKP0Hv0pAVdmgovHDSRbfZ2KXjNTEZ-p48llqV1bziVDBIsHTox9-Y_aXKqg1ubJfKWBs9oC11Tzfd5AsPBpy_OyU",
        tags: ["한옥", "카페"],
      },
      {
        id: "songdo-triple-street",
        title: "송도 트리플스트리트",
        address: "인천 연수구 송도동",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwcWUwxw-UxJge4bIxzmFXa-qOINUTPzsykVVdxIiskZfa7ijWRR06v5AQB8F6SjTwrgBUPy_JNiYapf87D1Wb5GodCToeXCN22EomqqVs1O6H8ouZBiVY8eQbp6-Ji31bODRKH8mHEZC6rXstLIMW2Y3gnpGs0NhEmJ7EtUBV54yRhtgjIH1c2vu8--9bRbRWBB7E7vk5C1MqSqUs00KqoYYps9lpvKnVX-uv_Z9SBJbiXLeTj9YPrex2pET-iRl3REpsWMcowg",
        tags: ["도심", "쇼핑"],
      },
      {
        id: "bukchon-hanok",
        title: "북촌 한옥마을",
        address: "서울 종로구 계동길 일대",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqoQT2KC4oFU10yUDw1aPU6yfN7zMZp2rQUPY9kVMqVoiz6KttSa7TlQdUmLG6k9stTzniDUm5RwyATAd0HJnKtfuBQWETe7jry11UmjCViOT5xZg1qw3k45GCsQeosfy2KOTzizMws1ipqC5KobjSY0rWBV7qX97JrypryrSY3-VcQLgmwM6kM3mENuPGF6AEkcvJXp20einiUojj42vI8qBzTAwTc5xbZG8oPx2V1Flp3_erof1XDATQhyYjRSoFICalTULAWHA",
        tags: ["한복", "산책"],
      },
      {
        id: "nami-island",
        title: "남이섬",
        address: "강원 춘천시 남산면 남이섬길 1",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCTUalEJRnBHPxY83ypM7r-IO5P8IKxzZPtKUWPp3glb1OVZxeFjPaafe-ILo20ETBaPtZkqT-lr8Z8igqv20c86DwZxUb4wqBd3oOtTAbJ3w3cNKPE69jxZ-8ucilbFnFLeI5OGblm7r2m7WH6C9viO2-eaBcx3XHOsrkS2j0lfUSyuWttRSfOqfx2BsR31BUoVoFU248oWvnTE_EEaSGtspkR_o1GBqHw56iPIvX5Og5nP8XRxVerEkoqyGiPmYvgiKsLGoIhXcs",
        tags: ["섬", "자연", "촬영지"],
      },
    ],
    total: 7,
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
