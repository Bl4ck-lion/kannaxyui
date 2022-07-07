let handler = async (m, { conn, text }) => {
    let yh = global.asupan
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'Random Video Loli Lucu', 'Lolinya Kaak', url, [['NEXT', '.asupanloli']], m)
  }
  handler.command = /^(asupanloli)$/i
  handler.tags = ['premium']
  handler.help = ['asupanloli']
  handler.premium = true
  export default handler
  
 global.asupan = [
  "https://tinyurl.com/yevu67m4",
  "https://tinyurl.com/yzkql4ts",
  "https://tinyurl.com/yg97y593",
  "https://tinyurl.com/ydvyjxnr",
  "https://tinyurl.com/ygdggmxv",
  "https://tinyurl.com/yf7ywd3b",
  "https://tinyurl.com/yfn4g9uh",
  "https://tinyurl.com/yzq5fpru",
  "https://tinyurl.com/ygp9z239",
  "https://tinyurl.com/yjgozzwj",
  "https://tinyurl.com/yebwbm5j",
  "https://tinyurl.com/yj25zle3",
  "https://tinyurl.com/yfrup6cv",
  "https://tinyurl.com/ydugx986",
  "https://tinyurl.com/ygcuuuza",
  "https://tinyurl.com/ydwkohkk",
  "https://tinyurl.com/yghlz9cl",
  "https://tinyurl.com/yhvqnslw",
  "https://tinyurl.com/yg87aznw",
  "https://tinyurl.com/yz8xt59d",
  "https://tinyurl.com/yhm5dnw2",
  "https://tinyurl.com/yk4kbc96",
  "https://tinyurl.com/yhajeouw",
  "https://tinyurl.com/yem4f6j2",
  "https://tinyurl.com/yel95ge3",
  "https://tinyurl.com/yf3nf44z",
  "https://tinyurl.com/yzbbh8c5",
  "https://tinyurl.com/ye4etjw2",
  "https://tinyurl.com/ygjtr896",
  "https://tinyurl.com/yjbpwk7w",
  "https://tinyurl.com/yfnamz2o",
  "https://tinyurl.com/yel5kptw",
  "https://tinyurl.com/yzebz6tz",
  "https://tinyurl.com/yh6rlqpo",
  "https://tinyurl.com/yz2wlltn",
  "https://tinyurl.com/ydlccn4t",
  "https://tinyurl.com/yedmytjg",
  "https://tinyurl.com/yh5z78z9",
  "https://tinyurl.com/ydqv9p46",
  "https://tinyurl.com/yj9xy2or",
  "https://tinyurl.com/yfarlh4k",
  "https://tinyurl.com/yfcz7uez",
  "https://tinyurl.com/yggdt2u8",
  "https://tinyurl.com/yfuzdlju"
]
