"use client";

import { useState } from "react";
import Link from "next/link";

type FarmData = { state: string; district: string; taluk: string; village: string; land: string; water: string; previousCrop: string; help: string };
const initial: FarmData = { state: "Tamil Nadu", district: "Thanjavur", taluk: "Thanjavur", village: "Punnainallur", land: "", water: "", previousCrop: "", help: "" };
const water = ["Plenty", "Moderate", "Limited", "Rain-dependent", "Not sure"];
const help = ["Choose a crop", "Find subsidies", "Crop insurance", "Crop damage", "Find a market", "Pest or disease", "Government scheme", "Other"];

export function OnboardingFlow({ initialQuestion }: { initialQuestion?: string }) {
  const [step, setStep] = useState(1); const [data, setData] = useState(initial); const [error, setError] = useState("");
  const update = (field: keyof FarmData, value: string) => setData((d) => ({ ...d, [field]: value }));
  const validate = () => {
    if (step === 1 && (!data.state || !data.district || !data.taluk || !data.village)) return "Please complete each location field.";
    if (step === 2 && (!/^\d+(\.\d+)?$/.test(data.land) || Number(data.land) <= 0 || Number(data.land) > 100)) return "Enter land area from 0.1 to 100 acres.";
    if (step === 3 && !data.water) return "Choose the option that best describes your water situation.";
    if (step === 4 && !data.previousCrop.trim()) return "Tell us what you grew previously, or enter “Not sure”.";
    if (step === 5 && !data.help) return "Choose what you would like help with first.";
    return "";
  };
  const next = () => { const issue = validate(); if (issue) { setError(issue); return; } setError(""); setStep((s) => Math.min(6, s + 1)); };
  const title = ["", "Where is your farm?", "How much land do you farm?", "What is your water situation?", "What did you grow previously?", "What do you want help with?"][step];
  const helpText = ["", "This helps us show Tamil Nadu prototype pathways relevant to your area.", "Use acres. You can update this later.", "Choose the closest answer. It is okay if you are not sure.", "This helps us consider crop rotation in future guidance.", "Start with the thing that matters most today."][step];
  if (step === 6) return <section className="onboard-wrap"><Link href="/" className="return-link">← Back to home</Link><div className="step-card success-panel reveal"><div className="success-stamp" aria-hidden="true">✓</div><h1>Your farm profile is ready.</h1><p>We saved your synthetic demo details. Your first next step is to plan a crop for the season.</p><Link href="/farm" className="button button-primary">Go to My Farm <span aria-hidden="true">→</span></Link></div></section>;
  return <main className="onboard-wrap"><Link href="/" className="return-link">← Return to Uzhavan One</Link>{initialQuestion && <aside className="prompt-context" aria-label="Your farm question"><strong>We’ll use your question to guide setup:</strong> “{initialQuestion}”</aside>}<div className="progress-head"><span>Step {step} of 5</span><span>{step * 20}% complete</span></div><div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={step * 20} aria-label="Onboarding progress"><div className="progress-fill" style={{ width: `${step * 20}%` }} /></div>
    <section className="step-card reveal" aria-labelledby="step-title"><span className="eyebrow">Build your farm profile</span><h1 id="step-title">{title}</h1><p className="step-help">{helpText}</p>
      {step === 1 && <div><div className="field"><label htmlFor="state">State</label><select id="state" value={data.state} onChange={(e) => update("state", e.target.value)}><option>Tamil Nadu</option><option>Karnataka</option><option>Kerala</option></select></div><div className="field"><label htmlFor="district">District</label><input id="district" value={data.district} onChange={(e) => update("district", e.target.value)} /></div><div className="field"><label htmlFor="taluk">Block or taluk</label><input id="taluk" value={data.taluk} onChange={(e) => update("taluk", e.target.value)} /></div><div className="field"><label htmlFor="village">Village</label><input id="village" value={data.village} onChange={(e) => update("village", e.target.value)} /></div></div>}
      {step === 2 && <div className="field"><label htmlFor="land">Land area in acres</label><input id="land" inputMode="decimal" placeholder="For example, 2" value={data.land} aria-invalid={Boolean(error)} onChange={(e) => update("land", e.target.value)} /><span className="small-label">Use only a number. This demo never asks for land records.</span></div>}
      {step === 3 && <div className="options">{water.map((item) => <button type="button" className={`choice ${data.water === item ? "selected" : ""}`} onClick={() => update("water", item)} key={item} aria-pressed={data.water === item}><span className="choice-dot" aria-hidden="true" />{item}</button>)}</div>}
      {step === 4 && <div className="field"><label htmlFor="previous">Previous crop</label><input id="previous" placeholder="For example, Paddy" value={data.previousCrop} onChange={(e) => update("previousCrop", e.target.value)} /></div>}
      {step === 5 && <div className="options">{help.map((item) => <button type="button" className={`choice ${data.help === item ? "selected" : ""}`} onClick={() => update("help", item)} key={item} aria-pressed={data.help === item}><span className="choice-dot" aria-hidden="true" />{item}</button>)}</div>}
      {error && <p className="field-error" role="alert">{error}</p>}<div className="step-actions"><button className="button button-secondary" type="button" onClick={() => { setError(""); setStep((s) => Math.max(1, s - 1)); }} disabled={step === 1}>Back</button><button className="button button-primary" type="button" onClick={next}>{step === 5 ? "Save profile" : "Continue"} <span aria-hidden="true">→</span></button></div>
    </section></main>;
}
