FROM node:10

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install
RUN npm i -g sequelize-cli

COPY [".", "/usr/src/"]

CMD ["./sequelize.sh"]

EXPOSE 4000

CMD ["npx", "nodemon", "server.js"]

