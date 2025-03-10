
const questions = [
    {
        question: "What made chainmail useless in medieval Europe?",
        answers: [
            { text: "Katanas", correct: false },
            { text: "Slashing attacks from swords", correct: false },
            { text: "Spears", correct: false },
            { text: "Piercing attacks from crossbows", correct: true }
        ]
    },
    {
        question: "The introduction of which weapon significantly contributed to the decline of traditional knightly cavalry?",
        answers: [
            { text: "Longbows", correct: false },
            { text: "Crossbows", correct: false },
            { text: "Both A and B", correct: true },
            { text: "Swords", correct: false }
        ]
    },
    {
        question: "What was the main advantage of a longbow over a crossbow?",
        answers: [
            { text: "Faster rate of fire", correct: true },
            { text: "Stronger piercing power", correct: false },
            { text: "Easier to train soldiers", correct: false },
            { text: "Better accuracy", correct: false }
        ]
    },
    {
        question: "Which medieval Japanese weapon was renowned for its sharpness and craftsmanship?",
        answers: [
            { text: "Naginata", correct: false },
            { text: "Katana", correct: true },
            { text: "Yari", correct: false },
            { text: "Tanto", correct: false }
        ]
    },
    {
        question: "What was the primary purpose of a moat surrounding a castle?",
        answers: [
            { text: "To provide water for inhabitants", correct: false },
            { text: "To beautify the landscape", correct: false },
            { text: "To hinder enemy approach", correct: true },
            { text: "To store fish for food", correct: false }
        ]
    },
    {
        question: "Which siege weapon used a counterweight to hurl projectiles over great distances?",
        answers: [
            { text: "Ballista", correct: false },
            { text: "Onager", correct: false },
            { text: "Trebuchet", correct: true },
            { text: "Mangonel", correct: false }
        ]
    },
    {
        question: "What innovation allowed knights to wield lances more effectively during charges?",
        answers: [
            { text: "Stirrups", correct: true },
            { text: "Spurs", correct: false },
            { text: "Saddles", correct: false },
            { text: "Reins", correct: false }
        ]
    },
    {
        question: "Which weapon's introduction led to the decline of heavily armored knights?",
        answers: [
            { text: "Crossbow", correct: true },
            { text: "Longsword", correct: false },
            { text: "Mace", correct: false },
            { text: "Halberd", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const optionButtons = [
    document.getElementById("A"),
    document.getElementById("B"),
    document.getElementById("C"),
    document.getElementById("D")
];
const nextButton = document.getElementById("nxt");
const num = document.getElementById("Q#")

let questionIndex = 1;
let score = 0;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    const currentQuestion = questions[questionIndex];
    questionElement.innerHTML = currentQuestion.question;
    num.innerHTML = "Question " + (questionIndex + 1)

    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index].text;
        button.style.backgroundColor = ""; // Reset button color
        button.disabled = false;
    });
    nextButton.textContent = "Next!";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[questionIndex];
    questionElement.innerHTML = currentQuestion.question;
    num.innerHTML = "Question " + (questionIndex + 1)

    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index].text;
        button.style.backgroundColor = ""; // Reset button color
        button.disabled = false;
    });
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const index = optionButtons.indexOf(selectedButton);
    const correct = questions[questionIndex].answers[index].correct;

    if (correct) {
        score++;
        selectedButton.style.backgroundColor = "#95fe74";
    } else {
        selectedButton.style.backgroundColor = "#ff6464";
        // Highlight correct answer
        questions[questionIndex].answers.forEach((answer, i) => {
            if (answer.correct) optionButtons[i].style.backgroundColor = "#95fe74";
        });
    }

    // Disable buttons after answering
    optionButtons.forEach(button => button.disabled = true);
}


function restart(){
    window.location.reload()
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Quiz completed! Your Score: " + score + "/8";
        nextButton.innerHTML = "Restart";
        nextButton.removeEventListener("click", nextQuestion);
        nextButton.addEventListener("click", restart);
    }
}

// Add event listeners
optionButtons.forEach(button => button.addEventListener("click", selectAnswer));
nextButton.addEventListener("click", nextQuestion);

// Start the quiz
startQuiz();

