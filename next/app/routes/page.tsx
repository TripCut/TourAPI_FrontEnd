import { BottomNav } from "../../components/home/BottomNav";
import Image from "next/image";

export default function RoutesPage() {
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        {/* 헤더 */}
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">추천 경로</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">드라마 속 촬영지를 따라가는 여행 코스</p>
        </header>

        {/* 필터 섹션 */}
        <section className="px-4 py-4">
          <div className="flex space-x-3 overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button className="rounded-full px-4 py-2 text-sm shadow-sm bg-[var(--primary-color)] text-white font-semibold whitespace-nowrap">
              전체
            </button>
            <button className="rounded-full px-4 py-2 text-sm shadow-sm bg-white text-[#374151] font-medium ring-1 ring-inset ring-gray-200 whitespace-nowrap">
              로맨스
            </button>
            <button className="rounded-full px-4 py-2 text-sm shadow-sm bg-white text-[#374151] font-medium ring-1 ring-inset ring-gray-200 whitespace-nowrap">
              판타지
            </button>
            <button className="rounded-full px-4 py-2 text-sm shadow-sm bg-white text-[#374151] font-medium ring-1 ring-inset ring-gray-200 whitespace-nowrap">
              코미디
            </button>
            <button className="rounded-full px-4 py-2 text-sm shadow-sm bg-white text-[#374151] font-medium ring-1 ring-inset ring-gray-200 whitespace-nowrap">
              서울
            </button>
            <button className="rounded-full px-4 py-2 text-sm shadow-sm bg-white text-[#374151] font-medium ring-1 ring-inset ring-gray-200 whitespace-nowrap">
              강원
            </button>
          </div>
        </section>

        {/* 추천 경로 목록 */}
        <section className="px-4 py-2">
          <div className="space-y-4">
            {/* 마이데몬 코스 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMdtMA5UxTkNv6WrYNFTHwvSXugxEm13fYv5h2ccEG-PBoKWrAT3ewvA64cEcGVG7BW1UHEGweNr_hIevMuYtWGwkG4gRWxbaAFrdhB0o8Gtd0OmqLZOZfHXY5nqp3tbffo8Y7uMqVITjXfmOzW87nX6MPqlzHgNDEgvhEim-p6yeZlPMqcu5sZMDA9oKzFNWNS776YJQ7H0ZxAOuyeaaFx7A8A4NcMETk_Wentc5G6LR4vG3ol2Eadi5JQeLSvLp65mwhhK0V2GQ"
                  alt="마이데몬 코스"
                  fill
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--primary-color)] text-white text-xs font-semibold px-2 py-1 rounded-full">로맨스</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">마이데몬 로맨틱 코스</h3>
                  <p className="text-sm opacity-90">서울 • 1일 코스 • 4개 장소</p>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-lg">bookmark_border</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--primary-color)] text-lg">schedule</span>
                    <span className="text-sm text-[var(--text-secondary)]">약 6시간</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-400 text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">4.8</span>
                    <span className="text-xs text-[var(--text-secondary)]">(127)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-sm text-[var(--text-primary)]">경희대학교 평화의 전당</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">2</div>
                    <span className="text-sm text-[var(--text-primary)]">청계천</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">3</div>
                    <span className="text-sm text-[var(--text-primary)]">남산타워</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">4</div>
                    <span className="text-sm text-[var(--text-primary)]">한강공원</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 도깨비 코스 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADLVcEVpfn3GgQ498lKr1v7RCBsU1bmttqlzg1ZkFPDhp_i1gscmtHLCp1qturs-I6jJihMLY1GloXs2SGzdo6DN5xqE2k34Es3qpnr75Wk3na31Vx_nHJojaSCt674r-65YLk2LcEqScMg4BX123vhpZ-JmHGHG0Mog3XBct0PfG6OJPY_ETxy-qCb6XjUxzfHQ2S9WX24BtnaTCyZnvuJCBed7k79cywfTeHVDrZUduP-GTWVBD8UiNz4ussNqpwuoIUtOGgKWc"
                  alt="도깨비 코스"
                  fill
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">판타지</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">도깨비 신비로운 여행</h3>
                  <p className="text-sm opacity-90">강릉 • 2일 코스 • 6개 장소</p>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-lg">bookmark_border</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--primary-color)] text-lg">schedule</span>
                    <span className="text-sm text-[var(--text-secondary)]">2일 1박</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-400 text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">4.9</span>
                    <span className="text-xs text-[var(--text-secondary)]">(89)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-sm text-[var(--text-primary)]">정동진 해변</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">2</div>
                    <span className="text-sm text-[var(--text-primary)]">강릉 커피거리</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">3</div>
                    <span className="text-sm text-[var(--text-primary)]">오죽헌</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 바람이 분다 코스 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASz3XSmAdfnS8Aok4-hF8cr_aE0qhK5kOYLoobMqVO-UGKnNHgh4eUK_bL-dhU0IzOFHXPvJcJVTQeC8BXBFPGN7jgC0ldRaTia3whh85-hGGWzVeFOJruGdpVrX001Xf27of_nz5hVQ3oGEDnXuhMcdd4YavUuswxpAAxRvrFcqSRx0mwkxdyRz5MaaciMPLCzbHxHDjeRuZOCfjnuHI2bKOUKfcJqB8uPuBrDB_lAa69-Agv8wFR84NYpmZsjmiV8XnfgYdY9-g"
                  alt="바람이 분다 코스"
                  fill
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">힐링</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">바람이 분다 힐링 코스</h3>
                  <p className="text-sm opacity-90">순천 • 1일 코스 • 3개 장소</p>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-lg">bookmark_border</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--primary-color)] text-lg">schedule</span>
                    <span className="text-sm text-[var(--text-secondary)]">약 4시간</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-400 text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">4.7</span>
                    <span className="text-xs text-[var(--text-secondary)]">(156)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-sm text-[var(--text-primary)]">순천만국가정원</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">2</div>
                    <span className="text-sm text-[var(--text-primary)]">순천만습지</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">3</div>
                    <span className="text-sm text-[var(--text-primary)]">순천시청</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 더 많은 코스 보기 */}
            <div className="bg-gradient-to-r from-[var(--primary-color)] to-purple-500 rounded-2xl p-6 text-center text-white">
              <h3 className="text-lg font-bold mb-2">더 많은 코스를 찾아보세요</h3>
              <p className="text-sm opacity-90 mb-4">인기 드라마의 촬영지를 따라가는 특별한 여행</p>
              <button className="bg-white text-[var(--primary-color)] px-6 py-2 rounded-full font-semibold text-sm">
                전체 코스 보기
              </button>
            </div>
          </div>
        </section>
      </main>
      <BottomNav active="route" />
    </div>
  );
}
