-- migration script --
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    last_name varchar(255),
    email varchar(255),
    password varchar(255),
    role int,
    token varchar(255)
);