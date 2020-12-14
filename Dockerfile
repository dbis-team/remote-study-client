FROM node:14.15.0-alpine3.10 as build

ARG REACT_APP_STORE_SERVICE_URL
ARG REACT_APP_CORE_API_URL

WORKDIR /app

RUN npm i -g typescript@^4.0.3

COPY ./package*.json ./tsconfig.json ./
RUN npm i

COPY ./src /app/src
COPY ./public /app/public 
RUN printf "REACT_APP_STORE_SERVICE_URL=$REACT_APP_STORE_SERVICE_URL\nREACT_APP_CORE_API_URL=$REACT_APP_CORE_API_URL\n" | tee .env
COPY ./.env /app/

RUN npm run build && rm /app/.env

#
# Run nginx
#
FROM nginx:stable-alpine
RUN apk add gettext

COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.template /etc/nginx/nginx.template

COPY ./start-nginx.sh ./start-nginx.sh

ENTRYPOINT ["sh", "./start-nginx.sh"]
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
