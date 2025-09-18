import Link from "next/link";
import { BottomNav } from "../../components/home/BottomNav";
import { getDramaList } from "../../lib/services/drama";
import { SearchBar } from "../../components/home/SearchBar";
import { ViewTabs } from "../../components/drama/ViewTabs";
import { DramaRowItem } from "../../components/drama/RowItem";

export default async function DramaIndexPage({
  searchParams,
}: {
  searchParams?: { q?: string; view?: string };
}) {
  const q = searchParams?.q ?? "";
  const view = (searchParams?.view as "list" | "card") || "list";
  const { items } = await getDramaList({ q, page: 1, pageSize: 20 });
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">
            드라마
          </h1>
          <SearchBar placeholder="드라마 제목, 방송사, 장르 등" to="/drama" />
        </header>
        <ViewTabs />
        {q && (
          <p className="px-4 mt-2 text-sm text-[var(--text-primary)]">
            "{q}" 검색 결과
          </p>
        )}
        {view === "list" ? (
          <div className="divide-y divide-gray-100">
            {items.map((d) => (
              <DramaRowItem key={d.id} item={d} />
            ))}
          </div>
        ) : (
          <ul className="mt-4 grid grid-cols-2 gap-4 px-4">
            {items.map((d) => (
              <li key={d.id}>
                <Link href={`/drama/${d.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl shadow">
                    <img
                      src={d.posterUrl}
                      alt={`${d.title} 포스터`}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                    {d.title}
                  </p>
                  <p className="text-xs text-[var(--text-primary)]">
                    {d.year} • ⭐ {d.rating}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <BottomNav active="drama" />
    </div>
  );
}
