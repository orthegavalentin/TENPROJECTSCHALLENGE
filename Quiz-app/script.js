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
const quiz = document.getElementById("quiz");

const submit = document.getElementById("submit");

var elements = [];
function loadElements() {
  elements = document.getElementsByName("answers");
}
//function to return selected answer
function findCheckedElement() {
  loadElements();

  let checkedElement = null;
  let label, selector;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      selector = "label[for=" + elements[i].id + "]";
      label = document.querySelector(selector);
      checkedElement = elements[i].value;
    }
  }
  return checkedElement != null
    ? checkedElement
    : alert("please select an answer");
}

//function toreset selections
function resetRadios() {
  var elements = document.getElementsByName("answers");

  for (var i = 0; i < elements.length; i++) {
    elements[i].checked = false;
  }
}

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const currentData = QuizData[currentIndex];

  question.innerHTML = currentData.question;
  lab_a.innerHTML = currentData.a;
  lab_b.innerHTML = currentData.b;
  lab_c.innerHTML = currentData.c;
}

loadQuestion();
submit.addEventListener("click", () => {
  let checked = findCheckedElement();
  checked === QuizData[currentIndex].correct ? score++ : (score += 0);
  if (currentIndex < 2) {
    if (checked != null) {
      currentIndex++;
    }

    loadQuestion();
  } else {
    quiz.innerHTML = `<h5>you finished the quiz with a score of <span class="score">${score}</span> 
    out of  <span class="score">${QuizData.length}</span></h5>
      <button onClick="location.reload()">refresh</button>`;
    score = 0;
  }

  resetRadios();
});
