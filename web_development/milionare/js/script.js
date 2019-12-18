const startGameButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionsContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startGameButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
})

function startGame() {
    console.log("test");
    questionsContainer.classList.remove("hide");
    startGameButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        if(answer.correct) {
            button.dataset.correct = answer.correct;    
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hide");
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    // const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {
        section: 1,
        price: "10 EUR",
        question: "Which bird can swim but cannot fly?",
        answers: [
            {text: "Penguin", correct: true},
            {text: "Eagle", correct: false},
            {text: "Stark", correct: false},
            {text: "Flamingo", correct: false}
        ]
    },
    {
        section: 1,
        price: "10 EUR",
        question: "How many oscars did the Titanic movie got?",
        answers: [
            {text: "10", correct: false},
            {text: "5", correct: false},
            {text: "1", correct: false},
            {text: "11", correct: true}
        ]
    }
]

