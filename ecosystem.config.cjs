module.exports = {
  apps: [
    { name: "www",   cwd: "apps/www",   script: "node_modules/.bin/next", args: "start -p 3000", env: { NODE_ENV: "production" } },
    { name: "admin", cwd: "apps/admin", script: "node_modules/.bin/next", args: "start -p 3001", env: { NODE_ENV: "production" } },
    { name: "app",   cwd: "apps/app",   script: "node_modules/.bin/next", args: "start -p 3002", env: { NODE_ENV: "production" } }
  ]
}
