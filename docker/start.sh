#!/bin/sh

find /app -type f -print0 | xargs -0 sed -i "s#{{PUBLIC_API_URL}}#$PUBLIC_API_URL#g"
find /app -type f -print0 | xargs -0 sed -i "s#{{PUBLIC_API_TOKEN}}#$PUBLIC_API_TOKEN#g"
find /app -type f -print0 | xargs -0 sed -i "s#{{EVALUATE_API_URL}}#$EVALUATE_API_URL#g"

node server.js
