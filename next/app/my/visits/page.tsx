import { BottomNav } from "../../../components/home/BottomNav";

export default function MyVisitsPage() {
  const visits = [
    {
      id: "v1",
      title: "경희대학교 평화의 전당",
      subtitle: "마이데몬 촬영지",
      when: "2025-09-10",
      city: "서울 동대문구",
    },
    {
      id: "v2",
      title: "정동진 해변",
      subtitle: "도깨비 촬영지",
      when: "2025-08-22",
      city: "강원 강릉시",
    },
  ];

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">방문 기록</h1>
        </header>

        <div className="px-6 py-6">
          <ol className="relative border-l border-gray-200">
            {visits.map((v) => (
              <li key={v.id} className="mb-8 ml-6">
                <span className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
                  <span className="material-symbols-outlined text-sm">flag</span>
                </span>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">{v.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{v.subtitle}</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{v.city} • {v.when}</p>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


