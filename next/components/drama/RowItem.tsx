import Link from "next/link";
import { DramaListItem } from "../../types/drama";

type Props = {
  item: DramaListItem;
};

export function DramaRowItem({ item }: Props) {
  return (
    <Link
      href={`/drama/${item.id}`}
      className="flex items-center gap-4 px-4 py-3"
    >
      <img
        alt={`${item.title} 포스터`}
        className="h-16 w-16 rounded-lg object-cover"
        src={item.posterUrl}
      />
      <div className="flex-grow">
        <p className="font-semibold text-[var(--text-primary)]">{item.title}</p>
        <p className="text-sm text-[var(--text-primary)]">
          {item.year} • ⭐ {item.rating}
        </p>
      </div>
      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
        chevron_right
      </span>
    </Link>
  );
}
