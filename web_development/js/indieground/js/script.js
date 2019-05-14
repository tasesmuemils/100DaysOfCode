//Parallax background efect
const parallaxBg = document.querySelectorAll('.parallaxBg');

function parallaxEffect(e) {
    let scrolled = window.pageYOffset;
    //console.log(scrolled);
    parallaxBg.forEach(
        bg => {
            if ((scrolled / 0.63) >= bg.offsetTop) {
                bg.style.backgroundPositionY = (scrolled * 0.64 + 'px');
            }
            
            console.log(scrolled, bg, bg.offsetTop, bg.style.backgroundPositionY);
        }
    );
}

window.addEventListener('scroll', parallaxEffect);
