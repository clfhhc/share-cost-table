self.__precacheManifest = [
  {
    "url": "/share-cost-table/_next/static/24Lbri4KBx8PhXC6tOMwW/pages/_app.js",
    "revision": "c8f0ff8aad4fdc6bac9b"
  },
  {
    "url": "/share-cost-table/_next/static/24Lbri4KBx8PhXC6tOMwW/pages/_error.js",
    "revision": "1781d01d4a68a833a718"
  },
  {
    "url": "/share-cost-table/_next/static/24Lbri4KBx8PhXC6tOMwW/pages/about.js",
    "revision": "210c83d699f6d45604d0"
  },
  {
    "url": "/share-cost-table/_next/static/24Lbri4KBx8PhXC6tOMwW/pages/index.js",
    "revision": "cdf1ffd062b477b02c12"
  },
  {
    "url": "/share-cost-table/_next/static/24Lbri4KBx8PhXC6tOMwW/pages/stats.js",
    "revision": "8a3d3e4ee5a6aa527a1b"
  },
  {
    "url": "/share-cost-table/_next/static/chunks/commons.c38b8a2d0425c03fa72c.js",
    "revision": "cae937e98804c93a6826"
  },
  {
    "url": "/share-cost-table/_next/static/runtime/main-9f512e9163db88af9766.js",
    "revision": "7008faa788fb16165f4e"
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
