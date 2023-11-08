const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai = 'UWDxn1Vpch2WWkMJ5JbiT3BlbkFJaEkc5PvkWPeg0HnlKEw1' // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': '2VBc8alr8Ay8rdQ', // ISI APIKEY LU
}

global.namabot = "G-BotzV5" // UBAH JADI NAMA LU
global.namaowner = "GianZY" // NAMA OWNER
global.footer_text = "©G-Botz" // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285171648088'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://tiktok/@gianisman" // bebas asal jan hapus
global.grubbot = (`https://chat.whatsapp.com/FPEEnQCr1iv3PvV96GzhJ1\n\n*INI GRUB G-BOTZNYA!*`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = false // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = false // BEBAS
global.onlygrub = false // BEBAS
global.onlypc = false // BEBAS
// - \\
// PEMISAH \\
global.packname = '©G-Botz |' //sticker wm ubah
global.author = ' GianZY' //sticker wm ganti nama kalian

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})