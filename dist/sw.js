/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_nuxt/app.ed6514c97cc395311321.js",
    "revision": "0bee1d7fef83692edbbb636721cdaa15"
  },
  {
    "url": "_nuxt/icons/icon_120.8cMy4ycy230.png",
    "revision": "248733db2794d97e293777f8704f8a96"
  },
  {
    "url": "_nuxt/icons/icon_144.8cMy4ycy230.png",
    "revision": "5c93a5d53c68e11ac621a518fcb5bbe6"
  },
  {
    "url": "_nuxt/icons/icon_152.8cMy4ycy230.png",
    "revision": "2b538753b37e48acf5bd910943099fc1"
  },
  {
    "url": "_nuxt/icons/icon_192.8cMy4ycy230.png",
    "revision": "1a1a3fc439d99e97ccec108da288bdb2"
  },
  {
    "url": "_nuxt/icons/icon_384.8cMy4ycy230.png",
    "revision": "02ba8b4999223bbf77ba1307e2de3962"
  },
  {
    "url": "_nuxt/icons/icon_512.8cMy4ycy230.png",
    "revision": "1564004b42156bbb44026062146fbc83"
  },
  {
    "url": "_nuxt/icons/icon_64.8cMy4ycy230.png",
    "revision": "8b8f6674697d7a85eaf06bc7243f4daa"
  },
  {
    "url": "_nuxt/img/Cover.43adf42.png",
    "revision": "43adf4258be83ae5c29039471ad9c048"
  },
  {
    "url": "_nuxt/layouts/default.4356fe1f338280510c68.js",
    "revision": "92f1fbb00e7d89201cd917698aa5d68a"
  },
  {
    "url": "_nuxt/manifest.7159fa65.json",
    "revision": "87386f8659fa2e5f7dd03f4d5fee1a08"
  },
  {
    "url": "_nuxt/manifest.93aa2f6a72364608b2b5.js",
    "revision": "99cd160b9da504c38033165964941b9c"
  },
  {
    "url": "_nuxt/pages/index.671a126315a67dff2c73.js",
    "revision": "49ef7c9adfe4de0cf3082cbad87846d9"
  },
  {
    "url": "_nuxt/sitemap-routes.json",
    "revision": "43eb2725d869c1e488de2877e17e891a"
  },
  {
    "url": "_nuxt/vendor.a287b8957aa73de415dd.js",
    "revision": "e52306f5ba911427928f7cf63a4d97e7"
  },
  {
    "url": "_nuxt/workbox.3ffff7b2.js",
    "revision": "3edc83f8abc192af8065f1bb30b71115"
  },
  {
    "url": "200.html",
    "revision": "6e461f80df32f2f54a233d74366b4a08"
  },
  {
    "url": "icon.png",
    "revision": "391e9bca4054ff618105203e80e9e018"
  },
  {
    "url": "index.html",
    "revision": "e9b1163886fee087a815043b03843533"
  },
  {
    "url": "README.md",
    "revision": "d42304ea28ed3b68f26884942ebe2e9b"
  },
  {
    "url": "sitemap.xml",
    "revision": "b67294891407eaa35d3ffb46ca34fecb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
