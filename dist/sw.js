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
    "url": "/_nuxt/layouts/default.5ed47821bc320dfdb7b0.js",
    "revision": "8f3e518cdacd4fa76711b08233044270"
  },
  {
    "url": "/_nuxt/manifest.71ab012706055a5e4d63.js",
    "revision": "6f0e1f01d8c0891d64d26485a085eff0"
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

