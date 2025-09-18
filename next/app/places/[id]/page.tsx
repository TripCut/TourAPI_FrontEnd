import { getPlaceDetail } from "../../../lib/services/place";
import { PlaceHero } from "../../../components/place/Hero";
import {
  LiveInfo,
  Reviews,
  EnjoyCard,
  NearbyCarousel,
} from "../../../components/place/Sections";
import { BottomNav } from "../../../components/home/BottomNav";
import { PlaceHeaderBar } from "../../../components/place/HeaderBar";
import { BottomSheet } from "../../../components/system/BottomSheet";

type Props = { params: { id: string } };

export default async function PlaceDetailPage({ params }: Props) {
  const data = await getPlaceDetail(params.id);
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify_between">
      <div className="flex-grow">
        <PlaceHeaderBar />
        <main className="pb-28">
          <PlaceHero
            title={data.title}
            subtitle={data.subtitle}
            imageUrl={data.imageUrl}
          />
          <BottomSheet
            initialSnap={0.55}
            snaps={[0.43, 0.65, 0.9]}
            startClosed
            closedPeek={28}
            header={
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                {data.title}
              </h2>
            }
          >
            <LiveInfo stats={data.stats} />
            <Reviews reviews={data.reviews} />
            <EnjoyCard />
            <NearbyCarousel items={data.nearby} />
          </BottomSheet>
        </main>
      </div>
    </div>
  );
}
