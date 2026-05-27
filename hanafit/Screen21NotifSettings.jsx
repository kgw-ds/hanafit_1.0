// Screen 21 — 알림 설정 상세
// 흰 배경 · 토글 리스트 (혜택/챌린지/또래/AI) · 방해 금지 시간 · 채널 라디오
const NotifSettingsScreen = ({ onBack }) => {
  const [s, setS] = useStateHF({
    benefitNew: true, benefitDeadline: true, benefitD3: true, benefitElig: true,
    chDays: true, chSuccess: true, chFail: true, chRate: true, chMonthly: true,
    peerChange: false, peerRank: false,
    aiAnswer: true, aiSummary: false,
    channel: "push",
  });
  const set = (k) => (v) => setS(prev => ({ ...prev, [k]: v }));

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <DrillHeader title="알림 설정" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 28px" }}>
        <div style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em", padding: "4px 4px 4px" }}>
          받고 싶은 알림만 선택하세요
        </div>

        {/* 혜택 알림 */}
        <NotifSection title="혜택 알림">
          <HFToggleRow emoji="🔔" label="새 혜택 발견 알림" on={s.benefitNew} onChange={set("benefitNew")}/>
          <HFToggleRow emoji="⏰" label="마감 임박 알림" on={s.benefitDeadline} onChange={set("benefitDeadline")}/>
          <HFToggleRow emoji="📌" label="신청 마감 D-3 알림" on={s.benefitD3} onChange={set("benefitD3")}/>
          <HFToggleRow emoji="🔄" label="자격 변경 알림" on={s.benefitElig} onChange={set("benefitElig")} last/>
        </NotifSection>

        {/* 챌린지 알림 */}
        <NotifSection title="챌린지 알림">
          <HFToggleRow emoji="🏃" label="자동이체 D-3 알림" on={s.chDays} onChange={set("chDays")}/>
          <HFToggleRow emoji="💰" label="이체 완료 알림" on={s.chSuccess} onChange={set("chSuccess")}/>
          <HFToggleRow emoji="⚠️" label="이체 실패 알림"
            sub="비활성화 불가"
            on={s.chFail} onChange={set("chFail")} disabled/>
          <HFToggleRow emoji="🎉" label="우대금리 달성 알림" on={s.chRate} onChange={set("chRate")}/>
          <HFToggleRow emoji="📊" label="월간 챌린지 리포트" on={s.chMonthly} onChange={set("chMonthly")} last/>
        </NotifSection>

        {/* 또래 알림 */}
        <NotifSection title="또래 알림">
          <HFToggleRow emoji="📈" label="또래 변화 알림" on={s.peerChange} onChange={set("peerChange")}/>
          <HFToggleRow emoji="💪" label="내 순위 변동 알림" on={s.peerRank} onChange={set("peerRank")} last/>
        </NotifSection>

        {/* AI 상담 */}
        <NotifSection title="AI 상담">
          <HFToggleRow emoji="💬" label="AI 답변 알림" on={s.aiAnswer} onChange={set("aiAnswer")}/>
          <HFToggleRow emoji="📝" label="상담 요약 발송" on={s.aiSummary} onChange={set("aiSummary")} last/>
        </NotifSection>

        {/* 방해 금지 */}
        <NotifSection title="방해 금지">
          <div style={{ padding: "4px 0" }}>
            <HFMenuRow emoji="🌙" label="시작 시간" value="22:00"/>
            <HFMenuRow emoji="☀️" label="종료 시간" value="08:00"/>
            <div style={{
              padding: "12px 4px 4px", fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em",
            }}>이 시간엔 알림이 가지 않아요</div>
          </div>
        </NotifSection>

        {/* 알림 채널 */}
        <NotifSection title="알림 채널">
          <HFRadioRow label="앱 푸시" recommended
            checked={s.channel === "push"} onChange={() => setS(p => ({...p, channel: "push"}))}/>
          <HFRadioRow label="SMS"
            checked={s.channel === "sms"} onChange={() => setS(p => ({...p, channel: "sms"}))}/>
          <HFRadioRow label="이메일"
            checked={s.channel === "email"} onChange={() => setS(p => ({...p, channel: "email"}))}/>
          <HFRadioRow label="받지 않음"
            checked={s.channel === "none"} onChange={() => setS(p => ({...p, channel: "none"}))} last/>
        </NotifSection>

        <div style={{ marginTop: 20, padding: "0 4px" }}>
          <HFLegalNote>
            중요 안내(이체 실패, 시스템 점검 등)는<br/>
            설정과 관계없이 발송될 수 있어요
          </HFLegalNote>
        </div>
      </div>
    </div>
  );
};

const NotifSection = ({ title, children }) => (
  <div style={{ marginTop: 22 }}>
    <div style={{
      padding: "0 4px 8px",
      fontSize: 13, fontWeight: 700, color: "#5E6976", letterSpacing: "-0.02em",
    }}>{title}</div>
    <Card style={{ padding: "0 18px" }}>{children}</Card>
  </div>
);

window.NotifSettingsScreen = NotifSettingsScreen;
