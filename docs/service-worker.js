self.__precacheManifest = [
  {
    "url": "/share-cost-table/_next/static/chunks/commons.7fc750dae4b34d56fc07.js",
    "revision": "9654cb64e61db5f6cb94"
  },
  {
    "url": "/share-cost-table/_next/static/runtime/main-bc7a243f3d3a2b4ec7bf.js",
    "revision": "ee217a34fe843f7fc751"
  },
  {
    "url": "/share-cost-table/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
  },
  {
    "url": "/share-cost-table/_next/static/rwqg3dW8wh1W8E8yZLfoU/pages/_app.js",
    "revision": "39d6ff7da8da6f83b03c"
  },
  {
    "url": "/share-cost-table/_next/static/rwqg3dW8wh1W8E8yZLfoU/pages/_error.js",
    "revision": "0a3c5c62be3423f3a3bc"
  },
  {
    "url": "/share-cost-table/_next/static/rwqg3dW8wh1W8E8yZLfoU/pages/index.js",
    "revision": "08ffb7eec7c571fa7b38"
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
