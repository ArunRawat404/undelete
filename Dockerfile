FROM node:20

WORKDIR /undelete

COPY . .

RUN npm ci

EXPOSE 8080

CMD ["npm", "start"]