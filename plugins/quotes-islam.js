import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://zahirr-web.herokuapp.com/api/randomquote/muslim?apikey=zahirgans'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result.data) throw json
  let { result } = json.result.data
m.reply(`${json.result.data}`)
}
handler.help = ['quotes-islam']
handler.tags = ['quotes']
handler.command = /^(q-islam)$/i
handler.limit = true
export default handler
