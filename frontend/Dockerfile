# Build stage
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# 👇 Fix: Explicitly listen on 8080
EXPOSE 8080

# 👇 Replace default nginx config with one that listens on 8080
RUN sed -i 's/80;/8080;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

