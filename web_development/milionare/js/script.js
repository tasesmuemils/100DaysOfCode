const logo = document.getElementById("logo");
const startGameButton = document.getElementById("start-btn");
const controlsContainer = document.getElementById("controls-wrapper");
const nextButton = document.getElementById("next-btn");
const rulesButton = document.getElementById("rules-btn");
const gameRules = document.getElementById("rules");
const resultTable = document.getElementById("result-table");
const questionsContainer = document.getElementById("question-container");
const helpOptions = document.getElementById("help-options");
const twoOptions = document.getElementById("two-options");
const callFriend = document.getElementById("call-friend");
const googleIt = document.getElementById("google-it");
const questionType = document.getElementById("question-type");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

//Sound effects
const after6QuestionSound = new Audio("sound/question_after_6_theme.mp3");
const after1QuestionSound = new Audio("sound/question_after_1_theme.mp3");
const correctAnswerSound = new Audio("sound/correct_answer.mp3");
const wrongAnswerSound = new Audio("sound/wrong_answer.mp3");
const finalAnswerSound = new Audio("sound/final_answer.mp3");
const letsPlaySound = new Audio("sound/lets_play.mp3");
const phoneAFriendSound = new Audio("sound/phone_a_friend.mp3");
const twoOptionsSound = new Audio("sound/50_50_sound.mp3");



letsPlaySound.play();
after1QuestionSound.play();

function pauseQuestionSounds() {
    after1QuestionSound.pause();
    after6QuestionSound.pause();
}

rulesButton.addEventListener("click", () => {
    logo.classList.add("hide");
    document.getElementById("container-id").classList.add("container-rules");
    gameRules.classList.remove("hide");
    rulesButton.classList.add("hide");
    startGameButton.classList.remove("hide");
});

startGameButton.addEventListener("click", showTable);
nextButton.addEventListener("click", () => {
    resultTable.classList.remove("hide");
    questionsContainer.classList.add("hide");
    nextButton.classList.add("hide");
    controlsContainer.classList.add("hide");
})

twoOptions.addEventListener("click", twoOptionsCheck);
callFriend.addEventListener("click", callFriendTime);
googleIt.addEventListener("click", callFriendTime);

function showTable() {
    letsPlaySound.play();
    after1QuestionSound.pause();
    gameRules.classList.add("hide");
    startGameButton.classList.add("hide");
    controlsContainer.classList.add("hide");
    resultTable.classList.remove("hide");
    Array.from(resultTable.firstElementChild.firstElementChild.children)
        .forEach(row => {
            row.firstElementChild.style.cursor = "pointer";
            row.firstElementChild.style.fontWeight = "100";
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
        }
    };

    shuffledQuestions = questionSectionArray.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;

    if (shuffledQuestions === undefined || shuffledQuestions.length == 0) {
        controlsContainer.classList.remove("hide");
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

    if (question.section <= 6) {
        after1QuestionSound.play();
    } else {
        after6QuestionSound.play();
    }

    question.section = -1;
    questionType.textContent = question.price;
    helpOptions.classList.remove("hide");
    questionType.innerText = question.price;
    questionElement.innerText = question.question;

    for (let i = 0; i < question.answers.length; i++) {
        if (i == 0) {
            const extraText = question.answers[i].text;
            question.answers[i].text = "A: " + extraText; 
        } else if(i == 1) {
            const extraText = question.answers[i].text;
            question.answers[i].text = "B: " + extraText; 
        } else if(i == 2) {
            const extraText = question.answers[i].text;
            question.answers[i].text = "C: " + extraText; 
        } else if(i == 3) {
            const extraText = question.answers[i].text;
            question.answers[i].text = "D: " + extraText; 
        } 
    }
    
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    }); 
}

function twoOptionsCheck() {
    twoOptionsSound.play();
    const answersArray = Array.from(answerButtonsElement.childNodes);
    const items3Array = [];
    for (let i = 0; i < answersArray.length; i++) {
        if (answersArray[i].dataset.correct !== "true") {
            answersArray[i].classList.add("hide");
            items3Array.push(answersArray[i]);
        }
    }
    const randomWrongAnswers = items3Array.sort(() => Math.random() - 0.5);
    randomWrongAnswer = randomWrongAnswers[0];
    randomWrongAnswer.classList.remove("hide");
}

function callFriendTime() {
    let timeLeft = 30;
    const timerWrapper = document.createElement("div");
    timerWrapper.classList.add("timer-wrapper");
    const timer = document.createElement("h2");
    timer.textContent = timeLeft;
    const startTimer = document.createElement("button");
    startTimer.classList.add("btn");
    startTimer.addEventListener("click", () => {
        const timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == 0) {
                clearTimeout(timerId);
                timerWrapper.classList.add("hide");
            } else {
                phoneAFriendSound.play();
                pauseQuestionSounds();
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
    nextButton.textContent = "Nākošais jautājums";
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    setStatusClass(selectedButton, selectedButton.dataset.correct);
}

function setStatusClass(element, correct) {
    finalAnswerSound.play();
    element.classList.add("final-answer");
    pauseQuestionSounds();
    setTimeout(() => {
        // finalAnswerSound.pause();
        controlsContainer.classList.remove("hide");
        nextButton.classList.remove("hide");
        if (correct) {
            element.classList.remove("final-answer");
            element.classList.add("correct");
            correctAnswerSound.play();
        } else {
            element.classList.remove("final-answer");
            element.classList.add("wrong");
            wrongAnswerSound.play();
            // finalAnswerSound.pause();
            Array.from(answerButtonsElement.children).forEach(button => {
                if (button.dataset.correct) {
                    button.classList.add("correct");
                }
            })
        }
    }, 5000);
}


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
    },
    {
        section: 3,
        price: "30 EUR",
        question: "Brīvdienās cilvēki bieži dodas pie dabas",
        answers: [{
                text: "Krūts",
                correct: true
            },
            {
                text: "Aknām",
                correct: false
            },
            {
                text: "Padusēm",
                correct: false
            },
            {
                text: "Potītēm",
                correct: false
            }
        ]
    },
    {
        section: 3,
        price: "30 EUR",
        question: "Trani ir",
        answers: [{
                text: "Transporta firma",
                correct: false
            },
            {
                text: "Migranti",
                correct: false
            },
            {
                text: "Bišu tēviņi",
                correct: true
            },
            {
                text: "Kožu kāpuri",
                correct: false
            }
        ]
    },
    {
        section: 3,
        price: "30 EUR",
        question: "Ar kādu vārdu visā pasaulē pazīstams Edsons Arantišs du Nasimentu?",
        answers: [{
                text: "Zirnekļu cilvēks",
                correct: false
            },
            {
                text: "Betmens",
                correct: false
            },
            {
                text: "Pele",
                correct: true
            },
            {
                text: "Terminators",
                correct: false
            }
        ]
    },
    {
        section: 3,
        price: "30 EUR",
        question: "Suitu sievas īpaši izceļas ar",
        answers: [{
                text: "Gariem deguniem",
                correct: false
            },
            {
                text: "Lieliem zobiem",
                correct: false
            },
            {
                text: "Sarkanām ausīm",
                correct: false
            },
            {
                text: "Asu mēli",
                correct: true
            }
        ]
    },
    {
        section: 3,
        price: "30 EUR",
        question: "Balta gaļa, dzeltena āda. Kas tas ir?",
        answers: [{
                text: "Kontrabanda",
                correct: false
            },
            {
                text: "Ķīnietis",
                correct: false
            },
            {
                text: "Sīpols",
                correct: true
            },
            {
                text: "Botkina slimnieks",
                correct: false
            }
        ]
    },
    {
        section: 4,
        price: "40 EUR",
        question: "Čūska met ādu",
        answers: [{
                text: "Sekojot modei",
                correct: false
            },
            {
                text: "Pirms gulētiešanas",
                correct: false
            },
            {
                text: "Augot lielāka",
                correct: true
            },
            {
                text: "Pirms nāves",
                correct: false
            }
        ]
    },
    {
        section: 4,
        price: "40 EUR",
        question: "No kādas gaļas gatavo antrekotu?",
        answers: [{
                text: "Cūkas",
                correct: false
            },
            {
                text: "Vistas",
                correct: false
            },
            {
                text: "Jēra",
                correct: false
            },
            {
                text: "Lielopu",
                correct: true
            }
        ]
    },
    {
        section: 4,
        price: "40 EUR",
        question: "CIlvēka auss bungdobumā neatrodas",
        answers: [{
                text: "Āmuriņš",
                correct: false
            },
            {
                text: "Laktiņa",
                correct: false
            },
            {
                text: "Kāpslītis",
                correct: false
            },
            {
                text: "Skrūvīte",
                correct: true
            }
        ]
    },
    {
        section: 4,
        price: "40 EUR",
        question: "Stāvus guļ",
        answers: [{
                text: "Suņi",
                correct: false
            },
            {
                text: "Kaķi",
                correct: false
            },
            {
                text: "Zirgi",
                correct: true
            },
            {
                text: "Cilvēki",
                correct: false
            }
        ]
    },
    {
        section: 4,
        price: "40 EUR",
        question: "Zilonis, kurš spēja lidot, ir",
        answers: [{
                text: "Dambo",
                correct: true
            },
            {
                text: "Bembijs",
                correct: false
            },
            {
                text: "Ikars",
                correct: true
            },
            {
                text: "Dūpijs",
                correct: false
            }
        ]
    },
    {
        section: 5,
        price: "50 EUR",
        question: "Latvietis, kurš gandrīz 15 gadus dzīvojis Kastanjolā, ir",
        answers: [{
                text: "V.Vīķe-Freiberga",
                correct: false
            },
            {
                text: "Ģitārists Andris Kārkliņš",
                correct: false
            },
            {
                text: "Anšlavs Eglītis",
                correct: false
            },
            {
                text: "Rainis",
                correct: true
            }
        ]
    },
    {
        section: 5,
        price: "50 EUR",
        question: "",
        answers: [{
                text: "V.Vīķe-Freiberga",
                correct: false
            },
            {
                text: "Ģitārists Andris Kārkliņš",
                correct: false
            },
            {
                text: "Anšlavs Eglītis",
                correct: false
            },
            {
                text: "Rainis",
                correct: true
            }
        ]
    }
]