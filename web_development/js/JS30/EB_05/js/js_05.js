const panels = document.querySelectorAll(".panel");

//ads extra class
function toggleOpen() {
    this.classList.toggle("open");
}

//if property name includes "flex" (some browsers have "flex", som have "flex-grow"), adds class, which tranforms Y axis to 0
//so <p> top and bottom will appear
function toogleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        this.classList.toggle('open-active');
    }
}

//Ads class open on click
panels.forEach(function (panel) {
    panel.addEventListener('click', toggleOpen);
})

//when transition ends, this triggers a function, which will add "opne-active" class
panels.forEach(function (panel) {
    panel.addEventListener('transitionend', toogleActive);
})