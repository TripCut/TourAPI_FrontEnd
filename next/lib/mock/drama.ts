import { DramaDetailResponse, DramaListResponse } from "../../types/drama";

export async function mockGetDramaDetail(
  id: string
): Promise<DramaDetailResponse> {
  return {
    id,
    title: "마이데몬",
    year: 2023,
    episodes: 16,
    rating: 4.5,
    posterUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMdtMA5UxTkNv6WrYNFTHwvSXugxEm13fYv5h2ccEG-PBoKWrAT3ewvA64cEcGVG7BW1UHEGweNr_hIevMuYtWGwkG4gRWxbaAFrdhB0o8Gtd0OmqLZOZfHXY5nqp3tbffo8Y7uMqVITjXfmOzW87nX6MPqlzHgNDEgvhEim-p6yeZlPMqcu5sZMDA9oKzFNWNS776YJQ7H0ZxAOuyeaaFx7A8A4NcMETk_Wentc5G6LR4vG3ol2Eadi5JQeLSvLp65mwhhK0V2GQ",
    synopsis:
      "악마 같은 재벌 상속녀 '도도희'와 한순간 능력을 잃어버린 악마 '정구원'이 계약 결혼을 하며 벌어지는 판타지 로맨틱 코미디.",
    tags: ["로맨스", "판타지", "코미디"],
    locations: [
      {
        id: "loc1",
        name: "경희대학교 평화의 전당",
        city: "서울 동대문구",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqoQT2KC4oFU10yUDw1aPU6yfN7zMZp2rQUPY9kVMqVoiz6KttSa7TlQdUmLG6k9stTzniDUm5RwyATAd0HJnKtfuBQWETe7jry11UmjCViOT5xZg1qw3k45GCsQeosfy2KOTzizMws1ipqC5KobjSY0rWBV7qX97JrypryrSY3-VcQLgmwM6kM3mENuPGF6AEkcvJXp20einiUojj42vI8qBzTAwTc5xbZG8oPx2V1Flp3_erof1XDATQhyYjRSoFICalTULAWHA",
        description:
          "드라마 속 주인공들이 운명적으로 처음 만난 장소로, 고풍스러운 건축미가 돋보입니다.",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "김지원",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBzZVSRXvtoisKSphQtDjTvAQql_6xsCSYM9MRaO4zS9Vb2KGAvm1IgcFUPRZdccG4Yc7i6JpiHi8hB2jPVbCepHIzAhAEQyGnMgdqR7f0N36uQoro5Fm9kB3H7r9b7QYz-YteYFHiV1MSK-4eWf2anC_S1wraulMpsbikoBRS8q9qIzp4pKpkRc5WqSkH6LgRJm-0GYk4berZF9Is1kohhi9cAc4I5QLAVTMwLI2pVKQp8cJOdg1hS5_xtCnxQgZVlzVgpp8nVF6c",
        rating: 5,
        text: "두 배우 케미가 정말 미쳤어요... 스토리도 흥미진진!",
        timeAgo: "2일 전",
      },
    ],
    hashtagImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwcWUwxw-UxJge4bIxzmFXa-qOINUTPzsykVVdxIiskZfa7ijWRR06v5AQB8F6SjTwrgBUPy_JNiYapf87D1Wb5GodCToeXCN22EomqqVs1O6H8ouZBiVY8eQbp6-Ji31bODRKH8mHEZC6rXstLIMW2Y3gnpGs0NhEmJ7EtUBV54yRhtgjIH1c2vu8--9bRbRWBB7E7vk5C1MqSqUs00KqoYYps9lpvKnVX-uv_Z9SBJbiXLeTj9YPrex2pET-iRl3REpsWMcowg",
    ],
  };
}

export async function mockGetDramaList(): Promise<DramaListResponse> {
  return {
    items: [
      {
        id: "maidemons",
        title: "마이데몬",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMdtMA5UxTkNv6WrYNFTHwvSXugxEm13fYv5h2ccEG-PBoKWrAT3ewvA64cEcGVG7BW1UHEGweNr_hIevMuYtWGwkG4gRWxbaAFrdhB0o8Gtd0OmqLZOZfHXY5nqp3tbffo8Y7uMqVITjXfmOzW87nX6MPqlzHgNDEgvhEim-p6yeZlPMqcu5sZMDA9oKzFNWNS776YJQ7H0ZxAOuyeaaFx7A8A4NcMETk_Wentc5G6LR4vG3ol2Eadi5JQeLSvLp65mwhhK0V2GQ",
        rating: 4.5,
        year: 2023,
      },
      {
        id: "see-you-again-life",
        title: "이번 생도 잘 부탁해",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDZv1rfPzu4nxu-5cxn6oNHqdIZ3zryLz2EKIj5JdQogwjecgdzldMCsY1-aU_ftstpuNU91dyidka2bkGZ2MMQ99nZkth3yNjpqbbXErHNC7cmBFLGVih833dSt8rc8FptIQioXdOnGv557bBwAufGAV2d5Zi2A0RmmZ27AKWz2qiH5TuFpVyxDsWqosM1RMG0HK0yWkMxdZd12NbwJjWMkRUonhazj2hUxEDobhs5lLYlSUavQLd3Bt6PbN5j6A21hy8xeRHR_-U",
        rating: 4.6,
        year: 2023,
      },
      {
        id: "extraordinary-attorney-woo",
        title: "이상한 변호사 우영우",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDPH6nUTeBsZHvk-4joOPQDuhDabPmxkF9ZxYx5Fq95h51KgWzbLmfyCacjjx18-0FDKmamn3QuVsz-g8f1r4lanqgO4Yjlq6Xcm_kNO90HbKIFsujUcUJaphkWx6ZKfFbWPPjamIjvGMsdx6V_qZqCuXePl8mR9mINduG0HQlxzUFP0JDEO2nSsBPg11NR7lgBPsoORpPVAj_APjixYzYUulgljAoYdW3nfE85dJ5ilXb4eElxRrlPyXslCER7dH04XwYT2l9M-mI",
        rating: 4.9,
        year: 2022,
      },
      {
        id: "the-glory",
        title: "더 글로리",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCb9lupOM5J4VU9O5F4Izox4jSi17vZXAgKVIyBdkxZBi8a8MhVsfOcX_dk5eHKPqaBQC3DZ6UwstJp7UluWKqTqtggSZCiW7vRbSNxbtOul7kZtIu1aEccwOMEyXF3q8arWdhO4zCkXU0--6U-yS0NOhll3uv1lBc9qz8nou19EA2j9pFvSwPoFCKXex4-B8LN7wBiOYg3bSJvlYNPjRQ5JqlNcmGsmFlS7vgGwe-cNFsu5kFW0KHbtAcyJG-qSm_SDzDG10E3g1I",
        rating: 4.7,
        year: 2022,
      },
      {
        id: "yumis-cells",
        title: "유미의 세포들",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBhcG4vpYRIvEr7FkHptg_IXo-YFO4gFZKPGrIa1AtvzoEpTHuL6pdV02MRCosZzTz-VknW18HYq0w4NuZFP8l1cAFSB2IaXlHcr8qaUrLCkkATguaXMycSauPiOk8WIbs-NbhuPzVPbk_IRuJVb612g8A6faPk02kn8pDtbr4blrPQUO958jFKP0Hv0pAVdmgovHDSRbfZ2KXjNTEZ-p48llqV1bziVDBIsHTox9-Y_aXKqg1ubJfKWBs9oC11Tzfd5AsPBpy_OyU",
        rating: 4.3,
        year: 2021,
      },
      {
        id: "life-is-beautiful",
        title: "인생은 아름다워",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCctadcMA1LNOGk2esq68czirNhrOgrqYgz3FhBWGZGrifnd8k81_Rp1H7hZ907m16bQXIExAiWOsapS2GTFT3xIxYs5gl3zRFCDLJvR03qjr1B9j0BCHztCh46gV_17T_oEu0bQdYq6Cwwbjnr1vyCUHTpdj6Q9lXPST_AvriVVlM1fUzbYVUu19um3XhIFPDQaZAsudBzQrvsaiTYywqsJDMEXQN8c8q6B3cZj7iS9S80YrFGIdAO3_ZWbfnGsC5zZGQYWcD1RpU",
        rating: 4.2,
        year: 2022,
      },
      {
        id: "goblin",
        title: "도깨비",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuADLVcEVpfn3GgQ498lKr1v7RCBsU1bmttqlzg1ZkFPDhp_i1gscmtHLCp1qturs-I6jJihMLY1GloXs2SGzdo6DN5xqE2k34Es3qpnr75Wk3na31Vx_nHJojaSCt674r-65YLk2LcEqScMg4BX123vhpZ-JmHGHG0Mog3XBct0PfG6OJPY_ETxy-qCb6XjUxzfHQ2S9WX24BtnaTCyZnvuJCBed7k79cywfTeHVDrZUduP-GTWVBD8UiNz4ussNqpwuoIUtOGgKWc",
        rating: 4.8,
        year: 2016,
      },
      {
        id: "crash-landing-on-you",
        title: "사랑의 불시착",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAQWUOu0iwV1-wQhs26xPDyMJ-dUMoBk9V6CiKk2ZyZwXKwN2kGBfiu2fDRS6yjftLVbKuUjpjfLDr14wJT--tzengZeeG-3ki6MQVUeXapmtoLRxfWbUsJA5KF7GQCohidTiShfXSZrnxeBOxdBSzvhDAmjIeEvfyDFVShWCzTpRleHen7oeSTGzK5wNsRLu3YqGKtsFgGVIo7IaQBTjrQSmKqS1DeSLDDe3gfB-V6Wrms3HtaF6cLd7oDP-Pm6qgQaqgHIYEkiFQ",
        rating: 4.9,
        year: 2019,
      },
      {
        id: "twenty-five-twenty-one",
        title: "스물다섯 스물하나",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwcWUwxw-UxJge4bIxzmFXa-qOINUTPzsykVVdxIiskZfa7ijWRR06v5AQB8F6SjTwrgBUPy_JNiYapf87D1Wb5GodCToeXCN22EomqqVs1O6H8ouZBiVY8eQbp6-Ji31bODRKH8mHEZC6rXstLIMW2Y3gnpGs0NhEmJ7EtUBV54yRhtgjIH1c2vu8--9bRbRWBB7E7vk5C1MqSqUs00KqoYYps9lpvKnVX-uv_Z9SBJbiXLeTj9YPrex2pET-iRl3REpsWMcowg",
        rating: 4.6,
        year: 2022,
      },
      {
        id: "hotel-del-luna",
        title: "호텔 델루나",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqoQT2KC4oFU10yUDw1aPU6yfN7zMZp2rQUPY9kVMqVoiz6KttSa7TlQdUmLG6k9stTzniDUm5RwyATAd0HJnKtfuBQWETe7jry11UmjCViOT5xZg1qw3k45GCsQeosfy2KOTzizMws1ipqC5KobjSY0rWBV7qX97JrypryrSY3-VcQLgmwM6kM3mENuPGF6AEkcvJXp20einiUojj42vI8qBzTAwTc5xbZG8oPx2V1Flp3_erof1XDATQhyYjRSoFICalTULAWHA",
        rating: 4.4,
        year: 2019,
      },
      {
        id: "reply-1988",
        title: "응답하라 1988",
        posterUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCTUalEJRnBHPxY83ypM7r-IO5P8IKxzZPtKUWPp3glb1OVZxeFjPaafe-ILo20ETBaPtZkqT-lr8Z8igqv20c86DwZxUb4wqBd3oOtTAbJ3w3cNKPE69jxZ-8ucilbFnFLeI5OGblm7r2m7WH6C9viO2-eaBcx3XHOsrkS2j0lfUSyuWttRSfOqfx2BsR31BUoVoFU248oWvnTE_EEaSGtspkR_o1GBqHw56iPIvX5Og5nP8XRxVerEkoqyGiPmYvgiKsLGoIhXcs",
        rating: 4.9,
        year: 2015,
      },
    ],
    total: 10,
  };
}
