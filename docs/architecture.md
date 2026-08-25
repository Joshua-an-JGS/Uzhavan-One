# Architecture

Uzhavan One is a modular Next.js application. Route handlers form the REST boundary; `lib/server/services` owns business operations; `lib/server/adapters` isolates government-service providers; Prisma owns persistence. The UI accesses only route handlers, never integrations or database clients directly.

The prototype always operates in DEMO MODE. Production adapters require approved APIs, explicit consent, server-side authentication, data minimization, auditing, and state-specific authorization.
