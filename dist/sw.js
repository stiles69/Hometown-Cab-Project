importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown-cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.851b7896c2e046b9de1b.js",
    "revision": "9d89c9c19fe362487280223e28b1b5cf"
  },
  {
    "url": "/_nuxt/layouts/default.9e6bd653d718ea5f6a71.js",
    "revision": "76f38916fd5f4e77cb54700bb26e52d1"
  },
  {
    "url": "/_nuxt/manifest.6ca2225fee64e1e1919f.js",
    "revision": "07401832b9a7b40573fc469b70301dd9"
  },
  {
    "url": "/_nuxt/pages/index.096ec1bc1e1c142238d1.js",
    "revision": "b383e2a5e8b27689366e414e77a665e9"
  },
  {
    "url": "/_nuxt/vendor.cb0f2c6d4883c5f4046f.js",
    "revision": "beb3f3bddc15a31076201c9af18385d5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

