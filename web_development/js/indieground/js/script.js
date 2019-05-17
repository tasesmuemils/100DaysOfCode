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
