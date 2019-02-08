importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.aa2e6c533215345d2533.js",
    "revision": "56f180918084be635506b49960f1f9ed"
  },
  {
    "url": "/_nuxt/layouts/default.92927332e84f9f19e715.js",
    "revision": "7a6bbd07829baa588e4407f19a910ae2"
  },
  {
    "url": "/_nuxt/manifest.4dc50bb62ea5166d103b.js",
    "revision": "cffc71f9d8859477a342e8a8cbd6cf41"
  },
  {
    "url": "/_nuxt/pages/index.443715d4376835a1a93d.js",
    "revision": "2275ff90ee33663ee9b5628ba609155b"
  },
  {
    "url": "/_nuxt/vendor.f9ea9189e23bd176dceb.js",
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





