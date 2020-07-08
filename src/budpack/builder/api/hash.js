/**
 * Enable or disable filename hashing of built assets. Unless specified, filename hashes will be created when running production builds.
 * @example bud.hash(true) // enable
 * @typedef {function (enabled: {boolean}) => {bud: {typeof import('./../index')}} hash
 * @param   {boolean} enabled - true to enable filename hashing.
 * @return  {typeof import('./../index')} bud
 */
const hash = function (enabled) {
  this.features.hash = enabled

  return this
}

export {hash}
