// Screen 26 — 신청 체크리스트 (청년월세지원)
// 외부 정부 사이트로 신청하는 정책의 단계별 가이드
// 흰 배경 · 진행률 카드 · 5단계 체크리스트 · 하단 sticky CTA
const ApplicationChecklistScreen = ({ onBack, onAskAI }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="신청 준비" onBack={onBack}/>

    <div style={{
      flex: 1, overflow: "auto",
      background: "#fff", padding: "12px 24px 220px",
    }}>
      <h1 style={{
        margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        청년월세지원<br/>
        신청 준비
      </h1>

      {/* 진행률 카드 */}
      <div style={{
        marginTop: 20, padding: "18px 20px",
        background: "#F0F8F4", borderRadius: 18,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#007A6A", letterSpacing: "-0.02em" }}>
            5단계 중 1단계 완료
          </span>
          <span style={{
            fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", lineHeight: 1,
          }}>20<span style={{ fontWeight: 700, fontSize: "0.55em" }}>%</span></span>
        </div>
        <div style={{
          marginTop: 12, height: 8, borderRadius: 4,
          background: "rgba(255,255,255,0.7)", overflow: "hidden",
        }}>
          <div style={{ width: "20%", height: "100%", background: "#00A38D", borderRadius: 4 }}/>
        </div>
      </div>

      {/* 체크리스트 카드 5개 */}
      <div style={{
        marginTop: 22, display: "flex", flexDirection: "column", gap: 10,
      }}>
        {/* 단계 1 — 완료 */}
        <HFChecklistStep
          stepNum="1" status="done"
          title="주민등록등본 발급"
          completedNote="완료됨 (2026.05.24)"/>

        {/* 단계 2 — 진행 필요 */}
        <HFChecklistStep
          stepNum="2" status="do"
          title="임대차계약서 업로드"
          action="📎 계약서 업로드하기"
          actionVariant="primary"
          note="지원 형식: PDF, JPG, PNG"/>

        {/* 단계 3 — 진행 필요 (보라) */}
        <HFChecklistStep
          stepNum="3" status="do"
          title="월세 이체 내역 불러오기"
          action="🏦 하나원큐에서 가져오기"
          actionVariant="purple"/>

        {/* 단계 4 — 확인 필요 */}
        <HFChecklistStep
          stepNum="4" status="review"
          title="소득 기준 확인"
          completedNote="AI에게 물어보세요"
          action="🤖 AI에게 물어보기"
          actionVariant="outline"
          onAction={onAskAI}/>

        {/* 단계 5 — 외부 링크 */}
        <HFChecklistStep
          stepNum="5" status="do"
          title="공식 사이트 신청"
          action="🌐 정부24로 이동"
          actionVariant="external"/>
      </div>

      <div style={{
        marginTop: 18, padding: "0 4px",
        fontSize: 12, color: "#8F97A0", letterSpacing: "-0.02em", lineHeight: 1.5,
      }}>
        서류는 신청 기관 기준에 따라 추가 요청될 수 있어요
      </div>
    </div>

    {/* Sticky CTA */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 4,
    }}>
      <PrimaryCTA>다음 단계 진행하기</PrimaryCTA>
      <button onClick={onAskAI} style={{
        background: "transparent", border: "none",
        color: "#7567D5", fontSize: 14, fontWeight: 600,
        letterSpacing: "-0.02em", padding: "10px 4px", cursor: "pointer",
        fontFamily: "inherit",
      }}>막히는 부분 AI에게 물어보기</button>
    </div>
  </div>
);

window.ApplicationChecklistScreen = ApplicationChecklistScreen;
