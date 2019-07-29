-- migration script --
CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantity int,
    description varchar(255),
    unit_price DECIMAL(10,2) NOT NULL DEFAULT 0.00
);