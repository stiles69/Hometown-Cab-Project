<template>
  <v-app>  
  <!-- Begin Main Content -->
  <!-- Start GeoLocation -->
  <v-card id='Location' raised color='white'>
    <v-toolbar dark color='primary' aria-label='Location Toolbar'>
      <v-toolbar-title class='title black--text'>GeoLocation</v-toolbar-title>      
    </v-toolbar>
  <v-card-text>
    <v-btn flat icon color='#AC8F0F' v-on:click='getLocation' aria-label='Get Location Button'><v-icon>my_location</v-icon></v-btn>
    <div id='startLat'></div>
    <div id='startLon'></div>
  </v-card-text>
  </v-card>
<GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px">
</GmapMap>
<div id='startLat'></div>
<div id='startLon'></div>
  <!-- End Main Content -->
  </v-app> 
</template>

<script>
//import Constants from '~/components/constants.js'
export default {
	name: 'location',
	data: function() {
		return {
		companyname: 'Hometown Cab'
	}
	},
	methods: {
    	  getLocation: function() {
    	  var startPos;
	  var geoSuccess = function(position) {
          startPos = position;
          document.getElementById('startLat').innerHTML = startPos.coords.latitude;
          document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    	  var geoError = function(error) {
      	  console.log('Error occurred. Error code: ' + error.code);
      	  // error.code can be:
      	  //   0: unknown error
          //   1: permission denied
          //   2: position unavailable (error response from location provider)
          //   3: timed out
    	};
    	  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
	}
}}

</script>
