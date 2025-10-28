"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../lib/hooks/useAuth";
import { useToast } from "../../../components/system/Toast";

export default function LoginFormPage() {
  const router = useRouter();
  const toast = useToast();
  const { login } = useAuth();
  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!memberId || !memberPw) {
      toast.show("아이디와 비밀번호를 입력해주세요");
      return;
    }

    try {
      setLoading(true);
      await login(memberId, memberPw);
      toast.show("로그인되었습니다");
      router.push("/");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "로그인 중 오류가 발생했습니다";
      toast.show(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full max-w-[412px] h-[802px] mx-auto overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(120% 70% at 50% 0%, rgba(136,179,255,0.45) 0%, rgba(136,179,255,0.18) 28%, rgba(136,179,255,0.06) 48%, rgba(136,179,255,0) 60%), linear-gradient(180deg, #6F83F6 0%, #3551F2 100%)",
        backgroundColor: "#3551F2",
      }}
    >
      <div className="relative z-10 flex h-full flex-col items-center text-white">
        <header className="w-full max-w-screen-sm flex justify-center mt-20">
          <img src="/assets/logo.svg" alt="logo" className="w-[140px] h-auto" />
        </header>

        <main className="mt-10 w-full max-w-[340px] px-5">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              value={memberId}
              onChange={(event) => setMemberId(event.target.value)}
              type="text"
              placeholder="ID"
              className="w-full rounded-md bg-white text-[#111] placeholder:text-[#8b8b8b] h-10 px-3 outline-none"
              autoComplete="username"
              disabled={loading}
            />
            <input
              value={memberPw}
              onChange={(event) => setMemberPw(event.target.value)}
              type="password"
              placeholder="PASSWORD"
              className="w-full rounded-md bg-white text-[#111] placeholder:text-[#8b8b8b] h-10 px-3 outline-none"
              autoComplete="current-password"
              disabled={loading}
            />
            <button
              type="submit"
              className="mt-2 h-10 rounded-md bg-[#3E57F2] hover:bg-[#2f49eb] active:bg-[#2941e0] text-white font-semibold tracking-tight disabled:opacity-70"
              disabled={loading}
            >
              {loading ? "로그인 중..." : "로그인"}
            </button>
          </form>

          <div className="mt-3 flex justify-end">
            <a href="#" className="text-white/80 text-sm hover:text-white">
              회원가입
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
