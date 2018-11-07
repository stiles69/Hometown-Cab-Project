importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.53cc914bd4147ce55c84.js",
    "revision": "ee5acae48a77d7f10d33b5ca2277e50a"
  },
  {
    "url": "/_nuxt/layouts/default.fcc61cf9a780752dba24.js",
    "revision": "cbef4a41ca1a5b1bc0306aa1c26afbb4"
  },
  {
    "url": "/_nuxt/manifest.c2e9cd8ce008723fe215.js",
    "revision": "8f0792a6079db3fc05ede4073ef10bd4"
  },
  {
    "url": "/_nuxt/pages/index.95107b978a9334d1d183.js",
    "revision": "2f1682258345fc3de93d11dcab90c593"
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





