"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { BottomNav } from "../../components/home/BottomNav";
import { useToast } from "../../components/system/Toast";
import { useAuth } from "../../lib/hooks/useAuth";
import {
  authApi,
  MemberDto,
  stampApi,
  StampDto,
  locationApi,
  PageLocationReviewDto,
  Pageable,
} from "../../lib/api";

interface WeeklyVisitStat {
  day: string;
  count: number;
}

const WEEK_DAYS: WeeklyVisitStat["day"][] = [
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
  "일",
];
const GENRE_COLORS = [
  "#ef4444",
  "#8b5cf6",
  "#22c55e",
  "#06b6d4",
  "#f59e0b",
  "#6366f1",
];
const REVIEW_PAGEABLE: Pageable = {
  page: 0,
  size: 10,
  sort: ["createdAt,desc"],
};

function normalizeGenres(preferredGenres?: string | string[] | null): string[] {
  if (!preferredGenres) return [];
  if (Array.isArray(preferredGenres))
    return preferredGenres.filter(Boolean).map((g) => g.trim());
  return preferredGenres
    .split(",")
    .map((genre) => genre.trim())
    .filter(Boolean);
}

function formatRelativeTime(isoString: string): string {
  const target = new Date(isoString);
  if (Number.isNaN(target.getTime())) return isoString;

  const now = new Date();
  const diffMs = now.getTime() - target.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 1) return "방금 전";
  if (diffMinutes < 60) return `${diffMinutes}분 전`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}일 전`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return `${diffWeeks}주 전`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return `${diffMonths}개월 전`;

  const diffYears = Math.floor(diffDays / 365);
  return `${diffYears}년 전`;
}

export default function MyPage() {
  const router = useRouter();
  const toast = useToast();
  const { user, token, loading: authLoading, logout } = useAuth();

  const [profile, setProfile] = useState<MemberDto | null>(null);
  const [recentStamps, setRecentStamps] = useState<StampDto[]>([]);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [reviewsPage, setReviewsPage] = useState<PageLocationReviewDto | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading) return;
    if (!token) {
      router.replace("/login");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const [profileRes, stampsRes, pointsRes, reviewsRes] =
          await Promise.all([
            authApi.getMyInfo(),
            stampApi.getMyRecentStamps(20),
            stampApi.getMyTotalPoints(),
            locationApi.getMyLocationReviews(REVIEW_PAGEABLE),
          ]);

        if (profileRes.success && profileRes.data) {
          setProfile(profileRes.data);
        }

        if (stampsRes.success && stampsRes.data) {
          setRecentStamps(stampsRes.data);
        }

        if (pointsRes.success && typeof pointsRes.data === "number") {
          setTotalPoints(pointsRes.data);
        }

        if (reviewsRes.success && reviewsRes.data) {
          setReviewsPage(reviewsRes.data);
        }
      } catch (error) {
        console.error("마이페이지 데이터 불러오기 실패", error);
        const message =
          error instanceof Error
            ? error.message
            : "마이페이지 정보를 불러오지 못했어요.";
        setErrorMessage(message);
        toast.show(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authLoading, token, router, toast]);

  const preferredGenres = useMemo(
    () => normalizeGenres(profile?.preferredGenres),
    [profile?.preferredGenres]
  );
  const displayName = useMemo(
    () => profile?.name?.trim() || user?.name?.trim() || "여행자",
    [profile?.name, user?.name]
  );
  const avatarInitial = displayName.charAt(0) || "여";

  const statusMessage = useMemo(() => {
    if (profile?.badges) return profile.badges;
    if (preferredGenres.length > 0) {
      return `${preferredGenres.slice(0, 3).join(", ")} 팬`;
    }
    return profile?.preferredLanguage
      ? `${profile.preferredLanguage} 사용자`
      : "여행을 사랑하는 사람";
  }, [profile?.badges, profile?.preferredLanguage, preferredGenres]);

  const weeklyVisits = useMemo<WeeklyVisitStat[]>(() => {
    const counts = Array(WEEK_DAYS.length).fill(0) as number[];
    recentStamps.forEach((stamp) => {
      const date = new Date(stamp.collectedAt);
      if (Number.isNaN(date.getTime())) return;
      const dayIndex = date.getDay(); // 0 (Sun) - 6 (Sat)
      const normalizedIndex =
        dayIndex === 0 ? WEEK_DAYS.length - 1 : dayIndex - 1;
      counts[normalizedIndex] += 1;
    });
    return WEEK_DAYS.map((day, index) => ({ day, count: counts[index] }));
  }, [recentStamps]);

  const uniqueLocationsVisited = useMemo(() => {
    const unique = new Set<number>();
    recentStamps.forEach((stamp) => {
      if (stamp.locationId != null) unique.add(stamp.locationId);
    });
    return unique.size;
  }, [recentStamps]);

  const reviewCount = reviewsPage?.totalElements ?? 0;

  const genreStats = useMemo(() => {
    if (preferredGenres.length === 0)
      return [] as { label: string; value: number; color: string }[];
    const baseValue = Math.floor(100 / preferredGenres.length) || 25;
    return preferredGenres.slice(0, 6).map((genre, index) => ({
      label: genre,
      value: Math.min(100, baseValue),
      color: GENRE_COLORS[index % GENRE_COLORS.length],
    }));
  }, [preferredGenres]);

  const recentActivities = useMemo(() => {
    const stampActivities = recentStamps.map((stamp) => ({
      id: `stamp-${stamp.locationId}-${stamp.collectedAt}`,
      title: `${stamp.locationName || "촬영지"} 방문`,
      subtitle: formatRelativeTime(stamp.collectedAt),
      imageUrl: stamp.stampImage,
      createdAt: stamp.collectedAt,
    }));

    const reviewActivities = (reviewsPage?.content ?? []).map((review) => ({
      id: `review-${review.id}`,
      title: review.title || `${review.locationId} 리뷰 작성`,
      subtitle: formatRelativeTime(review.createdAt),
      imageUrl: undefined,
      createdAt: review.createdAt,
    }));

    return [...stampActivities, ...reviewActivities]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 6);
  }, [recentStamps, reviewsPage?.content]);

  const isLoading = authLoading || loading;

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">
            마이페이지
          </h1>
        </header>

        {isLoading ? (
          <section className="px-4 py-6">
            <div className="h-24 animate-pulse rounded-2xl bg-gray-200" />
            <div className="mt-6 h-32 animate-pulse rounded-2xl bg-gray-200" />
            <div className="mt-4 h-48 animate-pulse rounded-2xl bg-gray-200" />
          </section>
        ) : (
          <>
            {/* 프로필 섹션 */}
            <section className="px-4 py-6">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-2xl font-bold text-white">
                  {avatarInitial}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-[var(--text-primary)]">
                    {displayName}님
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {statusMessage}
                  </p>
                </div>
                <button
                  className="text-[var(--text-secondary)]"
                  onClick={() => router.push("/my/profile")}
                  aria-label="프로필 수정"
                >
                  <span className="material-symbols-outlined text-xl">
                    edit
                  </span>
                </button>
              </div>
              {errorMessage && (
                <p className="mt-3 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600">
                  {errorMessage}
                </p>
              )}
            </section>

            {/* 나의 활동 통계 */}
            <section className="px-4 py-4">
              <h3 className="mb-3 text-lg font-bold text-[var(--text-primary)]">
                나의 활동 통계
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="mb-2 text-sm font-semibold text-[var(--text-primary)]">
                    주간 방문 추이
                  </p>
                  <div className="flex h-28 items-end justify-between gap-2">
                    {weeklyVisits.map(({ day, count }) => (
                      <div
                        key={day}
                        className="flex flex-1 flex-col items-center gap-1"
                      >
                        <div
                          className="w-full rounded-t-md bg-[var(--primary-color)] transition-all"
                          style={{ height: `${Math.max(8, 8 + count * 16)}px` }}
                        />
                        <span className="text-xs text-[var(--text-secondary)]">
                          {day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="mb-2 text-sm font-semibold text-[var(--text-primary)]">
                    장르 선호도
                  </p>
                  <div className="space-y-3">
                    {genreStats.length === 0 ? (
                      <p className="text-xs text-[var(--text-secondary)]">
                        선호 장르 정보가 아직 없어요.
                      </p>
                    ) : (
                      genreStats.map((genre) => (
                        <div key={genre.label}>
                          <div className="mb-1 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                            <span className="font-medium text-[var(--text-primary)]">
                              {genre.label}
                            </span>
                            <span>{genre.value}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-100">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${genre.value}%`,
                                backgroundColor: genre.color,
                              }}
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 통계 카드 */}
            <section className="px-4 py-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-[var(--primary-color)]">
                    {uniqueLocationsVisited}
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-secondary)]">
                    방문한 장소
                  </div>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-[var(--primary-color)]">
                    {totalPoints}
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-secondary)]">
                    보유 포인트
                  </div>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-[var(--primary-color)]">
                    {reviewCount}
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-secondary)]">
                    작성한 리뷰
                  </div>
                </div>
              </div>
            </section>

            {/* 메뉴 섹션 */}
            <section className="px-4 py-4">
              <div className="space-y-2">
                <div className="rounded-xl bg-white shadow-sm">
                  <div className="border-b border-gray-100 p-4">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      내 활동
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <Link
                      href="/my/saved"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--primary-color)]">
                          bookmark
                        </span>
                        <span className="text-[var(--text-primary)]">
                          저장한 장소
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/my/reviews"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--primary-color)]">
                          rate_review
                        </span>
                        <span className="text-[var(--text-primary)]">
                          내 리뷰
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/my/visits"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--primary-color)]">
                          history
                        </span>
                        <span className="text-[var(--text-primary)]">
                          방문 기록
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow-sm">
                  <div className="border-b border-gray-100 p-4">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      설정
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <Link
                      href="/my/settings#notifications"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--text-secondary)]">
                          notifications
                        </span>
                        <span className="text-[var(--text-primary)]">
                          알림 설정
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/my/settings#privacy"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--text-secondary)]">
                          privacy_tip
                        </span>
                        <span className="text-[var(--text-primary)]">
                          개인정보 처리방침
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/my/support"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--text-secondary)]">
                          help
                        </span>
                        <span className="text-[var(--text-primary)]">
                          고객센터
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow-sm">
                  <div className="border-b border-gray-100 p-4">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      계정
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <Link
                      href="/my/profile"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--text-secondary)]">
                          person
                        </span>
                        <span className="text-[var(--text-primary)]">
                          프로필 수정
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/my/password"
                      className="flex w-full items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--text-secondary)]">
                          lock
                        </span>
                        <span className="text-[var(--text-primary)]">
                          비밀번호 변경
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center justify-between p-4 text-left text-red-500 hover:bg-red-50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined">
                          logout
                        </span>
                        <span>로그아웃</span>
                      </span>
                      <span className="material-symbols-outlined text-xl">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 최근 활동 */}
            <section className="px-4 py-4">
              <h3 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                최근 활동
              </h3>
              {recentActivities.length === 0 ? (
                <div className="rounded-xl bg-white p-4 text-sm text-[var(--text-secondary)] shadow-sm">
                  아직 기록된 활동이 없어요.
                </div>
              ) : (
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <div
                        className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-cover bg-center"
                        style={{
                          backgroundImage: activity.imageUrl
                            ? `url(${activity.imageUrl})`
                            : "linear-gradient(135deg, #6f83f6, #3551f2)",
                        }}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[var(--text-primary)]">
                          {activity.title}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)]">
                          {activity.subtitle}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
                        chevron_right
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </main>
      <BottomNav active="my" />
    </div>
  );
}
