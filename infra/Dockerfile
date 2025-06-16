# 베이스 이미지
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

# 의존성 설치 단계
FROM base AS deps
WORKDIR /app
COPY next/package.json next/yarn.lock ./
COPY next ./
RUN yarn install --frozen-lockfile

# 빌드 단계
FROM base AS builder
WORKDIR /app
COPY --from=deps /app ./
RUN yarn build

# 실행 단계
FROM base AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

COPY --from=builder /app ./

USER nextjs
EXPOSE 3000
CMD ["yarn", "start"]
