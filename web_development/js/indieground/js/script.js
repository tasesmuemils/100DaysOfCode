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



//Parallax background efect (for one thin at the moment)
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
const sliderWrapperNodeList = document.querySelectorAll('.slider');
const sliderWrapper = Array.from(sliderWrapperNodeList);

for (let i = 0; i < sliderWrapper.length; i++) {
    const carouselContainer = sliderWrapper[i].firstElementChild;
    const carouselImagesNodeList = carouselContainer.querySelectorAll('img');
    const carouselImages = Array.from(carouselImagesNodeList);
    const carouselImagesCount = carouselImages.length;

    const sliderWrapperHeight = carouselImages[carouselImagesCount - 1].height + 'px';
    const sliderWrapperWidth = carouselImages[carouselImagesCount - 1].width + 'px';


    sliderWrapper[i].style.width = sliderWrapperWidth;
    sliderWrapper[i].style.height = sliderWrapperHeight;    

    const carouselContainerWidth = carouselImagesCount * carouselImages[0].width;
    

    carouselContainer.style.width = carouselContainerWidth + 12 + 'px';
    carouselContainer.style.marginLeft = -carouselImages[carouselImagesCount - 1].width;

    var animationInterval = setInterval(carouselAnimation, 3000);

    function carouselAnimation() {
        carouselContainer.classList.add('imgCarouselAnimation');
        carouselContainer.style.transform = 'translateX(' + '-' + sliderWrapperWidth + ')';
    }

    carouselContainer.addEventListener('transitionend', function (e) {
        carouselContainer.insertBefore(carouselContainer.firstElementChild, carouselContainer.lastElementChild.nextSibling);
        carouselContainer.style.transform = '';
        carouselContainer.classList.remove('imgCarouselAnimation');
    })
}


