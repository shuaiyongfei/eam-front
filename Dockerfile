FROM node:16.13.1 as test-target

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]