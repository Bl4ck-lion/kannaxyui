import { bucin } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, command }) => conn.sendButton(m.chat, await bucin(), author, [
    ['Next', `${usedPrefix+command}`], 
], m)

handler.help = ['Bucin']
handler.tags = ['quotes']
handler.command = /^(q-bucin)$/i

export default handler
