define(["jquery", "cats", "dogs"], 
function($, cats, dogs) { 

var listOfCats = function(catList) { //displaying json file of songs
	console.log("smile");

	for (var i = 0; i < catList.cat_brands.length; i++){
	  	var catInfo = catList.cat_brands[i];
	  	$("#injectionSpotBrand").append("<p>"  + catInfo.name);

	  	for (var j = 0; j <catInfo.types.length; j++){
			var catTypes = catInfo.types[j];

			for (var k = 0; k <catTypes.volumes.length; k++){
				var catVolumes = catTypes.volumes[k];
				$("#injectionSpotType").append("<div>" + catTypes.type + catVolumes.name + catVolumes.price + "</div>");
	
			}
		}
  	}
		
};  cats.getJson(listOfCats);

var listOfDogs = function(dogList) { //displaying json file of songs

	for (var i = 0; i < dogList.dog_brands.length; i++){
	  	var dogInfo = dogList.dog_brands[i];
	  	$("#injectionSpotBrand").append("<p>"  + dogInfo.name);

	  	for (var j = 0; j <dogInfo.types.length; j++){
			var dogTypes = dogInfo.types[j];

			for (var k = 0; k <dogTypes.volumes.length; k++){
				var dogVolumes = dogTypes.volumes[k];
				$("#injectionSpotType").append("<div>" + dogTypes.type + dogVolumes.name + dogVolumes.price + "</div>");
			}
		}
  	}
		
};  dogs.getJson(listOfDogs);




});