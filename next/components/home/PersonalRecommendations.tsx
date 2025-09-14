import { RecommendationItem } from "../../types/home";

type Props = {
  userName: string;
  items: RecommendationItem[];
};

export function PersonalRecommendations({ userName, items }: Props) {
  return (
    <section className="py-4">
      <h2 className="px-4 pb-3 text-xl font-bold text-[var(--text-primary)]">
        <span className="text-[var(--primary-color)]">{userName}</span>
        님을 위한 맞춤 추천
      </h2>
      <div className="mt-1 space-y-3 px-4">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex transform items-center gap-4 rounded-xl bg-white p-3 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${it.imageUrl})` }}
              />
            </div>
            <div className="flex-grow">
              <p className="text-xs font-semibold text-[var(--primary-color)]">
                {it.category}
              </p>
              <p className="font-bold text-[var(--text-primary)]">{it.title}</p>
              {it.subtitle && (
                <p className="text-sm text-[var(--text-secondary)]">
                  {it.subtitle}
                </p>
              )}
            </div>
            <a
              className="text-[var(--text-secondary)]"
              href={it.href || "#"}
              aria-label={`${it.title} 상세보기`}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
