import { getPlaceDetail } from "../../../lib/place";
import { PlaceHero } from "../../../components/place/Hero";
import {
  LiveInfo,
  Reviews,
  EnjoyCard,
  NearbyCarousel,
} from "../../../components/place/Sections";
import { BottomNav } from "../../../components/home/BottomNav";
import { PlaceHeaderBar } from "../../../components/place/HeaderBar";

type Props = { params: { id: string } };

export default async function PlaceDetailPage({ params }: Props) {
  const data = await getPlaceDetail(params.id);
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <div className="flex-grow">
        <PlaceHeaderBar />
        <main className="pb-28">
          <PlaceHero
            title={data.title}
            subtitle={data.subtitle}
            imageUrl={data.imageUrl}
          />
          <div className="bg-gray-50 p-6 rounded-t-3xl -mt-8 relative z-10">
            <LiveInfo stats={data.stats} />
            <Reviews reviews={data.reviews} />
            <EnjoyCard />
            <NearbyCarousel items={data.nearby} />
          </div>
        </main>
      </div>
      <BottomNav active="place" />
    </div>
  );
}
