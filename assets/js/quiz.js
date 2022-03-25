let randomQuestion, currentQuestionIndex, availableQuestions;
let currentScore = parseInt(document.getElementById("score").innerText);
let next = document.getElementById('next-btn');
let btnDiv = document.getElementById('btn-div');
let nextDiv = document.getElementById('next-div');
let lvlBtn = document.getElementById('level-btn');

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
next.addEventListener('click', function(event) {

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



function nextLvl () {
  if (currentScore >= 700) {
    btnDiv.style.display = 'none';
    next.style.display = 'none';
    nextDiv.classList.remove('stack');
    lvlBtn.classList.remove('stack');
  } else {
    window.location = 'end.html';
  }
}
  
var count = 60;
var time = setInterval(countdownTimer, 1000);

function countdownTimer() {
    document.getElementById('timer').innerHTML = 'Seconds left:' +count;
    count--;
    if (count == -1) {
        clearInterval(time);
        // alert("Time out!! :(");
    }
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
    question: ` <picture><img type="image/png" src="./assets/image/quiz/ch.png" alt="Switzerland"></picture> `,
    a: "United Kingdom", 
    b: "Aruba",
    c: "Switzerland",
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