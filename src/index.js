const Discord = require('discord.js')

require('dotenv').config()

const Client = new Discord.Client()

Client.once('ready', () => {
  console.log('I am ready!')
})
const prefix = '!'
let guildId = '714047621769068625'
let channelId = '714047621769068628'

Client.on('message', (msg) => {
  console.log(msg)
  if (msg.guild.id === guildId && msg.channel.id === channelId) {
    if (msg.content === prefix + 'hi') {
      msg.channel.send(`Hello, ${msg.author.username}!`)
      console.log('reply was sent')
    }
  }
})

Client.login(process.env.BOT_TOKEN)
