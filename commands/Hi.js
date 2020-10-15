module.exports = {
    name: 'hi',
    description: "this is a Hi command!" ,
    execute(Message, args){
       Message.channel.send('Hello!')


        }

 }