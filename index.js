

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



client.on ('ready', () => {
	console.log('Ready');
});

client.on ('message', message => {
	if (message.author.bot) return;	
	
	if (message.channel.type == 'dm') 
	{
		if (message.content == '!blague') 
		{
			Blague.getBlague (function (t)
			{
				message.reply(t); 
			});
			
		}
			

		else message.reply ("Je n'ai pas compris votre demande"); 
		console.log (message);
	}
	
	if (message.mentions.users.get(client.user.id))
	{
		var contenu = message.content.replace('<@'+client.user.id+'>', '');		
		console.log (message.content);
		console.log(contenu)
		if (contenu == '!blague') 
		{
			Blague.getBlague (function (t)
			{
				message.reply(t); 
			});
			
		}

		else message.reply ("Je n'ai pas compris votre demande"); 
		console.log (message);
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

