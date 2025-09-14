"use client";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleKakaoLogin = async () => {
    try {
      setLoading(true);
      
      // 1. 카카오 로그인 URL 가져오기
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/auth/login/kakao`);
      const kakaoUrl = await response.text();
      
      // 2. 카카오 로그인 페이지로 리다이렉트
      window.location.href = kakaoUrl;
      
    } catch (error) {
      console.error('카카오 로그인 오류:', error);
      alert('카카오 로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full max-w-[412px] h-[802px] mx-auto overflow-hidden -my-6"
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
        <path d="M-119.446 13.5606C-373.112 -62.4525 -706.843 199.596 -842 340.121L-808.328 651H1327.06C1286.38 547.374 1116.05 350.269 760.246 390.858C315.489 441.595 197.636 108.577 -119.446 13.5606Z" fill="url(#paint0_linear_79_752)"/>
        <defs>
          <linearGradient id="paint0_linear_79_752" x1="-162.94" y1="-180.162" x2="124.26" y2="1264.87" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6F83F6"/>
            <stop offset="1" stopColor="#3551F2" stopOpacity="0"/>
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
        <path d="M449.141 10.6872C647.02 -48.616 907.356 155.827 1012.79 265.461L986.522 508H-679.25C-647.511 427.154 -514.643 273.378 -237.087 305.045C109.857 344.628 201.792 84.8163 449.141 10.6872Z" fill="url(#paint0_linear_79_753)"/>
        <defs>
          <linearGradient id="paint0_linear_79_753" x1="483.069" y1="-140.45" x2="258.979" y2="986.914" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6F83F6"/>
            <stop offset="1" stopColor="#3551F2" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 flex h-full flex-col items-center justify-between text-white">
      <header className="w-full max-w-screen-sm safe-px flex justify-center mt-12">
        <img 
            src="/assets/logo.svg" 
            alt="logo" 
            className="w-[120px] h-auto drop-shadow-2xl" 
        />
      </header>

        {/* 마스코드 이미지 */}
        <div className="mt-[140px] flex w-full max-w-screen-sm flex-1 items-center justify-center safe-px">
          <img src="/assets/Image_1.svg"
            alt="mascot"
            className="w-[220px] h-auto drop-shadow-2xl translate-x-[20px]"
          />
        </div>

        {/* 하단 컨텐츠 */}
        <div className="w-full max-w-screen-sm safe-px pb-8">
          <div className="text-center -mt-4">
            <p className="text-lg font-semibold text-white">TripCut에 오신걸 환영해요 :)</p>
            <p className="mt-3 text-sm text-white/80">정보 확인을 위해 로그인해주세요</p>
          </div>

          {/* 카카오 로그인 버튼 (가운데 정렬) */}
          <div className="mt-14 flex w-full justify-center">
            <button 
              onClick={handleKakaoLogin}
              disabled={loading}
              className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img 
                src="/assets/kakao_login.svg" 
                alt="kakao" 
                className="w-[340px] max-w-full hover:opacity-90 transition-opacity" 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


