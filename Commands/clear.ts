import { TextChannel } from "discord.js";
import { Command } from "../Handler";

export default {

    maxArgs: 1,
    minArgs: 1,
    RequiredPermissions: [ "ManageMessages" ],
    category: "Administration",

    Callback(Message, Args, Client) {
        const channel = Message.channel as TextChannel;

        channel.bulkDelete(parseInt(Args[0])).then((err) => {
            if(err){
                return
            }else{
                channel.send(`Ei <@${Message.member!.id}>, As mensagens foram apagadas`)
            }
        })
    },

} as Command;