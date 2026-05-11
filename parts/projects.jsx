/* Per-project art components. Each SVG is its own tiny ad. */

const ArtMoonshot = () => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="proj-art proj-art-mac">
      <div className="mac-stack">
        <div className="mac-frame">
          <div className="mac-notch-real" />
          <div className="mac-screen">
            <div className="mac-statusbar">
              <span></span>
              <span>Mon May 11 · 5:38 PM</span>
            </div>
            <div className="mac-stage">
              <div className="char char-you">
                <div className="char-av av-you">🧑</div>
                <div className="char-lbl">You</div>
                <div className={`char-line ${tick % 3 === 0 ? "on" : ""}`}>typing…</div>
              </div>
              <div className="char char-moon">
                <div className="char-av av-moon">🐕</div>
                <div className="char-lbl">Moonshot</div>
                <div className={`char-line ${tick % 3 === 1 ? "on" : ""}`}>booking…</div>
              </div>
              <div className="mac-soon">
                <span className="d" /> Coming soon
              </div>
            </div>
          </div>
          <div className="mac-stand" />
        </div>

        <div className="mini-win win-notes">
          <div className="mw-bar"><span className="mw-dots"><span></span><span></span><span></span></span><span>Notes</span></div>
          <div className="mw-body">
            <div className="mw-meta">SF · MAY 11, 2026</div>
            <div className="mw-h">Brainrot, contained</div>
            <div className="mw-p">Your time is finite. Your tabs are not. Moonshot reads the room, drafts the reply, and asks once before sending.</div>
            <div className="mw-p hl">Stay weird. Stay shipping.</div>
          </div>
        </div>

        <div className="mini-win win-chrome">
          <div className="mw-bar dark"><span className="mw-dots"><span></span><span></span><span></span></span><span>flights.google.com</span></div>
          <div className="mw-body dark">
            <div className="mw-check">✓</div>
            <div className="mw-h2">Trip confirmed</div>
            <div className="mw-sub">JetBlue · NYC → SFO · May 15</div>
            <div className="mw-sub">10:00 AM — 1:20 PM · $189</div>
            <a className="mw-cta">View booking details →</a>
            <div className="mw-foot"><span className="d" /> booking confirmed · trip saved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArtSignalrooms = () => {
  // Deterministic phone state — animated via CSS classes
  const phones = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const i = row * 4 + col;
      // Mix: most lit (lime), a few off (dark), 2 hot (red)
      let kind = "on";
      if (i === 2 || i === 11) kind = "red";
      else if (i === 5 || i === 9 || i === 14) kind = "off";
      phones.push({ row, col, i, kind });
    }
  }
  return (
    <svg className="proj-art proj-art-sig" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="600" height="300" fill="#0a0a08" />
      {/* corner crosshairs */}
      <g stroke="#D4FF3F" strokeWidth="1" fill="none" opacity="0.7">
        <circle cx="14" cy="14" r="3" />
        <circle cx="586" cy="14" r="3" />
      </g>
      {/* top bar */}
      <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="0.06em">
        <text x="30" y="32" fill="#f4f0e6">Build your own DIY iPhone farm.</text>
        <text x="570" y="32" textAnchor="end" fill="#888" fontSize="9" letterSpacing="0.1em">LATENCY 38MS</text>
      </g>
      {/* OPERATOR */}
      <g transform="translate(40,90)">
        <rect width="110" height="130" rx="6" fill="none" stroke="#3a3a36" strokeWidth="1.2" />
        <text x="14" y="20" fontFamily="ui-monospace, monospace" fontSize="9" fill="#D4FF3F" letterSpacing="0.12em">OPERATOR</text>
        <circle cx="32" cy="60" r="11" fill="none" stroke="#888" strokeWidth="1.2" />
        <rect x="52" y="50" width="46" height="3" rx="1" fill="#666" />
        <rect x="52" y="58" width="38" height="3" rx="1" fill="#666" />
        <rect x="52" y="66" width="44" height="3" rx="1" fill="#666" />
        <rect x="14" y="90" width="20" height="22" rx="3" fill="none" stroke="#666" strokeWidth="1.2" />
      </g>
      {/* cmd arrow */}
      <g>
        <line x1="155" y1="155" x2="220" y2="155" stroke="#D4FF3F" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="188" cy="155" r="2.5" fill="#D4FF3F">
          <animate attributeName="cx" values="155;220;155" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <polygon points="218,151 226,155 218,159" fill="#D4FF3F" />
        <text x="187" y="146" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#f4f0e6">cmd</text>
      </g>
      {/* MAC HOST */}
      <g transform="translate(230,80)">
        <rect width="150" height="150" rx="8" fill="none" stroke="#D4FF3F" strokeWidth="1.5" />
        <text x="14" y="22" fontFamily="ui-monospace, monospace" fontSize="9" fill="#D4FF3F" letterSpacing="0.12em">MAC HOST</text>
        <circle cx="138" cy="18" r="3" fill="#D4FF3F">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
        </circle>
        {/* glow blob */}
        <ellipse cx="75" cy="58" rx="38" ry="9" fill="#D4FF3F" opacity="0.55">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" />
        </ellipse>
        <rect x="14" y="76" width="64" height="8" rx="2" fill="#23231f" />
        <rect x="14" y="90" width="92" height="8" rx="2" fill="#23231f" />
        <text x="14" y="118" fontFamily="ui-monospace, monospace" fontSize="8" fill="#888" letterSpacing="0.1em">RECEIPTS LOG</text>
        <rect x="14" y="124" width="44" height="4" rx="1" fill="#D4FF3F" />
        <rect x="14" y="132" width="80" height="3" rx="1" fill="#3a3a36" />
        <rect x="14" y="138" width="60" height="3" rx="1" fill="#3a3a36" />
      </g>
      {/* spawn arrow */}
      <g>
        <line x1="385" y1="155" x2="430" y2="155" stroke="#D4FF3F" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="407" cy="155" r="2.5" fill="#D4FF3F">
          <animate attributeName="cx" values="385;430;385" dur="2s" repeatCount="indefinite" />
        </circle>
        <polygon points="428,151 436,155 428,159" fill="#D4FF3F" />
        <text x="408" y="146" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#f4f0e6">spawn</text>
      </g>
      {/* PHONES grid */}
      <g transform="translate(450,55)">
        {phones.map((p) => {
          const x = p.col * 32;
          const y = p.row * 50;
          const stroke = p.kind === "red" ? "#ff3a2a" : p.kind === "on" ? "#D4FF3F" : "#2a2a26";
          const fill = p.kind === "off" ? "#0e0e0b" : "transparent";
          return (
            <g key={p.i} transform={`translate(${x},${y})`}>
              <rect width="24" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.2">
                {p.kind === "on" && (
                  <animate attributeName="opacity" values="1;0.35;1" dur={`${1.4 + (p.i % 4) * 0.4}s`} begin={`${(p.i % 5) * 0.2}s`} repeatCount="indefinite" />
                )}
                {p.kind === "red" && (
                  <animate attributeName="opacity" values="1;0.4;1" dur="0.7s" repeatCount="indefinite" />
                )}
              </rect>
              <rect x="9" y="3" width="6" height="1.5" rx="0.5" fill={stroke} opacity="0.5" />
              {p.kind === "red" && (
                <circle cx="12" cy="22" r="2" fill="#ff3a2a">
                  <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}
      </g>

    </svg>
  );
};

const ArtAgentpeek = () => (
  <svg className="proj-art" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {/* wallpaper */}
    <defs>
      <linearGradient id="apWall" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#e9e2cf" />
        <stop offset="1" stopColor="#d6cdb3" />
      </linearGradient>
    </defs>
    <rect width="600" height="300" fill="url(#apWall)" />
    {/* faint menu bar dots */}
    <g fontFamily="ui-monospace, monospace" fontSize="9" fill="#0e0e0e" opacity="0.45">
      <text x="20" y="22">●</text>
      <text x="540" y="22">Mon 6:18 PM</text>
    </g>
    {/* THE NOTCH — pill-shaped expanded peek panel */}
    <g transform="translate(80,12)">
      <rect width="440" height="92" rx="46" fill="#0a0a08" />
      {/* camera dot */}
      <circle cx="32" cy="46" r="6" fill="#1a1a16" />
      <circle cx="32" cy="46" r="2.5" fill="#3a3a36" />
      {/* peek header */}
      <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#D4FF3F" letterSpacing="0.1em">
        <circle cx="56" cy="22" r="3">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <text x="68" y="26">CLAUDE CODE · LIVE</text>
        <text x="420" y="26" textAnchor="end" fill="#888">⌘⇧P</text>
      </g>
      {/* terminal lines inside the notch */}
      <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#e6e1d0">
        <text x="56" y="48"><tspan fill="#888">$</tspan> patching auth.ts</text>
        <text x="56" y="64"><tspan fill="#D4FF3F">+</tspan> added rate limit · retry on 429</text>
        <text x="56" y="80"><tspan fill="#D4FF3F">✓</tspan> 14 / 14 passed
          <tspan x="380" y="80" fill="#888">38s</tspan>
        </text>
      </g>
      {/* blinking cursor at end of line 1 */}
      <rect x="216" y="40" width="6" height="11" fill="#D4FF3F">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
    </g>
    {/* below: workspace echo — faint, suggests the IDE behind */}
    <g fontFamily="ui-monospace, monospace" fontSize="11" fill="#0e0e0e" opacity="0.35">
      <text x="40" y="160">// agentpeek lives in the notch.</text>
      <text x="40" y="180">// claude works · you keep flow.</text>
    </g>
    <g fill="#0e0e0e" opacity="0.18">
      <rect x="40" y="200" width="200" height="6" rx="2" />
      <rect x="40" y="214" width="280" height="6" rx="2" />
      <rect x="40" y="228" width="160" height="6" rx="2" />
      <rect x="40" y="242" width="240" height="6" rx="2" />
    </g>
    {/* status pill bottom right */}
    <g transform="translate(420,250)">
      <rect width="150" height="28" rx="14" fill="#0a0a08" />
      <circle cx="16" cy="14" r="4" fill="#D4FF3F">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <text x="30" y="18" fontFamily="ui-monospace, monospace" fontSize="9" fill="#e6e1d0" letterSpacing="0.08em">PEEK · MACOS 14+</text>
    </g>
  </svg>
);

const ArtRoomba = () => (
  <svg className="proj-art" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="600" height="300" fill="#FF5A1F" />
    {/* spinning disc */}
    <g transform="translate(300,150)">
      <circle r="120" fill="#0e0e0e" />
      <circle r="120" fill="none" stroke="#FF5A1F" strokeWidth="2" strokeDasharray="2 4" opacity="0.4" />
      <circle r="80" fill="#1a1a1a" />
      <circle r="80" fill="none" stroke="#FF5A1F" strokeWidth="2" strokeDasharray="2 4" opacity="0.3" />
      <circle r="22" fill="#FF5A1F" />
      <circle r="6" fill="#0e0e0e" />
      {/* light beam */}
      <line x1="0" y1="0" x2="100" y2="-30" stroke="#D4FF3F" strokeWidth="2" opacity="0.5" />
    </g>
    <g fontFamily="ui-monospace, monospace" fontSize="11" fill="#f4f0e6">
      <text x="30" y="40">NOW SPINNING</text>
      <text x="30" y="60" fontWeight="700">ambient disco · side b</text>
      <text x="30" y="280">▶ 42:18 / ∞</text>
      <text x="570" y="280" textAnchor="end" opacity="0.7">apartment cleans itself</text>
    </g>
  </svg>
);

const ArtDoppler = () => (
  <svg className="proj-art" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="600" height="300" fill="#f4f0e6" />
    {/* mood waveform */}
    <g stroke="#0e0e0e" fill="none" strokeWidth="2">
      <path d="M 0 150 Q 60 100 120 150 T 240 150 T 360 150 T 480 150 T 600 150" />
      <path d="M 0 150 Q 60 60 120 150 T 240 150 T 360 150 T 480 150 T 600 150" opacity="0.4" />
      <path d="M 0 150 Q 60 200 120 150 T 240 150 T 360 150 T 480 150 T 600 150" opacity="0.4" />
    </g>
    {/* mail dots */}
    <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#0e0e0e">
      <circle cx="90" cy="100" r="6" fill="#FF5A1F" />
      <text x="105" y="103">loud · 14 unread</text>
      <circle cx="240" cy="150" r="6" fill="#D4FF3F" />
      <text x="255" y="153">flowing · 03 drafts</text>
      <circle cx="430" cy="200" r="6" fill="#0e0e0e" />
      <text x="445" y="203">quiet · archived</text>
    </g>
    <text x="30" y="280" fontFamily="ui-monospace, monospace" fontSize="10" fill="#666">INBOX TUNED TO TODAY</text>
  </svg>
);

const ArtRerun = () => (
  <svg className="proj-art" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="600" height="300" fill="#1a1a2e" />
    {/* CRT scanlines */}
    {Array.from({ length: 60 }).map((_, i) => (
      <line key={i} x1="0" y1={i * 5} x2="600" y2={i * 5} stroke="#000" strokeWidth="1" opacity="0.15" />
    ))}
    {/* old web browser */}
    <rect x="60" y="50" width="480" height="200" fill="#c0c0c0" stroke="#000" />
    <rect x="60" y="50" width="480" height="22" fill="#000080" />
    <text x="70" y="66" fontFamily="ui-monospace, monospace" fontSize="11" fill="#fff">rerun.studio · my livejournal</text>
    <rect x="68" y="80" width="464" height="22" fill="#fff" stroke="#808080" />
    <text x="76" y="95" fontFamily="ui-monospace, monospace" fontSize="11" fill="#0000ee">http://blog.rerun.studio/~tario</text>
    <g fontFamily="Comic Sans MS, cursive" fontSize="13" fill="#000">
      <text x="78" y="130">Currently listening: a song</text>
      <text x="78" y="155" fill="#cc0000">Mood: ✦ chronically online ✦</text>
      <text x="78" y="180">posted at 3:47am · 1 comment</text>
      <text x="78" y="220" fill="#0000ee" textDecoration="underline">← prev | next →</text>
    </g>
  </svg>
);

const ART = { moonshot: ArtMoonshot, signalrooms: ArtSignalrooms, agentpeek: ArtAgentpeek, "roomba.fm": ArtRoomba, "doppler.email": ArtDoppler, "rerun.studio": ArtRerun };

const Projects = () => {
  const items = [
    { w: "w-6", key: "moonshot", name: "moonshot", domain: "moonshot.computer", tag: "Live", status: "live",
      kind: "The AI thought layer",
      blurb: "A parallel local runtime on your Mac. It drafts, books, replies, scaffolds. You keep the keyboard.",
      meta: "v0.9 · macOS 14+", tone: "ink" },
    { w: "w-3", key: "signalrooms", name: "signalrooms", domain: "signalrooms.xyz", tag: "Live", status: "live",
      kind: "DIY iPhone farm",
      blurb: "SignalRoom turns your Mac into a viral distribution engine. Paced posts. Real devices. Real proxies to overcome shadowbans.",
      meta: "macOS · USB-C swarm", tone: "ink" },
    { w: "w-3", key: "agentpeek", name: "agentpeek", domain: "agentpeek.app", tag: "Live", status: "live",
      kind: "Notch IDE",
      blurb: "Claude Code and Codex, right in your Mac notch. Peek at the agent without breaking flow.",
      meta: "v1.0 · macOS", tone: "cream" },
    { w: "w-2", key: "roomba.fm", name: "roomba.fm", tag: "Cooking", status: "cooking",
      kind: "Ambient web radio",
      blurb: "A station that loops while your apartment cleans itself. Mostly disco.",
      meta: "alpha · Tues drop", tone: "orange" },
    { w: "w-2", key: "doppler.email", name: "doppler.email", tag: "Cooking", status: "cooking",
      kind: "Inbox with vibes",
      blurb: "Filters mail by your mood. Loud days surface loud people.",
      meta: "alpha · soon", tone: "cream" },
    { w: "w-2", key: "rerun.studio", name: "rerun.studio", tag: "Cooking", status: "cooking",
      kind: "Old internet, new tools",
      blurb: "A tiny editor for blogs that feel like they were made in 2007.",
      meta: "private beta", tone: "ink" },
  ];

  return (
    <section id="projects" className="section section-tinted">
      <div className="wrap">
        <div className="section-head">
          <Eyebrow n="03" label="Lab Index" />
          <h2 className="section-title">Six things at once, <em>always</em>.</h2>
        </div>
        <div className="proj-grid">
          {items.map((p) => {
            const Art = ART[p.key];
            return (
              <a key={p.key} href={p.domain ? `https://${p.domain}` : "#"} target={p.domain ? "_blank" : undefined} rel="noopener" className={`proj ${p.w} proj-tone-${p.tone}`}>
                <div className="proj-art-wrap">{Art ? <Art /> : null}</div>
                <div className="proj-body">
                  <div className="proj-top">
                    <span>{p.kind}</span>
                    <span className={`proj-status ${p.status}`}>{p.tag}</span>
                  </div>
                  <h3>{p.name}<em>.</em></h3>
                  <p className="proj-blurb">{p.blurb}</p>
                  <div className="proj-meta">
                    <span>{p.meta}</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { Projects });
