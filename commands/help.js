module.exports = {
    name: 'help',
    description: "this is a help command!" ,
    execute(Message, args){
        Message.channel.send('-giveaway its beta, -yt or -youtube is for the channel');
   }


}