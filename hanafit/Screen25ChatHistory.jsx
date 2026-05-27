// Screen 25 — AI 상담 이력
// 흰 배경 · 검색바 · 필터 칩 · 통계 카드 · 날짜별 그룹 (오늘/어제/이번 주)
const ChatHistoryScreen = ({ onBack, onOpen }) => {
  const [q, setQ] = useStateHF("");
  const [filter, setFilter] = useStateHF("전체");
  const filters = ["전체", "혜택", "챌린지", "기타"];

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <DrillHeader title="상담 기록" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 28px" }}>
        <HFSearchBar placeholder="기록 검색" value={q} onChange={(e) => setQ(e.target.value)}/>

        <div style={{
          display: "flex", gap: 8, padding: "12px 0 4px",
          overflowX: "auto",
          marginLeft: -20, paddingLeft: 20, paddingRight: 20,
        }}>
          {filters.map(f => (
            <HFFilterChip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</HFFilterChip>
          ))}
        </div>

        {/* Stats card */}
        <Card style={{ marginTop: 18, padding: "18px 20px" }}>
          <div style={{ display: "flex", gap: 14 }}>
            <StatCol label="총 상담" value="24회"/>
            <Divider/>
            <StatCol label="이번 달" value="5회"/>
          </div>
          <div style={{ height: 1, background: "#F0F0F0", margin: "14px 0" }}/>
          <div style={{ fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em", marginBottom: 8 }}>자주 묻는 주제</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            <span style={{
              padding: "4px 12px", fontSize: 12, fontWeight: 500, color: "#7567D5",
              background: "#F0E8F8", borderRadius: 9999, letterSpacing: "-0.02em",
            }}>#청년월세지원</span>
            <span style={{
              padding: "4px 12px", fontSize: 12, fontWeight: 500, color: "#7567D5",
              background: "#F0E8F8", borderRadius: 9999, letterSpacing: "-0.02em",
            }}>#청년미래적금</span>
          </div>
        </Card>

        {/* History groups */}
        <HistoryGroup title="오늘">
          <HFHistoryItem
            question="청년월세지원 받을 수 있어?"
            snippet="신청 가능성이 높고, 거주 형태와 소득 기준은 확인 필요해요. 자세한 자격 조건은 정부24 공식 페이지에서..."
            time="18:08"
            last
            onClick={() => onOpen("aichat-new")}/>
        </HistoryGroup>

        <HistoryGroup title="어제">
          <HFHistoryItem
            question="K-패스 어떻게 신청해?"
            snippet="K-패스 카드를 발급받은 후 K-패스 앱에서 등록하시면 자동으로 환급이 시작돼요..."
            time="14:20"
            onClick={() => onOpen("aichat-new")}/>
          <HFHistoryItem
            question="청년미래적금 우대금리 조건은?"
            snippet="기본금리 3.5%에 하나원큐 신규 가입 +1.0%, K-패스 연동 +0.5%, 자동이체 6개월 유지 +1.0%로..."
            time="09:35"
            last
            onClick={() => onOpen("aichat-new")}/>
        </HistoryGroup>

        <HistoryGroup title="이번 주">
          <HFHistoryItem
            question="청년 장학금 자격 확인"
            snippet="서울시 청년 생활장학금은 소득 기준이 가구 중위소득 70% 이하예요..."
            time="3일 전"
            onClick={() => onOpen("aichat-new")}/>
          <HFHistoryItem
            question="자동이체 변경 가능?"
            snippet="네, 챌린지 보드에서 자동이체 금액과 날짜를 변경할 수 있어요..."
            time="5일 전" last
            onClick={() => onOpen("aichat-new")}/>
        </HistoryGroup>

        <div style={{ marginTop: 18 }}>
          <HFLegalNote>왼쪽으로 밀어서 즐겨찾기 / 삭제할 수 있어요</HFLegalNote>
        </div>
      </div>
    </div>
  );
};

const StatCol = ({ label, value }) => (
  <div style={{ flex: 1 }}>
    <div style={{ fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em", color: "#22262B", marginTop: 4, lineHeight: 1 }}>{value}</div>
  </div>
);
const Divider = () => <div style={{ width: 1, background: "#F0F0F0" }}/>;

const HistoryGroup = ({ title, children }) => (
  <div style={{ marginTop: 22 }}>
    <div style={{
      padding: "0 4px 4px",
      fontSize: 13, fontWeight: 700, color: "#5E6976", letterSpacing: "-0.02em",
    }}>{title}</div>
    <Card style={{ padding: "0 18px" }}>{children}</Card>
  </div>
);

window.ChatHistoryScreen = ChatHistoryScreen;
