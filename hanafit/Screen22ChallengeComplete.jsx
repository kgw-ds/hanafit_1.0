// Screen 22 — 챌린지 달성 (5/5 모든 미션 완료)
// 옅은 그린 · 트로피 · "챌린지 달성!" · 미션별 누적 효과 · 다음 멘토 추천
const ChallengeCompleteScreen = ({ onBack, onNextMentor, onShare }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_GREEN_BG, overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="챌린지 달성" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 180px" }}>
      <div style={{ display: "flex", justifyContent: "center", margin: "8px 0 12px" }}>
        <img src="assets/illust/hanafit-celebrate.svg" alt="" style={{ width: 200 }}/>
      </div>

      <h1 style={{
        margin: 0, textAlign: "center",
        fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        🏆 챌린지 달성!<br/>5개 미션 모두 완료
      </h1>
      <div style={{
        marginTop: 12, textAlign: "center",
        fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em",
      }}>
        멘토 루틴을 끝까지 따라간 또래는 <b style={{ color: "#00A38D" }}>상위 18%</b>예요
      </div>

      {/* Cumulative impact */}
      <Card style={{ marginTop: 22, padding: "20px 22px 22px" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>
          누적 성과
        </div>
        <div style={{ height: 1, background: "#F0F0F0", margin: "14px 0" }}/>
        <ImpactRow icon="💰" label="청년미래적금" value="모은 금액 70만원" valueColor="#00A38D"/>
        <ImpactRow icon="🚇" label="K-패스 환급" value="누적 12만원" valueColor="#00A38D"/>
        <ImpactRow icon="💳" label="체크카드 통제" value="평균 소비 -18%" valueColor="#7567D5"/>
        <ImpactRow icon="🏦" label="비상금 통장" value="자동 적립 6만원" valueColor="#00A38D"/>
        <ImpactRow icon="🔁" label="자동이체 6개월" value="우대금리 +1.0% 달성" valueColor="#00A38D" last/>
        <div style={{ height: 1, background: "#F0F0F0", margin: "12px 0" }}/>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>
            총 효과
          </span>
          <span style={{
            fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", lineHeight: 1,
          }}>월 +8.5<span style={{ fontSize: "0.55em", fontWeight: 700 }}>만원</span></span>
        </div>
      </Card>

      {/* Next mentor */}
      <div style={{
        margin: "26px 4px 12px",
        fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>다음 도전</div>

      <div style={{
        background: "linear-gradient(180deg, #ECF8F2 0%, #FFFFFF 70%)",
        borderRadius: 20, padding: "18px 20px",
        border: "1.5px solid #B7E0CF",
        boxShadow: "0 6px 18px rgba(63,169,141,0.14)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 22, background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
            boxShadow: "0 2px 6px rgba(34,38,43,0.06)",
          }}>👤</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: "#7567D5", fontWeight: 700, letterSpacing: "-0.02em" }}>다음 단계 멘토</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#22262B", marginTop: 2, letterSpacing: "-0.02em" }}>저축왕 · 25세 사회초년생</div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: "#22262B", marginTop: 12, letterSpacing: "-0.02em", lineHeight: 1.5 }}>
          월 30만원 청년적금 + 비상금 1년치 운영<br/>
          한 단계 더 도전해보세요
        </div>
        <button onClick={onNextMentor} className="hana-press" style={{
          width: "100%", marginTop: 14, height: 44, borderRadius: 22,
          background: "#00A38D", color: "#fff", border: "none",
          fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
          cursor: "pointer", fontFamily: "inherit",
        }}>다음 멘토로 시작하기</button>
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px",
      background: "linear-gradient(180deg, rgba(244,249,230,0) 0%, rgba(238,245,226,0.95) 30%, #EEF5E2 100%)",
      display: "flex", flexDirection: "column", gap: 6,
    }}>
      <PrimaryCTA onClick={onNextMentor}>다음 멘토 시작하기</PrimaryCTA>
      <button onClick={onShare} style={{
        background: "transparent", border: "none",
        color: "#5E6976", fontSize: 14, fontWeight: 600,
        letterSpacing: "-0.02em", padding: 10, cursor: "pointer", fontFamily: "inherit",
      }}>성과 공유하기</button>
    </div>
  </div>
);

const ImpactRow = ({ icon, label, value, valueColor = "#22262B", last }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12,
    padding: "12px 0",
    borderBottom: last ? "none" : "1px solid #F0F0F0",
  }}>
    <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{icon}</span>
    <span style={{ flex: 1, fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</span>
    <span style={{
      fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em",
      color: valueColor,
    }}>{value}</span>
  </div>
);

window.ChallengeCompleteScreen = ChallengeCompleteScreen;
