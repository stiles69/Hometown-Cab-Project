<template>
  <v-app>
    <v-navigation-drawer app temporary v-model='drawer' class='HometownMenu' aria-label='Navigation Menu'>
      <v-list>        
        <v-list-tile value='true' v-for='(item, i) in items' v-bind:key='i' >
            <v-list-tile-action class='HometownLink'>
              <div class='HometownLink' @click="$vuetify.goTo(item.target, item.options)"><v-icon v-html='item.icon' aria-label='Navigation Button' class='HometownLink'></v-icon></div>                
            </v-list-tile-action>
          <div class='HometownLink' @click="$vuetify.goTo(item.target, item.options)"><v-list-tile-title v-text='item.title' aria-label='Navigation Title' class='HometownLink'></v-list-tile-title></div>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color='primary' class='white--text'>
      <v-toolbar-side-icon @click.stop='drawer = !drawer' aria-label='Navigation Button'></v-toolbar-side-icon>
      <v-toolbar-title v-text='title' class='black--text'></v-toolbar-title>
      <v-spacer></v-spacer>     
    </v-toolbar>
    <v-content>
        <nuxt />
    </v-content>  
     <v-footer dark color='primary' class='black--text' height='auto' aria-label='Footer'>
      <v-layout column>
        <div class='text-xs-center HometownFooter' aria-label='Company Name'>Hometown Cab</div>        
        <div class='hidden-sm-and-down text-xs-center HometownFooter' aria-label='Owned and Operated by'>Owned and Operated by</div>
        <div class='hidden-sm-and-down text-xs-center HometownFooter' aria-label='Owner'>{{ Owner }}</div>
        <div class='text-xs-center HometownFooter' aria-label='Copyright'>&copy; Copyright 2017 Hometown Cab</div>
        <div class='text-xs-center HometownFooter' aria-label='Version'>Version {{ Version }}</div>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Constants from '~/components/constants.js'
import Versioner from '~/components/versioner.js'
export default {
	name: 'default',
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			miniVariant: false,
			right: false,
			rightDrawer: false,
			title: 'Hometown Cab',
			items: [
				{
					icon: 'home',
					title: 'Home',
					target: '#app',
					options: '[ easing: "easeInOutQuad", duration: 800 ]'
				},
				{
					icon: 'contact_phone',
					title: 'Contact',
					target: '#contact',
					options: '[ easing: "easeInOutQuad", duration: 800 ]'
				},
				{
					icon: 'access_time',
					title: 'Hours',
					target: '#hours',
					options: '[ easing: "easeInOutQuad", duration: 800 ]'
				},
				{
					icon: 'attach_money',
					title: 'Pricing',
					target: '#pricing',
					options: '[ easing: "easeInOutQuad", duration: 800 ]'
				},
				{
					icon: 'local_taxi',
					title: 'Specials',
					target: '#specials',
					options: '[ easing: "easeInOutQuad", duration: 800 ]'
				},
				{
					icon: 'record_voice_over',
					title: 'Testimonials',
					target: '#testimonials',
					options: '[ easing: "easeInOutQuad", duration: 800 ]'
				}
			],
			companyname: Constants.companyname,
			telnum1: Constants.telnum1,
			telnum2: Constants.telnum2,
			Hours1: Constants.hours[0],
			Hours2: Constants.hours[1],
			Hours3: Constants.hours[2],
			Hours4: Constants.hours[3],
			oneWayPrice: Constants.onewayprice,
			roundTripPrice: Constants.roundtripprice,
			additionalStopPrice: Constants.additionalstopprice,
			Owner: Constants.ownername,
			Version: Versioner.version
		}
	}
}
</script>

<style lang='stylus'>
@import '../assets/stylus/app.styl'
</style>
