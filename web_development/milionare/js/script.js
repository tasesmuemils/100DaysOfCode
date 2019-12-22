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
const childQuestion = document.getElementById("child-question");
const songLyricsElement = document.getElementById("song-lyrics");

let shuffledQuestions, currentQuestionIndex;
let childQuestion1Counter = 0;
let childQuestion5Counter = 0;
let childQuestion10Counter = 0;



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
    songLyricsElement.classList.add("hide");
    
})

twoOptions.addEventListener("click", twoOptionsCheck);
callFriend.addEventListener("click", callTimer);
googleIt.addEventListener("click", callTimer);

function showTable() {
    // childQuestion.classList.add("hide");
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
        } else if (chooseSection.textContent == 5 && childQuestion5Counter == 0) {
            childQuestion.classList.remove("hide");
            childQuestion5Counter = 1;
        } else if (chooseSection.textContent == 10 && childQuestion10Counter == 0) {
            childQuestion.classList.remove("hide");
            childQuestion10Counter = 1;
        } else if (chooseSection.textContent == 16) {
            if (childQuestion1Counter == 0) {
                childQuestion1Counter = 1;
                childQuestion.classList.add("hide");
            } else if (childQuestion5Counter == 1) {
                childQuestion.classList.add("hide");
            } else if (childQuestion10Counter == 1) {
                childQuestion.classList.add("hide");
            }
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

    if (question.section <= 5 || question.section == 16) {
        after1QuestionSound.play();
    } else {
        after6QuestionSound.play();
    }

    question.section = -1;
    questionType.textContent = question.price;
    helpOptions.classList.remove("hide");
    controlsContainer.classList.remove("hide");
    questionType.innerText = question.price;
    questionElement.innerText = question.question;

    for (let i = 0; i < question.answers.length; i++) {
        if (i == 0) {
            const extraText = question.answers[i].text;
            question.answers[i].text = "A: " + extraText;
        } else if (i == 1) {
            const extraText = question.answers[i].text;
            question.answers[i].text = "B: " + extraText;
        } else if (i == 2) {
            const extraText = question.answers[i].text;
            question.answers[i].text = "C: " + extraText;
        } else if (i == 3) {
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

function callTimer() {
    let timeLeft = 30;
    const timerWrapper = document.createElement("div");
    timerWrapper.classList.add("timer-wrapper");
    const timer = document.createElement("h2");
    timer.textContent = timeLeft;
    const timerButtonWrapper = document.createElement("div");
    timerButtonWrapper.classList.add("timer-button-wrapper");
    const startTimer = document.createElement("button");
    const hideTimer = document.createElement("button");
    startTimer.classList.add("btn");
    hideTimer.classList.add("btn");
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

    hideTimer.addEventListener("click", () => {
        timerWrapper.classList.add("hide");
    })

    startTimer.textContent = "Sākt!";
    hideTimer.textContent = "Atlikt!";
    timerWrapper.appendChild(timer);
    timerButtonWrapper.appendChild(startTimer);
    timerButtonWrapper.appendChild(hideTimer);
    timerWrapper.appendChild(timerButtonWrapper);
    // timerWrapper.appendChild(startTimer);
    // timerWrapper.appendChild(hideTimer);

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
            Array.from(answerButtonsElement.children).forEach(button => {
                if (button.dataset.correct) {
                    button.classList.add("correct");
                }
            })
        }
    }, 5000);
    element.removeEventListener("click", selectAnswer);
    songLyrics(element);
}

function songLyrics(element) {
    if (element.textContent == "D: Zvaniņš skan") {
        element.addEventListener("click", () => {
            questionsContainer.classList.add("hide");
            songLyricsElement.classList.remove("hide");
            document.getElementById("zvanins").classList.remove("hide");
            document.getElementById("zvanins").classList.add("show-lyrics");
        })
    } else if(element.textContent == "C: Klusa nakts, svēta nakts") {
        element.addEventListener("click", () => {
            questionsContainer.classList.add("hide");
            songLyricsElement.classList.remove("hide");
            document.getElementById("klusa-nakts").classList.remove("hide");
            document.getElementById("klusa-nakts").classList.add("show-lyrics");
        })
    } else if(element.textContent == "A: Jūs bērniņi nāciet") {
        element.addEventListener("click", () => {
            questionsContainer.classList.add("hide");
            songLyricsElement.classList.remove("hide");
            document.getElementById("bernini").classList.remove("hide");
            document.getElementById("bernini").classList.add("show-lyrics");
        })
    }
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
                correct: false
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
        question: "Kad Kristofers Kolumbns ieradās Amerikā, viņš vietējos iedzīvotājus nosauca par",
        answers: [{
                text: "Kolumbiešiem",
                correct: false
            },
            {
                text: "Amerikāņiem",
                correct: false
            },
            {
                text: "Kristoferiem",
                correct: false
            },
            {
                text: "Indiāņiem",
                correct: true
            }
        ]
    },
    {
        section: 5,
        price: "50 EUR",
        question: "Dabā nav nekā cietāka par",
        answers: [{
                text: "Riekstu",
                correct: false
            },
            {
                text: "Ķieģeli",
                correct: false
            },
            {
                text: "Dimantu",
                correct: true
            },
            {
                text: "Metālu",
                correct: false
            }
        ]
    },
    {
        section: 5,
        price: "50 EUR",
        question: "Viduslaiku leģendās sirēnām ir sievietes galva un ķermeņa augšdaļa, bet kāju vietā",
        answers: [{
                text: "Pleznas",
                correct: false
            },
            {
                text: "Zeķbikses",
                correct: false
            },
            {
                text: "Zivs aste",
                correct: true
            },
            {
                text: "Vēl diva rokas",
                correct: false
            }
        ]
    },
    {
        section: 5,
        price: "50 EUR",
        question: "Vācu inženieris Rūdolfs Dīzels 1897.gadā radīja",
        answers: [{
                text: "Dīzeļdzinēju",
                correct: true
            },
            {
                text: "Džinsus",
                correct: false
            },
            {
                text: "Rāvējslēdzēju",
                correct: false
            },
            {
                text: "Šujmašīnu",
                correct: false
            }
        ]
    },
    {
        section: 6,
        price: "60 EUR",
        question: "FIB aģenta Foksa Maldera uzticamā partnere seriālā 'Slepenās lietas' ir",
        answers: [{
                text: "Brenda Volša",
                correct: false
            },
            {
                text: "Dana Skallija",
                correct: 14
            },
            {
                text: "Alija Makbīla",
                correct: true
            },
            {
                text: "Stefānija Fostere",
                correct: false
            }
        ]
    },
    {
        section: 6,
        price: "60 EUR",
        question: "Kurš no šiem augļiem nogatavaojas tikai līdz novākšanas brīdim?",
        answers: [{
                text: "Banāns",
                correct: false
            },
            {
                text: "Aprikoze",
                correct: false
            },
            {
                text: "Ananass",
                correct: true
            },
            {
                text: "Nektarīns",
                correct: false
            }
        ]
    },
    {
        section: 6,
        price: "60 EUR",
        question: "Kur senos laikos valkāja togas?",
        answers: [{
                text: "Gīzā",
                correct: false
            },
            {
                text: "Babilonā",
                correct: false
            },
            {
                text: "Romā",
                correct: true
            },
            {
                text: "Deli",
                correct: false
            }
        ]
    },
    {
        section: 6,
        price: "60 EUR",
        question: "Melu detektora tehniskais apzīmējums ir",
        answers: [{
                text: "Poligons",
                correct: false
            },
            {
                text: "Polimērs",
                correct: false
            },
            {
                text: "Poligrāfs",
                correct: true
            },
            {
                text: "Poliglots",
                correct: false
            }
        ]
    },
    {
        section: 6,
        price: "60 EUR",
        question: "Pēc kā nosaka zirga vecumu?",
        answers: [{
                text: "Pēc nagiem",
                correct: false
            },
            {
                text: "Pēc zobiem",
                correct: true
            },
            {
                text: "Pēc astes garuma",
                correct: false
            },
            {
                text: "Pēc redzes asuma",
                correct: false
            }
        ]
    },
    {
        section: 7,
        price: "80 EUR",
        question: "Pirmā latviešu pasaku luga ir",
        answers: [{
                text: "Sprīdītis",
                correct: true
            },
            {
                text: "Maija un paija",
                correct: false
            },
            {
                text: "Velniņi",
                correct: false
            },
            {
                text: "Ilja Muromietis",
                correct: false
            }
        ]
    },
    {
        section: 7,
        price: "80 EUR",
        question: "Šo japāņu kompāniju sauc par 'trīs dimantiem'",
        answers: [{
                text: "Panasonic",
                correct: false
            },
            {
                text: "Sanyo",
                correct: false
            },
            {
                text: "Mitsubishi",
                correct: true
            },
            {
                text: "Honda",
                correct: false
            }
        ]
    },
    {
        section: 7,
        price: "80 EUR",
        question: "Cik metrus augsts ir Brīvības piemineklis Rīgā?",
        answers: [{
                text: "38",
                correct: false
            },
            {
                text: "42",
                correct: true
            },
            {
                text: "46",
                correct: false
            },
            {
                text: "54",
                correct: false
            }
        ]
    },
    {
        section: 7,
        price: "80 EUR",
        question: "Ar ko burvju vidū ir slavens Harijs Poters? Viņam ir ",
        answers: [{
                text: "Septijūdžu zābaki",
                correct: false
            },
            {
                text: "Rēta pierē",
                correct: true
            },
            {
                text: "Brīnumspogulītis",
                correct: false
            },
            {
                text: "Burvju stabulīte",
                correct: false
            }
        ]
    },
    {
        section: 7,
        price: "80 EUR",
        question: "Kādā krāsā ir tā saucamā lidmašīnu 'melnā kaste'",
        answers: [{
                text: "Melnā",
                correct: false
            },
            {
                text: "Zilā",
                correct: false
            },
            {
                text: "Baltā",
                correct: true
            },
            {
                text: "Oranžā",
                correct: false
            }
        ]
    },
    {
        section: 8,
        price: "125 EUR",
        question: "Tradicionālā kāršu kavā šis ir vienīgais karalis bez ūsām",
        answers: [{
                text: "Pīķa",
                correct: false
            },
            {
                text: "Kreica",
                correct: false
            },
            {
                text: "Ercena",
                correct: true
            },
            {
                text: "Kārava",
                correct: false
            }
        ]
    },
    {
        section: 8,
        price: "125 EUR",
        question: "Cietākā matērija cilvēka ķermenī ir",
        answers: [{
                text: "Pauris",
                correct: false
            },
            {
                text: "Mugurkauls",
                correct: false
            },
            {
                text: "Zobu emalja",
                correct: true
            },
            {
                text: "Sirds",
                correct: false
            }
        ]
    },
    {
        section: 8,
        price: "125 EUR",
        question: "Vecākā banka dibināta 1407. gadā",
        answers: [{
                text: "Ženēvā",
                correct: false
            },
            {
                text: "Dženovā",
                correct: true
            },
            {
                text: "Bagdādē",
                correct: false
            },
            {
                text: "Londonā",
                correct: false
            }
        ]
    },
    {
        section: 8,
        price: "125 EUR",
        question: "Tors nav",
        answers: [{
                text: "Spiediena mērvienība",
                correct: false
            },
            {
                text: "Pērkona dievs",
                correct: false
            },
            {
                text: "Cilvēka rumpis mākslā",
                correct: true
            },
            {
                text: "Figūra riņķa formā",
                correct: false
            }
        ]
    },
    {
        section: 8,
        price: "125 EUR",
        question: "Eskimosi, sasveicinoties ar draugu,",
        answers: [{
                text: "Paspiež roku",
                correct: false
            },
            {
                text: "Pievelk kāju",
                correct: false
            },
            {
                text: "Saberzē degunus",
                correct: true
            },
            {
                text: "Pakasa  ausi",
                correct: false
            }
        ]
    },
    {
        section: 8,
        price: "125 EUR",
        question: "Zvaigznes krāsa liecina par tās",
        answers: [{
                text: "Temperatūru un vecumu",
                correct: true
            },
            {
                text: "Lielumu un attālumu",
                correct: false
            },
            {
                text: "Vecumu un attālumu",
                correct: false
            },
            {
                text: "Temperatūru un attālumu",
                correct: false
            }
        ]
    },
    {
        section: 9,
        price: "250 EUR",
        question: "Pirmā krāsainā latviešu mākslas filma bija",
        answers: [{
                text: "Mājup ar uzvaru",
                correct: false
            },
            {
                text: "Uz jauno krastu",
                correct: true
            },
            {
                text: "Rainis",
                correct: false
            },
            {
                text: "Salna pavasarī",
                correct: false
            }
        ]
    },
    {
        section: 9,
        price: "250 EUR",
        question: "Bolero ir",
        answers: [{
                text: "Svīteris",
                correct: false
            },
            {
                text: "Īsa jaciņa",
                correct: true
            },
            {
                text: "Pusgaras bikses",
                correct: false
            },
            {
                text: "Krekls ar mežģīnēm",
                correct: false
            }
        ]
    },
    {
        section: 9,
        price: "250 EUR",
        question: "Kurš no šiem 'bītliem' sita sitamos instrumentus?",
        answers: [{
                text: "Džons Lenons",
                correct: false
            },
            {
                text: "Ringo Stārs",
                correct: true
            },
            {
                text: "Pols Makartnijs",
                correct: false
            },
            {
                text: "Džordžs Harisons",
                correct: false
            }
        ]
    },
    {
        section: 9,
        price: "250 EUR",
        question: "Sērkociņu kārbiņu un to etiķešu kolekcionārs ir",
        answers: [{
                text: "Filatēlists",
                correct: false
            },
            {
                text: "Filogēnists",
                correct: false
            },
            {
                text: "Filokartists",
                correct: false
            },
            {
                text: "Filumēnists",
                correct: true
            }
        ]
    },
    {
        section: 9,
        price: "250 EUR",
        question: "Kanādiešiem - kļavu lapa, indiešiem - lotosa zieds. Bet angļiem?",
        answers: [{
                text: "Neļķe",
                correct: false
            },
            {
                text: "Roze",
                correct: true
            },
            {
                text: "Ceriņi",
                correct: false
            },
            {
                text: "Ozola zīle",
                correct: false
            }
        ]
    },
    {
        section: 10,
        price: "500 EUR",
        question: "Motociklu izgudroja",
        answers: [{
                text: "Honda",
                correct: false
            },
            {
                text: "Daimler",
                correct: true
            },
            {
                text: "BMW",
                correct: false
            },
            {
                text: "Harley Davidson",
                correct: false
            }
        ]
    },
    {
        section: 10,
        price: "500 EUR",
        question: "Hitleriskās Vācijas ideologs bija",
        answers: [{
                text: "Jozefs Rommels",
                correct: false
            },
            {
                text: "Heinrihs Himmlers",
                correct: false
            },
            {
                text: "Hermanis Gērings",
                correct: false
            },
            {
                text: "Jozefs Gebelss",
                correct: true
            }
        ]
    },
    {
        section: 10,
        price: "500 EUR",
        question: "Kurai tautai ir raksturīgs mariači?",
        answers: [{
                text: "Grieķiem",
                correct: false
            },
            {
                text: "Austrāliešiem",
                correct: false
            },
            {
                text: "Tunisiešiem",
                correct: false
            },
            {
                text: "Meksikāņiem",
                correct: true
            }
        ]
    },
    {
        section: 10,
        price: "500 EUR",
        question: "Kā sauc izgaistošo kaķi no L.Kerola grāmatas 'Alise brīnumzemē'",
        answers: [{
                text: "Češīras kaķis",
                correct: true
            },
            {
                text: "Kašmira kaķis",
                correct: false
            },
            {
                text: "Filimūrs",
                correct: false
            },
            {
                text: "Runcis Bazilio",
                correct: false
            }
        ]
    },
    {
        section: 10,
        price: "500 EUR",
        question: "Uz kādas salas atrodas Indonēzijas galvaspilsēta Džakarta?",
        answers: [{
                text: "Sumatra",
                correct: false
            },
            {
                text: "Bali",
                correct: false
            },
            {
                text: "Borneo",
                correct: false
            },
            {
                text: "Java",
                correct: true
            }
        ]
    },
    {
        section: 11,
        price: "1250 EUR",
        question: "Kas ir Jupitera lielais sarkanais plankums?",
        answers: [{
                text: "Vētra",
                correct: true
            },
            {
                text: "Vulkāns",
                correct: false
            },
            {
                text: "Okeāns",
                correct: false
            },
            {
                text: "Krāteris",
                correct: false
            }
        ]
    },
    {
        section: 11,
        price: "1250 EUR",
        question: "Kurai no šīm valstīm ir visgarākā robeža ar Krieviju?",
        answers: [{
                text: "Azerbaidžanai",
                correct: false
            },
            {
                text: "Igaunijai",
                correct: true
            },
            {
                text: "Norvēģijai",
                correct: false
            },
            {
                text: "Ziemeļkorejai",
                correct: false
            }
        ]
    },
    {
        section: 11,
        price: "1250 EUR",
        question: "Liepu lapu laipu liku - tā ir",
        answers: [{
                text: "Aglutinācija",
                correct: false
            },
            {
                text: "Aliterācija",
                correct: true
            },
            {
                text: "Alegorija",
                correct: false
            },
            {
                text: "Alitēšana",
                correct: false
            }
        ]
    },
    {
        section: 11,
        price: "1250 EUR",
        question: "Ar banderilju cīnās ppret",
        answers: [{
                text: "Odiem",
                correct: false
            },
            {
                text: "Vēršiem",
                correct: true
            },
            {
                text: "Kašķi",
                correct: false
            },
            {
                text: "Badu",
                correct: false
            }
        ]
    },
    {
        section: 11,
        price: "1250 EUR",
        question: "Tiek uzskatīts, ka pa Mēnesi ir staigājuši",
        answers: [{
                text: "12 cilvēki",
                correct: true
            },
            {
                text: "15 cilvēki",
                correct: false
            },
            {
                text: "6 cilvēki",
                correct: false
            },
            {
                text: "2 cilvēki",
                correct: false
            }
        ]
    },
    {
        section: 12,
        price: "2500 EUR",
        question: "Pasaulē pirmais Disneja atrakciju parks izveidots",
        answers: [{
                text: "Anaheimā",
                correct: true
            },
            {
                text: "Losandželosā",
                correct: false
            },
            {
                text: "Orlando",
                correct: false
            },
            {
                text: "Holivudā",
                correct: false
            }
        ]
    },
    {
        section: 12,
        price: "2500 EUR",
        question: "Kurš no minētajiem ir Porsche auto modelis?",
        answers: [{
                text: "Cougar",
                correct: false
            },
            {
                text: "Carrera",
                correct: true
            },
            {
                text: "Corvette",
                correct: false
            },
            {
                text: "Camaro",
                correct: false
            }
        ]
    },
    {
        section: 12,
        price: "2500 EUR",
        question: "Ar nosaukumu 'Michelin' ir pazīstamas ne tikai riepas, bet arī",
        answers: [{
                text: "Restorānu ceļvedis",
                correct: true
            },
            {
                text: "Lielākais tankkuģis",
                correct: false
            },
            {
                text: "Bītlu dziesma",
                correct: false
            },
            {
                text: "Žaka Širaka pūdelis",
                correct: false
            }
        ]
    },
    {
        section: 12,
        price: "2500 EUR",
        question: "Itālijā F1 sacīkstes notiek",
        answers: [{
                text: "Moncas trasē",
                correct: true
            },
            {
                text: "Hokenheimas trasē",
                correct: false
            },
            {
                text: "Interlagosas trasē",
                correct: false
            },
            {
                text: "Alberta parkas trasē",
                correct: false
            }
        ]
    },
    {
        section: 12,
        price: "2500 EUR",
        question: "Dīvāns nav",
        answers: [{
                text: "Mīksta mēbele",
                correct: false
            },
            {
                text: "Dzejoļu krājums",
                correct: false
            },
            {
                text: "Turku sultānu padomdevēji",
                correct: false
            },
            {
                text: "Ezers ASV",
                correct: true
            }
        ]
    },
    {
        section: 13,
        price: "5000 EUR",
        question: "Uz kādas salas atrodas Tokija?",
        answers: [{
                text: "Honsju",
                correct: true
            },
            {
                text: "Hokaido",
                correct: false
            },
            {
                text: "Kjusju",
                correct: false
            },
            {
                text: "Sikoku",
                correct: false
            }
        ]
    },
    {
        section: 13,
        price: "5000 EUR",
        question: "Latvijas skatuves glezniecības pamatlicējs ir",
        answers: [{
                text: "Jānis Kuga",
                correct: true
            },
            {
                text: "Ģirts Vilks",
                correct: false
            },
            {
                text: "Artūrs Lapiņš",
                correct: false
            },
            {
                text: "Vilhelms Purvītis",
                correct: false
            }
        ]
    },
    {
        section: 13,
        price: "5000 EUR",
        question: "Kādam nolūkam paredzēta pudlingēšanas metode",
        answers: [{
                text: "Uzacu retināšanai",
                correct: false
            },
            {
                text: "Kuģu pietauvošanai ostā",
                correct: false
            },
            {
                text: "Tērauda izgatavošanai",
                correct: true
            },
            {
                text: "Stikla pūšanai",
                correct: false
            }
        ]
    },
    {
        section: 13,
        price: "5000 EUR",
        question: "Bidē sākotnēji ir bijis",
        answers: [{
                text: "Vijoles futlāris",
                correct: true
            },
            {
                text: "Porcelāna vāze",
                correct: false
            },
            {
                text: "Cukurtrauks",
                correct: false
            },
            {
                text: "Roku mazgājamā bļoda",
                correct: false
            }
        ]
    },
    {
        section: 13,
        price: "5000 EUR",
        question: "'Pina Colada' kokteilī neietilpst",
        answers: [{
                text: "Viskijs",
                correct: true
            },
            {
                text: "Ananāsu sula",
                correct: false
            },
            {
                text: "Kokosriekstu piens",
                correct: false
            },
            {
                text: "Rums",
                correct: false
            }
        ]
    },
    {
        section: 14,
        price: "10000 EUR",
        question: "Kas savā darbā mēdz izmantot atisku sāli?",
        answers: [{
                text: "Pavārs",
                correct: false
            },
            {
                text: "Ārsts",
                correct: false
            },
            {
                text: "Orators",
                correct: true
            },
            {
                text: "Asenizators",
                correct: false
            }
        ]
    },
    {
        section: 14,
        price: "10000 EUR",
        question: "Kas ir ginks?",
        answers: [{
                text: "Adiant paparde",
                correct: false
            },
            {
                text: "Briesmoņlapu koks",
                correct: false
            },
            {
                text: "Nāras lapene",
                correct: true
            },
            {
                text: "Gingantisks pūpēdis",
                correct: false
            }
        ]
    },
    {
        section: 14,
        price: "10000 EUR",
        question: "Kas vienā reizē spēj izdēt visvairāk olu?",
        answers: [{
                text: "Odze",
                correct: false
            },
            {
                text: "Pingvīns",
                correct: false
            },
            {
                text: "Bruņurupucis",
                correct: true
            },
            {
                text: "Lieldienu zaķus",
                correct: false
            }
        ]
    },
    {
        section: 14,
        price: "10000 EUR",
        question: "Ķīķi dēvē arī par",
        answers: [{
                text: "Bišu ērgli",
                correct: false
            },
            {
                text: "Kameņu vanagu",
                correct: false
            },
            {
                text: "Lapseņu klijānu",
                correct: true
            },
            {
                text: "Viršu gārni",
                correct: false
            }
        ]
    },
    {
        section: 14,
        price: "10000 EUR",
        question: "Garīgo un emocionālo procesu pašnovērošana ir",
        answers: [{
                text: "Inspekcija",
                correct: false
            },
            {
                text: "Introgresija",
                correct: false
            },
            {
                text: "Introspekcija",
                correct: true
            },
            {
                text: "Inspirācija",
                correct: false
            }
        ]
    },
    {
        section: 14,
        price: "10000 EUR",
        question: "Cigaretes izgudroja",
        answers: [{
                text: "Kubieši",
                correct: false
            },
            {
                text: "Turki",
                correct: true
            },
            {
                text: "Francūži",
                correct: false
            },
            {
                text: "Angļi",
                correct: false
            }
        ]
    },
    {
        section: 16,
        price: "",
        question: "Kas ir Latvijas himnas autors?",
        answers: [{
                text: "Baumaņu Kārlis",
                correct: true
            },
            {
                text: "Raimonds Pauls",
                correct: false
            },
            {
                text: "Prāta Vētra",
                correct: false
            },
            {
                text: "Rainis",
                correct: false
            }
        ]
    },
    {
        section: 16,
        price: "",
        question: "Kura lieta aug no lielākā uz mazāko?",
        answers: [{
                text: "Grāmata",
                correct: false
            },
            {
                text: "Bērns",
                correct: false
            },
            {
                text: "Diena",
                correct: false
            },
            {
                text: "Svece",
                correct: true
            }
        ]
    },
    {
        section: 16,
        price: "",
        question: "Tu skrēji sacensībās un apskrēji to skrējēju, kas bija 2. vietā. Kurā vietā tu tagad esi?",
        answers: [{
                text: "1.",
                correct: true
            },
            {
                text: "4.",
                correct: false
            },
            {
                text: "3.",
                correct: false
            },
            {
                text: "6.",
                correct: true
            }
        ]
    },
    {
        section: 15,
        price: "1000000 EUR",
        question: "Kādu dziesmu mēs dziedāsim?",
        answers: [{
                text: "Jūs bērniņi nāciet",
                correct: true,
                lyrics: 'Mežus pārklāj sniegs Lāčiem ziemas miegs Gaiss tik skanīgs salts Viss tik tīrs un balts'
            },
            {
                text: "Ak, Tu, priecīga!",
                correct: false
            },
            {
                text: "Klusa nakts, svēta nakts",
                correct: true
            },
            {
                text: "Zvaniņš skan",
                correct: true
            }
        ]
    }
]