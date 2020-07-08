/**
 * Specify webpack devtool
 * @typedef {function (devtool: string) => {typoef import('./../index')}} devtool
 * @param   {string} devtool - webpack devtool to utilize
 * @return  {typeof import('./../index')}   bud
 */
const devtool = devtool => {
  this.options.devtool = devtool

  return this
}
