// Variables!
var timeLeft = $('.quizTimer');
var startCard = $('.quizStartCard');
var questionCard = $('.questionCard');
var image = $('#image');
var questionText = $('.question-text');
var button1 = $('#ansBtn1');
var button2 = $('#ansBtn2');
var button3 = $('#ansBtn3');
var button4 = $('#ansBtn4');
var scoreBox = $('.scores-box');
var answerRsp = $('#answerRsp');
var scoresList = $('#scores-list');
var quizBtn = $('.startBtn');
var startMenu = $('.scoreBtn');
var viewScoresBtn = $('.viewScoreBtn');
var users = [];
var userPoints = 0;
var quizTime = 60;
var questionIndex = 0;

// Quiz question arrays
var quizList = [
  {
    image: "https://media2.giphy.com/media/Lp71UWmAAeJHi/giphy.gif",
    alt: "rafiki-baboon",
    question: "Who presents the newborn lion cub to the Pride Lands?",
    answer1: "Mufasa",
    answer2: "Rafiki",
    answer3: "Timon",
    answer4: "Sarabi",
    correct: "Rafiki",
  },
  {
    image: "https://slm-assets.secondlife.com/assets/13552377/view_large/le_roi_lion_hyene.jpg?1457037952",
    alt: "three-hyenas",
    question: "Which of the names below are not one of the three hyenas?",
    answer1: "Banzai",
    answer2: "Shenzi",
    answer3: "Ed",
    answer4: "Zazu",
    correct: "Zazu",
  },
  {
    image: "https://media.tumblr.com/697931fe9e11ed31e17e4dfa79d94723/tumblr_inline_mi3go4kVjJ1qz4rgp.gif",
    alt: "nala-and-simba",
    question: "Where do Nala and Simba wonder off to as cubs?",
    answer1: "Pride Rock",
    answer2: "The jungle",
    answer3: "Elephant gravyard",
    answer4: "The gorge",
    correct: "Elephant gravyard",
  },
  {
    image: "https://thecelebration.files.wordpress.com/2011/03/lion-king.jpg",
    alt: "mufasa-and-simba",
    question: "Which of these songs is not from the Lion King?",
    answer1: "A Whole New World",
    answer2: "Hakuna Matata",
    answer3: "Circle of Life",
    answer4: "The Lion Sleeps Tonight",
    correct: "A Whole New World",
  },
  {
    image: "https://i.gifer.com/LAz.gif",
    alt: "simba-timon-pumbaa",
    question: "Who did Simba grow up with?",
    answer1: "Timon & Pumbaa",
    answer2: "Mufasa & Sarabi",
    answer3: "Scar",
    answer4: "Sarafina & Nala",
    correct: "Timon & Pumbaa",
  },
  {
    image: "https://i.ytimg.com/vi/Ve1hPeGumV0/hqdefault.jpg",
    alt: "hakuna-matata",
    question: "What does Hakuna Matata mean?",
    answer1: "Love and Peace",
    answer2: "No worries",
    answer3: "Problem free",
    answer4: "Wonderful phrase",
    correct: "No worries",
  },
  {
    image: "https://i.pinimg.com/originals/9d/3f/72/9d3f72b56cb9b95e23d9a992981d77a9.jpg",
    alt: "pumbaa",
    question: "Who tries to eat Pumbaa?",
    answer1: "Simba",
    answer2: "Mufasa",
    answer3: "Nala",
    answer4: "Scar",
    correct: "Nala",
  },
  {
    image: "https://lumiere-a.akamaihd.net/v1/images/character_thelionking_zazu_baad49f3.jpeg",
    alt: "zazu",
    question: "What is Zazu's official title?",
    answer1: "Butler",
    answer2: "Majordomo",
    answer3: "Secretary",
    answer4: "Steward",
    correct: "Majordomo",
  },
  {
    image: "https://ohmy.disney.com/wp-content/uploads/2015/09/Simba-and-Rafiki-hugging-in-The-Lion-King.gif",
    alt: "rafiki-and-simba",
    question: "What does Rafiki say to Simba in the final scene?",
    answer1: "Long live the king",
    answer2: "It is time",
    answer3: "Remember who you are",
    answer4: "Change is good",
    correct: "It is time",
  },

];

// Hiding elements.
questionCard.css('display', 'none');
scoreBox.css('display', 'none');


//Question card context updater.
var questions = quizList[questionIndex];

function showQuestions() {
  image.attr('src', quizList[questionIndex].image);
  image.attr('alt', quizList[questionIndex].alt);
  questionText.text(quizList[questionIndex].question);
  button1.text(quizList[questionIndex].answer1);
  button2.text(quizList[questionIndex].answer2);
  button3.text(quizList[questionIndex].answer3);
  button4.text(quizList[questionIndex].answer4);
};

// Start button, when clicked timer goe off.
quizBtn.on('click', function () {
  startCard.css('display', 'none');
  questionCard.css('display', 'block');
  showQuestions();

  var quizClock = setInterval(function () {
    quizTime--;
    timeLeft.text("Time: " + quizTime + " seconds remaining.");
    if (quizTime <= 0 || quizList.length === questionIndex) {
      clearInterval(quizClock);
      timeLeft.text("Fin!");
      scoreBox.css('display', 'block');
      questionCard.css('display', 'none');
      endGame();

      if (quizTime < 0) {
        quizTime = 0
      }
    }
  }, 1000)
});

//Reset all variables
function resetVar() {
  userPoints = 0;
  quizTime = 60;
  questionIndex = 0;
}

// Answer Buttons right or wrong.
button1.on('click', function () {
  if (quizList[questionIndex].answer1 === quizList[questionIndex].correct) {
    questionIndex++;
    userPoints += 10;
    showQuestions();
    answerRsp.text("You got it correct!");
  } else {
    questionIndex++;
    showQuestions();
    answerRsp.text("You are incorrect!");
    quizTime -= 5;
  }
});
button2.on('click', function () {
  if (quizList[questionIndex].answer2 === quizList[questionIndex].correct) {
    questionIndex++;
    userPoints += 10;
    showQuestions();
    answerRsp.text("You got it correct!");
  } else {
    questionIndex++;
    showQuestions();
    answerRsp.text("You are incorrect!");
    quizTime -= 5;
  }
});
button3.on('click', function () {
  if (quizList[questionIndex].answer3 === quizList[questionIndex].correct) {
    questionIndex++;
    userPoints += 10;
    showQuestions();
    answerRsp.text("You got it correct!");
  } else {
    questionIndex++;
    showQuestions();
    answerRsp.text("You are incorrect!");
    quizTime -= 5;
  }
});
button4.on('click', function () {
  if (quizList[questionIndex].answer4 === quizList[questionIndex].correct) {
    questionIndex++;
    userPoints += 10;
    showQuestions();
    answerRsp.text("You got it correct!");
  } else {
    questionIndex++;
    showQuestions();
    answerRsp.text("You are incorrect!");
    quizTime -= 5;
  }
});

// Final score menu, return to start menu
startMenu.on('click', function () {
  scoreBox.css('display', 'none');
  startCard.css('display', 'block');
  resetVar();
});

// View high scores button  
viewScoresBtn.on('click', function () {
  startCard.css('display', 'none');
  scoreBox.css('display', 'block');
  timeLeft.text("");
});

// End game function.
function endGame() {
  $('#userSubmit').on('click', function () {
    var userName = $('#userName').val();
    users.push(userName)
    var userInits = users
    var userObj = {
      userInits: userInits,
      userScore: userPoints + quizTime,
    }
    storedScores.push(userObj);
    localStorage.setItem('scores', JSON.stringify(storedScores));
  })
}

// Local Storage information

var storedScores = localStorage.getItem('scores')
if (storedScores) {
  storedScores = JSON.parse(storedScores);
} else {
  storedScores = [];
}

storedScores.forEach(function (score) {
  scoresList.append(`<li>${score.userInits}:  ${score.userScore} points`)

})