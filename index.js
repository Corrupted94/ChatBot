
const Discord = require ('discord.js'); 
const client = new Discord.Client();

var Blague = require ('blague.js');

client.on ('ready', () => {
});

client.on ('message', message => {
	
	if (!message.author.bot || message.channel.type == 'dm') 
	{
		if (message.content == '!blague') 
		{
			getBlague (function (t));
			console.log (t);
			message.reply(t); 
		}

		else message.reply ("Je n'ai pas compris votre demande"); 
		console.log (message);
	}	
	
	
});

client.on ('presenceUdapte', function (oldMember, newMember) {
	console.log ("poerfpsdfkpsdof");
	console.log (oldMember.presence, '=>', newMember.presence);
	console.log (newMember.user.username);
	if (newMember.user.username ==  'bramas' && newMember.presence == true) 
	{
		newMember.sendMessage ("Bonjour je suis le bot de SU Yiu Quan, que puis-je faire pour vous ?");
	}
});


client.login(process.env.DISCORD_TOKEN); 


const serv = require ('./server.js'); 





