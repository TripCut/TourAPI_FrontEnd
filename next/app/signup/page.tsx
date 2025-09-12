export default function SignupPage() {
  return (
    <div className="relative w-full max-w-[412px] min-h-[802px] mx-auto bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center gap-3 px-5 py-4 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-black/5">
        <button aria-label="뒤로가기" className="h-8 w-8 rounded-full bg-black/5 grid place-items-center">
          <span className="inline-block rotate-180 text-xl leading-none">›</span>
        </button>
        <h1 className="text-[18px] font-semibold">회원가입</h1>
      </header>

      {/* Body */}
      <main className="px-5 py-5">
        <h2 className="text-[18px] font-semibold">회원가입 페이지 입니다 회원가입</h2>
        <p className="mt-2 text-[13px] text-black/70">회원가입을 위한 정보를 입력해주세요.</p>

        <form className="mt-6 space-y-5">
          {/* 아이디 */}
          <div>
            <label className="block text-[14px] font-semibold">아이디 <span className="text-[#ff4d4f]">*</span></label>
            <input
              type="text"
              placeholder="아이디를 입력해주세요."
              className="mt-2 w-full h-11 rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="block text-[14px] font-semibold">비밀번호 <span className="text-[#ff4d4f]">*</span></label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="mt-2 w-full h-11 rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
            />
            <p className="mt-2 text-[12px] text-black/60">영문자, 숫자 기호를 조합하여 8자 이상 사용</p>
          </div>

          {/* 이름 */}
          <div>
            <label className="block text-[14px] font-semibold">이름 <span className="text-[#ff4d4f]">*</span></label>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              className="mt-2 w-full h-11 rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
            />
          </div>

          {/* 이메일 */}
          <div>
            <label className="block text-[14px] font-semibold">이메일 <span className="text-[#ff4d4f]">*</span></label>
            <div className="mt-2 flex gap-2">
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                className="flex-1 h-11 rounded-[10px] border border-black/10 px-3 outline-none focus:border-[#3E57F2]"
              />
              <button type="button" className="h-11 shrink-0 rounded-[10px] border border-black/10 px-3 text-[13px] text-black/70">
                이메일 인증
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* Bottom submit */}
      <div className="sticky bottom-0 mt-10 px-5 pb-6 bg-gradient-to-t from-white via-white to-transparent">
        <button className="w-full h-12 rounded-[12px] bg-[#6F83F6] hover:bg-[#5e73f5] active:bg-[#4f64ef] text-white font-semibold">
          회원가입 하기
        </button>
      </div>
    </div>
  );
}


