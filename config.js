const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SWQjURia#q_ucVJMIClGNAFDRmFs4Fz4gkJYVWJD1ySibRqeepF4",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
