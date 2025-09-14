"use client";

import { useRouter } from "next/navigation";

export function PlaceHeaderBar() {
  const router = useRouter();
  return (
    <header className="absolute top-0 z-10 flex w-full items-center justify-between p-4 text-white">
      <button
        className="flex size-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
        onClick={() => router.back()}
        aria-label="뒤로"
      >
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </button>
      <button
        className="flex size-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
        aria-label="즐겨찾기"
      >
        <span className="material-symbols-outlined">favorite_border</span>
      </button>
    </header>
  );
}
