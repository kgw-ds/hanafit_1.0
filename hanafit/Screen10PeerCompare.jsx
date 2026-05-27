// Screen 10 — 또래 FIT 비교
// 옅은 민트 그라데이션 · 큰 헤더 · 기준 칩 · 비교 카드 3개 (수입/혜택수령률/또래의 비밀)
// · AI 해석 보라 카드 · 하단 sticky CTA pair
// "뒤처짐" 표현 금지 — "놓친 기회" 톤만 사용.
const PEER_TOP10_HABITS = [
  { icon: "🚌", label: "K-패스로 교통비 환급" },
  { icon: "💰", label: "생활비 통장 분리" },
  { icon: "🏠", label: "청년월세지원 신청" },
  { icon: "🏦", label: "청년미래적금 가입", suffix: "또래 81%" },
  { icon: "📱", label: "자동이체 자동 저축" },
];
const PeerCompareScreen = ({ onBack, onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: HF_MINT_BG, overflow: "hidden", position: "relative",
  }}>
    <DrillHeader title="또래 FIT" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 240px" }}>
      <h1 style={{
        margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.35, color: "#22262B",
      }}>
        서연님과 비슷한<br/>
        또래 1,247명과<br/>
        비교해봤어요
      </h1>

      {/* Criteria chips */}
      <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
        <HFCriteriaChip>23세</HFCriteriaChip>
        <HFCriteriaChip>서울 자취</HFCriteriaChip>
        <HFCriteriaChip>대학생</HFCriteriaChip>
        <HFCriteriaChip>알바 수입</HFCriteriaChip>
      </div>
      <div style={{ marginTop: 8 }}>
        <HFSourceNote>1,000명 이상 익명 그룹 기준으로만 비교해요</HFSourceNote>
      </div>

      {/* Card 1 — 월 수입 */}
      <Card style={{ marginTop: 18, padding: "20px 20px 18px" }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em", marginBottom: 14 }}>월 수입</div>
        <HFCompareBar label="서연님" value="62만원" pct={0.62 / 0.95} color="#00A38D"/>
        <HFCompareBar label="또래 평균" value="78만원" pct={0.78 / 0.95} color="#C0C0C0" track="#F5F6FA"/>
        <div style={{
          marginTop: 6, padding: "10px 14px",
          background: "#F5F6FA", borderRadius: 12,
          fontSize: 13, color: "#22262B", letterSpacing: "-0.02em", lineHeight: 1.5,
        }}>또래보다 약 16만원 적어요</div>
      </Card>

      {/* Card 2 — 혜택 수령률 (강조) */}
      <Card style={{ marginTop: 12, padding: "20px 20px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>혜택 수령률</span>
          <HFStatusBadge variant="recommend">K-패스</HFStatusBadge>
        </div>
        <HFCompareBar label="또래 81%" value="가입함" pct={0.81} color="#00A38D" emphasized/>
        <HFCompareBar label="서연님" value="아직 미가입" pct={0.03} color="#FFB800" track="#FFF4D6" emphasized/>
        <HFEmphasisBox
          ctaLabel="지금 등록하러 가기"
          onCta={() => onOpen("list")}>
          지금 등록하면<br/>
          <b>월 평균 1.5만원 환급</b>받을 수 있어요
        </HFEmphasisBox>
      </Card>

      {/* Card 3 — 또래의 비밀 (강조 · 옅은 그린 배경) */}
      <div style={{
        marginTop: 12, padding: "20px 20px 18px",
        background: "linear-gradient(180deg, #ECF8F2 0%, #FFFFFF 70%)",
        border: "1.5px solid #B7E0CF",
        borderRadius: 20,
        boxShadow: "0 4px 14px rgba(63,169,141,0.12)",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 12, fontWeight: 700, letterSpacing: "-0.02em",
          color: "#00A38D", padding: "3px 10px",
          background: "#fff", borderRadius: 9999, marginBottom: 12,
        }}>💡 또래의 비밀</div>
        <div style={{
          fontSize: 18, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em", lineHeight: 1.4,
        }}>
          또래 상위 10%는<br/>
          이 5가지 습관을 가지고 있어요
        </div>

        <div style={{
          marginTop: 16, display: "flex", flexDirection: "column", gap: 10,
          padding: "14px 14px", borderRadius: 14, background: "#fff",
        }}>
          {PEER_TOP10_HABITS.map((h, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                background: "#F0F8F4",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>{h.icon}</div>
              <div style={{
                flex: 1, fontSize: 14, color: "#22262B",
                letterSpacing: "-0.02em", fontWeight: 500,
              }}>{h.label}</div>
              {h.suffix && (
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em",
                  color: "#00A38D", padding: "2px 8px",
                  background: "#E0F5F0", borderRadius: 9999,
                }}>{h.suffix}</span>
              )}
            </div>
          ))}
        </div>

        <button onClick={() => onOpen("follow")} className="hana-press" style={{
          width: "100%", marginTop: 14, height: 44, borderRadius: 22,
          background: "#00A38D", color: "#fff", border: "none",
          fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em",
          cursor: "pointer", fontFamily: "inherit",
        }}>5가지 습관 따라하기 →</button>
      </div>

      {/* AI Interpretation */}
      <HFAIInterpretation>
        지금은 소비를 줄이는 것보다<br/>
        이미 받을 수 있는 지원을<br/>
        먼저 연결하는 게 효과적이에요
      </HFAIInterpretation>
    </div>

    {/* Sticky CTA */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 18px",
      background: "linear-gradient(180deg, rgba(239,248,240,0) 0%, rgba(219,239,226,0.95) 30%, #DBEFE2 100%)",
      display: "flex", flexDirection: "column", gap: 10,
    }}>
      <PrimaryCTA onClick={() => onOpen("follow")}>따라 FIT 시작하기 →</PrimaryCTA>
      <HFOutlineBtnPurple onClick={() => onOpen("list")}>놓친 혜택 보기</HFOutlineBtnPurple>
    </div>
  </div>
);

window.PeerCompareScreen = PeerCompareScreen;
