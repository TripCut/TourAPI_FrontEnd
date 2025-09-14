import { RankingItem } from "../../types/home";
import Link from "next/link";

type Props = {
  items: RankingItem[];
};

export function RankingGrid({ items }: Props) {
  return (
    <section className="py-4">
      <h2 className="px-4 pb-3 text-xl font-bold text-[var(--text-primary)]">
        실시간 인기 랭킹
      </h2>
      <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-5 px-4">
        {items.map((it) => {
          const href = it.href || (it.dramaId ? `/drama/${it.dramaId}` : "#");
          return (
            <Link href={href} className="group" key={it.id}>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div
                  className="aspect-[3/4] w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${it.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span
                  className="absolute left-3 top-3 text-3xl font-black text-white"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
                >
                  {it.rank}
                </span>
                <div className="absolute bottom-0 left-0 p-3 text-white">
                  <p className="font-bold">{it.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
