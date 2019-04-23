const trigers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightlink() {
    const linkCords = this.getBoundingClientRect();
    const cords = {
        width : linkCords.width,
        height : linkCords.height,
        top : linkCords.top + window.scrollY,
        left : linkCords.left + window.scrollX
    }
    highlight.style.width = `${cords.width}px`;
    highlight.style.height = `${cords.height}px`;
    highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
}

trigers.forEach(a => a.addEventListener('mouseenter', highlightlink));
