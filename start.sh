#!/usr/bin/env bash

node_modules/.bin/gulp build

node_modules/.bin/http-server dist/ -p $OPENSHIFT_NODEJS_PORT -a $OPENSHIFT_NODEJS_IP
