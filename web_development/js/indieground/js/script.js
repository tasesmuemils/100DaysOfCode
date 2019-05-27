//Page louder
window.addEventListener('load', () => {
    const preload = document.querySelector('.page-loader');
    preload.classList.add('loader-finish');
})


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


//Search Modal
const searchModal = document.getElementById('search-modal');
const openModalButton = document.getElementById('search-modal-open');
const closeModalButton = document.getElementById('close-modal');

function openModal(e) {
    console.log(e)
    searchModal.style.display = 'flex';
}

function closeModal(e) {
    console.log(e)
    searchModal.style.display = 'none';
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);


//Parallax background efect (for one thin at the moment)
const parallaxBgNodeList = document.querySelectorAll('.parallaxBg');
const parallaxBgArray = Array.from(parallaxBgNodeList);

function parallaxEffect() {
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

    const sliderWrapperWidth = carouselImages[carouselImagesCount - 1].width + 'px';


    sliderWrapper[i].style.width = sliderWrapperWidth;

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
