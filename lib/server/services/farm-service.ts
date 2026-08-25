import { prisma } from "@/lib/server/db";
import { farmSchema } from "@/lib/server/validation";
import { getDemoProfile } from "./farmer-service";
export async function listDemoFarms() { const profile = await getDemoProfile(); return prisma.farm.findMany({ where: { farmerProfileId: profile.id }, include: { cropSeasons: { include: { crop: true }, orderBy: { year: "desc" } }, waterData: true } }); }
export async function createDemoFarm(input: unknown) { const values = farmSchema.parse(input); const profile = await getDemoProfile(); return prisma.farm.create({ data: { ...values, farmerProfileId: profile.id } }); }
