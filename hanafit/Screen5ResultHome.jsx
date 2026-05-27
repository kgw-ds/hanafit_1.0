// Screen 5 — 진단 결과 홈 (메인)
// 옅은 민트 그라데이션 · 인사말 · 진단 유형 배지 · 보물상자 일러스트
// · 큰 메트릭 카드 2개 · primary CTA · 빠른 액션 가로 스크롤 · 추천 액션 리스트
const ResultHomeScreen = ({ onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_MINT_BG, overflow: "hidden",
  }}>
    <DrillHeader title="하나핏" onBack={() => onOpen("home")}
      right={
        <>
          <HanaIcon name="settings" size={22} color="#22262B"/>
          <HanaIcon name="bell" size={22} color="#22262B"/>
        </>
      }/>

    <div style={{ flex: 1, overflow: "auto", padding: "8px 20px 30px" }}>
      {/* Greeting */}
      <div style={{ padding: "4px 4px 16px" }}>
        <h1 style={{
          margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.35, color: "#22262B",
        }}>
          서연님,<br/>
          놓치고 있는 혜택을<br/>
          찾았어요
        </h1>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <HFStatusBadge variant="recommend">혜택 놓침형</HFStatusBadge>
        </div>
        <div style={{
          marginTop: 12, fontSize: 13, color: "#5E6976",
          letterSpacing: "-0.02em", lineHeight: 1.55,
        }}>
          소비를 줄이는 것보다 받을 수 있는<br/>
          지원을 먼저 연결하는 게 효과적이에요
        </div>
      </div>

      {/* Treasure illust */}
      <div style={{ margin: "8px 0 18px", display: "flex", justifyContent: "center" }}>
        <img src="assets/illust/hanafit-treasure.svg" alt=""
          style={{ width: "82%", maxWidth: 260 }}/>
      </div>

      {/* Metric cards */}
      <div style={{ display: "flex", gap: 10 }}>
        <HFMetricCard label="놓친 혜택" value="4개"
          sub="신청 가능성이 높아요" accent="#00A38D"/>
        <HFMetricCard label="예상 절감액" value="연 186만원"
          sub="공식 기준 기반 추정" accent="#00A38D"/>
      </div>

      {/* Primary CTA */}
      <div style={{ marginTop: 18 }}>
        <PrimaryCTA onClick={() => onOpen("list")}>놓치고 있는 혜택 보기</PrimaryCTA>
      </div>

      {/* Quick actions */}
      <SectionHeader>빠른 액션</SectionHeader>
      <div style={{
        display: "flex", gap: 10, overflowX: "auto",
        scrollSnapType: "x mandatory", paddingBottom: 4,
      }}>
        <HFQuickActionCard emoji="🤖" title="AI 상담" sub="질문 한 번에 해결"/>
        <HFQuickActionCard emoji="👥" title="또래 비교" sub="익명 통계로 보기" accent="#7567D5"/>
        <HFQuickActionCard emoji="📋" title="체크리스트" sub="신청 단계 확인" accent="#7567D5"/>
      </div>

      {/* Recommended actions */}
      <SectionHeader>추천 액션</SectionHeader>
      <Card style={{ padding: "4px 16px" }}>
        <HFRecRow emoji="🚇" title="K-패스 등록하기"
          sub="교통비 30% 환급 시작"
          onClick={() => onOpen("list")}/>
        <HFRecRow emoji="🏠" title="청년월세지원 확인"
          sub="월 최대 20만원 가능성"
          onClick={() => onOpen("detail")}/>
        <HFRecRow emoji="💰" title="생활비 통장 분리"
          sub="자동저축 시작" last/>
      </Card>

      <div style={{ marginTop: 18 }}>
        <HFLegalNote>
          추천 결과는 현재 확인 가능한 정보 기준이며,<br/>
          최종 자격은 공식 기관 심사에 따라 달라질 수 있어요
        </HFLegalNote>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ children }) => (
  <div style={{
    margin: "26px 4px 12px",
    fontSize: 17, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
  }}>{children}</div>
);

window.ResultHomeScreen = ResultHomeScreen;
