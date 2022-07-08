import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let res = 'https://zahirr-web.herokuapp.com/api/random/meme?apikey=zahirgans'
	if (!res.ok) throw await res.text()
        let json = await res.json()
        let meme = json.result.url
        conn.sendButton(m.chat, 'mim indo :v', author, meme, [['NEXT', `.meme`]], m)
}
handler.command = /^(meme)$/i
handler.tags = ['internet']
handler.help = ['meme']

export default handler
