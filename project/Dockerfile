FROM node:alpine

WORKDIR usr/src/app

RUN adduser -S appuser

COPY package* ./

RUN npm ci

COPY . .

USER appuser

EXPOSE 3000

CMD ["npm", "start"]