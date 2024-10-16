const axios = require('axios');
const { cmd } = require('../command');

cmd(
  {
    pattern: 'news',
    desc: 'Get the latest news headlines.',
    category: 'other',
    react: '🗞️',
    filename: __filename,
  },
  async (bot, message, args, { from, reply }) => {
    try {
      const apiKey = '0f2c43ab11324578a7b1709651736382';
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey
      );
      const articles = response.data.articles;

      if (!articles.length) {
        return reply('No news articles found.');
      }

      for (let i = 0; i < Math.min(articles.length, 5); i++) {
        const article = articles[i];
        let messageContent =
          '\n🗞️ *' +
          article.title +
          '*\n⚠️ _' +
          article.description +
          '_\n🔗 _' +
          article.url +
          '_\n\n© ᴄʜᴀᴍᴏᴅ ᴜᴅᴀʏᴀɴɢᴀ\n💻 GitHub: github.com/HaCkr-EPZI-public/CuduNona';

        console.log('Article URL:', article.urlToImage);

        if (article.urlToImage) {
          await bot.sendMessage(from, {
            image: { url: article.urlToImage },
            caption: messageContent,
          });
        } else {
          await bot.sendMessage(from, { text: messageContent });
        }
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      reply('Could not fetch news. Please try again later.');
    }
  }
);
