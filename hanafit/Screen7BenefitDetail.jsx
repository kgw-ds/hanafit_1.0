// Screen 7 — 혜택 상세 (청년월세지원)
// 정기예금 상품 페이지 패턴: 카테고리 · 좌측 두 줄 hero · 배지 · 큰 일러스트
// · 좌우 2단 수치 · 구분선 · 조건 매칭 · 필요한 서류 · 신뢰 정보 · 하단 sticky CTA pair
const BenefitDetailScreen = ({ onBack, onChecklist, onAskAI }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <DrillHeader onBack={onBack} right={<HanaIcon name="headphones" size={22}/>}/>

    <div style={{
      flex: 1, overflow: "auto",
      background: "#fff", padding: "16px 24px 240px",
    }}>
      <div style={{ fontSize: 14, color: "#8F97A0", marginBottom: 6, letterSpacing: "-0.02em" }}>
        청년 정책
      </div>
      <h1 style={{
        margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        부모님과 따로 거주하는<br/>
        무주택 청년에게 월 20만원
      </h1>

      <div style={{ marginTop: 16 }}>
        <HFStatusBadge variant="high">신청 가능성 높음</HFStatusBadge>
      </div>

      {/* Illustration */}
      <div style={{ margin: "10px 0 4px", display: "flex", justifyContent: "center" }}>
        <img src="assets/illust/hanafit-house.svg" alt=""
          style={{ width: "72%", maxWidth: 260 }}/>
      </div>

      {/* 2-column metric */}
      <div style={{
        display: "flex", padding: "8px 0 18px",
      }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "#5E6976", marginBottom: 10, letterSpacing: "-0.02em" }}>지원 금액</div>
          <span style={{
            fontSize: 30, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", lineHeight: 1,
          }}>월 20<span style={{ fontWeight: 700, fontSize: "0.55em" }}>만원</span></span>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "#5E6976", marginBottom: 10, letterSpacing: "-0.02em" }}>지원 기간</div>
          <span style={{
            fontSize: 30, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#22262B", lineHeight: 1,
          }}>최대 24<span style={{ fontWeight: 700, fontSize: "0.55em" }}>개월</span></span>
        </div>
      </div>

      <div style={{ height: 1, background: "#F0F0F0", margin: "10px 0 22px" }}/>

      {/* 조건 매칭 */}
      <SectionTitle>내 조건 매칭</SectionTitle>
      <div style={{ marginTop: 6 }}>
        <HFConditionRow label="나이" status="ok"
          sub="만 19~34세 (서연님 24세)"/>
        <HFConditionRow label="무주택" status="ok"
          sub="자가 보유 내역 없음"/>
        <HFConditionRow label="거주 형태" status="warn"
          sub="임대차계약서로 확인 필요"/>
        <HFConditionRow label="소득 기준" status="warn"
          sub="가구 중위소득 60% 이하" last/>
      </div>

      {/* 필요 서류 */}
      <div style={{ marginTop: 26 }}>
        <SectionTitle>필요한 서류</SectionTitle>
        <div style={{ marginTop: 6 }}>
          <HFDocRow label="주민등록등본"/>
          <HFDocRow label="임대차계약서"/>
          <HFDocRow label="월세 이체 내역" last/>
        </div>
      </div>

      {/* 신뢰 정보 */}
      <div style={{ marginTop: 22 }}>
        <HFSourceNote>공식 출처: 정부24 · 최종 확인일 2026.05.20</HFSourceNote>
      </div>
    </div>

    {/* Sticky CTA */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 10,
    }}>
      <PrimaryCTA onClick={onChecklist}>신청 체크리스트 보기</PrimaryCTA>
      <OutlineBtn onClick={onAskAI}>AI에게 자격 물어보기</OutlineBtn>
      <button style={{
        background: "transparent", border: "none",
        color: "#5E6976", fontSize: 13, fontWeight: 600,
        letterSpacing: "-0.02em", padding: 4, cursor: "pointer",
        fontFamily: "inherit", textDecoration: "underline", textUnderlineOffset: 4,
      }}>공식 신청 사이트로 이동</button>
      <HFLegalNote>
        하나핏은 신청 가능성을 안내하며,<br/>
        최종 선정 여부는 공식 기관 심사로 결정돼요
      </HFLegalNote>
    </div>
  </div>
);

const SectionTitle = ({ children }) => (
  <div style={{
    fontSize: 17, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
  }}>{children}</div>
);

window.BenefitDetailScreen = BenefitDetailScreen;
