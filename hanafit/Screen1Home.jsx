// Screen 1 — 하나원큐 홈 + 하나핏 진입 카드 (NEW)
// 최신 하나원큐 홈 기준 (하나제휴통장 · 4,046원 · 메뉴 그리드 카드 포함).
// 미니카드 행에 하나핏(NEW)을 끼움 — 놀이터/모임통장과 같은 위계.
const HanafitHomeScreen = ({ onOpen }) => {
  const [account, setAccount] = useStateHF(1);
  const [noticeOpen, setNoticeOpen] = useStateHF(true);
  const [seg, setSeg] = useStateHF("left");

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "radial-gradient(40% 30% at 20% 75%, #E6CCEB 0%, transparent 70%),"
                + "radial-gradient(55% 40% at 85% 35%, #C9C5EA 0%, transparent 70%),"
                + "radial-gradient(50% 35% at 30% 25%, #E8DCEC 0%, transparent 70%),"
                + "linear-gradient(180deg, #DBD2EE 0%, #CFC4E8 100%)",
      overflow: "hidden",
    }}>
      <HomeHeader
        right={
          <>
            <SegChip left="홈" right="간편" active={seg} onChange={setSeg}/>
            <HanaIcon name="ai" size={26} color="#22262B"/>
            <HanaIcon name="bell" size={22} color="#22262B"/>
          </>
        }
      >
        <DarkChip prefix="😎">서연님 할 일</DarkChip>
      </HomeHeader>

      <div style={{ flex: 1, overflow: "auto", padding: "0 20px 20px" }}>
        {noticeOpen && (
          <Notice onClose={() => setNoticeOpen(false)}>
            민생에 플러스 고유가 피해지원금 신청
          </Notice>
        )}

        {/* Account block */}
        <div style={{ textAlign: "center", padding: "26px 0 0", position: "relative" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            fontSize: 17, letterSpacing: "-0.02em",
          }}>
            <span style={{ color: "#5E6976" }}>입출금</span>
            <span style={{ color: "#B5BAC0" }}>|</span>
            <span style={{ color: "#22262B", fontWeight: 700 }}>하나제휴통장</span>
          </div>
          <span style={{
            position: "absolute", right: 4, top: 26,
            color: "#22262B", fontSize: 18, fontWeight: 700, letterSpacing: 1,
          }}>⋮</span>
          <div style={{
            marginTop: 10, display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 15, color: "#22262B", letterSpacing: "-0.02em",
          }}>
            하나은행 176-910656-63107
            <HanaIcon name="copy" size={16} color="#5E6976"/>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: "3px 12px", fontSize: 13, color: "#5E6976",
              border: "1px solid #B5BAC0", borderRadius: 9999, letterSpacing: "-0.02em",
            }}>한도계좌 <HanaIcon name="chevron" size={12}/></span>
          </div>
          <div style={{ marginTop: 22 }}>
            <span style={{
              fontWeight: 800, letterSpacing: "-0.04em",
              fontSize: 68, lineHeight: 1, color: "#22262B",
            }}>4,046<span style={{ fontWeight: 700, fontSize: "0.5em", marginLeft: 4 }}>원</span></span>
          </div>
        </div>

        {/* Transfer pills */}
        <div style={{ display: "flex", gap: 12, marginTop: 24, padding: "0 4px" }}>
          <Pill variant="white">가져오기</Pill>
          <Pill variant="green">보내기</Pill>
        </div>

        {/* Pagination */}
        <div style={{ marginTop: 22, display: "flex", justifyContent: "center" }}>
          <Pagination current={account} total={7}
            onPrev={() => setAccount(Math.max(1, account - 1))}
            onNext={() => setAccount(Math.min(7, account + 1))}/>
        </div>

        {/* All accounts */}
        <div style={{ marginTop: 24 }}>
          <Card style={{ padding: "22px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>전체계좌</span>
              <HanaIcon name="chevron" size={22} color="#22262B" strokeWidth={2}/>
            </div>
          </Card>
        </div>

        {/* Mini-card row — 3 cards, equal columns, no scroll */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10, marginTop: 12,
        }}>
          <HFMiniCard
            icon={<img src="assets/illust/icon-moim.svg" alt="" width="48" height="48"/>}
            title="모임통장" sub="파킹금리혜택"/>
          <HFMiniCard
            icon={<img src="assets/illust/icon-playground.svg" alt="" width="48" height="48"/>}
            title="놀이터" sub="혜택과 정보가..."/>
          <HFMiniCard
            highlight badge
            icon={<img src="assets/illust/hanafit-mark.svg" alt="" width="52" height="52"/>}
            title="하나핏" sub="청년 혜택 찾기"
            onClick={() => onOpen("intro")}/>
        </div>

        {/* Menu grid card — 6 outline icons + 메뉴관리 */}
        <div style={{ marginTop: 12 }}>
          <Card style={{ padding: "26px 12px 14px" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "26px 0", padding: "0 4px",
            }}>
              <HFMenuItem icon="menu-younghana"  label="영하나"/>
              <HFMenuItem icon="menu-playground" label="놀이터"/>
              <HFMenuItem icon="menu-event"      label="이벤트"/>
              <HFMenuItem icon="menu-live"       label="LIVE하나"/>
              <HFMenuItem icon="menu-soccer"     label="하나원큐 축구PI..."/>
              <HFMenuItem icon="menu-wallet"     label="원큐지갑"/>
            </div>
            <div style={{ height: 1, background: "#F0F0F0", margin: "20px 8px 0" }}/>
            <div style={{
              padding: "14px 0 6px", textAlign: "center",
              fontSize: 14, color: "#5E6976",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              letterSpacing: "-0.02em",
            }}>
              <HanaIcon name="settings" size={14} color="#5E6976"/> 메뉴관리
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const HFMiniCard = ({ icon, title, sub, onClick, highlight, badge }) => (
  <div onClick={onClick} className="hana-press" style={{
    position: "relative",
    background: highlight
      ? "linear-gradient(180deg, #ECF8F2 0%, #FFFFFF 60%)"
      : "#fff",
    borderRadius: 20, padding: "16px 14px 16px",
    boxShadow: highlight
      ? "0 6px 16px rgba(63,169,141,0.18)"
      : "0 2px 8px rgba(34,38,43,0.03)",
    cursor: onClick ? "pointer" : "default",
    border: highlight ? "1.5px solid #B7E0CF" : "none",
  }}>
    {badge && (
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <HFNewBadge/>
      </div>
    )}
    <div style={{ height: 56, display: "flex", alignItems: "center", marginBottom: 6 }}>{icon}</div>
    <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#22262B" }}>{title}</div>
    <div style={{
      fontSize: 12, marginTop: 2, letterSpacing: "-0.02em",
      color: highlight ? "#3FA98D" : "#8F97A0",
      fontWeight: highlight ? 600 : 400,
      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
    }}>{sub}</div>
  </div>
);

const HFMenuItem = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="hana-press" style={{
    background: "none", border: "none", cursor: "pointer",
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
    fontFamily: "inherit", padding: "4px 0",
  }}>
    <img src={`assets/illust/${icon}.svg`} alt="" width="40" height="40"/>
    <span style={{
      fontSize: 14, fontWeight: 700, color: "#22262B",
      letterSpacing: "-0.02em", whiteSpace: "nowrap",
      maxWidth: 92, overflow: "hidden", textOverflow: "ellipsis",
    }}>{label}</span>
  </button>
);

window.HanafitHomeScreen = HanafitHomeScreen;
