const { Cheerio } = require("cheerio");
const db = require('./database');
const axios = require('axios');

async function getNews() {
    const news = await axios.get('https://news.ycombinator.com/')
    const $ = Cheerio.load(news.data)

    const newslist = [];

    $('.ating').each((index, element) => {
        const title = $(element).find('.titleline > a').text();
        const url = $(element).find('.titleline > a').attr('href');
        const rank = $(element).find('.rank').text();

        newslist.push({
            title,
            url,
            rank
        })
    })

    for(const news of newslist){
        db.query('INSERT INTO news (title, url, rank) VALUES (?, ?, ?)',[news.title, news.url, news.rank], (err, results) => {
            if(err) {
                console.error(err);
            }
            console.log(results);
        })
    }
}

module.exports = getNews