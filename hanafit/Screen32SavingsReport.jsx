// Screen 32 — 절감 리포트
// 옅은 민트 그라데이션 · 기간 토글 · 큰 절감액 hero
// · 카테고리 breakdown · 월별 트렌드 · 또래 비교 · 다음 달 예측
const SAVINGS_TRENDS = [
  { m: "1월", v: 0, label: "0" },
  { m: "2월", v: 5, label: "5만" },
  { m: "3월", v: 12, label: "12만" },
  { m: "4월", v: 18, label: "18만" },
  { m: "5월", v: 21, label: "21만" },
  { m: "6월", v: 26, label: "26만", forecast: true },
];

const SavingsReportScreen = ({ onBack, onOpen }) => {
  const [period, setPeriod] = useStateHF("month"); // month / cumulative
  const isCumulative = period === "cumulative";

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: HF_MINT_BG, overflow: "hidden",
    }}>
      <DrillHeader title="절감 리포트" onBack={onBack}
        right={
          <button style={{
            background: "none", border: "none", padding: 4,
            cursor: "pointer", color: "#22262B", display: "flex",
          }}>
            <HanaIcon name="search" size={20}/>
          </button>
        }/>

      <div style={{ flex: 1, overflow: "auto", padding: "0 20px 28px" }}>
        {/* Period toggle */}
        <div style={{ display: "flex", gap: 6, padding: "4px 0 18px" }}>
          {[["month", "이번 달"], ["cumulative", "누적"]].map(([k, label]) => (
            <button key={k} onClick={() => setPeriod(k)} className="hana-press" style={{
              padding: "8px 18px", borderRadius: 9999,
              background: period === k ? "#22262B" : "rgba(255,255,255,0.7)",
              color: period === k ? "#fff" : "#22262B",
              border: period === k ? "none" : "1px solid rgba(255,255,255,0.9)",
              fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em",
              cursor: "pointer", fontFamily: "inherit",
            }}>{label}</button>
          ))}
        </div>

        {/* Big amount hero */}
        <div style={{
          padding: "26px 22px 22px", borderRadius: 24,
          background: "linear-gradient(180deg, #ECF8F2 0%, #FFFFFF 70%)",
          border: "1.5px solid #B7E0CF",
          boxShadow: "0 6px 18px rgba(63,169,141,0.14)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "3px 10px",
            background: "#fff", borderRadius: 9999,
            fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em",
            color: "#00A38D",
          }}>
            <span style={{ fontSize: 11 }}>💰</span>
            {isCumulative ? "2026년 누적" : "2026년 5월"}
          </div>
          <div style={{
            marginTop: 10, fontSize: 14, color: "#5E6976",
            letterSpacing: "-0.02em",
          }}>{isCumulative ? "올해 받은 총 혜택" : "이번 달 절감"}</div>
          <div style={{
            marginTop: 4, display: "flex", alignItems: "baseline", gap: 8,
          }}>
            <span style={{
              fontSize: 44, fontWeight: 800, letterSpacing: "-0.04em",
              color: "#00A38D", lineHeight: 1,
            }}>
              {isCumulative ? "56" : "21"}
              <span style={{ fontWeight: 700, fontSize: "0.4em", marginLeft: 4 }}>만원</span>
            </span>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "-0.02em",
              color: "#00A38D",
              padding: "3px 8px", background: "#E0F5F0", borderRadius: 9999,
            }}>+ 16% ↑</span>
          </div>
          <div style={{
            marginTop: 10, fontSize: 12, color: "#5E6976",
            letterSpacing: "-0.02em", lineHeight: 1.5,
          }}>
            또래 평균 <b style={{ color: "#7567D5" }}>{isCumulative ? "32만원" : "12만원"}</b> 대비 <b style={{ color: "#00A38D" }}>+{isCumulative ? "24만원" : "9만원"}</b>
          </div>
        </div>

        {/* Category breakdown */}
        <div style={{
          marginTop: 22, marginBottom: 10,
          fontSize: 16, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em", padding: "0 4px",
        }}>어떻게 절감했어요?</div>

        <div style={{
          background: "#fff", borderRadius: 20, padding: "4px 20px",
          boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
        }}>
          <BreakdownRow
            emoji="🏠" category="청년월세지원"
            type="받은 혜택"
            amount={isCumulative ? "100만원" : "20만원"}
            pct={isCumulative ? 95 : 95}
            color="#00A38D"
            onClick={() => onOpen("detail")}/>
          <BreakdownRow
            emoji="🚌" category="K-패스 환급"
            type="교통비 환급"
            amount={isCumulative ? "8.5만원" : "1만원"}
            pct={isCumulative ? 15 : 5}
            color="#7567D5"
            onClick={() => onOpen("detail")}/>
          <BreakdownRow
            emoji="🏦" category="청년미래적금"
            type="우대금리"
            amount={isCumulative ? "예상 +5.4만원" : "예정"}
            pct={isCumulative ? 10 : 3}
            color="#FFB800"
            forecast last
            onClick={() => onOpen("productDetail")}/>
        </div>

        {/* Monthly trend */}
        <div style={{
          marginTop: 22, marginBottom: 10,
          fontSize: 16, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em", padding: "0 4px",
        }}>월별 추이</div>

        <div style={{
          background: "#fff", borderRadius: 20, padding: "20px 18px 16px",
          boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
        }}>
          <div style={{
            display: "flex", alignItems: "flex-end",
            gap: 10, height: 130, padding: "0 4px",
          }}>
            {SAVINGS_TRENDS.map(t => {
              const maxV = 30;
              const h = Math.max(8, (t.v / maxV) * 120);
              return (
                <div key={t.m} style={{
                  flex: 1, display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 4,
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 600,
                    color: t.forecast ? "#8F97A0" : "#22262B",
                    letterSpacing: "-0.02em",
                  }}>{t.label}</div>
                  <div style={{
                    width: "100%", height: h, borderRadius: 6,
                    background: t.forecast
                      ? "repeating-linear-gradient(45deg, #B7E0CF, #B7E0CF 4px, #D6F0E2 4px, #D6F0E2 8px)"
                      : "linear-gradient(180deg, #00A38D 0%, #4DBFAB 100%)",
                    border: t.forecast ? "1.5px dashed #00A38D" : "none",
                  }}/>
                </div>
              );
            })}
          </div>
          <div style={{
            display: "flex", gap: 10, padding: "10px 4px 0",
          }}>
            {SAVINGS_TRENDS.map(t => (
              <div key={t.m} style={{
                flex: 1, textAlign: "center",
                fontSize: 11, color: "#5E6976", letterSpacing: "-0.02em",
              }}>{t.m}</div>
            ))}
          </div>
          <div style={{
            marginTop: 12, padding: "10px 12px",
            background: "#F0F8F4", borderRadius: 10,
            fontSize: 12, color: "#007A6A",
            letterSpacing: "-0.02em", lineHeight: 1.5,
          }}>
            🔮 6월 예상: <b>+26만원</b> (자동이체 우대금리 +0.5만원 반영)
          </div>
        </div>

        {/* Peer comparison */}
        <div style={{
          marginTop: 22, marginBottom: 10,
          fontSize: 16, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em", padding: "0 4px",
        }}>또래와 비교</div>

        <div style={{
          background: "#fff", borderRadius: 20, padding: "18px 22px",
          boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
        }}>
          <PeerBar
            label="서연님"
            value={isCumulative ? "56만원" : "21만원"}
            pct={isCumulative ? 0.65 : 0.75}
            color="#00A38D"/>
          <PeerBar
            label="또래 평균"
            value={isCumulative ? "32만원" : "12만원"}
            pct={isCumulative ? 0.37 : 0.43}
            color="#C0C0C0"/>
          <PeerBar
            label="또래 상위 10%"
            value={isCumulative ? "82만원" : "28만원"}
            pct={isCumulative ? 0.95 : 1.0}
            color="#7567D5" last/>
          <div style={{
            marginTop: 14, padding: "12px 14px",
            background: "#F5F6FA", borderRadius: 12,
            fontSize: 12, color: "#22262B",
            letterSpacing: "-0.02em", lineHeight: 1.5,
          }}>
            💡 서연님은 또래 <b style={{ color: "#00A38D" }}>상위 23%</b>에요.<br/>
            챌린지 미션 2개 더 완료하면 상위 10% 진입 가능해요.
          </div>
          <button onClick={() => onOpen("peer")} className="hana-press" style={{
            width: "100%", marginTop: 12, height: 44, borderRadius: 22,
            background: "transparent", color: "#7567D5",
            border: "1.5px solid #7567D5",
            fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
            cursor: "pointer", fontFamily: "inherit",
          }}>또래 비교 자세히 보기</button>
        </div>

        {/* Bottom legal note */}
        <div style={{ marginTop: 18 }}>
          <HFLegalNote>
            절감액은 받은 혜택, 환급, 우대금리를 합산한 추정치예요.<br/>
            실제 수령액은 공식 기관 심사에 따라 달라질 수 있어요
          </HFLegalNote>
        </div>
      </div>
    </div>
  );
};

const BreakdownRow = ({ emoji, category, type, amount, pct, color, last, forecast, onClick }) => (
  <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
    padding: "16px 0",
    borderBottom: last ? "none" : "1px solid #F5F5F5",
    cursor: onClick ? "pointer" : "default",
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 12, flexShrink: 0,
        background: "#F0F8F4",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18,
      }}>{emoji}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          {category}
          {forecast && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "-0.02em",
              color: "#B07A00", padding: "1px 6px",
              background: "#FFF7E5", borderRadius: 4,
            }}>예상</span>
          )}
        </div>
        <div style={{
          fontSize: 11, color: "#8F97A0", marginTop: 2, letterSpacing: "-0.02em",
        }}>{type}</div>
      </div>
      <span style={{
        fontSize: 15, fontWeight: 800, letterSpacing: "-0.04em",
        color: forecast ? "#8F97A0" : color,
      }}>{amount}</span>
    </div>
    {/* Progress bar */}
    <div style={{
      marginTop: 10, marginLeft: 48, height: 6, borderRadius: 3,
      background: "#F0F0F0", overflow: "hidden",
    }}>
      <div style={{
        width: `${pct}%`, height: "100%",
        background: color, borderRadius: 3,
        opacity: forecast ? 0.5 : 1,
      }}/>
    </div>
  </div>
);

const PeerBar = ({ label, value, pct, color, last }) => (
  <div style={{
    padding: "10px 0",
    borderBottom: last ? "none" : "1px solid #F5F5F5",
  }}>
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      marginBottom: 8,
    }}>
      <span style={{ fontSize: 13, color: "#22262B", letterSpacing: "-0.02em", fontWeight: 500 }}>{label}</span>
      <span style={{
        fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em",
        color: color,
      }}>{value}</span>
    </div>
    <div style={{
      height: 8, borderRadius: 4, background: "#F5F6FA", overflow: "hidden",
    }}>
      <div style={{
        width: `${pct * 100}%`, height: "100%",
        background: color, borderRadius: 4,
        transition: "width 600ms ease-out",
      }}/>
    </div>
  </div>
);

window.SavingsReportScreen = SavingsReportScreen;
