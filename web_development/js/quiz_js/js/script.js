const button = document.querySelector('#button');
button.addEventListener('click', loadQuestion);

function loadQuestion() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/data.json', true);

    xhr.onload = function() {
        if (this.status == 200) {
            const dataArray = JSON.parse(this.responseText);
            var questionSpace = document.getElementById('question');
            questionSpace.textContent = dataArray[0].question;
        }
    }

    xhr.send();

}
