import { BottomNav } from "../../../components/home/BottomNav";

export default function MyProfileEditPage() {
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">프로필 수정</h1>
        </header>

        <form className="px-4 py-6 space-y-5">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
              여
            </div>
            <button type="button" className="rounded-full border px-4 py-2 text-sm text-[var(--text-primary)]">
              아바타 변경
            </button>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">이름</label>
            <input className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="여행자" defaultValue="여행자" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">상태 메시지</label>
            <input className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="여행을 사랑하는 사람" defaultValue="여행을 사랑하는 사람" />
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full rounded-full bg-[var(--primary-color)] px-6 py-3 font-semibold text-white">
              저장하기
            </button>
          </div>
        </form>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


