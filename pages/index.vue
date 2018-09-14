<template>
  <v-app>  
  <!-- Begin Main Content -->
  <!--Begin Cover Image-->
  <img src='../assets/img/Cover.png' class='HometownImage' width='100%' aria-label='Cover Image' />    
  <!--End Cover Image-->
  <!--Begin Heading-->
  <v-layout column align-center>
    <div class='text-xs-center hidden-sm-and-down HometownTitleh4 font-weight-medium' aria-label='Company Name'>{{ companyname }}</div>
    <div class='text-xs-center hidden-sm-and-down HometownTitleh5 font-weight-medium' aria-label='Company Description'>Newton, Iowa Cab and Taxi Service</div>
    <div class='text-xs-center hidden-md-and-up HometownTitleh5 font-weight-medium' aria-label='Company Name'>{{ companyname }}</div>
    <div class='text-xs-center hidden-md-and-up HometownTitleh6 font-weight-medium' aria-label='Company Description'>Newton, Iowa Cab and Taxi Service</div>
  </v-layout>
  <!--End Heading-->
  <!--Begin News-->
  <v-card id='news' raised color='white' height='auto'>
    <v-toolbar dark color='primary'>
      <v-toolbar-title class='title black--text' aria-label='Toolbar News'>News</v-toolbar-title>
    </v-toolbar>   
    <v-card-text>
      <div class='hidden-sm-and-down text-xs-center headline font-weight-medium'>So far it's been a great experience & we thank you all for your support & hope you keep us in mind for your hometown cab needs.</div>
      <div class='hidden-md-and-up text-xs-center title font-weight-medium'>So far it's been a great experience & we thank you all for your support & hope you keep us in mind for your hometown cab needs.</div>
    </v-card-text>
  </v-card>
  <!--End News-->
  <!-- Begin Contact -->    
  <v-card id='contact' raised color='white' height='auto'>
    <v-toolbar dark color='primary'>
      <v-toolbar-title class='title black--text' aria-label='Toolbar Contact'>Contact</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <p class='title font-weight-medium'>        
	      <v-icon>phone</v-icon><a href='tel:' {{ telnum1 }}>{{ telnum1 }}</a><span> </span>
        <v-btn flat icon color='#AC8F0F' v-on:click='customTextToClipboard1' aria-label='Copy Telephone Number 2'><v-icon>content_copy</v-icon></v-btn>
      </p>
      <p class='title font-weight-medium'>
	      <v-icon>phone</v-icon><a href='tel:' {{ telnum2 }}>{{ telnum2 }}</a><span> </span>
        <v-btn flat icon color='#AC8F0F' v-on:click='customTextToClipboard2' aria-label='Copy Telephone Number 1'><v-icon>content_copy</v-icon></v-btn>
      </p>
    </v-card-text>
  </v-card>    
  <!-- End Contact -->
  <!-- Begin Hours -->
  <v-card id='hours' raised color='white' height='auto'>
    <v-toolbar dark color='primary' aria-label='Toolbar Hours of Operation'>
      <v-toolbar-title class='title black--text'>
        Hours of Operation
      </v-toolbar-title>
    </v-toolbar>
    <v-card-title>
      <div class='title font-weight-medium'>{{ Hours1 }}</div>      
    </v-card-title>
    <v-card-title>
      <div class='subheading font-weight-medium'>{{ Hours2 }}</div>     
    </v-card-title>
    <v-divider></v-divider>
    <v-card-title>
      <div class='title font-weight-medium'>{{ Hours3 }}</div>
    </v-card-title>
    <v-card-title>
      <div class='subheading font-weight-medium'>{{ Hours4 }}</div>
    </v-card-title>
   <v-divider></v-divider>
    <v-card-title>
      <div class='title font-weight-medium'>Open 7 Days a Week</div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-title>
      <div class='subheading font-italic font-weight-medium'>We take advance reservations for those with Late/Early work schedules.</div>
      </v-card-title>
  </v-card>
  <!-- End Hours -->
  <!-- Begin Pricing -->
  <v-card id='pricing' raised color='white' height='auto'>
    <v-toolbar dark color='primary'>
      <v-toolbar-title class='title black--text' aria-label='Toolbar Pricing'>Pricing</v-toolbar-title>
    </v-toolbar>
    <v-card-title>
      <div class='title font-weight-medium'>{{ oneWayPrice }}</div>
    </v-card-title>
    <v-card-title>
      <div class='title font-weight-medium'>{{ roundTripPrice }}</div>
    </v-card-title>
    <v-card-title>
      <div class='title font-weight-medium'>{{ additionalStopPrice }}</div>
    </v-card-title>
    <hr>
    <v-card-title>
      <div class='subheading font-italic font-weight-medium'>*With a wait time of up to 15 minutes. ($3 Additional charge if over 15 minutes.)</div>
    </v-card-title>
    <v-card-title>
      <div class='subheading font-weight-medium'>Call dispatch for out of town pricing and availability.</div>      
    </v-card-title>
    <v-card-title>
      <div class='subheading font-weight-medium'>Keep in mind we offer multiple specials for weekly rates & discount coupons that you can ask your driver about or dispatch.</div>
    </v-card-title>    
  </v-card>
  <!-- End Pricing -->
  <!-- Begin Specials -->
  <v-card id='specials' raised color='white' height='auto'>
  <v-toolbar dark color='primary' aria-label='Toolbar Specials'>
    <v-toolbar-title class='title black--text'>
      Specials
    </v-toolbar-title>
  </v-toolbar>
  <v-card-title>
    <div class='subheading font-italic font-weight-medium'>We offer discounts for Seniors and Veterans.</div>    
  </v-card-title>  
  </v-card>
  <!-- End Specials -->
  <!-- Begin Testimonials -->
  <v-card id='testimonials' raised color='white'>
    <v-toolbar dark color='primary' aria-label='Toolbar Testimonials'>
      <v-toolbar-title class='title black--text'>Testimonials</v-toolbar-title>
    </v-toolbar>
    <v-card-title>
      <div class='title font-weight-medium'>Kelly Jo Zach</div>      
    </v-card-title>
    <v-card-text>
      <div class='subheading blockquote font-weight-medium'>
    Hometown Cab was my 'go to' cab, as I was searching for a solution to an issue with my license and a car needing lots of mechanical work. I contacted Bradd, and we agreed on an amount that worked for my budget and was fair to all parties involved. Hometown Cab is very good at offering monthly specials. They also cater to the shifts that manufacturers and businesses
                          schedule that may not fit within normal work hours.
      </div>
      <div class='subheading blockquote font-weight-medium'>
    The kindness I receive from Bradd and Chad has been very much appreciated. They always go above and beyond expectations that I had for a cab service. They assist elderly people to door with their groceries, or purchases. They truly
                          care about their riders.
      </div>
      <div class='subheading blockquote font-weight-medium'>
    The cabs are mechanically safe, very recognizable, and most importantly, they offer the BEST customer service. I have overheard Bradd talk to other clients. He educates clients very well on expectations and teaching the courtesies
                          of riding in a cab. He genuinely is concerned if someone may be running late, and he does everything to make sure he is getting the rider to their work, timely, and to their medical appointments timely.
      </div>
      <div class='subheading blockquote font-weight-medium'>
    Chad is quiet and kind. He has a strong professional personality. He cares greatly about the elderly clients, that their every concern is met with a smile and impeccable service.
      </div>
      <div class='subheading blockquote font-weight-medium'>
          This cab service has set the bar very high. Bradd and Chad, not only offer safe transportation but excel in service, cleanliness, and compliance.
      </div>  
    </v-card-text>
    <v-card-title>
      <div class='title font-weight-medium'>Kudos. HOMETOWN CAB!!!!</div>      
    </v-card-title>
  </v-card>
  <!-- End Testimonials -->
  <!-- End Main Content -->
  </v-app> 
</template>

<script>
import Constants from '~/components/constants.js'
export default {
	name: 'home',
	metaInfo: {
		title: 'Home Page',
		// override the parent template and just use the above title only
		titleTemplate: null
	},
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
	methods: {
		customTextToClipboard1: function() {
			var textArea = document.createElement('textarea')
			textArea.value = Constants.telnum1
			document.body.appendChild(textArea)
			textArea.select()
			try {
				document.execCommand('copy')
			} catch (err) {
				log.err
			}
			document.body.removeChild(textArea)
		},
		customTextToClipboard2: function(event) {
			var textArea = document.createElement('textarea')
			textArea.value = Constants.telnum2
			document.body.appendChild(textArea)
			textArea.select()
			try {
				document.execCommand('copy')
			} catch (err) {
				log.err
			}
			document.body.removeChild(textArea)
		}
	}
}
</script>
