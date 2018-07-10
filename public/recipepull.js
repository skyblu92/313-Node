// Using function from: https://stackoverflow.com/a/18324384/1932766
function callAjax(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function foodSearch() {
	console.log("Searching...");

	var searchQ = document.getElementById("txtRecipe").value;

	console.log("Search:", searchQ);

	// TODO: We should check to see if book is empty
	// TODO: We should make sure the text is properly URL encoded
    var url = "/recipepull?searchQ=" + searchQ;
    
    //61a94da8e2726b8b65a1cb92add68d50 ---- KEY FOR

	callAjax(url, handleResultList)

}

function handleResultList(result) {
	console.log("Back from AJAX with result:");
	console.log(result);
}
