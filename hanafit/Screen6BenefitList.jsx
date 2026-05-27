// Screen 6 — 맞춤 혜택 리스트
// 흰 배경 · 헤더 + 검색 · 좌측 두 줄 헤더 · 필터 칩 가로 스크롤 · 4개 혜택 카드
const BenefitListScreen = ({ onBack, onOpenDetail, onOpen }) => {
  const [filter, setFilter] = useStateHF("전체");
  const filters = ["전체", "신청 추천", "바로 가능", "확인 필요", "마감 임박"];

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <DrillHeader title="놓친 혜택" onBack={onBack}
        right={
          <button onClick={() => onOpen("search")} style={{
            background: "none", border: "none", padding: 4,
            cursor: "pointer", color: "#22262B", display: "flex",
          }}>
            <HanaIcon name="search" size={22}/>
          </button>
        }/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 24px" }}>
        <h1 style={{
          margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.35, color: "#22262B",
        }}>
          신청 가능성이 높은<br/>
          혜택 4개를 찾았어요
        </h1>

        {/* Filter chips */}
        <div style={{
          display: "flex", gap: 8, marginTop: 18,
          overflowX: "auto", paddingBottom: 4,
          marginLeft: -20, paddingLeft: 20, paddingRight: 20,
        }}>
          {filters.map(f => (
            <HFFilterChip key={f} active={filter === f} onClick={() => setFilter(f)}>
              {f}
            </HFFilterChip>
          ))}
        </div>

        {/* Benefit cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
          <HFBenefitCard
            status="recommend" statusLabel="신청 추천" deadline="15"
            title="청년월세지원"
            value="월 최대 20만원"
            illust="assets/illust/hanafit-house.svg"
            infoLines={["신청 가능성 높음", "필요 서류 3개", "최대 24개월"]}
            sourceNote="공식 출처: 정부24 · 최종 확인 2026.05.20"
            secondary="자세히 보기" primary="AI에게 물어보기"
            onSecondary={onOpenDetail} onPrimary={onOpenDetail}/>

          <HFBenefitCard
            status="instant" statusLabel="즉시 가능"
            title="K-패스"
            value="교통비 30% 환급"
            illust="assets/illust/hanafit-transit.svg"
            infoLines={["바로 등록 가능", "매월 자동 환급"]}
            sourceNote="공식 출처: 국토교통부 · 최종 확인 2026.05.18"
            secondary="자세히 보기" primary="지금 등록하러 가기"
            onSecondary={onOpenDetail} onPrimary={onOpenDetail}/>

          <HFBenefitCard
            status="review" statusLabel="확인 필요"
            title="서울시 청년 생활장학금"
            value="최대 200만원"
            illust="assets/illust/hanafit-study.svg"
            infoLines={["서울 거주 청년 대상", "소득 기준 확인 필요"]}
            sourceNote="공식 출처: 서울시 청년정책 · 최종 확인 2026.05.15"
            secondary="자세히 보기" primary="AI에게 물어보기"
            onSecondary={onOpenDetail} onPrimary={onOpenDetail}/>

          <HFBenefitCard
            status="interest" statusLabel="관심 등록"
            title="청년미래적금"
            value="연 6.0% 우대금리"
            illust="assets/illust/hanafit-piggy.svg"
            infoLines={["하나은행 출시 예정", "사전 알림 신청 가능"]}
            sourceNote="공식 출처: 하나은행 상품몰 · 최종 확인 2026.05.20"
            secondary="자세히 보기" primary="관심 등록"
            onSecondary={onOpenDetail} onPrimary={onOpenDetail}/>
        </div>

        <div style={{ marginTop: 24 }}>
          <HFLegalNote>
            공적 혜택을 먼저 보여드리고, 금융상품은<br/>
            필요한 경우 보완 수단으로 안내해요
          </HFLegalNote>
        </div>
      </div>
    </div>
  );
};

window.BenefitListScreen = BenefitListScreen;
