import { fromError, ok, DEMO_EMAIL } from "@/lib/server/api";
import { prisma } from "@/lib/server/db";
export async function GET() { try { const user = await prisma.user.findUniqueOrThrow({ where: { email: DEMO_EMAIL } }); const journeys = await prisma.journey.findMany({ where: { userId: user.id }, include: { steps: { orderBy: { position: "asc" } } } }); return ok(journeys); } catch (error) { return fromError(error); } }
