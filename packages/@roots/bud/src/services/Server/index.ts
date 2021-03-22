import {express} from '@roots/bud-support'
import {Server as Base} from '@roots/bud-server'
import {config} from '../../bootstrap/config'

export class Server extends Base {
  /**
   * Service registration
   */
  public register(): void {
    this.instance = express()

    this.config = this.app.container({
      /**
       * Hostname
       *
       * @default localhost
       */
      host: config(['server.host', 'APP_HOST']),

      /**
       * Port
       *
       * @default localhost
       */
      port: config(['server.port', 'APP_PORT']),

      /**
       * Proxy
       *
       * @default {host:localhost,port:8000}
       */
      proxy: {
        host: config(['server.proxy.host', 'APP_PROXY_HOST']),
        port: config(['server.proxy.port', 'APP_PROXY_PORT']),
      },

      /**
       * File watcher options
       */
      watch: {
        files: config(['server.watch.files']),
        options: {
          persistent: config(['server.watch.options']),
        },
      },

      /**
       * Browser
       */
      browser: {
        log: config(['browser.log', 'APP_BROWSER_LOG']),
        indicator: config([
          'browser.indicator',
          'APP_BROWSER_INDICATOR',
        ]),
        overlay: config([
          'browser.overlay',
          'APP_BROWSER_ERROR_OVERLAY',
        ]),
      },

      /**
       * Enabled middlewares
       */
      middleware: {
        /**
         * Is proxy middleware enabled?
         */
        proxy: config([
          'server.middleware.proxy',
          'APP_MIDDLEWARE_PROXY',
        ]),

        /**
         * Is hot middleware enabled?
         */
        hot: config([
          'server.middleware.hot',
          'APP_MIDDLEWARE_HOT',
        ]),

        /**
         * Is dev middleware enabled?
         */
        dev: config([
          'server.middleware.dev',
          'APP_MIDDLEWARE_DEV',
        ]),
      },

      /**
       * Pass custom HTTP headers on each request.
       *
       * @example {"X-Custom-Header": "Tru tho"}
       */
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },

      /**
       * Specify HTTP request methods accepted by the server.
       *
       * @default ['GET','HEAD']
       */
      methods: config(['server.methods']),

      /**
       * Register custom extension mappings
       *
       * @default null
       */
      mimeTypes: null,
    })
  }
}
