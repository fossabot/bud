import * as Babel from '@roots/bud-babel'
import * as Entrypoints from '@roots/bud-entrypoints'
import * as Eslint from '@roots/bud-eslint'
import * as PostCss from '@roots/bud-postcss'
import * as React from '@roots/bud-react'
import * as Stylelint from '@roots/bud-stylelint'
import * as Tailwind from '@roots/bud-tailwindcss'
import * as WordPressDependencies from '@roots/bud-wordpress-dependencies'
import * as WordPressExternals from '@roots/bud-wordpress-externals'
import * as WordPressManifests from '@roots/bud-wordpress-manifests'

import type {Sage} from './interface'

export const sage: Sage = {
  name: '@roots/sage',

  boot: app => {
    app
      .use([
        Babel,
        PostCss,
        Eslint,
        Stylelint,
        React,
        Tailwind,
        Entrypoints,
        WordPressDependencies,
        WordPressExternals,
        WordPressManifests,
      ])

      .setPath({
        storage: 'storage/bud',
        src: 'resources',
        dist: 'public',
      })

      .alias({
        '@fonts': app.path('src', 'fonts'),
        '@images': app.path('src', 'images'),
        '@scripts': app.path('src', 'scripts'),
        '@styles': app.path('src', 'styles'),
      })

      .provide({jquery: ['$', 'jQuery']})

      .when(
        app.isProduction,
        app =>
          app.minimize().hash().splitChunks().runtime('single'),
        app => app.proxy().devtool(),
      )
  },
}
