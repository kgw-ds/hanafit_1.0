// Screen 31 — 멘토 상세 프로필
// 옅은 그린 그라데이션 hero + 평균 통계 3-column
// + 5가지 습관 with 설명 + 받은 혜택 + 또래 효과 + 따라하기 CTA
const MentorDetailScreen = ({ onBack, onFollow }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="멘토 프로필" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "0 0 160px" }}>
      {/* Hero — 그린 톤 */}
      <div style={{
        padding: "20px 24px 28px",
        background: "linear-gradient(180deg, #ECF8F2 0%, #F4F9E6 100%)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 76, height: 76, borderRadius: 38,
            background: "linear-gradient(135deg, #00A38D 0%, #00C8A8 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 36, color: "#fff",
            boxShadow: "0 6px 18px rgba(63,169,141,0.28)",
          }}>👤</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: "3px 10px", borderRadius: 9999,
              fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em",
              color: "#00A38D", background: "#fff",
            }}>⭐ 또래 상위 10%</span>
            <div style={{
              marginTop: 6, fontSize: 18, fontWeight: 800,
              letterSpacing: "-0.03em", color: "#22262B", lineHeight: 1.3,
            }}>23세 · 서울 자취</div>
            <div style={{
              marginTop: 2, fontSize: 13, color: "#5E6976",
              letterSpacing: "-0.02em",
            }}>대학생 · 알바수입 월 80만원</div>
          </div>
        </div>

        <div style={{
          marginTop: 16, padding: "14px 16px", borderRadius: 14,
          background: "rgba(255,255,255,0.7)",
          fontSize: 14, color: "#22262B", letterSpacing: "-0.02em",
          lineHeight: 1.5, fontStyle: "italic",
        }}>
          "쓸 돈은 다 쓰면서도, 받을 수 있는 건 다 받자!"
        </div>

        <div style={{
          marginTop: 12, fontSize: 12, color: "#5E6976",
          letterSpacing: "-0.02em",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{ fontSize: 14 }}>👥</span>
          <b style={{ color: "#00A38D" }}>1,247명</b>의 또래가 함께하고 있어요
        </div>
      </div>

      {/* 평균 통계 3-column */}
      <div style={{ padding: "22px 20px 0" }}>
        <SectionTitle32>이 멘토를 따라하면</SectionTitle32>
        <div style={{
          background: "#fff", borderRadius: 20, padding: "20px 22px",
          marginTop: 10, display: "flex",
          boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
        }}>
          <StatColMD label="월 저축액" value="15만원" sub="+8만원" tone="#00A38D"/>
          <DividerMD/>
          <StatColMD label="혜택 수령" value="3개" sub="연 240만원" tone="#00A38D"/>
          <DividerMD/>
          <StatColMD label="완주율" value="78%" sub="또래 평균 42%" tone="#7567D5"/>
        </div>
      </div>

      {/* 5가지 핵심 습관 */}
      <div style={{ padding: "26px 20px 0" }}>
        <SectionTitle32>핵심 습관 5가지</SectionTitle32>
        <div style={{
          marginTop: 10, background: "#fff", borderRadius: 20,
          padding: "4px 18px",
          boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
        }}>
          <HabitRow num="1" icon="🚌"
            title="K-패스로 교통비 환급"
            sub="매월 자동 30% 환급 · 평균 1.5만원"/>
          <HabitRow num="2" icon="💰"
            title="생활비 통장 분리"
            sub="달달하나통장으로 자동저축 환경"/>
          <HabitRow num="3" icon="🏠"
            title="청년월세지원 신청"
            sub="월 최대 20만원 · 12개월"/>
          <HabitRow num="4" icon="🏦"
            title="청년미래적금 월 10만원"
            sub="우대금리 연 5.0% · 자동이체"
            emphasis/>
          <HabitRow num="5" icon="📱"
            title="자동이체 6개월 유지"
            sub="추가 +1.0% 우대금리"
            last/>
        </div>
      </div>

      {/* 받은 혜택 */}
      <div style={{ padding: "26px 20px 0" }}>
        <SectionTitle32>이 멘토가 받은 혜택</SectionTitle32>
        <div style={{
          marginTop: 10, display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", gap: 10,
        }}>
          <BenefitTile emoji="🏠" title="청년월세지원" value="월 20만원"/>
          <BenefitTile emoji="🚌" title="K-패스" value="누적 +18만원"/>
          <BenefitTile emoji="🏦" title="청년미래적금" value="연 5.0%"/>
          <BenefitTile emoji="📚" title="청년 장학금" value="200만원"/>
        </div>
      </div>

      {/* 또래 효과 */}
      <div style={{ padding: "26px 20px 0" }}>
        <SectionTitle32>따라한 또래들의 평균 효과</SectionTitle32>
        <div style={{
          marginTop: 10, padding: "20px 22px", borderRadius: 20,
          background: "linear-gradient(135deg, #ECF8F2 0%, #FFFFFF 100%)",
          border: "1.5px solid #B7E0CF",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 14,
          }}>
            <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>
              월 평균 절감
            </span>
            <span style={{
              fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em",
              color: "#00A38D", lineHeight: 1,
            }}>+21<span style={{ fontWeight: 700, fontSize: "0.55em", marginLeft: 2 }}>만원</span></span>
          </div>
          <div style={{ height: 1, background: "rgba(63,169,141,0.18)", margin: "10px 0 14px" }}/>
          <SmallStat label="6개월 누적" value="126만원"/>
          <SmallStat label="챌린지 완주율" value="78%"/>
          <SmallStat label="시작 후 평균 일수" value="42일" last/>
        </div>
      </div>

      {/* Footer note */}
      <div style={{ padding: "18px 24px 0" }}>
        <HFLegalNote>
          통계는 같은 멘토를 따라한 또래 1,247명의<br/>
          익명 데이터를 기준으로 해요
        </HFLegalNote>
      </div>
    </div>

    {/* Sticky CTA */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 4,
    }}>
      <PrimaryCTA onClick={onFollow}>이 멘토 따라하기</PrimaryCTA>
      <button onClick={onBack} style={{
        background: "transparent", border: "none",
        color: "#5E6976", fontSize: 13, fontWeight: 600,
        letterSpacing: "-0.02em", padding: 8, cursor: "pointer",
        fontFamily: "inherit",
      }}>다른 멘토 둘러보기</button>
    </div>
  </div>
);

const SectionTitle32 = ({ children }) => (
  <div style={{
    fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
    padding: "0 2px",
  }}>{children}</div>
);

const StatColMD = ({ label, value, sub, tone }) => (
  <div style={{ flex: 1, textAlign: "center" }}>
    <div style={{
      fontSize: 11, color: "#5E6976", letterSpacing: "-0.02em",
    }}>{label}</div>
    <div style={{
      fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em",
      color: "#22262B", marginTop: 6, lineHeight: 1,
    }}>{value}</div>
    <div style={{
      fontSize: 11, color: tone, fontWeight: 600,
      marginTop: 4, letterSpacing: "-0.02em",
    }}>{sub}</div>
  </div>
);

const DividerMD = () => (
  <div style={{ width: 1, background: "#F0F0F0", margin: "0 2px" }}/>
);

const HabitRow = ({ num, icon, title, sub, emphasis, last }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12,
    padding: "14px 0",
    borderBottom: last ? "none" : "1px solid #F5F5F5",
  }}>
    <div style={{
      width: 28, height: 28, borderRadius: 14, flexShrink: 0,
      background: emphasis ? "#00A38D" : "#F0F8F4",
      color: emphasis ? "#fff" : "#00A38D",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 12, fontWeight: 800,
    }}>{num}</div>
    <span style={{ fontSize: 20 }}>{icon}</span>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        {title}
        {emphasis && (
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "-0.02em",
            color: "#00A38D", padding: "1px 6px",
            background: "#E0F5F0", borderRadius: 4,
          }}>핵심</span>
        )}
      </div>
      <div style={{
        fontSize: 12, color: "#5E6976", marginTop: 2, letterSpacing: "-0.02em",
      }}>{sub}</div>
    </div>
  </div>
);

const BenefitTile = ({ emoji, title, value }) => (
  <div style={{
    padding: "16px 14px", borderRadius: 14, background: "#fff",
    boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
  }}>
    <div style={{ fontSize: 22, marginBottom: 6 }}>{emoji}</div>
    <div style={{
      fontSize: 13, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
    }}>{title}</div>
    <div style={{
      fontSize: 12, color: "#00A38D", fontWeight: 600,
      marginTop: 2, letterSpacing: "-0.02em",
    }}>{value}</div>
  </div>
);

const SmallStat = ({ label, value, last }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "8px 0",
    borderBottom: last ? "none" : "1px solid rgba(63,169,141,0.12)",
  }}>
    <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</span>
    <span style={{
      fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
    }}>{value}</span>
  </div>
);

window.MentorDetailScreen = MentorDetailScreen;
