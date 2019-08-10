self.__precacheManifest = [
  {
    "url": "/share-cost-table/_next/static/8FPsvh7r8xsMjNhWj872L/pages/_app.js",
    "revision": "dd1915c3193222d233ac"
  },
  {
    "url": "/share-cost-table/_next/static/8FPsvh7r8xsMjNhWj872L/pages/_error.js",
    "revision": "56c36b629c0996c9830b"
  },
  {
    "url": "/share-cost-table/_next/static/8FPsvh7r8xsMjNhWj872L/pages/index.js",
    "revision": "8f1a5974c0ed073202b4"
  },
  {
    "url": "/share-cost-table/_next/static/chunks/commons.6038c72c5d09c1ed182e.js",
    "revision": "be99b8f5cf0c31379f97"
  },
  {
    "url": "/share-cost-table/_next/static/runtime/main-bc7a243f3d3a2b4ec7bf.js",
    "revision": "ee217a34fe843f7fc751"
  },
  {
    "url": "/share-cost-table/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
