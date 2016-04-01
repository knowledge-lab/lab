#!/usr/bin/env bash

node_modules/.bin/grunt less

node_modules/.bin/http-server -p $OPENSHIFTzz_NOzzDEJS_PORT -a $OPENSHIFT_NODEJS_IP