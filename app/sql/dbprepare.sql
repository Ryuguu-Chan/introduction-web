DROP DATABASE IF EXISTS introduction_web_db;
CREATE DATABASE introduction_web_db;

USE introduction_web_db;

CREATE TABLE message (
    id INT NOT NULL AUTO_INCREMENT,
    senderNickname VARCHAR(30) NOT NULL,
    senderName VARCHAR(30) NOT NULL,
    senderMessage VARCHAR(1000),
    
    PRIMARY KEY (id)
);

CREATE USER IF NOT EXISTS goku@localhost IDENTIFIED BY 'vegeta';
GRANT INSERT ON introduction_web_db.* TO goku@localhost;