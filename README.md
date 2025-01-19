#Installation

### 1. Clone the repository
Start by cloning this repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository-name.git

### 2. Install Dependencies
Run the command in terminal to install all the dependencies locally

```bash
git clone https://github.com/your-username/your-repository-name.git

### 3. Setup the environment variables
Create a .env file and add environment varibles shown in the .env.example file

### 4. Run the apllication

```bash
node index.js

#Database Setup 
1) Set the name of the database, for example 'news'
Run
```bash
$ mysql -u root -p
to go to mysql profile and enter your password

```bash
CREATE DATABASE news;
to create a Database table name news;

```bash
USE news;
Then go to news

and Creat the table structure
```bash
mysql> CREATE TABLE stories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (title)
); 
 
