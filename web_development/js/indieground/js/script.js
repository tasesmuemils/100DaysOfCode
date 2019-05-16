// //Parallax background efect (for one thin at the moment)
const parallaxBgNodeList = document.querySelectorAll('.parallaxBg');
const parallaxBgArray = Array.from(parallaxBgNodeList);

function parallaxEffect(e) {
    var scrolled = window.pageYOffset;
    const rate = (scrolled * 0.5 - 600);
    parallaxBgArray[0].style.transform = 'translateY(' + rate + 'px)';
}

window.addEventListener('scroll', parallaxEffect);
