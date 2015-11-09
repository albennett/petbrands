define(["jquery", "cats", "dogs"], 
function($, cats, dogs) { 

var listOfCats = function(catList) { //displaying json file of songs
	console.log("smile");
	count = 0;
	for (var i = 0; i < catList.cat_brands.length; i++){
	  	var catInfo = catList.cat_brands[i];
	  	
	  		var catVolumesString = "";
	  	for (var j = 0; j <catInfo.types.length; j++){
			var catTypes = catInfo.types[j];

			for (var k = 0; k <catTypes.volumes.length; k++){
				var catVolumes = catTypes.volumes[k];
				// $("#injectionSpotType").append("<div>" + catTypes.type + catVolumes.name + catVolumes.price + "</div>");
				catVolumesString += (catTypes.type + catVolumes.name + catVolumes.price)
				console.log("catVolumesString", catVolumesString)
				count++
				console.log(count)
			}
		}
		$("#injectionSpotBrand").append("<tr><td>" + catInfo.name + "</td>" + "<td>" + catVolumesString + "</td></tr>");
  	}		
};
  cats.getJson(listOfCats);




var listOfDogs = function(dogList) { //displaying json file of songs
	console.log("smile");
	count = 0;
	for (var i = 0; i < dogList.dog_brands.length; i++){
	  	var dogInfo = dogList.dog_brands[i];
	  	
	  		var dogVolumesString = "";
	  	for (var j = 0; j <dogInfo.types.length; j++){
			var dogTypes = dogInfo.types[j];

			for (var k = 0; k <dogTypes.volumes.length; k++){
				var dogVolumes = dogTypes.volumes[k];
				// $("#injectionSpotType").append("<div>" + catTypes.type + catVolumes.name + catVolumes.price + "</div>");
				dogVolumesString += (dogTypes.type + dogVolumes.name + dogVolumes.price)
				console.log("dogVolumesString", dogVolumesString)
				count++
				console.log(count)
			}
		}
		$("#injectionSpotBrand").append("<tr><td>" + dogInfo.name + "</td>" + "<td>" + dogVolumesString + "</td></tr>");
  	}
};

  dogs.getJson(listOfDogs);


});