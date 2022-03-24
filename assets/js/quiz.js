let randomQuestion, currentQuestionIndex, availableQuestions, score;
let timer = document.getElementsByClassName('timer');


const flagElement = document.getElementById('flags');
const answerButtonElement = document.getElementById('answer-btns');
// const answers = Array.from(document.getElementsByClassName('answer-btn'));
const maxQuestions = 10;


document.addEventListener("DOMContentLoaded", startGame); 

function startGame () { 
  console.log('started');
  currentQuestionIndex = 0;
  timer = 0;
  score = 0;
  availableQuestions = [...easyQuestions];
  // console.log(availableQuestions);
  nextQuestion ();
}

function nextQuestion () {
  currentQuestionIndex ++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[questionIndex];
  flagElement.innerHTML = randomQuestion.question;
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
    question: `
    <picture>
      <img type="image/png" src="./assets/image/quiz/cn.png" alt="India">
    </picture>
    `,
    answers: [
      { A: "China", correct: true },
      { B: "Italy", correct: false },
      { C: "India", correct: false },
      { D: "Peru", correct: false },
    ]
  },
  {
    question:  `
    <picture>
      <img type="image/png" src="./assets/image/quiz/in.png" alt="India">
    </picture>
    `,
    answers: [
      { A: "China", correct: true },
      { B: "Italy", correct: false },
      { C: "India", correct: false },
      { D: "Peru", correct: false },
    ]
  }
] ;