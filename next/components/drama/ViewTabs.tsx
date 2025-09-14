"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  defaultView?: "list" | "card";
};

export function ViewTabs({ defaultView = "list" }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const view = (params.get("view") as "list" | "card") || defaultView;

  const setView = (v: "list" | "card") => {
    const qp = new URLSearchParams(params.toString());
    if (v === defaultView) qp.delete("view");
    else qp.set("view", v);
    router.replace(`?${qp.toString()}`);
  };

  return (
    <nav className="sticky top-[100px] z-10 border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex">
        <button
          onClick={() => setView("list")}
          className={`flex-1 border-b-2 py-3 text-center ${view === "list" ? "border-[var(--primary-color)]" : "border-transparent"}`}
        >
          <span
            className={`text-sm ${view === "list" ? "font-bold text-[var(--primary-color)]" : "font-semibold text-[var(--text-secondary)]"}`}
          >
            리스트 보기
          </span>
        </button>
        <button
          onClick={() => setView("card")}
          className={`flex-1 border-b-2 py-3 text-center ${view === "card" ? "border-[var(--primary-color)]" : "border-transparent"}`}
        >
          <span
            className={`text-sm ${view === "card" ? "font-bold text-[var(--primary-color)]" : "font-semibold text-[var(--text-secondary)]"}`}
          >
            카드 보기
          </span>
        </button>
      </div>
    </nav>
  );
}
