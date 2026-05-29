// Screen 29 — AI 상담 (new · 첫 진입)
// 하나원큐 라벤더 그라데이션 + 글래스모피즘 히어로 + 프로필 인사
// + 3개 카테고리 추천 프롬프트 + 최근 대화 + 실제 입력 가능
// Persona: 최서연 24세, 서울 자취 대학생, 알바 + 부모님 용돈
const { useState: useStateIntro } = React;

const AIChatNewIntroScreen = ({ onBack, onSend, onOpen }) => {
  const [input, setInput] = useStateIntro("");
  const submit = (text) => {
    const t = (text || "").trim();
    if (!t) return;
    // 정책 의사결정 → A / 위기대응 → B / 그 외 → 실시간 대화
    if (t.includes("청년도약계좌")) { onOpen && onOpen("ai-decision"); return; }
    if (t.includes("생활비") || t.includes("빠듯") || t.includes("부족")) { onOpen && onOpen("ai-crisis"); return; }
    onSend(t);
  };
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      overflow: "hidden", position: "relative",
      background:
        "radial-gradient(45% 30% at 80% 8%, #D4CBF0 0%, transparent 60%)," +
        "radial-gradient(55% 32% at 15% 22%, #E6DAEC 0%, transparent 65%)," +
        "radial-gradient(45% 28% at 95% 50%, #C4BFE8 0%, transparent 70%)," +
        "linear-gradient(180deg, #DDD2EE 0%, #E8DEF1 28%, #F6F2FA 55%, #FFFFFF 100%)",
    }}>
      {/* Floating soft blobs (depth) */}
      <div aria-hidden style={{
        position: "absolute", top: 80, left: -40, width: 180, height: 180,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(176,143,221,0.35) 0%, rgba(176,143,221,0) 70%)",
        filter: "blur(10px)", pointerEvents: "none",
      }}/>
      <div aria-hidden style={{
        position: "absolute", top: 220, right: -50, width: 220, height: 220,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(117,103,213,0.22) 0%, rgba(117,103,213,0) 70%)",
        filter: "blur(8px)", pointerEvents: "none",
      }}/>

      <AINewHeader onBack={onBack}/>
      <HFBreadcrumb onHome={() => onOpen && onOpen("home")}/>

      <div style={{
        flex: 1, overflow: "auto",
        padding: "8px 20px 24px",
        position: "relative", zIndex: 1,
      }}>
        {/* Hero — glass card */}
        <div style={{
          marginTop: 4, padding: "26px 22px 24px",
          borderRadius: 28,
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.8)",
          boxShadow: "0 8px 32px rgba(117, 103, 213, 0.12)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <AIOrb/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "3px 10px",
                background: "linear-gradient(90deg, #7567D5 0%, #9B8FE5 100%)",
                color: "#fff", borderRadius: 9999,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.02em",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: 3, background: "#7DF5C8",
                  boxShadow: "0 0 6px #7DF5C8",
                }}/>
                FIT AI · 활성
              </div>
              <div style={{
                marginTop: 8, fontSize: 22, fontWeight: 800,
                letterSpacing: "-0.03em", color: "#22262B", lineHeight: 1.2,
              }}>
                안녕하세요, 서연님
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 16, fontSize: 15, color: "#3B3D4A",
            letterSpacing: "-0.02em", lineHeight: 1.55,
          }}>
            지난주 <b style={{ color: "#7567D5" }}>K-패스 등록</b> 잘 하셨어요 👏<br/>
            이번엔 어떤 걸 도와드릴까요?
          </div>

          <div style={{
            marginTop: 14, padding: "10px 14px",
            background: "rgba(117, 103, 213, 0.08)", borderRadius: 12,
            fontSize: 12, color: "#5E4FB8", letterSpacing: "-0.02em",
            display: "flex", alignItems: "center", gap: 6, lineHeight: 1.4,
          }}>
            🔒 마이데이터 기반으로 답변해요 · 자격은 공식 기준으로만
          </div>
        </div>

        {/* Category prompts */}
        <div style={{
          marginTop: 24, marginBottom: 12,
          fontSize: 16, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em", padding: "0 4px",
        }}>이런 거 물어보세요</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <PromptCategory
            color="#00A38D" bg="#E0F5F0"
            icon="🎯" title="청년 혜택 · 정책"
            chips={[
              "나도 청년월세지원 받을 수 있어?",
              "소득 기준이 헷갈려요",
              "어떤 서류부터 준비해야 해?",
            ]}
            highlighted={0}
            onPick={submit}/>

          <PromptCategory
            color="#7567D5" bg="#F0E8F8"
            icon="🧭" title="금융 의사결정"
            chips={[
              "청년도약계좌 지금 들어도 돼?",
              "청년도약계좌 vs 청년미래적금",
            ]}
            badge="AI 상담"
            onPick={submit}/>

          <PromptCategory
            color="#FF8585" bg="#FFEDE9"
            icon="🆘" title="이번 달 위기 대응"
            chips={[
              "이번 달 생활비가 부족한데?",
              "월세랑 생활비가 겹쳐서 빠듯해",
            ]}
            badge="AI 상담"
            onPick={submit}/>
        </div>

        {/* Recent topics */}
        <div style={{
          marginTop: 26, marginBottom: 10,
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          padding: "0 4px",
        }}>
          <span style={{
            fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
          }}>최근 대화</span>
          <button style={{
            background: "none", border: "none", color: "#7567D5",
            fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em",
            cursor: "pointer", padding: 0, fontFamily: "inherit",
          }}>전체보기 ›</button>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.7)", borderRadius: 20,
          backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          overflow: "hidden",
        }}>
          <RecentTopicRow
            q="K-패스 등록 어떻게 해?"
            time="5/24 · 18:08"
            result="해결됨"/>
          <RecentTopicRow
            q="청년도약계좌 자격 확인"
            time="5/20 · 21:42"
            result="진행 중"/>
          <RecentTopicRow
            q="자취 보증금 줄이는 법"
            time="5/15 · 22:11"
            result="해결됨"
            last/>
        </div>

        <div style={{
          marginTop: 16, padding: "0 4px",
        }}>
          <HFAISafety/>
        </div>
      </div>

      <AINewInput value={input} onChange={setInput} onSubmit={() => submit(input)}/>
    </div>
  );
};

// AI 헤더 — 라벤더 그라데이션 위에 떠 있는 상단바
const AINewHeader = ({ onBack }) => (
  <header style={{
    height: 56, padding: "0 12px 0 6px", flexShrink: 0,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    position: "relative", zIndex: 2,
  }}>
    <button onClick={onBack} style={{
      background: "none", border: "none", padding: 12,
      cursor: "pointer", color: "#22262B", display: "flex",
    }}>
      <HanaIcon name="back" size={22}/>
    </button>
    <div style={{
      fontSize: 16, fontWeight: 700, color: "#22262B",
      letterSpacing: "-0.02em",
    }}>FIT AI</div>
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <button style={{
        background: "none", border: "none", padding: 10,
        cursor: "pointer", color: "#22262B", display: "flex",
      }}>
        <HanaIcon name="search" size={20}/>
      </button>
      <button onClick={onBack} style={{
        background: "none", border: "none", padding: 10,
        cursor: "pointer", color: "#22262B", display: "flex",
      }}>
        <HanaIcon name="x" size={22}/>
      </button>
    </div>
  </header>
);

// AI Orb — 큰 보라/그린 그라데이션 원 (FIT AI 시그니처)
const AIOrb = ({ size = 52 }) => (
  <div style={{
    width: size, height: size, borderRadius: "50%", flexShrink: 0,
    background:
      "radial-gradient(circle at 30% 30%, #B5A8F0 0%, #7567D5 45%, #4F44A8 100%)",
    boxShadow:
      "0 4px 14px rgba(117, 103, 213, 0.35), inset -4px -6px 10px rgba(0,0,0,0.15), inset 4px 4px 8px rgba(255,255,255,0.4)",
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative",
  }}>
    <span style={{
      fontSize: size * 0.38, fontWeight: 800, color: "#fff",
      letterSpacing: "-0.04em", textShadow: "0 1px 2px rgba(0,0,0,0.2)",
    }}>AI</span>
    {/* highlight dot */}
    <span style={{
      position: "absolute", top: size * 0.18, left: size * 0.22,
      width: size * 0.14, height: size * 0.14, borderRadius: "50%",
      background: "rgba(255,255,255,0.7)", filter: "blur(2px)",
    }}/>
  </div>
);

const PromptCategory = ({ icon, title, chips, color, bg, highlighted, badge, onPick }) => (
  <div style={{
    padding: "16px 16px 14px", borderRadius: 18,
    background: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 16px rgba(117, 103, 213, 0.06)",
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 10, marginBottom: 12,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 12,
        background: bg, color: color,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 19,
      }}>{icon}</div>
      <span style={{
        fontSize: 15, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>{title}</span>
      {badge && (
        <span style={{
          marginLeft: "auto", fontSize: 10, fontWeight: 700,
          color: "#7567D5", background: "#F0E8F8",
          padding: "2px 8px", borderRadius: 9999, letterSpacing: "-0.02em",
        }}>{badge}</span>
      )}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {chips.map((c, i) => (
        <button key={c} onClick={() => onPick(c)} className="hana-press" style={{
          textAlign: "left", padding: "11px 14px", borderRadius: 12,
          background: i === highlighted ? color : "rgba(245, 246, 250, 0.6)",
          color: i === highlighted ? "#fff" : "#22262B",
          border: "none", cursor: "pointer", fontFamily: "inherit",
          fontSize: 13.5, fontWeight: i === highlighted ? 600 : 500,
          letterSpacing: "-0.02em", lineHeight: 1.4,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 8,
        }}>
          <span>{c}</span>
          <span style={{ opacity: i === highlighted ? 1 : 0.4, fontSize: 14 }}>→</span>
        </button>
      ))}
    </div>
  </div>
);

const RecentTopicRow = ({ q, time, result, last }) => (
  <div className="hana-press" style={{
    padding: "14px 18px",
    borderBottom: last ? "none" : "1px solid rgba(240, 240, 240, 0.6)",
    display: "flex", alignItems: "center", gap: 12,
    cursor: "pointer",
  }}>
    <div style={{
      width: 32, height: 32, borderRadius: 16, flexShrink: 0,
      background: "rgba(117, 103, 213, 0.12)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14,
    }}>💬</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontSize: 14, fontWeight: 600, color: "#22262B",
        letterSpacing: "-0.02em", lineHeight: 1.4,
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>{q}</div>
      <div style={{
        fontSize: 11, color: "#8F97A0", marginTop: 3, letterSpacing: "-0.02em",
      }}>{time}</div>
    </div>
    <span style={{
      fontSize: 10, fontWeight: 700,
      padding: "3px 8px", borderRadius: 9999,
      background: result === "해결됨" ? "#E0F5F0" : "#FFF7E5",
      color: result === "해결됨" ? "#00A38D" : "#B07A00",
      letterSpacing: "-0.02em",
    }}>{result}</span>
  </div>
);

// 입력바 — 라벤더 톤 (Screen29 전용 · 엔터/버튼으로 onSubmit 호출)
const AINewInput = ({ value = "", onChange, onSubmit }) => {
  const canSend = value.trim().length > 0;
  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit && onSubmit();
    }
  };
  return (
    <div style={{
      padding: "10px 16px 18px",
      background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 30%, #FFFFFF 100%)",
      position: "relative", zIndex: 2,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 14px", background: "#fff", borderRadius: 9999,
        border: "1.5px solid #E6DDF2",
        boxShadow: "0 4px 16px rgba(117, 103, 213, 0.1)",
      }}>
        <button style={{
          background: "none", border: "none", padding: 4,
          cursor: "pointer", color: "#7567D5", display: "flex",
        }}>
          <HanaIcon name="plus" size={20}/>
        </button>
        <input
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          onKeyDown={handleKey}
          placeholder="궁금한 걸 편하게 물어보세요"
          style={{
            flex: 1, border: "none", background: "transparent",
            fontSize: 14, outline: "none", letterSpacing: "-0.02em",
            fontFamily: "inherit", color: "#22262B",
          }}/>
        <button style={{
          background: "none", border: "none", padding: 4,
          cursor: "pointer", color: "#5E6976", display: "flex",
        }}>
          <HanaIcon name="mic" size={20}/>
        </button>
        <button onClick={onSubmit} disabled={!canSend} style={{
          width: 36, height: 36, borderRadius: 18,
          background: canSend
            ? "linear-gradient(135deg, #7567D5 0%, #5B4DBC 100%)"
            : "#D8D2EC",
          color: "#fff", border: "none",
          cursor: canSend ? "pointer" : "not-allowed",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: canSend ? "0 2px 6px rgba(117, 103, 213, 0.35)" : "none",
          transition: "all 150ms ease",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

window.AIChatNewIntroScreen = AIChatNewIntroScreen;
window.AIOrb = AIOrb;
window.AINewHeader = AINewHeader;
window.AINewInput = AINewInput;
