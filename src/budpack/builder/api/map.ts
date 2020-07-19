/**
 * ## bud.map
 *
 * Enable or disable source-maps
 *
 * ### Example
 *
 * ```js
 * bud.map(true)
 * ```
 */
const map: Map = function (enabled: boolean): bud {
  this.features.map = enabled

  return this
}

export {map}

import type {bud} from '../'

export interface MapInterface {
  enabled: boolean,
}

export type Map = (MapInterface) => bud;
