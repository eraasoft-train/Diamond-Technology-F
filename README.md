# 💎 Diamond Technology

**شركة التكنولوجيا الماسية لتقنية المعلومات** — B2B SaaS applications for fleet management, tailoring, financial operations, and document archiving. Serving government and private organizations across Saudi Arabia.

## Products

- **🚗 Ostoli** — Fleet management system for vehicles, drivers, maintenance, and fuel tracking
- **👔 Tailor** — Complete tailoring shop management with measurements, inventory, and e-invoicing
- **💳 Diamond Check** — Financial check and transfer management with printing and reporting
- **📁 Diamond Archive** — Electronic document archiving with scanning, search, and image processing

## Tech Stack

- **Framework:** Agent-Native (React Router v8 SSR + Nitro backend)
- **Frontend:** React 19, Vite, TailwindCSS v4, shadcn/ui
- **Backend:** Nitro, PostgreSQL/PGlite, Drizzle ORM
- **Features:** Bilingual (Arabic/English), responsive design, real-time updates via SSE

## Getting Started

```bash
# Install dependencies
pnpm install

# Development server (watches both frontend + backend)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Development

- **Local dev:** `pnpm dev` runs Vite + Nitro with hot reload
- **Database:** Local PGlite at `data/pglite/` (for production, set `DATABASE_URL` env var)
- **TypeCheck:** `pnpm typecheck` verifies TypeScript types
- **Verify:** `pnpm agent-native:doctor` checks framework compliance

See [DEVELOPING.md](DEVELOPING.md) for detailed tech stack, directory structure, and adding pages/actions/database tables.

See [AGENTS.md](AGENTS.md) for Agent-Native framework guidelines and application rules.

## License

© 2026 Diamond Technology Co. All rights reserved.