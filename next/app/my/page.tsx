import { BottomNav } from "../../components/home/BottomNav";
import Link from "next/link";

export default function MyPage() {
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        {/* 헤더 */}
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">마이페이지</h1>
        </header>

        {/* 프로필 섹션 */}
        <section className="px-4 py-6">
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">여</span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[var(--text-primary)]">여행자님</h2>
              <p className="text-sm text-[var(--text-secondary)]">여행을 사랑하는 사람</p>
            </div>
            <button className="text-[var(--text-secondary)]">
              <span className="material-symbols-outlined text-xl">edit</span>
            </button>
          </div>
        </section>

        {/* 나의 활동 통계 */}
        <section className="px-4 py-4">
          <h3 className="mb-3 text-lg font-bold text-[var(--text-primary)]">나의 활동 통계</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* 주간 방문 추이 (막대 그래프) */}
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 text-sm font-semibold text-[var(--text-primary)]">주간 방문 추이</p>
              <div className="flex h-28 items-end justify-between gap-2">
                {(
                  [
                    { day: "월", v: 2 },
                    { day: "화", v: 3 },
                    { day: "수", v: 1 },
                    { day: "목", v: 4 },
                    { day: "금", v: 5 },
                    { day: "토", v: 6 },
                    { day: "일", v: 3 },
                  ] as Array<{ day: string; v: number }>
                ).map((d, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md bg-[var(--primary-color)]"
                      style={{ height: `${8 + d.v * 12}px` }}
                    />
                    <span className="text-xs text-[var(--text-secondary)]">{d.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 장르 선호도 (분포 그래프) */}
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 text-sm font-semibold text-[var(--text-primary)]">장르 선호도</p>
              <div className="space-y-3">
                {(
                  [
                    { label: "로맨스", v: 72, color: "#ef4444" },
                    { label: "판타지", v: 58, color: "#8b5cf6" },
                    { label: "코미디", v: 46, color: "#22c55e" },
                    { label: "스릴러", v: 32, color: "#06b6d4" },
                  ] as Array<{ label: string; v: number; color: string }>
                ).map((g, i) => (
                  <div key={i}>
                    <div className="mb-1 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                      <span className="font-medium text-[var(--text-primary)]">{g.label}</span>
                      <span>{g.v}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${g.v}%`, backgroundColor: g.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 통계 섹션 */}
        <section className="px-4 py-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-[var(--primary-color)]">12</div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">방문한 장소</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-[var(--primary-color)]">8</div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">시청한 드라마</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-[var(--primary-color)]">5</div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">작성한 리뷰</div>
            </div>
          </div>
        </section>

        {/* 메뉴 섹션 */}
        <section className="px-4 py-4">
          <div className="space-y-2">
            {/* 내 활동 */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">내 활동</h3>
              </div>
              <div className="divide-y divide-gray-100">
                <Link href="/my/saved" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--primary-color)]">bookmark</span>
                    <span className="text-[var(--text-primary)]">저장한 장소</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
                <Link href="/my/reviews" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--primary-color)]">rate_review</span>
                    <span className="text-[var(--text-primary)]">내 리뷰</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
                <Link href="/my/visits" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--primary-color)]">history</span>
                    <span className="text-[var(--text-primary)]">방문 기록</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* 설정 */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">설정</h3>
              </div>
              <div className="divide-y divide-gray-100">
                <Link href="/my/settings#notifications" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--text-secondary)]">notifications</span>
                    <span className="text-[var(--text-primary)]">알림 설정</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
                <Link href="/my/settings#privacy" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--text-secondary)]">privacy_tip</span>
                    <span className="text-[var(--text-primary)]">개인정보 처리방침</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
                <Link href="/my/support" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--text-secondary)]">help</span>
                    <span className="text-[var(--text-primary)]">고객센터</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* 계정 */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">계정</h3>
              </div>
              <div className="divide-y divide-gray-100">
                <Link href="/my/profile" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--text-secondary)]">person</span>
                    <span className="text-[var(--text-primary)]">프로필 수정</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
                <Link href="/my/password" className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--text-secondary)]">lock</span>
                    <span className="text-[var(--text-primary)]">비밀번호 변경</span>
                  </div>
                  <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
                </Link>
                <Link href="/login" className="w-full flex items-center justify-between p-4 hover:bg-gray-50 text-red-500">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">logout</span>
                    <span>로그아웃</span>
                  </div>
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 최근 활동 */}
        <section className="px-4 py-4">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">최근 활동</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMdtMA5UxTkNv6WrYNFTHwvSXugxEm13fYv5h2ccEG-PBoKWrAT3ewvA64cEcGVG7BW1UHEGweNr_hIevMuYtWGwkG4gRWxbaAFrdhB0o8Gtd0OmqLZOZfHXY5nqp3tbffo8Y7uMqVITjXfmOzW87nX6MPqlzHgNDEgvhEim-p6yeZlPMqcu5sZMDA9oKzFNWNS776YJQ7H0ZxAOuyeaaFx7A8A4NcMETk_Wentc5G6LR4vG3ol2Eadi5JQeLSvLp65mwhhK0V2GQ')"}}></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">마이데몬 리뷰 작성</p>
                  <p className="text-xs text-[var(--text-secondary)]">2일 전</p>
                </div>
                <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADLVcEVpfn3GgQ498lKr1v7RCBsU1bmttqlzg1ZkFPDhp_i1gscmtHLCp1qturs-I6jJihMLY1GloXs2SGzdo6DN5xqE2k34Es3qpnr75Wk3na31Vx_nHJojaSCt674r-65YLk2LcEqScMg4BX123vhpZ-JmHGHG0Mog3XBct0PfG6OJPY_ETxy-qCb6XjUxzfHQ2S9WX24BtnaTCyZnvuJCBed7k79cywfTeHVDrZUduP-GTWVBD8UiNz4ussNqpwuoIUtOGgKWc')"}}></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">도깨비 촬영지 방문</p>
                  <p className="text-xs text-[var(--text-secondary)]">1주일 전</p>
                </div>
                <span className="material-symbols-outlined text-[var(--text-secondary)] text-xl">chevron_right</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNav active="my" />
    </div>
  );
}
