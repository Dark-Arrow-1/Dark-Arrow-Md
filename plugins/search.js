const { cmd, commands } = require('../command'),
  axios = require('axios'),
  { Buffer } = require('buffer')
cmd(
  {
    pattern: 'yts',
    alias: ['ytsearch'],
    use: '.yts sameer kutti',
    react: '\uD83D\uDD0E',
    desc: 'Search and get details from youtube.',
    category: 'search',
    filename: __filename,
  },
  async (
    _0x919e5c,
    _0x25ac9a,
    _0x372312,
    {
      from: _0x270d7b,
      l: _0x396890,
      quoted: _0x5823a2,
      body: _0x5252fc,
      isCmd: _0xdf4b88,
      umarmd: _0x430315,
      args: _0x548bad,
      q: _0x5bb078,
      isGroup: _0x285ed9,
      sender: _0x586724,
      senderNumber: _0x283424,
      botNumber2: _0x5ac354,
      botNumber: _0x4907dc,
      pushname: _0x50a974,
      isMe: _0x199cc8,
      isOwner: _0x1680ef,
      groupMetadata: _0x26a8fa,
      groupName: _0x14c4d4,
      participants: _0x9d75d2,
      groupAdmins: _0x3acfbf,
      isBotAdmins: _0x67759,
      isAdmins: _0xd48492,
      reply: _0x32fbc8,
    }
  ) => {
    try {
      if (!_0x5bb078) {
        return _0x32fbc8('*Please give me words to search*')
      }
      try {
        let _0x1d1e4c = require('yt-search')
        var _0x51e06d = await _0x1d1e4c(_0x5bb078)
      } catch (_0xe7ce41) {
        return (
          _0x396890(_0xe7ce41),
          await _0x919e5c.sendMessage(
            _0x270d7b,
            { text: '*Error !!*' },
            { quoted: _0x25ac9a }
          )
        )
      }
      var _0x3f3797 = ''
      _0x51e06d.all.map((_0x13ab69) => {
        _0x3f3797 +=
          ' *\uD83C\uDF38' +
          _0x13ab69.title +
          '*\n\uD83D\uDD17 ' +
          _0x13ab69.url +
          '\n\n'
      })
      await _0x919e5c.sendMessage(
        _0x270d7b,
        { text: _0x3f3797 },
        { quoted: _0x25ac9a }
      )
    } catch (_0xe7730f) {
      _0x396890(_0xe7730f)
      _0x32fbc8('*Error !!*')
    }
  }
)
const GOOGLE_API_KEY = 'AIzaSyDebFT-uY_f82_An6bnE9WvVcgVbzwDKgU',
  GOOGLE_CX = '45b94c5cef39940d1'
cmd(
  {
    pattern: 'img',
    alias: ['image'],
    desc: 'Search and send images from Google.',
    react: '\uD83D\uDDBC️',
    category: 'media',
    filename: __filename,
  },
  async (
    _0x19c707,
    _0x40dd7d,
    _0x5ad0ca,
    {
      from: _0x3b389b,
      quoted: _0x53b3d9,
      body: _0x2ec6f2,
      isCmd: _0x23f2d6,
      command: _0x4f6f2c,
      args: _0x30b462,
      q: _0x25a2c6,
      isGroup: _0x328918,
      sender: _0x1c1c07,
      senderNumber: _0x42c4a6,
      botNumber2: _0x597493,
      botNumber: _0x44c164,
      pushname: _0x54efa6,
      isMe: _0xbf78b3,
      isOwner: _0x3b8d97,
      groupMetadata: _0x29b250,
      groupName: _0x15e6a7,
      participants: _0x14d044,
      groupAdmins: _0x255f51,
      isBotAdmins: _0x202b70,
      isAdmins: _0x170134,
      reply: _0xea95ac,
    }
  ) => {
    try {
      if (!_0x25a2c6) {
        return _0xea95ac('Please provide a search query for the image.')
      }
      const _0x17c6ab = encodeURIComponent(_0x25a2c6),
        _0x56951c =
          'https://www.googleapis.com/customsearch/v1?q=' +
          _0x17c6ab +
          '&cx=' +
          GOOGLE_CX +
          '&key=' +
          GOOGLE_API_KEY +
          '&searchType=image&num=5',
        _0x5a0510 = await axios.get(_0x56951c),
        _0x4a8ec5 = _0x5a0510.data
      if (!_0x4a8ec5.items || _0x4a8ec5.items.length === 0) {
        return _0xea95ac('No images found for your query.')
      }
      for (let _0x4be3c5 = 0; _0x4be3c5 < _0x4a8ec5.items.length; _0x4be3c5++) {
        const _0x49183a = _0x4a8ec5.items[_0x4be3c5].link,
          _0x259b0c = await axios.get(_0x49183a, {
            responseType: 'arraybuffer',
          }),
          _0x324da9 = Buffer.from(_0x259b0c.data, 'binary')
        await _0x19c707.sendMessage(
          _0x3b389b,
          {
            image: _0x324da9,
            caption:
              '\n*\uD83D\uDC97Image ' +
              (_0x4be3c5 + 1) +
              ' from your search!\uD83D\uDC97*\n\n *Enjoy these images! \uD83D\uDC7E*\n\n>Asᴍᴏᴅᴇᴜs Eᴘᴢɪ',
          },
          { quoted: _0x40dd7d }
        )
      }
    } catch (_0x57e9fe) {
      console.error(_0x57e9fe)
      _0xea95ac('Error: ' + _0x57e9fe.message)
    }
  }
)
