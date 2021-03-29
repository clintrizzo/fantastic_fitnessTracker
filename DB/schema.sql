DROP DATABASE IF EXISTS fantastic_fitnesstracker_db;
CREATE DATABASE fantastic_fitnesstracker_db;
USE fantastic_fitnesstracker_db;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(50),
email VARCHAR(100) NOT NULL,
pass_word VARCHAR(256) NOT NULL
);


CREATE TABLE condition_fitness (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(50),
  exercise VARCHAR(50) NOT NULL,
  distance INT NOT NULL,
  user_number INT UNSIGNED NOT NULL
  REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE strength_fitness (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  user_name VARCHAR(50) NOT NULL,
  exercise VARCHAR(50) NOT NULL,
  weight INT NOT NULL,
  sets INT NOT NULL,
  reps INT NOT NULL,
  rest INT NOT NULL,
  user_number INT UNSIGNED NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

