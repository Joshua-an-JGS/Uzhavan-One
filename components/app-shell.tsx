import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  ["⌂", "Home", "/"], ["▦", "My Farm", "/farm"], ["◒", "Crop Decision", "/farm"],
  ["◇", "Benefits"], ["◉", "Insurance"], ["!", "Crop Damage"],
  ["↗", "Market"], ["→", "Journey"], ["?", "Help"],
] as const;

export function DemoBanner() {
  return <div className="demo-banner" role="status"><strong>Prototype Demo</strong> — Government integrations and application statuses are simulated.</div>;
}

export function Wordmark() {
  return <Link href="/" className="wordmark" aria-label="Uzhavan One home"><span className="wordmark-mark" aria-hidden="true">u</span><span>Uzhavan One</span></Link>;
}

export function AppShell({ children, active = "My Farm" }: { children: ReactNode; active?: string }) {
  return <div className="app-shell"><DemoBanner /><div className="page-layout">
    <aside className="side-nav" aria-label="Main navigation"><Wordmark /><nav className="nav-group">{nav.map(([symbol, label, href]) => href ? <Link key={label} className={`nav-item ${label === active ? "active" : ""}`} href={href}><span className="nav-symbol" aria-hidden="true">{symbol}</span>{label}</Link> : <span key={label} className="nav-item unavailable" aria-label={`${label} is planned for a later phase`}><span className="nav-symbol" aria-hidden="true">{symbol}</span>{label}<small>Later phase</small></span>)}</nav></aside>
    <div className="shell-content"><header className="shell-top"><span className="small-label">Tamil Nadu · Demo workspace</span><span className="user-chip">Arun Kumar</span></header><main className="content-area">{children}</main></div>
  </div><nav className="mobile-nav" aria-label="Mobile navigation">
    {[["⌂", "Home", "/"], ["▦", "Farm", "/farm"], ["◇", "Benefits"], ["→", "Journey"], ["?", "Help"]].map(([icon,label,href]) => href ? <Link key={label} href={href} className={(label === "Farm" && active === "My Farm") || (label === "Home" && active === "Home") ? "active" : ""}><span className="mobile-symbol" aria-hidden="true">{icon}</span>{label}</Link> : <span key={label} className="unavailable" aria-label={`${label} is planned for a later phase`}><span className="mobile-symbol" aria-hidden="true">{icon}</span>{label}</span>)}
  </nav></div>;
}
