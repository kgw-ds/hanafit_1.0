// Screen 7-2 (D) — 공식 출처 확인
// 흰 배경 · 정책 정보 표 · 공식 신청 링크 · 신뢰 강조
const OfficialSourceScreen = ({ onBack, onOpen }) => (
  <div style={{
    flex: 1, display: "flex", flexDirection: "column",
    background: "#F4F4F4", overflow: "hidden", position: "relative",
  }}>
    <HFBreadcrumb onHome={() => onOpen("home")}/>
    <DrillHeader title="공식 출처" onBack={onBack}/>

    <div style={{ flex: 1, overflow: "auto", padding: "8px 20px 120px" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "4px 11px", borderRadius: 9999,
        background: "#E0F5F0", color: "#00A38D",
        fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em",
      }}>🛡️ 공식 정책 정보</div>

      <h1 style={{
        margin: "12px 0 0", fontSize: 22, fontWeight: 800,
        letterSpacing: "-0.03em", color: "#22262B", lineHeight: 1.3,
      }}>청년월세 한시 특별지원</h1>

      <div style={{
        marginTop: 18, background: "#fff", borderRadius: 18,
        padding: "4px 20px", boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
      }}>
        <SrcRow label="출처 기관" value="국토교통부 · 정부24"/>
        <SrcRow label="최종 확인일" value="2026.05.20"/>
        <SrcRow label="지원 금액" value="월 최대 20만원"/>
        <SrcRow label="지원 기간" value="최대 12개월"/>
        <SrcRow label="주요 조건" value="만 19~34세 · 무주택 · 소득 기준 충족"/>
        <SrcRow label="신청 마감" value="2026.06.04 (D-15)" highlight last/>
      </div>

      <div style={{
        marginTop: 16, padding: "14px 16px", borderRadius: 14,
        background: "#fff", border: "1px solid #ECECEC",
        fontSize: 12.5, color: "#5E6976", letterSpacing: "-0.02em", lineHeight: 1.55,
      }}>
        하나핏은 공식 정책 DB를 주기적으로 업데이트해 안내해요.<br/>
        <span style={{ color: "#8F97A0" }}>최종 자격·지급 여부는 신청기관 기준으로 확정됩니다.</span>
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "12px 20px 16px", background: "#fff",
      borderTop: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 4,
    }}>
      <PrimaryCTA onClick={() => window.open('https://www.gov.kr', '_blank')}>공식 신청 사이트로 이동</PrimaryCTA>
      <OutlineBtn onClick={() => onOpen("checklist")}>체크리스트로 돌아가기</OutlineBtn>
    </div>
  </div>
);

const SrcRow = ({ label, value, highlight, last }) => (
  <div style={{
    display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 0",
    borderBottom: last ? "none" : "1px solid #F5F5F5",
  }}>
    <span style={{ fontSize: 13, color: "#8F97A0", letterSpacing: "-0.02em", width: 76, flexShrink: 0 }}>{label}</span>
    <span style={{
      flex: 1, fontSize: 14, fontWeight: 700,
      color: highlight ? "#D4604E" : "#22262B", letterSpacing: "-0.02em", lineHeight: 1.4,
    }}>{value}</span>
  </div>
);

// Screen 25 (E) — 설정 · 마이데이터 관리
const SettingsScreen = ({ onBack, onOpen }) => {
  const [peerToggle, setPeerToggle] = useStateHF(true);
  const [mdConnected] = useStateHF(true);
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#F4F4F4", overflow: "hidden", position: "relative",
    }}>
      <HFBreadcrumb onHome={() => onOpen("home")}/>
      <DrillHeader title="설정" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "8px 20px 28px" }}>
        {/* 마이데이터 연결 상태 */}
        <div style={{
          padding: "18px 20px", borderRadius: 18, background: "#fff",
          boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, flexShrink: 0,
              background: "#E0F5F0", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
            }}>🔗</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>마이데이터 연결</div>
              <div style={{ fontSize: 12, color: "#00A38D", fontWeight: 600, marginTop: 2, letterSpacing: "-0.02em" }}>
                {mdConnected ? "연결됨 · 하나은행" : "미연결"}
              </div>
            </div>
            <button onClick={() => onOpen("home")} style={{
              padding: "7px 14px", borderRadius: 9999,
              background: "#F5F6FA", border: "1px solid #ECECEC",
              fontSize: 12, fontWeight: 600, color: "#5E6976", letterSpacing: "-0.02em",
              cursor: "pointer", fontFamily: "inherit",
            }}>연결 해제</button>
          </div>
          <div style={{
            marginTop: 12, fontSize: 12, color: "#8F97A0",
            letterSpacing: "-0.02em", lineHeight: 1.5,
          }}>
            혜택 추천에 필요한 정보만 분석하며, 언제든 연결을 해제할 수 있어요.
          </div>
        </div>

        {/* 알림 설정 */}
        <SettingsGroup title="알림">
          <SettingsToggleRow label="혜택 마감 알림" sub="마감 3일 전 하나원큐 푸시" defaultOn/>
          <SettingsToggleRow label="새 혜택 추천 알림" defaultOn/>
          <SettingsToggleRow label="챌린지 미션 리마인드" />
          <SettingsToggleRow label="또래 루틴 업데이트" last/>
        </SettingsGroup>

        {/* 표시 설정 */}
        <SettingsGroup title="표시">
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 0",
          }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>또래 비교 표시</div>
              <div style={{ fontSize: 11, color: "#8F97A0", marginTop: 2, letterSpacing: "-0.02em" }}>홈에서 또래 비교 카드 노출</div>
            </div>
            <Toggle on={peerToggle} onClick={() => setPeerToggle(!peerToggle)}/>
          </div>
        </SettingsGroup>

        {/* 데이터 관리 */}
        <SettingsGroup title="데이터 · 개인정보">
          <SettingsNavRow label="AI 상담 기록 관리" onClick={() => onOpen("history")}/>
          <SettingsNavRow label="개인정보 처리 안내" />
          <SettingsNavRow label="서비스 이용약관" last/>
        </SettingsGroup>

        <div style={{ marginTop: 18 }}>
          <HFLegalNote>
            하나핏은 하나원큐 앱인앱 서비스입니다.<br/>
            개인정보는 하나은행 개인정보처리방침에 따라 보호됩니다.
          </HFLegalNote>
        </div>
      </div>
    </div>
  );
};

const SettingsGroup = ({ title, children }) => (
  <div style={{ marginTop: 22 }}>
    <div style={{
      fontSize: 13, fontWeight: 700, color: "#8F97A0",
      letterSpacing: "-0.02em", padding: "0 4px", marginBottom: 8,
    }}>{title}</div>
    <div style={{
      background: "#fff", borderRadius: 18, padding: "4px 20px",
      boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
    }}>{children}</div>
  </div>
);

const SettingsToggleRow = ({ label, sub, defaultOn, last }) => {
  const [on, setOn] = useStateHF(!!defaultOn);
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 0", borderBottom: last ? "none" : "1px solid #F5F5F5",
    }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: "#8F97A0", marginTop: 2, letterSpacing: "-0.02em" }}>{sub}</div>}
      </div>
      <Toggle on={on} onClick={() => setOn(!on)}/>
    </div>
  );
};

const SettingsNavRow = ({ label, onClick, last }) => (
  <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "15px 0", borderBottom: last ? "none" : "1px solid #F5F5F5",
    cursor: onClick ? "pointer" : "default",
  }}>
    <span style={{ fontSize: 14, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>{label}</span>
    <HanaIcon name="chevron" size={16} color="#C0C0C0"/>
  </div>
);

const Toggle = ({ on, onClick }) => (
  <button onClick={onClick} style={{
    width: 46, height: 28, borderRadius: 14, flexShrink: 0,
    background: on ? "#00A38D" : "#D8D8D8", border: "none",
    cursor: "pointer", padding: 0, position: "relative",
    transition: "background 200ms",
  }}>
    <span style={{
      position: "absolute", top: 3, left: on ? 21 : 3,
      width: 22, height: 22, borderRadius: 11, background: "#fff",
      transition: "left 200ms", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    }}/>
  </button>
);

// Screen 3-1 (C) — 직접 입력 폴백
const ManualInputScreen = ({ onBack, onAnalyze, onOpen }) => {
  const [form, setForm] = useStateHF({ age: "23", region: "서울", house: "자취(월세)", rent: "있음", situation: "대학 재학", transit: "6", interest: "주거" });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: HF_MINT_BG, overflow: "hidden", position: "relative",
    }}>
      <HFBreadcrumb onHome={() => onOpen("home")}/>
      <DrillHeader title="직접 입력" onBack={onBack}/>

      <div style={{ flex: 1, overflow: "auto", padding: "4px 20px 120px" }}>
        <h1 style={{
          margin: 0, fontSize: 23, fontWeight: 800, letterSpacing: "-0.03em",
          color: "#22262B", lineHeight: 1.3,
        }}>마이데이터 연결 없이도<br/>시작할 수 있어요</h1>
        <div style={{ marginTop: 8, fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>
          입력한 정보로 받을 수 있는 혜택을 찾아드릴게요
        </div>

        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
          <ChipField label="나이" options={["19~22", "23", "24~26", "27~34"]} value="23" onPick={(v) => set("age", v)} current={form.age}/>
          <ChipField label="거주 지역" options={["서울", "경기·인천", "그 외"]} value={form.region} onPick={(v) => set("region", v)} current={form.region}/>
          <ChipField label="거주 형태" options={["자취(월세)", "전세", "부모님과"]} value={form.house} onPick={(v) => set("house", v)} current={form.house}/>
          <ChipField label="월세 여부" options={["있음", "없음"]} value={form.rent} onPick={(v) => set("rent", v)} current={form.rent}/>
          <ChipField label="현재 상황" options={["대학 재학", "취업 준비", "사회초년생"]} value={form.situation} onPick={(v) => set("situation", v)} current={form.situation}/>
          <ChipField label="관심 혜택" options={["주거", "교통", "자산형성", "학업"]} value={form.interest} onPick={(v) => set("interest", v)} current={form.interest}/>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "12px 20px 16px",
        background: "linear-gradient(180deg, rgba(239,248,240,0) 0%, #EFF8F0 40%)",
      }}>
        <PrimaryCTA onClick={onAnalyze}>직접 입력으로 혜택 찾기</PrimaryCTA>
      </div>
    </div>
  );
};

const ChipField = ({ label, options, onPick, current }) => (
  <div>
    <div style={{ fontSize: 13, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em", marginBottom: 8 }}>{label}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {options.map(o => (
        <button key={o} onClick={() => onPick(o)} className="hana-press" style={{
          padding: "9px 14px", borderRadius: 9999,
          background: current === o ? "#00A38D" : "#fff",
          color: current === o ? "#fff" : "#22262B",
          border: current === o ? "none" : "1px solid #E0E0E0",
          fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em",
          cursor: "pointer", fontFamily: "inherit",
        }}>{o}</button>
      ))}
    </div>
  </div>
);

Object.assign(window, { OfficialSourceScreen, SettingsScreen, ManualInputScreen });
