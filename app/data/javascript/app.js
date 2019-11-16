// var surveyQuestions = require("../questionList/surveyQuestions");

//============================FUNCTIONS=========================================\

// function renderQuestions() {
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

//grabbing the values of the selected answers to the questions and adding them up to make a totalFriendScore
function grabRadioAnswerValues() {
  var allScores = [];
  var radios = $("input");
  var value;

  //looping through all radio questions to see if theyre checked and then getting the value of the checked answers and pushing them to an array
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === "radio" && radios[i].checked) {
      // get value, set checked flag or do whatever you need to
      value = Number(radios[i].value);
      console.log(radios[i].name, "value:  ", value);
      allScores.push(value);
    }
  }
  // setting the new friends score to 0
  totalFriendScore = 0;

  //looping through all scores and adding them together to make a total score
  for (var i = 0; i < allScores.length; i++) {
    totalFriendScore += allScores[i];
  }
  console.log("totalFriendScore:  ", totalFriendScore);
}

//uncheck radios and clear form-----------
resetSurvey = () => {
  var radios = $("input");
  //loop through radios and set checked to false
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === "radio" && radios[i].checked) {
      radios[i].checked = false;
    }
  }
  //clear form elements
  $("#friendName").val("");
  $("#friendEmail").val("");
};

//SUBMIT BUTTON CLICK LISTENER
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  //getting radio inputs
  grabRadioAnswerValues();

  // Here we grab the form elements and make a newFriend object so we can later send it to our api
  var newFriend = {
    friendName: $("#friendName")
      .val()
      .trim(),
    friendEmail: $("#friendEmail")
      .val()
      .trim(),
    friendScore: totalFriendScore
  };

  console.log("newFriend goes here:  ", newFriend);

  //This line is the magic. It"s very similar to the standard ajax function we used.
  // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  // The callback is the response of the server.

  $.post("/api/friends", newFriend, function(data) {
    // If a table is available... tell user they are booked.
    if (data) {
      alert("Yay! You are officially findable for Friends!");
    }
    // If something happened... tell user they on the waiting list.
    else {
      alert("Sorry....maybe no friends right now....");
    }
    // Clear the form when submitting
    resetSurvey();
  });
});

//reset button------------

$("#reset-btn").on("click", function() {
  resetSurvey();
});
