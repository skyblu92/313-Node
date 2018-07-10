var express = require("express");
var app = express();
var request = require("request");

var controller = require("./controllers/recipeController.js");

app.set("port", process.env.PORT || 5000)
  .get("/recipepull", controller.handleRecipeRequest)
  .use(express.static(__dirname + "/public"))
  .listen(app.get("port"), function() {
  	console.log("Listening on port", app.get("port"));
  })

