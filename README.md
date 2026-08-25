# Uzhavan One

**A citizen-first AI layer that helps Indian farmers turn a real farming problem into the right government action.**

## Phase 1 foundation

This repository contains the production-oriented foundation: a responsive application shell, landing page, guided onboarding, My Farm view, Prisma/PostgreSQL data model, deterministic synthetic data seed, typed service layer, and mock Central Government/Tamil Nadu adapters. All government-related information is simulated. It is not an official government product or service.

## Stack

Next.js App Router, React, TypeScript, Prisma, PostgreSQL, Zod, and Vitest.

## Local setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL` for a local PostgreSQL database.
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npx prisma db seed`
5. `npm run dev`

Demo account: `demo@uzhavan.local` (fictional; no password or sensitive information is collected).

## Verification

Run `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build`.

## Safety and scope

No live government systems, government credentials, Aadhaar, PAN, OTP, payment information, or real identity data are used. The service adapter interfaces describe an approved future integration path; their current implementations return only local synthetic data.

## Current Phase 1 routes

`/`, `/onboarding`, `/farm`; API foundation at `/api/health`, `/api/farmer/profile`, `/api/farms`, `/api/schemes`, `/api/schemes/match`, `/api/benefits`, and `/api/journey`.
