import { BottomNav } from "../../../components/home/BottomNav";
import { PrivacyPolicy } from "../../../components/my/PrivacyPolicy";

export default function MyPrivacyPage() {
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">개인정보 처리방침</h1>
        </header>
        <div className="px-4 py-6">
          <PrivacyPolicy />
        </div>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


