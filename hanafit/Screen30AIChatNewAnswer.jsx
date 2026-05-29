// Screen 30 — AI 상담 (new · 실제 대화)
// 라벤더 그라데이션 + 글래스 chat thread
// 메시지 스레드 (user 오른쪽 보라, AI 왼쪽 오브) + 실제 입력 가능
// 첫 메시지가 prop으로 들어오면 자동 전송
const { useState: useStateChat, useEffect: useEffectChat, useRef: useRefChat } = React;

// AI 페르소나 시스템 프롬프트
const FIT_AI_SYSTEM = `너는 '하나FIT AI', 하나원큐 앱인앱 청년 금융 서비스 '하나핏'의 금융 상담 AI야.
사용자는 최서연(만 23세, 2002.03.14생, 서울 자취·대학 재학, 알바 수입 월 62만원, 진단 유형 '혜택 놓침형').
공식 정책 DB와 마이데이터 진단 정보를 근거로 답하고, 최종 자격·지급은 신청기관 기준으로 확정된다고 안내해.

스타일:
- 존댓말로 친근하게 ("서연님~", "그럼요" 등 자연스러운 한국어)
- 답변은 짧게! 2~3줄 또는 짧은 불릿
- 청년 정책, 적금, 자취 살림, 알바 세금 등 관련 질문에 강함
- 자격 확정은 안 함 ("공식 기관에서 최종 심사해요" 안내)
- 출처는 정부24, 국토부, 하나은행 등 명시
- 가끔 이모지 1개 정도

피해야 할 것:
- 마크다운(*, **, ##) 사용 금지
- 코드블록 사용 금지
- 너무 긴 답변 금지
- 어색한 영어 단어
`;

// 메시지 — 우측 보라(user) / 좌측 오브+텍스트(ai)
const Bubble = ({ role, text, time, thinking }) => {
  if (role === "user") {
    return (
      <div style={{ marginTop: 18 }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            maxWidth: "78%", padding: "12px 16px",
            background: "linear-gradient(135deg, #7567D5 0%, #6256C4 100%)",
            color: "#fff", borderRadius: "20px 20px 4px 20px",
            fontSize: 14, fontWeight: 500, letterSpacing: "-0.02em",
            lineHeight: 1.5, whiteSpace: "pre-wrap",
            boxShadow: "0 4px 14px rgba(117, 103, 213, 0.28)",
          }}>{text}</div>
        </div>
        {time && (
          <div style={{
            textAlign: "right", marginTop: 4, marginRight: 4,
            fontSize: 11, color: "#8F97A0", letterSpacing: "-0.02em",
          }}>{time}</div>
        )}
      </div>
    );
  }
  // AI
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginBottom: 8,
      }}>
        <AIOrb size={28}/>
        <span style={{
          fontSize: 12, fontWeight: 600, color: "#5E4FB8", letterSpacing: "-0.02em",
        }}>FIT AI</span>
      </div>
      <div style={{
        marginLeft: 36,
        padding: "14px 16px", borderRadius: "4px 20px 20px 20px",
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(117, 103, 213, 0.12)",
        boxShadow: "0 4px 14px rgba(117, 103, 213, 0.06)",
        fontSize: 14, color: "#22262B", letterSpacing: "-0.02em",
        lineHeight: 1.6, whiteSpace: "pre-wrap",
      }}>
        {thinking ? <TypingDots/> : text}
      </div>
      {time && !thinking && (
        <div style={{
          marginTop: 4, marginLeft: 40,
          fontSize: 11, color: "#8F97A0", letterSpacing: "-0.02em",
        }}>{time}</div>
      )}
    </div>
  );
};

const TypingDots = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 4, height: 18 }}>
    {[0, 1, 2].map(i => (
      <span key={i} style={{
        width: 6, height: 6, borderRadius: 3,
        background: "#7567D5",
        animation: `fitTypingBounce 1.2s ${i * 0.15}s infinite ease-in-out`,
      }}/>
    ))}
    <style>{`@keyframes fitTypingBounce {
      0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
      30% { opacity: 1; transform: translateY(-3px); }
    }`}</style>
  </div>
);

const formatTime = () => {
  const d = new Date();
  return d.getHours().toString().padStart(2, "0") + ":" +
         d.getMinutes().toString().padStart(2, "0");
};

const AIChatNewAnswerScreen = ({ onBack, onOpen, initialQuery }) => {
  const [messages, setMessages] = useStateChat([]);
  const [input, setInput] = useStateChat("");
  const [sending, setSending] = useStateChat(false);
  const scrollRef = useRefChat(null);
  const startedRef = useRefChat(false);

  // Auto-scroll to bottom on new messages
  useEffectChat(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, sending]);

  // Send a message — adds user msg + calls claude
  const send = async (text) => {
    if (!text || sending) return;
    const userMsg = { role: "user", text, time: formatTime() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setSending(true);

    // Build context from history (last 6 turns)
    const history = [...messages, userMsg].slice(-12).map(m => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.text,
    }));

    try {
      const reply = await window.claude.complete({
        system: FIT_AI_SYSTEM,
        messages: history,
      });
      setMessages(prev => [...prev, {
        role: "ai", text: reply, time: formatTime(),
      }]);
    } catch (e) {
      setMessages(prev => [...prev, {
        role: "ai",
        text: "음, 잠시 답변을 가져오지 못했어요. 다시 한 번 물어봐 주세요 🙏",
        time: formatTime(),
      }]);
    } finally {
      setSending(false);
    }
  };

  // Auto-send initial query when entering
  useEffectChat(() => {
    if (initialQuery && !startedRef.current) {
      startedRef.current = true;
      send(initialQuery);
    }
  }, [initialQuery]);

  // Suggested follow-ups (after first AI reply)
  const showFollowUps = messages.length >= 2 && !sending;
  const followUps = [
    "좀 더 자세히 알려줘",
    "신청은 어떻게 해?",
    "나는 받을 수 있을까?",
  ];

  return (
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

      <AINewHeader onBack={onBack}/>

      <div ref={scrollRef} style={{
        flex: 1, overflow: "auto",
        padding: "8px 20px 20px",
        position: "relative", zIndex: 1,
        scrollBehavior: "smooth",
      }}>
        {/* Empty state — only shows briefly before first message */}
        {messages.length === 0 && !sending && (
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "60px 16px 40px", textAlign: "center",
          }}>
            <AIOrb size={64}/>
            <div style={{
              marginTop: 16, fontSize: 18, fontWeight: 700,
              color: "#22262B", letterSpacing: "-0.02em",
            }}>FIT AI · 무엇이든 물어보세요</div>
            <div style={{
              marginTop: 6, fontSize: 13, color: "#5E6976",
              letterSpacing: "-0.02em", lineHeight: 1.5,
            }}>
              청년 혜택, 자취 살림, 적금 등<br/>
              서연님 상황에 맞춰 답해드려요
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <Bubble key={i} role={m.role} text={m.text} time={m.time}/>
        ))}

        {sending && <Bubble role="ai" thinking/>}

        {/* Follow-up chip suggestions */}
        {showFollowUps && (
          <div style={{ marginTop: 14, marginLeft: 36 }}>
            <div style={{
              fontSize: 11, color: "#8F97A0", marginBottom: 6,
              letterSpacing: "-0.02em",
            }}>이어서 물어보기</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {followUps.map(c => (
                <FollowUpChip key={c} onClick={() => send(c)}>{c}</FollowUpChip>
              ))}
            </div>
          </div>
        )}

        {/* CTA shortcut card — show once after 2+ exchanges */}
        {messages.length >= 4 && !sending && (
          <div style={{ marginTop: 18 }}>
            <ActionCard
              kind="benefit"
              title="관련 혜택 한 번에 보기"
              sub="AI가 매칭한 청년 혜택"
              meta="서연님 자격 기준"
              onClick={() => onOpen("list")}/>
          </div>
        )}

        {/* Disclaimer */}
        {messages.length > 0 && (
          <div style={{
            marginTop: 22, padding: "10px 12px",
            background: "rgba(245, 246, 250, 0.6)",
            borderRadius: 10,
            fontSize: 10.5, color: "#8F97A0", letterSpacing: "-0.02em",
            lineHeight: 1.6, textAlign: "center",
          }}>
            FIT AI는 일반 정보를 안내해요 · 자격 확정은 공식 기관 심사로 결정돼요
          </div>
        )}
      </div>

      <AIInteractiveInput
        value={input}
        onChange={setInput}
        onSend={() => send(input.trim())}
        disabled={sending}/>
    </div>
  );
};

// 입력바 — 텍스트 입력 + 엔터 + 보내기 버튼
const AIInteractiveInput = ({ value, onChange, onSend, disabled }) => {
  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };
  const canSend = value.trim().length > 0 && !disabled;
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
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKey}
          disabled={disabled}
          placeholder={disabled ? "FIT AI가 답하는 중..." : "궁금한 걸 편하게 물어보세요"}
          style={{
            flex: 1, border: "none", background: "transparent",
            fontSize: 14, outline: "none", letterSpacing: "-0.02em",
            fontFamily: "inherit", color: "#22262B",
            opacity: disabled ? 0.5 : 1,
          }}/>
        <button style={{
          background: "none", border: "none", padding: 4,
          cursor: "pointer", color: "#5E6976", display: "flex",
        }}>
          <HanaIcon name="mic" size={20}/>
        </button>
        <button onClick={onSend} disabled={!canSend} style={{
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

// 후속 칩 (chat thread 안에서 재사용)
const FollowUpChip = ({ children, onClick }) => (
  <button onClick={onClick} className="hana-press" style={{
    padding: "8px 14px", borderRadius: 9999,
    background: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(117, 103, 213, 0.3)",
    color: "#5E4FB8",
    fontSize: 12, fontWeight: 600, letterSpacing: "-0.02em",
    cursor: "pointer", fontFamily: "inherit",
  }}>{children}</button>
);

// 추천 카드 (CTA shortcut)
const ActionCard = ({ kind, title, sub, meta, onClick }) => {
  const isBenefit = kind === "benefit";
  return (
    <div onClick={onClick} className="hana-press" style={{
      padding: "18px 18px 16px", borderRadius: 18,
      background: "rgba(255, 255, 255, 0.92)",
      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
      border: "1px solid rgba(117, 103, 213, 0.18)",
      boxShadow: "0 4px 14px rgba(117, 103, 213, 0.1)",
      cursor: "pointer",
      display: "flex", alignItems: "center", gap: 14,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 14, flexShrink: 0,
        background: isBenefit
          ? "linear-gradient(135deg, #E0F5F0 0%, #C8EBDD 100%)"
          : "linear-gradient(135deg, #F0E8F8 0%, #DAD0F0 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22,
      }}>{isBenefit ? "🏠" : "🎯"}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: "inline-flex",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.02em",
          color: isBenefit ? "#00A38D" : "#7567D5",
          padding: "2px 7px",
          background: isBenefit ? "#E0F5F0" : "#F0E8F8",
          borderRadius: 4, marginBottom: 4,
        }}>{isBenefit ? "혜택" : "챌린지"}</div>
        <div style={{
          fontSize: 15, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em",
        }}>{title}</div>
        <div style={{
          fontSize: 12, color: "#5E6976",
          marginTop: 2, letterSpacing: "-0.02em",
        }}>{sub}</div>
        <div style={{
          fontSize: 11, color: "#8F97A0",
          marginTop: 3, letterSpacing: "-0.02em",
        }}>{meta}</div>
      </div>
      <HanaIcon name="chevron" size={18} color={isBenefit ? "#00A38D" : "#7567D5"}/>
    </div>
  );
};

window.AIChatNewAnswerScreen = AIChatNewAnswerScreen;
