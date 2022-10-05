"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["clickevents"],{

/***/ "./src/clickevents.js":
/*!****************************!*\
  !*** ./src/clickevents.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navEvents = (() => {
    const loadNavClickListener = () => {
        const navLinks = document.getElementById("main-nav");
        navLinks.addEventListener('click', (e) => {
            checkEventClass(e.target);
        })
    }

    return {
        loadNavClickListener,
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navEvents);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/clickevents.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tldmVudHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY2xpY2tldmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2RXZlbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBsb2FkTmF2Q2xpY2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbmF2XCIpO1xuICAgICAgICBuYXZMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjaGVja0V2ZW50Q2xhc3MoZS50YXJnZXQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWROYXZDbGlja0xpc3RlbmVyLFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2RXZlbnRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==