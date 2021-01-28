import React from 'react';
import { NavLink } from 'react-router-dom';
import gooey from './ooweegooey.module.css';

function Pricing() {
  	return (
  		<div id={gooey.bodyWrap}>

  		<div id={gooey.wrapper}>
	
			<div id={gooey.topper}>
				<nav>
					<table  className={gooey.infoleft}>
						<tr>
					    	<td>
					    		<NavLink
					    			to='/gooey'>
					    		Home
					    		</NavLink>
					    	</td>        
							<td>
								<NavLink
									to='/gooey/pricing'>
								Pricing
							</NavLink>
							</td>
			    		</tr>
			    	</table>

				    <div className={gooey.logo}>
						<img src={require("./images/graphic/logo1.png")} alt="Oowee Gooey"></img>
					</div>
			    
			        <table className={gooey.inforight}>
						<tr>	
							<td>
								<NavLink
					    			to='/gooey/GooeyContact'>
					    			Contact
					    		</NavLink>
							</td>
							<td>
								<NavLink
									to='/gooey'
								>
								Buy Now
								</NavLink>
							</td>
						</tr>
					</table>
				</nav>
				
			</div>

			<hr />

			<div id={gooey.pricing}>
				
			<table>
				<caption><img src={require("./images/smallimages/Pricing-Text.png")} alt="Pricing"></img></caption>
				<tr>
					<th className={gooey.th}>Quantity</th>
					<th className={gooey.th}>12</th>
			        <th className={gooey.th}>24</th>
			        <th className={gooey.th}>36</th>
					<th className={gooey.th}>48</th>
			        <th className={gooey.th}>96</th>
				</tr>
				<tr>
					<th>Brownies</th>
					<td>$35.00</td>
			        <td>$69.00</td>
					<td>$103.00</td>
			        <td>$137.00</td>
			        <td></td>
				</tr>
				<tr>
					<th>Bites</th>
					<td></td>
			        <td>$21.00</td>
			        <td>$31.50</td>
					<td>$40.00</td>
			        <td>$80.00</td>
				</tr>
				<tr>
					<th>Brownie Pops</th>
					<td colspan="5">Not available for shipping.</td>
				</tr>
				<tr>
					<td colspan="6" className={gooey.add}>Choose your own flavors. Add $3.95</td>
				</tr>
				<tr>
					<td colspan="6" className={gooey.add}>Additional $1.00 per brownie for S'mores and Cookies n Cream. </td>
				</tr>
			    <tr>
			    	<td colspan="6" id={gooey.table_bottom}><b>Shipping:</b> <br /> 2-3 day ground <b>$12</b> <br /> Next Day delivery <b>$36</b> <br /> We recommend next day delivery June-October. </td>
			    </tr>
			</table>

			</div>	


				


			<div className={gooey.flavors}>
				<table>
					<tr>
						<td>
							<NavLink
								to='/gooey/chocolate'>
							Chocolate
							</NavLink>
						</td>
					</tr>
						
					<tr>
						<td>
							<NavLink
								to='/gooey/whiteChoc'>
								White Chocolate
							</NavLink>
						</td>
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
				<NavLink
					id={gooey.nav_buy}
					to='/gooey/pricing'>
					<img src={require("./images/buttons/Buy_button_3.png" )} alt="Buy Now"></img>
				</NavLink>
					
			</div>
				

				

				<hr />

			<div id={gooey.brownie_assortments}>
			        <figure>
        				<figcaption className={gooey.caption_title}>Buy Assorted Brownies</figcaption>
			            <figure>
			            	<NavLink
		            			to='/gooey/pricing'>
		            			<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
		            		</NavLink>
			    			<figcaption className={gooey.quantity}>One Dozen</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/pricing'>
		            		<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
		            		</NavLink>
			            	<figcaption className={gooey.quantity}>Two Dozen</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/pricing'>
		            		<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
		            		</NavLink>
			            	<figcaption className={gooey.quantity}>36 Brownies</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/pricing'>
		            		<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
		            		</NavLink>
			            	<figcaption className={gooey.quantity}>48 Brownies</figcaption>
			            </figure>
			        </figure>
				</div>

			<div id={gooey.bite_assortments}>
			        <figure>
			        		<figcaption className={gooey.caption_title}>Buy Assorted Bites</figcaption>
			            <figure>
			            	<NavLink
			            		to='/gooey/pricing'>
			            	<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
			            	</NavLink>
			    			<figcaption className={gooey.quantity}>24 bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/pricing'>
			            	<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>36 Bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/pricing'>
			            	<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>48 Bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/pricing'>
			            	<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>96 Bites</figcaption>
			            </figure>
			        </figure> 
				</div>

			<div id={gooey.single_flavor}>
						<NavLink
			            	to='/gooey/pricing'>
			            <figcaption id={gooey.singleflavor}>Single Flavor Dozen</figcaption>
				        	<figure>
								<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
				            	<figcaption className={gooey.quantity}>One Dozen</figcaption>
				        	</figure>
			            </NavLink>
				</div>

			<hr />

			<footer>		
					<p> Copyright &copy; 2013 Oowee Gooey Brownies</p>
			        
			      <figure>
					<a href="https://www.facebook.com/OoweeGooeyBrownies" rel='noopener noreferrer' target="_blank"><img src={require("./images/link_icons/facebook_256_transparency.png" )} alt="Facebook"></img></a>

					<NavLink
						to='/gooey/pricing'>
					<img src={require("./images/link_icons/pinterest-icon.png")} id={gooey.pinterest} alt="Pinterest"></img>
					</NavLink>
				</figure>

			    
			    	<table>
			    		<tr>
			        		<td>
			        			<NavLink
			        				to='/gooey'>
			        				Home
			        			</NavLink>
			        		</td>
			                <td>
			                	<NavLink
			                		to='/gooey/pricing'>
			                		Pricing
			                	</NavLink>
			                </td>
			                <td>
			                	<NavLink
			                		to='/gooey/GooeyContact'>
			                		Contact
			                	</NavLink>
			                </td>
			                <td>
			                	<NavLink
			                		to='/gooey/pricing'>
			                		Blog
			                	</NavLink>
			                </td>
			        	</tr>
			    	</table>
			        
			        
			  </footer>


			</div>

		</div>
	);
}

export default Pricing;
