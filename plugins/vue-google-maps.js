import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAqX9uvHyVp3Q_dwW_BOGwWzZ6j_9iIm3w'
		libraries: 'places'
	}
})
