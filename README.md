
News Scraper Backend
## About 📝
This is a Node.js service to scrape real-time stories from Hacker News

## Tech stack🛠️
-nodejs
\
-mysql
\
-express
\
-Postman

## Installation 🧑🏻‍💻

Run the following commands to setup the project locally

### 1. Codebase Setup
```bash
git clone https://github.com/Vipul-045/NewsScraper.git

npm install 

node index.js
```
### 2. Setup the environment variables
\
Create a .env file and add environment varibles shown in the .env.example file

### 3. Database Setup 
Set the name of the database, for example 'news'
Run
```bash
$ mysql -u root -p
```
to go to mysql profile and enter your password

```bash
CREATE DATABASE news;
```
to create a Database table name news;

```bash
USE news;
```
Then go to news

and Creat the table structure
```bash
mysql> CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    rank INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (title)
); 
```
That's it!!

### 4. Run the GET commands in POSTMAN such as

```bash
localhost:3000/news
```
To get all the news

and 
```bash
localhost:3000/news/latest
```
to get the news from the last 5 minutes
