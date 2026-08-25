# API foundation

All routes return `{ success: true, data }` or `{ success: false, error: { code, message } }`.

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/health` | GET | Demo health disclosure |
| `/api/farmer/profile` | GET, PUT | Fictional demo farmer profile |
| `/api/farms` | GET, POST | Fictional farms |
| `/api/schemes` | GET | Mock schemes by state |
| `/api/schemes/match` | POST | Potentially relevant mock pathways |
| `/api/benefits` | GET | Mock benefit listing |
| `/api/journey` | GET | Fictional farm journey |
