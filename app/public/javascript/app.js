$(document).ready(function() {
  //========================================GLOBAL VARIABLES=====================
  var score = 0;
  var timeLeft = 10;
  var newQuestion = "";
  var choices;
  var timer;

  //objects with keys as answers
  var questions = [
    {
      question:
        "#1:  on a scale of 1-5 -- 1 being no moon landing-- 5 being im on the moon right now --- do you think we have landed on the moon? ",
      imgSrc: "",
      answers: ["1", "2", "3", "4", "5"],
      correct: "3"
    },
    {
      question:
        "#2:  how any times have crewed space shuttles landed on the moon?",
      imgSrc: "",
      answers: [
        "never. unless you count in Hollywood",
        "1 time",
        "2 times",
        "6 times",
        "the earth is flat"
      ],
      correct: "6 times"
    },
    {
      question: "#3:  what nation made the first object to touch the moon?",
      imgSrc: "",
      answers: ["USA! USA! USA!", "Soviet Union", "North Korea", "Kyrgyzstan"],
      correct: "Soviet Union"
    },
    {
      question:
        "#4:  whats the name of the of the first person to set foot on the moon?",
      imgSrc: "",
      answers: ["Britney Bitch", "Buzz Aldrin", "Neil Armstrong", "Brad Pitt"],
      correct: "Neil Armstrong"
    },
    {
      question: "#5:  who was president during the first moon landing?",
      imgSrc: "",
      answers: [
        "John F. Kennedy",
        "Lyndon B. Johnson",
        "Richard Nixon",
        "William B. Pitt"
      ],
      correct: "Richard Nixon"
    },
    {
      question:
        "#6:  what Apollo mission made the piloted by Aldrin and Armstrong landed on the moon?",
      imgSrc: "",
      answers: ["Apollo 11", "Apollo 13", "Falcon 9", "Apollo 15"],
      correct: "Apollo 11"
    },
    {
      question: "#7:  what year was the first moon landing?",
      imgSrc: "",
      answers: ["1975", "1966", "1969", "1973"],
      correct: "1969"
    }
  ];

  //============================FUNCTIONS=========================================\
  function renderQuestions() {
    $("#quiz").empty();
    for (var i = 0; i < questions.length; i++) {
      $("#quiz").append("<br>" + questions[i].question + "<br>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        var choices = $(
          `<input type='radio' name= 'question-${i}' value='${questions[i].answers[j]}'><label for= '${questions[i].answers[j]}'>${questions[i].answers[j]}</label>`
        );
        $("#quiz").append(choices);
      }
    }
  }

  //render submit form button
  function submitButton() {
    var submitButton = $(
      `<button type= "button" id="submit-bttn">SUBMIT</button>`
    );
    $("#submit").append(submitButton);
  }

  //-------TIMER----------
  //initiate contdown and display message on timeout and remove quiz
  function countDown() {
    timer = setInterval(function() {
      timeLeft--;
      var timeString = timeLeft.toString();
      var formattedtime = moment(timeLeft).format("HH:mm:ss");
      console.log(formattedtime);
      $("#timer").text(formattedtime);
      if (timeLeft == -1) {
        $("#timer").html(
          "gotta be faster than that! 0/0:  you get an F for speed!"
        );
        $("#quiz, #submit").css("display", "none");
      }
    }, 1000);
  }

  //to remove starting directions and game start button
  function gameStart() {
    $("#directions, #start").css("display", "none");
  }

  //========ON CLICK START GAME======
  $("#start").on("click", function() {
    gameStart();
    countDown();
    renderQuestions();
    submitButton();
  });

  // reset function
  function gameReset() {
    gameStart();
    countDown();
    renderQuestions();
    score = 0;
    timeLeft = 600;
    $("#reset").empty();
    $("#timer").css("display", "");
  }

  //==========on click submit questions and check against answers===============
  $("#submit").on("click", function() {
    //hide submit button
    $("#timer").css("display", "none");
    $("#submit").css("display", "none");
    //reveal reset button
    var resetButton = $(
      `<button type= "button" id="reset-bttn">RESET</button>`
    );
    $("#reset").append(resetButton);
    //stop timer
    timeLeft = 0;
    clearInterval(timer);
    var score = 0;
    //check answers vs questions------------
    for (var i = 0; i < questions.length; i++) {
      var radios = document.getElementsByName("question-" + i);
      for (var checked of radios) {
        if (checked.checked) {
          if (checked.value === questions[i].correct) score++;
        }
      }
    }
    $("#quiz").text("Score:  " + score++ + " out of 7");
    // };
  });
  //reset button------------

  $("#reset").on("click", function() {
    gameReset();
    $("#submit").css("display", "");
  });
});
