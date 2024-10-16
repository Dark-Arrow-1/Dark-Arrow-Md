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
║✧ *ᴏᴡɴᴇʀ :* _ᴄʜᴀᴍᴏᴅ ᴜᴅᴀʏᴀɴɢᴀ_
╚════════════════◊

*Chamodge Wada Thama Ithin 👨‍💻💥*

╔════════════════◊
║ _*YOUTUBE LINK*_
║ https://youtube.com/@sl_dark_arrow_team?si=OYYmH7Ynh6efTOQS
╚════════════════◊
╔════════════════◊
║ _*SHANUWA MD GITHUB REPO*_
║ https://github.com/Dark-Arrow-1/Dark-Arrow-Md
╚════════════════◊
╔════════════════◊
║ _*WHATSAPP GROUP*_
║ https://chat.whatsapp.com/E1jrDVskd8k2NqJvfQ0Iqt
╚════════════════◊
╔════════════════◊
║ _*WHATSAPP CHANNEL*_
║ https://whatsapp.com/channel/0029VarcuQjIyPtYfUvAz62F
╚════════════════◊

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜᴀᴍᴏᴅ ᴜᴅᴀʏᴀɴɢᴀ*
`
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/HCFM5BV.jpeg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



