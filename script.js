let questions = [
  {
    question: "Wie heißt die Hauptstadt von Deutschland?",
    answer_1: "München",
    answer_2: "Berlin",
    answer_3: "Frankfurt",
    answer_4: "Hamburg",
    right_answer: 2,
  },
  {
    question: "Welches Verb ist das deutsche Wort für 'to eat'?",
    answer_1: "trinken",
    answer_2: "lesen",
    answer_3: "essen",
    answer_4: "laufen",
    right_answer: 3,
  },
  {
    question: "Welcher dieser Artikel ist unbestimmt im Deutschen?",
    answer_1: "der",
    answer_2: "die",
    answer_3: "das",
    answer_4: "ein",
    right_answer: 4,
  },
  {
    question: "Wie sagt man 'Good night' auf Deutsch",
    answer_1: "Guten Morgen",
    answer_2: "Guten Tag",
    answer_3: "Gute Nacht",
    answer_4: "Auf Wiedersehen",
    right_answer: 3,
  },
  {
    question: "Welches Wort ist ein deutsches Zahlwort?",
    answer_1: "rot",
    answer_2: "sieben",
    answer_3: "schnell",
    answer_4: "Haus",
    right_answer: 2,
  },
];
let currentQuestion = 0;

function init() {
  document.getElementById("all_questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none";
  } else {
  }
  let question = questions[currentQuestion];
  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next_button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next_button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}
function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
