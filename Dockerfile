FROM node:20-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

ARG NEXT_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_CLIENT_URL

ARG NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID
ARG NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI

ARG NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID
ARG NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI

ARG NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID
ARG NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI

ARG NEXT_PUBLIC_PREGISNED_URL

ENV NODE_ENV=production
ENV NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL}
ENV NEXT_PUBLIC_CLIENT_URL=${NEXT_PUBLIC_CLIENT_URL}

ENV NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}
ENV NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI=${NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}

ENV NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID=${NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID}
ENV NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI=${NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI}

ENV NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID=${NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}
ENV NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI=${NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI}

ENV NEXT_PUBLIC_PREGISNED_URL=${NEXT_PUBLIC_PREGISNED_URL}

RUN npm install -g pnpm@8.15.1

RUN pnpm i -P

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]