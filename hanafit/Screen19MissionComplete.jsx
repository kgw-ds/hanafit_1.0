// Screen 19 — 미션 1개 완료 축하
// 옅은 민트 · 풀스크린 · X 닫기 · 축하 일러 · 완료 미션 + 다음 미션 추천 · CTA
const MissionCompleteScreen = ({ onClose, onNext }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_MINT_BG, overflow: "hidden", position: "relative",
  }}>
    <header style={{
      height: 56, padding: "0 16px",
      display: "flex", justifyContent: "flex-end", alignItems: "center", flexShrink: 0,
    }}>
      <button onClick={onClose} style={{
        background: "none", border: "none", color: "#22262B",
        cursor: "pointer", padding: 6, display: "flex",
      }}><HanaIcon name="x" size={24}/></button>
    </header>

    <div style={{
      flex: 1, overflow: "auto", padding: "4px 24px 180px",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <img src="assets/illust/hanafit-celebrate.svg" alt=""
        style={{ width: 220, marginTop: 8 }}/>

      <h1 style={{
        margin: "8px 0 0", textAlign: "center",
        fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.35, color: "#22262B",
      }}>
        첫 미션 완료!<br/>
        잘 출발했어요
      </h1>
      <div style={{
        marginTop: 10, textAlign: "center", fontSize: 13, color: "#5E6976",
        letterSpacing: "-0.02em",
      }}>5개 미션 중 1개를 달성했어요</div>

      {/* Completed mission summary */}
      <div style={{
        width: "100%", marginTop: 22,
        background: "#fff", borderRadius: 24, padding: "20px 22px",
        boxShadow: "0 4px 16px rgba(34,38,43,0.04)",
      }}>
        <HFMissionTypeBadge type="join"/>
        <div style={{
          marginTop: 8, fontSize: 17, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        }}>청년미래적금 가입 완료</div>
        <div style={{ height: 1, background: "#F0F0F0", margin: "14px 0" }}/>
        <HFAutoDataRow label="적용금리" value="연 5.00%"/>
        <HFAutoDataRow label="월 납입" value="10만원"/>
        <HFAutoDataRow label="첫 자동이체" value="2026.06.10" last/>
      </div>

      {/* Overall progress */}
      <div style={{
        width: "100%", marginTop: 14,
        background: "#fff", borderRadius: 20, padding: "16px 20px",
        boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>챌린지 진행</span>
          <span style={{ fontSize: 14, color: "#22262B", letterSpacing: "-0.02em" }}>
            <b style={{ color: "#00A38D", fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em" }}>1</b>
            <span style={{ color: "#8F97A0" }}> / 5 미션</span>
          </span>
        </div>
        <div style={{ height: 8, background: "#F0F0F0", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: "20%", height: "100%", background: "#00A38D", borderRadius: 4 }}/>
        </div>
      </div>

      {/* Next mission */}
      <div style={{
        width: "100%", marginTop: 14,
        padding: "0 4px 10px",
        fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>다음 미션</div>
      <div style={{
        width: "100%",
        background: "#fff", borderRadius: 20, padding: "16px 20px",
        display: "flex", alignItems: "center", gap: 14,
        boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
        cursor: "pointer",
      }} className="hana-press" onClick={onNext}>
        <div style={{
          width: 44, height: 44, borderRadius: 14, background: "#E0F5F0",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0,
        }}>🚇</div>
        <div style={{ flex: 1 }}>
          <HFMissionTypeBadge type="join"/>
          <div style={{ marginTop: 4, fontSize: 15, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>K-패스 등록</div>
          <div style={{ fontSize: 12, color: "#7567D5", marginTop: 2, fontWeight: 600, letterSpacing: "-0.02em" }}>교통비 30% 환급</div>
        </div>
        <HanaIcon name="chevron" size={18} color="#8F97A0"/>
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px",
      background: "linear-gradient(180deg, rgba(239,248,240,0) 0%, rgba(219,239,226,0.95) 30%, #DBEFE2 100%)",
      display: "flex", flexDirection: "column", gap: 6,
    }}>
      <PrimaryCTA onClick={onNext}>다음 미션 시작하기</PrimaryCTA>
      <button onClick={onClose} style={{
        background: "transparent", border: "none",
        color: "#5E6976", fontSize: 14, fontWeight: 600,
        letterSpacing: "-0.02em", padding: 10, cursor: "pointer",
        fontFamily: "inherit",
      }}>나중에 할게요</button>
    </div>
  </div>
);

window.MissionCompleteScreen = MissionCompleteScreen;
