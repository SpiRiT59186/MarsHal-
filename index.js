const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
var prefix = config.prefix;

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login(config.token);


client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonjour a tous"){
      message.channel.send('Bonjour a toi !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonsoir a vous"){
      message.channel.send('bonsoir a toi !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "salut"){
      message.channel.send('Salutation !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "comment ca va ?"){
      message.channel.send('Bien et vous ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "comment ca va"){
      message.channel.send('Bien et vous ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bien"){
      message.channel.send('ok')
    }
  })
  
  
  //// insulte
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "tg"){
      message.reply('les insultes !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "fdp"){
      message.reply('les insultes !')
    }
  }) 
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ftg"){
      message.reply('les insultes !')
    }
});

