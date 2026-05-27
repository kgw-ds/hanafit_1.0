// Screen 4 — 자동 진단 분석 중 (40초)
// 옅은 민트 그라데이션 · 풀스크린 · 중앙 정렬 큰 제목 · 일러스트 · 진행률 dots · 안내
const AnalyzingScreen = ({ onDone }) => {
  const [step, setStep] = useStateHF(2); // 4단계 중 2단계 진행 중
  const steps = [
    "기본 정보를 확인하고 있어요",
    "월세·교통비·구독비\n패턴을 분석하고 있어요",
    "정책·금융 혜택을 매칭하고 있어요",
    "또래 평균과 비교하고 있어요",
  ];

  // step 자동 진행 (시연용)
  React.useEffect(() => {
    if (step >= 4) { const t = setTimeout(() => onDone?.(), 1200); return () => clearTimeout(t); }
    const t = setTimeout(() => setStep(s => s + 1), 4000);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: HF_MINT_BG,
      padding: "60px 24px 40px", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Title */}
      <div style={{ textAlign: "center", paddingTop: 10 }}>
        <h1 style={{
          margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.35, color: "#22262B",
        }}>
          서연님의 상황을<br/>
          분석하고 있어요
        </h1>
      </div>

      {/* Illustration */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="assets/illust/hanafit-scanning.svg" alt=""
          style={{ width: 220, animation: "hfPulse 2.4s ease-in-out infinite" }}/>
      </div>

      {/* Progress + current step */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <HFProgressDots current={step} total={4}/>

        <div style={{
          fontSize: 22, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em", lineHeight: 1.35, textAlign: "center",
          whiteSpace: "pre-line", minHeight: 64,
        }}>
          {steps[Math.min(step - 1, 3)]}
        </div>

        <div style={{
          fontSize: 14, color: "#5E6976", letterSpacing: "-0.02em",
          display: "inline-flex", alignItems: "center", gap: 6,
        }}>
          <span style={{
            display: "inline-block", width: 8, height: 8, borderRadius: 4,
            background: "#00A38D",
            animation: "hfBlink 1s ease-in-out infinite",
          }}/>
          곧 끝나요
        </div>

        <HFLegalNote>
          분석 결과는 신청 가능성을 안내하기 위한 참고예요
        </HFLegalNote>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hfPulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.04); }
        }
        @keyframes hfBlink {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1; }
        }
      `}}/>
    </div>
  );
};

window.AnalyzingScreen = AnalyzingScreen;
