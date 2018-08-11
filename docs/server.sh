#!/usr/bin/env bash

cd ./docs/
./build.sh
ruby -run -e httpd ./dist/ -p 8000
