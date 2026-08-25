import { describe, expect, it } from "vitest";
import { farmSchema, profileSchema, schemeMatchSchema } from "@/lib/server/validation";
describe("foundation validation", () => {
  it("accepts a safe farm profile", () => expect(profileSchema.parse({ fullName: "Arun Kumar", district: "Thanjavur", waterAccess: "LIMITED" }).district).toBe("Thanjavur"));
  it("rejects invalid farm acreage", () => expect(() => farmSchema.parse({ name: "Demo", acreage: 0, irrigation: "Rain" })).toThrow());
  it("defaults the match to Tamil Nadu", () => expect(schemeMatchSchema.parse({}).stateCode).toBe("TN"));
});
