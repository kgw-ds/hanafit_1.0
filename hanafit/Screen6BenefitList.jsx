// Screen 6 — 맞춤 혜택 리스트
// 흰 배경 · 앱인앱 브레드크럼 · 필터 칩 · 혜택 카드 + 추천 근거 카드 묶음
const BENEFITS = [
  {
    status: "recommend", statusLabel: "신청 추천", deadline: "15",
    title: "청년월세지원", value: "월 최대 20만원",
    illust: "assets/illust/hanafit-house.svg",
    infoLines: ["예상 혜택 월 최대 20만원", "필요 서류 3개"],
    sourceNote: "공식 출처: 정부24 · 최종 확인 2026.05.20",
    secondary: "자세히 보기", primary: "AI에게 물어보기",
    reasons: [
      { ok: true, text: "만 23세 · 서울 거주 · 월세 이체 확인됨" },
      { ok: false, text: "소득 기준 추가 확인 필요" },
    ],
  },
  {
    status: "instant", statusLabel: "즉시 가능",
    title: "K-패스", value: "교통비 30% 환급",
    illust: "assets/illust/hanafit-transit.svg",
    infoLines: ["예상 환급 월 1.5만~2만원", "매월 자동 환급"],
    sourceNote: "공식 출처: 국토교통부 · 최종 확인 2026.05.18",
    secondary: "자세히 보기", primary: "지금 등록하러 가기",
    reasons: [
      { ok: true, text: "월 교통비 6만원 이상 · K-패스 미가입 추정" },
    ],
  },
  {
    status: "review", statusLabel: "추가 확인 필요",
    title: "서울시 청년 생활장학금", value: "최대 200만원",
    illust: "assets/illust/hanafit-study.svg",
    infoLines: ["예상 절감 연 200만원", "소득 기준 확인 필요"],
    sourceNote: "공식 출처: 서울시 청년정책 · 최종 확인 2026.05.15",
    secondary: "자세히 보기", primary: "AI에게 물어보기",
    reasons: [
      { ok: true, text: "서울 거주 · 대학 재학 확인됨" },
      { ok: false, text: "가구 소득 기준 확인 필요" },
    ],
  },
  {
    status: "interest", statusLabel: "하나금융 연결 가능",
    title: "청년미래적금", value: "연 6.0% 우대금리",
    illust: "assets/illust/hanafit-piggy.svg",
    infoLines: ["예상 절감 연 24만원", "월 잔액 흐름 안정"],
    sourceNote: "공식 출처: 하나은행 상품몰 · 최종 확인 2026.05.20",
    secondary: "자세히 보기", primary: "상품 비교하기",
    reasons: [
      { ok: true, text: "월 잔액 흐름 안정 · 소액저축 시작 가능" },
    ],
  },
];

const BenefitListScreen = ({ onBack, onOpenDetail, onOpen }) => {
  const [filter, setFilter] = useStateHF("전체");
  const filters = ["전체", "신청 추천", "즉시 가능", "추가 확인 필요", "마감 임박"];

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <HFBreadcrumb onHome={() => onOpen("home")} onSettings={() => onOpen("settings")}/>
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
          받을 수 있는<br/>
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

        {/* Benefit cards + rec reasons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 18 }}>
          {BENEFITS.map((b, i) => (
            <div key={i}>
              <HFBenefitCard
                status={b.status} statusLabel={b.statusLabel} deadline={b.deadline}
                title={b.title} value={b.value} illust={b.illust}
                infoLines={b.infoLines} sourceNote={b.sourceNote}
                secondary={b.secondary} primary={b.primary}
                onSecondary={onOpenDetail} onPrimary={onOpenDetail}/>
              <HFRecReason reasons={b.reasons}/>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <HFLegalNote>
            하나핏은 받을 수 있는 공적 혜택을 먼저 안내하고,<br/>
            필요한 경우 금융상품을 보완 수단으로 제안합니다.
          </HFLegalNote>
        </div>
        <HFReturnToHana onClick={() => onOpen("home")}/>
      </div>
    </div>
  );
};

window.BenefitListScreen = BenefitListScreen;
