importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.61ed8a4caaf1bcae2cb8.js",
    "revision": "d3df0aa82f3d16d22d3b6e4924dfe201"
  },
  {
    "url": "/_nuxt/layouts/default.24765538291ad9d4190c.js",
    "revision": "72501492eea57f7f01cb1e0e3caaf213"
  },
  {
    "url": "/_nuxt/manifest.444ba6639339715f0e26.js",
    "revision": "d545b684f7604f54e6725c6e15605fbf"
  },
  {
    "url": "/_nuxt/pages/index.2402c301770901d5fccb.js",
    "revision": "10c4735cd7fb95bdf04fc3d4ace12d23"
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





