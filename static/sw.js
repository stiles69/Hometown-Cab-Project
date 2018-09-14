importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ed6514c97cc395311321.js",
    "revision": "0bee1d7fef83692edbbb636721cdaa15"
  },
  {
    "url": "/_nuxt/layouts/default.8a7bfb8d26c1d9f61300.js",
    "revision": "87df0819c901752aa22ea1aafe20240b"
  },
  {
    "url": "/_nuxt/manifest.9e9c711eb26e70bee856.js",
    "revision": "3dfa7e9c933b20063f51dd7614b3bd63"
  },
  {
    "url": "/_nuxt/pages/index.2dd8b5569612526ddf71.js",
    "revision": "176710f23716e7e65ac5aa0683bd3d6d"
  },
  {
    "url": "/_nuxt/vendor.a287b8957aa73de415dd.js",
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





