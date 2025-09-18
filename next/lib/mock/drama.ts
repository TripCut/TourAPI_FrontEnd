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
    ],
    total: 1,
  };
}
