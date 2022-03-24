let randomQuestion, currentQuestionIndex, availableQuestions;
let timer = document.getElementsByClassName('timer');

const score = document.getElementById('score');
const maxQuestions = 10;
const flagElement = document.getElementById('flags');
const aBtn = document.getElementById('a');
const bBtn = document.getElementById('b');
const cBtn = document.getElementById('c');
const dBtn = document.getElementById('d');

//Game start after loaded content
document.addEventListener("DOMContentLoaded", startGame); 

function startGame () { 
  console.log('started');
  currentQuestionIndex = 0;
  timer = 0;
  availableQuestions = [...easyQuestions];
  nextQuestion ();
}

/** 
 * Shuffels next question and calculates current question index
 * Removes last question for no repition
 * Code credit: 'Learn {to} Code' at Youtube, see README.md 
 */ 

function nextQuestion () {
  currentQuestionIndex ++;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[questionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtn.innerHTML = randomQuestion.a;
  bBtn.innerHTML = randomQuestion.b;
  cBtn.innerHTML = randomQuestion.c;
  dBtn.innerHTML = randomQuestion.d;  

  availableQuestions.splice(currentQuestionIndex, 1);
}

/** 
 * Checks for users answer
 * Turns chosen button red or green and disables answer buttons for further guessing
 * Calculates score if correct answer
 */ 

aBtn.addEventListener("click", checkAnswer);
bBtn.addEventListener("click", checkAnswer);
cBtn.addEventListener("click", checkAnswer);
dBtn.addEventListener("click", checkAnswer);

function checkAnswer(event) {
  let selectedChoice = event.target;
  let selectedAnswer = selectedChoice.dataset.type;
  let answerButtons = document.getElementsByClassName('answer-btns');

  if (selectedAnswer === randomQuestion.answer) {
    selectedChoice.style.backgroundColor = 'green';
    aBtn.classList.add('disable');
    bBtn.classList.add('disable');
    cBtn.classList.add('disable');
    dBtn.classList.add('disable');
    calculateScore();

  } else {
    selectedChoice.style.backgroundColor = 'red';
    aBtn.classList.add('disable');
    bBtn.classList.add('disable');
    cBtn.classList.add('disable');
    dBtn.classList.add('disable');
  }
}

/**
 * When the user clicks the next button they either get to next question or next level/Game over.
 */
let next = document.getElementById('next');
next.addEventListener('click', function(event) {
  if (availableQuestions.lenght === 0 || currentQuestionIndex >= maxQuestions) {
  //go to next lvl or game over
    console.log('next level')
  } else { 
      aBtn.classList.remove('disable');
      aBtn.style.backgroundColor ="white";
      bBtn.classList.remove('disable');
      bBtn.style.backgroundColor ="white";
      cBtn.classList.remove('disable');
      cBtn.style.backgroundColor ="white";
      dBtn.classList.remove('disable');
      dBtn.style.backgroundColor ="white";
      console.log(currentQuestionIndex);
      nextQuestion(); 
    }
  })
  
 function calculateScore() {
  let currentScore = parseInt(document.getElementById("score").innerText);
  score.innerText = (currentScore += 100);
}


// function nextLevel() {
 // aBtn.classList.remove('disable');
  // aBtn.style.backgroundColor ="white";
  // bBtn.classList.remove('disable');
  // bBtn.style.backgroundColor ="white";
  // cBtn.classList.remove('disable');
  // cBtn.style.backgroundColor ="white";
  // dBtn.classList.remove('disable');
  // dBtn.style.backgroundColor ="white";

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
] 