FROM node:12-alpine
COPY package* /client/
WORKDIR /client
RUN npm i
RUN npm i -g pm2
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["pm2", "start", "--name", "jira_client", "server.js"]