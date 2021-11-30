FROM node:14-alpine as netmatch-app

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

RUN apk --no-cache add curl

# ===============================

FROM netmatch-app as netmatch-web

COPY ./apps/web/ .

EXPOSE 4200

CMD ["npx", "nx", "serve", "web", "--host=0.0.0.0"]

# ===============================

FROM netmatch-app as netmatch-api

COPY ./apps/api/ .

EXPOSE 3333

CMD ["npx", "nx", "serve", "api", "--host=0.0.0.0"]
