#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:8080/ --data '{
  "firstname": "Albert",
  "lastname": "Schweitzer"
}'
