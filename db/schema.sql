CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id) 
);