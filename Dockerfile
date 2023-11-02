FROM node:lts-alpine 

WORKDIR /app


COPY package*.json ./


RUN yarn


COPY . .

EXPOSE 8080

RUN yarn build


CMD [ "yarn", "preview" ]