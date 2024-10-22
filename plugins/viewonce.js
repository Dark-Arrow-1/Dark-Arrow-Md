const { cmd, commands } = require('../command');
const config = require('../config');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  jsonformat,
} = require('../lib/functions');

const viewOnceCommand = {
  pattern: 'vv',
  react: '😂',
  desc: 'To ViewOnceMessage',
  category: 'convert',
  use: '.vv',
  filename: __filename,
};

cmd(viewOnceCommand, async (bot, message, chatData, options) => {
  const {
    from,
    prefix,
    l,
    quoted,
    body,
    isCmd,
    command,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    reply,
  } = options;

  try {
    const quotedMessage = message.msg.contextInfo.quotedMessage.viewOnceMessageV2;

    if (quotedMessage) {
      if (quotedMessage.message.imageMessage) {
        console.log('Image ViewOnce Message Detected');
        let caption = quotedMessage.message.imageMessage.caption;
        let mediaPath = await bot.downloadAndSaveMediaMessage(quotedMessage.message.imageMessage);
        const media = { url: mediaPath };
        const response = { image: media, caption };
        return bot.sendMessage(from, response);
      }

      if (quotedMessage.message.videoMessage) {
        let caption = quotedMessage.message.videoMessage.caption;
        let mediaPath = await bot.downloadAndSaveMediaMessage(quotedMessage.message.videoMessage);
        const media = { url: mediaPath };
        const response = { video: media, caption };
        return bot.sendMessage(from, response);
      }
    }

    if (!message.quoted) {
      return message.reply('```Please reply to a View Once message```');
    }

    if (message.quoted.mtype === 'viewOnceMessage') {
      console.log('ViewOnce Message Detected');
      if (message.quoted.message.imageMessage) {
        let caption = message.quoted.message.imageMessage.caption;
        let mediaPath = await bot.downloadAndSaveMediaMessage(message.quoted.message.imageMessage);
        const media = { url: mediaPath };
        const response = { image: media, caption };
        return bot.sendMessage(from, response);
      }

      if (message.quoted.message.videoMessage) {
        let caption = message.quoted.message.videoMessage.caption;
        let mediaPath = await bot.downloadAndSaveMediaMessage(message.quoted.message.videoMessage);
        const media = { url: mediaPath };
        const response = { video: media, caption };
        return bot.sendMessage(from, response);
      }
    } else {
      return message.reply('```This is not a View Once message```');
    }

    const reaction = {
      text: '✅',
      key: message.key,
    };
    const reactMessage = { react: reaction };
    await bot.sendMessage(from, reactMessage);
  } catch (error) {
    reply('*Error !!*');
    l(error);
  }
});
