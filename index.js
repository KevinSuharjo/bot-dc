const mySecret = process.env['TOKEN']
const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')
const { keep_alive } = require("./keep_alive");

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})



client.login(process.env.TOKEN);
client.on("message", async message =>{
  if (message.content.startsWith("hai"))
  {
    message.channel.send(`haii`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bagaimana kabar mu?"))
  {
    message.channel.send(`baik baik saja`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("ok"))
  {
    message.channel.send(`ok`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hahaha"))
  {
    message.channel.send(`hahaha`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bruh"))
  {
    message.channel.send(`bruh`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("aku sedih"))
  {
    message.channel.send(`broken house`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("assalammualaikum"))
  {
    message.channel.send(`aswalaikumsalam`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("gaada"))
  {
    message.channel.send(`sus`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("woi"))
  {
    message.channel.send(`apa`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("siapa nama mu?"))
  {
    message.channel.send(`nama gweh bot coy`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("invite"))
  {
    message.channel.send(`mau invite gweh? nih ling https://discord.com/api/oauth2/authorize?client_id=977607601414103050&permissions=8&scope=bot`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("haha"))
  {
    message.channel.send(`Lol!`)
  }
});


  
