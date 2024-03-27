FROM node:21.7.1-alpine

WORKDIR /app

COPY /package-lock.json .

COPY /package.json .

RUN npm install

RUN npx expo install --fix

COPY . .

CMD [ "npx","expo","start" ]