const yourOwnPopupBtn = document.getElementById('build-your-own-popup-btn');
const buildYourOwnPopup = document.getElementById('build-your-own-popup');
function openBuildYourSandwich() {
    yourOwnPopupBtn.addEventListener('click', () => {
        return buildYourOwnPopup.showModal();
    })
}

const closePopupBtn = document.getElementById('close-btn');
function closeBuildYourSandwich() {
    closePopupBtn.addEventListener('click', () => {
        return buildYourOwnPopup.close();
    })
}

openBuildYourSandwich();
closeBuildYourSandwich();