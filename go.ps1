$env:NODE_ENV="production"
webpack -p
Remove-Item Env:\NODE_ENV
firebase deploy