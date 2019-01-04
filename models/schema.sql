DROP DATABASE IF EXISTS findmyevent_db;
CREATE DATABASE findmyevent_db;


USE findmyevent_db;

CREATE TABLE `events` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `location` VARCHAR( 255 ) NOT NULL,
  `time` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);