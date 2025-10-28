"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { authApi } from "../../lib/api";
import { useToast } from "../../components/system/Toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleKakaoLogin = async () => {
    try {
      setLoading(true);
      const response = await authApi.getKakaoLoginUrl();

      if (!response.success || !response.data) {
        throw new Error(
          response.message || "카카오 로그인 URL을 가져오지 못했습니다."
        );
      }

      const kakaoUrl = response.data.startsWith("redirect:")
        ? response.data.replace(/^redirect:/, "")
        : response.data;

      if (!/^https?:\/\//i.test(kakaoUrl)) {
        throw new Error("카카오 로그인 URL 형식이 올바르지 않습니다.");
      }

      window.location.href = kakaoUrl;
    } catch (error) {
      console.error("카카오 로그인 오류:", error);
      const message =
        error instanceof Error
          ? error.message
          : "카카오 로그인 중 오류가 발생했습니다.";
      toast.show(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full max-w-full h-[802px] mx-auto overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(120% 70% at 50% 0%, rgba(136,179,255,0.45) 0%, rgba(136,179,255,0.18) 28%, rgba(136,179,255,0.06) 48%, rgba(136,179,255,0) 60%), linear-gradient(180deg, #6F83F6 0%, #3551F2 100%)",
        backgroundColor: "#3551F2",
      }}
    >
      {/* decorative waves (responsive to 412x917 canvas) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute left-0 right-0 z-0 w-full h-[300px] top-[220px]"
        viewBox="0 0 412 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-119.446 13.5606C-373.112 -62.4525 -706.843 199.596 -842 340.121L-808.328 651H1327.06C1286.38 547.374 1116.05 350.269 760.246 390.858C315.489 441.595 197.636 108.577 -119.446 13.5606Z"
          fill="url(#paint0_linear_79_752)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_79_752"
            x1="-162.94"
            y1="-180.162"
            x2="124.26"
            y2="1264.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6F83F6" />
            <stop offset="1" stopColor="#3551F2" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute left-0 right-0 z-0 w-full h-[260px] bottom-0"
        viewBox="0 0 412 457"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M449.141 10.6872C647.02 -48.616 907.356 155.827 1012.79 265.461L986.522 508H-679.25C-647.511 427.154 -514.643 273.378 -237.087 305.045C109.857 344.628 201.792 84.8163 449.141 10.6872Z"
          fill="url(#paint0_linear_79_753)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_79_753"
            x1="483.069"
            y1="-140.45"
            x2="258.979"
            y2="986.914"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6F83F6" />
            <stop offset="1" stopColor="#3551F2" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 flex h-full flex-col items-center justify-between">
        <header className="w-full max-w-screen-sm safe-px flex justify-center mt-12">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="w-[120px] h-auto drop-shadow-2xl"
          />
        </header>

        {/* 마스코드 이미지 */}
        <div className="mt-[140px] flex w-full max-w-screen-sm flex-1 items-center justify-center safe-px">
          <img
            src="/assets/Image_1.svg"
            alt="mascot"
            className="w-[220px] h-auto drop-shadow-2xl translate-x-[20px]"
          />
        </div>

        {/* 하단 컨텐츠 */}
        <div className="w-full max-w-screen-sm safe-px pb-8">
          <div className="text-center -mt-4">
            <p className="text-lg font-semibold text-white">
              TripCut에 오신걸 환영해요 :)
            </p>
            <p className="mt-3 text-sm text-white/80">
              정보 확인을 위해 로그인해주세요
            </p>
          </div>

          {/* 일반회원 로그인 버튼 (상단) */}
          <div className="mt-14 flex w-full justify-center">
            <button
              aria-label="일반회원으로 로그인"
              onClick={() => router.push("/login/form")}
              disabled={loading}
              className="group w-[340px] max-w-full rounded-[12px] bg-white px-6 h-12 flex items-center justify-center text-base font-semibold text-[#0f172a] shadow-[0_8px_20px_rgba(17,24,39,0.18)] ring-1 ring-inset ring-white/60 transition-all hover:shadow-[0_10px_24px_rgba(17,24,39,0.22)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="inline-flex items-center justify-center gap-2 leading-none">
                <span
                  className="material-symbols-outlined text-[var(--primary-color)]"
                  aria-hidden
                >
                  person
                </span>
                <span className="tracking-tight">일반회원으로 로그인</span>
              </span>
            </button>
          </div>

          {/* 카카오 로그인 버튼 (하단) */}
          <div className="mt-3 mb-10 flex w-full justify-center">
            <button
              aria-label="카카오로 로그인"
              onClick={handleKakaoLogin}
              disabled={loading}
              className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="block w-[340px] max-w-full overflow-hidden rounded-[12px] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
                <img
                  src="/assets/kakao_login.svg"
                  alt="kakao"
                  className="w-full hover:opacity-90 transition-opacity"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
