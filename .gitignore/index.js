const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('🐢')

bot.on('ready', function() {
    bot.user.setGame("Command: 🐢help");
    console.log("Connectedç")
});

bot.login("process.env.TOKEN");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: 🐢help, Ping, Salut, Bye, Je suis ton Maître louanis.bot");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour");
        console.log("commande Salut effectué");
    }

    if (message.content === "Ping"){
        message.reply("Pong");
        console.log("commande Ping effectué");
    }
    
    if (message.content === "Bye"){
        message.reply("Au revoir");
        console.log("commande Bye effectué");
    }

    if (message.content === "Je suis ton Maître louanis.bot"){
        message.reply("ptdr t ki toa, sale nul");
        console.log("commande master effectué");
    }


});
