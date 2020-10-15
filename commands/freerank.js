module.exports = {
    name: 'freerank',
    description: "this is a Freerank command!" ,
    execute(Message, args){

        if(Message.member.roles.cache.has('753965405256679504')){
            Message.channel.send('You already have freerank!')


        }else {
            Message.channel.send('Ohh you want the Free rank i see well you have to subsribe Here https://www.youtube.com/channel/UCJhy3oNneSlGyFobVszIQXQ :D')
            Message.member.roles.add('753965405256679504')

        }
        
   }
}
