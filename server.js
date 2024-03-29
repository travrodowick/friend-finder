// Dependencies
// ===========================================================
var express = require("express");

// Initialize Express
var app = express();

var PORT = process.env.PORT || 3000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Routes
//==================================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
