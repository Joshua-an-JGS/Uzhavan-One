# Security boundaries

Inputs are validated with Zod at API boundaries. UI code has no database or external-integration access. Error envelopes deliberately omit stack traces and internal details. The app does not collect sensitive identity, financial, OTP, or password data. Future authenticated flows must add secure session cookies, CSRF controls, rate limiting, and audit events before enabling non-demo users.
