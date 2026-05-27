// 하나핏 추가 atoms — Hana1Q 컴포넌트(window globals)를 활용하고
// 하나핏에서만 쓰는 컴포넌트만 새로 정의.

const { useState: useStateHF } = React;

// 옅은 민트 그라데이션 — 하나핏 시그니처 배경
const HF_MINT_BG =
  "radial-gradient(60% 40% at 80% 25%, #D6F0E2 0%, transparent 65%),"
+ "radial-gradient(50% 35% at 20% 70%, #E2F2DE 0%, transparent 65%),"
+ "linear-gradient(180deg, #EFF8F0 0%, #DBEFE2 100%)";

// 옅은 그린 (따라FIT 미션) — 미리 정의해둠
const HF_GREEN_BG = "linear-gradient(180deg, #E1F0CC 0%, #ECF6DE 60%, #F4F9E6 100%)";

// 작은 NEW 배지 — 미니 카드 코너 등
const HFNewBadge = ({ children = "NEW" }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "2px 8px", fontSize: 11, fontWeight: 700,
    color: "#FFFFFF", background: "#00A38D",
    borderRadius: 9999, letterSpacing: "-0.02em",
  }}>{children}</span>
);

// 기능/이점 카드 (intro 화면) — 아이콘 + 제목 + 부제 + chevron
const HFFeatureCard = ({ index, title, sub, accent = "#3FA98D" }) => (
  <div style={{
    background: "#fff", borderRadius: 20, padding: "18px 20px",
    display: "flex", alignItems: "center", gap: 14,
    boxShadow: "0 2px 8px rgba(34,38,43,0.04)",
  }}>
    <div style={{
      width: 44, height: 44, borderRadius: 14, flexShrink: 0,
      background: accent + "22", color: accent,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em",
    }}>{index}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>{title}</div>
      <div style={{ fontSize: 13, color: "#5E6976", marginTop: 4, letterSpacing: "-0.02em", lineHeight: 1.45 }}>{sub}</div>
    </div>
  </div>
);

// 비교 카드 (2x 옵션 비교, consent 화면)
const HFCompareCard = ({ label, value, sub, accent, faded }) => (
  <div style={{
    flex: 1, background: "#fff", borderRadius: 20, padding: "20px 16px",
    boxShadow: "0 2px 8px rgba(34,38,43,0.04)",
    border: faded ? "1px solid #E8E8E8" : `1.5px solid ${accent}`,
    opacity: faded ? 0.95 : 1,
  }}>
    <div style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</div>
    <div style={{
      fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em",
      color: faded ? "#22262B" : accent, marginTop: 4,
    }}>{value}</div>
    <div style={{ fontSize: 12, color: faded ? "#8F97A0" : "#5E6976", marginTop: 4, letterSpacing: "-0.02em" }}>{sub}</div>
  </div>
);

// 보안 안내 셀 (체크 + 텍스트)
const HFSecureRow = ({ children }) => (
  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "4px 0" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A38D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" fill="#E0F5F0" stroke="#00A38D" strokeWidth="0"/>
      <path d="M8 12 l3 3 l5 -6"/>
    </svg>
    <span style={{ flex: 1, fontSize: 14, color: "#22262B", letterSpacing: "-0.02em", lineHeight: 1.5 }}>{children}</span>
  </div>
);

// 큰 체크박스 (동의용)
const HFCheckbox = ({ checked, onChange, children }) => (
  <button onClick={() => onChange?.(!checked)} className="hana-press"
    style={{
      display: "flex", alignItems: "center", gap: 10,
      width: "100%", padding: "12px 0",
      background: "transparent", border: "none", cursor: "pointer",
      fontFamily: "inherit",
    }}>
    <div style={{
      width: 22, height: 22, borderRadius: 11, flexShrink: 0,
      background: checked ? "#00A38D" : "transparent",
      border: checked ? "none" : "1.5px solid #C0C0C0",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {checked && (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      )}
    </div>
    <span style={{ fontSize: 15, color: "#22262B", letterSpacing: "-0.02em", fontWeight: 600 }}>{children}</span>
  </button>
);

// 진행률 점 (●─●─○─○)
const HFProgressDots = ({ current, total }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
    {Array.from({ length: total }).map((_, i) => {
      const filled = i < current;
      return (
        <React.Fragment key={i}>
          <div style={{
            width: 11, height: 11, borderRadius: 6,
            background: filled ? "#00A38D" : "#FFFFFF",
            border: filled ? "none" : "1.5px solid #B5D8CB",
            transition: "background 200ms",
          }}/>
          {i < total - 1 && (
            <div style={{
              width: 36, height: 2,
              background: i < current - 1 ? "#00A38D" : "#B5D8CB",
            }}/>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

// 안전한 하단 안내 — 작은 회색 텍스트
const HFLegalNote = ({ children }) => (
  <div style={{
    fontSize: 12, color: "#8F97A0", lineHeight: 1.45,
    letterSpacing: "-0.02em", textAlign: "center", padding: "0 8px",
  }}>{children}</div>
);

Object.assign(window, {
  HF_MINT_BG, HF_GREEN_BG,
  HFNewBadge, HFFeatureCard, HFCompareCard,
  HFSecureRow, HFCheckbox, HFProgressDots, HFLegalNote,
  HFStatusBadge, HFFilterChip, HFMetricCard,
  HFQuickActionCard, HFRecRow, HFBenefitCard,
  HFConditionRow, HFDocRow, HFSourceNote,
  HFBotAvatar, HFBotBubble, HFUserQuote, HFQuickReply,
  HFChatInput, HFOutlineBtnPurple, HFDotIndicator,
  HFCriteriaChip, HFCompareBar, HFEmphasisBox, HFAIInterpretation,
  HFMissionRow, HFProgressCard, HFChecklistStep,
  HFMentorCard, HFGapBar, HFChallengeCard, HFAmountChip,
  HFAutoDataRow, HFRateRow, HFRankBadge,
  HFChallengeWidget, HFAlertCard, HFNotificationItem,
  HFMenuRow, HFToggleRow, HFRadioRow, HFMiniStatCard,
  HFSearchBar, HFCategoryTile, HFRemovableChip,
  HFCalendarGrid, HFMentorBigCard, HFHistoryItem,
  HFMissionTypeBadge, HFMissionCard, HFChallengeProgressHeader,
});

// 미션 타입 배지 (가입형 / 행동형 / 유지형)
function HFMissionTypeBadge({ type }) {
  const styles = {
    join:   { bg: "#E0F5F0", color: "#00A38D", label: "가입형" },
    action: { bg: "#F0E8F8", color: "#7567D5", label: "행동형" },
    keep:   { bg: "#FFF4D6", color: "#B07A00", label: "유지형" },
  }[type] || { bg: "#F0F0F2", color: "#5E6976", label: "미션" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "2px 8px", fontSize: 10, fontWeight: 700, letterSpacing: "-0.02em",
      color: styles.color, background: styles.bg, borderRadius: 4,
    }}>{styles.label}</span>
  );
}

// 미션 카드 — 미션 보드의 한 항목
// status: "done" | "doing" | "todo"
function HFMissionCard({ status = "todo", type, title, effect, progress, onClick }) {
  const isDone = status === "done";
  const isDoing = status === "doing";

  // status indicator
  const indicator = isDone ? (
    <div style={{
      width: 28, height: 28, borderRadius: 14,
      background: "#00A38D", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
  ) : isDoing ? (
    <div style={{
      width: 28, height: 28, borderRadius: 14, flexShrink: 0,
      background: "#FFF4D6", color: "#B07A00", fontSize: 13, fontWeight: 800,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>…</div>
  ) : (
    <div style={{
      width: 28, height: 28, borderRadius: 14, flexShrink: 0,
      border: "1.5px solid #C0C0C0", background: "transparent",
    }}/>
  );

  return (
    <div onClick={onClick} className="hana-press" style={{
      background: isDone ? "#F5FBF8" : "#fff",
      borderRadius: 18, padding: "16px 18px",
      border: isDone ? "1px solid #D5EBE0" : "1px solid #ECECEC",
      boxShadow: isDone ? "none" : "0 2px 8px rgba(34,38,43,0.03)",
      cursor: "pointer",
      display: "flex", alignItems: "flex-start", gap: 12,
    }}>
      {indicator}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <HFMissionTypeBadge type={type}/>
          {isDone && (
            <span style={{
              fontSize: 11, fontWeight: 700, color: "#00A38D",
              letterSpacing: "-0.02em",
            }}>완료</span>
          )}
        </div>
        <div style={{
          marginTop: 6, fontSize: 15, fontWeight: 700, color: "#22262B",
          letterSpacing: "-0.02em",
          textDecoration: isDone ? "line-through" : "none",
          textDecorationColor: "#8F97A0",
        }}>{title}</div>
        <div style={{
          marginTop: 4, fontSize: 12, color: isDone ? "#8F97A0" : "#5E6976",
          fontWeight: isDone ? 400 : 600, letterSpacing: "-0.02em",
        }}>{effect}</div>
        {progress && (
          <div style={{ marginTop: 10 }}>
            <div style={{
              display: "flex", justifyContent: "space-between", marginBottom: 4,
              fontSize: 11, color: "#5E6976", letterSpacing: "-0.02em",
            }}>
              <span>{progress.label}</span>
              <span style={{ fontWeight: 700, color: "#22262B" }}>{progress.value}</span>
            </div>
            <div style={{ height: 6, background: "#F0F0F0", borderRadius: 3, overflow: "hidden" }}>
              <div style={{
                width: `${progress.pct}%`, height: "100%",
                background: "#00A38D", borderRadius: 3,
              }}/>
            </div>
          </div>
        )}
      </div>
      {!isDone && <HanaIcon name="chevron" size={16} color="#8F97A0"/>}
    </div>
  );
}

// 챌린지 진행 헤더 — X/Y 미션 + 진행률 바 + 멘토 한 줄
function HFChallengeProgressHeader({ done, total, mentorOneLiner }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div style={{
      background: "#fff", borderRadius: 24, padding: "20px 22px",
      boxShadow: "0 2px 10px rgba(34,38,43,0.04)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#5E6976", letterSpacing: "-0.02em" }}>
          챌린지 진행
        </span>
        <span style={{ fontSize: 13, color: "#22262B", letterSpacing: "-0.02em" }}>
          <b style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em", color: "#00A38D", marginRight: 2 }}>{done}</b>
          / {total} 미션
        </span>
      </div>
      <div style={{
        marginTop: 12, height: 10, background: "#F0F0F0",
        borderRadius: 5, overflow: "hidden",
      }}>
        <div style={{
          width: `${pct}%`, height: "100%", background: "#00A38D",
          borderRadius: 5, transition: "width 600ms ease-out",
        }}/>
      </div>
      <div style={{ marginTop: 6, fontSize: 11, fontWeight: 700, color: "#00A38D", letterSpacing: "-0.02em" }}>
        {pct}%
      </div>
      {mentorOneLiner && (
        <>
          <div style={{ height: 1, background: "#F0F0F0", margin: "14px 0" }}/>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em",
          }}>
            🎯 <span>{mentorOneLiner}</span>
          </div>
        </>
      )}
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// 검색바 (라운드 24, 좌측 search 아이콘, 우측 mic)
// ───────────────────────────────────────────────────────────
function HFSearchBar({ placeholder = "혜택 검색", value, onChange, autoFocus }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "12px 18px", background: "#F5F6FA",
      borderRadius: 24, height: 48,
    }}>
      <HanaIcon name="search" size={20} color="#5E6976"/>
      <input
        autoFocus={autoFocus}
        placeholder={placeholder} value={value || ""} onChange={onChange}
        style={{
          flex: 1, border: "none", background: "transparent",
          fontSize: 15, outline: "none", letterSpacing: "-0.02em",
          fontFamily: "inherit", color: "#22262B",
        }}/>
      <HanaIcon name="mic" size={20} color="#5E6976"/>
    </div>
  );
}

// 제거 가능한 칩 (최근 검색어)
function HFRemovableChip({ children, onRemove }) {
  return (
    <span style={{
      flexShrink: 0,
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "8px 12px 8px 16px", background: "#F5F6FA",
      borderRadius: 9999, fontSize: 13, color: "#22262B",
      letterSpacing: "-0.02em", fontWeight: 500,
    }}>
      {children}
      <button onClick={onRemove} style={{
        background: "none", border: "none", cursor: "pointer", padding: 0,
        display: "flex", alignItems: "center",
      }}><HanaIcon name="x" size={12} color="#8F97A0"/></button>
    </span>
  );
}

// 카테고리 타일 (그리드 6개)
function HFCategoryTile({ emoji, label, sub, onClick }) {
  return (
    <div onClick={onClick} className="hana-press" style={{
      background: "#fff", borderRadius: 16, padding: "16px 14px 14px",
      boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
      cursor: "pointer",
      display: "flex", flexDirection: "column", gap: 6,
    }}>
      <span style={{ fontSize: 22 }}>{emoji}</span>
      <span style={{
        fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
      }}>{label}</span>
      <span style={{ fontSize: 11, color: "#8F97A0", letterSpacing: "-0.02em" }}>{sub}</span>
    </div>
  );
}

// 캘린더 그리드 (월 단위)
function HFCalendarGrid({ year, month, selected, onSelect, events }) {
  // events: { day: 'green' | 'red' | 'yellow' }
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const today = 25; // simulated "today"
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const dayLabels = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(7, 1fr)",
        marginBottom: 6,
      }}>
        {dayLabels.map((l, i) => (
          <div key={l} style={{
            textAlign: "center", fontSize: 12, fontWeight: 600,
            color: i === 0 ? "#FF5C5C" : i === 6 ? "#7567D5" : "#5E6976",
            letterSpacing: "-0.02em", padding: "8px 0",
          }}>{l}</div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px 0" }}>
        {cells.map((d, i) => {
          if (d === null) return <div key={i} style={{ height: 44 }}/>;
          const isToday = d === today;
          const isSelected = d === selected;
          const dot = events?.[d];
          const dotColor = { green: "#00A38D", red: "#FF5C5C", yellow: "#FFB800" }[dot];
          const sun = i % 7 === 0;
          const sat = i % 7 === 6;
          return (
            <button key={i} onClick={() => onSelect?.(d)} style={{
              height: 44, border: "none", padding: 0,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              cursor: "pointer", fontFamily: "inherit",
              background: isSelected ? "#22262B" : "transparent",
              borderRadius: 10,
            }}>
              <span style={{
                fontSize: 15, fontWeight: isToday || isSelected ? 700 : 500,
                letterSpacing: "-0.02em",
                color: isSelected ? "#fff"
                  : isToday ? "#00A38D"
                  : sun ? "#FF5C5C"
                  : sat ? "#7567D5"
                  : "#22262B",
                ...(isToday && !isSelected ? {
                  width: 28, height: 28, borderRadius: 14,
                  border: "1.5px solid #00A38D",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                } : {}),
              }}>{d}</span>
              {dotColor && (
                <span style={{
                  width: 4, height: 4, borderRadius: 2,
                  background: isSelected ? "#fff" : dotColor,
                  marginTop: 3,
                }}/>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 멘토 큰 카드 (선택/현재)
function HFMentorBigCard({ current, age, location, status, badge, oneliner, habits, social, ctaLabel, onCta }) {
  return (
    <div style={{
      background: current ? "#F0F8F4" : "#fff",
      borderRadius: 20, padding: "18px 20px 20px",
      border: current ? "1.5px solid #B7E0CF" : "1px solid #ECECEC",
      boxShadow: current ? "none" : "0 2px 8px rgba(34,38,43,0.03)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: "-0.02em",
          color: current ? "#00A38D" : "#7567D5",
          background: current ? "#E0F5F0" : "#F0E8F8",
          borderRadius: 9999,
        }}>{current ? "현재 멘토" : badge}</span>
        {current && (
          <span style={{ fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em" }}>
            변경하지 않음 ✓
          </span>
        )}
      </div>
      <div style={{
        marginTop: 12, fontSize: 16, fontWeight: 700, color: "#22262B",
        letterSpacing: "-0.02em",
      }}>👤 {age} · {location} · {status}</div>
      <div style={{ fontSize: 14, color: "#5E6976", marginTop: 6, letterSpacing: "-0.02em", lineHeight: 1.4 }}>
        "{oneliner}"
      </div>
      <div style={{
        marginTop: 14, padding: "12px 14px", borderRadius: 12,
        background: current ? "#fff" : "#F5F6FA",
      }}>
        <div style={{ fontSize: 12, color: "#5E6976", marginBottom: 8, letterSpacing: "-0.02em" }}>핵심 습관</div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
          {habits.map((h, i) => (
            <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "#22262B", letterSpacing: "-0.02em", lineHeight: 1.4 }}>
              <span style={{ color: "#00A38D" }}>•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{
        marginTop: 14, fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em",
      }}>{social}</div>
      {ctaLabel && (
        <button onClick={onCta} className="hana-press" style={{
          width: "100%", marginTop: 14, height: 44, borderRadius: 22,
          background: "#00A38D", color: "#fff", border: "none",
          fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
          cursor: "pointer", fontFamily: "inherit",
        }}>{ctaLabel}</button>
      )}
    </div>
  );
}

// AI 상담 이력 row
function HFHistoryItem({ question, snippet, time, last, onClick }) {
  return (
    <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
      display: "flex", alignItems: "flex-start", gap: 12,
      padding: "16px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 16,
        background: "#8289F7", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <HanaIcon name="chat" size={16} color="#fff"/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        }}>{question}</div>
        <div style={{
          fontSize: 13, color: "#5E6976", marginTop: 4,
          letterSpacing: "-0.02em", lineHeight: 1.5,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>{snippet}</div>
        <div style={{ fontSize: 11, color: "#8F97A0", marginTop: 6, letterSpacing: "-0.02em" }}>{time}</div>
      </div>
      <HanaIcon name="chevron" size={16} color="#8F97A0"/>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// 챌린지 위젯 — 재방문 홈 상단 강조
// ───────────────────────────────────────────────────────────
function HFChallengeWidget({ current, total, amount, daysToNext, onClick }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div onClick={onClick} className="hana-press" style={{
      background: "linear-gradient(180deg, #ECF8F2 0%, #FFFFFF 60%)",
      border: "1.5px solid #B7E0CF",
      borderRadius: 24, padding: "20px 22px",
      boxShadow: "0 6px 18px rgba(63,169,141,0.16)",
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
        }}>🏃 청년미래적금 챌린지</span>
        <HanaIcon name="chevron" size={18} color="#5E6976"/>
      </div>
      <div style={{
        marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "baseline",
      }}>
        <span style={{ fontSize: 14, color: "#5E6976", letterSpacing: "-0.02em" }}>
          <b style={{ color: "#22262B", fontWeight: 800, fontSize: 22, letterSpacing: "-0.04em" }}>{current}</b>
          {" "}/{total}개월
        </span>
        <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", color: "#00A38D" }}>
          {amount}<span style={{ fontSize: "0.55em", fontWeight: 700 }}>만원</span>
        </span>
      </div>
      <div style={{
        marginTop: 10, height: 8, borderRadius: 4,
        background: "rgba(255,255,255,0.7)", overflow: "hidden",
      }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "#00A38D" }}/>
      </div>
      <div style={{
        marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, letterSpacing: "-0.02em",
      }}>
        <span style={{ color: "#00A38D", fontWeight: 700 }}>{pct}%</span>
        <span style={{ color: "#FF5C5C", fontWeight: 700 }}>다음 이체 D-{daysToNext}</span>
      </div>
    </div>
  );
}

// 새 알림 강조 카드 (재방문 홈)
function HFAlertCard({ icon = "🔔", title, body, deadline, onClick }) {
  return (
    <div onClick={onClick} className="hana-press" style={{
      background: "#FFF1ED", borderRadius: 20,
      padding: "16px 18px",
      display: "flex", alignItems: "center", gap: 12,
      border: "1px solid #FFD8C6",
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: 12, background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, color: "#C24E2C", fontWeight: 700, letterSpacing: "-0.02em" }}>{title}</div>
        <div style={{ fontSize: 14, color: "#22262B", marginTop: 2, fontWeight: 600, letterSpacing: "-0.02em" }}>{body}</div>
        {deadline && (
          <div style={{ fontSize: 12, color: "#FF5C5C", marginTop: 4, fontWeight: 700, letterSpacing: "-0.02em" }}>
            신청 마감 D-{deadline}
          </div>
        )}
      </div>
      <HanaIcon name="chevron" size={18} color="#8F97A0"/>
    </div>
  );
}

// 알림 아이템 (알림센터)
function HFNotificationItem({ icon, kind, title, body, time, last, urgent, onClick }) {
  // icon color matrix
  const colors = {
    urgent: "#FFEDED", alert: "#FFF4D6", new: "#E0F5F0",
    transfer: "#E0F5F0", info: "#F0E8F8", system: "#F0F0F2",
  };
  return (
    <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
      display: "flex", gap: 12, padding: "16px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
        background: colors[kind] || "#F0F0F2",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20,
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em",
          color: urgent ? "#FF5C5C" : "#22262B",
        }}>{title}</div>
        <div style={{ fontSize: 14, color: "#22262B", marginTop: 4, letterSpacing: "-0.02em", lineHeight: 1.5 }}>{body}</div>
        {time && (
          <div style={{ fontSize: 11, color: "#8F97A0", marginTop: 6, letterSpacing: "-0.02em" }}>{time}</div>
        )}
      </div>
    </div>
  );
}

// 메뉴 row (설정 화면)
function HFMenuRow({ emoji, label, value, last, danger, onClick }) {
  return (
    <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "16px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
      cursor: onClick ? "pointer" : "default",
    }}>
      <span style={{ fontSize: 20, width: 24, textAlign: "center" }}>{emoji}</span>
      <span style={{
        flex: 1, fontSize: 15, fontWeight: 500, letterSpacing: "-0.02em",
        color: danger ? "#FF5C5C" : "#22262B",
        fontWeight: danger ? 600 : 500,
      }}>{label}</span>
      {value && <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>{value}</span>}
      {!danger && <HanaIcon name="chevron" size={16} color="#8F97A0"/>}
    </div>
  );
}

// 토글 row (알림 설정)
function HFToggleRow({ emoji, label, sub, on, onChange, disabled, last }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "14px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
      opacity: disabled ? 0.7 : 1,
    }}>
      <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{emoji}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>{label}</div>
        {sub && <div style={{ fontSize: 12, color: "#8F97A0", marginTop: 2, letterSpacing: "-0.02em" }}>{sub}</div>}
      </div>
      <button onClick={() => !disabled && onChange?.(!on)} disabled={disabled} style={{
        position: "relative", width: 46, height: 28, borderRadius: 14,
        background: on ? "#00A38D" : "#D8D8D8",
        border: "none", cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 200ms",
      }}>
        <div style={{
          position: "absolute", top: 3, left: on ? 21 : 3,
          width: 22, height: 22, borderRadius: 11, background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,.2)", transition: "left 200ms",
        }}/>
      </button>
    </div>
  );
}

// 라디오 row
function HFRadioRow({ label, checked, recommended, onChange, last }) {
  return (
    <div onClick={onChange} className="hana-press" style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "14px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
      cursor: "pointer",
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 11, flexShrink: 0,
        border: checked ? "6px solid #00A38D" : "1.5px solid #C0C0C0",
        background: "#fff",
      }}/>
      <span style={{ flex: 1, fontSize: 15, color: "#22262B", letterSpacing: "-0.02em", fontWeight: 500 }}>{label}</span>
      {recommended && (
        <span style={{
          padding: "2px 8px", borderRadius: 9999,
          background: "#E0F5F0", color: "#00A38D",
          fontSize: 11, fontWeight: 700, letterSpacing: "-0.02em",
        }}>권장</span>
      )}
    </div>
  );
}

// 미니 통계 카드 (가로 3개) — 마이페이지
function HFMiniStatCard({ label, value, color = "#22262B" }) {
  return (
    <div style={{
      flex: 1, background: "#fff", borderRadius: 16,
      padding: "14px 8px", textAlign: "center",
      boxShadow: "0 2px 6px rgba(34,38,43,0.03)",
    }}>
      <div style={{ fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em", color, marginTop: 6, lineHeight: 1 }}>{value}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// 멘토 카드 — 따라 FIT 인트로
// ───────────────────────────────────────────────────────────
function HFMentorCard({ summary, habits }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 20, padding: "18px 20px",
      boxShadow: "0 2px 10px rgba(34,38,43,0.04)",
    }}>
      <div style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>내 멘토</div>
      <div style={{
        fontSize: 15, fontWeight: 600, color: "#22262B",
        marginTop: 4, letterSpacing: "-0.02em", lineHeight: 1.5,
      }}>{summary}</div>
      <div style={{ height: 1, background: "#F0F0F0", margin: "14px 0" }}/>
      <div style={{ fontSize: 12, color: "#5E6976", marginBottom: 8, letterSpacing: "-0.02em" }}>핵심 습관</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {habits.map((h, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 22, height: 22, borderRadius: 11, background: "#E0F5F0",
              color: "#00A38D", display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 800,
            }}>{i + 1}</span>
            <span style={{ fontSize: 14, color: "#22262B", letterSpacing: "-0.02em" }}>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 격차 비교 카드 row — 또래 평균 vs 서연
function HFGapBar({ label, value, pct, color = "#00A38D", track = "#F0F0F0", bold }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em", fontWeight: bold ? 700 : 500 }}>{label}</span>
        <span style={{
          fontSize: bold ? 18 : 15, fontWeight: 800, letterSpacing: "-0.04em",
          color: bold ? color : "#22262B",
        }}>{value}</span>
      </div>
      <div style={{
        height: 8, borderRadius: 4, background: track, overflow: "hidden",
      }}>
        <div style={{
          width: `${Math.max(2, Math.min(100, pct * 100))}%`,
          height: "100%", background: color, borderRadius: 4,
          transition: "width 600ms ease-out",
        }}/>
      </div>
    </div>
  );
}

// 큰 챌린지 카드 — 청년미래적금 강조
function HFChallengeCard({ icon, title, monthly, term, expected, rate, social, ctaLabel, onCta }) {
  return (
    <div style={{
      background: "linear-gradient(180deg, #ECF8F2 0%, #FFFFFF 60%)",
      borderRadius: 24, padding: "22px 22px 22px",
      border: "1.5px solid #B7E0CF",
      boxShadow: "0 6px 18px rgba(63,169,141,0.16)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14, background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
          boxShadow: "0 2px 6px rgba(34,38,43,0.06)",
        }}>{icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>{title}</div>
          <div style={{ fontSize: 12, color: "#00A38D", marginTop: 2, fontWeight: 600, letterSpacing: "-0.02em" }}>{social}</div>
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(63,169,141,0.18)", margin: "16px 0" }}/>

      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 4px" }}>
        <ChallengeMetric label="월 납입" value={monthly}/>
        <ChallengeMetric label="기간" value={term}/>
        <ChallengeMetric label="우대금리" value={rate} accent="#7567D5"/>
      </div>

      <div style={{
        marginTop: 18, padding: "14px 16px", borderRadius: 14, background: "#fff",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{ fontSize: 12, color: "#5E6976", letterSpacing: "-0.02em" }}>만기 예상</div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em", color: "#00A38D", marginTop: 2 }}>
            {expected}
          </div>
        </div>
      </div>

      {ctaLabel && (
        <button onClick={onCta} className="hana-press" style={{
          width: "100%", marginTop: 16, height: 50, borderRadius: 25,
          background: "#00A38D", color: "#fff", border: "none",
          fontSize: 15, fontWeight: 600, letterSpacing: "-0.02em",
          cursor: "pointer", fontFamily: "inherit",
        }}>{ctaLabel}</button>
      )}
    </div>
  );
}

function ChallengeMetric({ label, value, accent = "#22262B" }) {
  return (
    <div style={{ textAlign: "center", flex: 1 }}>
      <div style={{ fontSize: 11, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</div>
      <div style={{
        fontSize: 16, fontWeight: 800, letterSpacing: "-0.04em",
        color: accent, marginTop: 4, lineHeight: 1,
      }}>{value}</div>
    </div>
  );
}

// 금액 선택 칩
function HFAmountChip({ value, label, active, onClick }) {
  return (
    <button onClick={onClick} className="hana-press" style={{
      flex: 1, padding: "12px 4px", borderRadius: 14,
      background: active ? "#00A38D" : "#fff",
      color: active ? "#fff" : "#22262B",
      border: active ? "none" : "1px solid #E8E8E8",
      fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em",
      cursor: "pointer", fontFamily: "inherit",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
    }}>
      <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.04em" }}>{value}</span>
      {label && <span style={{ fontSize: 11, opacity: 0.85 }}>{label}</span>}
    </button>
  );
}

// 마이데이터 자동입력 row
function HFAutoDataRow({ label, value, last }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "14px 0",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
    }}>
      <span style={{ fontSize: 14, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</span>
      <span style={{ fontSize: 15, color: "#22262B", fontWeight: 600, letterSpacing: "-0.02em" }}>{value}</span>
    </div>
  );
}

// 우대금리 row — ✓ or ⭕ with +rate
function HFRateRow({ achieved, label, rate, last }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "12px 0",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
    }}>
      <div style={{
        width: 24, height: 24, borderRadius: 12, flexShrink: 0,
        background: achieved ? "#00A38D" : "transparent",
        border: achieved ? "none" : "1.5px solid #C0C0C0",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {achieved && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
      </div>
      <span style={{
        flex: 1, fontSize: 14, color: "#22262B", letterSpacing: "-0.02em",
        fontWeight: achieved ? 600 : 500,
      }}>{label}</span>
      <span style={{
        fontSize: 14, fontWeight: 800, letterSpacing: "-0.04em",
        color: achieved ? "#00A38D" : "#8F97A0",
      }}>{rate}</span>
    </div>
  );
}

// 순위 배지 (상위 35%)
function HFRankBadge({ children }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 12px", fontSize: 13, fontWeight: 700, letterSpacing: "-0.02em",
      color: "#7567D5", background: "#F0E8F8", borderRadius: 9999,
    }}>🏃 {children}</span>
  );
}

// ───────────────────────────────────────────────────────────
// MISSION row — 따라 FIT 화면 체크박스 미션
// ───────────────────────────────────────────────────────────
function HFMissionRow({ checked, onToggle, title, effect, last }) {
  return (
    <div onClick={onToggle} className="hana-press" style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "16px 18px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
      cursor: "pointer", background: "transparent",
    }}>
      {/* checkbox circle */}
      <div style={{
        width: 24, height: 24, borderRadius: 12, flexShrink: 0,
        background: checked ? "#00A38D" : "transparent",
        border: checked ? "none" : "1.5px solid #C0C0C0",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: 15, fontWeight: 600, color: "#22262B",
          letterSpacing: "-0.02em",
          textDecoration: checked ? "line-through" : "none",
          textDecorationColor: "#8F97A0",
        }}>{title}</div>
        <div style={{ fontSize: 12, color: "#00A38D", marginTop: 3, fontWeight: 600, letterSpacing: "-0.02em" }}>{effect}</div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// PROGRESS card — 진행률 (33% 등)
// ───────────────────────────────────────────────────────────
function HFProgressCard({ label, percentNum, bgVariant = "mint" }) {
  const bg = bgVariant === "mint" ? "#E5F5EE" : "#F5F6FA";
  return (
    <div style={{
      background: bg, borderRadius: 20, padding: "18px 20px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#007A6A", letterSpacing: "-0.02em" }}>{label}</span>
        <span style={{
          fontSize: 30, fontWeight: 800, letterSpacing: "-0.04em",
          color: "#00A38D", lineHeight: 1,
        }}>{percentNum}<span style={{ fontWeight: 700, fontSize: "0.55em" }}>%</span></span>
      </div>
      <div style={{
        marginTop: 14, height: 8, borderRadius: 4,
        background: "rgba(255,255,255,0.7)", overflow: "hidden",
      }}>
        <div style={{
          width: `${percentNum}%`, height: "100%",
          background: "#00A38D", borderRadius: 4,
        }}/>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// CHECKLIST step — 신청 단계별 카드
// ───────────────────────────────────────────────────────────
function HFChecklistStep({ stepNum, title, status, completedNote, action, actionVariant = "primary", note, onAction }) {
  // status: "done" | "do" | "review"
  const isDone = status === "done";
  const isWarn = status === "review";

  // status circle
  const circle = isDone ? (
    <div style={{
      width: 28, height: 28, borderRadius: 14,
      background: "#00A38D",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
  ) : isWarn ? (
    <div style={{
      width: 28, height: 28, borderRadius: 14,
      background: "#FFD24A",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      color: "#22262B", fontSize: 16, fontWeight: 800,
    }}>!</div>
  ) : (
    <div style={{
      width: 28, height: 28, borderRadius: 14, flexShrink: 0,
      border: "1.5px solid #C0C0C0",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#5E6976", fontSize: 13, fontWeight: 700,
    }}>{stepNum}</div>
  );

  // action button color
  const actionColors = {
    primary: { bg: "#00A38D", color: "#fff", border: "none" },
    purple:  { bg: "#7567D5", color: "#fff", border: "none" },
    outline: { bg: "#fff", color: "#7567D5", border: "1.5px solid #DAD5F6" },
    external:{ bg: "#fff", color: "#5E6976", border: "1px solid #E8E8E8" },
  }[actionVariant] || { bg: "#00A38D", color: "#fff", border: "none" };

  return (
    <div style={{
      background: "#fff", borderRadius: 16,
      padding: "16px 18px 16px",
      border: "1px solid #F0F0F0",
      display: "flex", flexDirection: "column", gap: 10,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {circle}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 15, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em",
            textDecoration: isDone ? "line-through" : "none",
            textDecorationColor: "#8F97A0",
          }}>{title}</div>
          {completedNote && (
            <div style={{ fontSize: 12, color: "#00A38D", marginTop: 4, letterSpacing: "-0.02em", fontWeight: 600 }}>{completedNote}</div>
          )}
        </div>
      </div>
      {action && (
        <button onClick={onAction} className="hana-press" style={{
          height: 44, borderRadius: 22, padding: "0 18px",
          background: actionColors.bg, color: actionColors.color,
          border: actionColors.border,
          fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
          cursor: "pointer", fontFamily: "inherit",
          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
          marginLeft: 40,
        }}>
          {action}
          {actionVariant === "external" && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          )}
        </button>
      )}
      {note && (
        <div style={{ marginLeft: 40, fontSize: 12, color: "#8F97A0", letterSpacing: "-0.02em" }}>{note}</div>
      )}
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// CHAT atoms — 하이챗봇 패턴
// ───────────────────────────────────────────────────────────
function HFBotAvatar({ size = 44 }) {
  return (
    <img src="assets/illust/avatar-chatbot.svg" alt=""
      width={size} height={size} style={{ flexShrink: 0 }}/>
  );
}

// Bot text bubble (gray background) — can hold children for rich content
function HFBotBubble({ children, style }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", ...style }}>
      <HFBotAvatar/>
      <div style={{
        background: "#F5F6FA", borderRadius: 16,
        padding: "14px 16px",
        fontSize: 15, color: "#22262B",
        letterSpacing: "-0.02em", lineHeight: 1.5,
        maxWidth: "78%",
      }}>{children}</div>
    </div>
  );
}

// User message — purple quote, right-aligned, time above
function HFUserQuote({ children, time }) {
  return (
    <div style={{ margin: "20px 0 14px" }}>
      {time && <div style={{ fontSize: 12, color: "#8F97A0", textAlign: "right", marginBottom: 6 }}>{time}</div>}
      <div style={{
        textAlign: "right", color: "#7567D5",
        fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em",
      }}>"{children}"</div>
    </div>
  );
}

// Quick reply — full-width white pill with border
function HFQuickReply({ children, onClick }) {
  return (
    <button onClick={onClick} className="hana-press" style={{
      width: "100%", padding: "14px 16px", borderRadius: 14,
      background: "#fff", color: "#22262B",
      border: "1px solid #E8E8E8",
      fontSize: 14, letterSpacing: "-0.02em",
      cursor: "pointer", fontFamily: "inherit", textAlign: "left",
    }}>{children}</button>
  );
}

// Chat input bar
function HFChatInput({ placeholder = "궁금한 사항을 입력해 주세요" }) {
  return (
    <div style={{
      padding: "10px 16px 16px", background: "#fff",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "12px 18px", background: "#F5F6FA", borderRadius: 9999,
      }}>
        <HanaIcon name="plus" size={20} color="#22262B"/>
        <input placeholder={placeholder} style={{
          flex: 1, border: "none", background: "transparent",
          fontSize: 15, outline: "none", letterSpacing: "-0.02em",
          fontFamily: "inherit", color: "#22262B",
        }}/>
        <HanaIcon name="mic" size={20} color="#22262B"/>
      </div>
    </div>
  );
}

// Purple outline button (used in chatbot reply context)
function HFOutlineBtnPurple({ children, onClick }) {
  return (
    <button onClick={onClick} className="hana-press" style={{
      width: "100%", height: 44, borderRadius: 22,
      background: "#fff", color: "#7567D5",
      border: "1.5px solid #DAD5F6",
      fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
      cursor: "pointer", fontFamily: "inherit",
    }}>{children}</button>
  );
}

// Carousel dot indicator
function HFDotIndicator({ current, total }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "12px 0" }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{
          width: i === current ? 16 : 6, height: 6, borderRadius: 3,
          background: i === current ? "#7567D5" : "#D8D8D8",
          transition: "width 200ms",
        }}/>
      ))}
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// COMPARE atoms — 또래 비교
// ───────────────────────────────────────────────────────────
// Criteria chip (read-only) — 23세 / 서울 자취 / 대학생 등
function HFCriteriaChip({ children }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "5px 12px", fontSize: 12, fontWeight: 600,
      color: "#22262B", background: "rgba(255,255,255,0.7)",
      borderRadius: 9999, letterSpacing: "-0.02em",
    }}>{children}</span>
  );
}

// Bar comparison row — used inside compare cards
// pct (0..1) determines bar width vs container.
function HFCompareBar({ label, value, pct, color = "#00A38D", track = "#F0F0F0", emphasized }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{
          fontSize: 13, color: "#5E6976",
          letterSpacing: "-0.02em",
          fontWeight: emphasized ? 700 : 500,
        }}>{label}</span>
        <span style={{
          fontSize: emphasized ? 18 : 15, fontWeight: 800, letterSpacing: "-0.04em",
          color: emphasized ? color : "#22262B",
        }}>{value}</span>
      </div>
      <div style={{
        height: 10, borderRadius: 5, background: track, overflow: "hidden",
      }}>
        <div style={{
          width: `${Math.max(2, Math.min(100, pct * 100))}%`,
          height: "100%", background: color,
          borderRadius: 5, transition: "width 600ms ease-out",
        }}/>
      </div>
    </div>
  );
}

// Emphasis box — mint tone with CTA
function HFEmphasisBox({ children, ctaLabel, onCta }) {
  return (
    <div style={{
      background: "#E5F5EE", borderRadius: 14,
      padding: "14px 16px", marginTop: 10,
      display: "flex", flexDirection: "column", gap: 12,
    }}>
      <div style={{
        fontSize: 14, color: "#007A6A",
        fontWeight: 600, letterSpacing: "-0.02em",
        lineHeight: 1.5,
      }}>{children}</div>
      {ctaLabel && (
        <button onClick={onCta} className="hana-press" style={{
          width: "100%", height: 40, borderRadius: 20,
          background: "#00A38D", color: "#fff", border: "none",
          fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
          cursor: "pointer", fontFamily: "inherit",
        }}>{ctaLabel}</button>
      )}
    </div>
  );
}

// AI interpretation card — purple tone with small avatar
function HFAIInterpretation({ children }) {
  return (
    <div style={{
      background: "#F0E8F8", borderRadius: 20,
      padding: "18px 18px",
      display: "flex", gap: 12, alignItems: "flex-start",
      marginTop: 18,
    }}>
      <img src="assets/illust/avatar-chatbot.svg" alt=""
        width="36" height="36" style={{ flexShrink: 0 }}/>
      <div style={{
        flex: 1, fontSize: 14, color: "#22262B",
        letterSpacing: "-0.02em", lineHeight: 1.55, fontWeight: 500,
      }}>{children}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// 상태 배지 — 혜택 리스트의 카드 상단 (그린/노랑/회색)
// ───────────────────────────────────────────────────────────
function HFStatusBadge({ children, variant = "recommend" }) {
  const styles = {
    recommend: { bg: "#E0F5F0", color: "#00A38D" },
    instant:   { bg: "#E0F5F0", color: "#00A38D" },
    review:    { bg: "#FFF4D6", color: "#B07A00" },
    interest:  { bg: "#F0F0F2", color: "#5E6976" },
    high:      { bg: "#E0F5F0", color: "#00A38D" },
  }[variant];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "4px 12px", fontSize: 12, fontWeight: 700,
      letterSpacing: "-0.02em", borderRadius: 9999,
      color: styles.color, background: styles.bg,
    }}>{children}</span>
  );
}

// 필터 칩 (활성 = 다크, 비활성 = 흰배경)
function HFFilterChip({ children, active, onClick }) {
  return (
    <button onClick={onClick} className="hana-press" style={{
      flexShrink: 0,
      padding: "8px 16px", borderRadius: 9999,
      background: active ? "#22262B" : "#FFFFFF",
      color: active ? "#fff" : "#22262B",
      border: active ? "none" : "1px solid #E8E8E8",
      fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em",
      cursor: "pointer", fontFamily: "inherit",
    }}>{children}</button>
  );
}

// 큰 메트릭 카드 — "놓친 혜택 4개 / 예상 절감액 연 186만원"
function HFMetricCard({ label, value, sub, accent = "#00A38D" }) {
  return (
    <div style={{
      flex: 1, background: "#fff", borderRadius: 20, padding: "16px 18px 18px",
      boxShadow: "0 2px 8px rgba(34,38,43,0.04)",
    }}>
      <div style={{ fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em" }}>{label}</div>
      <div style={{
        fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em",
        color: accent, marginTop: 6, lineHeight: 1,
      }}>{value}</div>
      {sub && (
        <div style={{ fontSize: 12, color: "#8F97A0", marginTop: 6, letterSpacing: "-0.02em" }}>{sub}</div>
      )}
    </div>
  );
}

// 빠른 액션 카드 (가로 스크롤)
function HFQuickActionCard({ emoji, title, sub, onClick, accent = "#00A38D" }) {
  return (
    <div onClick={onClick} className="hana-press" style={{
      flexShrink: 0, width: 132,
      background: "#fff", borderRadius: 20, padding: "16px 14px",
      boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: accent + "1A",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22, marginBottom: 12,
      }}>{emoji}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em" }}>{title}</div>
      <div style={{ fontSize: 12, color: "#8F97A0", marginTop: 2, letterSpacing: "-0.02em" }}>{sub}</div>
    </div>
  );
}

// 추천 액션 리스트 row
function HFRecRow({ title, sub, accent = "#00A38D", emoji, last, onClick }) {
  return (
    <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "16px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
      cursor: onClick ? "pointer" : undefined,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: accent + "1A",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18, flexShrink: 0,
      }}>{emoji}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>{title}</div>
        <div style={{ fontSize: 12, color: "#5E6976", marginTop: 2, letterSpacing: "-0.02em" }}>{sub}</div>
      </div>
      <span style={{ color: "#8F97A0" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
      </span>
    </div>
  );
}

// 혜택 카드 (큰 카드, 리스트용)
function HFBenefitCard({ status, statusLabel, deadline, title, value, illust, infoLines, sourceNote, primary, secondary, onPrimary, onSecondary }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 20, padding: "18px 18px 20px",
      boxShadow: "0 2px 10px rgba(34,38,43,0.04)",
      display: "flex", flexDirection: "column", gap: 12,
    }}>
      {/* badge row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <HFStatusBadge variant={status}>{statusLabel}</HFStatusBadge>
        {deadline && (
          <span style={{
            fontSize: 12, fontWeight: 700, color: "#FF5C5C", letterSpacing: "-0.02em",
          }}>D-{deadline}</span>
        )}
      </div>
      {/* title + value + illust */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 17, fontWeight: 700, color: "#22262B",
            letterSpacing: "-0.02em",
          }}>{title}</div>
          <div style={{
            fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em",
            color: "#00A38D", marginTop: 6, lineHeight: 1.1,
          }}>{value}</div>
        </div>
        {illust && (
          <img src={illust} alt="" style={{ width: 86, height: 86, objectFit: "contain", flexShrink: 0 }}/>
        )}
      </div>
      {/* info bullets */}
      {infoLines && (
        <ul style={{
          listStyle: "none", padding: 0, margin: 0,
          fontSize: 13, color: "#5E6976", letterSpacing: "-0.02em",
          lineHeight: 1.7,
        }}>
          {infoLines.map((l, i) => (
            <li key={i} style={{ display: "flex", gap: 8 }}>
              <span style={{ color: "#00A38D" }}>•</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      )}
      {sourceNote && <HFSourceNote>{sourceNote}</HFSourceNote>}
      {/* button pair */}
      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
        {secondary && (
          <button onClick={onSecondary} className="hana-press" style={{
            flex: 1, height: 44, borderRadius: 22,
            background: "#fff", color: "#22262B",
            border: "1px solid #D8D8D8", fontFamily: "inherit",
            fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em", cursor: "pointer",
          }}>{secondary}</button>
        )}
        {primary && (
          <button onClick={onPrimary} className="hana-press" style={{
            flex: 1, height: 44, borderRadius: 22,
            background: "#00A38D", color: "#fff",
            border: "none", fontFamily: "inherit",
            fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em", cursor: "pointer",
          }}>{primary}</button>
        )}
      </div>
    </div>
  );
}

// 조건 매칭 row (✅/⚠️)
function HFConditionRow({ label, status, sub, last }) {
  const ok = status === "ok";
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "14px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 14, flexShrink: 0,
        background: ok ? "#E0F5F0" : "#FFF4D6",
        color: ok ? "#00A38D" : "#B07A00",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {ok ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        ) : (
          <span style={{ fontSize: 14, fontWeight: 800 }}>!</span>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#22262B", letterSpacing: "-0.02em" }}>{label}</div>
        {sub && <div style={{ fontSize: 12, color: "#8F97A0", marginTop: 2, letterSpacing: "-0.02em" }}>{sub}</div>}
      </div>
      <span style={{
        fontSize: 12, fontWeight: 700, letterSpacing: "-0.02em",
        color: ok ? "#00A38D" : "#B07A00",
      }}>{ok ? "충족" : "확인 필요"}</span>
    </div>
  );
}

// 서류 리스트 row
function HFDocRow({ label, last }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "12px 4px",
      borderBottom: last ? "none" : "1px solid #F0F0F0",
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: 3, background: "#00A38D",
      }}/>
      <span style={{ fontSize: 14, color: "#22262B", letterSpacing: "-0.02em" }}>{label}</span>
    </div>
  );
}

// 공식 출처/확인일 안내 — 작은 회색 텍스트 + 작은 아이콘
function HFSourceNote({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 12, color: "#8F97A0", letterSpacing: "-0.02em",
      lineHeight: 1.4,
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <span>{children}</span>
    </div>
  );
}
