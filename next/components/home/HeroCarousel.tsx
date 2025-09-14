import { HeroBanner } from "../../types/home";

type Props = {
  banners: HeroBanner[];
};

export function HeroCarousel({ banners }: Props) {
  return (
    <section className="py-4">
      <div className="flex items-center justify-between px-4 pb-3">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          오늘의 추천
        </h2>
        <a className="text-sm font-medium text-[var(--primary-color)]" href="#">
          전체보기
        </a>
      </div>
      <div className="flex space-x-4 overflow-x-auto px-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {banners.map((b) => (
          <div className="w-80 flex-shrink-0" key={b.id}>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105"
                style={{ backgroundImage: `url(${b.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="text-lg font-bold">{b.title}</p>
                {b.subtitle && (
                  <p className="text-sm opacity-80">{b.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
