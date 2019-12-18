const startGameButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const rulesButton = document.getElementById("rules-btn");
const gameRules = document.getElementById("rules");
const resultTable = document.getElementById("result-table");
const questionsContainer = document.getElementById("question-container");
const helpOptions = document.getElementById("help-options");
const twoOptions = document.getElementById("two-options");
const callFriend = document.getElementById("call-friend");
const questionType = document.getElementById("question-type");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

rulesButton.addEventListener("click", () => {
    gameRules.classList.remove("hide");
    rulesButton.classList.add("hide");
    startGameButton.classList.remove("hide");
});

startGameButton.addEventListener("click", showTable);
nextButton.addEventListener("click", () => {
    resultTable.classList.remove("hide");
    questionsContainer.classList.add("hide");
    nextButton.classList.add("hide");
})

twoOptions.addEventListener("click", twoOptionsCheck);
callFriend.addEventListener("click", callFriendTime);

function showTable() {
    gameRules.classList.add("hide");
    startGameButton.classList.add("hide");
    resultTable.classList.remove("hide");
    Array.from(resultTable.firstElementChild.firstElementChild.children)
        .forEach(row => {
            row.firstElementChild.addEventListener("click", startGame);
        });
}

function startGame(e) {
    resultTable.classList.add("hide");
    questionsContainer.classList.remove("hide");
    startGameButton.classList.add("hide");
    const chooseSection = e.target;
    const questionSectionArray = [];

    for (let i = 0; i < questions.length; i++) {
        if (chooseSection.textContent == questions[i].section) {
            questionSectionArray.push(questions[i]);
            console.log(questionSectionArray, "array");
        }
    };

    shuffledQuestions = questionSectionArray.sort(() => Math.random() - 0.5);
    console.log(shuffledQuestions, "shuffled");
    currentQuestionIndex = 0;

    if (shuffledQuestions === undefined || shuffledQuestions.length == 0) {
        nextButton.classList.remove("hide");
        questionType.classList.add("hide");
        nextButton.textContent = "Uz sākumu";
        questionElement.textContent = "Vairāk jautājumu šajā līmenī nav!";
        helpOptions.classList.add("hide");
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        return;
    }

    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    question.section = -1;
    helpOptions.classList.remove("hide");
    questionType.innerText = question.price;
    questionElement.innerText = question.question;

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function twoOptionsCheck() {
    const answersArray = Array.from(answerButtonsElement.childNodes);
    const items3Array = [];
    for (let i = 0; i < answersArray.length; i++) {
        if (answersArray[i].dataset.correct !== "true") {
            answersArray[i].classList.add("hide");
            items3Array.push(answersArray[i]);
        }
    }
    console.log(items3Array);
    const randomWrongAnswers = items3Array.sort(() => Math.random() - 0.5);
    randomWrongAnswer = randomWrongAnswers[0];
    randomWrongAnswer.classList.remove("hide");
    console.log(randomWrongAnswer);
}

function callFriendTime() {
    let timeLeft = 10;
    const timerWrapper = document.createElement("div");
    const timer = document.createElement("h2");
    timer.textContent = timeLeft;
    const startTimer = document.createElement("button");
    startTimer.addEventListener("click", () => {
        const timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == 0) {
                clearTimeout(timerId);
                timerWrapper.classList.add("hide");
            } else {
                timer.textContent = timeLeft - 1;
                timeLeft--;
            }
        }
    })
    startTimer.textContent = "Sākt!"
    timerWrapper.appendChild(timer);
    timerWrapper.appendChild(startTimer);

    questionsContainer.insertBefore(timerWrapper, questionsContainer.firstElementChild);
}

function resetState() {
    console.log("reset");
    nextButton.textContent = "Nākošais jautājums";
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    console.log(selectedButton);
    setStatusClass(selectedButton, selectedButton.dataset.correct);
    nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
    // clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct) {
                button.classList.add("correct");
            }
        })
    }
}

// function clearStatusClass(element) {
//     element.classList.remove("correct");
//     element.classList.remove("wrong");
// }

const questions = [{
        section: 1,
        price: "10 EUR",
        question: "Šo vārdu lieto, ne vien runājot par ātrumu, bet arī - par kurpju sašņorēšanu",
        answers: [{
                text: "Mezgls",
                correct: true
            },
            {
                text: "Tauva",
                correct: false
            },
            {
                text: "Kabelis",
                correct: false
            },
            {
                text: "Virve",
                correct: false
            }
        ]
    },
    {
        section: 1,
        price: "10 EUR",
        question: "Paradīzes dārzā Ievu pavedināja",
        answers: [{
                text: "Zirneklis",
                correct: false
            },
            {
                text: "Vedējmāte",
                correct: false
            },
            {
                text: "Žigolo",
                correct: false
            },
            {
                text: "Čūska",
                correct: true
            }
        ]
    },
    {
        section: 1,
        price: "10 EUR",
        question: "Mitoloģijā (un ne tikai) kareivīgas sievietes sauc par",
        answers: [{
                text: "Nīlām",
                correct: false
            },
            {
                text: "Donavām",
                correct: false
            },
            {
                text: "Amazonēm",
                correct: true
            },
            {
                text: "Gaujām",
                correct: false
            }
        ]
    },
    {
        section: 1,
        price: "10 EUR",
        question: "Ziemeļamerikas indiāņu būdiņas sauc par",
        answers: [{
                text: "Zigzagiem",
                correct: false
            },
            {
                text: "Bigbeniem",
                correct: false
            },
            {
                text: "Vigvamiem",
                correct: true
            },
            {
                text: "Ričuračiem",
                correct: false
            }
        ]
    },
    {
        section: 1,
        price: "10 EUR",
        question: "Ja es kaut ko varu izdarīt labāknekā citi,tad tas ir mans",
        answers: [{
                text: "Džokers",
                correct: false
            },
            {
                text: "Trumpis",
                correct: true
            },
            {
                text: "Ercens",
                correct: false
            },
            {
                text: "Pīķis",
                correct: false
            }
        ]
    },
    {
        section: 2,
        price: "20 EUR",
        question: "Kurš no šiem medniekiem parasti neizmanto šaujamieročus?",
        answers: [{
                text: "Lapsu",
                correct: false
            },
            {
                text: "Lāču",
                correct: false
            },
            {
                text: "Pīļu",
                correct: false
            },
            {
                text: "Brunču",
                correct: true
            }
        ]
    },
    {
        section: 2,
        price: "20 EUR",
        question: "Matu balzāmu",
        answers: [{
                text: "Ražo no matiem",
                correct: false
            },
            {
                text: "Dzer pret blaugznām",
                correct: false
            },
            {
                text: "Ieziež matos",
                correct: true
            },
            {
                text: "Pievieno kokteiļiem",
                correct: false
            }
        ]
    },
    {
        section: 2,
        price: "20 EUR",
        question: "Pirms publiskas uzstāšanās reizēm cilvēku pārņem",
        answers: [{
                text: "Zelta drudzis",
                correct: false
            },
            {
                text: "Nātru dzrudzis",
                correct: false
            },
            {
                text: "Lampu drudzis",
                correct: true
            },
            {
                text: "Siena drudzis",
                correct: false
            }
        ]
    },
    {
        section: 2,
        price: "20 EUR",
        question: "Cilvēka ķermeni veido dažādi",
        answers: [{
                text: "Suzuki",
                correct: false
            },
            {
                text: "Volvo",
                correct: false
            },
            {
                text: "Audi",
                correct: true
            },
            {
                text: "Žiguļi",
                correct: false
            }
        ]
    },
    {
        section: 2,
        price: "20 EUR",
        question: "Cilvēkam nemēdz būt",
        answers: [{
                text: "Resnā zarna",
                correct: false
            },
            {
                text: "Tievā zarna",
                correct: false
            },
            {
                text: "Aklā zarna",
                correct: false
            },
            {
                text: "Kurlā zarna",
                correct: true
            }
        ]
    }
]
