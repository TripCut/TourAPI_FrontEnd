export function PrivacyPolicy() {
  return (
    <section id="privacy" className="scroll-mt-20">
      <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">개인정보 처리방침</h2>
      <div className="space-y-3 text-sm text-[var(--text-primary)] leading-relaxed">
        <p>
          본 서비스는 이용자의 개인정보를 소중히 여기며 관련 법령을 준수합니다. 수집되는 정보는 서비스 제공,
          고객 응대 및 품질 향상을 위한 최소한으로 사용됩니다.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>수집 항목: 이메일, 닉네임, 서비스 이용 기록 등</li>
          <li>보유 기간: 회원 탈퇴 시 또는 관계 법령에 따른 기간</li>
          <li>제3자 제공: 법령에 의한 경우를 제외하고 제공하지 않습니다.</li>
        </ul>
        <p>
          자세한 내용은 추후 고지되는 약관 및 정책 문서를 참고해 주세요. 변경 시 공지사항을 통해 안내드립니다.
        </p>
      </div>
    </section>
  );
}


