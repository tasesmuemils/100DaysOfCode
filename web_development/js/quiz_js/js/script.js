const button = document.querySelector('#button1');
button.addEventListener('click', loadQuestion);

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function () {
    document.querySelector('.answers').style.display = 'grid';
    loadQuestion();
    button2.style.display = 'none';
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

let eventClickCount = 0;
let i = 0;

function loadQuestion() {
    eventClickCount++;
    console.log('click count', eventClickCount);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/data.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            const dataArray = JSON.parse(this.responseText);

            var correctAnswer = dataArray[i].correct;

            function quizContent() {
                if (eventClickCount == 1) {
                    
                }
                question.textContent = dataArray[i].question;
                answerA.textContent = dataArray[i].answer_A;
                answerB.textContent = dataArray[i].answer_B;
                answerC.textContent = dataArray[i].answer_C;
                answerD.textContent = dataArray[i].answer_D;
            }
            quizContent();


            function answerCheck() {
                for (let k = 0; k < radios.length; k++) {
                    if ((radios[k].checked === true) && (radios[k].parentNode.textContent === correctAnswer)) {
                        console.log(correctAnswer);
                    } else if ((radios[k].checked === false) && (radios[k].parentNode.textContent != correctAnswer)) {
                        //console.log("BREAK")
                        break;
                    } else {
                        //console.log(' ELSE  FALSE');
                    }
                }
            }
            answerCheck();


            if (eventClickCount == 1) {
                i = 0;
            } else {
                i++;
            }
            console.log(i);
            if (i == dataArray.length) {
                button.removeEventListener('click', loadQuestion);
            }
        }
    }
    xhr.send();
}