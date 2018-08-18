importScripts('/_nuxt/workbox.3de3418b.js', 'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown-cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a607d638ead60472802a.js",
    "revision": "f22dad7eebbdb8100ea155d1f9e32919"
  },
  {
    "url": "/_nuxt/layouts/default.74121e086e30fe6e4c1b.js",
    "revision": "1349aa1764c2bb4b5a331a71f3974433"
  },
  {
    "url": "/_nuxt/manifest.0557f735bb8bdb2445ec.js",
    "revision": "fd4d92cd50903fd8ba6eda63a38d435d"
  },
  {
    "url": "/_nuxt/pages/index.4c0ab73e330b819c6046.js",
    "revision": "ae73af2e0c94105c7499f5dffdc44b61"
  },
  {
    "url": "/_nuxt/vendor.9d8942fb68ce18e19210.js",
    "revision": "400e2e5d0e165b8149d36f454154ec0f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://hometown.cab/.*'), workboxSW.strategies.networkFirst({}), 'GET')

