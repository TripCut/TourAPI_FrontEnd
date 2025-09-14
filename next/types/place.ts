export type PlaceListItem = {
  id: string;
  title: string;
  address: string;
  imageUrl: string;
  tags?: string[];
};

export type PlaceListResponse = {
  items: PlaceListItem[];
  total: number;
};

export type PlaceDetail = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  stats: { currentVisitors: number; rating: number; reviewsCount: number };
  reviews: Array<{
    id: string;
    author: string;
    avatarUrl: string;
    rating: number;
    visitedAt: string;
    text: string;
  }>;
  nearby: Array<{
    id: string;
    title: string;
    subtitle?: string;
    imageUrl: string;
  }>;
};
