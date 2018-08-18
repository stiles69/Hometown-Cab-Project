importScripts('/_nuxt/workbox.3de3418b.js', 'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown-cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.3cc37b1bcef162a72bc0.js",
    "revision": "53f26bfc01a978952993a4d47f8f5f8c"
  },
  {
    "url": "/_nuxt/layouts/default.40670b7dca50dd682bd2.js",
    "revision": "2c38e324703aeb46252a0003498154de"
  },
  {
    "url": "/_nuxt/manifest.ed7d1724f3303144578e.js",
    "revision": "809712493f759781ee4759c467e7b8ca"
  },
  {
    "url": "/_nuxt/pages/index.3c985c7a8f35137f75e9.js",
    "revision": "dc56ddfa3dad163686428983e07a3487"
  },
  {
    "url": "/_nuxt/vendor.9d8942fb68ce18e19210.js",
    "revision": "400e2e5d0e165b8149d36f454154ec0f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://hometown.cab/.*'), workboxSW.strategies.networkFirst({}), 'GET')

