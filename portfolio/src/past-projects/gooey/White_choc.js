import React from 'react';
import gooey from './ooweegooey.module.css';
import { NavLink } from 'react-router-dom';

function WhiteChoc() {
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
										to='/gooey/WhiteChoc'
									>
									Buy Now
									</NavLink>
								</td>
							</tr>
						</table>
					</nav>
				</div>

			<hr />

			<div class={gooey.browniedesc}>	
				<div class={gooey.desc}>
					<p><span class={gooey.title}>White Chocolate Macadamia Nut</span> <br /><br />
						Unlike any other, our creamy <strong>white chocolate</strong> brownie batter is to die for. Smothered in our roasted salted Macadamia nuts.
			            
					</p>



					<img src={require("./images/whitechoc/white_choc_mac.png")} alt="Chocolate Peanut Butter Chip"></img>
				</div>
				
				<div class={gooey.desc}>
					<p><span class={gooey.title}>White Chocolate Raspberry Swirl</span> <br /><br />
						Creamy white chocolate brownie batter, mixed with raspberry sauce made from fresh raspberries. The raspberry sauce is swirled into the batter and drizzled on top. 
					</p>
					<img src={require("./images/whitechoc/white_raspberry.png")} alt="Chocolate Walnut"></img>
				</div>		
			    
			    
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
							<td><NavLink
					    		to='/gooey/peanutButter'>
					    		Peanut Butter
				    		</NavLink>
</td>
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
						to='/gooey/whiteChoc'>
						<img src={require("./images/buttons/Buy_button_3.png")} alt="Buy Now"></img>
					</NavLink>
				</div>


				<hr />
			    
			    
			<div id={gooey.brownie_assortments}>
			        <figure>
        				<figcaption className={gooey.caption_title}>Buy Assorted Brownies</figcaption>
			            <figure>
			            	<NavLink
		            			to='/gooey/whiteChoc'>
		            			<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
		            		</NavLink>
			    			<figcaption className={gooey.quantity}>One Dozen</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/whiteChoc'>
		            		<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
		            		</NavLink>
			            	<figcaption className={gooey.quantity}>Two Dozen</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/whiteChoc'>
		            		<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
		            		</NavLink>
			            	<figcaption className={gooey.quantity}>36 Brownies</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/whiteChoc'>
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
			            		to='/gooey/whiteChoc'>
			            	<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
			            	</NavLink>
			    			<figcaption className={gooey.quantity}>24 bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/whiteChoc'>
			            	<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>36 Bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/whiteChoc'>
			            	<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>48 Bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/whiteChoc'>
			            	<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>96 Bites</figcaption>
			            </figure>
			        </figure> 
				</div>

			<div id={gooey.single_flavor}>
				<NavLink
	            	to='/gooey/whiteChoc'>
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
					<a href="https://www.facebook.com/OoweeGooeyBrownies" target="_blank" rel='noopener noreferrer'><img src={require("./images/link_icons/facebook_256_transparency.png")} alt="Facebook"></img></a>

					<NavLink
            			to='/gooey/whiteChoc'>
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
			                <td><NavLink
					    		to='/gooey/whiteChoc'>
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

export default WhiteChoc;
