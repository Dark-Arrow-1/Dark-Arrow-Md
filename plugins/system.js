const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    desc: "Check bot online or no.",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let status = `
═══════════════════◊
_*💥 CHAMOD SYS INFO 💥*_
═══════════════════◊

╔════════════════◊
║❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
║❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
║❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
║❖ *ᴏᴡɴᴇʀ :* _ᴄʜᴀᴍɪᴅ ᴜᴅᴀʏᴀɴɢᴀ_
╚════════════════◊

> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜᴀᴍᴏᴅ ᴜᴅᴀʏᴀɴɢᴀ    
`

    return reply(`${status}`)



}catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })


//__________ping______

cmd({
    pattern: "ping",
    desc: "Check bot online or no.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*pong...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `_*📍DARK-ARROW Speed : ${ping}ms*_` }, { quoted: mek })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})


