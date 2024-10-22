const config = require('../config');
const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');

cmd(
  { on: 'body' },
  async (messageHandler, message, originalMessage, { from: sender, body: messageBody, isOwner }) => {
    const pussyFilePath = path.join(__dirname, '../media/pussy.json');
    const pussyData = JSON.parse(fs.readFileSync(pussyFilePath, 'utf8'));

    for (const key in pussyData) {
      if (messageBody.toLowerCase() === key.toLowerCase() && config.AUTO_VOICE === 'true') {
        await messageHandler.sendMessage(
          sender,
          {
            image: { url: pussyData[key] },
            caption: '> Created By SHANUWA ID',
          },
          { quoted: originalMessage }
        );
      }
    }
  }
);

cmd(
  { on: 'body' },
  async (messageHandler, message, originalMessage, { from: sender, body: messageBody, isOwner }) => {
    const blowjobFilePath = path.join(__dirname, '../media/blowjob.json');
    const blowjobData = JSON.parse(fs.readFileSync(blowjobFilePath, 'utf8'));

    for (const key in blowjobData) {
      if (messageBody.toLowerCase() === key.toLowerCase() && config.AUTO_VOICE === 'true') {
        await messageHandler.sendMessage(
          sender,
          {
            image: { url: blowjobData[key] },
            caption: '> Created By CHAMOD UDAYANGA',
          },
          { quoted: originalMessage }
        );
      }
    }
  }
);
