const Discord = require ('discord.js'); 
const client = new Discord.Client();
const token = 'Mjk2NTM3ODMyNDMwNzY0MDQ0.C70JUw.bV9_1cq1hsnxWdYdGoGpvEDnVnw';


client.on ('ready', () => {
});

client.on ('message', message => {
	
	if (!message.author.bot || message.channel.type == 'dm') 
	{
		if (message.content == 'ping') 
		{
			message.reply ('pong'); 
		}
		console.log (message);
	}	
	
	
});

client.on ('presenceUdapte', function (oldMember, newMember) {
	console.log (oldMember.presence, '=>', newMember.presence);
});

client.login(token); 


var express = require ('express'); 
var app = express ();

app.get ('/');

app.listen(5000);



