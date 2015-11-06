define(["jquery"], function($) {

	return {
	 	getJson: function(callBack){
			$.ajax({url: "data/cat.json"}).done(callBack);
			// callBack(listOfSongs);

	 	}

	};

});