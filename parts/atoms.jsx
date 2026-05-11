/* atoms */
const Clock = () => {
  const [t, setT] = React.useState(new Date());
  React.useEffect(() => { const id = setInterval(() => setT(new Date()), 1000); return () => clearInterval(id); }, []);
  return <span className="clock">SF · {t.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })}</span>;
};
const Pulse = () => <span className="pulse" />;
const Eyebrow = ({ n, label }) => (<div className="eyebrow"><span className="n">{n}</span><span>{label}</span></div>);

/* Shared video frame — autoplays muted, click toggles audio + ensures play */
const MoonVideo = ({ src, title = "moonshot · launch", caption = "click to hear", compact = false }) => {
  const ref = React.useRef(null);
  const [muted, setMuted] = React.useState(true);
  const [ready, setReady] = React.useState(false);
  const [inView, setInView] = React.useState(false);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    if (!wrapRef.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { rootMargin: "200px" });
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current; if (!v) return;
    const next = !muted; setMuted(next); v.muted = next;
    if (!next) { v.currentTime = v.currentTime || 0; v.play().catch(() => {}); }
  };

  return (
    <div ref={wrapRef} className={`moon-video-frame${compact ? " is-compact" : ""}`}>
      <div className="moon-video-chrome">
        <span className="vc-dot vc-r" />
        <span className="vc-dot vc-y" />
        <span className="vc-dot vc-g" />
        <span className="vc-title">{title}</span>
      </div>
      <button type="button" className="moon-video-stage" onClick={toggle} aria-label={muted ? "Unmute video" : "Mute video"}>
        {inView ? (
          <video
            ref={ref}
            className="moon-video"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setReady(true)}
          />
        ) : (
          <div className="moon-video-placeholder" />
        )}
        <span className={`moon-video-badge${muted ? "" : " on"}`}>
          {muted ? (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="22" y1="9" x2="16" y2="15" /><line x1="16" y1="9" x2="22" y2="15" /></svg>
              <span>tap for sound</span>
            </>
          ) : (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
              <span>sound on · tap to mute</span>
            </>
          )}
        </span>
      </button>
      <div className="moon-video-foot">
        <span className="d" />
        <span>{caption}</span>
      </div>
    </div>
  );
};

Object.assign(window, { Clock, Pulse, Eyebrow, MoonVideo });
