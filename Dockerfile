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
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
  chmod +x envsubst && \
  mv envsubst /usr/local/bin
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.template /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
EXPOSE 80
