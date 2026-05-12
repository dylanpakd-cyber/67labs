import React from "react";
import { Eyebrow } from "./atoms";

const KIT_FORM_URL = "https://app.kit.com/forms/9431753/subscriptions";

export const Dispatch = () => {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle"); // idle | sending | sent | error
  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setState("sending");
    try {
      await fetch(KIT_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email_address: email }).toString(),
      });
      setState("sent");
    } catch (err) {
      setState("error");
    }
  };
  const sent = state === "sent";

  return (
    <section id="dispatch" className="section">
      <div className="wrap">
        <div className="section-head">
          <Eyebrow n="05" label="Dispatch" />
          <h2 className="section-title">A letter every <em>Friday</em>.</h2>
        </div>
        <div className="dispatch-grid">
          <div className="dispatch-card">
            <h3>Mail from the lab. <em>Useful</em>, occasionally serious.</h3>
            <p>Weekly notes on what we shipped, what we deleted, and what we are still pretending to understand. About 700 words. No tracking.</p>
            {sent ? (
              <div className="ok">✓ You are in. First letter lands this Friday.</div>
            ) : (
              <form className="dispatch-form" onSubmit={submit}>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state === "sending"}
                />
                <button type="submit" disabled={state === "sending"}>
                  {state === "sending" ? "Sending…" : "Subscribe →"}
                </button>
                {state === "error" && (
                  <div className="form-error">Network error. Try again, or email hi@67labs.co.</div>
                )}
              </form>
            )}
          </div>
          <div className="dispatch-list">
            <div className="row"><span className="lbl">General</span><span className="val">hi@67labs.co</span></div>
            <div className="row"><span className="lbl">Operators</span><span className="val">apply@67labs.co</span></div>
            <div className="row"><span className="lbl">Press</span><span className="val">press@67labs.co</span></div>
            <div className="row"><span className="lbl">Visit</span><span className="val">2 Marina Blvd B300, SF CA 94123</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
