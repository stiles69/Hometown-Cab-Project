import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/vuetify/dist/vuetify.css'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Hometown Cab","meta":[{"name":"robots","content":"noimageindex"},{"name":"googlebot","content":"noimageindex"},{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device - width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Hometown Cab"},{"hid":"author","name":"author","content":"admin@roguedesigns.us"},{"hid":"description","name":"description","content":"Hometown Cab Taxi Newton Iowa 50208 Jasper County Iowa 515-210-4111 641-275-9501"},{"hid":"theme-color","name":"theme-color","content":"#FDD835"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Hometown Cab Newton, Iowa 50208"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Hometown Cab"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Hometown Cab Taxi Newton Iowa 50208 Jasper County Iowa 515-210-4111 641-275-9501"},{"hid":"og:url","name":"og:url","property":"og:url","content":"https:\u002F\u002Fhometown.cab"},{"hid":"og:image","name":"og:image","property":"og:image","content":"https:\u002F\u002Fhometown.cab\u002Ficons\u002Ficon-512x512.png"},{"hid":"og:image:width","name":"og:image:width","property":"og:image:width","content":512},{"hid":"og:image:height","name":"og:image:height","property":"og:image:height","content":512},{"hid":"og:image:type","name":"og:image:type","property":"og:image:type","content":"image\u002Fpng"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700|Material+Icons"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.a2dfd1da.json"},{"rel":"shortcut icon","href":"\u002Ficons\u002Ficon-32x32.png"},{"rel":"apple-touch-icon","href":"\u002Ficons\u002Ficon-512x512.png","sizes":"512x512"}],"css":[{"src":".\u002Fassets\u002Fcss\u002Fapp.styl","lang":"styl"}],"style":[],"script":[{"src":"\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id=GTM-K2PTPX5&l=dataLayer","async":true}],"htmlAttrs":{"lang":"en"}},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

