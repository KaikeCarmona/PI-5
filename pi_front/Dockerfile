# Build da aplicação
FROM node:18 AS build
LABEL maintainer="kkaike371@gmail.com"
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Rodando a aplicação
FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
