import _ from "lodash";
import updatePageView from "./render.js";

(() => {
	updatePageView.updateToMainHTML();

	function loadNavClickListener() {
		const navLinks = document.getElementById("main-nav");
		navLinks.addEventListener("click", (e) => {
			checkEventClass(e.target);
		});
	}

	function openCloseMainNav() {
		let mainNav = document.getElementById("main-nav");
		let navToggle = document.getElementById("toggle-nav-btn");
		navToggle.addEventListener("click", () => {
			let visibility = mainNav.getAttribute("data-visible");

			if (visibility === "false") {
				mainNav.setAttribute("data-visible", true);
			}
			if (visibility === "true") {
				mainNav.setAttribute("data-visible", false);
			}
		});
	}

	function checkEventClass(element) {
		if (element.classList.contains("go-to-main")) {
			console.log("main");
			removeAllNodes();
			updatePageView.updateToMainHTML();
			loadNavClickListener();
			openCloseMainNav();
		}
		if (element.classList.contains("go-to-menu")) {
			console.log("menu");
			removeAllNodes();
			updatePageView.updateToMenuHTML();
			loadNavClickListener();
			openBuildYourSandwich();
			closeBuildYourSandwich();
			openCloseMainNav();
		}
		if (element.classList.contains("go-to-about")) {
			console.log("about");
			removeAllNodes();
			updatePageView.updateToAboutHTML();
			loadNavClickListener();
			openCloseMainNav();
		}
		if (element.classList.contains("go-to-location")) {
			console.log("location");
			removeAllNodes();
			updatePageView.updateToLocationHTML();
			loadNavClickListener();
			openCloseMainNav();
		}
	}

	function removeAllNodes() {
		let body = document.body;
		while (body.firstChild) {
			body.removeChild(body.firstChild);
		}
	}

	function openBuildYourSandwich() {
		let yourOwnPopupBtn = document.getElementById(
			"build-your-own-popup-btn"
		);
		let buildYourOwnPopup = document.getElementById("build-your-own-popup");
		yourOwnPopupBtn.addEventListener("click", () => {
			return buildYourOwnPopup.showModal();
		});
	}
	function closeBuildYourSandwich() {
		let buildYourOwnPopup = document.getElementById("build-your-own-popup");
		let closePopupBtn = document.getElementById("close-btn");
		closePopupBtn.addEventListener("click", () => {
			return buildYourOwnPopup.close();
		});
	}

	loadNavClickListener();
	openCloseMainNav();
})();
