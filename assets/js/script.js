const start = document.getElementById('start');
const username = document.getElementById('user');



//DOMContentLoaded then start page interaction
document.addEventListener("DOMContentLoaded", function() {
  
    //user.addEventListener(...);
    start.addEventListener('click', function () {
        console.log("Game started"); })
})

function startGame(){
    document.getElementsByClassName('hidden').style.color = "black";
    

    let nextQuestion = easyQuestions[0].value;
    let flag = getElementsByClassName('flag');

    flag.textContent = nextQuestion;


}

function quizQuestions() {

}

function checkAnswer() {

}

function calculateScore() {

}

function nextQuestion() {

}

function nextLevel() {

}

function gameOver() {

}

function highscore() {

}

function playAgain() {

}
