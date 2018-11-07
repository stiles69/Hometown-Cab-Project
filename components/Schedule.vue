<template>
    <div class="Schedule">       
         <v-layout>
            <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
                </v-card-title>

                <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Constants from '~/components/constants.js'
export default {
	name: 'Schedule.vue',	
	data: function() {
		return {
			companyname: Constants.companyname,
			telnum1: Constants.telnum1,
			telnum2: Constants.telnum2,
			Hours1: Constants.hours[0],
			Hours2: Constants.hours[1],
			Hours3: Constants.hours[2],
			Hours4: Constants.hours[3],
			oneWayPrice: Constants.onewayprice,
			roundTripPrice: Constants.roundtripprice,
			additionalStopPrice: Constants.additionalstopprice
		}
	},	
}
</script>

<style lang='stylus'>
@import '../assets/css/app.styl';
</style>

