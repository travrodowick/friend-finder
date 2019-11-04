$(document).ready(function() {


  var surveyQuestions = require("../questionList/surveyQuestions");

  //============================FUNCTIONS=========================================\
  function renderQuestions() {
    surveyQuestions.forEach( function () {
      $("#questions").append("<br>" + surveyQuestions[i].question + "<br>");
      $("#questions").append(`<br>` + `<input type='radio' name= 'answers-1' value='answer-1'><label for= 'strongly disagree'>strongly disagree</label>`);
      $("#questions").append(`<br>` + `<input type='radio' name= 'answers-2' value='answer-2'><label for= 'disagree'>disagree</label>`);
      $("#questions").append(`<br>` + `<input type='radio' name= 'answers-3' value='answer-3'><label for= 'indifferent'>indifferent</label>`);
      $("#questions").append(`<br>` + `<input type='radio' name= 'answers-4' value='answer-4'><label for= 'agree'>agree</label>`);
      $("#questions").append(`<br>` + `<input type='radio' name= 'answers-5' value='answer-5'><label for= 'strongly agree'>strongly disagree</label>`)
    })
      


  //render submit form button
  submitButton()
  function submitButton() {
    var submitButton = $(
      `<button type= "button" id="submit-bttn">SUBMIT</button>`
    );
    $(".submit").append(submitButton);
  }
  }
  //-------TIMER----------
  //initiate contdown and display message on timeout and remove quiz
  // function countDown() {
  //   timer = setInterval(function() {
  //     timeLeft--;
  //     var timeString = timeLeft.toString();
  //     var formattedtime = moment(timeLeft).format("HH:mm:ss");
  //     console.log(formattedtime);
  //     $("#timer").text(formattedtime);
  //     if (timeLeft == -1) {
  //       $("#timer").html(
  //         "gotta be faster than that! 0/0:  you get an F for speed!"
  //       );
  //       $("#quiz, #submit").css("display", "none");
  //     }
  //   }, 1000);
  // }

  //to remove starting directions and game start button
  // function gameStart() {
  //   $("#directions, #start").css("display", "none");
  // }

  // //========ON CLICK START GAME======
  // $("#start").on("click", function() {
  //   gameStart();
  //   countDown();
  //   renderQuestions();
  //   submitButton();
  // });

  // // reset function
  // function gameReset() {
  //   gameStart();
  //   countDown();
  //   renderQuestions();
  //   score = 0;
  //   timeLeft = 600;
  //   $("#reset").empty();
  //   $("#timer").css("display", "");
  // }

  //==========on click submit questions and check against answers===============
  // $("#submit").on("click", function() {
    //hide submit button
  //   $("#timer").css("display", "none");
  //   $("#submit").css("display", "none");
  //   //reveal reset button
  //   var resetButton = $(
  //     `<button type= "button" id="reset-bttn">RESET</button>`
  //   );
  //   $("#reset").append(resetButton);
  //   //stop timer
  //   timeLeft = 0;
  //   clearInterval(timer);
  //   var score = 0;
  //   //check answers vs questions------------
  //   for (var i = 0; i < questions.length; i++) {
  //     var radios = document.getElementsByName("question-" + i);
  //     for (var checked of radios) {
  //       if (checked.checked) {
  //         if (checked.value === questions[i].correct) score++;
  //       }
  //     }
  //   }
  //   $("#quiz").text("Score:  " + score++ + " out of 7");
  //   // };
  // });
  //reset button------------

//   $("#reset").on("click", function() {
//     gameReset();
//     $("#submit").css("display", "");
//   });
// });
