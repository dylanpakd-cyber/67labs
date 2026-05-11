import React from "react";

export const Hero = () => {
  const [bigIdx, setBigIdx] = React.useState(0);
  const [slide, setSlide] = React.useState(0);
  const words = ["brainrot", "the feed", "doomscrolls", "shitposts", "the algo", "the timeline"];

  const slides = [
    {
      tone: "ink",
      head: "67/labs · live",
      rows: [
        { k: "now playing", v: "moonshot.computer · v0.9" },
        { k: "shipping", v: "6 things at once" },
        { k: "posture", v: "logged in, locked in" },
        { k: "working on", v: "brainrot, contained" },
        { k: "open to", v: "talented operators" },
      ],
      foot: ["console", "idle · listening"],
    },
    {
      tone: "lime",
      head: "second self · invisible",
      rows: [
        { k: "status", v: "you · keyboard" },
        { k: "second", v: "moonshot · drafting" },
        { k: "queue", v: "4 tasks, 2 approvals" },
        { k: "context", v: "private · local" },
        { k: "presence", v: "ambient · in the notch" },
      ],
      foot: ["⌘ M", "summon · or ignore"],
    },
    {
      tone: "orange",
      head: "lab index · today",
      rows: [
        { k: "001", v: "moonshot.computer" },
        { k: "002", v: "agentpeek.app" },
        { k: "003", v: "signalrooms.xyz" },
        { k: "004", v: "roomba.fm" },
        { k: "005", v: "doppler.email" },
      ],
      foot: ["06 / 06", "all systems shipping"],
    },
  ];

  React.useEffect(() => {
    const id = setInterval(() => setBigIdx(i => (i + 1) % words.length), 1600);
    return () => clearInterval(id);
  }, []);

  const cur = slides[slide];
  const cycle = () => setSlide(s => (s + 1) % slides.length);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-top">
          <div className="badge"><span className="dot" /> Studio open · Est. 2026 · San Francisco</div>
          <div className="hero-tape">
            <div className="hero-tape-track">
              {[0,1].map(k => (
                <div key={k} className="hero-tape-set" aria-hidden={k===1}>
                  <span>67/labs</span><span>·</span>
                  <span>monetizing brainrot</span><span>·</span>
                  <span>vibes · then code</span><span>·</span>
                  <span>too online, on purpose</span><span>·</span>
                  <span>posting is a craft</span><span>·</span>
                  <span>logged in, locked in</span><span>·</span>
                  <span>chronically curious</span><span>·</span>
                  <span>useful, weird, or both</span><span>·</span>
                  <span>brainrot, contained</span><span>·</span>
                  <span>stay weird, stay shipping</span><span>·</span>
                  <span>the algorithm is a medium</span><span>·</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h1 className="hero-mark">
          <span className="hm-row">
            <span className="hm-67">67</span>
            <span className="hm-slash">/</span>
            <span className="hm-labs">Labs<sup>®</sup></span>
          </span>
          <span className="hm-sub">a studio for the attention economy</span>
        </h1>

        <div className="hero-mid">
          <div className="hm-left">
            <div className="hm-headline">
              we monetize
              <span className="hm-cycle">
                {words.map((w, i) => (
                  <span key={w} className={i === bigIdx ? "on" : ""}>{w}</span>
                ))}
              </span>
            </div>
            <p className="hm-body">
              A three person studio in San Francisco shipping software, brands, and tiny absurd products that turn the worst parts of the internet into something <em>useful</em>, <em>weird</em>, or <em>both</em>. We don&apos;t do client work. We ship on Fridays. We delete on Mondays.
            </p>
            <div className="hm-ctas">
              <a href="https://moonshot.computer/" target="_blank" rel="noopener" className="cta lime"><span>See moonshot.computer</span></a>
              <a href="#projects" className="cta ghost">Lab index →</a>
            </div>
          </div>

          <div className="hm-right">
            <div className={`hero-card tone-${cur.tone}`} onClick={cycle} role="button" tabIndex={0}>
              <div className="hc-head">
                <span>{cur.head}</span>
                <span className="hc-dot" />
              </div>
              <div className="hc-body">
                {cur.rows.map((t, i) => (
                  <div key={i} className="hc-row">
                    <span className="hc-k">{t.k}</span>
                    <span className="hc-v">{t.v}</span>
                  </div>
                ))}
              </div>
              <div className="hc-foot">
                <span>{cur.foot[0]}</span>
                <span>{cur.foot[1]}</span>
              </div>
            </div>
            <div className="sticker">
              <div className="sm">currently</div>
              <div className="big">monetizing<br />brainrot</div>
              <div className="sm">since &apos;26</div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat"><div className="num">06</div><div className="lbl">Live projects</div></div>
          <div className="stat"><div className="num">03</div><div className="lbl">Operators</div></div>
          <div className="stat"><div className="num">2026</div><div className="lbl">Founded</div></div>
          <div className="stat"><div className="num">SF</div><div className="lbl">Headquarters</div></div>
        </div>
      </div>
    </section>
  );
};
