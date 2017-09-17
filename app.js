var Discord = require('discord.js')
var bot = new Discord.Client();



bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '~'

if (bot.user.id === message.author.id) { return }




  if (msg.includes("NIGGER")) {

    message.delete();
  message.author.send(message.author.username + ", please do not be racist")
}
  if (msg.includes("nigger")) {

    message.delete();
  message.author.send(message.author.username + ", please do not be racist")
}


});
bot.on('disconnect', function(msg, code) {
    if (code === 0) return console.error(msg);
    bot.connect();
});
bot.login('MzU3ODQ1NTg5Mjg4OTQzNjE2.DJv32w.W6XyTwHt4lYs41iatws9nrojkD0')
