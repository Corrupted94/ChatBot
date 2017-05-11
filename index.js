

const Discord = require ('discord.js'); 
const client = new Discord.Client();



/***************Server *********/
var express = require ('express'); 
var app = express ();

app.get ('/', function (req, res) { 
	res.send ('hello world '); 
});

/* ************************** */

var Blague = require ('./blague.js');
//var Meteo = require ('./meteo.js');


client.on ('ready', () => {
	console.log('Ready');
});

client.on ('message', message => {
	if (message.author.bot) return;	

	var messageContent = "";
	if (message.mentions.users.get(client.user.id))
	{
		messageContent = message.content.replace('<@'+client.user.id+'> ', '');
		console.log (messageContent);
	}	
	else if (message.channel.type == 'dm')
	{
		messageContent = message.content;
		console.log (messageContent);
	}
	else return;


	if (messageContent != "")
	{
		var contentArray = messageContent.split(' ');
		if (contentArray.length > 1) //array not empty
		{
			if (contentArray[0] == "!ping") 
			{
				message.reply("pong");
			}	

			else if (contentArray [0] == "!blague") 
			{
				Blague.getBlague (function (t) 
				{
					message.reply(t);
				});
			}
			
			else message.reply ("Je n'ai pas compris votre demande"); 
		}

		else 
		{
			console.log ("error");
		}
	}
	
});









/**********PRESENCE UPDATE *****************/
client.on ('presenceUpdate', function (oldMember, newMember) {
	console.log (oldMember.presence, '=>', newMember.presence);
	//console.log ("User : ",newMember.user.username; "Logged in/out");
	if (newMember.user.username ==  "bramas" && newMember.presence.status == "online") 
	{
		newMember.sendMessage ("Bonjour maitre, je suis le bot de SU Yiu Quan et de SEYDOU Mamouina, que puis-je faire pour vous ?");
	}
});


client.login(process.env.DISCORD_TOKEN); 

app.listen(process.env.PORT || 5000);

