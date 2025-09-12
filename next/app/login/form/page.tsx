export default function LoginFormPage() {
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
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="ID"
              className="w-full rounded-md bg-white text-[#111] placeholder:text-[#8b8b8b] h-10 px-3 outline-none"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full rounded-md bg-white text-[#111] placeholder:text-[#8b8b8b] h-10 px-3 outline-none"
            />
            <button
              type="submit"
              className="mt-2 h-10 rounded-md bg-[#3E57F2] hover:bg-[#2f49eb] active:bg-[#2941e0] text-white font-semibold tracking-tight"
            >
              로그인
            </button>
          </form>

          <div className="mt-3 flex justify-end">
            <a href="#" className="text-white/80 text-sm hover:text-white">회원가입</a>
          </div>
        </main>
      </div>
    </div>
  );
}


