import {Api} from '@roots/bud-typings'

export const vendor: Api.Vendor = function () {
  this.features.enable('splitChunks')
  return this
}
