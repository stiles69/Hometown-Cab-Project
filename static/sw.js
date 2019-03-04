importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.9450280e715fd2cd7157.js",
    "revision": "7ef286339ef1a4dd2d6da72c8139c716"
  },
  {
    "url": "/_nuxt/layouts/default.2b81bccb824708139d2d.js",
    "revision": "00fa635fbe943d6f46e1fcbd890042b0"
  },
  {
    "url": "/_nuxt/manifest.de7a0dbb66472b97b29b.js",
    "revision": "0552c8a35717e63666ee568efc6210b7"
  },
  {
    "url": "/_nuxt/pages/index.00ea9dc9c6fedac68645.js",
    "revision": "96f8756ada52f4e4b1f31c773c431379"
  },
  {
    "url": "/_nuxt/vendor.d00e1f036b276ec1bc63.js",
    "revision": "79853523e2108d88d72966409642f279"
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





