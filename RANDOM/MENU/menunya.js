const chalk = require('chalk')
const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')

global.menunya = (pushname, prefix, hituet) =>{
	return `Halo 👋 ${pushname}
Saya ${namabot}, Saya Adalah Sebuah Robot Yang Di Buat Oleh GianZY.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
┆❐ Runtime : ${runtime(process.uptime())}
┆❐ Time : ${xtime}
┆❐ Date : ${xdate}
╰──────────◇

___________________________

╭─❒ 「 *INFO MENU* 」
│
│○ .owner  
│○ .sc  
│○ .ping  
│○ .donate  
│○ .tqto  
│○ .sewa  
│○ .q  
│○ .jasrun  
│○ .sewa  
│○ .buyprem  
│○ .runtime  
│○ .groupbot  
│○ .developer  
│
╰❒ 

╭─❒ 「 *OWNER MENU* 」
│
│○ .addprem  
│○ .delprem  
│○ .listprem  
│○ .block  
│○ .unblock  
│○ .public  
│○ .self  
│○ .out  
│○ .kosong  
│○ .join  
│○ .addsewa  
│○ .delsewa  
│○ .setnamabot  
│○ .setbiobot  
│○ .broadcastvid  
│○ .bctext  
│○ .bcimage  
│○ .pushkon
│○ .pushkonid
│○ .anticall [on/off]
│○ .setexif
│○ .idgrub
│○ .jadibot
│○ .listjadibot
│○ .restartbot
│○ .creategc
│○ .banned
│○ .listbanned
│○ .unbanned
│○ .autoread
│○ .autoblok212
│○ .getcase
│○ .setppbot
│○ .addowner
│○ .delowner
│
╰❒

╭─❒ 「 *DATABASE MENU* 」
│
│○ .addvn
│○ .listvn
│○ .delvn
│○ .addzip
│○ .delzip
│○ .listzip
│○ .yozip
│○ .sendzip
│○ .addapk
│○ .delapk
│○ .listapk
│○ .sendapk
│○ .addpdf
│○ .listpdf
│○ .sendpdf
│○ .yopdf
│○ .sendpdf
│
╰❒

╭─❒ 「  *STORE MENU*  」
│
│○ .list  
│○ .addlist  
│○ .updatelist  
│○ .dellist  
│○ .jeda  
│○ .tambah  
│○ .kurang  
│○ .kali  
│○ .bagi  
│○ .setproses  
│○ .changeproses  
│○ .delsetproses  
│○ .setdone  
│○ .changedone  
│○ .delsetdone  
│○ .proses  
│○ .done  
│○ .setwelcome  
│○ .changewelcome  
│○ .delsetwelcome  
│○ .setleft  
│○ .changeleft  
│○ .delsetleft  
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ .antiwame  [on/off]
│○ .antiwame2  [on/off]
│○ .antilink  [on/off]
│○ .antilink2  [on/off]
│○ .welcome  [on/off]
│○ .goodbye  [on/off]
│○ .group open
│○ .group close
│○ .hidetag  
│○ .kick  
│○ .linkgc  
│○ .resetlinkgc  
│○ .delete  
│○ .listonline  
│○ .setnamegc  
│○ .setdesc  
│○ .listsewa  
│○ .add  
│○ .promote  
│○ .demote  
│○ .antilinkall  
│○ .sendlinkgc  
│○ .tagall  
│○ .totag
│○ .mute [on/off]
│○ .nsfw [on/off]
│○ .setppgroup
│
╰❒

╭─❒ 「 *SEARCH MENU* 」 
│
│○ .ytsearch  
│○ .google  
│○ .cariresep
│○ .bacaresep
│○ .happymod
│○ .ssweb
│○ .grupwa
│○ .translate
│○ .listbahasa
│
╰❒

╭─❒ 「 *DOWNLOAD MENU* 」
│ 
│○ .tiktok  
│○ .tiktokvn  
│○ .tiktokaudio  
│○ .tiktok2
│○ .tiktokaudio2
│○ .spotify  
│○ .ytmp3  
│○ .ytmp4  
│○ .play  
│○ .playmp3  
│○ .playmp4  
│○ .tomp4
│○ .toaudio
│○ .tomp3
│○ .tovn
│○ .togif
│○ .igdl  
│○ .igvideo  
│○ .instavid
│○ .igreels
│○ .fbdl
│○ .facebook
│○ .gitclone
│
╰❒

╭─❒ 「 *ASUPAN MENU* 」
│
│○ .tiktokkayes  
│○ .tiktokgirl  
│○ .tiktokghea  
│○ .tiktokbocil  
│○ .tiktokukhty  
│○ .tiktoksantuy  
│○ .tiktokpanrika  
│○ .tiktoknotnot  
│○ .tiktokgabagtha  
│
╰❒

╭─❒ 「 *ASUPAN* *2* *MENU* 」
│
│○ .chika
│○ .delvira
│○ .ayu
│○ .bunga
│○ .aura
│○ .nisa
│○ .ziva
│○ .yana
│○ .viona
│○ .syania
│○ .riri
│○ .syifa
│○ .mama_gina
│○ .alcakenya
│○ .mangayutri
│○ .rikagusriani
│○ .asupan
│○ .bocil
│○ .geayubi
│○ .santuy
│○ .ukhty
│○ .syifa
│
╰❒

╭─❒ 「 *OTHER MENU* 」 
│
│○ .afk
│
╰❒

╭─❒ 「 *RANDOM STICKER* 」 
│
│○ .patrick  
│○ .popoci  
│○ .sponsbob  
│○ .kawan-sponsbob  
│○ .awoawo  
│○ .chat  
│○ .benedict  
│○ .dbfly  
│○ .dino-kuning  
│○ .doge  
│○ .gojosatoru  
│○ .hope-boy  
│○ .jisoo  
│○ .kr-robot  
│○ .kucing   
│○ .lonte  
│○ .manusia_lidi  
│○ .menjamet  
│○ .meow  
│○ .nicholas  
│○ .tyni  
│
╰❒

╭─❒ 「 *STICKER MENU* 」 
│
│○ .sticker  
│○ .toimage  
│○ .pinterest  
│○ .ttp  
│○ .smeme  
│○ .attp  
│○ .emojimix  
│○ .wm  
│○ .qc
│○ .snobg
│
╰❒

╭─❒ 「 *Anonymous MENU* 」 
│
│○ .menfess
│
╰❒

╭─❒ 「 *Ai Menu* 」 
│
│○ .ai
│○ .chatgpt  
│○ .aiimg
│
╰❒

╭─❒ 「 *STALKER MENU* 」 
│
│○ .ffstalk
│○ .mlstalk
│○ .githubstalk
│○ .npmstalk
│
╰❒

╭─❒ 「 *GAMES MENU (BUG)* 」 
│
│○ .tebakkata  
│○ .tebakgambar  
│○ .tebakbendera  
│○ .caklontong  
│○ .susunkata  
│○ .tebakkalimat  
│○ .jodohku
│○ .jadian
│○ .halah
│○ .hilih
│○ .huluh
│○ .heleh
│○ .holoh
│
╰❒

╭─❒ 「 *CECAN MENU* 」 
│
│○ .china
│○ .indonesia
│○ .malaysia
│○ .thailand
│○ .korea
│○ .japan
│○ .vietnam
│○ .jenni
│○ .jiiso
│○ .lisa
│○ .rose
│
╰❒

╭─❒ 「 *TEXTPRO MENU* 」
│
│○ .candy
│○ .christmas
│○ .3dchristmas
│○ .sparklechristmas
│○ .deepsea
│○ .scifi
│○ .rainbow
│○ .waterpipe
│○ .spooky
│○ .pencil
│○ .circuit
│○ .discovery
│○ .metalic
│○ .fiction
│○ .demon
│○ .transformer
│○ .berry
│○ .thunder
│○ .magma
│○ .3dstone
│○ .neonlight
│○ .glitch
│○ .harrypotter
│○ .brokenglass
│○ .papercut
│○ .watercolor
│○ .multicolor
│○ .neondevil
│○ .underwater
│○ .graffitibike
│○ .snow
│○ .cloud
│○ .honey
│○ .ice
│○ .fruitjuice
│○ .biscuit
│○ .wood
│○ .chocolate
│○ .strawberry
│○ .matrix
│○ .blood
│○ .dropwater
│○ .toxic
│○ .lava
│○ .rock
│○ .bloodglas
│○ .hallowen
│○ .joker
│○ .darkgold
│○ .wicker
│○ .firework
│○ .skeleton
│○ .blackpink
│○ .sand
│○ .glue
│○ .1917
│○ .leaves
│
╰❒

╭─❒ 「 *EPHOTO MENU* 」
│
│○ .glitchtext
│○ .writetext
│○ .advancedglow
│○ .typographytext
│○ .pixelglitch
│○ .flagtext
│○ .neonglitch
│○ .flagtext
│○ .flag3dtext
│○ .deletingtext
│○ .glowingtext
│○ .blackpinkstyle
│○ .underwatertext
│○ .logomaker
│○ .papercutstyle
│○ .cartoonstyle
│○ .watercolortext
│○ .effectclouds
│○ .blackpinklogo
│○ .gradienttext
│○ .summerbeach
│○ .luxurygold
│○ .multicoloredneon
│○ .sandsummer
│○ .galaxywallpaper
│○ .1917style
│○ .makingneon
│○ .royaltext
│○ .freecreate
│○ .galaxystyle
│○ .lighteffects
│
╰❒

╭─❒ 「 *NSFW MENU* 」
│
│○ .cry
│○ .kill
│○ .hug
│○ .pat
│○ .lick
│○ .kiss
│○ .bite
│○ .yeet
│○ .neko
│○ .bully
│○ .bonk
│○ .wink
│○ .poke
│○ .nom
│○ .slap
│○ .smile
│○ .awoo
│○ .wave
│○ .blush
│○ .smug
│○ .glomp
│○ .happy
│○ .dance
│○ .cringe
│○ .cuddle
│○ .highfive
│○ .shinobu
│○ .megumin
│○ .handhold
│○ .loli-waifu
│○ .hentaivid
│○ .trap
│○ .hentai-neko
│○ .gasm
│○ .hentai-waifu
│○ .milf
│○ .ahegao
│○ .bdsm
│○ .ass
│○ .blowjob
│○ .cuckold
│○ .eba
│○ .cum
│○ .ero
│○ .foot
│○ .femdom
│○ .glasses
│○ .gangbang
│○ .hentai
│○ .jahy
│○ .manga
│○ .masturbation
│○ .neko-hentai
│○ .nsfwloli
│○ .neko-hentai2
│○ .orgy
│○ .panties
│○ .pussy
│○ .thights
│○ .tentacles
│○ .yuri
│○ .zettai
│○ .gifblowjob
│○ .gifhentai
│
╰❒

╭─❒ 「 *COGAN MENU* 」 
│
│○ .wuyifan
│○ .suga
│○ .parkchanyeol
│○ .ohsehun
│○ .luhan
│○ .kimtaehyung
│○ .kimseok
│○ .kimnanjoon
│○ .kimminseok
│○ .kimjunmyeon
│○ .kimjong
│○ .kimjondae
│○ .jungkook
│○ .jimin
│○ .jhope
│○ .huangzitao
│○ .dohkyungsoo
│○ .baekhyung
│
╰❒

╭─❒ 「 *LOGO MENU* 」
│
│○ .horror
│○ .game8bit
│○ .layered
│○ .glitch2
│○ .cool-graffiti
│○ .cool-wall-graffiti
│○ .realistic
│○ .space3d
│○ .glitch-tiktok
│○ .stone
│○ .marvel
│○ .marvel2
│○ .metal-rose-gold
│○ .pornhub
│○ .avengers
│○ .metal-rainbow
│○ .metal-gold
│○ .metal-galaxy
│○ .lion
│○ .wolf-black-white
│○ .wolf-galaxy
│○ .ninja
│○ .3dsteel
│○ .horror2
│○ .lava
│○ .bagel
│
╰❒

╭─❒ 「 *CERPEN MENU* 」 
│
│○ .cerpen-anak
│○ .cerpen-bahasadaerah
│○ .cerpen-bahasainggris
│○ .cerpen-bahasajawa
│○ .cerpen-bahasasunda
│○ .cerpen-budaya
│○ .cerpen-cinta
│○ .cerpen-cintaislami
│○ .cerpen-cintapertama
│○ .cerpen-cintaromantis
│○ .cerpen-cintasedih
│○ .cerpen-cintasegitiga
│○ .cerpen-cintasejati
│○ .cerpen-galau
│○ .cerpen-gokil
│○ .cerpen-inspiratif
│○ .cerpen-jepang
│○ .cerpen-kehidupan
│○ .cerpen-keluarga
│○ .cerpen-kisahnyata
│○ .cerpen-korea
│○ .cerpen-kristen
│○ .cerpen-liburan
│○ .cerpen-malaysia
│○ .cerpen-mengharukan
│○ .cerpen-misteri
│○ .cerpen-motivasi
│○ .cerpen-nasihat
│○ .cerpen-nasionalisme
│○ .cerpen-olahraga
│○ .cerpen-patahhati
│○ .cerpen-penantian
│○ .cerpen-pendidikan
│○ .cerpen-pengalaman
│○ .cerpen-pengorbanan
│○ .cerpen-penyesalan
│○ .cerpen-perjuangan
│○ .cerpen-perpisahan
│○ .cerpen-persahabatan
│○ .cerpen-petualangan
│○ .cerpen-ramadhan
│○ .cerpen-remaja
│○ .cerpen-rindu
│○ .cerpen-rohani
│○ .cerpen-romantis
│○ .cerpen-sastra
│○ .cerpen-sedih
│○ .cerpen-sejarah
│
╰❒

╭─❒ 「 *PRIMBON MENU* 」
│
│○ .nomorhoki
│○ .artimimpi
│○ .ramalanjodoh
│○ .ramalanjodohbali
│○ .suamiistri
│○ .ramalancinta
│○ .artinama
│○ .cocoknama
│○ .pasangan
│○ .jadiannikah
│○ .sifatusaha
│○ .rejeki
│○ .pekerjaan
│○ .ramalnasib
│○ .penyakit
│○ .artitarot
│○ .fengshui
│○ .haribaik
│○ .harisangar
│○ .harisial
│○ .harinaga
│○ .arahrejeki
│○ .peruntungan
│○ .weton
│○ .sifat
│○ .keberuntungan
│○ .memancing
│○ .masasubur
│○ .shio
│
╰❒

╭─❒ 「 *FUN MENU* 」 
│
│○ .memek
│○ .bego
│○ .goblok
│○ .janda
│○ .perawan
│○ .babi
│○ .tolol
│○ .pinter
│○ .pintar
│○ .asu
│○ .bodoh
│○ .gay
│○ .lesby
│○ .bajingan
│○ .jancok
│○ .anjing
│○ .ngentod
│○ .ngentot
│○ .monyet
│○ .mastah
│○ .newbie
│○ .bangsat
│○ .bangke
│○ .sange
│○ .sangean
│○ .dakjal
│○ .horny
│○ .wibu
│○ .puki
│○ .pantex
│○ .pantek
│○ .setan
│○ .iblis
│○ .cacat
│○ .yatim
│○ .piatu
│○ .checkme
│
╰❒

*NOTE : JIKA MENEMUKAN BUG BISA PM KE OWNER GIANZY YA👮*

`
}

let handler = async (m, { conn }) => {
let helloarie = fs.readFileSync('./mp3/menu.mp3') 
conn.sendFile(m.chat, helloarie, '', '', m, true)
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})