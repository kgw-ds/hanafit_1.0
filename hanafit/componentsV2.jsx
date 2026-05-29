// 하나핏 v2 공통 atoms — 평가용 금융 서비스 톤 강화
// 페르소나 고정값 · 앱인앱 정체성 · 추천 근거 · 금소법 문구 · 하나금융 전환 지점

// ── 페르소나 절대 고정값 (모든 화면 통일) ──
const HF_PERSONA = {
  name: "최서연",
  birth: "2002.03.14",
  age: "만 23세",
  phone: "010-****-2837",
  status: "서울 자취 · 대학 재학 · 알바 월 62만원",
  type: "혜택 놓침형",
  peerN: "1,247명",
  peerNote: "1,000명 이상 익명 그룹 기준으로만 비교해요",
  saveYear: "연 186만원",
  saveBasis: "청년월세지원·K-패스·교통비 환급 등 신청 가능성 높은 혜택 기준 추정",
};

// ── 앱인앱 정체성 헤더: 하나원큐 〉 하나핏 ──
// 기존 DrillHeader 위에 얹는 얇은 브레드크럼 바
const HFBreadcrumb = ({ onSettings, onHome }) => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "8px 16px 0", flexShrink: 0,
  }}>
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 12, fontWeight: 600, letterSpacing: "-0.02em", color: "#5E6976",
    }}>
      <span onClick={onHome} style={{ cursor: onHome ? "pointer" : "default", color: "#8F97A0" }}>하나원큐</span>
      <span style={{ color: "#C0C0C0" }}>〉</span>
      <span style={{ color: "#00A38D", fontWeight: 700 }}>하나핏</span>
    </div>
    {onSettings && (
      <button onClick={onSettings} style={{
        background: "none", border: "none", padding: 4, cursor: "pointer",
        color: "#8F97A0", display: "flex",
      }}>
        <HanaIcon name="settings" size={18}/>
      </button>
    )}
  </div>
);

// ── 하나원큐로 돌아가기 (하단 링크) ──
const HFReturnToHana = ({ onClick }) => (
  <button onClick={onClick} className="hana-press" style={{
    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
    width: "100%", padding: "12px 0", margin: "4px 0 0",
    background: "transparent", border: "none", cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 13, fontWeight: 600, color: "#5E6976", letterSpacing: "-0.02em",
  }}>
    <HanaIcon name="back" size={14} color="#5E6976"/>
    하나원큐로 돌아가기
  </button>
);

// ── 신뢰 배지 (혜택 상세 상단) ──
const HFTrustBadge = ({ children }) => (
  <div style={{
    display: "flex", alignItems: "flex-start", gap: 8,
    padding: "11px 14px", borderRadius: 12,
    background: "#F5F6FA", border: "1px solid #ECECEC",
    marginBottom: 4,
  }}>
    <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>🛡️</span>
    <span style={{
      flex: 1, fontSize: 12, color: "#5E6976",
      letterSpacing: "-0.02em", lineHeight: 1.5,
    }}>{children}</span>
  </div>
);

// ── 추천 근거 카드 (회색, 혜택 리스트/상세) ──
// reasons: [{ ok: bool, text }] — ok면 체크, 아니면 '추가 확인'
const HFRecReason = ({ title = "추천 근거", reasons }) => (
  <div style={{
    marginTop: 10, padding: "12px 14px", borderRadius: 12,
    background: "#F5F6FA",
  }}>
    <div style={{
      fontSize: 11, fontWeight: 700, color: "#5E6976",
      letterSpacing: "-0.02em", marginBottom: 8,
      display: "flex", alignItems: "center", gap: 5,
    }}>
      <span style={{ fontSize: 11 }}>📊</span>{title}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {reasons.map((r, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 12.5, letterSpacing: "-0.02em",
          color: r.ok ? "#22262B" : "#B07A00",
        }}>
          {r.ok ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A38D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : (
            <span style={{
              width: 14, height: 14, borderRadius: 7, flexShrink: 0,
              background: "#FFF4D6", color: "#B07A00",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 800,
            }}>!</span>
          )}
          <span style={{ flex: 1 }}>{r.text}</span>
        </div>
      ))}
    </div>
  </div>
);

// ── AI 안전 문구 (FIT AI 화면 하단 고정) ──
const HFAISafety = () => (
  <div style={{
    padding: "10px 14px", margin: "0 2px",
    background: "rgba(245, 246, 250, 0.7)", borderRadius: 10,
    fontSize: 10.5, color: "#8F97A0", letterSpacing: "-0.02em",
    lineHeight: 1.55, textAlign: "center",
  }}>
    FIT AI는 공식 정책 DB와 진단 정보 기반으로 안내해요.<br/>
    최종 자격·지급 여부는 신청기관 기준으로 확정됩니다.
  </div>
);

// ── 하나금융 전환 지점 (미션/상품 연결) ──
// 민트 외곽선 카드 + 하나 로고 자리 + 화살표
const HFHanaLinkRow = ({ icon = "🏦", label, sub, onClick }) => (
  <div onClick={onClick} className="hana-press" style={{
    display: "flex", alignItems: "center", gap: 12,
    padding: "14px 16px", borderRadius: 14,
    background: "#fff", border: "1.5px solid #B7E0CF",
    boxShadow: "0 2px 8px rgba(63,169,141,0.08)",
    cursor: "pointer",
  }}>
    <div style={{
      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
      background: "#E0F5F0",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 18,
    }}>{icon}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: 10, fontWeight: 700, letterSpacing: "0.01em",
        color: "#00A38D", marginBottom: 2,
      }}>
        <span style={{
          padding: "1px 6px", background: "#00A38D", color: "#fff",
          borderRadius: 3, fontSize: 9,
        }}>하나금융 연결</span>
      </div>
      <div style={{
        fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>{label}</div>
      {sub && (
        <div style={{
          fontSize: 12, color: "#5E6976", marginTop: 1, letterSpacing: "-0.02em",
        }}>{sub}</div>
      )}
    </div>
    <HanaIcon name="chevron" size={16} color="#00A38D"/>
  </div>
);

// ── 공식 출처 한 줄 (정책명 · 기관 · 확인일) ──
const HFOfficialSourceLine = ({ policy, org, date, onClick }) => (
  <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
    display: "flex", alignItems: "center", gap: 10,
    padding: "12px 14px", borderRadius: 12,
    background: "#fff", border: "1px solid #ECECEC",
    cursor: onClick ? "pointer" : "default",
  }}>
    <span style={{ fontSize: 16 }}>🔗</span>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontSize: 13, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>{policy}</div>
      <div style={{
        fontSize: 11, color: "#8F97A0", marginTop: 1, letterSpacing: "-0.02em",
      }}>{org} · 최종 확인 {date}</div>
    </div>
    {onClick && <HanaIcon name="chevron" size={14} color="#8F97A0"/>}
  </div>
);

// ── 섹션 제목 (공용) ──
const HFSection = ({ children, style }) => (
  <div style={{
    fontSize: 16, fontWeight: 700, color: "#22262B",
    letterSpacing: "-0.02em", padding: "0 2px", ...style,
  }}>{children}</div>
);

Object.assign(window, {
  HF_PERSONA, HFBreadcrumb, HFReturnToHana, HFTrustBadge,
  HFRecReason, HFAISafety, HFHanaLinkRow, HFOfficialSourceLine, HFSection,
});
