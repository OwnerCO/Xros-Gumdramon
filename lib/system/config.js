/**
  
 * RDG BOTricolors

**/

const fs = require('fs')
const { color } = require('../../lib/myfunc')

//owner
global.owner = ['51960285930']
global.nomerowner = ["51960385930"]

//sticker
global.packname = 'Bublegum'
global.author = 'Gumdramon MD'

// biarin
global.urldb = ''; 

// thumbnail
global.thumurl = "https://files.catbox.moe/afqydo.jpg"
global.thumurl2 = "https://files.catbox.moe/glt7ub.jpg"

//saluran
global.urls = "https://whatsapp.com/channel/0029VauYaRAJZg45fQAoeQ0M"
global.ids = "120363376187287513@newsletter"
global.nems = "© kiyoshiro"

// pterodactyl panel
global.domain = 'https://' // isi domain
global.apikey = 'ptla' // Isi Apikey Plta Lu
global.capikey = 'ptlc' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//messages reply
global.mess = {
    done: '*`[ GUMDRAMON ] : Request completed !`*', 
    owner: '*`[ GUMDRAMON ] : For an owner only`*',
    private: '*`[ GUMDRAMON ] : In Private only`*',
    group: '*`[ GUMDRAMON ] : Only available in group`*',
    wait: '*`[ GUMDRAMON ] : Request processed..`*',
    check: {
    premium: '*`[ GUMDRAMON ] : You not a premium user`*',
    jadibot: '*`[ GUMDRAMON ] : You not a jadibot user`*',
    },
}
global.title = "Gumdramon Digivo-lution"
global.body = "ʀᴏᴀᴅ ᴛᴏ ʀᴀᴍᴀᴅʜᴀɴ"
global.filename = "𝗡𝗔𝗧𝗨𝗥𝗘-𝗦𝗣"
global.jpegfile = "𝗠𝗗 𝗚𝘂𝗺𝗱𝗿𝗮𝗺𝗼𝗻"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
