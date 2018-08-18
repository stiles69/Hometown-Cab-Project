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
    "url": "/_nuxt/layouts/default.bec8041942b78ef781d0.js",
    "revision": "8a372ca14511118f059b90742b476f8b"
  },
  {
    "url": "/_nuxt/manifest.06b47d51d68ba518706e.js",
    "revision": "e48661ba7a7c96dd0405330c21184d0d"
  },
  {
    "url": "/_nuxt/pages/index.4f153b8da3ef8e2fa5c2.js",
    "revision": "ab92dd2964521bc44471c71116e5483b"
  },
  {
    "url": "/_nuxt/vendor.9d8942fb68ce18e19210.js",
    "revision": "400e2e5d0e165b8149d36f454154ec0f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://hometown.cab/.*'), workboxSW.strategies.networkFirst({}), 'GET')

