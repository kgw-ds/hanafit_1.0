// Screen 33 (A) — FIT AI 의사결정 상담 (청년도약계좌)
// 보라 글래스 · 실제 대화 버블 · AI 선택지 3카드 · 결론 강조 · 액션 칩
// 정책 DB + 진단 정보 기반 금융 상담 — 단순 챗봇 아님을 시각화
const AIDecisionScreen = ({ onBack, onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    overflow: "hidden", position: "relative",
    background:
      "radial-gradient(45% 30% at 80% 5%, #D4CBF0 0%, transparent 60%)," +
      "radial-gradient(55% 28% at 15% 18%, #E6DAEC 0%, transparent 65%)," +
      "linear-gradient(180deg, #E2D6F0 0%, #EEE4F4 25%, #FAF6FD 55%, #FFFFFF 100%)",
  }}>
    <div aria-hidden style={{
      position: "absolute", top: 200, right: -60, width: 240, height: 240,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(117,103,213,0.18) 0%, rgba(117,103,213,0) 70%)",
      filter: "blur(10px)", pointerEvents: "none",
    }}/>

    <HFBreadcrumb onHome={() => onOpen("home")}/>
    <AINewHeader onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "8px 20px 20px", position: "relative", zIndex: 1 }}>
      {/* User question */}
      <UserMsg time="21:42">청년도약계좌 지금 들어도 돼? 5년은 좀 긴 것 같아서</UserMsg>

      {/* AI analyzing badge */}
      <AIAnalyzed note="진단 정보 + 청년도약계좌 정책 DB 분석 · 1.4초"/>

      {/* AI intro bubble */}
      <AIBubble>
        서연님은 <b>알바 수입 월 62만원</b>이라, 5년 납입을 끝까지 유지할 수 있는지가 가장 중요해요.<br/>
        세 가지 방법을 비교해드릴게요.
      </AIBubble>

      {/* 3 option cards */}
      <div style={{ marginLeft: 36, marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        <OptionCard
          tag="A안" tone="#5E6976"
          title="월 30만원 이하"
          desc="부담은 낮고 유지 가능성이 높아요"
          metric="만기 예상 약 1,950만원"/>
        <OptionCard
          tag="B안" tone="#5E6976"
          title="월 50만원 이상"
          desc="만기 금액은 커지지만 생활비 여유가 줄 수 있어요"
          metric="만기 예상 약 3,300만원"/>
        <OptionCard
          tag="C안" tone="#7567D5" recommended
          title="단기적금과 분리"
          desc="3년 이내 사용할 돈과 장기 저축을 나눌 수 있어요"
          metric="유연성 ↑ · 중도해지 위험 ↓"/>
      </div>

      {/* Conclusion */}
      <div style={{
        marginLeft: 36, marginTop: 14,
        padding: "16px 18px", borderRadius: "4px 18px 18px 18px",
        background: "linear-gradient(135deg, #7567D5 0%, #6256C4 100%)",
        color: "#fff",
        boxShadow: "0 6px 18px rgba(117,103,213,0.3)",
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85, letterSpacing: "-0.02em", marginBottom: 4 }}>
          💡 서연님께 추천
        </div>
        <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.4 }}>
          C안이 가장 안정적이에요
        </div>
        <div style={{ fontSize: 13, marginTop: 6, opacity: 0.92, letterSpacing: "-0.02em", lineHeight: 1.5 }}>
          지금 수입이라면 무리한 5년 약정보다, 단기적금으로 습관을 만든 뒤 늘려가는 게 좋아요.
        </div>
      </div>

      {/* Action chips */}
      <div style={{ marginLeft: 36, marginTop: 16 }}>
        <div style={{ fontSize: 11, color: "#8F97A0", marginBottom: 8, letterSpacing: "-0.02em" }}>다음으로</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <AIActionChip onClick={() => onOpen("official-source")}>공식 출처 보기</AIActionChip>
          <AIActionChip onClick={() => onOpen("detail")}>신청 조건 보기</AIActionChip>
          <AIActionChip onClick={() => onOpen("checklist")}>체크리스트로 이동</AIActionChip>
          <AIActionChip primary onClick={() => onOpen("mentor")}>하나 상담 예약</AIActionChip>
        </div>
      </div>
    </div>

    <div style={{ padding: "8px 16px 14px", background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 40%)" }}>
      <HFAISafety/>
    </div>
  </div>
);

// Screen 34 (B) — FIT AI 위기대응 상담 (생활비 부족)
const AICrisisScreen = ({ onBack, onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    overflow: "hidden", position: "relative",
    background:
      "radial-gradient(45% 30% at 80% 5%, #D4CBF0 0%, transparent 60%)," +
      "radial-gradient(55% 28% at 15% 18%, #E6DAEC 0%, transparent 65%)," +
      "linear-gradient(180deg, #E2D6F0 0%, #EEE4F4 25%, #FAF6FD 55%, #FFFFFF 100%)",
  }}>
    <HFBreadcrumb onHome={() => onOpen("home")}/>
    <AINewHeader onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "8px 20px 20px", position: "relative", zIndex: 1 }}>
      <UserMsg time="19:08">이번 달 월세랑 생활비가 겹쳐서 빠듯해</UserMsg>

      <AIAnalyzed note="입출금 흐름 + 월세 이체 분석 · 1.1초"/>

      {/* Diagnosis card */}
      <AIBubble>
        괜찮아요, 같이 정리해볼게요.<br/>
        이번 달 부족 예상 금액은 약 <b style={{ color: "#7567D5" }}>18만원</b>이에요.
      </AIBubble>

      <div style={{ marginLeft: 36, marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        <OptionCard
          tag="A" tone="#5E6976"
          title="지출 조정"
          desc="이번 달 구독·외식비를 잠깐 줄여요"
          metric="즉시 가능 · 약 8만원 확보"/>
        <OptionCard
          tag="B" tone="#7567D5" recommended
          title="월세지원 먼저 신청"
          desc="받을 수 있는 지원금부터 연결해요"
          metric="월 최대 20만원 · 근본 해결"/>
        <OptionCard
          tag="C" tone="#5E6976"
          title="생활비 통장 분리"
          desc="다음 달부터 겹치지 않게 미리 나눠요"
          metric="재발 방지"/>
      </div>

      <div style={{
        marginLeft: 36, marginTop: 14,
        padding: "16px 18px", borderRadius: "4px 18px 18px 18px",
        background: "linear-gradient(135deg, #7567D5 0%, #6256C4 100%)",
        color: "#fff", boxShadow: "0 6px 18px rgba(117,103,213,0.3)",
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85, letterSpacing: "-0.02em", marginBottom: 4 }}>
          💡 서연님께 추천
        </div>
        <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.4 }}>
          B → C 순서를 추천드려요
        </div>
        <div style={{ fontSize: 13, marginTop: 6, opacity: 0.92, letterSpacing: "-0.02em", lineHeight: 1.5 }}>
          이번 달은 월세지원으로 숨통을 트고, 다음 달부터 통장을 나눠 같은 일이 반복되지 않게 해요.
        </div>
      </div>

      <div style={{ marginLeft: 36, marginTop: 16 }}>
        <div style={{ fontSize: 11, color: "#8F97A0", marginBottom: 8, letterSpacing: "-0.02em" }}>바로 시작하기</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <AIActionChip primary onClick={() => onOpen("checklist")}>월세지원 신청 이어하기</AIActionChip>
          <AIActionChip onClick={() => onOpen("result")}>이번 달 예산 다시 짜기</AIActionChip>
          <AIActionChip onClick={() => onOpen("productDetail")}>생활비 통장 만들기</AIActionChip>
        </div>
      </div>
    </div>

    <div style={{ padding: "8px 16px 14px", background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 40%)" }}>
      <HFAISafety/>
    </div>
  </div>
);

// ── shared sub-components for A/B ──
const UserMsg = ({ children, time }) => (
  <div style={{ marginTop: 4 }}>
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={{
        maxWidth: "80%", padding: "12px 16px",
        background: "linear-gradient(135deg, #7567D5 0%, #6256C4 100%)",
        color: "#fff", borderRadius: "20px 20px 4px 20px",
        fontSize: 14, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.45,
        boxShadow: "0 4px 14px rgba(117, 103, 213, 0.28)",
      }}>{children}</div>
    </div>
    {time && (
      <div style={{ textAlign: "right", marginTop: 4, marginRight: 4, fontSize: 11, color: "#8F97A0", letterSpacing: "-0.02em" }}>{time}</div>
    )}
  </div>
);

const AIAnalyzed = ({ note }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22 }}>
    <AIOrb size={28}/>
    <span style={{ fontSize: 12, fontWeight: 600, color: "#5E4FB8", letterSpacing: "-0.02em" }}>
      {note}
    </span>
  </div>
);

const AIBubble = ({ children }) => (
  <div style={{
    marginLeft: 36, marginTop: 10,
    padding: "14px 16px", borderRadius: "4px 20px 20px 20px",
    background: "rgba(255, 255, 255, 0.92)",
    backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(117, 103, 213, 0.12)",
    boxShadow: "0 4px 14px rgba(117, 103, 213, 0.06)",
    fontSize: 14, color: "#22262B", letterSpacing: "-0.02em", lineHeight: 1.6,
  }}>{children}</div>
);

const OptionCard = ({ tag, tone, title, desc, metric, recommended }) => (
  <div style={{
    padding: "14px 16px", borderRadius: 14,
    background: recommended ? "#F0EBFB" : "#fff",
    border: recommended ? "1.5px solid #7567D5" : "1px solid #ECECEC",
    boxShadow: recommended ? "0 4px 14px rgba(117,103,213,0.12)" : "0 2px 8px rgba(34,38,43,0.03)",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <span style={{
        fontSize: 11, fontWeight: 800, letterSpacing: "-0.02em",
        color: recommended ? "#fff" : "#5E6976",
        background: recommended ? "#7567D5" : "#F0F0F2",
        padding: "2px 8px", borderRadius: 6,
      }}>{tag}</span>
      <span style={{ fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>{title}</span>
      {recommended && <span style={{ fontSize: 12, marginLeft: "auto" }}>⭐</span>}
    </div>
    <div style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em", lineHeight: 1.45 }}>{desc}</div>
    <div style={{
      marginTop: 8, fontSize: 12, fontWeight: 700,
      color: recommended ? "#5E4FB8" : "#22262B", letterSpacing: "-0.02em",
    }}>{metric}</div>
  </div>
);

const AIActionChip = ({ children, onClick, primary }) => (
  <button onClick={onClick} className="hana-press" style={{
    padding: "9px 14px", borderRadius: 9999,
    background: primary ? "linear-gradient(135deg, #7567D5 0%, #5B4DBC 100%)" : "rgba(255,255,255,0.9)",
    color: primary ? "#fff" : "#5E4FB8",
    border: primary ? "none" : "1px solid rgba(117,103,213,0.3)",
    fontSize: 12.5, fontWeight: 600, letterSpacing: "-0.02em",
    cursor: "pointer", fontFamily: "inherit",
    boxShadow: primary ? "0 2px 8px rgba(117,103,213,0.3)" : "none",
  }}>{children}</button>
);

Object.assign(window, { AIDecisionScreen, AICrisisScreen });
