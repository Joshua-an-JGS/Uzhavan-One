"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function LandingHero() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const guide = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) { setError("Tell us what is happening on your farm so we can guide your setup."); return; }
    router.push(`/onboarding?q=${encodeURIComponent(trimmed)}`);
  };
  return <section className="landing-hero"><div className="hero-copy reveal"><span className="eyebrow">A clearer way to take action</span><h1>Your farm. Your government benefits. <em>Your next step.</em></h1><p className="lead">Tell us what is happening on your farm. We’ll help you understand a practical next step, one question at a time.</p><div className="hero-actions"><Link className="button button-primary" href="/onboarding">Start My Farm Journey <span aria-hidden="true">→</span></Link><Link className="button button-secondary" href="/farm">Explore Demo</Link></div></div><section className="question-note reveal d2" aria-labelledby="question-title"><span className="small-label">Ask in your own words</span><p id="question-title">“I have 2 acres in Thanjavur. Water is limited. What should I grow this season?”</p><form className="prompt-row" onSubmit={guide} noValidate><label className="screen-reader" htmlFor="farm-question">Describe what is happening on your farm</label><input id="farm-question" name="q" value={question} onChange={(event) => { setQuestion(event.target.value); setError(""); }} aria-invalid={Boolean(error)} aria-describedby={error ? "farm-question-error" : undefined} placeholder="What do you need help with today?" /><button className="button button-primary" type="submit">Guide me <span aria-hidden="true">→</span></button></form>{error && <p id="farm-question-error" className="prompt-error" role="alert">{error}</p>}</section><section className="promise-grid reveal d3" aria-label="How the demo keeps you safe"><div className="promise"><strong>Start with your situation</strong><span>No need to know a scheme name or department.</span></div><div className="promise"><strong>Simple, explained steps</strong><span>We show what each step means before you move forward.</span></div><div className="promise"><strong>Demo data, clearly marked</strong><span>We never ask for Aadhaar, PAN, bank details, or OTPs.</span></div></section><p className="disclaimer"><strong>Independent prototype:</strong> Uzhavan One is not a government service. Government services, eligibility, applications, and statuses shown here are simulated unless explicitly identified as verified information.</p></section>;
}
