#!/usr/bin/env bash

echo radim

node_modules/.bin/grunt less

node_modules/.bin/http-server -p $OPENSHIFT_NODEJS_PORT -a $OPENSHIFT_NODEJS_IP
