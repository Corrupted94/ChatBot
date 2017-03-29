
const Discord = require ('discord.js'); 
const client = new Discord.Client();

var Blague = require ('./blague.js');

client.on ('ready', () => {
});

client.on ('message', message => {
	if (message.author.bot) return;	
	
	if (message.channel.type == 'dm') 
	{
		if (message.content == '!blague') 
		{
			getBlague (function (t)
			{
				message.reply(t); 
			});
			
		}

		else message.reply ("Je n'ai pas compris votre demande"); 
		console.log (message);
	}	
	if (message.mentions.users.get (client.user.id)
	{
		var contenu = message.content.replace('<@'+client.user.id+'>', '');		

		if (contenu == '!blague') 
		{
			getBlague (function (t)
			{
				message.reply(t); 
			});
			
		}

		else message.reply ("Je n'ai pas compris votre demande"); 
		console.log (message);
	}	
	
});

client.on ('presenceUdapte', function (oldMember, newMember) {
	console.log (oldMember.presence, '=>', newMember.presence);
	console.log ("User : ",newMember.user.username; "Logged in/out");
	if (newMember.user.username ==  "bramas" && newMember.presence.status == "online") 
	{
		newMember.sendMessage ("Bonjour je suis le bot de SU Yiu Quan, que puis-je faire pour vous ?");
	}
});


client.login(process.env.DISCORD_TOKEN); 


const serv = require ('./server.js'); 





