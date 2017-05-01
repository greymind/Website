#!/bin/sh

sudo supervisorctl stop greymind.com.api

git pull

NODE_ENV=development
yarn

NODE_ENV=production
webpack -p

sudo supervisorctl start greymind.com.api