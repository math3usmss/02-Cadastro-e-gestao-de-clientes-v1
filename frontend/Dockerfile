FROM node:24-slim AS base

WORKDIR /app

RUN corepack enable

RUN corepack prepare pnpm@11.0.8 --activate

# Development

FROM base AS development

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY frontend/package.json ./frontend/package.json
COPY backend/package.json ./backend/package.json
COPY shared/package.json ./shared/package.json

RUN pnpm install --frozen-lockfile

COPY . .

CMD ["pnpm", "--filter", "@starter/next", "dev"]

# Builder

FROM base AS builder

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY frontend/package.json ./frontend/package.json
COPY backend/package.json ./backend/package.json
COPY shared/package.json ./shared/package.json

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm --filter @starter/next... build

# Production

FROM base AS production

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY frontend/package.json ./frontend/package.json
COPY shared/package.json ./shared/package.json

RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/frontend/.next ./frontend/.next
COPY --from=builder /app/frontend/public ./frontend/public

CMD ["pnpm", "--filter", "@starter/next", "start"]
