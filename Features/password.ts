import { Feature } from "../Handler";
import IDGEN from "../Handler/Utils/IDGEN";

const Codes : Map<string,string> = new Map;

export default {

    Callback(client, HandlerClient) {
        
        client.on('guildMemberAdd', (member) => {

            const ID = IDGEN(10)

            Codes.set(member.id,ID)

            member.user.send(`Ola, apenas como uma forma de segurança para o servidor, você precisa mandar **Este : ${ID}** codigo no canal chamado _codigo_. Obrigado`  )
        })

        client.on('messageCreate', (message) => {

            if(message.channel.id === '1029411252126097428'){

                if(!Codes.has(message.member!.id)) return;

                if(message.content.trim() === Codes.get(message.member!.id)){

                    message.member?.roles.add('1029397232870506628')
                    Codes.delete(message.member!.id)
                    return;
                }

            }

        })

    },

} as Feature;
