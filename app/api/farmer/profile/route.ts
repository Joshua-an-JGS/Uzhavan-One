import { fromError, ok } from "@/lib/server/api";
import { getDemoProfile, updateDemoProfile } from "@/lib/server/services/farmer-service";
export async function GET() { try { return ok(await getDemoProfile()); } catch (error) { return fromError(error); } }
export async function PUT(request: Request) { try { return ok(await updateDemoProfile(await request.json())); } catch (error) { return fromError(error); } }
