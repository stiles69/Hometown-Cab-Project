importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown-cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.23a16276565ac9f47d67.js",
    "revision": "23d31214536f9be1d81298cc5a0850b8"
  },
  {
    "url": "/_nuxt/layouts/default.d11017423bf9a3f472c8.js",
    "revision": "07e3a039a2f20f4a27f1b46ab1b0d40f"
  },
  {
    "url": "/_nuxt/manifest.b1e9aacbe3081a763982.js",
    "revision": "b690a393514f4eae7a441475a79b87f4"
  },
  {
    "url": "/_nuxt/pages/index.e8be89477bb51cd3740d.js",
    "revision": "377bc3ff9bd649e38bbea0247255af37"
  },
  {
    "url": "/_nuxt/vendor.09d62e2d737a609ef5de.js",
    "revision": "3a8bd40f0b3b0bc74ec50718eb39f0c2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

