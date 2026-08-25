import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const DEMO_EMAIL = "demo@uzhavan.local";
export type ApiSuccess<T> = { success: true; data: T };
export const ok = <T>(data: T, init?: ResponseInit) => NextResponse.json<ApiSuccess<T>>({ success: true, data }, init);
export const apiError = (code: string, message: string, status = 400) =>
  NextResponse.json({ success: false, error: { code, message } }, { status });
export const fromError = (error: unknown) => {
  if (error instanceof ZodError) return apiError("INVALID_INPUT", "Please check the information you entered.", 422);
  console.error("API error", error instanceof Error ? error.message : "Unknown error");
  return apiError("SERVICE_UNAVAILABLE", "We could not complete that right now. Please try again.", 503);
};
