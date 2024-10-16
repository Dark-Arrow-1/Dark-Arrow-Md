const { cmd } = require('../command')
cmd(
  {
    pattern: 'hack',
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: 'fun',
    react: '\uD83D\uDCBB',
    filename: __filename,
  },
  async (
    _0x119791,
    _0x5b5f5a,
    _0x17d000,
    {
      from: _0x17df4c,
      quoted: _0x261a37,
      body: _0x2e25b2,
      isCmd: _0x1b8ba5,
      command: _0x51976c,
      args: _0xb58a1f,
      q: _0x5e8c2d,
      isGroup: _0x2a7f90,
      sender: _0x2dd9c4,
      senderNumber: _0x4b8e81,
      botNumber2: _0x49a9d3,
      botNumber: _0x450892,
      pushname: _0x1a8b72,
      isMe: _0x514ba7,
      isOwner: _0x21ee35,
      groupMetadata: _0x14c6e4,
      groupName: _0x205b87,
      participants: _0x461ffe,
      groupAdmins: _0x550fdb,
      isBotAdmins: _0x528281,
      isAdmins: _0x4dc5e2,
      reply: _0x397f72,
    }
  ) => {
    try {
      const _0x1be32a = [
        '\uD83D\uDCBB *HACK STARTING...* \uD83D\uDCBB',
        '',
        '*Initializing hacking tools...* \uD83D\uDEE0️',
        '*Connecting to remote servers...* \uD83C\uDF10',
        '',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 10%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 20%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 30%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 40%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 50%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 60%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 70%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 80%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 90%``` \u23F3',
        '```[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%``` \u2705',
        '',
        '\uD83D\uDD12 *System Breach: Successful!* \uD83D\uDD13',
        '\uD83D\uDE80 *Command Execution: Complete!* \uD83C\uDFAF',
        '',
        '*\uD83D\uDCE1 Transmitting data...* \uD83D\uDCE4',
        '_\uD83D\uDD75️‍\u2642️ Ensuring stealth..._ \uD83E\uDD2B',
        '*\uD83D\uDD27 Finalizing operations...* \uD83C\uDFC1',
        '',
        '\u26A0️ *Note:* All actions are for demonstration purposes only.',
        '\u26A0️ *Reminder:* Ethical hacking is the only way to ensure security.',
        '',
        '> *ASMODEUS_EPZI-HACKING-COMPLETE \u2623*',
      ]
      for (const _0x3566fa of _0x1be32a) {
        await _0x119791.sendMessage(
          _0x17df4c,
          { text: _0x3566fa },
          { quoted: _0x5b5f5a }
        )
        await new Promise((_0x2db55e) => setTimeout(_0x2db55e, 1000))
      }
    } catch (_0x4e5d9d) {
      console.log(_0x4e5d9d)
      _0x397f72('\u274C *Error:* ' + _0x4e5d9d.message)
    }
  }
)
