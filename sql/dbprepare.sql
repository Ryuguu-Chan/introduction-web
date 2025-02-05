DROP DATABASE IF EXISTS introduction_web_db;

USE introduction_web_db;

CREATE TABLE message (
    id INT NOT NULL AUTO_INCREMENT,
    senderNickname VARCHAR(30) NOT NULL,
    senderName VARCHAR(30) NOT NULL,
    senderMessage VARCHAR(1000),
    
    PRIMARY KEY (id)
);