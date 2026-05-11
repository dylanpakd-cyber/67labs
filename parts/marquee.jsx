import React from "react";

export const Marquee = () => {
  const items = ["Monetizing brainrot since 2026", "A studio of operators", "Six things at once", "San Francisco · The internet", "Tiny products, large absurdities"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => <span key={i}>{t}<span className="star">✦</span></span>)}
      </div>
    </div>
  );
};
