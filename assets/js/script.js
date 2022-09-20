let randomQuestion, currentQuestionIndex, availableQuestions;
let currentScore = parseInt(document.getElementById("score").innerText);
let qCounter = document.getElementById('q-counter');
let user = document.getElementById('user');
let score = document.getElementById('score');
let highScoreList = document.getElementById('highscore');
let key;

const btnDivEl = document.getElementById('btn-div');
const nextDivEl = document.getElementById('next-div');
const endDivEl = document.getElementById('end-div');

const mediumNextBtnEl = document.getElementById('medium-next-btn');
const hardNextBtnEl = document.getElementById('hard-next-btn');
const mediumLvlBtnEl = document.getElementById('medium-level-btn');
const hardLvlBtnEl = document.getElementById('hard-level-btn');

const nextBtnEl = document.getElementById('next-btn');
const againBtnEl = document.getElementById('again-btn');
const submitBtnEl = document.getElementById('submit-btn');
const highScoreBtnEl = document.getElementById('highscore-btn');

const aBtnEl = document.getElementById('a');
const bBtnEl = document.getElementById('b');
const cBtnEl = document.getElementById('c');
const dBtnEl = document.getElementById('d');

const MAX_QUESTIONS = 10;
const flagElement = document.getElementById('flags');

againBtnEl.addEventListener('click', restartGame);
aBtnEl.addEventListener('click', checkAnswer);
bBtnEl.addEventListener('click', checkAnswer);
cBtnEl.addEventListener('click', checkAnswer);
dBtnEl.addEventListener('click', checkAnswer);

/**
 * Game start after page content is loaded
 */
document.addEventListener("DOMContentLoaded", startGame); 

function startGame () { 
  availableQuestions = [...easyQuestions];
  score.innerText = 0;
  currentScore = null;
  nextBtnEl.disabled = true;
  reset();
  nextQuestion ();
}

/**
 * Resets and restart counting of values at the start of the game:
 * Current question index is back at 0, and is also displayed visually for the user.
 * Countdown timer resets and restarts.
 */
function reset() {
  currentQuestionIndex = 0;
  qCounter.innerText = 1;
  resetTimer();
  startCountdown();
}

/**
 * Function for countdown timer
 */
let count = 59;
let time;

function startCountdown() {
  time = setInterval(countdownTimer, 1000);
}

function countdownTimer() {
  document.getElementById('timer').innerHTML = count;
  count--;
  if (count == -1) {
    clearInterval(time);
    alert("Oh no, time out!! :(");
    gameOver();
  }
}

function resetTimer() {
  count = 59;
  document.getElementById('timer').innerHTML = count;
}

/** 
 * Shuffels next question and calculates current question index.
 * Removes last shown question for no repition.
 * Credit for calculationg the questions: 'Learn {to} Code' at Youtube, see README.md 
 */ 

function nextQuestion () {
  currentQuestionIndex ++;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[questionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtnEl.innerHTML = randomQuestion.a;
  bBtnEl.innerHTML = randomQuestion.b;
  cBtnEl.innerHTML = randomQuestion.c;
  dBtnEl.innerHTML = randomQuestion.d;  

  availableQuestions.splice(questionIndex, 1);
}

/** 
 * Function for checking the users answer.
 * Turns chosen button red or green depending on answer. 
 */ 
function checkAnswer(event) {
  let selectedChoice = event.target;
  let selectedAnswer = selectedChoice.dataset.type;
  
  if (selectedAnswer === randomQuestion.answer) {
    selectedChoice.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
    disableAnswerBtns();
    nextBtnEl.disabled = false;
    mediumNextBtnEl.disabled = false;
    hardNextBtnEl.disabled = false;
    calculateScore();
  } else {
    selectedChoice.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    showRightAnswer();
    disableAnswerBtns();
    nextBtnEl.disabled = false;
    mediumNextBtnEl.disabled = false;
    hardNextBtnEl.disabled = false;
  }
}

/**
 * Functions for disableing answer buttons to prevent repeated guessing.
 */
function disableAnswerBtns() {
  aBtnEl.classList.add('disable');
  bBtnEl.classList.add('disable');
  cBtnEl.classList.add('disable');
  dBtnEl.classList.add('disable');
} 

/**
 * Function for showing the correct answer if user guessed wrong answer.
 */
function showRightAnswer () {
  if (aBtnEl.dataset.type == randomQuestion.answer) {
    aBtnEl.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
  } else if (bBtnEl.dataset.type == randomQuestion.answer) {
    bBtnEl.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
  } else if (cBtnEl.dataset.type == randomQuestion.answer) {
    cBtnEl.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
  } else if (dBtnEl.dataset.type == randomQuestion.answer) {
    dBtnEl.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
  } 
}

/**
 * Function for calculating the score
 */
function calculateScore() {
score.innerText = (currentScore += 100);
}

/**
 * Function that either shows the next easy question or takes the user to the medium level.
 */
nextBtnEl.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= MAX_QUESTIONS) {
    clearInterval(time);
    nextBtnEl.disabled = true; 
    mediumLvl();
  } else { 
    resetAnswerBtns();
    nextBtnEl.disabled = true;
    qCounter.innerText = (currentQuestionIndex + 1);
    nextQuestion(); 
  }
});

/**
* Function for reseting the answerbuttons after each question.
*/
function resetAnswerBtns() {  
  aBtnEl.classList.remove('disable');
  aBtnEl.style.backgroundColor ="white";
  bBtnEl.classList.remove('disable');
  bBtnEl.style.backgroundColor ="white";
  cBtnEl.classList.remove('disable');
  cBtnEl.style.backgroundColor ="white";
  dBtnEl.classList.remove('disable');
  dBtnEl.style.backgroundColor ="white";
}  

/**
 * Function that takes the user to the medium level if a score >= 700p.
 */
function mediumLvl() {
  if (currentScore >= 700) {
    btnDivEl.classList.add('stack');
    nextBtnEl.classList.add('stack');
    nextDivEl.classList.remove('stack');
    mediumLvlBtnEl.classList.remove('stack');
  } else {
    gameOver();
  }
}

/**
 * Function for starting medium level
 */
mediumLvlBtnEl.addEventListener('click', startMediumLevel);

function startMediumLevel () {
  availableQuestions = [...mediumQuestions];
  reset();
  nextMediumQuestion ();
}

 /** 
 * Shuffels next medium question and reseting counting elements and buttons.
 * Credit for calculationg the questions: 'Learn {to} Code' at Youtube, see README.md 
 */ 
function nextMediumQuestion () {
  currentQuestionIndex ++;

  btnDivEl.classList.remove('stack');
  mediumNextBtnEl.classList.remove('stack');
  nextDivEl.classList.add('stack');
  mediumLvlBtnEl.classList.add('stack');
  mediumNextBtnEl.disabled = true;

  resetAnswerBtns();

  const mediumQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[mediumQuestionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtnEl.innerHTML = randomQuestion.a;
  bBtnEl.innerHTML = randomQuestion.b;
  cBtnEl.innerHTML = randomQuestion.c;
  dBtnEl.innerHTML = randomQuestion.d;  

  availableQuestions.splice(mediumQuestionIndex, 1);
}

/**
 * Function that either shows the next medium question or takes the user to the hard level.
 */
mediumNextBtnEl.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= MAX_QUESTIONS) {
    clearInterval(time);
    hardLvl();
  } else { 
    resetAnswerBtns();
    qCounter.innerText = (currentQuestionIndex + 1);
    nextMediumQuestion(); 
  }
});

/**
 * /**
 * Function that takes the user to the hard level if a score >= 1500p.
 */
function hardLvl() {
  if (currentScore >= 1500) {
    btnDivEl.classList.add('stack');
    mediumNextBtnEl.classList.add('stack');
    nextDivEl.classList.remove('stack');
    hardLvlBtnEl.classList.remove('stack');
  } else {
    gameOver();
  }
}

/**
 * Function for starting hard level
 */
hardLvlBtnEl.addEventListener('click', startHardLevel);

function startHardLevel () {
  availableQuestions = [...hardQuestions];
  reset();
  nextHardQuestion ();
}

 /** 
 * Shuffels next hard question and reseting counting elements and buttons.
 * Credit for calculationg the questions: 'Learn {to} Code' at Youtube, see README.md 
 */ 
function nextHardQuestion () {
  currentQuestionIndex ++;

  btnDivEl.classList.remove('stack');
  hardNextBtnEl.classList.remove('stack');
  nextDivEl.classList.add('stack');
  hardLvlBtnEl.classList.add('stack');
  hardNextBtnEl.disabled = true;

  resetAnswerBtns();

  const hardQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[hardQuestionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtnEl.innerHTML = randomQuestion.a;
  bBtnEl.innerHTML = randomQuestion.b;
  cBtnEl.innerHTML = randomQuestion.c;
  dBtnEl.innerHTML = randomQuestion.d;  

  availableQuestions.splice(hardQuestionIndex, 1);
}

/**
 * Function that either shows the next hard question or takes the user to the game over stage of the game.
 */
hardNextBtnEl.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= MAX_QUESTIONS) {
    clearInterval(time);
    hardLvlBtnEl.classList.add('stack'); 
    gameOver();
  } else { 
    resetAnswerBtns();
    qCounter.innerText = (currentQuestionIndex + 1);
    nextHardQuestion(); 
  }
});

/**
 * Function for game over
 */
 function gameOver() {
  btnDivEl.classList.add('stack');
  nextBtnEl.classList.add('stack');
  mediumNextBtnEl.classList.add('stack');
  hardNextBtnEl.classList.add('stack');
  endDivEl.classList.remove('stack');
  againBtnEl.classList.remove('stack');
  submitBtnEl.disabled = false; 
}

//Eventlistner for use of spacebar in input field (Code Credit: Code Grepper, see README.md)
user.addEventListener('keypress', function(event) {
  if (event.code === 'Space') {
    key = 32;
  }
})

//Eventlistner for validating and submitting username 
submitBtnEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (user.value === "" || key === 32) {
    alert('Please submit a username (with no blank spaces).');
    key = 0
    return false;
  } else {
  submitBtnEl.disabled = true; 
  setHighScore();
  highScoreModal.style.display = "block";
  }
});

/**
 * Function to restart game at game over
 */
function restartGame () {
  btnDivEl.classList.remove('stack');
  nextBtnEl.classList.remove('stack');
  endDivEl.classList.add('stack');
  againBtnEl.classList.add('stack');
  resetAnswerBtns();
  startGame();
}

/**
 * Configuring highscore list, fictive array if the user haven't played before. 
 * Gets previous highscore from local storage.
 */
let highScoreArray;
let loadLocalHighScore = JSON.parse(localStorage.getItem('storedHighScore')) || null;

/**
 * Function that shows the current highscorelist.
 * Calculating if the user made it to the highscore list. 
 * Puts the user on the list and sorts after highscore value.
 * Adds current highscore to local storage.
 */
function setHighScore() {
  if (loadLocalHighScore === null) {
    highScoreArray = [
    {
    username: 'Ted',
    highscore: '2500'
    },
    {
    username: 'Robin',
    highscore: '2000'
    },
    {
    username: 'Marshall',
    highscore: '1800'
    },
    {
    username: 'Lily',
    highscore: '1600'
    },
    {
    username: 'Barney',
    highscore: '1200'
    }
  ];
  } else { 
    highScoreArray = loadLocalHighScore;
  }

  if (currentScore > highScoreArray[4].highscore) {
    highScoreArray.pop();
    let newHighscore = { username: user.value, highscore: currentScore};
    highScoreArray.push(newHighscore);
  

    highScoreArray.sort(function(a,b) {
      return b.highscore - a.highscore;
      });
  }  

  window.localStorage.setItem('storedHighScore', JSON.stringify(highScoreArray));
  currentHighScore();
}

/**
 * Dispaly highscore list at the end
 * Credit LMS lesson: Writing Complex HTML With JavaScript
 */
function currentHighScore() {

  let highScoreHtml = `
    <table>
      <thead>
        <tr class="highscore-heading">
          <th></i>Name</th>
          <th></i>Highscore</th>
        </tr>
      </thead>
    <tbody>
  `;

  for (let highscore of highScoreArray) {
    let rowHtml = `
      <tr class="highscore-row">
        <td>${highscore.username}</td>
        <td>${highscore.highscore}</td>
      </tr>
    `;
    highScoreHtml += rowHtml;  
  }

  highScoreHtml += `
    </tbody>
  </table>
  `;

highScoreList.innerHTML = highScoreHtml; 
}

/**
 * Function to close highscore modal.
 * The modal is opend by submitting a username at the end of the game
 * or by clicking the highscore button.
 */
let highScoreModal = document.getElementById("highscore-modal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  highScoreModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == highScoreModal) {
    highScoreModal.style.display = "none";
  }
};

//Eventlistner to show highscore
highScoreBtnEl.addEventListener('click', function(event) {
  setHighScore();
  highScoreModal.style.display = "block";
});