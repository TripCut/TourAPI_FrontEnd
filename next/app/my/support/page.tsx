"use client";

import { useState } from "react";
import { BottomNav } from "../../../components/home/BottomNav";

export default function MySupportPage() {
  const [open, setOpen] = useState<string | null>("q1");
  const faqs = [
    {
      id: "q1",
      q: "드라마 촬영지 정보는 어떻게 수집되나요?",
      a: "공공 데이터와 사용자 제보, 운영팀 검수를 통해 정확도를 높여 제공합니다.",
    },
    {
      id: "q2",
      q: "코스 저장 또는 공유는 어떻게 하나요?",
      a: "경로 페이지에서 북마크로 저장하고 공유 버튼으로 SNS/메신저로 공유할 수 있습니다.",
    },
    {
      id: "q3",
      q: "로그인이 필요한 기능은 무엇이 있나요?",
      a: "저장한 장소, 리뷰 작성, 방문 기록 관리 등은 로그인 후 이용 가능합니다.",
    },
  ];

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">고객센터</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">FAQ 및 문의하기</p>
        </header>

        {/* 문의하기 */}
        <section className="px-4 py-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-base font-semibold text-[var(--text-primary)]">문의하기</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="mailto:support@tourapi.app" className="flex items-center gap-2 rounded-xl border border-gray-200 p-3 hover:bg-gray-50">
                <span className="material-symbols-outlined text-[var(--primary-color)]">mail</span>
                <span className="text-sm text-[var(--text-primary)]">이메일 문의</span>
              </a>
              <a href="https://open.kakao.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-gray-200 p-3 hover:bg-gray-50">
                <span className="material-symbols-outlined text-[var(--primary-color)]">chat</span>
                <span className="text-sm text-[var(--text-primary)]">카카오톡 상담</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-2">
          <div className="rounded-2xl bg-white shadow-sm divide-y divide-gray-100">
            {faqs.map((f) => (
              <button
                key={f.id}
                onClick={() => setOpen((prev) => (prev === f.id ? null : f.id))}
                className="w-full text-left p-4 hover:bg-gray-50"
                aria-expanded={open === f.id}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-[var(--text-primary)]">{f.q}</p>
                  <span className="material-symbols-outlined text-[var(--text-secondary)]">
                    {open === f.id ? "expand_less" : "expand_more"}
                  </span>
                </div>
                {open === f.id && (
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </section>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


