#!/usr/bin/env bash

cd $(dirname $0)

source ../.env

curl -X POST -H 'Content-Type: application/json' -i http://localhost:$PORT/users --data '{
  "email": "bob2@example.com",
  "password": "2222"
}'
