const cheerio = require("cheerio");
const db = require('./database');
const axios = require('axios');

async function getNews() {
    const responce = await axios.get('https://news.ycombinator.com/')
    const $ = cheerio.load(responce.data);

    const newsarticles = [];

    $('.athing').each((index, element) => {
        const title = $(element).find('.titleline > a').text();
        const url = $(element).find('.titleline > a').attr('href');
        const rank = $(element).find('.rank').text();

        newsarticles.push({
            title,
            url,
            rank
        })
    })

    for (const story of newsarticles) {
        await db.execute(
            'INSERT INTO news (title, url, `rank`, created_at) VALUES (?, ?, ?, NOW()) ON DUPLICATE KEY UPDATE `rank` = VALUES(`rank`)',
            [story.title, story.url, story.rank]
        );
    } (err, results) => {
        if (err) {
            console.error(err);
        }
        console.log(results);
    }
}

module.exports = getNews