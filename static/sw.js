importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.5b3404febc62203590fa.js",
    "revision": "64ac81e00f3dd7de9bfdfa2c271518a4"
  },
  {
    "url": "/_nuxt/layouts/default.8124154a8ccb49675ff3.js",
    "revision": "c06047c8d4f9c7ece276621810927936"
  },
  {
    "url": "/_nuxt/manifest.9fb1eb2b0bd9fb32b580.js",
    "revision": "e4c02782ea2681feaee2d0a58c290fc5"
  },
  {
    "url": "/_nuxt/pages/index.684e88ea5f3019de584e.js",
    "revision": "1533997b55c5ef2b91e3368f5a3430a8"
  },
  {
    "url": "/_nuxt/pages/location.185d002a6085f45ec069.js",
    "revision": "72fa4a003f05e7e8f330cb0b65b561e8"
  },
  {
    "url": "/_nuxt/vendor.122b3ab1368adf340ee3.js",
    "revision": "c81d57b8e1639b5e135833f567581033"
  }
], {
  "cacheId": "hometown-cab",
  "directoryIndex": "index.html",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





