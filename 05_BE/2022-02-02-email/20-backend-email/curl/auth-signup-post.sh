#!/usr/bin/env bash

cd $(dirname $0)

source ../.env

curl -X POST \
  -H 'Content-Type: application/json' \
  -i http://localhost:$PORT/auth/signup \
  --data '{
  "email": "thomas.hofmann@digitalcareerinstitute.org",
  "password": "1234"
}'