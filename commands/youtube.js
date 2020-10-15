module.exports = {
    name: 'youtube',
    description: "this is a youtube command!" ,
    execute(Message, args){
        Message.channel.send('https://www.youtube.com/channel/UCJhy3oNneSlGyFobVszIQXQ');
   }


}