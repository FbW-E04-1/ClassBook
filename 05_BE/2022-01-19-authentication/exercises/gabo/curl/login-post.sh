#!/usr/bin/env bash

cd $(dirname $0)

source ../.env

curl -X POST -H 'Content-Type: application/json' -i http://localhost:$PORT/login --data '{
  "email": "alice@example.com",
  "password": "1234"
}'
