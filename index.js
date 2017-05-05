

const Discord = require ('discord.js'); 
const client = new Discord.Client();



/***************Server *********/
var express = require ('express'); 
var app = express ();

app.get ('/', function (req, res) { 
	res.send ('hello world '); 
});








client.on ('ready', () => {
});

client.on ('message', message => {
	
	if (!message.author.bot || message.channel.type == 'dm') 
	{
		if (message.content == 'ping') 
		{
			message.reply ('pong'); 
		}
		else message.reply ('What ?') ;
		console.log (message);
	}	
	
	
});










/**********PRESENCE UPDATE *****************/
client.on ('presenceUpdate', function (oldMember, newMember) {
	console.log (oldMember.presence, '=>', newMember.presence);
	console.log ("User : ",newMember.user.username; "Logged in/out");
	if (newMember.user.username ==  "bramas" && newMember.presence.status == "online") 
	{
		newMember.sendMessage ("Bonjour je suis le bot de SU Yiu Quan, que puis-je faire pour vous ?");
	}
});


client.login(process.env.DISCORD_TOKEN); 

app.listen(process.env.PORT || 5000);

