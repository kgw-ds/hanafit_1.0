// Screen 3 — 마이데이터 연결 동의
// 흰 배경 · 큰 두 줄 헤더 · 일러스트 · 비교 카드 (자동 vs 직접) · 정보 리스트 · 보안 안내 · 동의
const ConsentScreen = ({ onBack, onNext, onDirect }) => {
  const [agree, setAgree] = useStateHF(false);
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden", position: "relative",
    }}>
      <DrillHeader title="마이데이터 연결" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 24px 220px" }}>
        <h1 style={{
          margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.3, color: "#22262B",
        }}>
          입력 없이<br/>
          내 혜택을 찾아드릴게요
        </h1>

        <div style={{ margin: "16px 0 22px", display: "flex", justifyContent: "center" }}>
          <img src="assets/illust/hanafit-secure.svg" alt=""
            style={{ width: "60%", maxWidth: 200 }}/>
        </div>

        {/* Compare cards */}
        <div style={{ display: "flex", gap: 10 }}>
          <HFCompareCard
            label="자동 진단" value="약 40초" sub="자동으로 빠르게"
            accent="#00A38D"/>
          <HFCompareCard
            label="직접 입력" value="약 10분" sub="직접 입력으로"
            faded/>
        </div>

        {/* Info list */}
        <div style={{
          marginTop: 26, marginBottom: 14,
          fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", color: "#22262B",
        }}>어떤 정보를 확인하나요?</div>
        <Card style={{ padding: 4 }}>
          {[
            { icon: "🪪", title: "나이·주소" },
            { icon: "🏦", title: "계좌·잔액" },
            { icon: "💳", title: "카드 소비 패턴" },
            { icon: "🚇", title: "교통비·월세·구독비 패턴" },
          ].map((row, i, arr) => (
            <div key={row.title} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 18px",
              borderBottom: i < arr.length - 1 ? "1px solid #F0F0F0" : "none",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: "#F0F8F4",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
              }}>{row.icon}</div>
              <span style={{ fontSize: 15, color: "#22262B", letterSpacing: "-0.02em" }}>{row.title}</span>
            </div>
          ))}
        </Card>

        {/* Security card */}
        <div style={{ marginTop: 20 }}>
          <Card style={{ background: "#F0F8F4", boxShadow: "none", padding: "18px 18px 16px" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#00A38D", letterSpacing: "-0.02em", marginBottom: 10 }}>
              안전하게 확인해요
            </div>
            <HFSecureRow>동의한 정보만 사용해요</HFSecureRow>
            <HFSecureRow>또래 비교는 익명 통계로만 보여줘요</HFSecureRow>
            <HFSecureRow>언제든 연결을 해제할 수 있어요</HFSecureRow>
          </Card>
        </div>

        {/* Agreement */}
        <div style={{ marginTop: 18, padding: "0 4px" }}>
          <HFCheckbox checked={agree} onChange={setAgree}>
            위 내용에 모두 동의합니다
          </HFCheckbox>
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "12px 20px 18px", background: "#FFFFFF",
        borderTop: "1px solid #F0F0F0",
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        <PrimaryCTA onClick={onNext} disabled={!agree}>
          하나원큐로 안전하게 연결하기
        </PrimaryCTA>
        <button onClick={onDirect} style={{
          background: "transparent", border: "none",
          color: "#5E6976", fontSize: 14, fontWeight: 600,
          letterSpacing: "-0.02em", padding: 8, cursor: "pointer",
          fontFamily: "inherit", textDecoration: "underline", textUnderlineOffset: 4,
        }}>직접 입력으로 진행</button>
      </div>
    </div>
  );
};

window.ConsentScreen = ConsentScreen;
