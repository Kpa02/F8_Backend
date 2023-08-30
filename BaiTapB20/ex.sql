CREATE DATABASE database_03_kien;
use database_03_kien;
CREATE TABLE `product_attributes_add` (
  `id` int PRIMARY KEY NOT NULL auto_increment,
  `color` varchar(20) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `Screen` varchar(20) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `products_attributes` (
  `id` int PRIMARY KEY NOT NULL auto_increment,
  `code` char(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cost` float NOT NULL,
  `price` float NOT NULL,
  `description` text,
  `quantity` int,
  `user_manual` text,
  `product_properties_id` int NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `product_infor` (
  `id` int PRIMARY KEY NOT NULL auto_increment,
  `product_id` int NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `products` ADD FOREIGN KEY (`product_properties_id`) REFERENCES `product_properties` (`id`);

ALTER TABLE `product_infor` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

INSERT INTO product_properties(color, brand, Screen, created_at, updated_at)
VALUES("White", "Apple", "IPS_LCD", NOW(), NOW());
INSERT INTO product_properties(color, brand, Screen, created_at, updated_at)
VALUES("White", "Apple", "OLED", NOW(), NOW());
INSERT INTO product_properties(color, brand, Screen, created_at, updated_at)
VALUES("White", "Apple", "OLED", NOW(), NOW());

INSERT INTO products(code, name, cost, price, description, quantity, user_manual, product_properties_id, created_at, updated_at)
VALUES("IP11W", "Iphone 11 ", 11990000, 18900000, "Bản 64G", 5, "Unbox", 1, NOW(), NOW());
INSERT INTO products(code, name, cost, price, description, quantity, user_manual, product_properties_id, created_at, updated_at)
VALUES("IP12W", "Iphone 12", 17990000, 15490000, "Bản 64G", 10, "Unbox", 2, NOW(), NOW());
INSERT INTO products(code, name, cost, price, description, quantity, user_manual, product_properties_id, created_at, updated_at)
VALUES("IP13W", "Iphone 13 ", 18990000, 16990000, "Bản 64G", 15, "Unbox", 3, NOW(), NOW());

SELECT * FROM products;
SELECT * FROM product_properties WHERE id = 2;  
SELECT * FROM products WHERE quantity != 0; 