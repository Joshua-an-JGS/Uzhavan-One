import { fromError, ok } from "@/lib/server/api";
import { createDemoFarm, listDemoFarms } from "@/lib/server/services/farm-service";
export async function GET() { try { return ok(await listDemoFarms()); } catch (error) { return fromError(error); } }
export async function POST(request: Request) { try { return ok(await createDemoFarm(await request.json()), { status: 201 }); } catch (error) { return fromError(error); } }
