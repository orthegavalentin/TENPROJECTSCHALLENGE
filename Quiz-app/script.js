const QuizData = [
  {
    question: "Who is the best programmer on Earth?",
    a: "valentin",
    b: "you",
    c: " jeff besos",
    correct: "a",
  },
  {
    question: "What is the best frontend FrameWork ?",
    a: "React",
    b: "Angular",
    c: " Vue",
    correct: "b",
  },
  {
    question: "What is the best programming language",
    a: "C++",
    b: "Python",
    c: " Java",
    correct: "c",
  },
];
const lab_a = document.getElementById("lab_a");
const lab_b = document.getElementById("lab_b");
const lab_c = document.getElementById("lab_c");
const question = document.getElementById("question");

const submit = document.getElementById("submit");

let currentIndex = 0;

function loadQuestion() {
  const currentData = QuizData[currentIndex];

  question.innerHTML = currentData.question;
  lab_a.innerHTML = currentData.a;
  lab_b.innerHTML = currentData.b;
  lab_c.innerHTML = currentData.c;
}

loadQuestion();
submit.addEventListener("click", () => {
  if (currentIndex < 2) {
    currentIndex++;
    loadQuestion();
  } else {
    alert("You finished the quiz BABY");
    currentIndex = 0;
  }
});
