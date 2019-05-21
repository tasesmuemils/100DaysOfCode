// //Parallax background efect (for one thin at the moment)
const parallaxBgNodeList = document.querySelectorAll('.parallaxBg');
const parallaxBgArray = Array.from(parallaxBgNodeList);

function parallaxEffect(e) {
    const scrolled = window.pageYOffset;
    for (let i = 0; i < parallaxBgArray.length; i++) {
        const parallaxDivTop = parallaxBgArray[i].parentElement.offsetTop;
        const rate = (scrolled * 0.5 - (parallaxDivTop / 2) + 300);
        parallaxBgArray[i].style.transform = 'translateY(' + rate + 'px)';
    }

}

window.addEventListener('scroll', parallaxEffect);


//Images carousel
const sliderWrapper = document.getElementById('slider');
const carouselContainer = document.getElementById('img-carousel');
const carouselImages = carouselContainer.querySelectorAll('img');
const carouselImagesCount = carouselImages.length;

const sliderWrapperHeight = carouselImages[carouselImages.length - 1].height + 'px';
const sliderWrapperWidth = carouselImages[carouselImages.length - 1].width  + 'px';

const carouselContainerWidth = carouselImagesCount * carouselImages[0].width;



sliderWrapper.style.width = sliderWrapperWidth;
sliderWrapper.style.height = sliderWrapperHeight;

carouselContainer.style.width = carouselContainerWidth + 12 + 'px';
carouselContainer.style.marginLeft = '-' + sliderWrapperWidth;
//carouselContainer.insertBefore(carouselContainer.lastChild, carouselContainer.firstChild);
console.log(carouselImages[carouselImages.length - 1].currentSrc);

let counter = 1;

var inter = setInterval(carouselAnimation, 1000);

function carouselAnimation() {
    carouselContainer.classList.add('imgCarouselAnimation');
    carouselContainer.style.transform = 'translateX(' + '-' + sliderWrapperWidth + ')';
    console.log(carouselContainer.style.transform, carouselImages[0].currentSrc);
    // carouselContainer.style.marginLeft = - carouselImages[carouselImages.length - 1].width * 2 + 'px';
    // console.log(carouselContainer.classList);
    //carouselContainer.insertBefore(carouselContainer.firstChild, carouselContainer.firstChild);

}








//Toogle navigation button 
const toogleButton = document.querySelector('.toogle-button');
const closeToogle = document.getElementById('close-toogle');
const navigationItems = document.getElementById('nav-items');

function toogleMenu(e) {
    console.log(e);
    navigationItems.classList.add('resposive-toogle');
    navigationItems.classList.remove('navigation-bar');
}

function closeMenu() {
    navigationItems.classList.add('navigation-bar');
    navigationItems.classList.remove('resposive-toogle');
}

toogleButton.addEventListener('click', toogleMenu);
closeToogle.addEventListener('click', closeMenu);
