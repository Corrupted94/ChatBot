const axios = require ('axios');

fs = require ('fs');
const openweatherKEY = "6e687168a3964c4ef8fd164ded0b8620";



module.exports = {


	getWeather : function (callback, city) {
		

		fs.readFile ('./city.list.json', 'utf8', function (err,data) {

			if (err) 
			{
				return console.log(err)
			}

			cityList = JSON.parse (data);


			/***********************************/
		

			for (var i = 0; i< cityList.length; i++)
			{
		
				if (cityList[i]["name"].toLowerCase() == city.toLowerCase())
				{
					console.log (cityList[i]["name"] + " " + cityList[i]["country"]);
			
					var id = cityList[i]["id"];

					axios.get("http://api.openweathermap.org/data/2.5/weather?id="+ id +"&APPID="+openweatherKEY + "&units=metric" ).then (function (rep){ 
					
					console.log ("Température aujourd'hui à " + rep.data.name + " : " + rep.data.main.temp+ "°C"); 
			
		

					} ).catch (console.error);
					break;
				}

				else 
				{
			
					//error
				}
		

			}

	

		});







	}
	

};
