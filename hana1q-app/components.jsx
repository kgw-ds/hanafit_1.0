// Shared atoms for the Hana 1Q UI kit — pixel-tuned against
// real app captures (visual-references/IMG_5567 ~ IMG_5611).

const { useState } = React;

// ───────────────────────────────────────────────────────────
// Icons — Lucide-style strokes (proprietary set substituted).
// ───────────────────────────────────────────────────────────
const HanaIcon = ({ name, size = 24, color = "currentColor", strokeWidth = 1.8 }) => {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "home":      return <svg {...p}><path d="M3 9.5l9-7 9 7v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 3 20.5z"/><rect x="9" y="14" width="6" height="8" rx="1" fill="currentColor" stroke="none"/></svg>;
    case "home-line": return <svg {...p}><path d="M3 9.5l9-7 9 7v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 3 20.5z"/><path d="M11 14h2"/></svg>;
    case "wallet":    return <svg {...p}><circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/><path d="M9 9l3 3M12 9l3 3" strokeWidth="1.6"/></svg>;
    case "bag":       return <svg {...p}><path d="M5 8l1-3h12l1 3v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M5 8h14"/><path d="M9 12a3 3 0 0 0 6 0"/></svg>;
    case "trend":     return <svg {...p}><polyline points="21 7 13.5 14.5 8.5 9.5 3 15"/><polyline points="15 7 21 7 21 13"/></svg>;
    case "menu":      return <svg {...p}><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>;
    case "bell":      return <svg {...p}><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>;
    case "ai":        return <svg {...p}><path d="M5 4h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-4 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><text x="11" y="13.4" textAnchor="middle" fontSize="6.5" fontFamily="-apple-system, system-ui" fontWeight="700" fill={color} stroke="none">AI</text></svg>;
    case "x":         return <svg {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case "copy":      return <svg {...p}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>;
    case "chevron":   return <svg {...p}><polyline points="9 6 15 12 9 18"/></svg>;
    case "chevron-l": return <svg {...p}><polyline points="15 6 9 12 15 18"/></svg>;
    case "back":      return <svg {...p} strokeWidth="2"><polyline points="15 6 9 12 15 18"/></svg>;
    case "headphones":return <svg {...p}><path d="M3 14v2a4 4 0 0 0 8 0v-6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0"/><circle cx="12" cy="11" r="0.5" fill={color}/><path d="M10 13l1 1.5 2-3 1 1.5" strokeWidth="1.4"/></svg>;
    case "settings":  return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8 1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "search":    return <svg {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
    case "plus":      return <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case "mic":       return <svg {...p}><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0"/><line x1="12" y1="17" x2="12" y2="22"/></svg>;
    case "moneybox":  return <svg {...p}><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18"/><path d="M9 5l3-2 3 2"/></svg>;
    case "megaphone": return <svg fill="none" viewBox="0 0 24 24" width={size} height={size}><path d="M3 10v4a1.5 1.5 0 0 0 1.5 1.5h2L17 21V3L6.5 8.5h-2A1.5 1.5 0 0 0 3 10z" fill="#FFB800" stroke="#E89A00" strokeWidth="1.2" strokeLinejoin="round"/></svg>;
    case "triangle-up":return <svg fill={color} viewBox="0 0 24 24" width={size} height={size}><path d="M12 6l8 12H4z"/></svg>;
    default:          return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3"/></svg>;
  }
};

// ───────────────────────────────────────────────────────────
// Buttons — corrected radius (28px ≈ pill-ish, not strict 20)
// ───────────────────────────────────────────────────────────
const PrimaryCTA = ({ children, onClick, disabled, color = "#00A38D" }) => (
  <button onClick={onClick} disabled={disabled} className="hana-press"
    style={{
      width: "100%", height: 60, borderRadius: 30,
      background: disabled ? "#C0C0C0" : color, color: "#fff",
      border: "none", fontSize: 17, fontWeight: 600,
      letterSpacing: "-0.02em", cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "inherit",
    }}>
    {children}
  </button>
);

// Pill-shaped action buttons (가져오기/보내기 — note: more rounded-rect than full pill)
const Pill = ({ children, variant = "green", onClick }) => {
  const styles = variant === "green"
    ? { background: "#00A38D", color: "#fff" }
    : { background: "#fff", color: "#22262B" };
  return (
    <button onClick={onClick} className="hana-press" style={{
      flex: 1, height: 56, borderRadius: 28, border: "none",
      fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em",
      cursor: "pointer", fontFamily: "inherit", ...styles,
    }}>
      {children}
    </button>
  );
};

// Outline (purple) — used in chatbot product card
const OutlineBtn = ({ children, onClick, color = "#7567D5" }) => (
  <button onClick={onClick} className="hana-press" style={{
    width: "100%", height: 52, borderRadius: 26,
    background: "#fff", color, border: `1.5px solid ${color}`,
    fontSize: 15, fontWeight: 600, letterSpacing: "-0.02em",
    cursor: "pointer", fontFamily: "inherit",
  }}>
    {children}
  </button>
);

// Small chip-style action button — like "분석" or "계산하기"
const SmallChipBtn = ({ children, onClick, color = "#00A38D", bg = "#E0F5F0" }) => (
  <button onClick={onClick} className="hana-press" style={{
    height: 36, padding: "0 14px", borderRadius: 10,
    background: bg, color, border: "none",
    fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
    cursor: "pointer", fontFamily: "inherit",
  }}>
    {children}
  </button>
);

// ───────────────────────────────────────────────────────────
// Card — white surface, 24 px radius (slightly bigger than spec)
// ───────────────────────────────────────────────────────────
const Card = ({ children, style, onClick }) => (
  <div onClick={onClick} className={onClick ? "hana-press" : ""} style={{
    background: "#fff", borderRadius: 24, padding: 22,
    boxShadow: "0 2px 8px rgba(34,38,43,0.03)",
    cursor: onClick ? "pointer" : undefined,
    ...style,
  }}>{children}</div>
);

// ───────────────────────────────────────────────────────────
// Badges (outline pills) — event chip on product detail
// ───────────────────────────────────────────────────────────
const Badge = ({ children, color = "#7567D5", icon }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "5px 14px", fontSize: 13, fontWeight: 500,
    color, border: `1.2px solid ${color}`, borderRadius: 9999,
    background: "transparent", letterSpacing: "-0.02em",
  }}>{children}{icon || (<HanaIcon name="chevron" size={12}/>)}</span>
);

// Dark chip — "할 일" on home header
const DarkChip = ({ children, prefix, onClick }) => (
  <button onClick={onClick} className="hana-press" style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "6px 14px 6px 6px", borderRadius: 9999,
    background: "#22262B", color: "#fff",
    fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em",
    border: "none", cursor: "pointer", fontFamily: "inherit",
  }}>
    {prefix && (
      <span style={{
        width: 28, height: 28, borderRadius: 14, background: "#fff",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontSize: 14,
      }}>{prefix}</span>
    )}
    {children}
  </button>
);

// "홈 | 간편" segmented chip
const SegChip = ({ left, right, active = "left", onChange }) => (
  <div style={{
    display: "inline-flex", padding: 3,
    background: "rgba(255,255,255,0.65)", borderRadius: 9999,
    fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em",
  }}>
    {[["left", left], ["right", right]].map(([key, label]) => {
      const on = active === key;
      return (
        <button key={key} onClick={() => onChange?.(key)} style={{
          padding: "4px 12px", borderRadius: 9999, border: "none",
          background: on ? "#22262B" : "transparent",
          color: on ? "#fff" : "#22262B",
          fontFamily: "inherit", cursor: "pointer",
          fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em",
        }}>{label}</button>
      );
    })}
  </div>
);

// ───────────────────────────────────────────────────────────
// Amount — 800 weight + tighter tracking
// ───────────────────────────────────────────────────────────
const Amount = ({ value, unit = "원", size = 56, color = "#22262B" }) => (
  <span style={{
    fontWeight: 800, letterSpacing: "-0.04em",
    fontSize: size, lineHeight: 1, color,
  }}>
    {value}<span style={{ fontWeight: 700, fontSize: "0.55em", marginLeft: 4 }}>{unit}</span>
  </span>
);

// ───────────────────────────────────────────────────────────
// Headers — two patterns
// (a) Tab header: BIG left-aligned title + right icons
// (b) Drill-in: center title + back + right icons
// ───────────────────────────────────────────────────────────
const TabHeader = ({ title, right }) => (
  <header style={{
    padding: "16px 24px 8px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexShrink: 0,
  }}>
    <h1 style={{
      margin: 0, fontSize: 28, fontWeight: 700,
      letterSpacing: "-0.02em", color: "#22262B",
    }}>{title}</h1>
    <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#22262B" }}>{right}</div>
  </header>
);

// Home header is unique — has profile chip on the left
const HomeHeader = ({ children, right }) => (
  <header style={{
    height: 56, padding: "0 20px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexShrink: 0,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>{children}</div>
    <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#22262B" }}>{right}</div>
  </header>
);

const DrillHeader = ({ title, onBack, right, transparent }) => (
  <header style={{
    height: 56, padding: "0 16px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexShrink: 0,
    background: transparent ? "transparent" : "transparent",
  }}>
    <button onClick={onBack} style={{
      background: "none", border: "none", color: "#22262B",
      cursor: "pointer", padding: 6, display: "flex",
    }}><HanaIcon name="back" size={22} strokeWidth={2}/></button>
    {title && <div style={{
      position: "absolute", left: 0, right: 0, textAlign: "center",
      fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em",
      color: "#22262B", pointerEvents: "none",
    }}>{title}</div>}
    <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#22262B" }}>{right}</div>
  </header>
);

// ───────────────────────────────────────────────────────────
// Bottom tab bar — 5 tabs, 72 px, active = filled black square
// ───────────────────────────────────────────────────────────
const TabBar = ({ active, onChange }) => {
  const tabs = [
    { id: "home",    label: "홈"   },
    { id: "asset",   label: "자산" },
    { id: "product", label: "상품" },
    { id: "invest",  label: "투자" },
    { id: "menu",    label: "메뉴" },
  ];
  // Render different icon glyphs per tab
  const glyph = (id, on) => {
    const stroke = on ? 2 : 1.7;
    const c = on ? "#22262B" : "#8F97A0";
    if (id === "home")    return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-7 9 7v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 3 20z"/><rect x="9.5" y="14" width="5" height="7.5" rx="0.5" fill={on?c:"none"} stroke={c}/></svg>;
    if (id === "asset")   return <svg width="22" height="22" viewBox="0 0 24 24" fill={on?c:"none"} stroke={c} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="5" fill="none"/><circle cx="15" cy="12" r="5" fill="none"/><path d="M9 10l3 3M12 10l3 3" strokeWidth="1.4"/></svg>;
    if (id === "product") return <svg width="22" height="22" viewBox="0 0 24 24" fill={on?c:"none"} stroke={c} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"><path d="M5 8.5l1-3h12l1 3v11.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20z"/><path d="M5 8.5h14" stroke={on?"#fff":c}/><path d="M9.5 12a2.5 2.5 0 0 0 5 0" fill="none" stroke={on?"#fff":c}/></svg>;
    if (id === "invest")  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"><polyline points="21 7 13.5 14.5 8.5 9.5 3 15"/><polyline points="15 7 21 7 21 13"/></svg>;
    return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={stroke} strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>;
  };
  return (
    <nav style={{
      height: 72, background: "#fff", display: "flex",
      alignItems: "center", padding: "0 8px", flexShrink: 0,
      boxShadow: "0 -1px 0 rgba(34,38,43,0.04)",
    }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
            gap: 4, background: "transparent", border: "none",
            color: on ? "#22262B" : "#8F97A0",
            fontSize: 11, fontWeight: 500, letterSpacing: "-0.02em",
            cursor: "pointer", padding: "8px 0", fontFamily: "inherit",
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 10,
              background: on ? "#22262B" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {on
                ? React.cloneElement(glyph(t.id, true), { stroke: "#fff" })
                : glyph(t.id, false)}
            </div>
            <span>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

// ───────────────────────────────────────────────────────────
// Notice banner — white card + yellow megaphone
// ───────────────────────────────────────────────────────────
const Notice = ({ icon, children, onClose }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12,
    background: "#fff", borderRadius: 16, padding: "14px 18px",
    boxShadow: "0 2px 10px rgba(34,38,43,0.04)",
  }}>
    <div style={{ flexShrink: 0, display: "flex" }}>
      {icon || <HanaIcon name="megaphone" size={26}/>}
    </div>
    <div style={{ flex: 1, fontSize: 14, color: "#22262B", letterSpacing: "-0.02em", lineHeight: 1.4 }}>{children}</div>
    <button onClick={onClose} style={{
      background: "none", border: "none", color: "#5E6976",
      padding: 4, cursor: "pointer", display: "flex",
    }}><HanaIcon name="x" size={18}/></button>
  </div>
);

// Pagination pill (3 / 7) + adjacent settings cog
const Pagination = ({ current, total, onPrev, onNext }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      padding: "8px 18px", borderRadius: 9999,
      background: "rgba(255,255,255,0.7)",
      fontSize: 14, color: "#5E6976", fontWeight: 500,
    }}>
      <button onClick={onPrev} style={{ background:"none", border:"none", color:"#5E6976", cursor:"pointer", display:"flex", padding:0 }}><HanaIcon name="chevron-l" size={16}/></button>
      <span><b style={{ color: "#22262B", fontWeight: 600 }}>{current}</b> / {total}</span>
      <button onClick={onNext} style={{ background:"none", border:"none", color:"#5E6976", cursor:"pointer", display:"flex", padding:0 }}><HanaIcon name="chevron" size={16}/></button>
    </div>
    <button style={{
      width: 36, height: 36, borderRadius: 18,
      background: "rgba(255,255,255,0.7)", border: "none",
      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
      color: "#5E6976",
    }}><HanaIcon name="settings" size={16}/></button>
  </div>
);

Object.assign(window, {
  HanaIcon, PrimaryCTA, Pill, OutlineBtn, SmallChipBtn,
  Card, Badge, DarkChip, SegChip, Amount,
  TabHeader, HomeHeader, DrillHeader, TabBar, Notice, Pagination,
});
