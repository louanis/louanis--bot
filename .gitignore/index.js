const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('🐢')

bot.on('ready', function() {
    bot.user.setGame("Command: 🐢help");
    console.log("Connectedç")
});

bot.login(process.env.TOKEN);


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

    if (message.content === "que demande Manga.SAO?"){
        message.reply("il demande de retrogader louanis mon maître qui m'a créé");
        console.log("commande Manga.SAO effectué");
    }

    if (message.content === "il se prendra quoi si il continue?"){
        message.reply("un petit ban des familles");
        console.log("commande Manga.SAO2 effectué");
    }

    if (message.content === "la CIA t'as créé louanis bot ?"){
        message.reply("...non...c'est louanis qui m'a créé");
        console.log("commande easter egg effectué");
    }

    if (message.content === "la CIA m'espionne louanis bot ?"){
        message.reply("G̢̝͉̖̲͈̲̙̘͙̱̜̖ͬ͆͑̍͗̊̒̓̕͟͞͠L̷̵͈̯̭͈̪̜̲͍̹̱͚͎͓̔͑̔ͧ̏̈̈́̍ͫ̆̐̚̚͡ͅI̸̛̮̮̩̬̹̩̩͉̍͛̈́͐͊͐̐͛̈́̓͋͑̑͜͝͝T̢̡̲̼͎̜͎̰̥͓͖̙͍̱ͫ͗̄ͭͩ̐̂ͨͮ̊̍̐͠ͅͅC̀̃́̿͌̄̊̈́̏͑ͣ̎̉͆͘͡҉̢̢͖̹͍͓H̶̪͖̹͉ͤ͛ͥ̈́ͣ̿ͧͫ");
        console.log("commande easter egg n°2 effectué");
    }

    if (message.content === "Tu travaille avec la CIA louanis bot?"){
        message.reply("A̴̴̡̢̪͉̝̩͈̜̦̹̹͉̜̝͕̜͍̅̓ͩͣ̆̾͆ͧ̉̿͡R̳̦̗͇̰̘͇̻̝̘̗͈̮͓̭͋̇̌͒ͧͤ̈́ͩͬ̃͛̇͌̀̽̄̎͛͜͜R̢̛̘̖̜̭̝̙̳̭̬͉̥̫͕̝ͪ͆ͫ̈̍ͤ̾̎́͜ͅÊ̶̪̪̭͚͖͔̝̺̮̝̮̘̭̗̳̂͐̓̋̿̍͐͌̐ͧ̒̊̒ͯ̀́͝ͅT̴̨͓͖̥̥̤̺̣̦̝͎̱͍͉̭͕͇̰́̋̆̏͛̅͐ͮͥͪͥ̋͛̐̇̽ͯ̽̍̕͟͝ͅE̡͈̮͇̤̞̮̮͈͎̹̞͉͓͈̲̣ͬ̓̑ͭ̾ͤ̄͆̎̾͗̋ͤ̈̒ͪ͢͜Z̵̶̴̞͍̪̹̳͑̿ͬͩ̃ͧ̒͞ͅ ̷̷̴͖̟̲̼͍̲̮̖̘̲̝̎ͧ̇̂ͨ̔̑̍ͦ͗̇͒̋͆ͦͧ͊ͫ͞ͅͅD̵̷̢̢͕͔͎̲̭̜̬̺̺̳͈̭̲͚̱ͣ͑ͥ̑̅̇̒͐͐ͥ̏ͮ̅̽̚̚E̛͍̲̘̖̫͇̱̍̋ͦ͛̆͆͐͛ͤ̊̈ͩ̆̉̍̈ ̴̸͂̄̏̉ͥ͛͗̓̍̕͘͏͓̙̻̺͖̳̖P̒̿̂̆͐̑҉̙̯͈̠̱̙͡ͅO̧͙̪̭̹͚̿̓ͧͮ̏̈͑̐̋ͩ͂̒̈̀S̶̯̫͈̫̮̪̬̮̞͉̠͇̗̫̮̦̠ͬ͒̓͑͐͝Ę̟̣̺̙̞̯̲͉̗̝ͣ͆ͦ͌̐ͭͮ͋̇͆́͠͠R̶̨̡̪̪̲͚̣̪̙͕̼͍̰͖͛͐ͬ͑̎ͧ̇ͥ͝ ̧̝̹̮͕̼͚̰̪̺̻̹̹͇̭͎͋ͮ̂̋͢͞͝͡D̵̡͓̗̞̹̜̬͚͇̳̲̮͇̜̠̘̩̞̘ͫ̃̎̌̍ͩͨ͒̍̇̀̓̓̌ͮ̊ͮ͆͆͘͡E̶̻͔̦̲̻̯͍̼͙̘̞̣̠͈̫̙̖̰ͫ̇̒̍ͥ͢Ş̰̼̠͈̳̳̮͔̟̣̒͒͆̊ͮ̽̏̀ͅ ̿͐͌̒̓́̿́ͫ̎ͫͥ͒̊̇ͬ̅̒̚͏̗̮̠̱̫̦̥͖̖͍̳̘̼͚̺̣̕Q̵̸̢͉̜̰̻̥̰̝̫̟͖̜̱ͬ̑̓͐Ų̢̞͙̗̣̰̗͚͇̮͉͍̭ͥ̅ͪͦ̄͂̐ͤ̂͋͘͝E̴̢̢͎͖͔͎̺̣̲͔̦͚̹͉̬̼̫̜̿̆ͭ͑̽̂̿̇̕͞S̋̈͂̅ͣ͑̅̌͌̓͂͊ͨ̿̓͠͏̵͢҉̬͖͚͖͉̠͖͖̣͓̱̗̜ͅŢ̶̫̞͙͍̼̯̗̥̰̠̥̭͍̫̘͙̌̌̈́͒ͭͥ͋̈ͪͩ̑̉ͭ͡I̵̴̢̢͍̹̙̩̗̜͍̲͚̗̩̭͎̠͙̮͌͂ͯ̾̌͑̂͗͑͝ͅO͇̗̤̦̫̮̣͕̩͇̮͎͖̙̺͙̝̜ͤ̈͆ͥ̉͒͘͢͜N̡̲͍̣͓͉͉̦̩ͮ̾̃̑̃ͤ́ͭ̂̑͐̏ͭ͂̿̕͟͡S̴̡̞̣̺͈͚̪̳̼͇̞̣͙̰̱͖͙͙͒͆̌̋ͮ͢ ̢̤͚̮̭͍̜͎̲̮͈̯͖͍͚͚̗̃̋ͧͫ̐ͮ̽ͮ̎ͩ̐ͭ̃̌ͦ͗̅ͩ̚͘̕͘Ç̞̺̩̘͍͈̗̟͔̘̩̬̲͚̫̆͋ͤ͐̓̄ͪ͂͒͘͞͠ͅȌ̡ͫ͑ͬͩ̅̈ͨͨ͒͐͠҉͍͕͉̼̣͙̠͉͕͙̱̱M̛̳̞̩͚͔͓̗̰̫̬̞̳̦̤̳̖ͤ͐̋ͣ̿͑̈́͊̀̚͢ͅM̔̓ͤͬͥ͋҉̧͉̩̲͈̰̞̪̞͖̭͚̺̺̩͖̳̖̼ͅE̛ͭ̈ͬ̂̋͌͌̕͏͇̦̦̦̞̟̲̗̙̲̲͉̯͢ͅ ̵̶̨̺̙̯̜͕͈̬̟͍̟͍̹͎̫̺̟̰̜̭ͯ̈̔̈́̓̃͆͌ͭ̎̋̍̈́̀͝C̸̗̤̳̭̩̱̣̱̰̰͕͖̘̫̬̥̤̰͚͊̈ͫ̌̊̍̀̂̿ͫ̂͗͌̾͒̔͘͜͝Ȇ̢̢̲͙̳̙͈͇̳̥̫͍̙̳̣̘̞̯͇ͬ̔̔ͧ̓̆ͮ̈̔̀̆̚͞L͓̪̟͚̙̞̠͉̹͕̰̜̲̮̫̘ͮͥͫ̑͆̅̄̇ͧͦͤ͆̀̀ͅL̵̨̩̱͍̹͖̮̰͓̜͎̲̟̟͈̻͓̳ͮͨ̌ͦ̑ͣ̅ͬ͆͜͞E͍̗̬̗̪̝̪͍͍͓͕̲̙̦̼̬̦̬̾̌̎͆ͤ̿ͩ̅̔ͫͭ̒́̚̕͢ͅ ̸̧̮̩̝̺̪͕͖̱̪͕ͤ̓̂ͥͬ̽̈͌̏̀̽̆ͦ̓͋L̵ͭ̃ͮ͐̔ͩͣ̋̿͌̈͡҉͓̞̣̻̹̦̱Ą̼̲̭̹̜̥̜̭̔̇̀ͧ̕");
        console.log("commande easter egg n°3 effectué");
    }

    if (message.content === "tais toi!"){
        message.reply("tais toi toi même 😭 ");
        console.log("commande tais toi effectué");
    }

});
