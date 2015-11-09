define(["jquery", "cats", "dogs", "hbs"], 
function($, cats, dogs, hbs) { 

var listOfCats = function(catList) { //displaying json file of songs
	require(['hbs!../templates/cat'], function (template){
		$("#cattable").html(template(catList));	
	
	});  cats.getJson(listOfCats);
};


var listOfDogs = function(dogList) { //displaying json file of songs
	require(['hbs!../templates/dog'], function (template){
		$("#dogtable").html(template(dogList));	
	
	});  dogs.getJson(listOfDogs);
};



});