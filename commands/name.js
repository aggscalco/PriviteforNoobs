module.exports = {
    name: 'name',
    description: "this is a name command!" ,
    execute(Message, args){
        Message.channel.send('My name is jeff!');
   }


}