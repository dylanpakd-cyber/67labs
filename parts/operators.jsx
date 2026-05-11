const Portrait = ({ which, color }) => {
  const dots = [];
  const seed = which === "DP" ? 1 : which === "OK" ? 2 : 3;
  for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 18; x++) {
      const cx = (x - 8.5) / 8.5, cy = (y - 9) / 9;
      const d = Math.sqrt(cx * cx + cy * cy);
      if (d > 1) continue;
      const face = Math.max(0, 1 - d * 1.1);
      const noise = ((Math.sin(x * 12.9898 + y * 78.233 + seed * 7) * 43758.5453) % 1 + 1) % 1;
      const r = face * 1.6 - noise * 0.8;
      if (r > 0.1) dots.push(<circle key={`${x}-${y}`} cx={x * 4 + 4} cy={y * 4 + 4} r={Math.min(2.2, r * 2.2)} />);
    }
  }
  return (
    <svg className={`op-portrait portrait-${color}`} viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="40" className="p-bg" />
      <g className="p-dots">{dots}</g>
      <text x="40" y="74" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="7" className="p-tag">{which}</text>
    </svg>
  );
};

const Operators = () => {
  const people = [
    {
      init: "DP", color: "orange",
      name: "Dylan Pak", ext: "01",
      role: "ceo of touching grass",
      bio: "19. Taiwan to Seattle. UW Foster at 16. 600M+ views, $1M dropshipping at 17. Builds binders, not models. Currently logged in.",
      where: "SEA / SF", years: "head goblin",
      url: "https://dylanpak.com",
    },
    {
      init: "OK", color: "lime",
      name: "Ojas Kandhare", ext: "02",
      role: "head of vibes & violence",
      bio: "Ships the things. Lives in the diff. Refuses to talk about k8s. Strong opinions about ramen, tabs, and the correct way to fold a t-shirt.",
      where: "SF", years: "engineer-coded",
      url: "https://ojaskandy.life/",
    },
    {
      init: "TY", color: "blue",
      name: "Tario You", ext: "03",
      role: "chief brainrot officer",
      bio: "In charge of tone, taste, and the group chat. Picks the soundtrack. Has been described, lovingly, as 'too online'.",
      where: "LA / NYC", years: "vibe-coded",
      url: "https://github.com/tario-you",
    },
  ];

  return (
    <section id="operators" className="section">
      <div className="wrap">
        <div className="section-head">
          <Eyebrow n="04" label="The Goblins" />
          <h2 className="section-title">3 people. <em>1 lab.</em></h2>
        </div>

        <div className="ops">
          {people.map((p) => (
            <a key={p.name} href={p.url || "#"} target={p.url ? "_blank" : undefined} rel="noopener" className="op">
              <div>
                <Portrait which={p.init} color={p.color} />
                <div className="op-name">{p.name}<span className="ext">x{p.ext}</span></div>
                <div className="op-role">{p.role}</div>
                <div className="op-bio">{p.bio}</div>
              </div>
              <div className="op-meta">
                <span>{p.where}</span>
                <span>{p.years}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Operators });
