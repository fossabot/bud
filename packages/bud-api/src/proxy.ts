import {Api} from '@roots/bud-typings'

const props = ['host', 'port']

export const proxy: Api.Proxy = function (config) {
  this.features.set('proxy', config?.enabled ?? true)

  config &&
    props.forEach(prop => {
      config[prop] &&
        this.server.config.set(`proxy.${prop}`, config[prop])
    })

  return this
}
