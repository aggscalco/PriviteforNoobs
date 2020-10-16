module.exports = {
    name: 'help',
    description: "this is a help command!" ,
    execute(Message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#2aa198')
        .setTitle('COMMANDS')
        .setDescription('-name,-yt or -youtube,-hi,-freerank,-giveaway');
        .setFooter('All Commands');
        Message.channel.send(embed);
   }


}