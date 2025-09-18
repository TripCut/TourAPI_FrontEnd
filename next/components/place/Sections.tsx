import { PlaceDetail } from "../../types/place";

export function LiveInfo({ stats }: { stats: PlaceDetail["stats"] }) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          실시간 정보
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl border border-gray-200 text-center shadow-sm">
          <span className="material-symbols-outlined text-4xl text-[var(--primary-color)]">
            groups
          </span>
          <p className="text-lg font-bold text-[var(--text-primary)] mt-2">
            현재 방문자
          </p>
          <p className="text-3xl font-extrabold text-[var(--primary-color)] mt-1">
            {stats.currentVisitors.toLocaleString()}명
          </p>
          <p className="text-sm text-gray-500 mt-1">평소보다 약간 붐벼요</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl border border-gray-200 text-center shadow-sm">
          <span className="material-symbols-outlined text-4xl text-[var(--primary-color)]">
            near_me
          </span>
          <p className="text-lg font-bold text-[var(--text-primary)] mt-2">
            여행하러 가기
          </p>
          <p className="text-sm text-gray-500 mt-1">
            길찾기와 코스 담기로 바로 출발!
          </p>
          <Link
            href="https://maps.app.goo.gl/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary-color)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:text-base"
          >
            <span className="material-symbols-outlined text-base">near_me</span>
            길찾기
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Reviews({ reviews }: { reviews: PlaceDetail["reviews"] }) {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          방문 후기
        </h2>
        <button className="text-sm font-semibold text-[var(--primary-color)] hover:underline">
          모두 보기
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-start">
              <img
                alt="user avatar"
                className="w-10 h-10 rounded-full object-cover"
                src={r.avatarUrl}
              />
              <div className="ml-4">
                <div className="flex items-center">
                  <p className="font-semibold text-[var(--text-primary)]">
                    {r.author}
                  </p>
                  <div className="flex items-center ml-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-lg ${i < Math.round(r.rating) ? "text-yellow-500" : "text-gray-300"}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(r.visitedAt).toLocaleDateString("ko-KR")} 방문
                </p>
                <p className="mt-2 text-[var(--text-primary)]">{r.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EnjoyCard() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-[var(--text-primary)]">
        월정리 해변 즐길거리
      </h2>
      <div className="mt-4 flex items-center justify-center bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
        <div className="relative">
          <img
            alt="스탬프 이미지"
            className="w-24 h-24 opacity-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0FLXScBdpirjbSJ38cQ_tbmcHyqe8SD8ZwUjm8-P-EIhSbn3R02CeyXsRsbinbAFc4HV2nOBpeRSegrpn7SamxLOMYbIWILklE5fzbrdTzfYK9QIicOCbBL5nZKpishUcIsMYK9f4hLLqC_4fn9MOErktuHbwXUmzLPHP57mBgJGd2XmYtqRDTfb3JyLiz9NfQi9oqBQ0wyQcs5CmstYx-RxOfmi8PwB0Eh9Gy-rptsQolvvKbeYEusrWxodc4rmG0NuzluYLC8"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-[var(--primary-color)] opacity-40">
              footprint
            </span>
          </div>
        </div>
        <div className="ml-6 text-left">
          <p className="text-lg font-bold text-[var(--primary-color)]">
            월정리 해변 스탬프
          </p>
          <p className="text-sm text-gray-600 mt-1">
            이 장소를 방문하고 스탬프를 획득하세요!
          </p>
          <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[var(--primary-color)] px-6 py-2.5 text-white shadow-lg shadow-[var(--primary-color)]/40 transition-transform hover:scale-105">
            <span className="material-symbols-outlined text-xl">
              photo_camera
            </span>
            <span className="font-semibold text-sm">스탬프 찍기</span>
          </button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function NearbyCarousel({ items }: { items: PlaceDetail["nearby"] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-[var(--text-primary)]">
        근처 다른 드라마 촬영지
      </h2>
      <div className="mt-4 flex snap-x snap-mandatory -mx-6 px-6 overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex shrink-0 gap-4">
          {items.map((n) => (
            <Link
              href={`/places/${n.id}`}
              key={n.id}
              className="w-52 snap-start"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-md">
                <img
                  alt={n.title}
                  className="size-full object-cover"
                  src={n.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  {n.subtitle && (
                    <p className="text-sm font-semibold">{n.subtitle}</p>
                  )}
                  <p className="text-lg font-bold">{n.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
