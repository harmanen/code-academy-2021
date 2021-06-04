FROM node:14.15.4-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD [ "node", "index.js" ]