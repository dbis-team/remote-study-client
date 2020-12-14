FROM node:14.15.0-alpine3.10 as build

WORKDIR /app

RUN npm i -g typescript@^4.0.3

COPY ./package*.json ./tsconfig.json ./
RUN pwd
RUN ls -l
RUN npm i

COPY ./src /app/src
COPY ./public /app/public 

RUN printf "REACT_APP_STORE_SERVICE_URL=$REACT_APP_STORE_SERVICE_URL\nREACT_APP_CORE_API_URL=$REACT_APP_CORE_API_URL\n"
RUN printf "REACT_APP_STORE_SERVICE_URL=$REACT_APP_STORE_SERVICE_URL\nREACT_APP_CORE_API_URL=$REACT_APP_CORE_API_URL\n" | tee .env
RUN npm run build && rm /app/.env

#
# Run nginx
#
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]