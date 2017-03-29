
const Discord = require ('discord.js'); 
const client = new Discord.Client();
const token = 'Mjk2NTM3ODMyNDMwNzY0MDQ0.C70avw.UxSEh06PrqMvR8ds3GGtuI2peQc';

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
	if (newMember.displayname == 'ProgSK77' || newMember.nickname == 'ProgSK77') newMember.sendMessage ("Bonjour je suis le bot de SU Yiu Quan, que puis-je faire pour vous ?");
});

client.login(token); 


const serv = require ('./server.js'); 





