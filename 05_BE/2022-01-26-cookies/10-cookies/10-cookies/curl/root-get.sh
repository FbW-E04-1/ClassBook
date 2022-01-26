#!/usr/bin/env bash

cd $(dirname $0)
source ../.env

curl -X GET -i http://localhost:${PORT}/
