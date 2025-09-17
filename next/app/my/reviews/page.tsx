import Link from "next/link";
import { BottomNav } from "../../../components/home/BottomNav";

export default function MyReviewsPage() {
  const reviews = [
    {
      id: "rv1",
      dramaId: "maidemons",
      title: "마이데몬",
      text: "두 배우 케미 최고! 스토리도 재밌어요.",
      rating: 5,
      timeAgo: "2일 전",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCMdtMA5UxTkNv6WrYNFTHwvSXugxEm13fYv5h2ccEG-PBoKWrAT3ewvA64cEcGVG7BW1UHEGweNr_hIevMuYtWGwkG4gRWxbaAFrdhB0o8Gtd0OmqLZOZfHXY5nqp3tbffo8Y7uMqVITjXfmOzW87nX6MPqlzHgNDEgvhEim-p6yeZlPMqcu5sZMDA9oKzFNWNS776YJQ7H0ZxAOuyeaaFx7A8A4NcMETk_Wentc5G6LR4vG3ol2Eadi5JQeLSvLp65mwhhK0V2GQ",
    },
    {
      id: "rv2",
      dramaId: "goblin",
      title: "도깨비",
      text: "감성적인 촬영지들이 인상적!",
      rating: 4,
      timeAgo: "5일 전",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuADLVcEVpfn3GgQ498lKr1v7RCBsU1bmttqlzg1ZkFPDhp_i1gscmtHLCp1qturs-I6jJihMLY1GloXs2SGzdo6DN5xqE2k34Es3qpnr75Wk3na31Vx_nHJojaSCt674r-65YLk2LcEqScMg4BX123vhpZ-JmHGHG0Mog3XBct0PfG6OJPY_ETxy-qCb6XjUxzfHQ2S9WX24BtnaTCyZnvuJCBed7k79cywfTeHVDrZUduP-GTWVBD8UiNz4ussNqpwuoIUtOGgKWc",
    },
  ];

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">내 리뷰</h1>
        </header>

        <div className="mt-4 space-y-3 px-4">
          {reviews.map((r) => (
            <Link
              key={r.id}
              href={`/drama/${r.dramaId}`}
              className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm"
            >
              <div
                className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${r.imageUrl})` }}
              />
              <div className="flex-1">
                <p className="font-semibold text-[var(--text-primary)]">{r.title}</p>
                <p className="line-clamp-1 text-sm text-[var(--text-secondary)]">{r.text}</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-0.5 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined !text-base ${i < r.rating ? "" : "text-gray-300"}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </span>
                  <span>• {r.timeAgo}</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[var(--text-secondary)]">chevron_right</span>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


