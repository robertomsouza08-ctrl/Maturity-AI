
# Maturidade IA/ML – Varejo

App Next.js com assessment, dashboards (ECharts), mapas de processo e roadmap (React Flow), backend/API e Postgres (Prisma). Pronto para deploy no Railway.

## Deploy no Railway
1. Crie um repositório no GitHub e faça push deste projeto.
2. No Railway: New Project > Deploy from GitHub Repo.
3. Adicione PostgreSQL (Plugin). Copie `DATABASE_URL` para as variáveis do serviço Web.
4. Build: `npm run build` | Start: `npm start`.
5. Migrações: abra Shell e rode `npx prisma migrate deploy`.
6. Acesse a URL pública.

Rotas: `/` (Assessment), `/dashboard`, `/processes`, `/roadmap`, API: `POST /api/assess`, `GET /api/results`.
