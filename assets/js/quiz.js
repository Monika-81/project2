let randomQuestion, currentQuestionIndex, availableQuestions, score;
let timer = document.getElementsByClassName('timer');

const maxQuestions = 10;
const flagElement = document.getElementById('flags');
// const answerButtons = document.getElementsByClassName('answer-btn');
// const answers = Array.from(document.getElementsByClassName('answer-btn'));
const aBtn = document.getElementById('a');
const bBtn = document.getElementById('b');
const cBtn = document.getElementById('c');
const dBtn = document.getElementById('d');


document.addEventListener("DOMContentLoaded", startGame); 

function startGame () { 
  console.log('started');
  currentQuestionIndex = 0;
  timer = 0;
  score = 0;
  availableQuestions = [...easyQuestions];
  nextQuestion ();
}

function nextQuestion () {
  currentQuestionIndex ++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[questionIndex];
  flagElement.innerHTML = randomQuestion.question;
  aBtn.innerHTML = randomQuestion.a;
  bBtn.innerHTML = randomQuestion.b;
  cBtn.innerHTML = randomQuestion.c;
  dBtn.innerHTML = randomQuestion.d;  
}
  /*
}



// function checkAnswer() {

// }

// function calculateScore() {

// }


// function nextLevel() {

// }

/**
 * Quiz questions
 * Flag + 4 questions
 * Flag source from https://flagpedia.net/download/api
 */

//Easy level questions, 30 in total but starts with 5 totest the code

const easyQuestions = [ 
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/cn.png" alt="China"></picture> `,
    a: "China",
    b: "Italy",
    c: "India", 
    d: "Peru", 
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/in.png" alt="India"></picture> `,
    a: "Norway", 
    b: "Israel",
    c: "India",
    d: "Sri Lanka",
    answer: 'c',
  }
] ;