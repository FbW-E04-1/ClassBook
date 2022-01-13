#!/usr/bin/env bash

source ../.env

curl -X POST -H 'Content-Type: application/json' \
	-i http://localhost:$PORT/articles --data '{
  "title": "Article'\''s Title",
  "author": "61e01d67578826015efd1b0e",
  "text": "lorem ipsum..."
}'
