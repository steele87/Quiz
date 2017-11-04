
var questions = [];

questions[0] = {
    question: "What is the capital of England?",
    choices: ["Newcastle", "Manchester", "London"],
    correctAnswer: 2
};
questions[1] = {
    question: "Which team has won the Premier League the most times?",
    choices: ["Liverpool", "Manchester United", "Arsenal"],
    correctAnswer: 1
};
questions[2] = {
    question: "Which month usually has the longest day of the year?",
    choices: ["May", "June", "July"],
    correctAnswer: 1
};
questions[3] = {
    question: "Which animal can't jump?",
    choices: ["Cow", "Kangaroo", "Cricket"],
    correctAnswer: 0
};
questions[4] = {
    question: "Which animal is the largest?",
    choices: ["Frog", "Lion", "Elephant"],
    correctAnswer: 2
};
questions[5] = {
    question: "Which food is Italian?",
    choices: ["Sweet and Sour", "Spaghetti", "Frog's legs"],
    correctAnswer: 1
};
questions[6] = {
    question: "Who scored a hat-trick for England in the 1966 World Cup Final?",
    choices: ["Bobby Charlton", "Jimmy Greaves", "Geoff Hurst"],
    correctAnswer: 2
};
questions[7] = {
    question: "In American currency 10 cents make a what?",
    choices: ["Dime", "Wispa", "Worthers Original"],
    correctAnswer: 0
};
questions[8] = {
    question: "Which sign of the Zodiac is represented by the Scales?",
    choices: ["Libra", "Gemini", "Leo"],
    correctAnswer: 0
};
questions[9] = {
    question: "What instrument has been nicknamed the 'Mississippi Saxaphone'?",
    choices: ["Flute", "Harmonica", "Recorder"],
    correctAnswer: 1
};
questions[10] = {
    question: "What is the capital of Ethiopia?",
    choices: ["Addis Ababa", "Lagos", "Djibouti"],
    correctAnswer: 0
};


document.getElementById("question").textContent = questions[0].question;

document.getElementById("choice0").textContent = questions[0].choices[0];

document.getElementById("choice1").textContent = questions[0].choices[1];

document.getElementById("choice2").textContent = questions[0].choices[2];

$(document).ready(function(){
    $("#ans0").click(function(){
        $("#div2").hide();
        $("#div3").hide();
    });
});

$(document).ready(function(){
    $("#ans1").click(function(){
        $("#div1").hide();
        $("#div3").hide();
    });
});

$(document).ready(function(){
    $("#ans2").click(function(){
        $("#div1").hide();
        $("#div2").hide();
    });
});


var userScore = 0;


var questionNum = 0;


  $("#next").click(function() {
    $("#div1").show();
    $("#div2").show();
    $("#div3").show();
   

  if($("form input[name=answer]:checked").val() == questions[questionNum].correctAnswer) {
    userScore++;

   
  }
  

    if (questionNum == (questions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
      
    document.getElementById("question").textContent ="Your score is " + userScore + " out of 11!";
    }
  

    questionNum++;
  

    document.getElementById("question").textContent = questions[questionNum].question;

    document.getElementById("choice0").textContent = questions[questionNum].choices[0];

    document.getElementById("choice1").textContent = questions[questionNum].choices[1];

    document.getElementById("choice2").textContent = questions[questionNum].choices[2];
	});