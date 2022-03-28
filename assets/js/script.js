//Declares let variables
let randomQuestion, currentQuestionIndex, availableQuestions;
let currentScore = parseInt(document.getElementById("score").innerText);
let qCounter = document.getElementById('q-counter');
let user = document.getElementById('user');

let btnDiv = document.getElementById('btn-div');
let nextDiv = document.getElementById('next-div');
let endDiv = document.getElementById('end-div');
let highScoreDiv = document.getElementById('highscore');

let nextBtn = document.getElementById('next-btn');
let mediumNextBtn = document.getElementById('medium-next-btn');
let hardNextBtn = document.getElementById('hard-next-btn');
let mediumLvlBtn = document.getElementById('medium-level-btn');
let hardLvlBtn = document.getElementById('hard-level-btn');
let againBtn = document.getElementById('again-btn');

//Declares const variables
const score = document.getElementById('score');
const maxQuestions = 10;
const flagElement = document.getElementById('flags');
const aBtn = document.getElementById('a');
const bBtn = document.getElementById('b');
const cBtn = document.getElementById('c');
const dBtn = document.getElementById('d');

//Global event listners
againBtn.addEventListener('click', restartGame);
aBtn.addEventListener("click", checkAnswer);
bBtn.addEventListener("click", checkAnswer);
cBtn.addEventListener("click", checkAnswer);
dBtn.addEventListener("click", checkAnswer);

/**
 * Game start after page content is loaded
 */
document.addEventListener("DOMContentLoaded", startGame); 

function startGame () { 
  console.log('New game started');
  availableQuestions = [...easyQuestions];
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
var count = 59;
var time;

function startCountdown() {
  time = setInterval(countdownTimer, 1000)}

function countdownTimer() {
  document.getElementById('timer').innerHTML = count;
  count--;
  if (count == -1) {
    clearInterval(time);
    alert("Time out!! :(");
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

  aBtn.innerHTML = randomQuestion.a;
  bBtn.innerHTML = randomQuestion.b;
  cBtn.innerHTML = randomQuestion.c;
  dBtn.innerHTML = randomQuestion.d;  

  availableQuestions.splice(questionIndex, 1);
  nextBtn.disabled = true;
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
    nextBtn.disabled = false;
    mediumNextBtn.disabled = false;
    hardNextBtn.disabled = false;
    calculateScore();
  } else {
    selectedChoice.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    rightAnswer();
    disableAnswerBtns();
    nextBtn.disabled = false;
    mediumNextBtn.disabled = false;
    hardNextBtn.disabled = false;
  }
}

/**
 * Functions for disableing answer buttons to prevent repeated guessing.
 */
function disableAnswerBtns() {
  aBtn.classList.add('disable');
  bBtn.classList.add('disable');
  cBtn.classList.add('disable');
  dBtn.classList.add('disable');
} 

/**
 * Function for showing the correct answer if user guessed wrong answer.
 */
function rightAnswer () {
  if (aBtn.dataset.type == randomQuestion.answer) {
    aBtn.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
  } else if (bBtn.dataset.type == randomQuestion.answer) {
    bBtn.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
  } else if (cBtn.dataset.type == randomQuestion.answer) {
    cBtn.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
  } else if (dBtn.dataset.type == randomQuestion.answer) {
    dBtn.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
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
nextBtn.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= maxQuestions) {
    console.log(currentScore);
    clearInterval(time);
    nextLvl();
  } else { 
    resetAnswerBtns();
    nextBtn.disabled = true;
    console.log(currentQuestionIndex);
    qCounter.innerText = (currentQuestionIndex + 1);
    nextQuestion(); 
  }
})

/**
* Function for reseting the answerbuttons after each question.
*/

function resetAnswerBtns() {  
  aBtn.classList.remove('disable');
  aBtn.style.backgroundColor ="white";
  bBtn.classList.remove('disable');
  bBtn.style.backgroundColor ="white";
  cBtn.classList.remove('disable');
  cBtn.style.backgroundColor ="white";
  dBtn.classList.remove('disable');
  dBtn.style.backgroundColor ="white";
}  

/**
 * Function that takes the user to the medium level if a score >= 700p.
 */
function nextLvl() {
  if (currentScore >= 700) {
    btnDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    nextDiv.classList.remove('stack');
    mediumLvlBtn.classList.remove('stack');
  } else {
    gameOver();
  }
}

/**
 * Function for starting medium level
 */
mediumLvlBtn.addEventListener('click', nextMediumLevel);

function nextMediumLevel () {
  console.log('starting medium level');
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

  btnDiv.style.display = 'block';
  mediumNextBtn.classList.remove('stack');
  nextDiv.classList.add('stack');
  mediumLvlBtn.classList.add('stack');
  mediumNextBtn.disabled = true;

  resetAnswerBtns();

  const mediumQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[mediumQuestionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtn.innerHTML = randomQuestion.a;
  bBtn.innerHTML = randomQuestion.b;
  cBtn.innerHTML = randomQuestion.c;
  dBtn.innerHTML = randomQuestion.d;  

  availableQuestions.splice(mediumQuestionIndex, 1);
}

/**
 * Function that either shows the next medium question or takes the user to the hard level.
 */
mediumNextBtn.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= maxQuestions) {
    console.log(currentScore);
    clearInterval(time);
    nextNextLvl();
  } else { 
    resetAnswerBtns();
    console.log(currentQuestionIndex);
    qCounter.innerText = (currentQuestionIndex + 1);
    nextMediumQuestion(); 
  }
})

/**
 * /**
 * Function that takes the user to the hard level if a score >= 1500p.
 */

function nextNextLvl() {
  if (currentScore >= 1500) {
    btnDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    nextDiv.classList.remove('stack');
    hardLvlBtn.classList.remove('stack');
  } else {
    gameOver();
  }
}

/**
 * Function for starting hard level
 */
hardLvlBtn.addEventListener('click', nextHardLevel);

function nextHardLevel () {
  console.log('starting hard level');
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

  btnDiv.style.display = 'block';
  hardNextBtn.classList.remove('stack');
  nextDiv.classList.add('stack');
  hardLvlBtn.classList.add('stack');
  hardNextBtn.disabled = true;

  resetAnswerBtns();

  const hardQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[hardQuestionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtn.innerHTML = randomQuestion.a;
  bBtn.innerHTML = randomQuestion.b;
  cBtn.innerHTML = randomQuestion.c;
  dBtn.innerHTML = randomQuestion.d;  

  availableQuestions.splice(hardQuestionIndex, 1);
  console.log('ok here')
}

/**
 * Function that either shows the next hard question or takes the user to the game over stage of the game.
 */
hardNextBtn.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= maxQuestions) {
    console.log(currentScore);
    clearInterval(time);
    gameOver();
  } else { 
    resetAnswerBtns();
    console.log(currentQuestionIndex);
    qCounter.innerText = (currentQuestionIndex + 1);
    nextHardQuestion(); 
  }
})


/**
 * Function for game over
 */
 function gameOver() {
  btnDiv.style.display = 'none';
  nextBtn.style.display = 'none';
  endDiv.classList.remove('stack');
  againBtn.classList.remove('stack');
}

function usernameValue(event) {
  console.log(user.value);
  console.log(currentScore);
  highScore();
}

/**
 * Function to restart game at game over
 */
 function restartGame () {
  btnDiv.style.display = 'block';
  nextBtn.style.display = 'block';
  endDiv.classList.add('stack');
  againBtn.classList.add('stack');
  resetAnswerBtns();
  startGame();
}

//Fictive highscore array, to get highscore list going
let highScoreArray = [
  {
    username: 'Ted',
    highscore: '123'
  },
  {
    username: 'Robin',
    highscore: '122'
  },
  {
    username: 'Marshall',
    highscore: '121'
  },
  {
    username: 'Lily',
    highscore: '120'
  },
  {
    username: 'Barney',
    highscore: '190'
  }
]

/**
 * Function for calculating if the user made it to the highscore list. 
 * Puts the user on the list and sorts avfter highscore value.
 */
function highScore() {
  if (currentScore > highScoreArray[4].highscore) {
    highScoreArray.pop();
    let newHighscore = { username: user.value, highscore: currentScore};
    highScoreArray.push(newHighscore);
  }

  highScoreArray.sort(function(a,b) {
    return b.highscore - a.highscore;
  });

  console.log(highScoreArray);
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
        <tr>
          <th></i>Name</th>
          <th></i>Highscore</th>
        </tr>
      </thead>
    <tbody>
  `;

  for (highscore of highScoreArray) {
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

  highScoreDiv.innerHTML = highScoreHtml; 
}
