import React from 'react';
import gooey from './ooweegooey.module.css';
import { NavLink } from 'react-router-dom';

function Specialty() {
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
									to='/gooey/specialty'
								>
								Buy Now
								</NavLink>
							</td>
						</tr>
					</table>
				</nav>
			</div>

			<hr />

  			<div className={gooey.browniedesc}>	
				<div className={gooey.desc}>
					<p><span className={gooey.title}>Cookies n Cream</span> <br /><br />We took our delicious chocolate brownie, stuffed it with double stuffed oreo cookies, smothered the top of the brownies with our homemade cookie filling and topped it with crushed oreo cookies. This brownie will surely become one of your favorites. 
					</p>
					<img src={require("./images/specialty/oreo.png")} alt="Chocolate Peanut Butter Chip"></img>
				</div>
				
				<div className={gooey.desc}>
					<p><span className={gooey.title}>S'mores</span> <br /><br />Our take on the traditional s’mores. The original chocolate brownie with graham cracker crust made from scratch, topped with toasted marshmallows.
					</p>
					<img src={require("./images/specialty/smores.png")} alt="Chocolate Walnut"></img>
				</div>		
			    
			    <div className={gooey.desc}>
					<p><span className={gooey.title}>Butter Pecan</span> <br /><br />Butter Pecan Blonde. This brownie is made with one of our secret ingredients. It's a cross between butter pecan ice-cream and pecan pie. Somewhere in the middle we found this little piece of heaven. For all to indulge.
					</p>
					<img src={require("./images/specialty/butter_pecan.png")} alt="Chocolate Walnut"></img>
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
							<td><NavLink
									to='/gooey/specialty'>
								Specialty
								</NavLink></td>
						</tr>
						
						<tr>
							<td><NavLink
									to='/gooey/browniePops'>
								Brownie Pops
								</NavLink></td>
						</tr>
						<tr>
							<td><NavLink
									to='/gooey/brownieBites'>
								Brownie Bites
								</NavLink></td>
						</tr>
					</table>	

					<NavLink
						id={gooey.nav_buy}
						to='/gooey/specialty'>
						<img src={require("./images/buttons/Buy_button_3.png")} alt="Buy Now"></img>
					</NavLink>
				</div>

				<hr />

				<div id={gooey.brownie_assortments}>
			        <figure>
        				<figcaption className={gooey.caption_title}>Buy Assorted Brownies</figcaption>
			            <figure>
			            	<NavLink
		            			to='/gooey/specialty'>
		            			<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
		            		</NavLink>
			    			<figcaption className={gooey.quantity}>One Dozen</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/specialty'>
		            		<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
		            		</NavLink>
			            	<figcaption className={gooey.quantity}>Two Dozen</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/specialty'>
		            		<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
		            		</NavLink>
			            	<figcaption className={gooey.quantity}>36 Brownies</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
		            			to='/gooey/specialty'>
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
			            		to='/gooey/specialty'>
			            	<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
			            	</NavLink>
			    			<figcaption className={gooey.quantity}>24 bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/specialty'>
			            	<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>36 Bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/specialty'>
			            	<img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>48 Bites</figcaption>
			            </figure>

			            <figure>
			            	<NavLink
			            		to='/gooey/specialty'>
			            	<img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
			            	</NavLink>
			            	<figcaption className={gooey.quantity}>96 Bites</figcaption>
			            </figure>
			        </figure> 
				</div>

			<div id={gooey.single_flavor}>
				<NavLink
	            	to='/gooey/specialty'>
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
            			to='/gooey/specialty'>
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
				    		to='/gooey/specialty'>
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

export default Specialty;
