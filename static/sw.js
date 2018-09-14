importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ed6514c97cc395311321.js",
    "revision": "0bee1d7fef83692edbbb636721cdaa15"
  },
  {
    "url": "/_nuxt/layouts/default.7a3f593206af1fa708ff.js",
    "revision": "c3d956b8dbfcaf769260a9fefb2e2875"
  },
  {
    "url": "/_nuxt/manifest.cb76c0f4ce13c47f6ee8.js",
    "revision": "ae905920ac6971d16dafadd6caece599"
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





