#!/usr/bin/env bash

# this is comment
# a special comment on the first line of a file, starting with "#!" is called the hashbang-line
# it defines the interpreter to be used for the rest of the file

source ../.env

curl -X POST -H 'Content-Type: application/json' -i http://localhost:$PORT/users --data '{
  "username": "albert",
  "password": "12345678",
  "age": 32,
  "address": {
    "street": "Main Street 42",
    "postalCode": "12345",
    "city": "Frankfurt"
  }
}'
