// Screen 8 — 신청 체크리스트 (청년월세지원)
// 흰 배경 · 준비율 40% · 5단계 체크리스트 (하나은행 계좌 불러오기 강조)
// 단계별 소요시간 · "이 서류가 뭔지 모르겠어요" → FIT AI
const ApplicationChecklistScreen = ({ onBack, onAskAI, onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <HFBreadcrumb onHome={() => onOpen("home")} onSettings={() => onOpen("settings")}/>
    <DrillHeader title="신청 준비" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", background: "#fff", padding: "12px 24px 220px" }}>
      <h1 style={{
        margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        청년월세지원<br/>신청, 같이 준비해 볼까요?
      </h1>

      {/* 준비율 */}
      <div style={{
        marginTop: 20, padding: "18px 20px",
        background: "#F0F8F4", borderRadius: 18,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#007A6A", letterSpacing: "-0.02em" }}>
            5단계 중 2단계 완료
          </span>
          <span style={{
            fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", lineHeight: 1,
          }}>준비율 40<span style={{ fontWeight: 700, fontSize: "0.5em" }}>%</span></span>
        </div>
        <div style={{ marginTop: 12, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.7)", overflow: "hidden" }}>
          <div style={{ width: "40%", height: "100%", background: "#00A38D", borderRadius: 4 }}/>
        </div>
      </div>

      {/* 체크리스트 */}
      <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 10 }}>
        <ChecklistStep n="1" status="done" title="주민등록등본 발급"
          time="약 3분" doneNote="완료 (2026.05.24)" onAskAI={onAskAI}/>
        <ChecklistStep n="2" status="done" title="임대차계약서 업로드"
          time="약 1분" doneNote="완료 (2026.05.24)" onAskAI={onAskAI}/>
        <ChecklistStep n="3" status="do" title="월세 이체내역 불러오기"
          time="약 30초"
          action="🏦 하나은행 계좌에서 불러오기" actionVariant="hana"
          desc="하나은행 입출금 내역에서 자동으로 가져와요"
          onAskAI={onAskAI} onAction={() => onOpen("consent")}/>
        <ChecklistStep n="4" status="do" title="소득 기준 확인"
          time="약 2분"
          action="🤖 AI에게 물어보기" actionVariant="ai"
          onAskAI={onAskAI} onAction={onAskAI}/>
        <ChecklistStep n="5" status="do" title="공식 사이트 신청"
          time="약 5분"
          action="🌐 정부24로 이동" actionVariant="external"
          onAskAI={onAskAI} onAction={() => onOpen("official-source")}/>
      </div>

      <div style={{ marginTop: 18 }}>
        <HFLegalNote>
          서류는 신청 기관 기준에 따라 추가로 요청될 수 있으며,<br/>
          최종 자격·지급 여부는 신청기관 기준으로 확정됩니다.
        </HFLegalNote>
      </div>
    </div>

    {/* Sticky CTA */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 16px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
    }}>
      <PrimaryCTA onClick={() => onOpen("consent")}>다음 단계 진행하기</PrimaryCTA>
      <HFReturnToHana onClick={() => onOpen("home")}/>
    </div>
  </div>
);

const ChecklistStep = ({ n, status, title, time, doneNote, desc, action, actionVariant, onAction, onAskAI }) => {
  const isDone = status === "done";
  const variantStyle = {
    hana:     { bg: "#00A38D", color: "#fff", border: "none" },
    ai:       { bg: "#fff", color: "#7567D5", border: "1.5px solid #7567D5" },
    external: { bg: "#fff", color: "#22262B", border: "1.5px solid #D8D8D8" },
  }[actionVariant] || { bg: "#00A38D", color: "#fff", border: "none" };

  return (
    <div style={{
      padding: "16px 18px", borderRadius: 16,
      background: isDone ? "#F9FAFB" : "#fff",
      border: isDone ? "1px solid #F0F0F0" : "1.5px solid #ECECEC",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 26, height: 26, borderRadius: 13, flexShrink: 0,
          background: isDone ? "#00A38D" : "#fff",
          border: isDone ? "none" : "1.5px solid #00A38D",
          color: "#00A38D",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800,
        }}>
          {isDone ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : n}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 14.5, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
            textDecoration: isDone ? "line-through" : "none", textDecorationColor: "#B0B0B0",
          }}>{title}</div>
          <div style={{ fontSize: 11, color: "#8F97A0", marginTop: 2, letterSpacing: "-0.02em" }}>
            {isDone ? doneNote : "예상 소요 " + time}
          </div>
        </div>
      </div>

      {!isDone && desc && (
        <div style={{
          marginTop: 10, marginLeft: 38, fontSize: 12, color: "#5E6976",
          letterSpacing: "-0.02em", lineHeight: 1.45,
        }}>{desc}</div>
      )}

      {!isDone && (
        <div style={{ marginTop: 12, marginLeft: 38, display: "flex", flexDirection: "column", gap: 8 }}>
          <button onClick={onAction} className="hana-press" style={{
            width: "100%", height: 42, borderRadius: 12,
            background: variantStyle.bg, color: variantStyle.color,
            border: variantStyle.border,
            fontSize: 13.5, fontWeight: 700, letterSpacing: "-0.02em",
            cursor: "pointer", fontFamily: "inherit",
          }}>{action}</button>
          <button onClick={onAskAI} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "inherit", textAlign: "left", padding: "2px 2px",
            fontSize: 12, fontWeight: 600, color: "#7567D5", letterSpacing: "-0.02em",
            display: "inline-flex", alignItems: "center", gap: 4,
          }}>💬 이 서류가 뭔지 모르겠어요</button>
        </div>
      )}
    </div>
  );
};

window.ApplicationChecklistScreen = ApplicationChecklistScreen;
