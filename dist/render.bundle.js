"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["render"],{

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatePageView);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/render.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXBkYXRlUGFnZVZpZXcgPSAoKCkgPT4ge1xuXHRjb25zdCB1cGRhdGVUb01haW5IVE1MID0gKCkgPT4ge1xuXHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0XCJhZnRlcmJlZ2luXCIsXG5cdFx0XHRgPGhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGUtbmF2LWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLW5hdi1idG5cIiBpZD1cInRvZ2dsZS1uYXYtYnRuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtb3BlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1jbG9zZSBoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtYWluLW5hdlwiIGlkPVwibWFpbi1uYXZcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1haW5cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1haW5cIiBocmVmPVwiI1wiPk1haW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnby10by1tZW51XCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1tZW51XCIgaHJlZj1cIiNcIj5NZW51PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tYWJvdXRcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWFib3V0XCIgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWxvY2F0aW9uXCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1sb2NhdGlvblwiIGhyZWY9XCIjXCI+TG9jYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLW1haW4tZ3JhYlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYWluLXRpdGxlXCI+R2lMTGlHQU7igJlzPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1haW4tc3ViLXRpdGxlXCI+U2FuZHdpY2ggU2hvcDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1haW4tc3ViLXRpdGxlLXR3b1wiPk1vcnJvIEJheSwgQ0E8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW4tc2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcC10ZXh0IGxlZnQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wLXRleHQgbGVmdC1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+RW5qb3kgc2FuZHdpY2hlcyBieSB0aGUgc2VhIGZyb20gb3VyIHdpZGUgc2VsZWN0aW9uIG9mIHNhbmR3aWNoZXMhPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcC10ZXh0IHJpZ2h0LXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Db21lIG9uIGluIGZvciBhIHNvdXAsIHNhbGFkLCBob3Qgc2FuZHdpY2hlcywgbWVsdHMgb3Igb25lIG9mIG91ciBzaWduYXR1cmUgc3VicyE8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wLXRleHQgcmlnaHQtYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdHdvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXR3by10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXR3b1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0PkxvY2F0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cD40ODAgTW9ycm8gQmF5IEJsdmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+TW9ycm8gQmF5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPkNBIDkzNDQyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtcGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+R2l2ZSBVcyBhIENhbGw8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxwPig4MDUpIDIyNS0xMzIwPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVhY2ggVXMgYnkgRW1haWw8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxwPmdpbGxpZ2Fuc19zYW5kd2ljaEB5YWhvby5jb208L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJzLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PkJ1c2luZXNzIEhvdXJzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwib2wtZGF5c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb25kYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5UdWVzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+V2VkbmVzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VGh1cnNkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5GcmlkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYXR1cmRheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlN1bmRheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cIm9sLWhvdXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjExQU0gLSA1UE08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjExQU0gLSA1UE08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjExQU0gLSA1UE08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduZXItaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPHA+RGVzaWduZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb25hdGhhbi1FdmV5XCI+Sm9uYXRoYW4gRXZleTwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvb3Rlcj5gXG5cdFx0KTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVUb01lbnVIVE1MID0gKCkgPT4ge1xuXHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0XCJhZnRlcmJlZ2luXCIsXG5cdFx0XHRgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGUtbmF2LWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLW5hdi1idG5cIiBpZD1cInRvZ2dsZS1uYXYtYnRuXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtbmF2LW9wZW5cIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtbmF2LWNsb3NlIGhpZGRlblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cIm1haW4tbmF2XCIgaWQ9XCJtYWluLW5hdlwiIGRhdGEtdmlzaWJsZT1cImZhbHNlXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1haW5cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1haW5cIiBocmVmPVwiI1wiPk1haW48L2E+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWVudVwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJnby10by1hYm91dFwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tYWJvdXRcIiBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWxvY2F0aW9uXCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1sb2NhdGlvblwiIGhyZWY9XCIjXCI+TG9jYXRpb248L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1tYWluLWdyYWIgdGl0bGUtbWFpbi1ncmFiLW1lbnVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGUtY29udGFpbmVyIG1haW4tdGl0bGUtY29udGFpbmVyLW1lbnVcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJtYWluLXRpdGxlIG1haW4tdGl0bGUtbWVudVwiPk1FTlU8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc2VjdGlvbi1icmVha2xpbmVcIj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbGVmdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZSBzaWduYXR1cmUtc3Vic1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS10aXRsZSBzaWduYXR1cmUtc3Vic1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5TaWduYXR1cmUgU3ViczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q2hvaWNlIG9mOiBGcmVuY2gsIER1Y2ggQ3J1bmNoLCBvciBXaGVhdCBSb2xsPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQtY29udGFpbmVyIHNpZ25hdHVyZS1zdWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIHNpZ25hdHVyZS1zdWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5DbHViIFN1YiA8c3Bhbj4kMTM8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHVya2V5LCBIYW0sIEJhY29uLCBBbWFyaWNhbiBDaGVlc2UsIE1heW8sIE11c3RhcmQsIExldHR1Y2UsIFJlZCBPbmlvbiwgVG9tYXRvLCBQZXBwZXJvbmNpbmksIFZpbmVnYXIgJiBPaWwgdy8gU2Vhc29uaW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBzaWduYXR1cmUtc3Vic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+SXRhbGlhbiBTdWIgPHNwYW4+JDEzPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhbSwgU2FsYW1pLCBQcm92b2xvbmUsIE1heW8sIE11c3RhcmQsIExldHR1Y2UsIFJlZCBPbmlvbiwgVG9tYXRvLCBQZXBwZXJvbmNpbmksIFZpbmVnYXIgJiBPaWwgdy8gU2Vhc29uaW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBzaWduYXR1cmUtc3Vic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Qi5MLkEuVC4gPHNwYW4+JDEyPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJhY29uLCBMZXR0dWNlLCBNYXlvLCBBdm9jYWRvLCBUb21hdG8sIHZpbmVnYXIgJiBPaWwgdy8gU2Vhc29uaW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBzaWduYXR1cmUtc3Vic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VmVnZ2llIFN1YiA8c3Bhbj4kMTI8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hlZXNlLCBMZXR0dWNlLCBUb21hdG8sIEN1Y2N1bWJlciwgT25pb24sIFBpY2tsZXMsIFZpbmVnYXIgJiBPaWwgdy8gU2Vhc29uaW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlIGhvdC1zYW5kd2ljaGVzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLXRpdGxlIGhvdC1zYW5kd2ljaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPkhvdCBTYW5kd2ljaGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkLWNvbnRhaW5lciBob3Qtc2FuZHdpY2hlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBob3Qtc2FuZHdpY2hlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+S2lsbGVyIFBhc3RyYW1pIDxzcGFuPiQxNTwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QYXN0cmFtaSwgUGVwcGVyLUphY2sgQ2hlZXNlLCBNYXlvLCBNdXN0YXJkLCBQaWNrbGVzLCBQZXBwZXJvbmNpbmk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIGhvdC1zYW5kd2ljaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Sb2FzdCBCZWVmIDxzcGFuPiQxNTwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb2FzdCBCZWVmLCBTd2lzcyBDaGVlc2UsIE1heW8sIERpam9uIE11c3RhcmQsIExldHR1Y2UsIE9uaW9uLCBUb21hdG88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIGhvdC1zYW5kd2ljaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5QaGlsbHkgQ2hlZXNlc3RlYWsgPHNwYW4+JDE1PC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN0ZWFrLCBQcm92b2xvbmUgQ2hlZXNlLCBCZWxsIFBlcHBlcnMsIE9uaW9uLCBNYXlvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlIG1lbHRzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLXRpdGxlIG1lbHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPk1lbHRzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5DaG9pY2Ugb2Y6IFNvdXJkb3VnaCwgVGhpY2sgV2hpdGUsIG9yIFJ5ZTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkLWNvbnRhaW5lciBtZWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBtZWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VHVuYSBNZWx0IDxzcGFuPiQxMDwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UdW5hLCBDaGVkZGFyIENoZWVzZSwgTWF5bzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgbWVsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkhhbSAmIENoZWVzZSA8c3Bhbj4kMTA8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGFtLCBTd2lzcyBDaGVlc2UsIE1heW8sIERpam9uIE11c3RhcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIG1lbHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5UdXJrZXkgTWVsdCA8c3Bhbj4kMTI8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHVya2V5LCBCYWNvbiwgQ2hlZGRhciBDaGVlc2UsIE1heW8sIFRvbWF0bzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgbWVsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlRoZSBSdWJlbiA8c3Bhbj4kMTI8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzdHJhbWksIFN3aXNzIENoZWVzZSwgU2F1ZXJrcmF1dCwgVGhvdXNhbmQgSXNsYW5kPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlIHNvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtdGl0bGUgc291cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5Tb3VwIG9mIFRoZSBEYXk8L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQtY29udGFpbmVyIHNvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgc291cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Q3VwIDxzcGFuPiQ0PC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Cb3dsIDxzcGFuPiQ2PC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUgZHJpbmtzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLXRpdGxlIGRyaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ecmlua3MgJiBTbmFja3M8L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQtY29udGFpbmVyIGRyaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBkcmlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2F0ZXIgQm90dGxlICQxLjUwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW5uZWQgRHJpbmtzICQyLjAwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb3R0bGVkIERyaW5rcyAkMi41MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QnJvd25pZXMgJiBDb29raWVzICQyLjUwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGlwcyAkMi4wMDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhc2lkZSBjbGFzcz1cImJ1aWxkLXlvdXItb3duLW1vZGVsXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1aWxkLXlvdXItb3duLXBvcHVwLWJ0blwiIGlkPVwiYnVpbGQteW91ci1vd24tcG9wdXAtYnRuXCI+QnVpbGQgWW91ciBPd24gU2FuZHdpY2g8c3Bhbj4kMTM8L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgPGRpYWxvZyBjbGFzcz1cImJ1aWxkLXlvdXItb3duLXBvcHVwXCIgaWQ9XCJidWlsZC15b3VyLW93bi1wb3B1cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQteW91ci1vd24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQteW91ci1vd24taGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tdGl0bGUgYnVpbGQteW91ci1vd24tdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CdWlsZCBZb3VyIE93biA8c3Bhbj4kMTM8L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hvaWNlIG9mOiBGcmVuY2ggUm9sbCwgRHVjaCBDcnVuY2gsIFdoZWF0IFJvbGwsIFRoaWNrIFdoaXRlLCBSeWUsIG9yIFNvdXJkb3VnaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCIgaWQ9XCJjbG9zZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1idG4tc3BhblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkLWNvbnRhaW5lciBidWlsZC15b3VyLW93bi1vcHRpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLWNhcmQgbWVhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk1lYXRzOjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UdW5hPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGFtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHVya2V5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2FsYW1pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9hc3QgQmVlZiA8c3Bhbj4rJDI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzdHJhbWkgPHNwYW4+KyQyPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tY2FyZCBjaGVlc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5DaGVlc2U6PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFtZXJpY2FuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3dpc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QZXBwZXItSmFjazwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWRkYXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Qcm92b2xvbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CbHVlIENoZWVzZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLWNhcmQgdmVnZ2llc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlZlZ2dpZXM6PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxldHR1Y2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TcHJpbmcgR3JlZW5zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGVwcGVyb25jaW5pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGlja2xlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkN1Y2N1bWJlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZWQgT25pb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ub21hdG88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLWNhcmQgY29uZGltZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNvbmRpbWVudHM6PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1heW88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NdXN0YXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlqb24gTXVzdGFyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhbmNoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T2lsICYgVmluZWdhcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPncvIFNlYXNvbmluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLW9wdGlvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi1jYXJkIGJ1aWxkLW9wdGlvbi1leHRyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXh0cmFzPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmFjb24gPHNwYW4+KyQyPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXZvY2FkbyA8c3Bhbj4rJDI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHRyYSBDaGVlc2UgPHNwYW4+KyQyPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXh0cmEgTWVhdCA8c3Bhbj4rJDI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGlhbG9nPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L21haW4+XG4gICAgPGZvb3Rlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZXNpZ25lci1pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxwPkRlc2lnbmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSm9uYXRoYW4tRXZleVwiPkpvbmF0aGFuIEV2ZXk8L2E+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+YFxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlVG9BYm91dEhUTUwgPSAoKSA9PiB7XG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRcImFmdGVyYmVnaW5cIixcblx0XHRcdGA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLW5hdi1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLW5hdi1idG5cIiBpZD1cInRvZ2dsZS1uYXYtYnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtb3BlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1jbG9zZSBoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3M9XCJtYWluLW5hdlwiIGlkPVwibWFpbi1uYXZcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWFpblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWFpblwiIGhyZWY9XCIjXCI+TWFpbjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWVudVwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tYWJvdXRcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWFib3V0XCIgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbG9jYXRpb25cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWxvY2F0aW9uXCIgaHJlZj1cIiNcIj5Mb2NhdGlvbjwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc2VjdGlvbi1icmVha2xpbmUgYWJvdXQtYnJlYWtsaW5lXCI+XG4gICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uLWNvbnRhaW5lciBsb2NhdGlvbi1iYWNrZ3JvdW5kIGFib3V0LWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXR3by1jb250YWluZXIgbG9jYXRpb24tc2VjdGlvbi1jb250YWluZXIgYWJvdXQtc2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5VbmRlciBDb25zdHJ1Y3Rpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduZXItaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICA8cD5EZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvbmF0aGFuLUV2ZXlcIj5Kb25hdGhhbiBFdmV5PC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5gXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgdXBkYXRlVG9Mb2NhdGlvbkhUTUwgPSAoKSA9PiB7XG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRcImFmdGVyYmVnaW5cIixcblx0XHRcdGA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLW5hdi1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLW5hdi1idG5cIiBpZD1cInRvZ2dsZS1uYXYtYnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtb3BlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1jbG9zZSBoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3M9XCJtYWluLW5hdlwiIGlkPVwibWFpbi1uYXZcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWFpblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWFpblwiIGhyZWY9XCIjXCI+TWFpbjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWVudVwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tYWJvdXRcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWFib3V0XCIgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbG9jYXRpb25cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWxvY2F0aW9uXCIgaHJlZj1cIiNcIj5Mb2NhdGlvbjwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc2VjdGlvbi1icmVha2xpbmVcIj5cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluLXNlY3Rpb24tY29udGFpbmVyIGxvY2F0aW9uLWJhY2tncm91bmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d28tY29udGFpbmVyIGxvY2F0aW9uLXNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d29cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxoND5Mb2NhdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cD40ODAgTW9ycm8gQmF5IEJsdmQ8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Nb3JybyBCYXk8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5DQSA5MzQ0MjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgPGg0PkdpdmUgVXMgYSBDYWxsPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPig4MDUpIDIyNS0xMzIwPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5SZWFjaCBVcyBieSBFbWFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwPmdpbGxpZ2Fuc19zYW5kd2ljaEB5YWhvby5jb208L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Vycy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGg0PkJ1c2luZXNzIEhvdXJzPC9oND5cbiAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJvbC1kYXlzXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+TW9uZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5UdWVzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5XZWRuZXNkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlRodXJzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5GcmlkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlNhdHVyZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TdW5kYXk8L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwib2wtaG91cnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduZXItaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICA8cD5EZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvbmF0aGFuLUV2ZXlcIj5Kb25hdGhhbiBFdmV5PC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5gXG5cdFx0KTtcblx0fTtcblx0cmV0dXJuIHtcblx0XHR1cGRhdGVUb01haW5IVE1MLFxuXHRcdHVwZGF0ZVRvTWVudUhUTUwsXG5cdFx0dXBkYXRlVG9BYm91dEhUTUwsXG5cdFx0dXBkYXRlVG9Mb2NhdGlvbkhUTUwsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVQYWdlVmlldztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==