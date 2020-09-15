
var timeLeft = document.querySelector(".quizTimer");
var startCard = document.querySelector(".quizStartCard");
var cardOne = document.querySelector(".questionCard1");
var cardTwo = document.querySelector(".questionCard2");
var cardThree = document.querySelector(".questionCard3");
var cardFour = document.querySelector(".questionCard4");

var answer1 = document.querySelector("#ansBtn1");
var answer2 = document.querySelector("#ansBtn2");
var answer3 = document.querySelector("#ansBtn3");
var answer4 = document.querySelector("#ansBtn4");

var quizBtn = document.querySelector(".startBtn");
var quizTime = 60;

//Question cards hidden.
cardOne.style.display = "none";
cardTwo.style.display = "none";
cardThree.style.display = "none";
cardFour.style.display = "none";

// Start button, when clicked timer goes off.
quizBtn.addEventListener("click", function(){
    startCard.style.display = "none";
    cardOne.style.display = "block";
    startTimer();

});

function question1(){
  answer2.addEventListener("click", function(){
    cardOne.style.display = "none";
    cardTwo.style.display = "block";
    
  });
};
 
function question2(){
  answer2.addEventListener("click", function(){
    cardTwo.style.display = "none";
    cardThree.style.display = "block";
  });
};

function question3(){
  answer1.addEventListener("click", function(){
    cardThree.style.display = "none";
    cardFour.style.display = "block";

  });
};

// Timer for quiz.
function startTimer(){

var quizClock = setInterval(function(){
    quizTime--;
    timeLeft.textContent = "Time: " + quizTime + " seconds."
    if(quizTime <= 0){
        clearInterval(quizClock)
        timeLeft.textContent = "Finished!"

    }

},1000)

};

function loseTime(){
    quizTime = quizTime - 5;

};
