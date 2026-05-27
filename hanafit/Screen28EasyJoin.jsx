// Screen 28 — 청년미래적금 간편 가입
// 하나원큐 안에서 간편하게 가입 완결. 마이데이터 자동 입력.
// 흰 배경 · 진행률 점 · 자동 입력 카드 · 칩 선택 · 결과 카드 · CTA
const EasyJoinScreen = ({ onBack, onNext }) => {
  const [amount, setAmount] = useStateHF(10);
  const [autoTransfer, setAutoTransfer] = useStateHF(true);

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden", position: "relative",
    }}>
      <DrillHeader title="청년미래적금 가입" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 160px" }}>
        <div style={{ padding: "8px 0 18px", display: "flex", justifyContent: "center" }}>
          <HFProgressDots current={2} total={4}/>
        </div>
        <h1 style={{
          margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.3, color: "#22262B",
        }}>
          가입 정보를<br/>
          확인해 주세요
        </h1>

        {/* 자동 입력 카드 */}
        <div style={{
          marginTop: 20, padding: "18px 20px",
          background: "#F5F6FA", borderRadius: 16,
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 8,
          }}>
            <span style={{
              fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}>👤 가입자 정보</span>
            <span style={{
              fontSize: 11, fontWeight: 700, color: "#00A38D",
              padding: "2px 8px", background: "#E0F5F0", borderRadius: 4,
              letterSpacing: "-0.02em",
            }}>인증완료</span>
          </div>
          <HFAutoDataRow label="이름" value="최서연"/>
          <HFAutoDataRow label="생년월일" value="2001.03.15"/>
          <HFAutoDataRow label="휴대폰" value="010-****-1234" last/>
          <div style={{
            marginTop: 12, fontSize: 12, color: "#00A38D",
            fontWeight: 600, letterSpacing: "-0.02em",
          }}>✅ 마이데이터로 자동 확인됨</div>
        </div>

        {/* 가입 조건 선택 */}
        <div style={{
          marginTop: 24, marginBottom: 10, padding: "0 4px",
          fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        }}>가입 조건 선택</div>

        {/* 월 납입금액 */}
        <div style={{
          padding: "16px 18px", borderRadius: 16,
          border: "1px solid #F0F0F0",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 12,
          }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>
              월 납입금액
            </span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[5, 10, 20, 30, 50].map(v => (
              <HFAmountChip key={v}
                value={`${v}`} label="만원"
                active={amount === v} onClick={() => setAmount(v)}/>
            ))}
          </div>
          <div style={{
            marginTop: 10, fontSize: 12, color: "#5E6976",
            letterSpacing: "-0.02em",
          }}>💡 또래 평균 12만원</div>
        </div>

        {/* 자동이체 설정 */}
        <div style={{
          marginTop: 12, padding: "16px 18px", borderRadius: 16,
          border: "1px solid #F0F0F0",
        }}>
          <div style={{
            fontSize: 14, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em",
            marginBottom: 8,
          }}>자동이체 설정</div>
          <HFAutoDataRow label="출금 계좌" value="달달하나통장 ›"/>
          <HFAutoDataRow label="이체일" value="매월 10일 ›" last/>
          <div style={{ marginTop: 6 }}>
            <HFCheckbox checked={autoTransfer} onChange={setAutoTransfer}>
              자동이체 신청 (우대금리 +1.0%)
            </HFCheckbox>
          </div>
        </div>

        {/* 예상 만기 수령액 */}
        <div style={{
          marginTop: 24, marginBottom: 10, padding: "0 4px",
          fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        }}>💰 예상 만기 수령액</div>

        <div style={{
          padding: "26px 22px", borderRadius: 18,
          background: "linear-gradient(180deg, #ECF8F2 0%, #F5FBF7 100%)",
          border: "1.5px solid #B7E0CF",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", lineHeight: 1,
          }}>245.4<span style={{ fontWeight: 700, fontSize: "0.5em", marginLeft: 2 }}>만원</span></div>
          <div style={{
            marginTop: 10, fontSize: 13, color: "#5E6976",
            letterSpacing: "-0.02em",
          }}>24개월 후 (2028.05)</div>
          <div style={{
            marginTop: 10, fontSize: 13, fontWeight: 700,
            color: "#007A6A", letterSpacing: "-0.02em",
          }}>적용금리 연 5.00%</div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "12px 20px 18px", background: "#fff",
        borderTop: "1px solid #F0F0F0",
      }}>
        <PrimaryCTA onClick={onNext}>다음 단계 →</PrimaryCTA>
      </div>
    </div>
  );
};

window.EasyJoinScreen = EasyJoinScreen;
