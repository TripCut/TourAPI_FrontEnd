# 베이스 이미지
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

# 의존성 설치 단계
FROM base AS deps
WORKDIR /next/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 빌드 단계
FROM base AS builder
WORKDIR /next/app

# 의존성 먼저 복사
COPY --from=deps /next/app/node_modules ./node_modules

# 앱 소스 복사는 나중에
COPY . .

RUN yarn build

# 실행 단계
FROM base AS runner
WORKDIR /next/app
RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

# 빌드 산출물 복사
COPY --from=builder --chown=nextjs:nodejs /next/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /next/app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /next/app/public ./public

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
