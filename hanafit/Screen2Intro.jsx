// Screen 2 — 하나핏 서비스 소개 (온보딩)
// 옅은 민트 그라데이션 · 큰 좌측 두 줄 헤더 · 일러스트 · 3개 기능 카드 · CTA
const IntroScreen = ({ onBack, onNext, onDirect }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_MINT_BG, overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="하나핏" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "8px 24px 200px" }}>
      <h1 style={{
        margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.3, color: "#22262B",
      }}>
        몰라서 놓친 청년 혜택,<br/>
        하나핏이 찾아드릴게요
      </h1>
      <p style={{
        margin: "12px 0 0", fontSize: 15, color: "#5E6976",
        letterSpacing: "-0.02em", lineHeight: 1.55,
      }}>
        마이데이터 기반으로 받을 수 있는<br/>
        정책·금융 혜택을 찾고, AI가 신청까지 도와줘요
      </p>

      <div style={{ margin: "18px 0 28px", display: "flex", justifyContent: "center" }}>
        <img src="assets/illust/hanafit-finder.svg" alt=""
          style={{ width: "78%", maxWidth: 260 }}/>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <HFFeatureCard index="1"
          title="받을 수 있는 혜택 찾기"
          sub="내 조건에 맞는 정책을 자동으로"/>
        <HFFeatureCard index="2"
          title="AI에게 쉽게 물어보기"
          sub="신청 서류부터 자격까지 한 번에"/>
        <HFFeatureCard index="3"
          title="비슷한 또래 루틴 따라하기"
          sub="상위 10% 또래의 금융 습관"/>
      </div>
    </div>

    {/* Sticky CTA + secondary + legal */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px",
      background: "linear-gradient(180deg, rgba(239,248,240,0) 0%, rgba(219,239,226,0.95) 30%, #DBEFE2 100%)",
      display: "flex", flexDirection: "column", gap: 10,
    }}>
      <PrimaryCTA onClick={onNext}>40초 만에 내 혜택 찾기</PrimaryCTA>
      <button onClick={onDirect} style={{
        background: "transparent", border: "none",
        color: "#5E6976", fontSize: 14, fontWeight: 600,
        letterSpacing: "-0.02em", padding: 8, cursor: "pointer",
        fontFamily: "inherit", textDecoration: "underline", textUnderlineOffset: 4,
      }}>직접 입력으로 시작하기</button>
      <HFLegalNote>
        자격을 확정하지 않고, 공식 기준을 바탕으로 신청 가능성을 안내해요
      </HFLegalNote>
    </div>
  </div>
);

window.IntroScreen = IntroScreen;
