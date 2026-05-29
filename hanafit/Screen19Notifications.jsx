// Screen 19 — 알림센터
// 흰 배경 · 뒤로/제목/모두 읽음 · 상단 탭 · 오늘/어제/이전 섹션
const NotificationsScreen = ({ onBack, onOpen }) => {
  const [tab, setTab] = useStateHF("전체");
  const tabs = ["전체", "혜택", "챌린지", "시스템"];

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <DrillHeader title="알림" onBack={onBack}
        right={<button style={{
          background: "transparent", border: "none",
          fontSize: 13, color: "#5E6976", fontWeight: 600,
          letterSpacing: "-0.02em", padding: 6, cursor: "pointer", fontFamily: "inherit",
        }}>모두 읽음</button>}/>

      <div style={{ flex: 1, overflow: "auto", padding: "0 20px 24px" }}>
        {/* Tabs */}
        <div style={{
          display: "flex", gap: 8, padding: "8px 0 18px",
          overflowX: "auto",
          marginLeft: -20, paddingLeft: 20, paddingRight: 20,
        }}>
          {tabs.map(t => (
            <HFFilterChip key={t} active={tab === t} onClick={() => setTab(t)}>{t}</HFFilterChip>
          ))}
        </div>

        {/* 오늘 */}
        <SectionLabel>오늘</SectionLabel>
        <Card style={{ padding: "4px 16px" }}>
          <HFNotificationItem
            icon="🔴" kind="urgent" urgent
            title="마감 임박"
            body={<>청년월세지원 신청 D-3<br/><span style={{color:"#5E6976"}}>6월 27일까지 신청하셔야 해요</span></>}
            time="14:32"
            onClick={() => onOpen("detail")}/>
          <HFNotificationItem
            icon="🆕" kind="new"
            title="새 혜택"
            body={<>서울시 청년 임차료 지원<br/><span style={{color:"#5E6976"}}>서연님께 적합한 새 혜택이에요</span></>}
            time="10:15"
            last
            onClick={() => onOpen("list")}/>
        </Card>

        {/* 어제 */}
        <SectionLabel>어제</SectionLabel>
        <Card style={{ padding: "4px 16px" }}>
          <HFNotificationItem
            icon="💰" kind="transfer"
            title="이체 완료"
            body={<>청년미래적금 10만원 이체 완료<br/><span style={{color:"#5E6976"}}>현재 잔액 70만원</span></>}
            time="어제 09:00"
            onClick={() => onOpen("boardActive")}/>
          <HFNotificationItem
            icon="📊" kind="info"
            title="또래 변화"
            body={<>또래 100명이 추가 가입했어요<br/><span style={{color:"#5E6976"}}>함께 비교 중인 또래 1,247명</span></>}
            time="어제"
            last
            onClick={() => onOpen("peer")}/>
        </Card>

        {/* 이전 */}
        <SectionLabel>이전</SectionLabel>
        <Card style={{ padding: "4px 16px" }}>
          <HFNotificationItem
            icon="⚙️" kind="system"
            title="시스템"
            body={<>마이데이터 재인증 필요<br/><span style={{color:"#5E6976"}}>안전한 이용을 위해 다시 연결</span></>}
            time="3일 전"
            onClick={() => onOpen("consent")}
            last/>
        </Card>

        <div style={{ marginTop: 18, padding: "0 4px" }}>
          <HFLegalNote>왼쪽으로 밀어서 삭제할 수 있어요</HFLegalNote>
        </div>
      </div>
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <div style={{
    margin: "18px 4px 8px",
    fontSize: 13, fontWeight: 700, color: "#8F97A0", letterSpacing: "-0.02em",
  }}>{children}</div>
);

window.NotificationsScreen = NotificationsScreen;
