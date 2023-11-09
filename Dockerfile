FROM node:20-alpine

COPY . /app
WORKDIR /app

RUN npm i -g yarn
RUN yarn install
RUN yarn build
CMD [ "yarn", "start" ]