const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () =>{
    console.log("===========================================");
    console.log("NeyyBot vient de se connecter avec succès !");
})

bot.on("ready", function() {
    bot.user.setActivity("NeyyBot - By NeyyZox")

})

bot.login("NjAyNTYzNzUwNTM2NTQ0Mjcx.XTSrYA.z_5gas9WpDqv14KzsihpOlazeuY");
