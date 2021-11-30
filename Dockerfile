FROM node:14-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

RUN apk --no-cache add curl

COPY . .

EXPOSE 4200
EXPOSE 3333

CMD ["npx", "nx", "serve", "web"]
CMD ["npx", "nx", "serve", "api"]
