const config = require('../config')
const {cmd , commands} = require('../command')
const os = require('os')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "⛺",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*Hi 👉👈* ${pushname}

╔════════════════◊
║✧ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
║✧ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
║✧ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
║✧ *ᴏᴡɴᴇʀ :* _ꜱʜᴀɴᴜᴡᴀ ɪᴅ_
╚════════════════◊

*Shanuwage Wada Thama Ithin 👨‍💻💥*

╔════════════════◊
║ _*YOUTUBE LINK*_
║ https://www.youtube.com/@shanuwatech
╚════════════════◊
╔════════════════◊
║ _*SHANUWA MD GITHUB REPO*_
║ https://github.com/Dark-Arrow-1/Dark-Arrow-Md
╚════════════════◊
╔════════════════◊
║ _*WHATSAPP GROUP*_
║ https://chat.whatsapp.com/Br3OsfVzPMcF2qPcCWLAw5
╚════════════════◊
╔════════════════◊
║ _*WHATSAPP CHANNEL*_
║ https://whatsapp.com/channel/0029ValzLhUBqbrFa8tMPg3U
╚════════════════◊

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱʜᴀɴᴜᴡᴀ ɪᴅ*
`
return await conn.sendMessage(from,{image: {url: `https://ibb.co/3S9sn8S`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



