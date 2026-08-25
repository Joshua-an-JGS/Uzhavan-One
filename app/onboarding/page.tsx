import { DemoBanner } from "@/components/app-shell";
import { OnboardingFlow } from "@/components/onboarding-flow";
export default async function OnboardingPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) { const { q } = await searchParams; return <div className="app-shell"><DemoBanner /><OnboardingFlow initialQuestion={q?.slice(0, 280)} /></div>; }
