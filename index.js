
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Mjk2NTM3ODMyNDMwNzY0MDQ0.C70BqQ.VhGXKjt5as62Up0OQtEwBZl0r5w');
