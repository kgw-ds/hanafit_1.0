// Screen 16 — 챌린지 보드 (Initial · 0/5)
// 멘토 습관 → 미션 체크리스트.
// 옅은 그린 그라데이션 · 진행 헤더 (0/5) · 미션 카드 5개 (미션 4 강조) · 시작 CTA
const BOARD_MISSIONS_INIT = [
  { num: "1", icon: "🚌", title: "K-패스 등록",
    sub: "교통비 30% 환급 시작", meta: "난이도 쉬움 · 즉시 완료" },
  { num: "2", icon: "💰", title: "생활비 통장 분리",
    sub: "자동저축 환경 만들기", meta: "난이도 쉬움" },
  { num: "3", icon: "🏠", title: "청년월세지원 신청",
    sub: "월 최대 20만원 받기", meta: "난이도 중간" },
  { num: "4", icon: "🏦", title: "청년미래적금 가입",
    sub: "또래 81% 가입", meta: "난이도 쉬움 · 자동 입력", emphasis: true, star: true },
  { num: "5", icon: "📱", title: "자동이체 설정",
    sub: "매달 자동으로 저축", meta: "난이도 쉬움" },
];

const ChallengeBoardInitScreen = ({ onBack, onOpenMission }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_GREEN_BG, overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="챌린지 보드" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 160px" }}>
      <h1 style={{
        margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        시작해볼까요?
      </h1>
      <div style={{ marginTop: 8, fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>
        5개 미션 모두 달성하면 평균 월 15만원의 차이
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
              <b style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em", color: "#00A38D", marginRight: 2 }}>0</b>
              / 5
            </span>
          </div>
          <div style={{
            marginTop: 12, height: 10, background: "#F0F0F0",
            borderRadius: 5, overflow: "hidden",
          }}>
            <div style={{ width: "0%", height: "100%", background: "#00A38D" }}/>
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em" }}>
            🎯 23세 · 서울 자취 · 상위 10% 루틴
          </div>
        </div>
      </div>

      {/* Missions */}
      <div style={{
        margin: "24px 4px 12px",
        fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>미션 목록</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {BOARD_MISSIONS_INIT.map(m => (
          <BoardMissionRow key={m.num} {...m}
            onClick={m.num === "4" ? () => onOpenMission("missionDetail") : undefined}/>
        ))}
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px",
      background: "linear-gradient(180deg, rgba(244,249,230,0) 0%, rgba(238,245,226,0.95) 30%, #EEF5E2 100%)",
    }}>
      <PrimaryCTA onClick={() => onOpenMission("missionDetail")}>첫 미션 시작하기</PrimaryCTA>
    </div>
  </div>
);

// 미션 카드 row — board 화면 전용 (5미션 모두 ⭕ 시작 전 / 일부 완료 / 다음 미션 강조)
const BoardMissionRow = ({ num, icon, title, sub, meta, emphasis, star,
                          done, doneDate, doneNote, next, nextNote, onClick }) => {
  // visual variant
  const isDone = !!done;
  const isNext = !!next;
  const isEmph = !!emphasis;

  return (
    <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "16px 18px",
      borderRadius: 18,
      background: isDone ? "#F5FBF8"
                 : isNext ? "#FFFFFF"
                 : isEmph ? "#F0F8F4"
                 : "#FFFFFF",
      border: isNext ? "1.5px solid #00A38D"
            : isEmph ? "1px solid #B7E0CF"
            : "1px solid #ECECEC",
      boxShadow: isDone ? "none" : "0 2px 8px rgba(34,38,43,0.03)",
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 14, flexShrink: 0,
        background: isDone ? "#00A38D" : (isEmph || isNext) ? "#fff" : "transparent",
        border: isDone ? "none" : "1.5px solid " + ((isEmph || isNext) ? "#00A38D" : "#C0C0C0"),
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 800,
        color: isDone ? "#fff" : (isEmph || isNext) ? "#00A38D" : "#5E6976",
      }}>
        {isDone ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        ) : num}
      </div>
      <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 15, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em",
          textDecoration: isDone ? "line-through" : "none",
          textDecorationColor: "#8F97A0",
          display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
        }}>
          {title}
          {star && !isDone && (
            <span style={{ fontSize: 12 }}>⭐</span>
          )}
        </div>
        <div style={{
          fontSize: 12,
          color: isDone ? "#8F97A0" : isNext ? "#00A38D" : isEmph ? "#00A38D" : "#5E6976",
          marginTop: 3, letterSpacing: "-0.02em",
          fontWeight: (isNext || isEmph) ? 600 : 500,
        }}>{isDone ? (doneNote || ("완료 (" + doneDate + ")")) : sub}</div>
        {!isDone && meta && (
          <div style={{
            fontSize: 11, color: "#8F97A0", marginTop: 3,
            letterSpacing: "-0.02em",
          }}>{meta}</div>
        )}
        {isNext && nextNote && (
          <div style={{
            marginTop: 6, padding: "6px 10px",
            background: "#F0F8F4", borderRadius: 8,
            fontSize: 11, color: "#00A38D", fontWeight: 700,
            letterSpacing: "-0.02em", lineHeight: 1.4,
          }}>{nextNote}</div>
        )}
      </div>
      {!isDone && onClick && <HanaIcon name="chevron" size={16} color="#8F97A0"/>}
    </div>
  );
};

window.ChallengeBoardInitScreen = ChallengeBoardInitScreen;
window.BoardMissionRow = BoardMissionRow;
