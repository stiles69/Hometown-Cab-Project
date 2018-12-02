importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.aa2e6c533215345d2533.js",
    "revision": "56f180918084be635506b49960f1f9ed"
  },
  {
    "url": "/_nuxt/layouts/default.58e2d97a50accc81a79a.js",
    "revision": "79a74b86bd2b51e8024d967e4804271f"
  },
  {
    "url": "/_nuxt/manifest.244f7b6c5e0ef65521f2.js",
    "revision": "912028294f1f30f2df2aa2cc9fc23d07"
  },
  {
    "url": "/_nuxt/pages/index.7050788e90d3f74f9e74.js",
    "revision": "e9ad2d09ec1cd522fb3b332af369a54d"
  },
  {
    "url": "/_nuxt/vendor.489c7a645bd99ece1da7.js",
    "revision": "b8f6da36d714716045b8784a49d4de1d"
  }
], {
  "cacheId": "hometown-cab-app-cache",
  "directoryIndex": "index.html",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/_nuxt/'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/img/'), workbox.strategies.networkFirst({}), 'GET')





