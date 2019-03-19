const button = document.querySelector('#button1');
button.addEventListener('click', loadQuestion);

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function () {
    document.querySelector('.answers').style.display = 'grid';
    document.querySelector('.counterSection').style.display = 'grid';
    button2.style.display = 'none';
    loadQuestion();
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

const errorMessage = document.getElementById('errorMessage');
const correctCount = document.getElementById('correct');
const incorrectCount = document.getElementById('incorrect');


let eventClickCount = 0;
var correctCountValue = 0;
var incorrectCountValue = 0;
let i = 0;






function loadQuestion() {
    eventClickCount++;

    //console.log('click count: ', eventClickCount);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/data.json', true);

    xhr.onload = function () {
        if (this.status == 200) {

            const dataArray = JSON.parse(this.responseText);
            //console.log("array element: ", i);

            if ((eventClickCount > 1) && ((checkA.checked == false) && (checkB.checked == false) && (checkC.checked == false) && (checkD.checked == false))) {
                return;
            }


            var correctAnswer = dataArray[i].correct;

           
           

            function answerCheck() {

                if (eventClickCount === 1) {
                    return;
                }

                for (let k = 0; k < radios.length; k++) {
                    if ((radios[k].checked === true) && (radios[k].parentNode.textContent == correctAnswer)) {
                        correctCountValue++;
                        correctCount.textContent = correctCountValue;

                    } else if ((radios[k].checked === true) && (radios[k].parentNode.textContent != correctAnswer)) {
                        incorrectCountValue++;
                        incorrectCount.textContent = incorrectCountValue;
                    }
                }
                function uncheckAll() {
                    for (let z = 0; z < radios.length; z++) {
                        radios[z].checked = false;
                    }
                }
                uncheckAll();

            }

            function nextQuestion() {
                if (eventClickCount > 1) {
                    i++;
                }
                //console.log("array element: ", i);
                if (i == dataArray.length) {
                    button.removeEventListener('click', loadQuestion);
                }
            }

            function quizContent() {
                question.textContent = dataArray[i].question;
                answerA.textContent = dataArray[i].answer_A;
                answerB.textContent = dataArray[i].answer_B;
                answerC.textContent = dataArray[i].answer_C;
                answerD.textContent = dataArray[i].answer_D;

            }


            answerCheck();
            
            nextQuestion();
            
            quizContent();
    
        }
    }
    xhr.send();
}
