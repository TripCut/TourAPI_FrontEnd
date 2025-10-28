"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { BottomSheet } from "../../components/system/BottomSheet";
import { authApi, MemberDto } from "../../lib/api";
import { useAuth } from "../../lib/hooks/useAuth";
import { useToast } from "../../components/system/Toast";

interface FormValues {
  memberId: string;
  memberPw: string;
  confirmPw: string;
  name: string;
  email: string;
  preferredLanguage: string;
  preferredGenres: string[];
  verificationCode: string;
}

const INITIAL_VALUES: FormValues = {
  memberId: "",
  memberPw: "",
  confirmPw: "",
  name: "",
  email: "",
  preferredLanguage: "",
  preferredGenres: [],
  verificationCode: "",
};

const LANGUAGE_OPTIONS = ["한국어", "English", "日本語", "中文", "Español"];
const GENRE_OPTIONS = [
  "로맨스",
  "판타지",
  "코미디",
  "스릴러",
  "역사",
  "드라마",
  "액션",
  "뮤지컬",
  "청춘",
  "미스터리",
];

function SignupContent() {
  const router = useRouter();
  const toast = useToast();
  const { signup } = useAuth();

  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [pending, setPending] = useState(false);
  const [languageSheetOpen, setLanguageSheetOpen] = useState(false);
  const [genreSheetOpen, setGenreSheetOpen] = useState(false);
  const [emailPending, setEmailPending] = useState(false);

  const preferredGenresLabel = useMemo(() => {
    if (values.preferredGenres.length === 0) return "선택해주세요";
    if (values.preferredGenres.length <= 3)
      return values.preferredGenres.join(", ");
    return `${values.preferredGenres.slice(0, 3).join(", ")} 외 ${values.preferredGenres.length - 3}개`;
  }, [values.preferredGenres]);

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (field === "preferredGenres") {
        const items = value.split(",").map((item) => item.trim());
        setValues((prev) => ({
          ...prev,
          preferredGenres: items.filter(Boolean),
        }));
        return;
      }
      setValues((prev) => ({ ...prev, [field]: value }));
    };

  const handleRequestVerification = async () => {
    if (!values.email) {
      toast.show("이메일을 먼저 입력해주세요");
      return;
    }
    try {
      setEmailPending(true);
      const response = await authApi.requestEmailVerification(values.email);
      if (!response.success) {
        throw new Error(response.message || "인증 메일 전송에 실패했습니다");
      }
      toast.show("인증 코드가 전송되었습니다. 메일함을 확인해주세요");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "인증 요청 중 오류가 발생했습니다";
      toast.show(message);
    } finally {
      setEmailPending(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.memberId || !values.memberPw || !values.name || !values.email) {
      toast.show("필수 항목을 모두 입력해주세요");
      return;
    }

    if (values.memberPw !== values.confirmPw) {
      toast.show("비밀번호가 일치하지 않습니다");
      return;
    }

    if (!values.verificationCode) {
      toast.show("이메일 인증 코드를 입력해주세요");
      return;
    }

    try {
      setPending(true);

      const memberDto: MemberDto = {
        memberId: values.memberId,
        memberPw: values.memberPw,
        name: values.name,
        email: values.email,
        preferredLanguage: values.preferredLanguage || undefined,
        preferredGenres:
          values.preferredGenres.length > 0
            ? values.preferredGenres
            : undefined,
      };

      const response = await authApi.signup({
        member: memberDto,
        verificationCode: values.verificationCode,
      });

      if (!response.success || !response.data) {
        throw new Error(response.message || "회원가입에 실패했습니다");
      }

      await signup(memberDto);
      toast.show("회원가입이 완료되었습니다");
      router.replace("/login");
    } catch (error) {
      console.error("회원가입 오류", error);
      const message =
        error instanceof Error
          ? error.message
          : "회원가입 중 오류가 발생했습니다";
      toast.show(message);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="relative mx-auto min-h-[802px] w-full max-w-[412px] bg-white text-[var(--text-primary)]">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-black/5 bg-white/95 px-5 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/75">
        <button
          type="button"
          aria-label="뒤로가기"
          className="grid h-8 w-8 place-items-center rounded-full bg-black/5"
          onClick={() => router.back()}
        >
          <span className="inline-block rotate-180 text-xl leading-none">
            ›
          </span>
        </button>
        <h1 className="text-[18px] font-semibold">회원가입</h1>
      </header>

      <main className="px-5 py-5">
        <h2 className="text-[18px] font-semibold text-[var(--text-primary)]">
          안녕하세요! 새 계정을 만들어볼까요?
        </h2>
        <p className="mt-2 text-[13px] text-[var(--text-secondary)]">
          아래 정보를 입력하고 회원가입을 완료해주세요.
        </p>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              아이디 <span className="text-[#ff4d4f]">*</span>
            </label>
            <input
              value={values.memberId}
              onChange={handleChange("memberId")}
              type="text"
              placeholder="아이디를 입력해주세요"
              autoComplete="username"
              className="mt-2 h-11 w-full rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
              disabled={pending}
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              비밀번호 <span className="text-[#ff4d4f]">*</span>
            </label>
            <input
              value={values.memberPw}
              onChange={handleChange("memberPw")}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              autoComplete="new-password"
              className="mt-2 h-11 w-full rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
              disabled={pending}
            />
            <p className="mt-2 text-[12px] text-black/60">
              영문자, 숫자, 기호를 조합하여 8자 이상 사용해주세요.
            </p>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              비밀번호 확인 <span className="text-[#ff4d4f]">*</span>
            </label>
            <input
              value={values.confirmPw}
              onChange={handleChange("confirmPw")}
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              autoComplete="new-password"
              className="mt-2 h-11 w-full rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
              disabled={pending}
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              이름 <span className="text-[#ff4d4f]">*</span>
            </label>
            <input
              value={values.name}
              onChange={handleChange("name")}
              type="text"
              placeholder="이름을 입력해주세요"
              className="mt-2 h-11 w-full rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
              disabled={pending}
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              이메일 <span className="text-[#ff4d4f]">*</span>
            </label>
            <div className="mt-2 flex gap-2">
              <input
                value={values.email}
                onChange={handleChange("email")}
                type="email"
                placeholder="이메일을 입력해주세요"
                autoComplete="email"
                className="h-11 flex-1 rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
                disabled={pending}
              />
              <button
                type="button"
                className="h-11 shrink-0 rounded-[10px] border border-black/10 px-3 text-[13px] text-black/70 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleRequestVerification}
                disabled={pending || emailPending}
              >
                {emailPending ? "전송 중..." : "이메일 인증"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              인증 코드
            </label>
            <input
              value={values.verificationCode}
              onChange={handleChange("verificationCode")}
              type="text"
              placeholder="메일로 받은 인증 코드를 입력해주세요"
              className="mt-2 h-11 w-full rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
              disabled={pending}
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              선호 언어
            </label>
            <button
              type="button"
              onClick={() => setLanguageSheetOpen(true)}
              className="mt-2 flex h-11 w-full items-center justify-between rounded-[10px] border border-black/10 px-3 text-left text-[14px] text-black/80"
              disabled={pending}
            >
              <span>{values.preferredLanguage || "선택해주세요"}</span>
              <span className="material-symbols-outlined text-[var(--text-secondary)]">
                expand_more
              </span>
            </button>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[var(--text-primary)]">
              선호 장르
            </label>
            <button
              type="button"
              onClick={() => setGenreSheetOpen(true)}
              className="mt-2 flex h-11 w-full items-center justify-between rounded-[10px] border border-black/10 px-3 text-left text-[14px] text-black/80"
              disabled={pending}
            >
              <span>{preferredGenresLabel}</span>
              <span className="material-symbols-outlined text-[var(--text-secondary)]">
                expand_more
              </span>
            </button>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="h-12 w-full rounded-[12px] bg-[#6F83F6] font-semibold text-white transition hover:bg-[#5e73f5] active:bg-[#4f64ef] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={pending}
            >
              {pending ? "회원가입 진행 중..." : "회원가입 하기"}
            </button>
          </div>
        </form>
      </main>

      {languageSheetOpen && (
        <BottomSheet
          initialSnap={0.6}
          snaps={[0.4, 0.6, 0.9]}
          header={
            <h3 className="text-lg font-bold">선호 언어를 선택해주세요</h3>
          }
        >
          <ul className="space-y-2 py-2">
            {LANGUAGE_OPTIONS.map((language) => (
              <li key={language}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${
                    values.preferredLanguage === language
                      ? "border-[var(--primary-color)] bg-[var(--primary-color)]/10"
                      : "border-transparent bg-white hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    setValues((prev) => ({
                      ...prev,
                      preferredLanguage: language,
                    }));
                    setLanguageSheetOpen(false);
                  }}
                >
                  <span>{language}</span>
                  {values.preferredLanguage === language && (
                    <span className="material-symbols-outlined text-[var(--primary-color)]">
                      check
                    </span>
                  )}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[var(--text-secondary)] hover:bg-gray-50"
                onClick={() => {
                  setValues((prev) => ({ ...prev, preferredLanguage: "" }));
                  setLanguageSheetOpen(false);
                }}
              >
                선택 안 함
              </button>
            </li>
          </ul>
        </BottomSheet>
      )}

      {genreSheetOpen && (
        <BottomSheet
          initialSnap={0.7}
          snaps={[0.5, 0.7, 0.9]}
          header={
            <h3 className="text-lg font-bold">선호 장르를 선택해주세요</h3>
          }
        >
          <div className="space-y-3 py-2">
            <fieldset className="grid grid-cols-2 gap-2">
              {GENRE_OPTIONS.map((genre) => {
                const selected = values.preferredGenres.includes(genre);
                return (
                  <label
                    key={genre}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
                      selected
                        ? "border-[var(--primary-color)] bg-[var(--primary-color)]/10"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => {
                        setValues((prev) => ({
                          ...prev,
                          preferredGenres: selected
                            ? prev.preferredGenres.filter(
                                (item) => item !== genre
                              )
                            : [...prev.preferredGenres, genre],
                        }));
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                    />
                    <span>{genre}</span>
                  </label>
                );
              })}
            </fieldset>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-[var(--text-secondary)]"
                onClick={() => setGenreSheetOpen(false)}
              >
                닫기
              </button>
              <button
                type="button"
                className="rounded-full bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setGenreSheetOpen(false)}
              >
                선택 완료
              </button>
            </div>
          </div>
        </BottomSheet>
      )}
    </div>
  );
}

export default function SignupPage() {
  return <SignupContent />;
}
