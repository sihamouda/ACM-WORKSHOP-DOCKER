#  layer
FROM node:slim

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 5000

CMD [ "npm","run","start" ]