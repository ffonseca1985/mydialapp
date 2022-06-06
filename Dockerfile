FROM node:14-alpine as restore

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:14-alpine as build
WORKDIR /app
COPY --from=restore /app .
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

