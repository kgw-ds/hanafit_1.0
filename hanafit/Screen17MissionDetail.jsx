// Screen 17 — 미션 상세 (청년미래적금 가입)
// 흰 배경 · 미션 타입 배지 · 큰 hero · 왜? 어떻게? 효과? · sticky CTA
const MissionDetailScreen = ({ onBack, onStart, onAskAI }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <DrillHeader onBack={onBack} right={
      <button onClick={onAskAI} style={{
        background: "none", border: "none", padding: 4,
        cursor: "pointer", color: "#22262B", display: "flex",
      }}>
        <HanaIcon name="headphones" size={22}/>
      </button>
    }/>

    <div style={{
      flex: 1, overflow: "auto", background: "#fff",
      padding: "12px 24px 220px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <HFMissionTypeBadge type="join"/>
        <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>
          미션 1 · 한 번 가입하면 끝
        </span>
      </div>

      <h1 style={{
        margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        청년미래적금<br/>가입하기
      </h1>

      <div style={{ margin: "14px 0", display: "flex", justifyContent: "center" }}>
        <img src="assets/illust/hanafit-piggy.svg" alt=""
          style={{ width: "62%", maxWidth: 220 }}/>
      </div>

      {/* 왜? */}
      <SectionTitle>왜 필요해요?</SectionTitle>
      <div style={{
        marginTop: 8, padding: "16px 18px", background: "#F0F8F4",
        borderRadius: 14, fontSize: 14, color: "#22262B",
        letterSpacing: "-0.02em", lineHeight: 1.55,
      }}>
        월 10만원 자동저축 미션을 이어가려면 적금을 비교해볼 수 있어요.<br/>
        또래 81%가 선택한 청년 전용 적금은 우대금리까지 받으면 <b style={{ color: "#00A38D" }}>연 6.0%</b>까지 가능해요.
      </div>

      {/* 공적 우선 원칙 */}
      <div style={{
        marginTop: 12, padding: "12px 14px", borderRadius: 12,
        background: "#F5F6FA",
        fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em", lineHeight: 1.5,
      }}>
        하나핏은 받을 수 있는 공적 혜택을 먼저 안내하고, 필요한 경우 금융상품을 보완 수단으로 제안합니다.
      </div>

      {/* 어떻게? */}
      <SectionTitle style={{ marginTop: 22 }}>어떻게 하면 돼요?</SectionTitle>
      <Card style={{ marginTop: 10, padding: "4px 18px" }}>
        <HowRow num="1" label="월 납입 금액 선택" sub="5만원부터 가능"/>
        <HowRow num="2" label="자동이체 계좌 연결" sub="달달하나통장 권장"/>
        <HowRow num="3" label="가입 완료 (마이데이터 자동입력)" sub="약 2분" last/>
      </Card>

      {/* 예상 효과 */}
      <SectionTitle style={{ marginTop: 22 }}>예상 효과</SectionTitle>
      <Card style={{
        marginTop: 10, padding: "18px 20px",
        background: "#F0F8F4", boxShadow: "none",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>월 10만원 기준</span>
          <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>24개월 시</span>
        </div>
        <div style={{
          marginTop: 6, fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em",
          color: "#00A38D", lineHeight: 1,
        }}>+ 약 5.4<span style={{ fontWeight: 700, fontSize: "0.55em", marginLeft: 4 }}>만원 이자</span></div>
      </Card>

      <div style={{ marginTop: 16 }}>
        <HFSourceNote>공식 출처: 하나은행 상품몰 · 최종 확인 2026.05.20</HFSourceNote>
      </div>

      {/* 하나금융 전환 지점 */}
      <div style={{ marginTop: 16 }}>
        <HFHanaLinkRow icon="🏦" label="하나 적금 비교하기"
          sub="우대금리 조건을 한눈에 비교해보세요"
          onClick={onStart}/>
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 10,
    }}>
      <PrimaryCTA onClick={onStart}>하나원큐에서 상품 자세히 보기</PrimaryCTA>
      <OutlineBtn onClick={onAskAI}>AI에게 물어보기</OutlineBtn>
    </div>
  </div>
);

const SectionTitle = ({ children, style }) => (
  <div style={{
    fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
    ...style,
  }}>{children}</div>
);
const HowRow = ({ num, label, sub, last }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12,
    padding: "14px 0",
    borderBottom: last ? "none" : "1px solid #F0F0F0",
  }}>
    <span style={{
      width: 24, height: 24, borderRadius: 12, flexShrink: 0,
      background: "#E0F5F0", color: "#00A38D",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 12, fontWeight: 800,
    }}>{num}</span>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>{label}</div>
      <div style={{ fontSize: 12, color: "#5E6976", marginTop: 2, letterSpacing: "-0.02em" }}>{sub}</div>
    </div>
  </div>
);

window.MissionDetailScreen = MissionDetailScreen;
