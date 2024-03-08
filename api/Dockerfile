FROM node:12-alpine
COPY package* /api/
WORKDIR /api
RUN npm i
RUN npm i -g pm2
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["pm2", "start", "--name", "jira_api", "node", "--", "-r", "./tsconfig-paths.js", "build/index.js"]