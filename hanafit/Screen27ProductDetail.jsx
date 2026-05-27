// Screen 27 — 청년미래적금 상품 상세
// 정기예금 상품 페이지 패턴: 카테고리 · 좌측 두 줄 hero · 배지 · 큰 일러스트
// · 좌우 2단 수치 · 상품 정보 · 개인화 카드 · 예상 수익 · 하단 sticky CTA
const ProductDetailScreen = ({ onBack, onJoin, onAskAI }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="적금" onBack={onBack} right={
      <button onClick={onAskAI} style={{
        background: "none", border: "none", padding: 4,
        cursor: "pointer", color: "#22262B", display: "flex",
      }}>
        <HanaIcon name="headphones" size={22}/>
      </button>
    }/>

    <div style={{
      flex: 1, overflow: "auto",
      background: "#fff", padding: "16px 24px 240px",
    }}>
      <div style={{ fontSize: 14, color: "#8F97A0", marginBottom: 6, letterSpacing: "-0.02em" }}>
        청년 적금
      </div>
      <h1 style={{
        margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        청년의 미래를<br/>
        위한 똑똑한 저축
      </h1>

      <div style={{ marginTop: 14, display: "flex", gap: 6 }}>
        <span style={{
          padding: "4px 10px", fontSize: 12, fontWeight: 700,
          letterSpacing: "-0.02em", color: "#7567D5",
          border: "1px solid #DAD5F6", borderRadius: 9999,
        }}>청년만</span>
        <span style={{
          padding: "4px 10px", fontSize: 12, fontWeight: 700,
          letterSpacing: "-0.02em", color: "#00A38D",
          border: "1px solid #B7E0CF", borderRadius: 9999,
        }}>또래 81% 가입</span>
      </div>

      {/* Illustration */}
      <div style={{ margin: "14px 0 4px", display: "flex", justifyContent: "center" }}>
        <img src="assets/illust/hanafit-piggy.svg" alt=""
          style={{ width: "70%", maxWidth: 250 }}/>
      </div>

      {/* 2-column rate */}
      <div style={{ display: "flex", padding: "8px 0 18px" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "#5E6976", marginBottom: 10, letterSpacing: "-0.02em" }}>기본금리</div>
          <span style={{
            fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#22262B", lineHeight: 1,
          }}>연 3.50<span style={{ fontWeight: 700, fontSize: "0.55em" }}>%</span></span>
        </div>
        <div style={{ flex: 1, textAlign: "center", borderLeft: "1px solid #F0F0F0" }}>
          <div style={{ fontSize: 14, color: "#5E6976", marginBottom: 10, letterSpacing: "-0.02em" }}>최고금리</div>
          <span style={{
            fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", lineHeight: 1,
          }}>연 6.00<span style={{ fontWeight: 700, fontSize: "0.55em" }}>%</span></span>
        </div>
      </div>

      <div style={{ height: 1, background: "#F0F0F0", margin: "8px 0 22px" }}/>

      {/* 상품 정보 */}
      <ProductSection title="상품 정보">
        <ProductRow label="가입대상" value="만 19~34세 청년"/>
        <ProductRow label="가입금액" value="월 10만원~50만원"/>
        <ProductRow label="가입기간" value="24개월"/>
        <ProductRow label="우대조건" multiline>
          <ul style={{ margin: 0, padding: 0, listStyle: "none",
                       display: "flex", flexDirection: "column", gap: 6 }}>
            <li style={liStyle}><span style={dotStyle}/>하나원큐 신규 가입 <b style={{ color: "#00A38D", marginLeft: 4 }}>+1.0%</b></li>
            <li style={liStyle}><span style={dotStyle}/>K-패스 연동 <b style={{ color: "#00A38D", marginLeft: 4 }}>+0.5%</b></li>
            <li style={liStyle}><span style={dotStyle}/>자동이체 6개월 <b style={{ color: "#00A38D", marginLeft: 4 }}>+1.0%</b></li>
          </ul>
        </ProductRow>
      </ProductSection>

      {/* 예상 우대금리 — 개인화 */}
      <div style={{
        marginTop: 22, marginBottom: 10,
        fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>💡 서연님의 예상 우대금리</div>

      <div style={{
        padding: "18px 20px", borderRadius: 16,
        background: "#F0F8F4",
      }}>
        <RateLine label="기본금리" value="3.50%"/>
        <RateLine label="+ 하나원큐 신규" value="+1.00%" plus/>
        <RateLine label="+ K-패스 연동" value="+0.50%" plus/>
        <div style={{ height: 1, background: "#B7E0CF", margin: "12px 0" }}/>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{
            fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
          }}>예상 적용금리</span>
          <span style={{
            fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D",
          }}>연 5.00<span style={{ fontWeight: 700, fontSize: "0.55em" }}>%</span></span>
        </div>
        <div style={{
          marginTop: 10, padding: "10px 12px", borderRadius: 10,
          background: "#fff",
          fontSize: 12, color: "#007A6A", letterSpacing: "-0.02em",
          fontWeight: 600, lineHeight: 1.5,
        }}>
          자동이체 6개월 유지 시<br/>
          최대 <b>연 6.00%</b> 가능
        </div>
      </div>

      {/* 예상 수익 */}
      <div style={{
        marginTop: 22, marginBottom: 10,
        fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>📊 예상 수익</div>

      <div style={{
        padding: "18px 20px", borderRadius: 16,
        background: "#fff", border: "1px solid #F0F0F0",
      }}>
        <div style={{
          fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em", marginBottom: 12,
        }}>월 10만원 × 24개월</div>
        <RateLine label="원금" value="240만원" plain/>
        <RateLine label="이자 (연 5%)" value="5.4만원" plain/>
        <div style={{ height: 1, background: "#F0F0F0", margin: "12px 0" }}/>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{
            fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
          }}>만기 수령</span>
          <span style={{
            fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D",
          }}>245.4<span style={{ fontWeight: 700, fontSize: "0.55em", marginLeft: 2 }}>만원</span></span>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <HFSourceNote>공식 출처: 하나은행 상품몰 · 최종 확인 2026.05.20</HFSourceNote>
      </div>
    </div>

    {/* Sticky CTA */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 4,
    }}>
      <PrimaryCTA onClick={onJoin}>가입하기</PrimaryCTA>
      <button onClick={onAskAI} style={{
        background: "transparent", border: "none",
        color: "#7567D5", fontSize: 14, fontWeight: 600,
        letterSpacing: "-0.02em", padding: "10px 4px", cursor: "pointer",
        fontFamily: "inherit",
      }}>AI에게 물어보기</button>
    </div>
  </div>
);

const ProductSection = ({ title, children }) => (
  <div>
    <div style={{
      fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      marginBottom: 8,
    }}>{title}</div>
    <div>{children}</div>
  </div>
);

const ProductRow = ({ label, value, multiline, children }) => (
  <div style={{
    display: "flex", alignItems: multiline ? "flex-start" : "center",
    gap: 12, padding: "12px 0",
    borderBottom: "1px solid #F5F5F5",
  }}>
    <span style={{
      fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em",
      width: 88, flexShrink: 0,
    }}>{label}</span>
    {value && (
      <span style={{
        flex: 1, fontSize: 14, color: "#22262B", fontWeight: 600,
        letterSpacing: "-0.02em",
      }}>{value}</span>
    )}
    {children && <div style={{ flex: 1, fontSize: 13, color: "#22262B" }}>{children}</div>}
  </div>
);

const RateLine = ({ label, value, plus, plain }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "6px 0",
  }}>
    <span style={{
      fontSize: 13, color: "#22262B", letterSpacing: "-0.02em",
      fontWeight: 500,
    }}>{label}</span>
    <span style={{
      fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em",
      color: plain ? "#22262B" : plus ? "#00A38D" : "#22262B",
    }}>{value}</span>
  </div>
);

const liStyle = {
  fontSize: 13, color: "#22262B", letterSpacing: "-0.02em",
  display: "flex", alignItems: "center", gap: 8, lineHeight: 1.4,
};
const dotStyle = {
  display: "inline-block", width: 4, height: 4, borderRadius: 2,
  background: "#00A38D", flexShrink: 0,
};

window.ProductDetailScreen = ProductDetailScreen;
