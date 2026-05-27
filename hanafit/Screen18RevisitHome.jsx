// Screen 18 — 재방문 하나핏 홈 (챌린지 미션 체크리스트 흐름에 맞춰 재구성)
// 옅은 민트 그라데이션 · 진단 유형 배지 · 인사
// · 챌린지 미션 위젯 (3/5 미션 · 60%) · 3대 가치 진입
// · "지금 할 수 있어요" (주간 체크인 / 마감 임박 등 사용자 상태 기반)
// · 이번 달 절감 요약
const RevisitHomeScreen = ({ onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_MINT_BG, overflow: "hidden",
  }}>
    <DrillHeader title="하나핏" onBack={() => onOpen("home")}
      right={
        <>
          <button style={{
            position: "relative", background: "none", border: "none",
            cursor: "pointer", padding: 4, color: "#22262B", display: "flex",
          }} onClick={() => onOpen("notifications")}>
            <HanaIcon name="bell" size={22}/>
            <span style={{
              position: "absolute", top: 0, right: 0,
              minWidth: 16, height: 16, padding: "0 4px",
              borderRadius: 8, background: "#FF5C5C", color: "#fff",
              fontSize: 10, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>3</span>
          </button>
          <button style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 4, color: "#22262B", display: "flex",
          }} onClick={() => onOpen("notif-settings")}>
            <HanaIcon name="settings" size={22}/>
          </button>
        </>
      }/>

    <div style={{ flex: 1, overflow: "auto", padding: "8px 20px 28px" }}>
      {/* 인사 + 정체성 */}
      <div style={{ padding: "4px 4px 18px" }}>
        <div style={{ marginBottom: 10 }}>
          <HFStatusBadge variant="recommend">혜택 놓침형</HFStatusBadge>
        </div>
        <h1 style={{
          margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.35, color: "#22262B",
        }}>
          서연님,<br/>
          오늘도 한 걸음 가볼까요?
        </h1>
      </div>

      {/* 챌린지 미션 위젯 — 미션 체크리스트 진척도 */}
      <MissionWidget
        done={3} total={5} mentor="23세 · 서울 자취 · 상위 10%"
        onClick={() => onOpen("boardActive")}/>

      {/* 3대 가치 진입 — Find / Inform / Transform */}
      <div style={{ marginTop: 18 }}>
        <div style={{
          marginBottom: 10, padding: "0 4px",
          fontSize: 13, fontWeight: 700, color: "#5E6976", letterSpacing: "-0.02em",
        }}>하나핏이 하는 일</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <ValueEntry
            emoji="🔍" tone="#00A38D" toneBg="#E0F5F0"
            label="혜택 찾기" value="4개 발견"
            sub="신청 가능성 높음" badge="NEW"
            onClick={() => onOpen("list")}/>
          <ValueEntry
            emoji="🤖" tone="#7567D5" toneBg="#F0E8F8"
            label="AI 상담" value="궁금한 점 물어보기"
            sub="자격·서류·소득 기준"
            onClick={() => onOpen("aichat")}/>
          <ValueEntry
            emoji="👥" tone="#7567D5" toneBg="#F0E8F8"
            label="또래 비교" value="1,089명과 비교"
            sub="상위 35% 진행 중"
            onClick={() => onOpen("peer")}/>
        </div>
      </div>

      {/* 지금 할 수 있어요 — 미션/체크인/마감 상태 기반 */}
      <div style={{ marginTop: 22 }}>
        <div style={{
          padding: "0 4px 10px",
          fontSize: 13, fontWeight: 700, color: "#5E6976", letterSpacing: "-0.02em",
        }}>지금 할 수 있어요</div>
        <Card style={{ padding: "0" }}>
          <NextActionRow
            tag="이번 주 인증" emoji="✅"
            title="체크카드 1개로 소비 통제"
            sub="주간 인증 2/4주 진행 중"
            onClick={() => onOpen("checkin")}/>
          <NextActionRow
            tag="마감 임박" tagColor="#FF5C5C" tagBg="#FFEDED"
            emoji="🏠" deadline="3"
            title="청년월세지원 신청"
            sub="필요 서류 1개 남았어요"
            onClick={() => onOpen("detail")}
            last/>
        </Card>
      </div>

      {/* 이번 달 절감 */}
      <div style={{ marginTop: 22 }}>
        <Card style={{ padding: "18px 20px" }} onClick={() => onOpen("peer")}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, color: "#5E6976", letterSpacing: "-0.02em" }}>이번 달 절감</span>
            <HanaIcon name="chevron" size={16} color="#8F97A0"/>
          </div>
          <div style={{
            marginTop: 8, fontSize: 30, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", lineHeight: 1,
          }}>21<span style={{ fontWeight: 700, fontSize: "0.55em", marginLeft: 4 }}>만원</span></div>
          <div style={{ fontSize: 12, color: "#5E6976", marginTop: 8, letterSpacing: "-0.02em" }}>
            청년월세지원 20만원 + K-패스 환급 1만원
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// 미션 진척 위젯 — 챌린지 보드로 진입
const MissionWidget = ({ done, total, mentor, onClick }) => {
  const pct = Math.round((done / total) * 100);
  return (
    <div onClick={onClick} className="hana-press" style={{
      background: "linear-gradient(180deg, #ECF8F2 0%, #FFFFFF 60%)",
      border: "1.5px solid #B7E0CF",
      borderRadius: 24, padding: "20px 22px",
      boxShadow: "0 6px 18px rgba(63,169,141,0.16)",
      cursor: "pointer",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        }}>🎯 챌린지 보드</span>
        <HanaIcon name="chevron" size={18} color="#5E6976"/>
      </div>
      <div style={{
        marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "baseline",
      }}>
        <span style={{ fontSize: 14, color: "#5E6976", letterSpacing: "-0.02em" }}>
          <b style={{ color: "#00A38D", fontWeight: 800, fontSize: 26, letterSpacing: "-0.04em", marginRight: 4 }}>{done}</b>
          / {total} 미션 완료
        </span>
        <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.04em", color: "#00A38D" }}>{pct}%</span>
      </div>
      <div style={{
        marginTop: 10, height: 8, borderRadius: 4,
        background: "rgba(255,255,255,0.7)", overflow: "hidden",
      }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "#00A38D" }}/>
      </div>
      <div style={{
        marginTop: 12, display: "flex", alignItems: "center", gap: 6,
        fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em",
      }}>
        멘토 · <span>{mentor}</span>
      </div>
    </div>
  );
};

const ValueEntry = ({ emoji, tone, toneBg, label, value, sub, badge, onClick }) => (
  <div onClick={onClick} className="hana-press" style={{
    background: "#fff", borderRadius: 18,
    padding: "16px 18px",
    display: "flex", alignItems: "center", gap: 14,
    boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
    cursor: "pointer", position: "relative",
  }}>
    <div style={{
      width: 44, height: 44, borderRadius: 14, background: toneBg,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 22, flexShrink: 0,
    }}>{emoji}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em",
      }}>
        {label}
        {badge && <HFNewBadge>{badge}</HFNewBadge>}
      </div>
      <div style={{
        fontSize: 16, fontWeight: 700, color: "#22262B", marginTop: 3,
        letterSpacing: "-0.02em",
      }}>{value}</div>
      <div style={{ fontSize: 12, color: tone, marginTop: 2, fontWeight: 600, letterSpacing: "-0.02em" }}>{sub}</div>
    </div>
    <HanaIcon name="chevron" size={18} color="#8F97A0"/>
  </div>
);

// "지금 할 수 있어요" row — 작은 태그(이번 주 인증 / 마감 임박 등)
const NextActionRow = ({ tag, tagColor, tagBg, emoji, deadline, title, sub, last, onClick }) => (
  <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
    display: "flex", alignItems: "center", gap: 14,
    padding: "16px 18px",
    borderBottom: last ? "none" : "1px solid #F0F0F0",
    cursor: onClick ? "pointer" : "default",
  }}>
    <div style={{
      width: 40, height: 40, borderRadius: 12, background: "#F5F6FA",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 20, flexShrink: 0,
    }}>{emoji}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {tag && (
          <span style={{
            padding: "1px 8px", fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em",
            color: tagColor || "#00A38D",
            background: tagBg || "#E0F5F0",
            borderRadius: 4,
          }}>{tag}</span>
        )}
        {deadline && (
          <span style={{
            padding: "1px 7px", fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em",
            color: "#FF5C5C", background: "#FFEDED", borderRadius: 4,
          }}>D-{deadline}</span>
        )}
      </div>
      <div style={{
        fontSize: 15, fontWeight: 600, color: "#22262B",
        marginTop: 4, letterSpacing: "-0.02em",
      }}>{title}</div>
      <div style={{ fontSize: 12, color: "#5E6976", marginTop: 2, letterSpacing: "-0.02em" }}>{sub}</div>
    </div>
    <HanaIcon name="chevron" size={16} color="#8F97A0"/>
  </div>
);

window.RevisitHomeScreen = RevisitHomeScreen;
