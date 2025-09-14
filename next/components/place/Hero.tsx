type Props = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export function PlaceHero({ title, subtitle, imageUrl }: Props) {
  return (
    <div className="relative h-[460px] w-full">
      <img
        alt={subtitle ? `${subtitle} ${title}` : title}
        className="absolute inset-0 size-full object-cover"
        src={imageUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        {subtitle && <p className="text-base font-medium">{subtitle}</p>}
        <h1 className="text-4xl font-extrabold mt-1">{title}</h1>
      </div>
    </div>
  );
}
