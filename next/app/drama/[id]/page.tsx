import { getDramaDetail } from "../../../lib/services/drama";
import { TopBar } from "../../../components/drama/TopBar";
import { DramaHero } from "../../../components/drama/Hero";
import {
  InfoSection,
  LocationsSection,
  ReviewsSection,
  HashTagGrid,
} from "../../../components/drama/Sections";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DramaDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const data = await getDramaDetail(resolvedParams.id);
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-grow">
        <TopBar title={data.title} />
        <DramaHero drama={data} />
        <div className="p-5 space-y-8">
          <InfoSection synopsis={data.synopsis} tags={data.tags} />
          <div className="h-2 bg-gray-100" />
          <LocationsSection locations={data.locations} />
          <div className="h-2 bg-gray-100" />
          <ReviewsSection reviews={data.reviews} />
          <div className="h-2 bg-gray-100" />
          <HashTagGrid images={data.hashtagImages} title={data.title} />
        </div>
      </main>
    </div>
  );
}
