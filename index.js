
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



client.login(process.env.DISCORD_TOKEN); 


const serv = require ('./server.js'); 





