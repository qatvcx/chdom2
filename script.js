// 1. Quiz data
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Colorful Style Sheets",
    ],
    correct: 1,
  },
  {
    question: "Which method selects an element by its id?",
    answers: [
      "querySelectorAll",
      "getElementsByClassName",
      "getElementById",
      "getElement",
    ],
    correct: 2,
  },
];

// 2. Select elements
const questionEl = document.querySelector("#question");
const answersContainer = document.querySelector("#answers");
const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.querySelector("#next");
const scoreEl = document.querySelector("#score");
const questionNumberEl = document.querySelector(".question-number");

// 3. State
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// 4. Show the current question
function showQuestion() {
  const current = questions[currentQuestion];
  selectedAnswer = null;

  questionEl.textContent = current.question;
  questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  answerButtons.forEach((button, index) => {
    button.textContent = current.answers[index];
    button.classList.remove("selected");
  });

  nextButton.textContent =
    currentQuestion === questions.length - 1 ? "Finish" : "Next";
}

// 5. Select an answer
answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectedAnswer = index;

    answerButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// 6. Next button: check answer, update score, move on
nextButton.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Please select an answer first!");
    return;
  }

  if (selectedAnswer === questions[currentQuestion].correct) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
});

// 7. Final screen
function showFinalScore() {
  questionEl.textContent = "Quiz finished!";
  answersContainer.style.display = "none";
  nextButton.style.display = "none";
  scoreEl.textContent = `Final score: ${score} / ${questions.length}`;
}

// 8. Start
showQuestion();