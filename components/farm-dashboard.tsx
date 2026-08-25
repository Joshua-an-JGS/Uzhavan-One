"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const readiness = [
  ["◒", "Crop plan", "Ready to start", "See suitable crops", "/farm/decision"], ["◇", "Benefits", "Profile matched", "View potential support", "/benefits"],
  ["◉", "Insurance", "Check protection", "Review options", "/insurance"], ["≈", "Water", "Limited water", "See water context", "/farm"],
  ["↗", "Market", "Not started", "Explore selling paths", "/market"],
] as const;

export function FarmDashboard() {
  const [view, setView] = useState<"ready" | "loading" | "empty" | "error">("ready");
  useEffect(() => {
    if (view !== "loading") return;
    const timer = window.setTimeout(() => setView("ready"), 650);
    return () => window.clearTimeout(timer);
  }, [view]);
  return <>
    <div className="farm-head reveal"><div><span className="eyebrow">My Farm</span><h1>Good to see you, Arun.</h1><p>Your profile uses fictional demo information only.</p></div><button className="button button-secondary" type="button" onClick={() => setView(view === "ready" ? "loading" : "ready")}>{view === "ready" ? "Refresh demo data" : "Show my farm"}</button></div>
    {view === "loading" && <section className="farm-grid" aria-live="polite" aria-label="Loading farm details"><div className="panel"><div className="skeleton" style={{ width: "35%" }} /><div className="skeleton" /><div className="skeleton" style={{ width: "75%" }} /></div><div className="panel"><div className="skeleton" /><div className="skeleton" style={{ width: "65%" }} /></div></section>}
    {view === "empty" && <section className="state-card"><strong>No farm profile yet.</strong><p>Complete a few simple questions to see guidance based on your farm.</p><Link className="button button-primary" href="/onboarding">Complete My Farm</Link></section>}
    {view === "error" && <section className="state-card error" role="alert"><strong>We could not refresh this demo right now.</strong><p>Your saved farm details are safe. Try again when you are ready.</p><button className="button button-secondary" type="button" onClick={() => setView("ready")}>Try again</button></section>}
    {view === "ready" && <><section className="farm-grid reveal d2"><article className="panel"><h3>Farm summary</h3><dl className="profile-list"><div><dt>Location</dt><dd>Thanjavur, Tamil Nadu</dd></div><div><dt>Land</dt><dd>2 acres</dd></div><div><dt>Water</dt><dd>Limited</dd></div><div><dt>Previous crop</dt><dd>Paddy</dd></div><div><dt>Irrigation</dt><dd>Rain + borewell</dd></div><div><dt>Season</dt><dd>Kharif</dd></div></dl><Link className="quiet-link" href="/onboarding" style={{ display: "inline-block", marginTop: 22 }}>Update profile →</Link></article><article className="panel readiness"><h3>Farm readiness</h3><p>You have the basics in place. Start with a simple crop plan for this season.</p><div className="next-action"><span>Your next action</span><strong>Plan a crop for limited water</strong><Link href="/farm/decision">Start crop plan →</Link></div></article></section>
      <div className="section-heading reveal d3"><h2>What is ready for you</h2><button type="button" className="quiet-link" onClick={() => setView("empty")}>Preview empty state</button></div><section className="status-grid reveal d3">{readiness.map(([icon, title, status, action, href]) => <article className="status-card" key={title}><span className="status-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p><strong>{status}</strong><br />{action}</p><Link href={href}>{action} →</Link></article>)}</section>
      <div className="section-heading"><h2>Seasonal context</h2><button type="button" className="quiet-link" onClick={() => setView("error")}>Preview error state</button></div><section className="panel"><div className="season-bar"><span className="season-mark" aria-hidden="true" /><div><strong>Kharif planning window</strong><p>With limited water, compare crops before committing. Results in this prototype are decision support, not an official agricultural recommendation.</p></div></div></section></>}
  </>;
}
