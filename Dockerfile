FROM ubuntu:18.04
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

RUN npm run --script build

CMD node dist/main.js

