"use client";

import { useState } from "react";
import { BottomNav } from "../../../components/home/BottomNav";

export default function MySettingsPage() {
  const [pushAll, setPushAll] = useState(true);
  const [pushMarketing, setPushMarketing] = useState(false);
  const [pushUpdates, setPushUpdates] = useState(true);

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">설정</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">알림 설정 및 개인정보</p>
        </header>

        {/* 알림 설정 */}
        <section id="notifications" className="px-4 py-4 scroll-mt-20">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">알림 설정</h2>
          <div className="rounded-2xl bg-white shadow-sm divide-y divide-gray-100">
            <label className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium text-[var(--text-primary)]">전체 알림</p>
                <p className="text-sm text-[var(--text-secondary)]">앱에서 제공하는 모든 알림 수신</p>
              </div>
              <input
                type="checkbox"
                checked={pushAll}
                onChange={(e) => setPushAll(e.target.checked)}
                className="h-5 w-5 accent-[var(--primary-color)]"
              />
            </label>
            <label className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium text-[var(--text-primary)]">프로덕트 업데이트</p>
                <p className="text-sm text-[var(--text-secondary)]">중요한 변경, 공지, 업데이트 안내</p>
              </div>
              <input
                type="checkbox"
                checked={pushUpdates}
                onChange={(e) => setPushUpdates(e.target.checked)}
                className="h-5 w-5 accent-[var(--primary-color)]"
              />
            </label>
            <label className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium text-[var(--text-primary)]">마케팅 알림</p>
                <p className="text-sm text-[var(--text-secondary)]">프로모션, 추천 경로, 이벤트</p>
              </div>
              <input
                type="checkbox"
                checked={pushMarketing}
                onChange={(e) => setPushMarketing(e.target.checked)}
                className="h-5 w-5 accent-[var(--primary-color)]"
              />
            </label>
          </div>
          <div className="mt-4 text-right">
            <button className="rounded-full bg-[var(--primary-color)] px-5 py-2 text-sm font-semibold text-white">저장</button>
          </div>
        </section>

        {/* 개인정보 링크 */}
        <section id="privacy-link" className="px-4 py-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">개인정보</h2>
          <a href="/my/privacy" className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[var(--text-secondary)]">privacy_tip</span>
              <span className="text-[var(--text-primary)]">개인정보 처리방침</span>
            </div>
            <span className="material-symbols-outlined text-[var(--text-secondary)]">chevron_right</span>
          </a>
        </section>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


