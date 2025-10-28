"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { authApi, LoginResponse, MemberDto, SignupPayload } from "../api/auth";
import { ApiError, apiClient } from "../api/client";

interface AuthContextType {
  user: LoginResponse["user"] | null;
  token: string | null;
  login: (memberId: string, memberPw: string) => Promise<void>;
  signup: (payload: SignupPayload) => Promise<void>;
  setTokensFromSocialLogin: (loginResponse: LoginResponse) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LoginResponse["user"] | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 토큰 복원
    const savedToken = localStorage.getItem("auth_token");
    if (savedToken) {
      setToken(savedToken);
      apiClient.setAuthToken(savedToken);
      // 토큰 검증 (내 정보 조회로 대체)
      authApi
        .getMyInfo()
        .then((response) => {
          if (response.success && response.data) {
            // 토큰이 유효하면 사용자 정보 설정
            setUser({
              userId: parseInt(response.data.memberId, 10),
              name: response.data.name,
              email: response.data.email,
              createAt: new Date().toISOString(),
            });
          } else {
            logout();
          }
        })
        .catch(() => logout())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (memberId: string, memberPw: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authApi.login({ memberId, memberPw });

      if (response.success && response.data) {
        const { accessToken, refreshToken } = response.data;
        saveTokens(accessToken, refreshToken);
        await fetchAndSetUser();
      } else {
        throw new Error(response.message || "로그인에 실패했습니다.");
      }
    } catch (err) {
      const error = err as ApiError;
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (payload: SignupPayload) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authApi.signup(payload);

      if (response.success && response.data) {
        // 회원가입 성공 후 로그인 처리
        const loginResponse = await authApi.login({
          memberId: payload.member.memberId,
          memberPw: payload.member.memberPw,
        });

        if (loginResponse.success && loginResponse.data) {
          const { accessToken, refreshToken } = loginResponse.data;
          saveTokens(accessToken, refreshToken);
          await fetchAndSetUser();
        }
      } else {
        throw new Error(response.message || "회원가입에 실패했습니다.");
      }
    } catch (err) {
      const error = err as ApiError;
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const setTokensFromSocialLogin = async (loginResponse: LoginResponse) => {
    const { accessToken, refreshToken, user: socialUser } = loginResponse;
    saveTokens(accessToken, refreshToken);
    if (socialUser) {
      setUser(socialUser);
    } else {
      await fetchAndSetUser();
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setError(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("refresh_token");
    apiClient.removeAuthToken();
  };

  const saveTokens = (accessToken: string, refreshToken: string) => {
    setToken(accessToken);
    localStorage.setItem("auth_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    apiClient.setAuthToken(accessToken);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        signup,
        setTokensFromSocialLogin,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
