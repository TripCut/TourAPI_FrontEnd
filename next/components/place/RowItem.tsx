import Link from "next/link";
import { PlaceListItem } from "../../types/place";

type Props = { item: PlaceListItem };

export function PlaceRowItem({ item }: Props) {
  return (
    <Link
      href={`/places/${item.id}`}
      className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm"
    >
      <img
        alt={item.title}
        className="h-20 w-20 rounded-lg object-cover"
        src={item.imageUrl}
      />
      <div className="flex-1">
        <p className="font-semibold text-[var(--text-primary)]">{item.title}</p>
        <p className="text-sm text-[var(--text-primary)]">{item.address}</p>
      </div>
    </Link>
  );
}
