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


//Images corusel
const coruselContainer = document.getElementById('img-corusel');
const coruselImages = coruselContainer.getElementsByTagName('img');

let counter = 1;

//Toogle navigation button 
const toogleButton = document.querySelector('.toogle-button');

function toogleMenu(e) {
    console.log(e);
    const navigationItems = document.getElementById('nav-items');
    if (navigationItems.classList.contains('resposive-toogle')) {
        navigationItems.classList.remove('resposive-toogle');
    } else {
        navigationItems.classList.add('resposive-toogle');
    }
}

toogleButton.addEventListener('click', toogleMenu);