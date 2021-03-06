// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires, no-param-reassign */
const withOffline = require('next-offline');
const withManifest = require('next-manifest');
const withTM = require('next-transpile-modules');
const webpack = require('webpack');
const publicRuntimeConfig = require('./ next.publicRuntimeConfig');

const { projectName, linkPrefix, prodAssetPrefix, serviceWorkerFilename } = publicRuntimeConfig;

module.exports = withManifest(
  withOffline(
    withTM({
      transpileModules: ['typeorm/browser'],
      experimental: { publicDirectory: true },
      // webpack config
      webpack: (config, { isServer }) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            'window.SQL': 'sql.js/dist/sql-wasm.js',
          })
        );
        if (!isServer) {
          config.node = {
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
          };
        }
        return config;
      },

      // service-worker settings
      registerSwPrefix: prodAssetPrefix,
      scope: `${prodAssetPrefix}/`,
      workboxOpts: {
        swDest: serviceWorkerFilename,
        globPatterns: ['app/static/**/*'],
        globDirectory: '.',
        modifyURLPrefix: {
          app: linkPrefix,
        },
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200,
              },
            },
          },
        ],
      },

      manifest: {
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: projectName,
        name: projectName,
        start_url: `${prodAssetPrefix}/`,
        background_color: 'red',
        display: 'standalone',
        scope: `${prodAssetPrefix}/`,
        dir: 'ltr',
        theme_color: 'red',
        icons: [
          {
            src: `${prodAssetPrefix}/static/icons/icon192x192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `${prodAssetPrefix}/static/icons/icon512x512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        /* eslint-enable @typescript-eslint/camelcase */
      },

      // cdn settings
      assetPrefix: linkPrefix,
      publicRuntimeConfig,
    })
  )
);
