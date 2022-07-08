import fetch from 'node-fetch'
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
${pickRandom(global.bacot)}
`
     const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: '─────〔 𝗕𝗔𝗖𝗢𝗧 〕─────', mimetype: dpdf, fileLength: fsizedoc, pageCount: fpagedoc,
            caption: anu,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    urlButton: {
                        displayText: '📷 FOLLOW ME',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'NEXT',
                        id: '.bucin'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bacot = [
        'Jika aku bisa menjadi segalanya, aku ingin menjadi air mata kamu. Lalu aku bisa lahir di matamu, hidup di pipimu, dan mati di bibirmu.',
        'Cinta aku tuh kaya kamera, kalau udah fokus ke satu orang yang lain pasti ngeblur.',
        'Aku lebih suka apel daripada anggur, soalnya aku lebih suka ngapelin kamu daripada nganggurin kamu.',
        'Sering sih dibikin makan hati, tapi menyadari kamu masih di sini bikin bahagia lagi.',
        'Sering sih dibikin makan hati, tapi menyadari kamu masih di sini bikin bahagia lagi.',
        'Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?',
        'Jam tidurku hancur dirusak rindu.',
        'Cukup jaringan aja yang hilang, kamu jangan.',
        'Aku rela menunggu, meski kamu tak memberiku kabar, bahkan aku sadar jika ingin kamu tinggalkan.',
        'Sampai detik ini kamu masih menjadi alasan kenapa hatiku belum mau menerima siapapun.',
        'Entah mengapa tiap melihat kamu, aku keingat akan ujian. Susah sih, tetapi tetap saja harus diperjuangkan demi masa depan.',
        'Semua orang bisa bilang cinta, akan tetapi tak semua orang bisa setia.',
        'Aku mencintaimu lebih dari arti kata-kata, mengungkapkan perasaan, dan memikirkan pikiran.',
        'Hidup tidak selalu mudah, tapi jauh lebih mudah dengan kamu di sisiku.',
        'Hanya dengan hitungan jam kita akan bertemu lagi, tapi rasanya sangat lama bagaikan satu dekade. Tak terbayang seberapa girangnya hati ini berada dalam pelukanmu.',
        'Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.',
        'Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.',
        'Jomlo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.',
        'Jomlo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.',
        'Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.',
        'Pacar orang adalah jodoh kita yang tertunda.',
        'Jomlo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.',
        'Romeo rela mati untuk Juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.',
        'Aku mencari orang bukan dari kelebihannya, tapi aku mencari orang dari ketulusan hatinya.',
        'Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.',
        'Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.',
        'Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.',
        'Sayang... tugas aku hanya mencintaimu, bukan melawan takdir.',
        'Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.',
        'Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.',
        'Aku ingin menjadi satu-satunya, bukan salah satunya.',
        'Aku tidak bisa berjanji untuk menjadi yang baik, tapi aku berjanji akan selalu mendampingi kamu.',
        'Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.',
        'Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.',
        'Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.',
        'Rindu tidak hanya muncul karena jarak yang terpisah, tapi juga karena keinginan yang tidak terwujud.',
        'Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.',
        'Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu, tapi aku yakin kalau nanti kita pasti bisa bersatu.',
        'Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.',
        'Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, tapi tetap saja di hatiku kita selalu dekat.',
        'Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.',
        'Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.',
        'Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.',
        'Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.',
        'Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.',
        'Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.',
        'Tahu gak perbedaan pensil sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.',
        'Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.',
        'Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.',
        'Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.',
        'Aku gak sedih kok kalo besok hari Senin, aku sedihnya kalau gak ketemu kamu.',
        'Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.',
        'Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finish-nya.',
        'PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.',
        'Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.'
  