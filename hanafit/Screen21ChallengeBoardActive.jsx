// Screen 21 — 챌린지 보드 (재방문 · 진행 중 3/5)
// 옅은 그린 그라데이션 · 진행 헤더 · 5개 미션 (3 완료, 미션4 다음 강조, 미션5 todo)
const ChallengeBoardActiveScreen = ({ onBack, onOpenMission, onCheckin }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_GREEN_BG, overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="챌린지 보드" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 180px" }}>
      <h1 style={{
        margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        잘하고 있어요!<br/>
        두 개 남았어요
      </h1>
      <div style={{ marginTop: 8, fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>
        또래보다 한 발 앞서 있어요 🌱
      </div>

      {/* Progress */}
      <div style={{ marginTop: 18 }}>
        <div style={{
          background: "#fff", borderRadius: 24, padding: "20px 22px",
          boxShadow: "0 2px 10px rgba(34,38,43,0.04)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#5E6976", letterSpacing: "-0.02em" }}>
              미션 완료
            </span>
            <span style={{ fontSize: 13, color: "#22262B", letterSpacing: "-0.02em" }}>
              <b style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em", color: "#00A38D", marginRight: 2 }}>3</b>
              / 5
            </span>
          </div>
          <div style={{
            marginTop: 12, height: 10, background: "#F0F0F0",
            borderRadius: 5, overflow: "hidden",
          }}>
            <div style={{ width: "60%", height: "100%", background: "#00A38D" }}/>
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#00A38D", fontWeight: 700, letterSpacing: "-0.02em" }}>
            60% 달성
          </div>
        </div>
      </div>

      <div style={{
        margin: "24px 4px 12px",
        fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>미션 목록</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <BoardMissionRow num="1" icon="🚌" title="K-패스 등록"
          done doneDate="5/1" doneNote="완료 (5/1) · 1.5만원 환급됨"/>
        <BoardMissionRow num="2" icon="💰" title="생활비 통장 분리"
          done doneDate="5/3"/>
        <BoardMissionRow num="3" icon="🏠" title="청년월세지원 신청"
          done doneDate="5/7"/>
        <BoardMissionRow num="4" icon="🏦" title="청년미래적금 가입"
          star sub="또래 81% 가입"
          next nextNote="지금 가입하면 우대금리 +1.5% 받을 수 있어요"
          onClick={() => onOpenMission("missionDetail")}/>
        <BoardMissionRow num="5" icon="📱" title="자동이체 설정"
          sub="매달 자동으로 저축" meta="난이도 쉬움"/>
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px",
      background: "linear-gradient(180deg, rgba(244,249,230,0) 0%, rgba(238,245,226,0.95) 30%, #EEF5E2 100%)",
      display: "flex", flexDirection: "column", gap: 8,
    }}>
      <PrimaryCTA onClick={() => onOpenMission("missionDetail")}>다음 미션 시작하기 →</PrimaryCTA>
      <HFOutlineBtnPurple onClick={onCheckin}>주간 체크인 보기</HFOutlineBtnPurple>
    </div>
  </div>
);

window.ChallengeBoardActiveScreen = ChallengeBoardActiveScreen;
