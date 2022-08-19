var readlineSync = require('readline-sync');
var score = 0;

console.log("Do you know me? Quiz Begins! \n");

var quiz = [
  {
    name: "Q1. What's my full name? ",
    answer: "divik juneja",
  },

  {
    name: "Q2. What's my age? ",
    answer: "22",
  },

  {
    name: "Q3. Where do I live? ",
    answer: "delhi",
  },

  {
    name: "Q4. What's my favorite color? ",
    answer: "black",
  },

  {
    name: "Q5. What's my nickname? ",
    answer: "divi",
  }
];

var highScore = [
  {
    name: "Manav",
    score: "2",
  },

  {
    name: "Sahil",
    score: "3",
  }
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer) { //The toLowerCase() method converts a string to lowercase letters.
    //The toLowerCase() method does not change the original string.
    console.log("You are right! \n");
    score = score + 1;
  }
  else {
    console.log("You are wrong! \n");
  }
}

for (var i = 0; i < quiz.length; i++) {
  play(quiz[i].name, quiz[i].answer);
}

console.log("Your final score is: ", score);

for (var i = 0; i < highScore.length; i++) {
  if (score === highScore[i].score || score > highScore[i].score) {
    console.log("You have beaten " + highScore[i].name + "'s score", highScore[i].score);
  }
  else {
    console.log("You failed to beat highest score");
    break;
  }
}