export type DramaBasic = {
  id: string;
  title: string;
  year: number;
  episodes: number;
  rating: number; // 0~5
  posterUrl: string;
};

export type DramaTag = string;

export type DramaLocation = {
  id: string;
  name: string;
  city: string;
  imageUrl: string;
  description?: string;
};

export type DramaReview = {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number; // 0~5
  text: string;
  timeAgo: string; // e.g. "2일 전"
};

export type DramaDetailResponse = DramaBasic & {
  synopsis: string;
  tags: DramaTag[];
  locations: DramaLocation[];
  reviews: DramaReview[];
  hashtagImages: string[]; // grid images
};

export type DramaListItem = Pick<
  DramaBasic,
  "id" | "title" | "posterUrl" | "rating" | "year"
>;
export type DramaListResponse = {
  items: DramaListItem[];
  total: number;
};
