export type HeroBanner = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export type RecommendationItem = {
  id: string;
  category: "드라마" | "여행지";
  title: string;
  subtitle?: string;
  imageUrl: string;
  href?: string;
};

export type RankingItem = {
  id: string; // unique card id
  rank: number;
  title: string;
  imageUrl: string;
  href?: string; // direct link if provided by API
  dramaId?: string; // preferred when linking to drama detail
};

export type HomeResponse = {
  userName: string;
  heroBanners: HeroBanner[];
  recommendations: RecommendationItem[];
  ranking: RankingItem[];
};
