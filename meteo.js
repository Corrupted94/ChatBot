const axios = require ('axios');

fs = require ('fs');
const openweatherKEY = "6e687168a3964c4ef8fd164ded0b8620";



module.exports = {


	getWeather : function (callback, city) {
		
		var cityList;
	
		fs.readFile ('./city.list.json', 'utf8', function (err,data) {

		if (err) {
			return console.log(err)
		}

		cityList = JSON.parse (data);

		});




		for (var citydata in cityList)
		{
			if (citydata["name"].toLowerCase() == city.toLowerCase())
			{
				axios.get("http://api.openweathermap.org/data/2.5/forecast?id="+ citydata["id"] +"&APPID={"+openweatherKEY+"} ").then (function (rep){ callback( "Temperature demain à " + rep.data[0].name + " : " + rep.data[0].main[0].temp );} ).catch (console.error);
			
			}

			else 
			{

				//error
			}
		

		}
	}
	

};
