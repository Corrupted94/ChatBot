const Discord = require ('discord.js'); 
const client = new Discord.Client();

client.on ('ready', () => {
});

client.on ('message', message => {
	if (message.content == 'ping') {
		message.reply ('pong'); 
	}

	console.log (message);
});

client.on ('presenceUdapte', function (oldMember, newMember) {
	console.log (oldMember.presence, '=>', newMember.presence);
});

client.login('Mjk2NTM3ODMyNDMwNzY0MDQ0.C70BqQ.VhGXKjt5as62Up0OQtEwBZl0r5w'); 


