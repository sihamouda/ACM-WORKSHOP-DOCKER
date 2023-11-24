#  layer
FROM node:18

EXPOSE 5000

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

CMD [ "npm","run","start" ]