FROM node:alpine AS builder
WORKDIR /opt/app
COPY package.json .
RUN ["yarn"]
COPY . .
RUN ["yarn", "build"]

FROM nginx:alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]