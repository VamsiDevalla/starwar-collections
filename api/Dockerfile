FROM node:14-alpine as build-step
WORKDIR /api
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /api
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --only=production
COPY --from=build-step /api/build .
EXPOSE 8000
CMD ["npm", "run", "start"]
