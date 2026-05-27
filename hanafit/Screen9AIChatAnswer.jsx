// Screen 9 — AI 상담 답변 진행 중
// 봇 인사 → 유저 quote → 봇 카드 (체크리스트 + outline 버튼들) → dots → 풀폭 보라 CTA
const AIChatAnswerScreen = ({ onBack, onOpen }) => (
  <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", overflow: "hidden" }}>
    <DrillHeader title="하나FIT AI" onBack={onBack}
      right={
        <>
          <HanaIcon name="headphones" size={22}/>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}>
            <HanaIcon name="x" size={22}/>
          </button>
        </>
      }/>

    <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 18px" }}>
      <HFSourceNote>자격을 확정하지 않고, 공식 기준으로 안내해요</HFSourceNote>

      {/* Prior bot greeting */}
      <div style={{ marginTop: 18 }}>
        <HFBotBubble>
          안녕하세요 서연님,<br/>
          무엇이 궁금하신가요?
        </HFBotBubble>
      </div>

      {/* User quote */}
      <HFUserQuote time="18:08">청년월세지원 받을 수 있어?</HFUserQuote>

      {/* Bot detailed answer */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <HFBotAvatar/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            background: "#F5F6FA", borderRadius: 16,
            padding: "16px 18px",
          }}>
            <div style={{
              fontSize: 16, fontWeight: 700, color: "#22262B",
              letterSpacing: "-0.02em", lineHeight: 1.4,
            }}>
              서연님 정보 기준으로<br/>
              신청 가능성이 높아요
            </div>

            <div style={{ height: 1, background: "rgba(34,38,43,0.08)", margin: "14px 0" }}/>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <CheckLine ok>나이 충족</CheckLine>
              <CheckLine ok>무주택 충족</CheckLine>
              <CheckLine>거주 형태 확인 필요</CheckLine>
              <CheckLine>소득 기준 확인 필요</CheckLine>
            </div>
          </div>

          {/* Outline button stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
            <HFOutlineBtnPurple>주소 이전 여부 확인</HFOutlineBtnPurple>
            <HFOutlineBtnPurple>소득 기준 확인</HFOutlineBtnPurple>
            <HFOutlineBtnPurple onClick={() => onOpen("detail")}>필요 서류 보기</HFOutlineBtnPurple>
          </div>

          <HFDotIndicator current={0} total={5}/>

          {/* Big purple CTA */}
          <button className="hana-press" style={{
            width: "100%", height: 56, borderRadius: 28,
            background: "#7567D5", color: "#fff", border: "none",
            fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em",
            cursor: "pointer", fontFamily: "inherit", marginTop: 4,
          }} onClick={() => onOpen("list")}>
            신청 가능 정책 보기 ›
          </button>

          <div style={{ marginTop: 14, fontSize: 12, color: "#8F97A0", letterSpacing: "-0.02em" }}>
            출처: 정부24, 청년정책 통합 검색
          </div>
        </div>
      </div>
    </div>

    <HFChatInput/>
  </div>
);

const CheckLine = ({ ok, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{
      width: 22, height: 22, borderRadius: 11, flexShrink: 0,
      background: ok ? "#00A38D" : "#FFD24A",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {ok ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ) : (
        <span style={{ fontSize: 13, fontWeight: 800, color: "#22262B" }}>!</span>
      )}
    </div>
    <span style={{
      fontSize: 14, color: "#22262B", letterSpacing: "-0.02em",
      fontWeight: ok ? 500 : 600,
    }}>{children}</span>
  </div>
);

window.AIChatAnswerScreen = AIChatAnswerScreen;
