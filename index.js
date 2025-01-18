const express = require('express');
const getNews = require('./newsscraper')
const db = require('./database')

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/news', (req, res) => {
    db.query('SELECT * FROM news', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error')
        }
        res.json(results);
    })
})

app.get('/news/latest', (req, res) => {
    db.query('SELECT * FROM news WHERE created_at >= NOW() - INTERVAL 5 MINUTE ORDER BY created_at DESC', (err, results) => {
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error')
            }
            res.json(results);
        }
    })
})

setInterval(getNews, 60000);

app.listen(PORT);