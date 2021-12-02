FROM node:14-alpine as build-step
WORKDIR /ui
COPY ["package.json", "yarn.lock", "./"]
RUN  yarn
COPY . .
RUN yarn build

FROM nginx:1.21.4-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /ui/build /usr/share/nginx/html