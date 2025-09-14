import { BottomNav } from "../../components/home/BottomNav";

export default function MyPage() {
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-xl font-bold">마이</h1>
        <p className="mt-2 text-sm text-[var(--text-primary)]">
          준비 중입니다.
        </p>
      </main>
      <BottomNav active="my" />
    </div>
  );
}
