// Screen 20 — 주간 체크인 (행동형 미션 인증)
// 흰 배경 · "이번 주는 어땠어요?" · 행동 미션 인증 카드 · 다음 주 안내
const WeeklyCheckinScreen = ({ onBack, onSubmit }) => {
  const [w, setW] = useStateHF({ check: null, nospend: null });

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden", position: "relative",
    }}>
      <DrillHeader title="주간 체크인" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 160px" }}>
        <div style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em", marginBottom: 6 }}>
          5월 3주차
        </div>
        <h1 style={{
          margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.35, color: "#22262B",
        }}>
          이번 주는<br/>어떻게 보냈어요?
        </h1>

        {/* Action mission 1 */}
        <CheckCard
          type="action" title="체크카드 1개로 소비 통제"
          ask="이번 주 카드 한 장만 사용했어요?"
          value={w.check} onChange={(v) => setW(p => ({...p, check: v}))}/>

        {/* Action mission 2 */}
        <CheckCard
          type="action" title="무지출 데이 주 2회"
          ask="이번 주 무지출 데이 며칠?"
          choices={["0일", "1일", "2일+"]}
          value={w.nospend} onChange={(v) => setW(p => ({...p, nospend: v}))}/>

        {/* AI encouragement */}
        <HFAIInterpretation>
          꾸준한 작은 실천이 챌린지 달성을 만들어요.<br/>
          이번 주도 함께해줘서 고마워요 🌱
        </HFAIInterpretation>

        <div style={{ marginTop: 20 }}>
          <HFLegalNote>
            인증은 자기 신고 기준이며,<br/>4주 누적되면 미션이 자동 완료돼요
          </HFLegalNote>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "12px 20px 18px", background: "#fff",
        borderTop: "1px solid #F0F0F0",
      }}>
        <PrimaryCTA onClick={onSubmit}>이번 주 인증 완료</PrimaryCTA>
      </div>
    </div>
  );
};

const CheckCard = ({ type, title, ask, choices = ["네", "아니요"], value, onChange }) => (
  <div style={{
    marginTop: 18,
    background: "#fff", borderRadius: 18, padding: "18px 20px",
    border: "1px solid #ECECEC",
  }}>
    <HFMissionTypeBadge type={type}/>
    <div style={{
      marginTop: 8, fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
    }}>{title}</div>
    <div style={{ marginTop: 12, fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>{ask}</div>
    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
      {choices.map(c => {
        const active = value === c;
        return (
          <button key={c} onClick={() => onChange(c)} className="hana-press" style={{
            flex: 1, height: 44, borderRadius: 14,
            background: active ? "#E0F5F0" : "#fff",
            color: active ? "#00A38D" : "#22262B",
            border: active ? "1.5px solid #00A38D" : "1px solid #E8E8E8",
            fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
            cursor: "pointer", fontFamily: "inherit",
          }}>{c}</button>
        );
      })}
    </div>
  </div>
);

window.WeeklyCheckinScreen = WeeklyCheckinScreen;
