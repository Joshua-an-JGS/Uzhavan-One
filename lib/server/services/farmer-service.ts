import { DEMO_EMAIL } from "@/lib/server/api";
import { prisma } from "@/lib/server/db";
import { profileSchema } from "@/lib/server/validation";
export async function getDemoProfile() { const user = await prisma.user.findUnique({ where: { email: DEMO_EMAIL }, include: { farmerProfile: { include: { farms: { include: { cropSeasons: { include: { crop: true } } } } } } } }); if (!user?.farmerProfile) throw new Error("Demo profile unavailable"); return user.farmerProfile; }
export async function updateDemoProfile(input: unknown) { const values = profileSchema.parse(input); const profile = await getDemoProfile(); return prisma.farmerProfile.update({ where: { id: profile.id }, data: values }); }
