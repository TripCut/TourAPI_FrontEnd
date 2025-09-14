"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CHIPS = [
  { key: "", label: "전체" },
  { key: "food", label: "음식점" },
  { key: "cafe", label: "카페" },
];

export function FilterChips() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("tag") || "";

  const setTag = (tag: string) => {
    const qp = new URLSearchParams(params.toString());
    if (!tag) qp.delete("tag");
    else qp.set("tag", tag);
    router.replace(`?${qp.toString()}`);
  };

  return (
    <div className="mt-4 flex space-x-3 px-4">
      {CHIPS.map((c) => (
        <button
          key={c.key}
          onClick={() => setTag(c.key)}
          className={`rounded-full px-4 py-2 text-sm shadow-sm ${active === c.key ? "bg-[var(--primary-color)] text-white font-semibold" : "bg-white text-[#374151] font-medium ring-1 ring-inset ring-gray-200"}`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
