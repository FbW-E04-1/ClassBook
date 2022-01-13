#!/usr/bin/env bash

source ../.env

curl -X GET -i http://localhost:$PORT/articles
