const button = document.querySelector('#button1');
button.addEventListener('click', loadQuestion);

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function () {
    document.querySelector('.answers').style.display = 'grid';
    //loadQuestion();
});


const question = document.getElementById('question');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');

const checkA = document.getElementById('check_A');
const checkB = document.getElementById('check_B');
const checkC = document.getElementById('check_C');
const checkD = document.getElementById('check_D');
const radios = [checkA, checkB, checkC, checkD];



let i = 0;

function loadQuestion() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/data.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            const dataArray = JSON.parse(this.responseText);
            question.textContent = dataArray[i].question;
            answerA.textContent = dataArray[i].answer_A;
            answerB.textContent = dataArray[i].answer_B;
            answerC.textContent = dataArray[i].answer_C;
            answerD.textContent = dataArray[i].answer_D;
            let correctAnswer = dataArray[i].correct;
            for (let k = 0; k < radios.length; k++) {
                if ((radios[k].checked === true) && (radios[k].parentNode.textContent === correctAnswer)) {
                    console.log('TRUE');
                } else {
                    console.log('FALSE');
                }
            }
            i++;
            if (i == dataArray.length) {
                button.removeEventListener('click', loadQuestion);
            }
        }
    }
    xhr.send();
}
