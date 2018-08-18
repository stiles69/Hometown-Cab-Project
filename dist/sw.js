importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown-cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.1e4dbac501f49b2d4863.js",
    "revision": "0a29a7b3928710f19f1d640d0c7ed4f9"
  },
  {
    "url": "/_nuxt/layouts/default.4d7331070cc3a827754c.js",
    "revision": "1bd0ab716b6978dbd8c39204cf88d0c0"
  },
  {
    "url": "/_nuxt/manifest.6c55f1cdc5ed291b1149.js",
    "revision": "aabb6e5862672242df7b0582d999083b"
  },
  {
    "url": "/_nuxt/pages/index.01fbc6d8a254bc435312.js",
    "revision": "5be48a4318d27498219bb12a12532707"
  },
  {
    "url": "/_nuxt/vendor.d7ab97ee3f9eb89fbed3.js",
    "revision": "f589a7125f6a5de6ae9b385b3d97890a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://hometown.cab/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

