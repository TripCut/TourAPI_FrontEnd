import Link from "next/link";
import { BottomNav } from "../../components/home/BottomNav";
import { getDramaList } from "@/lib/services/drama";

type Props = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const q = resolvedParams?.q ?? "";
  const { items } = await getDramaList({ q, page: 1, pageSize: 20 });
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-xl font-bold">검색</h1>
        {!q && (
          <p className="mt-2 text-sm text-[var(--text-primary)]">
            검색어를 입력해주세요.
          </p>
        )}
        {q && (
          <>
            <p className="mt-2 text-sm text-[var(--text-primary)]">
              &ldquo;{q}&rdquo; 검색 결과
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-4">
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
                    <p className="mt-2 text-sm font-semibold">{d.title}</p>
                    <p className="text-xs text-[var(--text-primary)]">
                      {d.year} • ⭐ {d.rating}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
      <BottomNav active="drama" />
    </div>
  );
}
