var model = require("../models/recipeModel.js");

function handleRecipeRequest(req, res) {
	var searchQ = req.query.searchQ;
	console.log("Got a request for recipe:", searchQ);
	// We could check here a little better...

	var result = model.getRecipeList(searchQ, function(error, result) {
		if (error) {
			console.log("An error occured...");
			res.status(500).json({success: false});
		} else {
			res.json(result);
		}
	});
}


module.exports = {
	handleRecipeRequest: handleRecipeRequest
};