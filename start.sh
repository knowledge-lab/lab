#!/usr/bin/env bash

node_modules/.bin/bower install

node_modules/.bin/grunt less

node_modules/.bin/http-server -p $OPENSHIFT_NODEJS_PORT -a $OPENSHIFT_NODEJS_IP
node_modules/.bin/json-server db.json