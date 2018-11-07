importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.91c40625becd49eda5fb.js",
    "revision": "b6f12d1b052586b8d0faa266b5477a51"
  },
  {
    "url": "/_nuxt/layouts/default.52f27cd459eb5605367b.js",
    "revision": "8519f29842b75e667dccbada095ada9a"
  },
  {
    "url": "/_nuxt/manifest.16fbba1aafb54f7c2db4.js",
    "revision": "10661092e78ff6e0af15882da4f73fbe"
  },
  {
    "url": "/_nuxt/pages/index.9da0b10b3f7b0f6a5911.js",
    "revision": "5b5581153b533b71e95d4af5625403e9"
  },
  {
    "url": "/_nuxt/vendor.2f0191b224a85871c14a.js",
    "revision": "e52306f5ba911427928f7cf63a4d97e7"
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





