let randomQuestion, currentQuestionIndex, availableQuestions;
let currentScore = parseInt(document.getElementById("score").innerText);

let btnDiv = document.getElementById('btn-div');
let nextDiv = document.getElementById('next-div');
let endDiv = document.getElementById('end-div');

let nextBtn = document.getElementById('next-btn');
let mediumNextBtn = document.getElementById('medium-next-btn');
let hardNextBtn = document.getElementById('hard-next-btn');
let mediumLvlBtn = document.getElementById('medium-level-btn');
let hardLvlBtn = document.getElementById('hard-level-btn');
let againBtn = document.getElementById('again-btn');

const score = document.getElementById('score');
const maxQuestions = 10;
const flagElement = document.getElementById('flags');
const aBtn = document.getElementById('a');
const bBtn = document.getElementById('b');
const cBtn = document.getElementById('c');
const dBtn = document.getElementById('d');

//----------------Game start after loaded content
document.addEventListener("DOMContentLoaded", startGame); 

function startGame () { 
  console.log('started');
  currentQuestionIndex = 0;
  availableQuestions = [...easyQuestions];
  nextQuestion ();
}

//------Countdown timer------------------
var count = 60;
var time = setInterval(countdownTimer, 1000);

function countdownTimer() {
  document.getElementById('timer').innerHTML = 'Seconds left: ' + count;
  count--;
  if (count == -1) {
    clearInterval(time);
    // alert("Time out!! :(");
    }
}

/** 
 * Shuffels next question and calculates current question index
 * Removes last question for no repition
 * Code credit: 'Learn {to} Code' at Youtube, see README.md 
 */ 

function nextQuestion () {
  currentQuestionIndex ++;
  countdownTimer();

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[questionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtn.innerHTML = randomQuestion.a;
  bBtn.innerHTML = randomQuestion.b;
  cBtn.innerHTML = randomQuestion.c;
  dBtn.innerHTML = randomQuestion.d;  

  availableQuestions.splice(questionIndex, 1);
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
 * When the user clicks the next button they either get to next question or next level.
 */
nextBtn.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= maxQuestions) {
    console.log(currentScore);
    clearInterval(time);
    nextLvl();
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
  score.innerText = (currentScore += 100);
}



//------- Next level----------------
function nextLvl() {
  if (currentScore >= 700) {
    btnDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    nextDiv.classList.remove('stack');
    mediumLvlBtn.classList.remove('stack');
  } else {
    btnDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    endDiv.classList.remove('stack');
    againBtn.classList.remove('stack'); 
  }
  againBtn.addEventListener('click', restartGame);
}



/**
 * Function to restart game at game over
 */
function restartGame () {
  btnDiv.style.display = 'block';
  nextBtn.style.display = 'block';
  endDiv.classList.add('stack');
  againBtn.classList.add('stack');

  aBtn.classList.remove('disable');
  aBtn.style.backgroundColor ="white";
  bBtn.classList.remove('disable');
  bBtn.style.backgroundColor ="white";
  cBtn.classList.remove('disable');
  cBtn.style.backgroundColor ="white";
  dBtn.classList.remove('disable');
  dBtn.style.backgroundColor ="white";

  startGame();
}



/**
 * Function for starting medium level
 */
mediumLvlBtn.addEventListener('click', nextMediumLevel);

function nextMediumLevel () {
  console.log('started medium level');
  currentQuestionIndex = 0;
  availableQuestions = [...mediumQuestions];
  nextMediumQuestion ();
}

 /** 
 * Shuffels next medium question and calculates current question index
 * Removes last question for no repition
 * Code credit: 'Learn {to} Code' at Youtube, see README.md 
 */ 

function nextMediumQuestion () {
  currentQuestionIndex ++;
  countdownTimer();

  btnDiv.style.display = 'block';
  mediumNextBtn.classList.remove('stack');
  nextDiv.classList.add('stack');
  mediumLvlBtn.classList.add('stack');

  aBtn.classList.remove('disable');
  aBtn.style.backgroundColor ="white";
  bBtn.classList.remove('disable');
  bBtn.style.backgroundColor ="white";
  cBtn.classList.remove('disable');
  cBtn.style.backgroundColor ="white";
  dBtn.classList.remove('disable');
  dBtn.style.backgroundColor ="white";

  const mediumQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
  randomQuestion = availableQuestions[mediumQuestionIndex];
  flagElement.innerHTML = randomQuestion.question;

  aBtn.innerHTML = randomQuestion.a;
  bBtn.innerHTML = randomQuestion.b;
  cBtn.innerHTML = randomQuestion.c;
  dBtn.innerHTML = randomQuestion.d;  

  availableQuestions.splice(mediumQuestionIndex, 1);
  console.log("so far so good");
}

mediumNextBtn.addEventListener('click', function(event) {

  if (availableQuestions.lenght === 0 || currentQuestionIndex >= maxQuestions) {
    console.log(currentScore);
    clearInterval(time);
    nextNextLvl();
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
      nextMediumQuestion(); 
    }
  })




/**
 * Quiz questions
 * Flag + 4 questions
 * Flag source from https://flagpedia.net/download/api
 */

//Easy level questions, 30 in total.

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
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/au.png" alt="Australia"></picture> `,
    a: "Sweden", 
    b: "Cuba",
    c: "South Africa",
    d: "Australia",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/us.png" alt="United States"></picture> `,
    a: "United States", 
    b: "Canada",
    c: "Malaysia",
    d: "Belgium",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ie.png" alt="Ireland"></picture> `,
    a: "France", 
    b: "Ireland",
    c: "Netherlands",
    d: "Jamaica",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ua.png" alt="Ukraine"></picture> `,
    a: "Spain", 
    b: "Ukraine",
    c: "South Korea",
    d: "Kenya",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/it.png" alt="Italy"></picture> `,
    a: "Portugal", 
    b: "Bahamas",
    c: "Italy",
    d: "Malaysia",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/es.png" alt="Spain"></picture> `,
    a: "Mexico", 
    b: "Ireland",
    c: "Egypt",
    d: "Spain",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/jp.png" alt="Japan"></picture> `,
    a: "Japan", 
    b: "Taiwan",
    c: "Georgia",
    d: "Honduras",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ca.png" alt="Canada"></picture> `,
    a: "Japan", 
    b: "Canada",
    c: "New Zealand",
    d: "Germany",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/br.png" alt="Brazil"></picture> `,
    a: "Austria", 
    b: "Guatemala",
    c: "Brazil",
    d: "Germany",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ar.png" alt="Argentina"></picture> `,
    a: "Argentina",
    b: "Panama",
    c: "Singapore", 
    d: "Finland", 
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/dk.png" alt="Denmark"></picture> `,
    a: "Poland", 
    b: "Israel",
    c: "Denmark",
    d: "Serbia",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/fr.png" alt="France"></picture> `,
    a: "Laos", 
    b: "El Salvador",
    c: "Slovakia",
    d: "France",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/de.png" alt="Germany"></picture> `,
    a: "Germany", 
    b: "Chile",
    c: "Mauritius",
    d: "Iceland",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/se.png" alt="Sweden"></picture> `,
    a: "Portugal", 
    b: "Sweden",
    c: "Peru",
    d: "China",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/gb.png" alt="United Kingdom"></picture> `,
    a: "Spain", 
    b: "United Kingdom",
    c: "Japan",
    d: "Nigera",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/gr.png" alt="Greece"></picture> `,
    a: "Venezuela", 
    b: "Indonesia",
    c: "Greece",
    d: "Canada",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/za.png" alt="South Africa"></picture> `,
    a: "Vietnam", 
    b: "Denmark",
    c: "France",
    d: "South Africa",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/mx.png" alt="Mexico"></picture> `,
    a: "Mexico", 
    b: "Burma",
    c: "Iran",
    d: "Ghana",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/il.png" alt="Israel"></picture> `,
    a: "Japan", 
    b: "Israel",
    c: "Switzerland",
    d: "Australia",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/tr.png" alt="Turkey"></picture> `,
    a: "Thailand", 
    b: "Bolivia",
    c: "Turkey",
    d: "Romania",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/cl.png" alt="Chile"></picture> `,
    a: "Chile",
    b: "Italy",
    c: "Pakistan", 
    d: "Spain", 
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/be.png" alt="Belgium"></picture> `,
    a: "Norway", 
    b: "Bangladesh",
    c: "Belgium",
    d: "Indonesia",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/pt.png" alt="Portugal"></picture> `,
    a: "France", 
    b: "Brazil",
    c: "South Africa",
    d: "Portugal",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/fi.png" alt="Finland"></picture> `,
    a: "Finland", 
    b: "Colombia",
    c: "Malaysia",
    d: "Tanzania",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/no.png" alt="Norway"></picture> `,
    a: "France", 
    b: "Norway",
    c: "Turkey",
    d: "Nicaragua",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/th.png" alt="Thailand"></picture> `,
    a: "Bulgaria", 
    b: "Thailand",
    c: "South Korea",
    d: "Namibia",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/sa.png" alt="Saudi Arabia"></picture> `,
    a: "United Kingdom", 
    b: "Aruba",
    c: "Saudi Arabia",
    d: "Cambodia",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/kr.png" alt="South Korea"></picture> `,
    a: "Poland", 
    b: "Ireland",
    c: "Kazakhstan",
    d: "South Korea",
    answer: 'd',
  }
] 

//Easy level questions, 30 in total.
const mediumQuestions = [
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/eg.png" alt="Egypt"></picture> `,
    a: "Egypt",
    b: "Azerbaijan",
    c: "Nepal", 
    d: "Peru", 
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/tz.png" alt="Tanzania"></picture> `,
    a: "Iran", 
    b: "Moldova",
    c: "Tanzania",
    d: "Sri Lanka",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ke.png" alt="Kenya"></picture> `,
    a: "Iceland", 
    b: "Cyprus",
    c: "Guam",
    d: "Kenya",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/dz.png" alt="Algeria"></picture> `,
    a: "Algeria", 
    b: "Haiti",
    c: "Albania",
    d: "San Marino",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ma.png" alt="Morocco"></picture> `,
    a: "Hungary", 
    b: "Morocco",
    c: "Angola",
    d: "Fiji",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/mu.png" alt="Mauritius"></picture> `,
    a: "Qatar", 
    b: "Mauritius",
    c: "Honduras",
    d: "Andorra",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/tn.png" alt="Tunisia"></picture> `,
    a: "Puerto Rico", 
    b: "Slovakia",
    c: "Tunisia",
    d: "Malaysia",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ly.png" alt="Libya"></picture> `,
    a: "Venezuela", 
    b: "Cambodia",
    c: "Pakistan",
    d: "Libya",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/hu.png" alt="Hungary"></picture> `,
    a: "Hungary", 
    b: "Romania",
    c: "Maldives",
    d: "Algeria",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/bg.png" alt="Bulgaria"></picture> `,
    a: "Greenland", 
    b: "Bulgaria",
    c: "Paraguay",
    d: "Czechia",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/at.png" alt="Austria"></picture> `,
    a: "Uruguay", 
    b: "Monaco",
    c: "Austria",
    d: "Myanmar",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/rs.png" alt="Serbia"></picture> `,
    a: "Serbia",
    b: "Panama",
    c: "Latvia", 
    d: "Mali", 
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/al.png" alt="Albania"></picture> `,
    a: "Sudan", 
    b: "Jordan",
    c: "Albania",
    d: "Mauritius",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/mk.png" alt="North Macedonia"></picture> `,
    a: "Burundi", 
    b: "El Salvador",
    c: "Lichtenstein",
    d: "North Macedonia",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/cy.png" alt="Cyprus"></picture> `,
    a: "Cyprus", 
    b: "Indonesia",
    c: "Madagascar",
    d: "Iceland",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/nz.png" alt="New Zealand"></picture> `,
    a: "Ecuador", 
    b: "New Zealand",
    c: "Singapore",
    d: "Philippines",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/id.png" alt="Indonesia"></picture> `,
    a: "Malta", 
    b: "Indonesia",
    c: "Uruguay",
    d: "Estonia",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/pk.png" alt="Pakistan"></picture> `,
    a: "Colombia", 
    b: "Syria",
    c: "Pakistan",
    d: "Senegal",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/vn.png" alt="Vietnam"></picture> `,
    a: "Rwanda", 
    b: "HongKong",
    c: "Togo",
    d: "Vietnam",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ir.png" alt="Iran"></picture> `,
    a: "Iran", 
    b: "Laos",
    c: "Albania",
    d: "Bulgaria",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/my.png" alt="Malaysia"></picture> `,
    a: "French Polynesia", 
    b: "Malaysia",
    c: "Luxembourg",
    d: "Costa Rica",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/np.png" alt="Nepal"></picture> `,
    a: "Burkina Faso", 
    b: "Uruguay",
    c: "Nepal",
    d: "Lesotho",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/kh.png" alt="Cambodia"></picture> `,
    a: "Cambodia",
    b: "Chad",
    c: "Mauritana", 
    d: "Suriname", 
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/lk.png" alt="Sri Lanka"></picture> `,
    a: "Tonga", 
    b: "Guyana",
    c: "Sri Lanka",
    d: "Seychelles",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/kz.png" alt="Kazakhstan"></picture> `,
    a: "Armenia", 
    b: "Mongolia",
    c: "Burnei",
    d: "Kazakhstan",
    answer: 'd',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/jm.png" alt="Jamaica"></picture> `,
    a: "Jamaica", 
    b: "Colombia",
    c: "Malawi",
    d: "Tanzania",
    answer: 'a',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/cu.png" alt="Cuba"></picture> `,
    a: "Uganda", 
    b: "Cuba",
    c: "Mozambique",
    d: "Belize",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/is.png" alt="Iceland"></picture> `,
    a: "Norway", 
    b: "Iceland",
    c: "Georgia",
    d: "Montenegro",
    answer: 'b',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ro.png" alt="Romania"></picture> `,
    a: "Moldova", 
    b: "Colombia",
    c: "Romania",
    d: "Lithuania",
    answer: 'c',
  },
  {
    question: ` <picture><img type="image/png" src="./assets/image/quiz/cz.png" alt="Czechia"></picture> `,
    a: "Slovakia", 
    b: "Panama",
    c: "North Korea",
    d: "Czechia",
    answer: 'd',
  }
]