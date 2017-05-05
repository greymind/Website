#!/bin/sh

git reset --HARD
git pull

NODE_ENV=development
yarn

NODE_ENV=production
webpack -p