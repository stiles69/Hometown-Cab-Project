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
    "url": "/_nuxt/layouts/default.6d6c7221171447dd2b0e.js",
    "revision": "c5a98b843bf4389005a4bb248feb37c7"
  },
  {
    "url": "/_nuxt/manifest.99ccaee179138826ec09.js",
    "revision": "1d53be0cd25581f347780f38a084d1cc"
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

