define(["jquery"], function($) {

	return {
	 	getJson: function(callBack){
			$.ajax({url: "data/dog.json"}).done(callBack);
			// callBack(listOfSongs);

	 	}

	};

});