"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "../../../../lib/api/auth";

function KakaoCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleKakaoCallback = async () => {
      try {
        const code = searchParams.get('code');
        
        if (!code) {
          throw new Error('카카오 로그인 코드가 없습니다.');
        }

        // 카카오 로그인 API 호출
        const response = await authApi.kakaoLogin(code);
        
        if (response.success && response.data) {
          const { isSuccess, result, message } = response.data;
          
          if (isSuccess && result) {
            const { accessToken, refreshToken, user } = result;
            
            // 토큰 저장
            localStorage.setItem('auth_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);
            
            // 사용자 정보 저장
            localStorage.setItem('user_info', JSON.stringify(user));
            
            // 메인 페이지로 리다이렉트
            router.push('/');
          } else {
            throw new Error(message || '카카오 로그인에 실패했습니다.');
          }
        } else {
          throw new Error(response.message || '카카오 로그인에 실패했습니다.');
        }
        
      } catch (err) {
        console.error('카카오 로그인 콜백 오류:', err);
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    handleKakaoCallback();
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">카카오 로그인 처리 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">❌</div>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => router.push('/login')}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover"
          >
            로그인 페이지로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default function KakaoCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    }>
      <KakaoCallbackContent />
    </Suspense>
  );
}
