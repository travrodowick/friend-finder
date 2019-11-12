var surveyQuestions = require("../questionList/surveyQuestions");

//============================FUNCTIONS=========================================\

function renderQuestions() {
  console.log("what the fuck?");
  surveyQuestions.forEach(function() {
    $("#questions").append("<br>" + surveyQuestions[i].question + "<br>");
    $("#questions").append(
      `<br>` +
        `<input type='radio' name= 'answers-1' value='answer-1'><label for= 'strongly disagree'>strongly disagree</label>`
    );
    $("#questions").append(
      `<br>` +
        `<input type='radio' name= 'answers-2' value='answer-2'><label for= 'disagree'>disagree</label>`
    );
    $("#questions").append(
      `<br>` +
        `<input type='radio' name= 'answers-3' value='answer-3'><label for= 'indifferent'>indifferent</label>`
    );
    $("#questions").append(
      `<br>` +
        `<input type='radio' name= 'answers-4' value='answer-4'><label for= 'agree'>agree</label>`
    );
    $("#questions").append(
      `<br>` +
        `<input type='radio' name= 'answers-5' value='answer-5'><label for= 'strongly agree'>strongly disagree</label>`
    );
  });

  //render submit form button
  function submitButton() {
    var submitButton = $(
      `<button type= "button" id="submit-bttn">SUBMIT</button>`
    );
    document.getElementById("#submit").append(submitButton);
  }
}

document.getElementById("#submit").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newFriend = {
    friendName: $("#name")
      .val()
      .trim()
    // friendScore:  $("#answer-1").val
  };

  console.log(newFriend);

  // This line is the magic. It"s very similar to the standard ajax function we used.
  // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
  // depending on if a tables is available or not.

  $.post("/api/friends", newFriend, function(data) {
    // If a table is available... tell user they are booked.
    if (data) {
      alert("Yay! You are officially findable for Friends!");
    }
    // If something happened... tell user they on the waiting list.
    else {
      alert("Sorry you are on the wait list....");
    }
    // Clear the form when submitting
    $("#name").val("");
  });
});

// module.exports = function renderQuestions() {
//   console.log("what the fuck?");
//   surveyQuestions.forEach(function() {
//     $("#questions").append("<br>" + surveyQuestions[i].question + "<br>");
//     $("#questions").append(
//       `<br>` +
//         `<input type='radio' name= 'answers-1' value='answer-1'><label for= 'strongly disagree'>strongly disagree</label>`
//     );
//     $("#questions").append(
//       `<br>` +
//         `<input type='radio' name= 'answers-2' value='answer-2'><label for= 'disagree'>disagree</label>`
//     );
//     $("#questions").append(
//       `<br>` +
//         `<input type='radio' name= 'answers-3' value='answer-3'><label for= 'indifferent'>indifferent</label>`
//     );
//     $("#questions").append(
//       `<br>` +
//         `<input type='radio' name= 'answers-4' value='answer-4'><label for= 'agree'>agree</label>`
//     );
//     $("#questions").append(
//       `<br>` +
//         `<input type='radio' name= 'answers-5' value='answer-5'><label for= 'strongly agree'>strongly disagree</label>`
//     );
//   });

//   //render submit form button
//   submitButton();
//   function submitButton() {
//     var submitButton = $(
//       `<button type= "button" id="submit-bttn">SUBMIT</button>`
//     );
//     document.getElementById("#submit").append(submitButton);
//   }
// };

// document.getElementById("#submit").on("click", function(event) {
//   event.preventDefault();

//   // Here we grab the form elements
//   var newFriend = {
//     friendName: $("name")
//       .val()
//       .trim()
//   };

//   console.log(newFriend);

//   // This line is the magic. It"s very similar to the standard ajax function we used.
//   // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
//   // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
//   // depending on if a tables is available or not.

//   $.post("/api/friends", newFriend, function(data) {
//     // If a table is available... tell user they are booked.
//     if (data) {
//       alert("Yay! You are officially findable for Friends!");
//     }
//     // If something happened... tell user they on the waiting list.
//     else {
//       alert("Sorry you are on the wait list....");
//     }
//     // Clear the form when submitting
//     $("#name").val("");
//   });
// });

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
// };
