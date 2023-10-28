const mobileMenu = document.querySelector('.mobile_menu_container');
const burderForOpen = document.querySelector('#burger');
const burgerForClose = document.querySelector('#closeBurger');
const blur = document.querySelector('.blur-all-page');
const mobileBg = document.querySelector('.bg');

function forOpeningMenu(){
    mobileMenu.style.transform = "translateX(0%)";
    blur.style.filter = "blur(2px)";
    mobileBg.style.opacity = "0.7";
}
function forClosingMenu(){
    mobileMenu.style.transform = "translateX(-100%)";
    blur.style.filter = "blur(0px)";
    mobileBg.style.opacity = "0";
}



burderForOpen.addEventListener('click' , forOpeningMenu);
burgerForClose.addEventListener('click' , forClosingMenu);
