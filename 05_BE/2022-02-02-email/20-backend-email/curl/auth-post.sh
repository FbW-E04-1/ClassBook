#!/usr/bin/env bash

cd $(dirname $0)

source ../.env

curl -X POST \
  -H 'Content-Type: application/json' \
  -i http://localhost:$PORT/auth/ \
  --data '{
  "email": "admin@example.com",
  "password": "adminpassword"
}'
