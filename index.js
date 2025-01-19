const express = require('express');
const getNews = require('./newsscraper')
const db = require('./database')

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/news', async (req, res) => {
    const [results] = await db.execute('SELECT * FROM news ORDER BY created_at DESC');
    res.json(results);
});

app.get('/news/latest', async (req, res) => {
    const [results] = await db.execute(
        'SELECT * FROM news WHERE created_at >= NOW() - INTERVAL 5 MINUTE ORDER BY created_at DESC')
    res.json(results);
});

setInterval(getNews, 1000);

app.listen(PORT);