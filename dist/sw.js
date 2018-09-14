importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.514107640bc002f95244.js",
    "revision": "70c47ac6522264e05ac6e7611256599e"
  },
  {
    "url": "/_nuxt/layouts/default.f0bc1c2d960ae715bc2a.js",
    "revision": "7d65e5f1e4ee140cc3c9a2988da78285"
  },
  {
    "url": "/_nuxt/manifest.26837309e50ddbdea99c.js",
    "revision": "4a73696e03649a8b4c40ffe60b18aa39"
  },
  {
    "url": "/_nuxt/pages/index.b8fb4e79a9063a4aca2a.js",
    "revision": "21e32520c6064f086ded8b77b8a7b019"
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





