"use client";

type Props = {
  userName: string;
  onNotificationClick?: () => void;
};

export function HomeHeader({ userName, onNotificationClick }: Props) {
  return (
    <header className="flex items-center justify-between px-4 pt-6">
      <h1 className="text-2xl font-bold text-[var(--text-primary)]">
        안녕하세요, {userName}님!
      </h1>
      <button
        className="relative rounded-full p-2 text-[var(--text-primary)]"
        onClick={onNotificationClick}
        aria-label="알림"
      >
        <span className="material-symbols-outlined text-2xl">
          notifications
        </span>
        <span className="absolute right-1 top-1 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </span>
      </button>
    </header>
  );
}
