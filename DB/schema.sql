DROP DATABASE IF EXISTS fantastic_fitnesstracker_db;
CREATE DATABASE fantastic_fitnesstracker_db;

USE fantastic_fitnesstracker_db


CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL ,
  user_name VARCHAR(50) NOT NULL,
  pass_word VARCHAR(256) NOT NULL,
  PRIMARY KEY (user_name)
);


CREATE TABLE condition_fitness (
  id INT AUTO_INCREMENT NOT NULL ,
  user_name VARCHAR(50) NOT NULL,
  exercise VARCHAR(50) NOT NULL,
  distance INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_user_name
  FOREIGN_KEY (user_name)
    REFERENCES users(user_name)
);