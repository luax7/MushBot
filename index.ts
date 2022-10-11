import * as discord from 'discord.js';
import Ark from './Handler/index'
import dotenv from 'dotenv'

dotenv.config()


const client = new discord.Client({
    intents: [
        
        discord.IntentsBitField.Flags.GuildMembers,
        discord.IntentsBitField.Flags.GuildMessages,
        discord.IntentsBitField.Flags.Guilds,
        discord.IntentsBitField.Flags.MessageContent

    ]
})
const ArkClient = new Ark( client , 
    {
        Owner: "Luax7",
        CommandsDirectory: __dirname + "/Commands",
        FeaturesDirectory: __dirname + "/Features",
        PREFIX: 'mush'
    }
)

client.login("MTAyOTQwOTk1ODUzMTQ0MDY4MQ.GxdJ-V.pK5vq650B428DVSzCU84aErJlmBv2h93go_094")