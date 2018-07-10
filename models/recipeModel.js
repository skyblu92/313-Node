const {Pool} = require("pg");

function getRecipeList(searchQ, callback) {

    if (searchQ) {
		console.log("Getting recipes for query:", searchQ);
	} else {
		// else get just for recipe
		console.log("Getting front page of recipes");
	}

	// In a minute, we're going to do DB stuff here...
	var result = request(url, {json: true}, (err, res, body) => {
		if (err) { return console.log(err); }
	});

	callback(null, result);
}

module.exports = {
	getRecipeList: getRecipeList
};

// request('http://food2fork.com/api/search?key=61a94da8e2726b8b65a1cb92add68d50', { json: true }, (err, res, body) => {
// 	if (err) { return console.log(err); }
//   });