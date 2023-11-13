FROM node:20.8.0

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app/
EXPOSE 3002

CMD ["npm", "run", "dev"]