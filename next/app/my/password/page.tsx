import { BottomNav } from "../../../components/home/BottomNav";

export default function MyPasswordChangePage() {
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">비밀번호 변경</h1>
        </header>

        <form className="px-4 py-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">현재 비밀번호</label>
            <input type="password" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="현재 비밀번호" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">새 비밀번호</label>
            <input type="password" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="새 비밀번호" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">새 비밀번호 확인</label>
            <input type="password" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="새 비밀번호 확인" />
          </div>
          <div className="pt-2">
            <button type="submit" className="w-full rounded-full bg-[var(--primary-color)] px-6 py-3 font-semibold text-white">변경하기</button>
          </div>
        </form>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


