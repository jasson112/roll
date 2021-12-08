require("dotenv").config();
const axios = require('axios');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '/'
const registrationList = []

client.on('messageCreate', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'rush') {
    message.channel.send('🍆Rutch🍆 is naaaab !')
  } else if (command === 'roll') {
    if (args[0] === undefined) {
      axios.get('http://roll.diceapi.com/json/d100')
        .then(response => {
          if (response.data.success) {
            message.channel.send('🎲🎲🎲 !!! 🧙 ' + message.author.username + ' - ' + response.data.dice[0].value + ' 🧙!!! 🎲🎲🎲🎲')
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
})

client.login(process.env.BOT_TOKEN)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})