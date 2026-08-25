import { fromError, ok } from "@/lib/server/api";
import { getGovernmentAdapters } from "@/lib/server/adapters/government";
import { schemeMatchSchema } from "@/lib/server/validation";
export async function POST(request: Request) { try { const input = schemeMatchSchema.parse(await request.json()); const batches = await Promise.all(getGovernmentAdapters().map((adapter) => adapter.checkEligibility(input))); return ok(batches.flat().map((scheme) => ({ ...scheme, status: "POTENTIALLY_RELEVANT", disclaimer: "Verification is required. This is simulated prototype data." }))); } catch (error) { return fromError(error); } }
