import { fromError, ok } from "@/lib/server/api";
import { getGovernmentAdapters } from "@/lib/server/adapters/government";
export async function GET(request: Request) { try { const stateCode = new URL(request.url).searchParams.get("state") ?? "TN"; const batches = await Promise.all(getGovernmentAdapters().map((adapter) => adapter.getSchemes(stateCode))); return ok(batches.flat()); } catch (error) { return fromError(error); } }
