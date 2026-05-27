// Screen 8 — AI 상담 첫 진입
// 흰 배경 · 중앙 "하나FIT AI" 헤더 · 봇 인사 · 4개 풀폭 quick reply · 하단 입력바
const AIChatIntroScreen = ({ onBack, onSend }) => (
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

      <div style={{ marginTop: 18 }}>
        <HFBotBubble>
          안녕하세요 서연님,<br/>
          무엇이 궁금하신가요?
        </HFBotBubble>
        <div style={{ fontSize: 12, color: "#8F97A0", marginLeft: 56, marginTop: 6 }}>18:08</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 22 }}>
        <HFQuickReply onClick={() => onSend("청년월세지원 받을 수 있어?")}>청년월세지원 받을 수 있어?</HFQuickReply>
        <HFQuickReply onClick={() => onSend("청년도약계좌 지금 들어도 돼?")}>청년도약계좌 지금 들어도 돼?</HFQuickReply>
        <HFQuickReply onClick={() => onSend("신청 서류가 헷갈려")}>신청 서류가 헷갈려</HFQuickReply>
        <HFQuickReply onClick={() => onSend("이번 달 생활비가 부족해")}>이번 달 생활비가 부족해</HFQuickReply>
      </div>
    </div>

    <HFChatInput/>
  </div>
);

window.AIChatIntroScreen = AIChatIntroScreen;
