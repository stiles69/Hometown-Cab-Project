importScripts('/_nuxt/workbox.3de3418b.js', 'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

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
    "url": "/_nuxt/layouts/default.19349c041abe305b08eb.js",
    "revision": "f349e8c9e2c650c5aa547e494b3e6ed4"
  },
  {
    "url": "/_nuxt/manifest.48d4a11419c0c03cd870.js",
    "revision": "086420d628d9845796ffddba95c0519e"
  },
  {
    "url": "/_nuxt/pages/index.71e2c3503da0f25d8e85.js",
    "revision": "bf4d8890f273ea81fb6cbdef75472e59"
  },
  {
    "url": "/_nuxt/vendor.cb0f2c6d4883c5f4046f.js",
    "revision": "beb3f3bddc15a31076201c9af18385d5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://hometown.cab/.*'), workboxSW.strategies.networkFirst({}), 'GET')

