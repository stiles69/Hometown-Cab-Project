importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.aa2e6c533215345d2533.js",
    "revision": "56f180918084be635506b49960f1f9ed"
  },
  {
    "url": "/_nuxt/layouts/default.12ee5432f0c5c8031329.js",
    "revision": "332d31cb349640efbe21288b7454bcac"
  },
  {
    "url": "/_nuxt/manifest.5473a79619c7da48e562.js",
    "revision": "e3087707e34e6c4e8ffc97958d753775"
  },
  {
    "url": "/_nuxt/pages/index.cf292ba608c7139b3631.js",
    "revision": "441a644c43f9c68671963e9aa4affbd5"
  },
  {
    "url": "/_nuxt/vendor.489c7a645bd99ece1da7.js",
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





