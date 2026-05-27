// Screen 24 — 멘토 선택/변경
// 흰 배경 · 좌측 두 줄 헤더 · 필터 칩 · 현재 멘토 (강조 그린) · 추천 멘토 3개
const MentorPickerScreen = ({ onBack, onChange }) => {
  const [filter, setFilter] = useStateHF("전체");
  const filters = ["전체", "내 또래", "목표별", "지역별"];

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <DrillHeader title="멘토 변경" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 28px" }}>
        <h1 style={{
          margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em",
          lineHeight: 1.3, color: "#22262B",
        }}>
          내게 맞는 멘토를<br/>찾아보세요
        </h1>

        <div style={{
          display: "flex", gap: 8, marginTop: 18, paddingBottom: 4,
          overflowX: "auto",
          marginLeft: -20, paddingLeft: 20, paddingRight: 20,
        }}>
          {filters.map(f => (
            <HFFilterChip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</HFFilterChip>
          ))}
        </div>

        {/* Current mentor */}
        <div style={{ marginTop: 20 }}>
          <HFMentorBigCard
            current
            age="23세" location="서울 자취" status="대학생"
            oneliner="알바수입 상위 10% 루틴"
            habits={[
              "청년미래적금 월 10만원 자동이체",
              "K-패스로 교통비 30% 환급",
              "체크카드 1개로 소비 통제",
            ]}
            social="함께한 지 7개월"/>
        </div>

        {/* Recommended */}
        <div style={{
          margin: "26px 4px 12px",
          fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        }}>추천 멘토</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HFMentorBigCard
            badge="저축왕"
            age="25세" location="부산" status="사회초년생"
            oneliner="월 30만원 청년적금 + 비상금 1년치"
            habits={[
              "월 30만원 청년미래적금",
              "비상금 통장 별도 운영",
              "외식 월 3회 제한",
            ]}
            social="함께하는 또래 567명"
            ctaLabel="이 멘토 따라하기"
            onCta={onChange}/>

          <HFMentorBigCard
            badge="절약 마스터"
            age="22세" location="서울" status="휴학생 · 알바수입"
            oneliner="월 50만원 수입 → 15만원 저축"
            habits={[
              "가계부 매일 작성",
              "체크카드 한 장만 사용",
              "무지출 데이 주 2회",
            ]}
            social="함께하는 또래 234명"
            ctaLabel="이 멘토 따라하기"
            onCta={onChange}/>

          <HFMentorBigCard
            badge="다중수입"
            age="27세" location="서울" status="프리랜서"
            oneliner="본업 + 부업으로 월 100만원 저축"
            habits={[
              "다중 수입원 관리",
              "부업 수익 자동 저축",
              "세금 관리 자동화",
            ]}
            social="함께하는 또래 189명"
            ctaLabel="이 멘토 따라하기"
            onCta={onChange}/>
        </div>

        <div style={{ marginTop: 20 }}>
          <HFLegalNote>
            멘토를 바꾸면 챌린지 플랜이 다시 추천돼요
          </HFLegalNote>
        </div>
      </div>
    </div>
  );
};

window.MentorPickerScreen = MentorPickerScreen;
