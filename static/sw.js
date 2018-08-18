importScripts('/_nuxt/workbox.3de3418b.js', 'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown-cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e989ba5466166efb68d9.js",
    "revision": "348f251cbca327e5f8b7a4b9153b523b"
  },
  {
    "url": "/_nuxt/layouts/default.f175764a20e3aca021dc.js",
    "revision": "abcc9206145d4c30a1479728fffae166"
  },
  {
    "url": "/_nuxt/manifest.940a83e1a9f07445850a.js",
    "revision": "dbced2c07ed87cd53aa68a5c65ae385e"
  },
  {
    "url": "/_nuxt/pages/index.7b16d3865a552bf7cb92.js",
    "revision": "91e1c652d792d2936a9f103e754b4193"
  },
  {
    "url": "/_nuxt/vendor.9d8942fb68ce18e19210.js",
    "revision": "400e2e5d0e165b8149d36f454154ec0f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://hometown.cab/.*'), workboxSW.strategies.networkFirst({}), 'GET')

