#!/usr/bin/env bash

echo radim

node_modules/.bin/grunt less

ode_modules/.bin/http-server -p $OPENSHIFT_NODEJS_PORT -a $OPENSHIFT_NODEJS_IP