// //Parallax background efect
const parallaxBgNodeList = document.querySelectorAll('.parallaxBg');
const parallaxBgArray = Array.from(parallaxBgNodeList);

function parallaxEffect(e) {
    let scrolled = window.pageYOffset;
    //parallaxBgArray[0].style.backgroundPositionY =  (scrolled * 0.7) + 'px';
}

window.addEventListener('scroll', parallaxEffect);

// parallaxBg.forEach(
//     bg => {
//         if ((scrolled / 0.63) >= bg.offsetTop) {
//             bg.style.backgroundPositionY = (scrolled * 0.64 + 'px');
//         }

//         console.log(scrolled, bg, bg.offsetTop, bg.style.backgroundPositionY);
//     }
// );

//parallaxBgArray[i].style.backgroundPositionY = ((scrolled * 1.2) + 'px');