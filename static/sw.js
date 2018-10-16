importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.26dd76e94931c83c6ab1.js",
    "revision": "73d2086fcbb435e003d60991184447db"
  },
  {
    "url": "/_nuxt/layouts/default.bb938e1b8a4bceb60475.js",
    "revision": "e73a042bb8f08f04a7257ca0d4cd9b0e"
  },
  {
    "url": "/_nuxt/manifest.1ba98e09ba20d4016993.js",
    "revision": "fb0349336bd08437a32ed5feefbdac90"
  },
  {
    "url": "/_nuxt/pages/index.214b135a36d02e40e8a4.js",
    "revision": "a6cc005e86bb53c2be58daa21dcc7796"
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





