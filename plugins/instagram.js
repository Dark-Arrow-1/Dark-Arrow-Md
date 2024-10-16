const { cmd, commands } = require('../command'),
  { igdl } = require('ruhend-scraper')
cmd(
  {
    pattern: 'ig',
    desc: 'To download instagram videos.',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x2fe4ec,
    _0x58fe66,
    _0x21917d,
    {
      from: _0x48c737,
      quoted: _0x3ba77f,
      body: _0x3324bc,
      isCmd: _0x5683e3,
      command: _0x47a9b7,
      args: _0x5719b8,
      q: _0x3f085e,
      isGroup: _0x10c5be,
      sender: _0x143c57,
      senderNumber: _0x717fa8,
      botNumber2: _0xe253c6,
      botNumber: _0x375397,
      pushname: _0x1339a2,
      isMe: _0x5a4232,
      isOwner: _0x1f8cc1,
      groupMetadata: _0x39e51b,
      groupName: _0x1f6d03,
      participants: _0x3863eb,
      groupAdmins: _0x51c00e,
      isBotAdmins: _0x458b42,
      isAdmins: _0x2a8ab6,
      reply: _0x33ee8c,
    }
  ) => {
    try {
      if (!_0x5719b8[0]) {
        return _0x33ee8c('*`Please give a waild Instagram link`*')
      }
      await _0x21917d.react('\uD83D\uDD52')
      let _0x4bcb6d
      try {
        _0x4bcb6d = await igdl(_0x5719b8[0])
      } catch (_0x30be9d) {
        return _0x33ee8c('*`Error obtaining data.`*')
      }
      let _0x2886b = _0x4bcb6d.data
      if (!_0x2886b || _0x2886b.length === 0) {
        return _0x33ee8c('*`No result found.`*')
      }
      let _0x25a433
      try {
        _0x25a433 = _0x2886b.find(
          (_0x2d45a7) => _0x2d45a7.resolution === '720p (HD)'
        )
      } catch (_0x2ec04a) {
        return _0x33ee8c('*`Error data loss.`*')
      }
      if (!_0x25a433) {
        return _0x33ee8c('*`No data found.`*')
      }
      await _0x21917d.react('\u2705')
      let _0x26de95 = _0x25a433.url,
        _0x1d3ac2 =
          '\xA9 SHANUWA MD Instagram Downloader | Download with ease, cherish forever.'
      try {
        await _0x2fe4ec.sendMessage(
          _0x21917d.chat,
          {
            video: { url: _0x26de95 },
            caption: _0x1d3ac2,
            fileName: 'ig.mp4',
            mimetype: 'video/mp4',
          },
          { quoted: _0x21917d }
        )
      } catch (_0x503c5f) {
        return _0x33ee8c('*`Error download video.`*')
        await _0x21917d.react('\u274C')
      }
    } catch (_0x58a9e1) {
      console.log(_0x58a9e1)
      _0x33ee8c('' + _0x58a9e1)
    }
  }
)
