define(["jquery", "cats", "dogs"], 
function($, cats, dogs) { 

var listOfCats = function(catList) { //displaying json file of songs
	console.log("smile");
	count = 0;
	for (var i = 0; i < catList.cat_brands.length; i++){
	  	var catInfo = catList.cat_brands[i];
	  	$("#injectionSpotBrand").append("<p>"  + catInfo.name);

	  	for (var j = 0; j <catInfo.types.length; j++){
			var catTypes = catInfo.types[j];

			for (var k = 0; k <catTypes.volumes.length; k++){
				var catVolumes = catTypes.volumes[k];
				$("#injectionSpotType").append("<div>" + catTypes.type + catVolumes.name + catVolumes.price + "</div>");
				count++
				console.log(count)
			}
		}
  	}

			
	  	
 	
  	

		
};  cats.getJson(listOfCats);

	// var listOfDogs = function(dogList) { //displaying json file of songs
		
	// 		$("#").html(songTemplate(dogList));
		
	// };


// injectionspotbrand
// spottype





});