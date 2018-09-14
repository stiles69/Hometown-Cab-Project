importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ed6514c97cc395311321.js",
    "revision": "0bee1d7fef83692edbbb636721cdaa15"
  },
  {
    "url": "/_nuxt/layouts/default.4356fe1f338280510c68.js",
    "revision": "92f1fbb00e7d89201cd917698aa5d68a"
  },
  {
    "url": "/_nuxt/manifest.93aa2f6a72364608b2b5.js",
    "revision": "99cd160b9da504c38033165964941b9c"
  },
  {
    "url": "/_nuxt/pages/index.671a126315a67dff2c73.js",
    "revision": "49ef7c9adfe4de0cf3082cbad87846d9"
  },
  {
    "url": "/_nuxt/vendor.a287b8957aa73de415dd.js",
    "revision": "e52306f5ba911427928f7cf63a4d97e7"
  }
], {
  "cacheId": "hometown-cab",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





