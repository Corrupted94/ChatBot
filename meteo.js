const axios = require ('axios');

fs = require ('fs');
const openweatherKEY = "6e687168a3964c4ef8fd164ded0b8620";



module.exports = {

/*
	getWeather : function (callback, newCityValue) {
		

		fs.readFile ('./city.list.json', 'utf8', function (err,data) {

			if (err) 
			{
				return console.log(err)
			}

			cityList = JSON.parse (data); 


			
		

			for (var i = 0; i< cityList.length; i++)
			{
		
				if (cityList[i]["name"].toLowerCase() == newCityValue.toLowerCase())
				{
					console.log (cityList[i]["name"] + " " + cityList[i]["country"]);
			
					var id = cityList[i]["id"];

					axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?id="+ id +"&APPID="+openweatherKEY + "&units=metric" ).then (function (rep){ 
					
					callback ("Température aujourd'hui à " + rep.data.city.name + " : " + rep.data.list[0].temp.day+ "°C"); 
			
		

					} ).catch (console.error);
					break;
				}

				else 
				{
			
					
				}
		

			}

	

		});


	}*/

	getWeather : function (callback, cityValue) {
		var citySplit = cityValue.split (' ');
		
		if (citySplit.length ==1) // s'il n'y a qu'un élément donc on déduit que c'est le nom de la ville.
		{

			axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + citySplit[0] +"&APPID="+ openweatherKEY + "&units=metric" ).then (function (rep){ 
					
					callback ("Température aujourd'hui à " + rep.data.city.name + " : " + rep.data.list[0].temp.day + "°C | " + rep.data.list[0].weather[0].main + ", " + rep.data.list[0].weather[0].description + " et demain : " + rep.data.list[1].temp.day + " °C | " + rep.data.list[1].weather[0].main + ", " + rep.data.list[1].weather[0].description); 
			
		

					}).catch (console.error);
		}	

		else if (citySplit.length>1)

		{
			if (citySplit [0] == 'zip' && citySplit.length == 3)
			{
				
				if (isNaN (parseInt (citySplit[1])))
				{
					callback ("Valeur saisie incorecte. zip :  Integer expected");
					console.log("Valeur saisie incorecte. zip :  Integer expected");
				
				}
				else 
				{
					
					axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + citySplit[1] + ","+ citySplit[2] +"&APPID="+openweatherKEY + "&units=metric" ).then (function (rep){ 
					
					callback ("Température aujourd'hui à " + rep.data.city.name + " : " + rep.data.list[0].temp.day + "°C | " + rep.data.list[0].weather[0].main + ", " + rep.data.list[0].weather[0].description + " et demain : " + rep.data.list[1].temp.day + " °C | " + rep.data.list[1].weather[0].main + ", " + rep.data.list[1].weather[0].description); } ).catch (console.error);
				

			
				}
			}	

			else callback("Saisie incorrecte. !help meteo pour plus d'information"	);		
			

		}
		

	}
		
	

};
