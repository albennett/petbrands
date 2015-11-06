define(["jquery", "cats", "dogs"], 
function($, cats, dogs) { 





var listOfCats = function(catList) { //displaying json file of songs
	
		
	for (var i = 0; i <catList.cat_brands.length; i++){
	  	var catInfo = catList.cat_brands[i];
	  	$("#injectionSpotBrand").html("<p>"  + catInfo.name);
 	
  }

      for (var i = 0; i <catList.cat_brands.length; i++){
	  	var catInfo = catList.cat_brands[i];

	  		for (var i = 0; i <catList.cat_brands.types.length; i++){
			var catTypes = catList.cat_brands.types[i];

				for (var i = 0; i <catList.cat_brands.types.volumes.length; i++){
					var catVolumes = catList.cat_brands.types.volumes[i];
				}
	}
	  	$("#injectionSpotType").html("<div>"  + catInfo.types + catInfo.types + catInfo.types.type + catInfo.types.volumes
	  	+ catInfo.types.volumes.name + catInfo.types.volume.price + "</div>");
 	
  }
		
	};

	var listOfDogs = function(dogList) { //displaying json file of songs
		
			$("#").html(songTemplate(dogList));
		
	};


injectionspotbrand
spottype





});