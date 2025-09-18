import { getHomeData } from "../lib/services/home";
import { HomeHeader } from "../components/home/HomeHeader";
import { SearchBar } from "../components/home/SearchBar";
import { HeroCarousel } from "../components/home/HeroCarousel";
import { PersonalRecommendations } from "../components/home/PersonalRecommendations";
import { RankingGrid } from "../components/home/RankingGrid";
import { BottomNav } from "../components/home/BottomNav";

export default async function Home() {
  const data = await getHomeData();
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-grow pb-24">
        <HomeHeader userName={data.userName || "여행자"} />
        <SearchBar />
        <HeroCarousel banners={data.heroBanners} />
        <PersonalRecommendations
          userName={data.userName || "여행자"}
          items={data.recommendations}
        />
        <RankingGrid items={data.ranking} />
      </main>
      <BottomNav active="home" />
    </div>
  );
}
