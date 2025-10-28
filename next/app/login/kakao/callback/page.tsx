"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useAuth } from "../../../../lib/hooks/useAuth";
import { authApi } from "../../../../lib/api";
import { useToast } from "../../../../components/system/Toast";

function KakaoCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const { setTokensFromSocialLogin } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleKakaoCallback = async () => {
      try {
        const code = searchParams.get("code");

        if (!code) {
          throw new Error("카카오 로그인 코드가 없습니다.");
        }

        const response = await authApi.kakaoLogin(code);

        if (!response.success || !response.data) {
          throw new Error(response.message || "카카오 로그인에 실패했습니다.");
        }

        const { isSuccess, result, message } = response.data;
        if (!isSuccess || !result) {
          throw new Error(message || "카카오 로그인에 실패했습니다.");
        }

        await setTokensFromSocialLogin(result);
        toast.show("카카오 로그인에 성공했습니다.");
        router.replace("/");
      } catch (error) {
        console.error("카카오 로그인 콜백 오류", error);
        const message =
          error instanceof Error
            ? error.message
            : "카카오 로그인 중 오류가 발생했습니다.";
        toast.show(message);
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    handleKakaoCallback();
  }, [router, searchParams, toast, setTokensFromSocialLogin]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="text-gray-600">카카오 로그인 처리 중...</p>
        </div>
      </div>
    );
  }

  return null;
}

export default function KakaoCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
            <p className="text-gray-600">로딩 중...</p>
          </div>
        </div>
      }
    >
      <KakaoCallbackContent />
    </Suspense>
  );
}
