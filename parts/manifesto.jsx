const Manifesto = () => {
  const items = [
    { k: "01", v: "Make the joke. Then the business.", c: "lime" },
    { k: "02", v: "Six bets. No favorites.", c: "orange" },
    { k: "03", v: "Friday is for deletion.", c: "blue" },
    { k: "04", v: "Brand is the product is the brand.", c: "ink" },
    { k: "05", v: "Operators only. No tourists.", c: "lime" },
    { k: "06", v: "Ship in public. Apologize later.", c: "orange" },
  ];
  return (
    <section id="manifesto" className="section manifesto-section">
      <div className="wrap">
        <div className="manifesto-head">
          <div className="eyebrow"><span className="n">01</span><span>Manifesto</span></div>
          <h2 className="section-title manifesto-title">
            The internet is our <em>raw material</em>.
          </h2>
        </div>
        <div className="manifesto">
          <div className="manifesto-body">
            <p><span className="hl">Attention</span> is the only currency that compounds. Everything we make is a wager on where it goes next.</p>
            <p>We build small. We ship weekly. We treat taste as a hard constraint and <em>weirdness</em> as the distribution channel.</p>
            <p>If a thing can be a product, a joke, and a love letter at the same time, we will probably make it.</p>
          </div>
          <div className="manifesto-list">
            {items.map((it, i) => (
              <div key={it.k} className={`item tone-${it.c}`} style={{ animationDelay: `${i * 60}ms` }}>
                <div className="k">{it.k}</div>
                <div className="v">{it.v}</div>
                <div className="spark">✦</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { Manifesto });
