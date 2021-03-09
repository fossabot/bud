// @ts-check
const {
  app,
} = require('./../../packages/@roots/bud-preset-recommend')

app
  .devtool()
  .html({
    template: app.project('public/index.html'),
  })
  .entry('bud', ['app.css'])
  .run()
