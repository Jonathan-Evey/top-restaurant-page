const updatePageView = (() => {
	const updateToMainHTML = () => {
		document.body.insertAdjacentHTML(
			"afterbegin",
			`<header>
            <div class="logo">
            </div>
            <div class="nav-container">
              <div class="toggle-nav-btn-container">
                <button class="toggle-nav-btn" id="toggle-nav-btn">
                  <span class="toggle-nav-open"></span>
                  <span class="toggle-nav-close hidden"></span>
                </button>
              </div>
              <ul class="main-nav" id="main-nav" data-visible="false">
                <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
                <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
                <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
                <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
              </ul>
            </div>
          </header>
          <main>
            <div class="title-main-grab">
              <div class="main-title-container">
                <h1 class="main-title">GiLLiGAN’s</h1>
                <p class="main-sub-title">Sandwich Shop</p>
                <p class="main-sub-title-two">Morro Bay, CA</p>
              </div>
            </div>
            <section class="main-section-container">
              <div class="main-section-title">
                
              </div>
              <div class="main-section">
                <div class="cards-left">
                  <div class="shop-text left-top">
                  </div>
                  <div class="shop-text left-bottom">
                    <p>Enjoy sandwiches by the sea from our wide selection of sandwiches!</p>
                  </div>
                </div>
                <div class="cards-right">
                  <div class="shop-text right-top">
                    <p>Come on in for a soup, salad, hot sandwiches, melts or one of our signature subs!</p>
                  </div>
                  <div class="shop-text right-bottom">
                  </div>
                </div>
              </div>

              <div class="section-two-container">
                <div class="section-two-title">
                
                </div>
                <div class="section-two">
                  <div class="contact-card">
                    <div class="contact-address">
                      <h4>Location</h4>
                      <p>480 Morro Bay Blvd</p>
                      <p>Morro Bay</p>
                      <p>CA 93442</p>
                    </div>
                    <div class="contact-phone">
                      <h4>Give Us a Call</h4>
                      <p>(805) 225-1320</p>
                    </div>
                    <div class="contact-email">
                      <h4>Reach Us by Email</h4>
                      <p>gilligans_sandwich@yahoo.com</p>
                  </div>
                  </div>
                  <div class="hours-card">
                    <h4>Business Hours</h4>
                    <ol class="ol-days">
                      <li>Monday</li>
                      <li>Tuesday</li>
                      <li>Wednesday</li>
                      <li>Thursday</li>
                      <li>Friday</li>
                      <li>Saturday</li>
                      <li>Sunday</li>
                    </ol>
                    <ol class="ol-hours">
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                    </ol>
                  </div>
                </div>


              </div>

            </section>

          </main>
          <footer>
            <div class="designer-info-container">
              <p>Designed by <a href="https://github.com/Jonathan-Evey">Jonathan Evey</a></p>
            </div>
          </footer>`
		);
	};

	const updateToMenuHTML = () => {
		document.body.insertAdjacentHTML(
			"afterbegin",
			`<header>
      <div class="logo">
      </div>
      <div class="nav-container">
        <div class="toggle-nav-btn-container">
          <button class="toggle-nav-btn" id="toggle-nav-btn">
          <span class="toggle-nav-open"></span>
          <span class="toggle-nav-close hidden"></span>
        </button>
      </div>
      <ul class="main-nav" id="main-nav" data-visible="false">
        <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
        <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
        <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
        <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
      </ul>
      </div>
    </header>
    <main>
      <div class="title-main-grab title-main-grab-menu">
        <div class="main-title-container main-title-container-menu">
          <h1 class="main-title main-title-menu">MENU</h1>
        </div>
      </div>
      <div class="main-section-breakline">

      </div>
      <section class="menu-container">
          <div class="menu-left-container">
              <div class="menu-type signature-subs">
                  <div class="menu-type-title signature-subs">
                      <h3>Signature Subs</h3>
                      <p>Choice of: French, Duch Crunch, or Wheat Roll</p>
                  </div>
                  <div class="menu-type-card-container signature-subs">
                      <div class="menu-type-card signature-subs">
                          <h6>Club Sub <span>$13</span></h6>
                          <p>Turkey, Ham, Bacon, Amarican Cheese, Mayo, Mustard, Lettuce, Red Onion, Tomato, Pepperoncini, Vinegar & Oil w/ Seasoning</p>
                      </div>
                      <div class="menu-type-card signature-subs">
                          <h6>Italian Sub <span>$13</span></h6>
                          <p>Ham, Salami, Provolone, Mayo, Mustard, Lettuce, Red Onion, Tomato, Pepperoncini, Vinegar & Oil w/ Seasoning</p>
                      </div>
                      <div class="menu-type-card signature-subs">
                          <h6>B.L.A.T. <span>$12</span></h6>
                          <p>Bacon, Lettuce, Mayo, Avocado, Tomato, vinegar & Oil w/ Seasoning</p>
                      </div>
                      <div class="menu-type-card signature-subs">
                          <h6>Veggie Sub <span>$12</span></h6>
                          <p>Cheese, Lettuce, Tomato, Cuccumber, Onion, Pickles, Vinegar & Oil w/ Seasoning</p>
                      </div>
                  </div>
              </div>
              <div class="menu-type hot-sandwiches">
                  <div class="menu-type-title hot-sandwiches">
                      <h3>Hot Sandwiches</h3>
                  </div>
                  <div class="menu-type-card-container hot-sandwiches">
                      <div class="menu-type-card hot-sandwiches">
                          <h6>Killer Pastrami <span>$15</span></h6>
                          <p>Pastrami, Pepper-Jack Cheese, Mayo, Mustard, Pickles, Pepperoncini</p>
                      </div>
                      <div class="menu-type-card hot-sandwiches">
                          <h6>Roast Beef <span>$15</span></h6>
                          <p>Roast Beef, Swiss Cheese, Mayo, Dijon Mustard, Lettuce, Onion, Tomato</p>
                      </div>
                      <div class="menu-type-card hot-sandwiches">
                          <h6>Philly Cheesesteak <span>$15</span></h6>
                          <p>Steak, Provolone Cheese, Bell Peppers, Onion, Mayo</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="menu-right-container">
              <div class="menu-type melts">
                  <div class="menu-type-title melts">
                      <h3>Melts</h3>
                      <p>Choice of: Sourdough, Thick White, or Rye</p>
                  </div>
                  <div class="menu-type-card-container melts">
                      <div class="menu-type-card melts">
                          <h6>Tuna Melt <span>$10</span></h6>
                          <p>Tuna, Cheddar Cheese, Mayo</p>
                      </div>
                      <div class="menu-type-card melts">
                          <h6>Ham & Cheese <span>$10</span></h6>
                          <p>Ham, Swiss Cheese, Mayo, Dijon Mustard</p>
                      </div>
                      <div class="menu-type-card melts">
                          <h6>Turkey Melt <span>$12</span></h6>
                          <p>Turkey, Bacon, Cheddar Cheese, Mayo, Tomato</p>
                      </div>
                      <div class="menu-type-card melts">
                          <h6>The Ruben <span>$12</span></h6>
                          <p>Pastrami, Swiss Cheese, Sauerkraut, Thousand Island</p>
                      </div>
                  </div>
              </div>
              <div class="menu-type soup">
                  <div class="menu-type-title soup">
                      <h3>Soup of The Day</h3>
                  </div>
                  <div class="menu-type-card-container soup">
                      <div class="menu-type-card soup">
                          <h6>Cup <span>$4</span></h6>
                          <h6>Bowl <span>$6</span></h6>
                      </div>
                  </div>
              </div>
              <div class="menu-type drinks">
                  <div class="menu-type-title drinks">
                      <h3>Drinks & Snacks</h3>
                  </div>
                  <div class="menu-type-card-container drinks">
                      <div class="menu-type-card drinks">
                          <p>Water Bottle $1.50</p>
                          <p>Canned Drinks $2.00</p>
                          <p>Bottled Drinks $2.50</p>
                          <p>Brownies & Cookies $2.50</p>
                          <p>Chips $2.00</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <aside class="build-your-own-model">
          <button class="build-your-own-popup-btn" id="build-your-own-popup-btn">Build Your Own Sandwich<span>$13</span></button>
          <dialog class="build-your-own-popup" id="build-your-own-popup">
              <div class="build-your-own-container">
                  <div class="build-your-own-header-container">
                      <div class="build-option-title build-your-own-title-container">
                          <h3>Build Your Own <span>$13</span></h3>
                          <p>Choice of: French Roll, Duch Crunch, Wheat Roll, Thick White, Rye, or Sourdough</p>
                      </div>
                      <button class="close-btn" id="close-btn">
                          <span class="close-btn-span"></span>
                      </button>
                  </div>
                  <div class="menu-type-card-container build-your-own-options-container">
                      <div class="build-option-left">
                          <div class="build-option-card meat">
                              <h6>Meats:</h6>
                              <p>Tuna</p>
                              <p>Ham</p>
                              <p>Turkey</p>
                              <p>Salami</p>
                              <p>Roast Beef <span>+$2</span></p>
                              <p>Pastrami <span>+$2</span></p>
                          </div>
                          <div class="build-option-card cheese">
                              <h6>Cheese:</h6>
                              <p>American</p>
                              <p>Swiss</p>
                              <p>Pepper-Jack</p>
                              <p>Cheddar</p>
                              <p>Provolone</p>
                              <p>Blue Cheese</p>
                          </div>
                      </div>
                      <div class="build-option-right">
                          <div class="build-option-card veggies">
                              <h6>Veggies:</h6>
                              <p>Lettuce</p>
                              <p>Spring Greens</p>
                              <p>Pepperoncini</p>
                              <p>Pickles</p>
                              <p>Cuccumbers</p>
                              <p>Red Onion</p>
                              <p>Tomato</p>
                          </div>
                          <div class="build-option-card condiments">
                              <h6>Condiments:</h6>
                              <p>Mayo</p>
                              <p>Mustard</p>
                              <p>Dijon Mustard</p>
                              <p>Ranch</p>
                              <p>Oil & Vinegar</p>
                              <p>w/ Seasoning</p>
                          </div>
                      </div>
                  </div>  
                  <div class="extra-options-container">
                      <div class="build-option-card build-option-extra">
                          <h6>Extras</h6>
                          <p>Bacon <span>+$2</span></p>
                          <p>Avocado <span>+$2</span></p>
                          <p>Extra Cheese <span>+$2</span></p>
                          <p>Extra Meat <span>+$2</span></p>
                      </div>
                  </div>
              </div>
          </dialog>
      </aside>
    </main>
    <footer>
      <div class="designer-info-container">
          <p>Designed by <a href="https://github.com/Jonathan-Evey">Jonathan Evey</a></p>
      </div>
    </footer>`
		);
	};

	const updateToAboutHTML = () => {
		document.body.insertAdjacentHTML(
			"afterbegin",
			`<header>
        <div class="logo">
        </div>
        <div class="nav-container">
          <div class="toggle-nav-btn-container">
            <button class="toggle-nav-btn" id="toggle-nav-btn">
            <span class="toggle-nav-open"></span>
            <span class="toggle-nav-close hidden"></span>
          </button>
        </div>
        <ul class="main-nav" id="main-nav" data-visible="false">
            <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
            <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
            <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
            <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
          </ul>
        </div>
      </header>
      <main>
        <div class="main-section-breakline about-breakline">
      
        </div>
        <section class="main-section-container location-background about-background">
            <div class="section-two-container location-section-container about-section-container">
                <p>Under Construction</p>
            </div>
            
        </section>
      </main>
      <footer>
        <div class="designer-info-container">
          <p>Designed by <a href="https://github.com/Jonathan-Evey">Jonathan Evey</a></p>
        </div>
      </footer>`
		);
	};
	const updateToLocationHTML = () => {
		document.body.insertAdjacentHTML(
			"afterbegin",
			`<header>
        <div class="logo">
        </div>
        <div class="nav-container">
          <div class="toggle-nav-btn-container">
            <button class="toggle-nav-btn" id="toggle-nav-btn">
            <span class="toggle-nav-open"></span>
            <span class="toggle-nav-close hidden"></span>
          </button>
        </div>
        <ul class="main-nav" id="main-nav" data-visible="false">
            <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
            <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
            <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
            <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
          </ul>
        </div>
      </header>
      <main>
        <div class="main-section-breakline">
      
        </div>
        <section class="main-section-container location-background">
          <div class="section-two-container location-section-container">
            <div class="section-two">
              <div class="contact-card">
                <div class="contact-address">
                  <h4>Location</h4>
                  <p>480 Morro Bay Blvd</p>
                  <p>Morro Bay</p>
                  <p>CA 93442</p>
                </div>
                <div class="contact-phone">
                  <h4>Give Us a Call</h4>
                  <p>(805) 225-1320</p>
                </div>
                <div class="contact-email">
                    <h4>Reach Us by Email</h4>
                    <p>gilligans_sandwich@yahoo.com</p>
                </div>

              </div>
              <div class="hours-card">
                <h4>Business Hours</h4>
                <ol class="ol-days">
                  <li>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesday</li>
                  <li>Thursday</li>
                  <li>Friday</li>
                  <li>Saturday</li>
                  <li>Sunday</li>
                </ol>
                <ol class="ol-hours">
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="designer-info-container">
          <p>Designed by <a href="https://github.com/Jonathan-Evey">Jonathan Evey</a></p>
        </div>
      </footer>`
		);
	};
	return {
		updateToMainHTML,
		updateToMenuHTML,
		updateToAboutHTML,
		updateToLocationHTML,
	};
})();

export default updatePageView;
