const Discord = require('discord.js');

const client = new Discord.Client();

const {prefix, 
    bot_age, 
    words_array, 
    bot_info
    ,} = require('/config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(prefix);
    console.log(bot_age);
    console.log(words_array[0]);
    console.log(words_array[1]);
    console.log(words_array[2]);
    console.log(bot_info.name);
    console.log(bot_info.version);
    console.log('PriviteforNoobs is now online!')
});

client.on('message', Message =>{
    if (Message.content === `${prefix}ping`) {
        Message.channel.send('Pong!');
    } else if (Message.content === `${prefix}hi`) {
        Message.channel.send('Hello!')
    } else if (Message.content === `${prefix}help`) {
        Message.channel.send('-name,-yt or -youtube,-hi,-freerank,-giveaway')
    }  else if (Message.content === `${prefix}online`) {
            Message.channel.send(`Total Members: ${message.guild.memberCount}`);
    }
});

client.login(process.env.TOKEN);
