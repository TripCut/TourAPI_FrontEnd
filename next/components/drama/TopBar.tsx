"use client";

import { useRouter } from "next/navigation";

type Props = {
  title: string;
  onBack?: () => void;
};

export function TopBar({ title, onBack }: Props) {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white/80 p-4 backdrop-blur-sm">
      <button
        className="flex size-10 items-center justify-center"
        onClick={() => (onBack ? onBack() : router.back())}
        aria-label="뒤로"
      >
        <span className="material-symbols-outlined text-2xl text-[var(--text-primary)]">
          arrow_back_ios_new
        </span>
      </button>
      <h1 className="text-lg font-bold text-[var(--text-primary)]">{title}</h1>
      <div className="flex items-center gap-2">
        <button
          className="flex size-10 items-center justify-center text-[var(--text-primary)]"
          aria-label="북마크"
        >
          <span className="material-symbols-outlined text-2xl">
            bookmark_border
          </span>
        </button>
        <button
          className="flex size-10 items-center justify-center text-[var(--text-primary)]"
          aria-label="공유"
        >
          <span className="material-symbols-outlined text-2xl">share</span>
        </button>
      </div>
    </header>
  );
}
