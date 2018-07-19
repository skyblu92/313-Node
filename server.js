var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require('body-parser');

var controller = require("./controllers/recipeController.js");

const { Pool } = require("pg");

var connectionString = process.env.DATABASE_URL || "postgres://nodeuser:skater@localhost:5432/skateboarding";

const pool = new Pool({connectionString: connectionString});

app.set("port", process.env.PORT || 5000)
  .get("/recipepull", controller.handleRecipeRequest)
  .get("/getRecipeInfo", getRecipeInfo)
  .post('/sendRec', sendRec)
  .use(express.static(__dirname + "/public"))
  .use(bodyParser.toString)
  .listen(app.get("port"), function() {
  	console.log("Listening on port", app.get("port"));
  });

  var recResults;
  var username;

request('http://food2fork.com/api/search?key=61a94da8e2726b8b65a1cb92add68d50', function (error, response, body) {
  if (!error && response.statusCode == 200) {

  this.callback(null, body);
    //console.dir(JSON.parse(body));
    recResults = body;
  }
});

function getRecipeInfo(request, response) {
	
	var result = recResults;
  response.json(result); 
}

function sendRec(request, response) {
  var thing = request.body.params;
  console.log(thing);
}





/*var express = require("express");
var app = express();

const { Pool } = require("pg");

var connectionString = process.env.DATABASE_URL || "postgres://nodeuser:skater@localhost:5432/skateboarding";

const pool = new Pool({connectionString: connectionString});

app.get("/shoes", handleShoeRequest)
  .set("port", process.env.PORT || 5000)
  .listen(app.get("port"), function() {
  	console.log("Listening on port", app.get("port"));
  });

function handleShoeRequest(req, res) {
	pool.query("SELECT * FROM shoe", function(err, result) {

		if (err) {
			throw err;
		}

		console.log("Back from db with result: ", result);
		res.json(result.rows);	

	});


}*/