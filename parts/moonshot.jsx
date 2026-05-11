import React from "react";
import { Eyebrow, MoonVideo } from "./atoms";

export const Moonshot = () => {
  return (
    <section id="moonshot" className="section dark">
      <div className="wrap">
        <div className="section-head">
          <Eyebrow n="02" label="Moonshot" />
          <h2 className="section-title" style={{ color: "var(--cream)" }}><em>moonshot</em>.computer</h2>
        </div>

        <div className="moon-card">
          <div>
            <p className="lead">Sleep like you're <em>ahead</em>.</p>
            <p>Moonshot is a parallel proactive agent that lives in the background of your Mac. It books, replies, files, and decides for you, without you asking. You stay in flow. It just tells you what it did.</p>
            <p>Not a smarter inbox. Not another productivity app. The peace of mind that comes from closing the laptop knowing the overhead is absorbed and the important things were watched over.</p>

            <div className="moon-features">
              <div className="feat"><span className="n">01</span><span className="t">Runs as a second profile, in parallel</span><span className="s">parallel</span></div>
              <div className="feat"><span className="n">02</span><span className="t">Acts on its own. Drafts, books, files, cancels.</span><span className="s">proactive</span></div>
              <div className="feat"><span className="n">03</span><span className="t">Reports back. Receipts, not interruptions.</span><span className="s">ambient</span></div>
            </div>

            <div className="moon-form">
              <a href="https://moonshot.computer/" target="_blank" rel="noopener" className="cta lime"><span>Visit moonshot.computer →</span></a>
            </div>
          </div>

          <div className="moon-mac">
            <MoonVideo src="assets/moonshot-launch.mp4" title="moonshot · launch" caption="the AI thought layer · click to hear" />
          </div>
        </div>
      </div>
    </section>
  );
};
