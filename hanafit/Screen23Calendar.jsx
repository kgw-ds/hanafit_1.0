// Screen 23 — 혜택 캘린더 ⭐
// 흰 배경 · 필터 토글 · 월 헤더 · 캘린더 그리드 · 선택일 시트 · 마감 임박 TOP 3
const CalendarScreen = ({ onBack, onOpen }) => {
  const [mode, setMode] = useStateHF("내 추천만");
  const [day, setDay] = useStateHF(27);

  const events = {
    3: "green", 7: "green",
    12: "yellow", 14: "yellow",
    20: "green", 23: "red", 25: "yellow",
    27: "red", 28: "yellow", 30: "green",
  };

  const daySheet = {
    27: [
      { tone: "red",    icon: "🔴", title: "청년월세지원 신청 마감", sub: "신청 마감일" },
      { tone: "yellow", icon: "🟡", title: "서울시 청년 임차료", sub: "새 모집 시작" },
    ],
    25: [
      { tone: "yellow", icon: "🟡", title: "K-패스 신규 가입", sub: "새 모집 시작" },
    ],
    3: [
      { tone: "green",  icon: "🟢", title: "청년미래적금 자동이체", sub: "신청 가능" },
    ],
  };

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <DrillHeader title="혜택 캘린더" onBack={onBack}
        right={<HanaIcon name="settings" size={20}/>}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 28px" }}>
        {/* Mode toggle */}
        <div style={{ display: "flex", gap: 6, padding: "4px 0 18px" }}>
          {["내 추천만", "전체"].map(m => (
            <button key={m} onClick={() => setMode(m)} className="hana-press" style={{
              padding: "8px 18px", borderRadius: 9999,
              background: mode === m ? "#22262B" : "#fff",
              color: mode === m ? "#fff" : "#22262B",
              border: mode === m ? "none" : "1px solid #E8E8E8",
              fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em",
              cursor: "pointer", fontFamily: "inherit",
            }}>{m}</button>
          ))}
        </div>

        {/* Month header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "4px 6px 14px",
        }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex" }}>
            <HanaIcon name="chevron-l" size={20}/>
          </button>
          <span style={{ fontSize: 20, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>
            2026년 6월
          </span>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex" }}>
            <HanaIcon name="chevron" size={20}/>
          </button>
        </div>

        {/* Calendar */}
        <HFCalendarGrid year={2026} month={6} selected={day} onSelect={setDay} events={events}/>

        {/* Legend */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 18,
          padding: "14px 4px 0", fontSize: 12, color: "#5E6976",
          letterSpacing: "-0.02em",
        }}>
          <span style={{display:"inline-flex", alignItems:"center", gap:4}}><span style={{width:6,height:6,borderRadius:3,background:"#00A38D"}}/>신청 가능</span>
          <span style={{display:"inline-flex", alignItems:"center", gap:4}}><span style={{width:6,height:6,borderRadius:3,background:"#FF5C5C"}}/>마감 임박</span>
          <span style={{display:"inline-flex", alignItems:"center", gap:4}}><span style={{width:6,height:6,borderRadius:3,background:"#FFB800"}}/>새 모집</span>
        </div>

        {/* Selected day sheet */}
        <div style={{
          marginTop: 20, padding: "16px 18px",
          background: "#F5F6FA", borderRadius: 20,
        }}>
          <div style={{
            fontSize: 15, fontWeight: 700, color: "#22262B",
            letterSpacing: "-0.02em", marginBottom: 12,
          }}>6월 {day}일 ({dayOfWeek(2026, 6, day)})</div>
          {(daySheet[day] || []).length === 0 ? (
            <div style={{ fontSize: 13, color: "#8F97A0", letterSpacing: "-0.02em" }}>
              해당 날짜의 혜택이 없어요
            </div>
          ) : daySheet[day].map((e, i) => (
            <div key={i} className="hana-press" onClick={() => onOpen("detail")} style={{
              background: "#fff", borderRadius: 14, padding: "14px 16px",
              marginBottom: i < daySheet[day].length - 1 ? 8 : 0,
              display: "flex", alignItems: "center", gap: 12,
              cursor: "pointer",
            }}>
              <span style={{ fontSize: 18 }}>{e.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>{e.title}</div>
                <div style={{ fontSize: 12, color: "#5E6976", marginTop: 2, letterSpacing: "-0.02em" }}>{e.sub}</div>
              </div>
              <HanaIcon name="chevron" size={16} color="#8F97A0"/>
            </div>
          ))}
        </div>

        {/* TOP 3 마감 임박 */}
        <div style={{ marginTop: 24 }}>
          <div style={{
            padding: "0 4px 12px",
            fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
          }}>이번 달 마감 임박 TOP 3</div>
          <Card style={{ padding: "0 16px" }}>
            <UrgentRow rank="1" title="청년월세지원" deadline="3" onClick={() => onOpen("detail")}/>
            <UrgentRow rank="2" title="K-패스 신규 가입" deadline="7" onClick={() => onOpen("detail")}/>
            <UrgentRow rank="3" title="청년 생활장학금" deadline="12" onClick={() => onOpen("detail")} last/>
          </Card>
        </div>

        <div style={{ marginTop: 20 }}>
          <HFLegalNote>
            정책은 매년 모집 일정이 변경될 수 있어요.<br/>
            공식 출처를 확인해 주세요
          </HFLegalNote>
        </div>
      </div>
    </div>
  );
};

const dayOfWeek = (y, m, d) => {
  const labels = ["일","월","화","수","목","금","토"];
  return labels[new Date(y, m - 1, d).getDay()];
};

const UrgentRow = ({ rank, title, deadline, last, onClick }) => (
  <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
    display: "flex", alignItems: "center", gap: 14,
    padding: "16px 4px",
    borderBottom: last ? "none" : "1px solid #F0F0F0",
    cursor: onClick ? "pointer" : "default",
  }}>
    <span style={{
      width: 28, height: 28, borderRadius: 14, background: "#FFEDED",
      color: "#FF5C5C", fontWeight: 800, fontSize: 13, letterSpacing: "-0.04em",
      display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>{rank}</span>
    <span style={{ flex: 1, fontSize: 15, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>{title}</span>
    <span style={{
      padding: "2px 10px", fontSize: 12, fontWeight: 700, letterSpacing: "-0.02em",
      color: "#FF5C5C", background: "#FFEDED", borderRadius: 4,
    }}>D-{deadline}</span>
  </div>
);

window.CalendarScreen = CalendarScreen;
