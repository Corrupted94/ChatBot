
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

client.on ('presenceUdapte', function (oldMember, newMember) {
	console.log (oldMember.presence, '=>', newMember.presence);
	if (newMember.user.username ==  'ProgSK77' && newMember.presence == true) 
		newMember.sendMessage ("Bonjour je suis le bot de SU Yiu Quan, que puis-je faire pour vous ?");
});


client.login('Mjk2NTM3ODMyNDMwNzY0MDQ0.C70oNA.5BFC2OWQpIvGtauQUCCI7wSWkSo'); 


const serv = require ('./server.js'); 





