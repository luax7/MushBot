import * as discord from 'discord.js'
import * as dotenv from 'dotenv'
import handler from '../Handler';
import handlerOptions from './HandlerClientOptions';
import * as fs from 'fs'
import { Feature } from '..';
import * as mongoose from 'mongoose';
dotenv.config();

/**
 * The main Ark feature, checks foreach message to check if it triggers a command
 * 
 * @param client The discord client to build upon
 * @param options the ark client options @type handlerOptions
 */

export default class HandlerClient {
  public readonly client: discord.Client;
  public readonly Options: handlerOptions;

  constructor(client: discord.Client, options: handlerOptions) {
    this.client = client;
    this.Options = options;

    if (this.Options.FeaturesDirectory) {
      const files = fs.readdirSync(this.Options.FeaturesDirectory);

      files.forEach(element => {
        const ThisFeature = require(this.Options.FeaturesDirectory + '/' + element).default as Feature;
        ThisFeature.Callback(this.client,this)

      });
    } // Le as features do caminho especificado e as carrega

    this.client.on('messageCreate', (message: discord.Message) => {
        
      if('CommandsDirectory' in this.Options){

        if(message.content.toLowerCase().startsWith(this.Options.PREFIX as string || 'calltest')){

          

          const files = fs.readdirSync(this.Options.CommandsDirectory as string)

          const CommandRequest = message.content.split(' ')[1].toLocaleLowerCase();
          files.forEach(file => {

            if(`${CommandRequest}.ts` == file ) 
            {
              handler(
                require(`${this.Options.CommandsDirectory}/${CommandRequest}.ts`).default,
                message,
                this
              )
              return
            }

          })

          if(this.Options.RegisterDefaults){
            const std_files = fs.readdirSync(__dirname + "/DefaultCommands/")

            std_files.forEach(file => {

              if(`${CommandRequest}.ts` === file){
                handler(
                  require(`./DefaultCommands/${CommandRequest}.ts`).default,
                  message,
                  this
                )
              }

            })
          }


        }
      }
      
    });

    if(this.Options.MongoConnectionString){

      const connection = mongoose.connect(this.Options.MongoConnectionString, {
        keepAlive: true,
      })
    }

  }


}
