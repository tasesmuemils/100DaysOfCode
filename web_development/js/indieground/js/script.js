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
const carouselContainer = document.getElementById('img-carousel');
const carouselImages = carouselContainer.querySelectorAll('img');
const carouselImagesCount = carouselImages.length;
const carouselContainerWidth = carouselImagesCount * carouselImages[0].width;

const sliderWrapper = document.getElementById('slider');
const sliderWrapperHeight = carouselImages[carouselImages.length - 1].height;
const sliderWrapperWidth = carouselImages[carouselImages.length - 1].width;
sliderWrapper.style.width = sliderWrapperWidth + 'px';
sliderWrapper.style.height = sliderWrapperHeight + 'px';

carouselContainer.style.width = carouselContainerWidth + 12 + 'px';
carouselContainer.style.marginLeft = -carouselImages[carouselImages.length - 1].width + 'px';
carouselContainer.insertBefore(carouselImages[carouselImages.length - 1], carouselContainer.firstChild);

let counter = 1;

function carouselAnimation() {
    carouselContainer.style.left = (carouselImages[carouselImages.length - 1] * 2);
    console.log(carouselContainer.style.left);
    carouselContainer.insertBefore(carouselImages[carouselImages.length - 1], carouselContainer.firstChild);
    carouselContainer.style.left = '';
}

setInterval(carouselAnimation, 1000);






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
