FROM node:16-alpine

VOLUME ["/plugin/node_modules"]

RUN npm config set legacy-peer-deps true

WORKDIR /plugin
COPY package.json .
RUN npm install
COPY . .

RUN chown root:root "/plugin"
RUN chown -R 1000:1000 "/root/.npm"

RUN npm install webpack -g
RUN npm install webpack-cli -g