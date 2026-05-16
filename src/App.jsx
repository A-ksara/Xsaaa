import { useState, useEffect, useRef } from "react";

const GOLD = "#E8A030";
const BG = "#0C0C0C";
const BG2 = "#111111";
const TEXT = "#F0EDE8";
const MUTED = "#666";
const DIMMED = "#2A2A2A";

const bio = `Xsa is a lighting crew based in Indonesia with experience across concerts, festivals, corporate events, exhibitions, and large-scale productions. Over the years, Xsa has contributed to a wide range of national and international events at major venues such as Istora Senayan, ICE BSD, JIExpo, Indonesia Arena, JIS, and GBK.

From K-Pop concerts and music festivals to corporate summits and stage productions, every project represents a combination of technical execution, teamwork, and creative lighting experience. Working behind various live productions has shaped a strong understanding of stage atmosphere, show flow, and production environments under high-pressure situations.

Selected productions include performances and events featuring WayV, SEVENTEEN, aespa, BLACKPINK, Linkin Park, Maroon 5, BABYMONSTER, NCT DREAM, ATEEZ, One Ok Rock, Java Jazz Festival, Djakarta Warehouse Project, Joyland Festival, Pestapora, GIIAS, and more.`;
  { cat: "Rigging & Setup", items: ["Fixture rigging & hanging", "Venue layout & positioning", "Fixture focus & angle"] },
  { cat: "Cable & Patching", items: ["Cable management & routing", "DMX patching assist", "Power distribution setup", "Cable labeling & wrap"] },
  { cat: "Operasional", items: [ "Load in / load out", "Fixture troubleshooting", "Crew coordination"] },
  { cat: "Venue Experience", items: ["Indoor arena (ICE BSD, JIS)", "Outdoor festival (GBK, JIEXPO)", "Hotel ballroom", "Theater & cultural venue"] },
];

const events = [
  {
    n: 1,
    title: "WayV Concert — On The Way",
    venue: "Istora Senayan",
    date: "2024-10-05",
    cat: "Concert"
  },

  {
    n: 2,
    title: "JUNI DAY X",
    venue: "Basket Hall GBK",
    date: "2024-11-01",
    cat: "Concert"
  },

  {
    n: 3,
    title: "AESPA Fan Meeting",
    venue: "ICE BSD Hall 1",
    date: "2024-11-09",
    cat: "Concert"
  },

  {
    n: 4,
    title: "Joyland Festival",
    venue: "Baseball GBK",
    date: "2024-11-22",
    endDate: "2024-11-24",
    cat: "Festival"
  },

  {
    n: 5,
    title: "Djakarta Warehouse Project",
    venue: "JIExpo",
    date: "2024-12-13",
    endDate: "2024-12-15",
    cat: "Festival"
  },

  {
    n: 6,
    title: "Tokopedia Summit",
    venue: "Hotel Ritz Carlton",
    date: "2025-01-15",
    cat: "Corporate"
  },

  {
    n: 7,
    title: "Maroon 5",
    venue: "Jakarta International Stadium",
    date: "2025-02-01",
    cat: "Concert"
  },

  {
    n: 8,
    title: "SEVENTEEN",
    venue: "Jakarta International Stadium",
    date: "2025-02-08",
    endDate: "2025-02-09",
    cat: "Concert"
  },

  {
    n: 9,
    title: "Linkin Park",
    venue: "Madya GBK",
    date: "2025-02-16",
    cat: "Concert"
  },

  {
    n: 10,
    title: "BoyNextDoor",
    venue: "Istora GBK",
    date: "2025-04-12",
    cat: "Concert"
  },

  {
    n: 11,
    title: "Putri Indonesia",
    venue: "Balai Sarbini",
    date: "2025-04-26",
    cat: "Production"
  },

  {
    n: 12,
    title: "Putri Indonesia",
    venue: "JCC GBK",
    date: "2025-05-01",
    cat: "Production"
  },

  {
    n: 13,
    title: "Java Jazz Festival",
    venue: "JIExpo",
    date: "2025-05-30",
    endDate: "2025-06-01",
    cat: "Festival"
  },

  {
    n: 14,
    title: "BABYMONSTER",
    venue: "ICE BSD Hall 5",
    date: "2025-06-14",
    cat: "Concert"
  },

  {
    n: 15,
    title: "MEDCO Event",
    venue: "Indonesia Arena",
    date: "2025-06-28",
    cat: "Corporate"
  },

  {
    n: 16,
    title: "StandUp Event",
    venue: "Istora Senayan",
    date: "2025-07-11",
    endDate: "2025-07-13",
    cat: "Production"
  },

  {
    n: 17,
    title: "GIIAS",
    venue: "ICE BSD",
    date: "2025-07-24",
    endDate: "2025-08-03",
    cat: "Exhibition"
  },

  {
    n: 18,
    title: "JKT48",
    venue: "Istora Senayan",
    date: "2025-07-26",
    cat: "Concert"
  },

  {
    n: 19,
    title: "D.O EXO Solo Concert",
    venue: "Indonesia Arena",
    date: "2025-08-09",
    cat: "Concert"
  },

  {
    n: 20,
    title: "LaLaLa Festival",
    venue: "Gambir Expo",
    date: "2025-08-22",
    endDate: "2025-08-23",
    cat: "Festival"
  },

  {
    n: 21,
    title: "Pestapora 2025",
    venue: "Gambir Expo",
    date: "2025-09-05",
    endDate: "2025-09-07",
    cat: "Festival"
  },

  {
    n: 22,
    title: "NCT DREAM — The Future",
    venue: "GBK",
    date: "2025-09-26",
    endDate: "2025-09-27",
    cat: "Concert"
  },

  {
    n: 23,
    title: "The Little Mermaid Junior",
    venue: "Taman Ismail Marzuki",
    date: "2025-10-05",
    cat: "Production"
  },

  {
    n: 24,
    title: "BLACKPINK",
    venue: "GBK Stadium",
    date: "2025-11-01",
    endDate: "2025-11-02",
    cat: "Concert"
  },

  {
    n: 25,
    title: "Hatsune Miku",
    venue: "Tenis Indoor GBK",
    date: "2025-11-12",
    cat: "Concert"
  },

  {
    n: 26,
    title: "Djakarta Warehouse Project Bali",
    venue: "GWK Bali",
    date: "2025-12-12",
    endDate: "2025-12-14",
    cat: "Festival"
  },

  {
    n: 27,
    title: "Potato Head Beach Party",
    venue: "Potato Head Bali",
    date: "2025-12-31",
    cat: "Party"
  },

  {
    n: 28,
    title: "ATEEZ",
    venue: "ICE BSD",
    date: "2026-01-31",
    cat: "Concert"
  },

  {
    n: 29,
    title: "Taeyong — Remastered",
    venue: "Tenis Indoor GBK",
    date: "2026-02-07",
    cat: "Concert"
  },

  {
    n: 30,
    title: "Josh Groban Gems World Tour 2026",
    venue: "Ritz Carlton Jakarta",
    date: "2026-02-15",
    cat: "Concert"
  },

  {
    n: 31,
    title: "AESPA — SYNK",
    venue: "ICE BSD Hall 5",
    date: "2026-04-04",
    cat: "Concert"
  },

  {
    n: 32,
    title: "NCT WISH",
    venue: "ICE BSD Hall 5",
    date: "2026-04-11",
    cat: "Concert"
  },

  {
    n: 33,
    title: "CNBLUE — 3LOGY",
    venue: "ICE BSD Hall 1",
    date: "2026-04-18",
    cat: "Concert"
  },

  {
    n: 34,
    title: "One Ok Rock",
    venue: "Indonesia Arena",
    date: "2026-05-16",
    cat: "Concert"
  }
];
const CATS = ["All", "Concert", "Festival", "Corporate", "Wedding"];
const CAT_COLOR = { Concert: "#E8A030", Festival: "#60A5FA", Corporate: "#A78BFA", Wedding: "#F472B6" };

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, vis];
}

function Fade({ children, delay = 0 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [activeSec, setActiveSec] = useState(0);
  const secRefs = useRef([]);

  const filtered = filter === "All" ? events : events.filter(e => e.cat === filter);
  const byYear = filtered.reduce((acc, e) => {
    const y = e.date.slice(0, 4);
    if (!acc[y]) acc[y] = [];
    acc[y].push(e);
    return acc;
  }, {});

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = secRefs.current.indexOf(e.target);
          if (i !== -1) setActiveSec(i);
        }
      });
    }, { threshold: 0.3 });
    secRefs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const setRef = i => el => { secRefs.current[i] = el; };
  const scrollTo = i => secRefs.current[i]?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />

      {/* Side nav */}
      <div style={{ position: "fixed", right: 22, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 10, zIndex: 100 }}>
        {[0,1,2,3].map(i => (
          <div key={i} onClick={() => scrollTo(i)} style={{ cursor: "pointer" }}>
            <div style={{
              width: 5, height: activeSec === i ? 22 : 5,
              borderRadius: 3, background: activeSec === i ? GOLD : "#333",
              transition: "all 0.3s",
            }} />
          </div>
        ))}
      </div>

      {/* ── HERO ── */}
      <section ref={setRef(0)} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 8vw", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "35%", width: 500, height: 500, background: `radial-gradient(circle, ${GOLD}15 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, color: GOLD, textTransform: "uppercase", marginBottom: 28, animation: "fu 0.8s ease both" }}>
            Lighting Crew · Since Oct 2024
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(5.5rem, 15vw, 12rem)",
            fontWeight: 300, lineHeight: 0.88, margin: "0 0 20px",
            letterSpacing: -4, animation: "fu 0.8s ease 0.1s both",
          }}>Xsaaa</h1>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2.2vw, 1.6rem)", fontStyle: "italic", color: MUTED, animation: "fu 0.8s ease 0.2s both" }}>
            Shaping the stage, one light at a time.
          </div>
          <div style={{ width: 40, height: 1, background: GOLD, margin: "36px 0", animation: "fu 0.8s ease 0.3s both" }} />
          <div style={{ display: "flex", gap: 48, animation: "fu 0.8s ease 0.4s both" }}>
            {[["41","Events"],["19+","Months"],["10+","Venues"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: GOLD, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: 3, color: MUTED, textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 48, animation: "fu 0.8s ease 0.5s both" }}>
            {[["Events →", 3],["Skills →", 2]].map(([label, target], i) => (
              <button key={label} onClick={() => scrollTo(target)} style={{
                background: i === 0 ? GOLD : "transparent", color: i === 0 ? "#000" : TEXT,
                border: `1px solid ${i === 0 ? GOLD : "#333"}`, padding: "11px 26px",
                fontSize: "0.78rem", letterSpacing: 2, textTransform: "uppercase",
                cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.target.style.background = GOLD; e.target.style.color = "#000"; e.target.style.borderColor = GOLD; }}
                onMouseLeave={e => { e.target.style.background = i===0?GOLD:"transparent"; e.target.style.color = i===0?"#000":TEXT; e.target.style.borderColor = i===0?GOLD:"#333"; }}
              >{label}</button>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", textAlign: "center", animation: "fu 1s ease 1.2s both" }}>
          <div style={{ fontSize: 9, letterSpacing: 4, color: MUTED, textTransform: "uppercase", marginBottom: 8 }}>Scroll</div>
          <div style={{ width: 1, height: 36, background: `linear-gradient(${GOLD}, transparent)`, margin: "0 auto", animation: "pulse 1.6s ease infinite" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section ref={setRef(1)} style={{ minHeight: "65vh", display: "flex", alignItems: "center", padding: "100px 8vw", background: BG2 }}>
        <div style={{ maxWidth: 760, width: "100%" }}>
          <Fade><div style={{ fontSize: 10, letterSpacing: 4, color: GOLD, textTransform: "uppercase", marginBottom: 16 }}>About</div></Fade>
          <Fade delay={0.1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 300, margin: "0 0 32px", letterSpacing: -1, lineHeight: 1.1 }}>
              Creating immersive environments<br /><span style={{ fontStyle: "italic", color: GOLD }}>through lighting.</span>
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <p style={{ lineHeight: 2, color: "#999", fontSize: "0.93rem", fontWeight: 300, maxWidth: 520, margin: "0 0 48px" }}>{bio}</p>
          </Fade>
          <Fade delay={0.3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
              {[["K-Pop","Concert"],["International","Artist"],["Festival","Outdoor"],["Corporate","& Wedding"]].map(([a,b]) => (
                <div key={a} style={{ background: "#1A1A1A", padding: "20px 20px", borderTop: `2px solid #222` }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: GOLD }}>{a}</div>
                  <div style={{ fontSize: "0.72rem", color: MUTED, letterSpacing: 1, marginTop: 4 }}>{b}</div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section ref={setRef(2)} style={{ minHeight: "65vh", padding: "100px 8vw", background: BG }}>
        <Fade><div style={{ fontSize: 10, letterSpacing: 4, color: GOLD, textTransform: "uppercase", marginBottom: 16 }}>Skills</div></Fade>
        <Fade delay={0.1}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 300, margin: "0 0 56px", letterSpacing: -1, lineHeight: 1.1 }}>
            What i'm doing <br /><span style={{ fontStyle: "italic", color: GOLD }}>at field.</span>
          </h2>
        </Fade>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
          {skills.map((s, i) => <Fade key={s.cat} delay={i*0.07}><SkillCard skill={s} /></Fade>)}
        </div>
        <Fade delay={0.4}>
          <div style={{ marginTop: 40, padding: "20px 24px", border: `1px solid #222`, borderLeft: `3px solid ${GOLD}`, maxWidth: 480 }}>
            <div style={{ fontSize: 9, color: GOLD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Next Step</div>
            <div style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.8 }}>Console programming (grandMA / lighting desk) — currently being learned.</div>
          </div>
        </Fade>
      </section>

      {/* ── EVENTS ── */}
      <section ref={setRef(3)} style={{ minHeight: "80vh", padding: "100px 8vw", background: BG2 }}>
        <Fade><div style={{ fontSize: 10, letterSpacing: 4, color: GOLD, textTransform: "uppercase", marginBottom: 16 }}>Event History</div></Fade>
        <Fade delay={0.1}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 300, margin: "0 0 40px", letterSpacing: -1, lineHeight: 1.1 }}>
            39 event,<br /><span style={{ fontStyle: "italic", color: GOLD }}>satu perjalanan.</span>
          </h2>
        </Fade>

        {/* Filter */}
        <Fade delay={0.2}>
          <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
            {CATS.map(c => {
              const count = c === "All" ? events.length : events.filter(e => e.cat === c).length;
              const active = filter === c;
              return (
                <button key={c} onClick={() => setFilter(c)} style={{
                  background: active ? GOLD : "transparent", color: active ? "#000" : MUTED,
                  border: `1px solid ${active ? GOLD : "#2A2A2A"}`,
                  padding: "8px 18px", fontSize: "0.73rem", letterSpacing: 2,
                  textTransform: "uppercase", cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.2s",
                }}>
                  {c} ({count})
                </button>
              );
            })}
          </div>
        </Fade>

        {/* By year */}
        {Object.keys(byYear).sort().reverse().map((year, yi) => (
          <div key={year} style={{ marginBottom: 52 }}>
            <Fade delay={yi * 0.05}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: GOLD, letterSpacing: 3 }}>{year}</div>
                <div style={{ flex: 1, height: 1, background: DIMMED }} />
                <div style={{ fontSize: 10, color: MUTED, letterSpacing: 2 }}>{byYear[year].length} events</div>
              </div>
            </Fade>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {byYear[year].map((e, i) => (
                <Fade key={e.n} delay={i * 0.025}>
                  <EventRow event={e} />
                </Fade>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "56px 8vw", background: "#080808", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, letterSpacing: -1 }}>Xsaaa</div>
          <div style={{ fontSize: 9, letterSpacing: 3, color: MUTED, textTransform: "uppercase", marginTop: 4 }}>Lighting Crew</div>
        </div>
        <div style={{ fontSize: "0.73rem", color: MUTED, letterSpacing: 1 }}>Since Oct 2024 · Jakarta</div>
      </footer>

      <style>{`
        @keyframes fu { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.2; } }
        * { box-sizing:border-box; }
        body { margin:0; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:#2A2A2A; border-radius:2px; }
      `}</style>
    </div>
  );
}

function SkillCard({ skill }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? "#181818" : "#141414",
      padding: "30px 26px",
      borderTop: `2px solid ${hov ? GOLD : "#222"}`,
      transition: "all 0.3s",
    }}>
      <div style={{ fontSize: 10, letterSpacing: 3, color: hov ? GOLD : MUTED, textTransform: "uppercase", marginBottom: 18, transition: "color 0.3s" }}>{skill.cat}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {skill.items.map(item => (
          <div key={item} style={{ fontSize: "0.83rem", color: "#BBB", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function EventRow({ event }) {
  const [hov, setHov] = useState(false);
  const d = new Date(event.date);
  const fmt = d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  const color = CAT_COLOR[event.cat] || GOLD;
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      display: "grid", gridTemplateColumns: "38px 1fr auto auto",
      gap: "0 18px", alignItems: "center",
      padding: "14px 18px",
      background: hov ? "#181818" : "transparent",
      borderLeft: `2px solid ${hov ? color : "transparent"}`,
      transition: "all 0.2s",
    }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: hov ? color : "#333", transition: "color 0.2s" }}>
        {String(event.n).padStart(2, "0")}
      </div>
      <div>
        <div style={{ fontSize: "0.86rem", color: hov ? TEXT : "#AAA", fontWeight: 400, transition: "color 0.2s" }}>{event.title}</div>
        <div style={{ fontSize: "0.73rem", color: MUTED, marginTop: 2 }}>{event.venue}</div>
      </div>
      <span style={{ fontSize: 9, letterSpacing: 1.5, color, border: `1px solid ${color}35`, padding: "3px 8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
        {event.cat}
      </span>
      <div style={{ fontSize: "0.73rem", color: MUTED, whiteSpace: "nowrap", textAlign: "right" }}>{fmt}</div>
    </div>
  );
}
