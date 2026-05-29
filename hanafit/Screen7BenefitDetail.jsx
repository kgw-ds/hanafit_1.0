// Screen 7 — 혜택 상세 (청년월세지원)
// 앱인앱 브레드크럼 · 신뢰 배지 · hero · 2단 수치 · 왜 추천됐나요 · 4분할 · sticky CTA
const BenefitDetailScreen = ({ onBack, onChecklist, onAskAI, onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <HFBreadcrumb onHome={() => onOpen("home")} onSettings={() => onOpen("settings")}/>
    <DrillHeader title="혜택 상세" onBack={onBack} right={
      <button onClick={onAskAI} style={{
        background: "none", border: "none", padding: 4,
        cursor: "pointer", color: "#22262B", display: "flex",
      }}>
        <HanaIcon name="headphones" size={22}/>
      </button>
    }/>

    <div style={{
      flex: 1, overflow: "auto",
      background: "#fff", padding: "12px 24px 250px",
    }}>
      {/* 신뢰 배지 */}
      <HFTrustBadge>
        하나핏은 신청 가능성을 안내하며, 최종 자격은 공식 신청기관에서 확정됩니다.
      </HFTrustBadge>

      <div style={{ fontSize: 14, color: "#8F97A0", margin: "14px 0 6px", letterSpacing: "-0.02em" }}>
        청년 정책 · 주거
      </div>
      <h1 style={{
        margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        부모님과 따로 거주하는<br/>
        무주택 청년에게 월 20만원
      </h1>

      {/* 2-column metric */}
      <div style={{ display: "flex", padding: "20px 0 18px" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "#5E6976", marginBottom: 10, letterSpacing: "-0.02em" }}>지원 금액</div>
          <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.04em", color: "#00A38D", lineHeight: 1 }}>월 20<span style={{ fontWeight: 700, fontSize: "0.55em" }}>만원</span></span>
        </div>
        <div style={{ flex: 1, textAlign: "center", borderLeft: "1px solid #F0F0F0" }}>
          <div style={{ fontSize: 14, color: "#5E6976", marginBottom: 10, letterSpacing: "-0.02em" }}>지원 기간</div>
          <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.04em", color: "#22262B", lineHeight: 1 }}>최대 12<span style={{ fontWeight: 700, fontSize: "0.55em" }}>개월</span></span>
        </div>
      </div>

      {/* 왜 추천됐나요 */}
      <div style={{
        padding: "16px 18px", borderRadius: 16,
        background: "#F0F8F4", border: "1px solid #D5EBE0",
      }}>
        <div style={{
          fontSize: 14, fontWeight: 700, color: "#007A6A",
          letterSpacing: "-0.02em", marginBottom: 12,
          display: "flex", alignItems: "center", gap: 6,
        }}>💡 왜 추천됐나요?</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <WhyRow ok label="나이" detail="만 19~34세 (서연님 만 23세)"/>
          <WhyRow ok label="월세 이체" detail="하나은행 월세 이체 내역 확인됨"/>
          <WhyRow label="거주 형태" detail="임대차계약서로 확인 필요"/>
          <WhyRow label="소득 기준" detail="가구 중위소득 60% 이하 확인 필요"/>
          <WhyRow deadline label="신청 마감" detail="D-15 (2026.06.04)"/>
        </div>
      </div>

      {/* 4분할 섹션 */}
      <FourSection title="받을 수 있는 금액" body="월 최대 20만원 × 최대 12개월 = 연 최대 240만원" emoji="💰"/>
      <FourSection title="신청 조건" body="만 19~34세 · 무주택 · 부모와 별도 거주 · 가구 소득 기준 충족" emoji="📋"/>
      <FourSection title="필요 서류" body="주민등록등본 · 임대차계약서 · 월세 이체 내역" emoji="📄"/>
      <FourSection title="신청 방법" body="정부24 온라인 신청 · 하나핏 체크리스트로 단계별 준비" emoji="🧭" last/>

      <div style={{ marginTop: 20 }}>
        <HFOfficialSourceLine policy="청년월세 한시 특별지원" org="국토교통부 · 정부24" date="2026.05.20"
          onClick={() => onOpen("official-source")}/>
      </div>
    </div>

    {/* Sticky CTA — 신청 체크리스트 → AI 자격 → 공식 출처 → 공식 신청 */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 14px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 8,
    }}>
      <PrimaryCTA onClick={onChecklist}>신청 체크리스트 보기</PrimaryCTA>
      <OutlineBtn onClick={onAskAI}>AI에게 자격 물어보기</OutlineBtn>
      <div style={{ display: "flex", gap: 8 }}>
        <SubLink onClick={() => onOpen("official-source")}>공식 출처 보기</SubLink>
        <SubLink onClick={() => window.open('https://www.gov.kr', '_blank')}>공식 신청 사이트</SubLink>
      </div>
    </div>
  </div>
);

const WhyRow = ({ ok, deadline, label, detail }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <span style={{
      width: 18, height: 18, borderRadius: 9, flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: ok ? "#00A38D" : deadline ? "#FFE2DC" : "#FFF4D6",
      color: deadline ? "#D4604E" : "#B07A00",
      fontSize: 10, fontWeight: 800,
    }}>
      {ok ? (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ) : deadline ? "!" : "?"}
    </span>
    <span style={{ fontSize: 13, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em", width: 64, flexShrink: 0 }}>{label}</span>
    <span style={{ flex: 1, fontSize: 12.5, color: "#5E6976", letterSpacing: "-0.02em" }}>{detail}</span>
  </div>
);

const FourSection = ({ title, body, emoji, last }) => (
  <div style={{
    marginTop: 14, padding: "16px 18px", borderRadius: 14,
    background: "#fff", border: "1px solid #F0F0F0",
  }}>
    <div style={{
      fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      marginBottom: 6, display: "flex", alignItems: "center", gap: 6,
    }}><span>{emoji}</span>{title}</div>
    <div style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em", lineHeight: 1.5 }}>{body}</div>
  </div>
);

const SubLink = ({ children, onClick }) => (
  <button onClick={onClick} className="hana-press" style={{
    flex: 1, padding: "10px 0", borderRadius: 10,
    background: "#F5F6FA", border: "none", cursor: "pointer",
    fontFamily: "inherit", fontSize: 12.5, fontWeight: 600,
    color: "#5E6976", letterSpacing: "-0.02em",
  }}>{children}</button>
);

window.BenefitDetailScreen = BenefitDetailScreen;
