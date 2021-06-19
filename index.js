const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const Client = new Discord.Client;

const prefix = "+"

Client.on("ready", () => {
    console.log("bot opérationnel");
});


Client.on("message", message => {
    if(message.content.startsWith(prefix + "play")){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");

                if(!args [1]){
                    message.reply("Lien de la vidéo non ou mal mentionné.");
                    connection.disconnect();
                } 
                else {    
                    let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

                     dispatcher.on("finish", () => {
                        dispatcher.destroy();
                        connection.disconnect();
                    });

                    dispatcher.on("error", err => {
                        console.log("erreur de dispatcher : " + err);
                    });
                }    
            }).catch(err => {
                message.reply("Erreur lors de la connexion : " + err);
            });    
        }
        else {
            message.reply("Vous n'êtes pas connecté en vocal.");
        }
    }    
});    


Client.login(process.env.TOKEN);