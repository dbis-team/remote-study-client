#! /usr/bin/env bash

envsubst '$PORT' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf
exec "$@"
