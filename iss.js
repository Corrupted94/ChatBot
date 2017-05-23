
var sharp = require ('sharp');

var axios = require ('axios');


module.exports= 
{
	getIss: function (callback) 
	{

		axios.get("http://staticmap.openstreetmap.de/staticmap.php?center=42.342443403495,129.46352093742&zoom=5&size=400x300&maptype=mapnik&markers=42.342443403495,129.46352093742,ltblu-pushpin", {responseType: 'arraybuffer'}).then(function (rep2) {
		sharp(rep2.data).overlayWith('./iss.png')	
			.toBuffer()
			.then (function (data) { callback(data) }).catch(console.error);
	


	}).catch (console.error);
	}	


		
}
