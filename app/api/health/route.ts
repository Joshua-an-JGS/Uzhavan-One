import { ok } from "@/lib/server/api";
export async function GET() { return ok({ status: "ok", demoMode: true, integrations: "simulated" }); }
