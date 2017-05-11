const axios = require ('axios');

fs = require ('fs');

var content;

fs.readFile ('./city.list.json', 'utf8', function (err,data) {

	if (err) {
		return console.log(err)
	}

	
	content = JSON.parse (data);

});



module.exports = {
	
	getWeather : function (callback, city) {
		
	

	}
	

};
