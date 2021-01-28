import React from 'react';
import { NavLink } from 'react-router-dom';
import gooey from './ooweegooey.module.css';

function GooeyContact(props) {

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
                  to='/gooey/GooeyContact'
                >
                Buy Now
                </NavLink>
              </td>
            </tr>
          </table>
        </nav>
        
      </div>

      <hr />

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
              to='/gooey/GooeyContact'>
            <img src={require("./images/buttons/Buy_button_3.png")} alt="Buy Now"></img>
          </NavLink>
      </div>

      <div id={gooey.contact}>

      </div>  
      <p id={gooey.contact_title}>Send us a message</p>

      <form method="post" action="http://www.ipage.com/scripts/formemail.bml">
        <label for="name">Name:</label>
        <input type="text" name="name" id={gooey.name} placeholder="First and Last Name" autofocus></input>{'\n'}
          <label for="email">Email:</label>
        <input type="hidden" name="my_email" value="info@ooweegooeybrownies.com"></input>  
        <input type="email" name="email" id={gooey.email} placeholder="Email address" required></input>{'\n'}
          <label for="phone"> Phone:</label>
          <input type="tel" name="phone number" id={gooey.phone} placeholder="10 digit phone number"></input>{'\n'}
        {'\n'}
        <textarea name="comments" id={gooey.comments} cols="80" rows="10" placeholder="Comments"></textarea>
        {'\n'}
        <input type="submit" name="submit" value="Send" id={gooey.send}></input>
          {'\n'}
        <input type="reset" name="reset" value="Reset" id={gooey.reset}></input>
      </form>

      <p id={gooey.contact_info}>
        Give us a call: &nbsp; 877-781-7371{'\n'}
        Email address: &nbsp; <a href="mailto:info@OoweeGooeyBrownies.com">info@OoweeGooeyBrownies.com</a>
      </p>
      {'\n'}
<hr />

      <div id={gooey.brownie_assortments}>
              <figure>
                <figcaption className={gooey.caption_title}>Buy Assorted Brownies</figcaption>
                  <figure>
                    <NavLink
                      to='/gooey/GooeyContact'>
                      <img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
                    </NavLink>
                <figcaption className={gooey.quantity}>One Dozen</figcaption>
                  </figure>

                  <figure>
                    <NavLink
                      to='/gooey/GooeyContact'>
                    <img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
                    </NavLink>
                    <figcaption className={gooey.quantity}>Two Dozen</figcaption>
                  </figure>

                  <figure>
                    <NavLink
                      to='/gooey/GooeyContact'>
                    <img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
                    </NavLink>
                    <figcaption className={gooey.quantity}>36 Brownies</figcaption>
                  </figure>

                  <figure>
                    <NavLink
                      to='/gooey/GooeyContact'>
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
                      to='/gooey/GooeyContact'>
                    <img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
                    </NavLink>
                <figcaption className={gooey.quantity}>24 bites</figcaption>
                  </figure>

                  <figure>
                    <NavLink
                      to='/gooey/GooeyContact'>
                    <img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
                    </NavLink>
                    <figcaption className={gooey.quantity}>36 Bites</figcaption>
                  </figure>

                  <figure>
                    <NavLink
                      to='/gooey/GooeyContact'>
                    <img src={require("./images/footer images/choc_with_shadow.png")} alt="Chocolate Brownies"></img>
                    </NavLink>
                    <figcaption className={gooey.quantity}>48 Bites</figcaption>
                  </figure>

                  <figure>
                    <NavLink
                      to='/gooey/GooeyContact'>
                    <img src={require("./images/footer images/bites_2.png")} alt="Brownie Bites"></img>
                    </NavLink>
                    <figcaption className={gooey.quantity}>96 Bites</figcaption>
                  </figure>
              </figure> 
        </div>

        <div id={gooey.single_flavor}>
            <NavLink
                    to='/gooey/GooeyContact'>
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
          <a href='https://www.facebook.com/OoweeGooeyBrownies' target='_blank' rel='noopener noreferrer'>
            <img src={require("./images/link_icons/facebook_256_transparency.png")} alt="Facebook"></img>
          </a>

          <NavLink
            to='/gooey/GooeyContact'>
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
					    		to='/gooey/GooeyContact'>
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

export default GooeyContact;