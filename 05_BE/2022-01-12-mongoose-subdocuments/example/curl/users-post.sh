#!/usr/bin/env bash

source ../.env

curl -X POST -i http://localhost:$PORT/users
