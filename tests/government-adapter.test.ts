import { describe, expect, it } from "vitest";
import { MockCentralGovernmentAdapter, MockTamilNaduAdapter } from "@/lib/server/adapters/government";
describe("mock government adapters", () => {
  it("keeps government data explicitly simulated", async () => { const schemes = await new MockTamilNaduAdapter().getSchemes("TN"); expect(schemes).toHaveLength(2); expect(schemes[0].source).toContain("prototype"); });
  it("provides central pathways without state coupling", async () => { expect((await new MockCentralGovernmentAdapter().getSchemes("KA")).length).toBeGreaterThan(0); });
});
