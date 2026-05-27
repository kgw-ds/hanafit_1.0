// Screen 22 — 혜택 검색 (간결 버전)
// 흰 배경 · 검색바 · 최근 검색 (간단) · 카테고리 그리드만
const SearchScreen = ({ onBack, onOpen }) => {
  const [q, setQ] = useStateHF("");
  const [recents, setRecents] = useStateHF(["월세", "K-패스", "장학금", "적금"]);
  const removeRecent = (t) => setRecents(r => r.filter(x => x !== t));

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: "#FFFFFF", overflow: "hidden",
    }}>
      <header style={{
        height: 56, padding: "0 12px 0 8px",
        display: "flex", alignItems: "center", gap: 8, flexShrink: 0,
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#22262B",
          cursor: "pointer", padding: 8, display: "flex",
        }}><HanaIcon name="back" size={22} strokeWidth={2}/></button>
        <div style={{ flex: 1 }}>
          <HFSearchBar value={q} onChange={(e) => setQ(e.target.value)} autoFocus/>
        </div>
      </header>

      <div style={{ flex: 1, overflow: "auto", padding: "8px 20px 28px" }}>
        {/* 최근 검색 */}
        {recents.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "0 4px 10px",
            }}>
              <span style={{
                fontSize: 13, fontWeight: 700, color: "#5E6976", letterSpacing: "-0.02em",
              }}>최근 검색</span>
              <button onClick={() => setRecents([])} style={{
                background: "none", border: "none", padding: 4, cursor: "pointer",
                fontSize: 12, color: "#8F97A0", fontFamily: "inherit", letterSpacing: "-0.02em",
              }}>전체 삭제</button>
            </div>
            <div style={{
              display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4,
              marginLeft: -20, paddingLeft: 20, paddingRight: 20,
            }}>
              {recents.map(t => (
                <HFRemovableChip key={t} onRemove={() => removeRecent(t)}>{t}</HFRemovableChip>
              ))}
            </div>
          </div>
        )}

        {/* 카테고리 */}
        <div style={{ marginTop: 28 }}>
          <div style={{
            padding: "0 4px 12px",
            fontSize: 16, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
          }}>카테고리로 찾기</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            <CategoryGridTile emoji="🏠" label="주거" onClick={() => onOpen("list")}/>
            <CategoryGridTile emoji="🚌" label="교통" onClick={() => onOpen("list")}/>
            <CategoryGridTile emoji="💰" label="저축" onClick={() => onOpen("list")}/>
            <CategoryGridTile emoji="📚" label="학업" onClick={() => onOpen("list")}/>
            <CategoryGridTile emoji="💼" label="취업" onClick={() => onOpen("list")}/>
            <CategoryGridTile emoji="💳" label="소비" onClick={() => onOpen("list")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryGridTile = ({ emoji, label, onClick }) => (
  <div onClick={onClick} className="hana-press" style={{
    aspectRatio: "1 / 1",
    background: "#F5F6FA", borderRadius: 18,
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    gap: 6, cursor: "pointer",
  }}>
    <span style={{ fontSize: 28 }}>{emoji}</span>
    <span style={{
      fontSize: 14, fontWeight: 700, color: "#22262B", letterSpacing: "-0.02em",
    }}>{label}</span>
  </div>
);

window.SearchScreen = SearchScreen;
