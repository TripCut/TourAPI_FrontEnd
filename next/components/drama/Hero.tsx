import { DramaBasic } from "../../types/drama";

type Props = {
  drama: DramaBasic;
};

export function DramaHero({ drama }: Props) {
  return (
    <div className="relative h-[50vh] w-full">
      <img
        alt={`${drama.title} 포스터`}
        className="absolute inset-0 size-full object-cover"
        src={drama.posterUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 p-6 text-white">
        <h2 className="text-4xl font-bold mb-2">{drama.title}</h2>
        <div className="flex items-center gap-4 text-sm">
          <span>{drama.year}</span>
          <span>{drama.episodes}부작</span>
          <div className="flex items-center gap-1">
            <span
              className="material-symbols-outlined !text-base"
              style={{ fontVariationSettings: "'FILL' 1", color: "#FFD700" }}
            >
              star
            </span>
            <span>{drama.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
