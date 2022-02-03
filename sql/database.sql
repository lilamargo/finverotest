CREATE DATABASE finvero;

CREATE TABLE products(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    price NUMBER(20,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

create table users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(25),
    surname VARCHAR(50),
    age INTEGER,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
);

create table shop(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(25),
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE products, users, shop;

