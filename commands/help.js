module.exports = {
    name: 'help',
    description: "this is a help command!" ,
    execute(Message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#2aa198')
        Message.channel.send('-giveaway its beta, -yt or -youtube is for the channel');
   }


}