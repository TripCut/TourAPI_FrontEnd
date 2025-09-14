import { BottomNav } from "../../components/home/BottomNav";
import { SearchBar } from "../../components/home/SearchBar";
import { FilterChips } from "../../components/place/FilterChips";
import { getPlaceList } from "../../lib/place";
import { PlaceRowItem } from "../../components/place/RowItem";
type Props = { searchParams?: { q?: string; tag?: string } };

export default async function PlacesPage({ searchParams }: Props) {
  const q = searchParams?.q ?? "";
  const tag = searchParams?.tag ?? "";
  const { items } = await getPlaceList({ q, tag, page: 1, pageSize: 20 });
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-gray-50/80 px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-lg font-bold text-[var(--text-primary)]">
            여행지
          </h1>
          <SearchBar placeholder="지역 및 태그를 입력해주세요" to="/places" />
        </header>
        <FilterChips />
        <section className="px-4 mt-8">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            검색 결과
          </h2>
        </section>
        <div className="mt-4 space-y-4 px-4">
          {items.map((p) => (
            <PlaceRowItem key={p.id} item={p} />
          ))}
        </div>
      </main>
      <BottomNav active="place" />
    </div>
  );
}
