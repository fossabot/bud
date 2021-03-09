// @ts-check
const {
  app,
  bud,
} = require('./../../packages/@roots/bud-preset-recommend')

app
  .devtool()
  .use(require('@roots/bud-tailwindcss'))
  .entry('bud-tailwind', ['app.css', 'app.js'])
  .run()
