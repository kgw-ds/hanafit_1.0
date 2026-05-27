// Screen 18 — 미션 진행 (가입형 — 청년미래적금 가입 단계)
// 진행 헤더 (2/4 단계) · 마이데이터 자동입력 · 금액 칩 · 자동이체 · CTA
const MissionProgressJoinScreen = ({ onBack, onComplete }) => {
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
          margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.3, color: "#22262B",
        }}>
          가입 정보를 확인해 주세요
        </h1>

        <div style={{ marginTop: 22 }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 8,
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>
              본인 정보
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              fontSize: 12, fontWeight: 600, color: "#00A38D",
              padding: "3px 10px", background: "#E0F5F0", borderRadius: 9999,
            }}>✓ 마이데이터 자동</span>
          </div>
          <Card style={{ padding: "4px 18px" }}>
            <HFAutoDataRow label="이름" value="최서연"/>
            <HFAutoDataRow label="생년월일" value="2002.03.14"/>
            <HFAutoDataRow label="휴대폰" value="010-****-2837" last/>
          </Card>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>
              월 납입 금액
            </span>
            <span style={{ fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em" }}>또래 평균 12만원</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[5, 10, 20, 30, 50].map(v => (
              <HFAmountChip key={v}
                value={`${v}`} label="만원"
                active={amount === v} onClick={() => setAmount(v)}/>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>
            자동이체 설정
          </span>
          <Card style={{ marginTop: 10, padding: "4px 18px" }}>
            <HFAutoDataRow label="출금 계좌" value="달달하나통장"/>
            <HFAutoDataRow label="이체일" value="매월 25일" last/>
          </Card>
          <div style={{ marginTop: 10, padding: "0 4px" }}>
            <HFCheckbox checked={autoTransfer} onChange={setAutoTransfer}>
              자동이체 신청 (+ 다음 미션 자동 시작)
            </HFCheckbox>
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "12px 20px 18px", background: "#fff",
        borderTop: "1px solid #F0F0F0",
      }}>
        <PrimaryCTA onClick={onComplete}>가입 완료하기</PrimaryCTA>
      </div>
    </div>
  );
};

window.MissionProgressJoinScreen = MissionProgressJoinScreen;
