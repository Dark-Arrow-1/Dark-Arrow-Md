const axios = require('axios'),
  { cmd } = require('../command'),
  config = require('../config')
cmd(
  {
    pattern: 'movie',
    desc: 'Fetch detailed information about a movie.',
    category: 'other',
    react: '\uD83C\uDFAC',
    filename: __filename,
  },
  async (
    _0x33d569,
    _0x472717,
    _0xf04331,
    {
      from: _0x5b173f,
      quoted: _0x4f15ad,
      body: _0x22e8bd,
      isCmd: _0x4504fd,
      command: _0x2cad6e,
      args: _0x12d6af,
      q: _0x5499cb,
      isGroup: _0x4504f5,
      sender: _0xe2c6f4,
      senderNumber: _0x4062ec,
      botNumber2: _0x56fcee,
      botNumber: _0x480a0c,
      pushname: _0x6af419,
      isMe: _0x49b0db,
      isOwner: _0x3b481e,
      groupMetadata: _0x24cc56,
      groupName: _0xd7a7cd,
      participants: _0x3c7edb,
      groupAdmins: _0x3e2104,
      isBotAdmins: _0x5da72b,
      isAdmins: _0x9c3c4e,
      reply: _0x499792,
    }
  ) => {
    try {
      const _0xb4a354 = _0x12d6af.join(' ')
      if (!_0xb4a354) {
        return _0x499792('\uD83D\uDCFD️ Please provide the name of the movie.')
      }
      const _0x702b7f =
          'http://www.omdbapi.com/?t=' +
          encodeURIComponent(_0xb4a354) +
          '&apikey=' +
          config.OMDB_API_KEY,
        _0x1f641f = await axios.get(_0x702b7f),
        _0x53845f = _0x1f641f.data
      if (_0x53845f.Response === 'False') {
        return _0x499792('\uD83D\uDEAB Movie not found.')
      }
      const _0x4ee668 =
          '\n\uD83C\uDFAC *Movie Information* \uD83C\uDFAC\n\n\uD83C\uDFA5 *Title:* ' +
          _0x53845f.Title +
          '\n\uD83D\uDCC5 *Year:* ' +
          _0x53845f.Year +
          '\n\uD83C\uDF1F *Rated:* ' +
          _0x53845f.Rated +
          '\n\uD83D\uDCC6 *Released:* ' +
          _0x53845f.Released +
          '\n\u23F3 *Runtime:* ' +
          _0x53845f.Runtime +
          '\n\uD83C\uDFAD *Genre:* ' +
          _0x53845f.Genre +
          '\n\uD83C\uDFAC *Director:* ' +
          _0x53845f.Director +
          '\n\u270D️ *Writer:* ' +
          _0x53845f.Writer +
          '\n\uD83C\uDFAD *Actors:* ' +
          _0x53845f.Actors +
          '\n\uD83D\uDCDD *Plot:* ' +
          _0x53845f.Plot +
          '\n\uD83C\uDF0D *Language:* ' +
          _0x53845f.Language +
          '\n\uD83C\uDDFA\uD83C\uDDF8 *Country:* ' +
          _0x53845f.Country +
          '\n\uD83C\uDFC6 *Awards:* ' +
          _0x53845f.Awards +
          '\n\u2B50 *IMDB Rating:* ' +
          _0x53845f.imdbRating +
          '\n\uD83D\uDDF3️ *IMDB Votes:* ' +
          _0x53845f.imdbVotes +
          '\n',
        _0x1acc3e =
          _0x53845f.Poster && _0x53845f.Poster !== 'N/A'
            ? _0x53845f.Poster
            : config.ALIVE_IMG
      await _0x33d569.sendMessage(
        _0x5b173f,
        {
          image: { url: _0x1acc3e },
          caption: _0x4ee668 + '\n> ꜱʜᴀɴʜᴡᴀ ɪᴅ',
        },
        { quoted: _0x472717 }
      )
    } catch (_0x568897) {
      console.log(_0x568897)
      _0x499792('\u274C Error: ' + _0x568897.message)
    }
  }
)
