FROM node:12-alpine
COPY package* /api/
WORKDIR /api
RUN ls -al
RUN npm ci
RUN npm i -g pm2
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["pm2-runtime", "start", "--name", "jira_api", "node", "--", "-r", "./tsconfig-paths.js", "build/index.js"]