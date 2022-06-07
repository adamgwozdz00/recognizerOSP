FROM node:14-alpine as builder
WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .

ENV NODE_ENV production
RUN npm run build

FROM node:alpine as app
WORKDIR /app

COPY --from=builder /app/ ./

CMD ["npm", "run", "docker"]