// Screen 11 — 또래 따라하기 (멘토 소개 및 5가지 미션)
// 옅은 그린 그라데이션 · 큰 헤더 · 멘토 카드 · 5가지 미션 미리보기 · CTA
const FOLLOW_MISSIONS = [
  { num: "1", icon: "🚌", title: "K-패스 등록",
    sub: "교통비 30% 환급 시작", meta: "난이도 쉬움 · 즉시 가능" },
  { num: "2", icon: "💰", title: "생활비 통장 분리",
    sub: "자동저축 환경 만들기", meta: "난이도 쉬움 · 5분" },
  { num: "3", icon: "🏠", title: "청년월세지원 신청",
    sub: "월 최대 20만원 받기", meta: "난이도 중간 · 서류 필요" },
  { num: "4", icon: "🏦", title: "청년미래적금 가입",
    sub: "또래 81%가 가입한 적금", meta: "난이도 쉬움 · 자동 입력", emphasis: true },
  { num: "5", icon: "📱", title: "자동이체 설정",
    sub: "매달 자동으로 저축", meta: "난이도 쉬움 · 1분" },
];

const FollowIntroScreen = ({ onBack, onNext, onOtherMentor }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_GREEN_BG, overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="또래 따라하기" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 200px" }}>
      <h1 style={{
        margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.35, color: "#22262B",
      }}>
        서연님,<br/>
        또래 상위 10%의<br/>
        5가지 습관을 따라해볼까요?
      </h1>

      <div style={{ margin: "12px 0 18px", display: "flex", justifyContent: "center" }}>
        <img src="assets/illust/hanafit-runner.svg" alt=""
          style={{ width: "60%", maxWidth: 200 }}/>
      </div>

      {/* Mentor */}
      <HFMentorCard
        summary="23세 · 서울 자취 · 대학생, 알바수입 상위 10% 루틴"
        habits={[
          "청년미래적금 월 10만원 자동이체",
          "K-패스로 교통비 30% 환급",
          "체크카드 1개로 소비 통제",
        ]}/>

      {/* 5 미션 미리보기 */}
      <div style={{
        marginTop: 22, marginBottom: 10, padding: "0 4px",
        fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>🎯 5가지 챌린지 미션</div>

      <div style={{
        background: "#fff", borderRadius: 20, overflow: "hidden",
        boxShadow: "0 2px 10px rgba(34,38,43,0.04)",
      }}>
        {FOLLOW_MISSIONS.map((m, i) => (
          <div key={m.num} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "14px 16px",
            borderBottom: i < FOLLOW_MISSIONS.length - 1 ? "1px solid #F0F0F0" : "none",
            background: m.emphasis ? "#F0F8F4" : "transparent",
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 14, flexShrink: 0,
              background: m.emphasis ? "#00A38D" : "#F0F8F4",
              color: m.emphasis ? "#fff" : "#00A38D",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 800, letterSpacing: "-0.02em",
            }}>{m.num}</div>
            <span style={{ fontSize: 20 }}>{m.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 14, fontWeight: 700, color: "#22262B",
                letterSpacing: "-0.02em",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                {m.title}
                {m.emphasis && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "-0.02em",
                    color: "#00A38D", padding: "1px 6px",
                    background: "#E0F5F0", borderRadius: 4,
                  }}>또래 81%</span>
                )}
              </div>
              <div style={{
                fontSize: 12, color: m.emphasis ? "#00A38D" : "#5E6976",
                marginTop: 2, letterSpacing: "-0.02em",
                fontWeight: m.emphasis ? 600 : 500,
              }}>{m.sub}</div>
              <div style={{
                fontSize: 11, color: "#8F97A0", marginTop: 3,
                letterSpacing: "-0.02em",
              }}>{m.meta}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 14, padding: "0 6px",
        fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em",
        lineHeight: 1.5,
      }}>
        쉬운 미션부터 차근차근, 모두 완료하면<br/>
        평균 <b style={{ color: "#00A38D" }}>월 15만원</b>의 차이를 만들 수 있어요
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px",
      background: "linear-gradient(180deg, rgba(244,249,230,0) 0%, rgba(238,245,226,0.95) 30%, #EEF5E2 100%)",
      display: "flex", flexDirection: "column", gap: 6,
    }}>
      <PrimaryCTA onClick={onNext}>5가지 미션 시작하기</PrimaryCTA>
      <button onClick={onOtherMentor} style={{
        background: "transparent", border: "none",
        color: "#7567D5", fontSize: 14, fontWeight: 600,
        letterSpacing: "-0.02em", padding: "10px 4px", cursor: "pointer",
        fontFamily: "inherit",
      }}>다른 멘토 보기</button>
    </div>
  </div>
);

window.FollowIntroScreen = FollowIntroScreen;
