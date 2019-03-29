const sliderInputs = document.querySelectorAll(".result");
const textInputs = document.querySelectorAll('input[type="text"]');
const copyCSS = document.getElementById('copyCSScode');

//Change NodeList to Array
const sliderArray = Array.from(sliderInputs);
const arrayText = Array.from(textInputs);

//convert hex to rgb, so opacity on shadow is available (from StackOverflow)
function hex2rgb(hex) {
    r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (r) {
        return r.slice(1, 4).map(function (x) {
            return parseInt(x, 16);
        });
    }
}

function handleSliderUpdate(x) {
    //Suffix will get attributes value. New way can be .dataset (this.dataset.sizing)
    const suffix = this.getAttribute('data-sizing') || '';
    if (this.type === 'range') {
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        let textInput = this.previousElementSibling.lastElementChild.firstElementChild;
        textInput.value = this.value;
    } else {
        document.documentElement.style.setProperty(`--${this.name}`, hex2rgb(this.value).toString() + suffix);
        this.nextElementSibling.value = this.value
    }

    copyCSS.textContent = `box-shadow: ${sliderArray[0].value}xp ${sliderArray[1].value}px ${sliderArray[2].value}px ${sliderArray[3].value}px rgba(${hex2rgb(sliderArray[4].value).toString()}, ${sliderArray[7].value});`

}



for (let i = 0; i < sliderArray.length; i++) {
    arrayText[i].addEventListener('input', function () {
        if ((this.value != this.parentElement.parentElement.nextElementSibling.value) || (this.value != this.previousElementSibling.value)) {
            (this.parentElement.parentElement.nextElementSibling.value = this.value) || (this.previousElementSibling.value = this.value);
        }
    });
    sliderArray[i].addEventListener('change', handleSliderUpdate);
    sliderArray[i].addEventListener('mousemove', handleSliderUpdate)
}
