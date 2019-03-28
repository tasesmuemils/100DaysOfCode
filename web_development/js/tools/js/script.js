const sliderInputs = document.querySelectorAll("input[type='range']");
const boxShadowObject = document.getElementsByClassName('box-shadow-object');

//Change NodeList to Array
const sliderArray = Array.from(sliderInputs);

function handleUpdate() {

    //Suffix will get attributes value. New way can be .dataset (this.dataset.sizing)
    const suffix = this.getAttribute('data-sizing') || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

for (let i = 0; i < sliderArray.length; i++) {
    sliderArray[i].addEventListener('change', handleUpdate);
    sliderArray[i].addEventListener('mousemove', handleUpdate)
}