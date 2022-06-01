FROM node:alpine

WORKDIR usr/src/app

COPY package* ./

RUN npm ci

COPY . .

USER appuser

CMD ["npm", "start"]