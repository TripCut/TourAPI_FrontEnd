import { DramaDetailResponse } from "../../types/drama";

export function InfoSection({
  synopsis,
  tags,
}: {
  synopsis: string;
  tags: string[];
}) {
  return (
    <section>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
        드라마 정보
      </h3>
      <p className="text-[var(--text-primary)] leading-relaxed">{synopsis}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            #{t}
          </span>
        ))}
      </div>
    </section>
  );
}

export function LocationsSection({
  locations,
}: {
  locations: DramaDetailResponse["locations"];
}) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-[var(--text-primary)]">
          주요 촬영지
        </h3>
        <a className="text-sm font-medium text-[var(--primary-color)]" href="#">
          전체보기
        </a>
      </div>
      <div className="space-y-4">
        {locations.map((l) => (
          <div
            key={l.id}
            className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              alt={`${l.city} 촬영지`}
              className="w-24 h-24 object-cover rounded-xl"
              src={l.imageUrl}
            />
            <div className="flex-1">
              <p className="font-bold text-lg text-[var(--text-primary)]">
                {l.name}
              </p>
              <p className="text-sm text-[var(--text-primary)] mb-1">
                {l.city}
              </p>
              {l.description && (
                <p className="text-xs text-gray-500 line-clamp-2">
                  {l.description}
                </p>
              )}
            </div>
            <button
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500"
              aria-label="촬영지 상세"
            >
              <span className="material-symbols-outlined !text-xl">
                chevron_right
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ReviewsSection({
  reviews,
}: {
  reviews: DramaDetailResponse["reviews"];
}) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-[var(--text-primary)]">
          리뷰 및 후기
        </h3>
        <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm font-semibold">
          리뷰 작성
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {reviews.map((r) => (
          <div key={r.id} className="p-5 bg-white rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <img
                alt={`${r.author} profile`}
                className="size-10 rounded-full object-cover"
                src={r.avatarUrl}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-semibold text-[var(--text-primary)]">
                    {r.author}
                  </p>
                  <div className="flex gap-0.5 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined !text-base ${i < r.rating ? "" : "text-gray-300"}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-primary)] mb-3 leading-relaxed">
                  {r.text}
                </p>
                <p className="text-xs text-gray-400">{r.timeAgo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HashTagGrid({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <section>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
        #{title} 따라잡기
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, idx) => (
          <div className="relative aspect-square group" key={idx}>
            <img
              alt="SNS 후기 이미지"
              className="size-full object-cover rounded-xl"
              src={src}
            />
            <div className="absolute inset-0 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
              <p className="text-white text-sm text-center line-clamp-3">
                인생샷 명소!
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
