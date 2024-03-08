FROM node:12-alpine
COPY package* /client/
WORKDIR /client
RUN ls -al
RUN npm ci
RUN npm i -g pm2
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["pm2-runtime", "start", "--name", "jira_client", "server.js", "--", "-H", "0.0.0.0"]