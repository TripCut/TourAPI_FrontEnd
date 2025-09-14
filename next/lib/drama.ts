import { DramaDetailResponse, DramaListResponse } from "../types/drama";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || "";

async function safeFetch<T>(input: string, init?: RequestInit): Promise<T> {
  const url = API_BASE_URL ? `${API_BASE_URL}${input}` : input;
  const res = await fetch(url, { ...init, cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as T;
}

export async function getDramaDetail(id: string): Promise<DramaDetailResponse> {
  try {
    return await safeFetch<DramaDetailResponse>(`/drama/${id}`);
  } catch (e) {
    // 안전 폴백
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
          text: "두 배우 케미가 정말 미쳤어요... 스토리도 흥미진진해서 시간 가는 줄 모르고 봤네요. 인생 드라마 등극!",
          timeAgo: "2일 전",
        },
        {
          id: "rv2",
          author: "이승현",
          avatarUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCEaG7iP2E5n2p3in74PI4SMypHVWLKU_3lioRaDngu2Tmbb3Mxe-yom2kg-iEIzkCzEu8CYJPYYKr0lZxgQjH7c-h8PbSeOVHeeiStT5X6OPow5HRCqu19IblZcvn2hhBV61RK8P9U8aKYsgzIfFkr0XcTJX3SFLguTuL6dj3kSQuiDvbLEbgSPbYfX2shk270i7BKj6v6dkmLBvTJl-Fs71AWXKVLmy3cY4wzLIbxbkpeNBIA7iDp5Pm2GYtqYiQbpC988M-bTVM",
          rating: 4,
          text: "영상미가 정말 예뻐요. 촬영지들 찾아가보고 싶을 정도! 스토리도 재밌어서 추천합니다.",
          timeAgo: "5일 전",
        },
      ],
      hashtagImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwcWUwxw-UxJge4bIxzmFXa-qOINUTPzsykVVdxIiskZfa7ijWRR06v5AQB8F6SjTwrgBUPy_JNiYapf87D1Wb5GodCToeXCN22EomqqVs1O6H8ouZBiVY8eQbp6-Ji31bODRKH8mHEZC6rXstLIMW2Y3gnpGs0NhEmJ7EtUBV54yRhtgjIH1c2vu8--9bRbRWBB7E7vk5C1MqSqUs00KqoYYps9lpvKnVX-uv_Z9SBJbiXLeTj9YPrex2pET-iRl3REpsWMcowg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwrB--fORyjueV1y8PpgYdRCCZbNvtQsSN1Ggdc0DPDCJiXN_puYrXayuE7fChaC-mbK_uMTQRXI0FUYWYhHUfGMXp8uyEYGWZ8dk7c7y_eFhjZ0BMQd6cBfr6Dg591jSKc0HnXXlg0LZg_QQCwTl-ERcgxx7EY_XvIqzosl3c04Ktv8hVmdEl7WbeXEdXG37TXTWftK_XJgYFO3Ug1MYbSyiVLiri_30CIGoVGnMQx7-s4-0LM7DTw1C18nrvTPVDDw1Za42hGII",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuWS46TjWRyCIkAHsUYjK4sBulKTZO_lpAMHiecmrpZwoDvf1bHEODJEwYZp0bHngPfQ5tHcEFEb9Sj4DPHgnw7wW-q1mJ8aSHrRYcygm6SXS7sk8C1Uqr0BPsJhyvqANowwzOhZ_uuxd-afm2RvOea63hLCPnB9elgNtjxL0vzAy8YxdYHEhrPRTXMlkIHcHgHSCdPcj3Fe_CvF_xQn29Qf4QsnaTkUuPUd-DvH4XnZFKsOvAetDIC8kUWY2rXc-ag_qUOS0wQnI",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7HywvsqCMNbYZ5c0pHw00-KQHlvU36A2CzY2OOdsGcP2sOFvnQoqt7zv81TVwtAB75eh1h_IrtWnQ00Rb5SPGuT1u5uSBOLEOwEL8wVuBvwA2jnRDXssKZ3xxQgLzI41yGA_g43G1HvfVi0pUy-XutecZ0UIAHknpAz8JyuJYEZZ4JgjfqcDxbX0G4Xndh1kbAPhY-sILOj-RU6D9Yw_TWrrPHkXrOmPQnhphT5cTcGFyfZwaDIyOJcreZ--QmMmTU3g1Wk880e4",
      ],
    };
  }
}

export async function getDramaList(params?: {
  q?: string;
  page?: number;
  pageSize?: number;
}): Promise<DramaListResponse> {
  const query = new URLSearchParams();
  if (params?.q) query.set("q", params.q);
  if (params?.page) query.set("page", String(params.page));
  if (params?.pageSize) query.set("pageSize", String(params.pageSize));
  const qs = query.toString();
  try {
    return await safeFetch<DramaListResponse>(`/drama${qs ? `?${qs}` : ""}`);
  } catch (e) {
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
}
