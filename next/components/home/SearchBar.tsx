"use client";

import { useRouter } from "next/navigation";

type Props = {
  placeholder?: string;
  onSubmit?: (keyword: string) => void;
  to?: string; // navigate base path e.g. "/drama" or "/search"
};

export function SearchBar({
  placeholder = "어떤 드라마가 생각나세요?",
  onSubmit,
  to = "/search",
}: Props) {
  const router = useRouter();
  return (
    <div className="px-4 py-4">
      <form
        className="relative"
        action={(formData) => {
          const keyword = String(formData.get("q") || "").trim();
          onSubmit?.(keyword);
          if (keyword) {
            const dest = `${to}?q=${encodeURIComponent(keyword)}`;
            router.push(dest);
          }
        }}
      >
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[var(--text-secondary)]">
          search
        </span>
        <input
          name="q"
          className="w-full rounded-full border-0 bg-[var(--secondary-color)] py-3.5 pl-12 pr-4 text-base text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          placeholder={placeholder}
          type="text"
        />
      </form>
    </div>
  );
}
