var obj;

function getRecipeInfo() {
	$.get("/getRecipeInfo", function(result) {
        
        obj = JSON.parse(result);
        for (var i = 0; i < 12; i++) {
            $("#food" + (i)).append(
                '<h2>' + obj.recipes[i].title +
                '</h2><img src="' + obj.recipes[i].image_url +
                '"></img>'
            
            
            
            
            
            );
           
           
           
           
            // console.log(obj.recipes[i].title);
        }

	}).fail(function(result) {
		$("#status").text("Could not get server time.");
	});
}

function sendRec(num) {
    window.open(obj.recipes[num].source_url);
    var params = {num: num};
    $.post("/sendRec", params, function(thing) {
        $("#food" + num).append('<p>Sent!</p>');
});
}

