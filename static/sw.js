importScripts('/_nuxt/workbox.3de3418b.js', 'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown-cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.73126295e65cf0bc24a6.js",
    "revision": "8961bbbbe99144033ffe71ee8e03700f"
  },
  {
    "url": "/_nuxt/layouts/default.2940d9adc8d7582ec152.js",
    "revision": "315a755cda31cddbbabceb915a890d0c"
  },
  {
    "url": "/_nuxt/manifest.1626aa01928a579a1e1a.js",
    "revision": "a233219be5879189420bb85cb2c0ebb8"
  },
  {
    "url": "/_nuxt/pages/index.5c2975990209d187515c.js",
    "revision": "f6fb59c22b6b871b4961b6d97424f263"
  },
  {
    "url": "/_nuxt/vendor.d7ab97ee3f9eb89fbed3.js",
    "revision": "f589a7125f6a5de6ae9b385b3d97890a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://hometown.cab/.*'), workboxSW.strategies.networkFirst({}), 'GET')

