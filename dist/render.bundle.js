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
      document.body.insertAdjacentHTML("afterbegin", 
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
              <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
            </div>
          </footer>`);
    }
    
  const updateToMenuHTML = () => {
    document.body.insertAdjacentHTML("afterbegin", 
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
          <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
      </div>
    </footer>`
    );
  }

  const updateToAboutHTML = () => {
    document.body.insertAdjacentHTML("afterbegin", 
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
          <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
        </div>
      </footer>`);
  } 
  const updateToLocationHTML = () => {
    document.body.insertAdjacentHTML("afterbegin", 
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
          <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
        </div>
      </footer>`);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXBkYXRlUGFnZVZpZXcgPSAoKCkgPT4ge1xuICBjb25zdCB1cGRhdGVUb01haW5IVE1MID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFxuICAgICAgICAgICAgYDxoZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLW5hdi1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuXCIgaWQ9XCJ0b2dnbGUtbmF2LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtbmF2LW9wZW5cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtY2xvc2UgaGlkZGVuXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibWFpbi1uYXZcIiBpZD1cIm1haW4tbmF2XCIgZGF0YS12aXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnby10by1tYWluXCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1tYWluXCIgaHJlZj1cIiNcIj5NYWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWVudVwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWFib3V0XCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1hYm91dFwiIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnby10by1sb2NhdGlvblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbG9jYXRpb25cIiBocmVmPVwiI1wiPkxvY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1tYWluLWdyYWJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFpbi10aXRsZVwiPkdpTExpR0FO4oCZczwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYWluLXN1Yi10aXRsZVwiPlNhbmR3aWNoIFNob3A8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYWluLXN1Yi10aXRsZS10d29cIj5Nb3JybyBCYXksIENBPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluLXNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3AtdGV4dCBsZWZ0LXRvcFwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcC10ZXh0IGxlZnQtYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkVuam95IHNhbmR3aWNoZXMgYnkgdGhlIHNlYSBmcm9tIG91ciB3aWRlIHNlbGVjdGlvbiBvZiBzYW5kd2ljaGVzITwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3AtdGV4dCByaWdodC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q29tZSBvbiBpbiBmb3IgYSBzb3VwLCBzYWxhZCwgaG90IHNhbmR3aWNoZXMsIG1lbHRzIG9yIG9uZSBvZiBvdXIgc2lnbmF0dXJlIHN1YnMhPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcC10ZXh0IHJpZ2h0LWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXR3by1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d28tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d29cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoND5Mb2NhdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+NDgwIE1vcnJvIEJheSBCbHZkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPk1vcnJvIEJheTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5DQSA5MzQ0MjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LXBob25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0PkdpdmUgVXMgYSBDYWxsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cD4oODA1KSAyMjUtMTMyMDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0PlJlYWNoIFVzIGJ5IEVtYWlsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5naWxsaWdhbnNfc2FuZHdpY2hAeWFob28uY29tPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Vycy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5CdXNpbmVzcyBIb3VyczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cIm9sLWRheXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9uZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VHVlc2RheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPldlZG5lc2RheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlRodXJzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+RnJpZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U2F0dXJkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdW5kYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJvbC1ob3Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjExQU0gLSA1UE08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjExQU0gLSA1UE08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2lnbmVyLWluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxwPkRlc2lnbmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTmlnaElzVGhlRW5kXCI+TmlnaElzVGhlRW5kPC9hPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9vdGVyPmApO1xuICAgIH1cbiAgICBcbiAgY29uc3QgdXBkYXRlVG9NZW51SFRNTCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgXG4gICAgYDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLW5hdi1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuXCIgaWQ9XCJ0b2dnbGUtbmF2LWJ0blwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1vcGVuXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1jbG9zZSBoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9XCJtYWluLW5hdlwiIGlkPVwibWFpbi1uYXZcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJnby10by1tYWluXCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1tYWluXCIgaHJlZj1cIiNcIj5NYWluPC9hPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1lbnVcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1lbnVcIiBocmVmPVwiI1wiPk1lbnU8L2E+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tYWJvdXRcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWFib3V0XCIgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJnby10by1sb2NhdGlvblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbG9jYXRpb25cIiBocmVmPVwiI1wiPkxvY2F0aW9uPC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtbWFpbi1ncmFiIHRpdGxlLW1haW4tZ3JhYi1tZW51XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXRpdGxlLWNvbnRhaW5lciBtYWluLXRpdGxlLWNvbnRhaW5lci1tZW51XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwibWFpbi10aXRsZSBtYWluLXRpdGxlLW1lbnVcIj5NRU5VPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXNlY3Rpb24tYnJlYWtsaW5lXCI+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUgc2lnbmF0dXJlLXN1YnNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtdGl0bGUgc2lnbmF0dXJlLXN1YnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+U2lnbmF0dXJlIFN1YnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPkNob2ljZSBvZjogRnJlbmNoLCBEdWNoIENydW5jaCwgb3IgV2hlYXQgUm9sbDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkLWNvbnRhaW5lciBzaWduYXR1cmUtc3Vic1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBzaWduYXR1cmUtc3Vic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Q2x1YiBTdWIgPHNwYW4+JDEzPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR1cmtleSwgSGFtLCBCYWNvbiwgQW1hcmljYW4gQ2hlZXNlLCBNYXlvLCBNdXN0YXJkLCBMZXR0dWNlLCBSZWQgT25pb24sIFRvbWF0bywgUGVwcGVyb25jaW5pLCBWaW5lZ2FyICYgT2lsIHcvIFNlYXNvbmluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgc2lnbmF0dXJlLXN1YnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pkl0YWxpYW4gU3ViIDxzcGFuPiQxMzwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYW0sIFNhbGFtaSwgUHJvdm9sb25lLCBNYXlvLCBNdXN0YXJkLCBMZXR0dWNlLCBSZWQgT25pb24sIFRvbWF0bywgUGVwcGVyb25jaW5pLCBWaW5lZ2FyICYgT2lsIHcvIFNlYXNvbmluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgc2lnbmF0dXJlLXN1YnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkIuTC5BLlQuIDxzcGFuPiQxMjwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CYWNvbiwgTGV0dHVjZSwgTWF5bywgQXZvY2FkbywgVG9tYXRvLCB2aW5lZ2FyICYgT2lsIHcvIFNlYXNvbmluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgc2lnbmF0dXJlLXN1YnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlZlZ2dpZSBTdWIgPHNwYW4+JDEyPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoZWVzZSwgTGV0dHVjZSwgVG9tYXRvLCBDdWNjdW1iZXIsIE9uaW9uLCBQaWNrbGVzLCBWaW5lZ2FyICYgT2lsIHcvIFNlYXNvbmluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZSBob3Qtc2FuZHdpY2hlc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS10aXRsZSBob3Qtc2FuZHdpY2hlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ib3QgU2FuZHdpY2hlczwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZC1jb250YWluZXIgaG90LXNhbmR3aWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgaG90LXNhbmR3aWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PktpbGxlciBQYXN0cmFtaSA8c3Bhbj4kMTU8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzdHJhbWksIFBlcHBlci1KYWNrIENoZWVzZSwgTWF5bywgTXVzdGFyZCwgUGlja2xlcywgUGVwcGVyb25jaW5pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBob3Qtc2FuZHdpY2hlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Um9hc3QgQmVlZiA8c3Bhbj4kMTU8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9hc3QgQmVlZiwgU3dpc3MgQ2hlZXNlLCBNYXlvLCBEaWpvbiBNdXN0YXJkLCBMZXR0dWNlLCBPbmlvbiwgVG9tYXRvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBob3Qtc2FuZHdpY2hlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+UGhpbGx5IENoZWVzZXN0ZWFrIDxzcGFuPiQxNTwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGVhaywgUHJvdm9sb25lIENoZWVzZSwgQmVsbCBQZXBwZXJzLCBPbmlvbiwgTWF5bzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1yaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZSBtZWx0c1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS10aXRsZSBtZWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5NZWx0czwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q2hvaWNlIG9mOiBTb3VyZG91Z2gsIFRoaWNrIFdoaXRlLCBvciBSeWU8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZC1jb250YWluZXIgbWVsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgbWVsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlR1bmEgTWVsdCA8c3Bhbj4kMTA8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHVuYSwgQ2hlZGRhciBDaGVlc2UsIE1heW88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIG1lbHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5IYW0gJiBDaGVlc2UgPHNwYW4+JDEwPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhbSwgU3dpc3MgQ2hlZXNlLCBNYXlvLCBEaWpvbiBNdXN0YXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBtZWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VHVya2V5IE1lbHQgPHNwYW4+JDEyPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR1cmtleSwgQmFjb24sIENoZWRkYXIgQ2hlZXNlLCBNYXlvLCBUb21hdG88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIG1lbHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5UaGUgUnViZW4gPHNwYW4+JDEyPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhc3RyYW1pLCBTd2lzcyBDaGVlc2UsIFNhdWVya3JhdXQsIFRob3VzYW5kIElzbGFuZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZSBzb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLXRpdGxlIHNvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+U291cCBvZiBUaGUgRGF5PC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkLWNvbnRhaW5lciBzb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIHNvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkN1cCA8c3Bhbj4kNDwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Qm93bCA8c3Bhbj4kNjwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlIGRyaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS10aXRsZSBkcmlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+RHJpbmtzICYgU25hY2tzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkLWNvbnRhaW5lciBkcmlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgZHJpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldhdGVyIEJvdHRsZSAkMS41MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FubmVkIERyaW5rcyAkMi4wMDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm90dGxlZCBEcmlua3MgJDIuNTA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJyb3duaWVzICYgQ29va2llcyAkMi41MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hpcHMgJDIuMDA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8YXNpZGUgY2xhc3M9XCJidWlsZC15b3VyLW93bi1tb2RlbFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidWlsZC15b3VyLW93bi1wb3B1cC1idG5cIiBpZD1cImJ1aWxkLXlvdXItb3duLXBvcHVwLWJ0blwiPkJ1aWxkIFlvdXIgT3duIFNhbmR3aWNoPHNwYW4+JDEzPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgIDxkaWFsb2cgY2xhc3M9XCJidWlsZC15b3VyLW93bi1wb3B1cFwiIGlkPVwiYnVpbGQteW91ci1vd24tcG9wdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLXlvdXItb3duLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLXlvdXItb3duLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLXRpdGxlIGJ1aWxkLXlvdXItb3duLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QnVpbGQgWW91ciBPd24gPHNwYW4+JDEzPC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNob2ljZSBvZjogRnJlbmNoIFJvbGwsIER1Y2ggQ3J1bmNoLCBXaGVhdCBSb2xsLCBUaGljayBXaGl0ZSwgUnllLCBvciBTb3VyZG91Z2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ0blwiIGlkPVwiY2xvc2UtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtYnRuLXNwYW5cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZC1jb250YWluZXIgYnVpbGQteW91ci1vd24tb3B0aW9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi1jYXJkIG1lYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5NZWF0czo8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHVuYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR1cmtleTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNhbGFtaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvYXN0IEJlZWYgPHNwYW4+KyQyPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhc3RyYW1pIDxzcGFuPiskMjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLWNhcmQgY2hlZXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Q2hlZXNlOjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbWVyaWNhbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN3aXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGVwcGVyLUphY2s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVkZGFyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJvdm9sb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qmx1ZSBDaGVlc2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi1jYXJkIHZlZ2dpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5WZWdnaWVzOjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MZXR0dWNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3ByaW5nIEdyZWVuczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBlcHBlcm9uY2luaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBpY2tsZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DdWNjdW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVkIE9uaW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG9tYXRvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi1jYXJkIGNvbmRpbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Db25kaW1lbnRzOjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXlvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TXVzdGFyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpam9uIE11c3RhcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SYW5jaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9pbCAmIFZpbmVnYXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD53LyBTZWFzb25pbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1vcHRpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tY2FyZCBidWlsZC1vcHRpb24tZXh0cmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV4dHJhczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJhY29uIDxzcGFuPiskMjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF2b2NhZG8gPHNwYW4+KyQyPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXh0cmEgQ2hlZXNlIDxzcGFuPiskMjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4dHJhIE1lYXQgPHNwYW4+KyQyPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2RpYWxvZz5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9tYWluPlxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduZXItaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICA8cD5EZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05pZ2hJc1RoZUVuZFwiPk5pZ2hJc1RoZUVuZDwvYT48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5gXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRvQWJvdXRIVE1MID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBcbiAgICAgIGA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLW5hdi1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLW5hdi1idG5cIiBpZD1cInRvZ2dsZS1uYXYtYnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtb3BlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1jbG9zZSBoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3M9XCJtYWluLW5hdlwiIGlkPVwibWFpbi1uYXZcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWFpblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWFpblwiIGhyZWY9XCIjXCI+TWFpbjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWVudVwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tYWJvdXRcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWFib3V0XCIgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbG9jYXRpb25cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWxvY2F0aW9uXCIgaHJlZj1cIiNcIj5Mb2NhdGlvbjwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc2VjdGlvbi1icmVha2xpbmUgYWJvdXQtYnJlYWtsaW5lXCI+XG4gICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uLWNvbnRhaW5lciBsb2NhdGlvbi1iYWNrZ3JvdW5kIGFib3V0LWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXR3by1jb250YWluZXIgbG9jYXRpb24tc2VjdGlvbi1jb250YWluZXIgYWJvdXQtc2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5VbmRlciBDb25zdHJ1Y3Rpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduZXItaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICA8cD5EZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05pZ2hJc1RoZUVuZFwiPk5pZ2hJc1RoZUVuZDwvYT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+YCk7XG4gIH0gXG4gIGNvbnN0IHVwZGF0ZVRvTG9jYXRpb25IVE1MID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBcbiAgICAgIGA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLW5hdi1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLW5hdi1idG5cIiBpZD1cInRvZ2dsZS1uYXYtYnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtb3BlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1jbG9zZSBoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3M9XCJtYWluLW5hdlwiIGlkPVwibWFpbi1uYXZcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWFpblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWFpblwiIGhyZWY9XCIjXCI+TWFpbjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWVudVwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWVudVwiIGhyZWY9XCIjXCI+TWVudTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tYWJvdXRcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWFib3V0XCIgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbG9jYXRpb25cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWxvY2F0aW9uXCIgaHJlZj1cIiNcIj5Mb2NhdGlvbjwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc2VjdGlvbi1icmVha2xpbmVcIj5cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluLXNlY3Rpb24tY29udGFpbmVyIGxvY2F0aW9uLWJhY2tncm91bmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d28tY29udGFpbmVyIGxvY2F0aW9uLXNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d29cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxoND5Mb2NhdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cD40ODAgTW9ycm8gQmF5IEJsdmQ8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Nb3JybyBCYXk8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5DQSA5MzQ0MjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgPGg0PkdpdmUgVXMgYSBDYWxsPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPig4MDUpIDIyNS0xMzIwPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5SZWFjaCBVcyBieSBFbWFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwPmdpbGxpZ2Fuc19zYW5kd2ljaEB5YWhvby5jb208L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Vycy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGg0PkJ1c2luZXNzIEhvdXJzPC9oND5cbiAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJvbC1kYXlzXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+TW9uZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5UdWVzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5XZWRuZXNkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlRodXJzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5GcmlkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlNhdHVyZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TdW5kYXk8L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwib2wtaG91cnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduZXItaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICA8cD5EZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05pZ2hJc1RoZUVuZFwiPk5pZ2hJc1RoZUVuZDwvYT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+YCk7XG4gIH1cbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlVG9NYWluSFRNTCxcbiAgICAgIHVwZGF0ZVRvTWVudUhUTUwsXG4gICAgICB1cGRhdGVUb0Fib3V0SFRNTCxcbiAgICAgIHVwZGF0ZVRvTG9jYXRpb25IVE1MLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVQYWdlVmlldzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=