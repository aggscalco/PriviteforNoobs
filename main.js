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
    console.log('TestBot_234 is online!')
    

});

client.on('guildMemberAdd', member => {
     
    const channel = member.guild.channels.find(channel => channel.name === "join-leave-activity")
    if(!channel) return;

    channel.send('Welcome ${member} to our server please read the rules!')
});
    

client.on('message', Message =>{
    if(!Message.content.startsWith(prefix) || Message.author.bot) return;

    const args = Message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(Message, args);
    } else if (command == 'name'){
        client.commands.get('name').execute(Message, args);
    }else if (command == 'help'){
        client.commands.get('help').execute(Message, args);
    }else if (command == 'youtube'){
        client.commands.get('youtube').execute(Message, args);
    }else if (command == 'freerank'){
        client.commands.get('freerank').execute(Message, args);
    }else if (command == 'hi'){
        client.commands.get('hi').execute(Message, args);
    }else if (command == 'yt'){
        client.commands.get('yt').execute(Message, args);
    }else if (Message.content === `${prefix}online`) {
        Message.channel.send(`Total Members: ${Message.guild.memberCount}`);
    }else if (command == 'help'){
        client.commands.get('help').execute(Message, args);
    }else if (command == 'giveaway'){
        client.commands.get('giveaway').execute(Message, args)
    }
});

client.login(process.env.TOKEN);
