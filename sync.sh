#!/bin/sh

git reset --hard
git pull

NODE_ENV=development
yarn

NODE_ENV=production
webpack -p