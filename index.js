
const Discord = require ('discord.js'); 
const client = new Discord.Client();

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



client.login('Mjk2NTM3ODMyNDMwNzY0MDQ0.C70oNA.5BFC2OWQpIvGtauQUCCI7wSWkSo'); 


const serv = require ('./server.js'); 





