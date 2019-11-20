var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    console.log("friends:  ");
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests
    // req.body is available since we're using the body parsing middleware
    //=============================================================
    var newFriend = req.body;
    console.log("new friend:  ", newFriend);
    var BFF = new Object();
    var friendMatch;
    //===========================
    //get the difference as a positive number
    function checkFriendsForMatch() {
      // var BFF = new Object();
      function difference(a, b) {
        return Math.abs(a - b);
      }

      var friendScoreAsNumber = Number(newFriend.friendScore);
      var friendScoreDifference = difference(
        friendScoreAsNumber,
        friends[0].friendScore
      );

      friendMatch = friends[friends.length - 1];

      if (friendScoreDifference === 0) {
        console.log("exact match!");
      } else {
        console.log("we got in");
        let tempMatch = friendScoreDifference;

        //loops through friends array --- if the loop gets to the end just break out but if the current friend in the loop is lower than the previously set best match -- the best match is reset to the current friend and the loop is run again and again until if reaches the end.
        () => {
          for (var i = 0; i < friends.length + 1; i++) {
            console.log("what the heck?");
            if (
              // (friends[i] === friends.length) {
              //   break;
              // } else if
              friends[i].friendScore < tempMatch
            ) {
              tempMatch = friends[i].friendScore;
              friendMatch = friends[i];
              console.log("loop friend match:  ", friendMatch.friendName);

              return friendMatch;
            }
          }
        };
      }
      console.log("outside loop friendmatch", friendMatch);

      BFF.friendName = friendMatch.friendName;
      BFF.friendEmail = friendMatch.friendEmail;

      return BFF;
    }

    checkFriendsForMatch();
    console.log("BFF:  ", BFF);
    friends.push(newFriend);
    console.log("friends:  ", friends);
    res.json(BFF);
  });

  // ---------------------------------------------------------------------------
};
