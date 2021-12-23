FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
ENV NEXT_TELEMETRY_DISABLED 1

RUN echo NEXT_PUBLIC_EVALUATE_API_HOST=$EVALUATE_API_URL >> .env.production
COPY . /app

RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

RUN apk add --no-cache libc6-compat

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/docker ./docker
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env.production ./

EXPOSE 3000
ADD ./docker/start.sh /start.sh
RUN chmod 755 /start.sh
RUN chown -R nextjs:nodejs /app
USER nextjs

CMD ["/bin/sh", "/start.sh"]
