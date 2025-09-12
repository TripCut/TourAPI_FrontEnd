export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">테스트 메인 페이지</h1>
      <p className="text-sm leading-6 opacity-80">
        모바일 레이아웃 테스트
      </p>
      <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>테스트</div>
      </nav>
    </section>
  );
}
