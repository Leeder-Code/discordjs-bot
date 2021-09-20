import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

const { prefix } = require('./config.json')

client.on('ready', () => {
  console.log('Ready')
})

client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message.reply({
      content: 'pong',
    })
  }
})

client.login(process.env.DJSTOKEN)
