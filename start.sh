#!/usr/bin/env bash

echo radim

npm install

node_modules/.bin/bower install

node_modules/.bin/grunt less

node_modules/.bin/http-server