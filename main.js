const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('PriviteforNoobs is now online!')
});

client.on('message', Message =>{
    if (Message.content === '!ping') {
        Message.channel.send('Pong!');
    }
});

client.login(process.env.TOKEN);
