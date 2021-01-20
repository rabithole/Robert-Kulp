import React from 'react';
import gooey from './ooweegooey.module.css';

function Gooey() {
  	return (
	 	<div id={gooey.wrapper}>

			<div id={gooey.topper}>
				<nav>
					<table  className={gooey.infoleft}>
						<tr>
					    	<td><a href="index.html">Home</a></td>        
							<td><a href="pricing.html">Pricing</a></td>
			    		</tr>
			    	</table>

				    <div className={gooey.logo}>
						<img src="images/graphic/logo1.png" alt="Oowee Gooey"></img>
					</div>
			    
			        <table className={gooey.inforight}>
						<tr>	
							<td><a href="contact.html">Contact</a></td>
							<td><a href="https://squareup.com/market/oowee-gooey-brownies">Buy Now</a></td>
						</tr>
					</table>
				</nav>
			</div>

			<hr />

			<div className={gooey.flavors}>
				<table>
					<tr>
						<td><a href="chocolate.html">Chocolate</a></td>
					</tr>
						
					<tr>
						<td><a href="whtchoc.html">White Chocolate</a></td>
					</tr>
						
					<tr>
						<td><a href="peanutbutter.html">Peanut Butter</a></td>
					</tr>
						
					<tr>
						<td><a href="specialty.html">Specialty</a></td>
					</tr>
					
					<tr>
						<td><a href="browniepop.html">Brownie Pops</a></td>
					</tr>
					<tr>
						<td><a href="brownie_bites.html">Brownie Bites</a></td>
					</tr>
				</table>	
				<a href="https://squareup.com/market/oowee-gooey-brownies" id={gooey.nav_buy}><img src="images/buttons/buy_button_3.png" alt="Buy Now"></img></a>
			</div>

			<div id={gooey.banner}>
				<img src="images/banner/New_Oowee_Banner.png" alt="banner"></img>
			</div>
			    
				<hr />
			    
			<div id={gooey.brownie_assortments}>
			        <figure>
			        				<figcaption className={gooey.caption_title}>Buy Assorted Brownies</figcaption>
			            <figure>
							<a href="https://squareup.com/market/oowee-gooey-brownies/assorted-brownie-gift"><img src="images/footer images/choc_with_shadow.png" alt="Chocolate Brownies"></img></a>
			    			<figcaption className={gooey.quantity}>One Dozen</figcaption>
			            </figure>
			            <figure>
			  				<a href="https://squareup.com/market/oowee-gooey-brownies/brownies"><img src="images/footer images/bites_2.png" alt="Brownie Bites"></img></a>
			            	<figcaption className={gooey.quantity}>Two Dozen</figcaption>
			            </figure>
			            <figure>
			            	<a href="https://squareup.com/market/oowee-gooey-brownies/brownies-1"><img src="images/footer images/choc_with_shadow.png" alt="Chocolate Brownies"></img></a>
			            	<figcaption className={gooey.quantity}>36 Brownies</figcaption>
			            </figure>
			            <figure>
			  				<a href="https://squareup.com/market/oowee-gooey-brownies/brownies-2"><img src="images/footer images/bites_2.png" alt="Brownie Bites"></img></a>
			            	<figcaption className={gooey.quantity}>48 Brownies</figcaption>
			            </figure>
			        </figure>
			</div>

			<div id={gooey.bite_assortments}>
		        <figure>
		        		<figcaption className={gooey.caption_title}>Buy Assorted Bites</figcaption>
		            <figure>
						<a href="https://squareup.com/market/oowee-gooey-brownies/brownie-bites"><img src="images/footer images/choc_with_shadow.png" alt="Chocolate Brownies"></img></a>
		    			<figcaption className={gooey.quantity}>24 bites</figcaption>
		            </figure>
		            <figure>
		  				<a href="https://squareup.com/market/oowee-gooey-brownies/brownie-bites-1"><img src="images/footer images/bites_2.png" alt="Brownie Bites"></img></a>
		            	<figcaption className={gooey.quantity}>36 Bites</figcaption>
		            </figure>
		            <figure>
		            	<a href="https://squareup.com/market/oowee-gooey-brownies/brownie-bites-2"><img src="images/footer images/choc_with_shadow.png" alt="Chocolate Brownies"></img></a>
		            	<figcaption className={gooey.quantity}>48 Bites</figcaption>
		            </figure>
		            <figure>
		  				<a href="https://squareup.com/market/oowee-gooey-brownies/brownie-bites-4"><img src="images/footer images/bites_2.png" alt="Brownie Bites"></img></a>
		            	<figcaption className={gooey.quantity}>96 Bites</figcaption>
		            </figure>
		        </figure> 
			</div>

			<div id={gooey.single_flavor}>
					<a href="https://squareup.com/market/oowee-gooey-brownies/dozen-brownies">
			        		<figcaption id={gooey.singleflavor}>Single Flavor Dozen</figcaption>
			        	<figure>
							<img src="images/footer images/choc_with_shadow.png" alt="Chocolate Brownies"></img>
			            	<figcaption className={gooey.quantity}>One Dozen</figcaption>
			        	</figure>
			        </a>
			</div>

			<hr />

			<footer>		
					<p> Copyright &copy; 2013 Oowee Gooey Brownies</p>
			    <figure>
					<a href="https://www.facebook.com/OoweeGooeyBrownies"><img src="images/link_icons/facebook_256_transparency.png" alt="Facebook"></img></a>
					<a><img src="images/link_icons/pinterest-icon.png" id={gooey.pinterest} alt="Pinterest"></img></a>
				</figure>  

		    	<table>
		    		<tr>
		        		<td><a href="index.html">Home Page</a></td>
		                <td><a href="pricing.html">Pricing</a></td>
		                <td><a href="contact.html">Contact</a></td>
		                <td><a href="blog.html">Blog</a></td>
		        	</tr>
		    	</table>
			</footer>
		</div>
	);
}

export default Gooey;
