<template>
    <div class="schedule2 grey-lighten-3">       
        <v-card>
            <v-container fluid grid-list-xs>
                <v-layout class="hidden-md-and-down" row>                
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">
                            <v-flex xs12>
                                <v-card-text>
                                    <div class="headline text-xs-center">{{ Hours1 }}</div>                                
                                </v-card-text>
                                <v-card-text>
                                    <div class="title text-xs-center">{{ Hours2 }}</div>
                                </v-card-text>
                            </v-flex>                        
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">                        
                            <v-flex xs12>
                                <v-card-text>                                    
                                    <div class="headline text-xs-center">{{ Hours3 }}</div> 
                                </v-card-text>
                                <v-card-text>                                    
                                    <div class="title text-xs-center">{{ Hours4 }}</div> 
                                </v-card-text>
                            </v-flex>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">                        
                            <v-flex xs12>
                                <v-card-text>                                    
                                    <div class="headline text-xs-center">{{ Hours5 }}</div> 
                                </v-card-text>
                                <v-card-text>                                    
                                    <div class="title text-xs-center">{{ Hours6 }}</div> 
                                </v-card-text>
                            </v-flex>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">                        
                            <v-flex xs12>
                                <v-card-text>                                    
                                    <div class="headline text-xs-center">{{ Hours7 }}</div> 
                                </v-card-text>
                                <v-card-text>                                    
                                    <div class="title text-xs-center">{{ Hours8 }}</div> 
                                </v-card-text>
                            </v-flex>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">                        
                            <v-flex xs12>
                                <v-card-text>                                    
                                    <div class="headline text-xs-center">{{ Hours9 }}</div> 
                                </v-card-text>
                                <v-card-text>                                    
                                    <div class="title text-xs-center">{{ Hours10 }}</div> 
                                </v-card-text>
                            </v-flex>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">                        
                            <v-flex xs12>
                                <v-card-text>                                    
                                    <div class="headline text-xs-center">{{ Hours11 }}</div> 
                                </v-card-text>
                                <v-card-text>                                    
                                    <div class="title text-xs-center">{{ Hours12 }}</div> 
                                </v-card-text>
                            </v-flex>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card color="blue-grey darken-2" class="white--text">                        
                            <v-flex xs12>
                                <v-card-text>                                    
                                    <div class="headline text-xs-center">{{ Hours13 }}</div> 
                                </v-card-text>
                                <v-card-text>                                    
                                    <div class="title text-xs-center">{{ Hours14 }}</div> 
                                </v-card-text>
                            </v-flex>
                        </v-card>
                    </v-flex>                                                                 
                </v-layout>
                <v-layout class="hidden-lg-and-up" column>
                    <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">
                                <v-flex xs12>
                                    <v-card-text>
                                        <div class="title text-xs-center">{{ Hours1 }}</div>                                
                                    </v-card-text>
                                    <v-card-text>
                                        <div class="subheading text-xs-center">{{ Hours2 }}</div>
                                    </v-card-text>
                                </v-flex>                        
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">                        
                                <v-flex xs12>
                                    <v-card-text>                                    
                                        <div class="title text-xs-center">{{ Hours3 }}</div> 
                                    </v-card-text>
                                    <v-card-text>                                    
                                        <div class="subheading text-xs-center">{{ Hours4 }}</div> 
                                    </v-card-text>
                                </v-flex>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">                        
                                <v-flex xs12>
                                    <v-card-text>                                    
                                        <div class="title text-xs-center">{{ Hours5 }}</div> 
                                    </v-card-text>
                                    <v-card-text>                                    
                                        <div class="subheading text-xs-center">{{ Hours6 }}</div> 
                                    </v-card-text>
                                </v-flex>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">                        
                                <v-flex xs12>
                                    <v-card-text>                                    
                                        <div class="title text-xs-center">{{ Hours7 }}</div> 
                                    </v-card-text>
                                    <v-card-text>                                    
                                        <div class="subheading text-xs-center">{{ Hours8 }}</div> 
                                    </v-card-text>
                                </v-flex>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">                        
                                <v-flex xs12>
                                    <v-card-text>                                    
                                        <div class="title text-xs-center">{{ Hours9 }}</div> 
                                    </v-card-text>
                                    <v-card-text>                                    
                                        <div class="subheading text-xs-center">{{ Hours10 }}</div> 
                                    </v-card-text>
                                </v-flex>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">                        
                                <v-flex xs12>
                                    <v-card-text>                                    
                                        <div class="title text-xs-center">{{ Hours11 }}</div> 
                                    </v-card-text>
                                    <v-card-text>                                    
                                        <div class="subheading text-xs-center">{{ Hours12 }}</div> 
                                    </v-card-text>
                                </v-flex>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">                        
                                <v-flex xs12>
                                    <v-card-text>                                    
                                        <div class="title text-xs-center">{{ Hours13 }}</div> 
                                    </v-card-text>
                                    <v-card-text>                                    
                                        <div class="subheading text-xs-center">{{ Hours14 }}</div> 
                                    </v-card-text>
                                </v-flex>
                            </v-card>
                        </v-flex>                                                                 
                    </v-layout>
            </v-container>
        </v-card>
    </div> 
</template>

<script>
import Constants from '~/components/constants.js'
import Versioner from '~/components/versioner.js'
export default {
	name: 'Schedule2',
	data() {
		return {
			companyname: Constants.companyname,
			telnum1: Constants.telnum1,
			telnum2: Constants.telnum2,
			Hours1: Constants.hours[0],
			Hours2: Constants.hours[1],
			Hours3: Constants.hours[2],
            Hours4: Constants.hours[3],
            Hours5: Constants.hours[4],
			Hours6: Constants.hours[5],
			Hours7: Constants.hours[6],
            Hours8: Constants.hours[7],
            Hours9: Constants.hours[8],
			Hours10: Constants.hours[9],
			Hours11: Constants.hours[10],
            Hours12: Constants.hours[11],
            Hours13: Constants.hours[12],
			Hours14: Constants.hours[13],		
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
@import '../assets/css/app.styl';
</style>
