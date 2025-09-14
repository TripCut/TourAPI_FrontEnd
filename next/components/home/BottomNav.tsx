"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { icon: string; label: string; href: string };

type Props = {
  active?: "home" | "drama" | "place" | "route" | "my";
  items?: NavItem[];
};

export function BottomNav({
  active,
  items = [
    { icon: "home", label: "홈", href: "/" },
    { icon: "movie", label: "드라마", href: "/drama" },
    { icon: "location_on", label: "여행지", href: "/places" },
    { icon: "bookmark", label: "경로", href: "/routes" },
    { icon: "person", label: "마이", href: "/my" },
  ],
}: Props) {
  const pathname = usePathname();
  const autoActive: Props["active"] = active
    ? active
    : pathname?.startsWith("/drama")
      ? "drama"
      : pathname?.startsWith("/places")
        ? "place"
        : pathname?.startsWith("/routes")
          ? "route"
          : pathname?.startsWith("/my")
            ? "my"
            : "home";

  const isActive = (icon: string) =>
    (autoActive === "home" && icon === "home") ||
    (autoActive === "drama" && icon === "movie") ||
    (autoActive === "place" && icon === "location_on") ||
    (autoActive === "route" && icon === "bookmark") ||
    (autoActive === "my" && icon === "person");

  return (
    <footer className="fixed bottom-0 left-1/2 w-full max-w-sm -translate-x-1/2 transform border-t border-gray-200/80 bg-white/80 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-lg">
      <nav className="flex justify-around">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-1 flex-col items-center justify-end gap-1 ${
              isActive(item.icon)
                ? "text-[var(--primary-color)]"
                : "text-[var(--text-secondary)]"
            }`}
          >
            <span
              className={`material-symbols-outlined ${isActive(item.icon) ? "!font-extrabold" : ""} text-2xl`}
            >
              {item.icon}
            </span>
            <p
              className={`text-xs ${isActive(item.icon) ? "font-bold" : "font-medium"}`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
