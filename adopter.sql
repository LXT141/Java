/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80036
Source Host           : localhost:3306
Source Database       : javawork

Target Server Type    : MYSQL
Target Server Version : 80036
File Encoding         : 65001

Date: 2024-06-07 11:06:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for adopter
-- ----------------------------
DROP TABLE IF EXISTS `adopter`;
CREATE TABLE `adopter` (
  `AdopterId` int NOT NULL,
  `adopterName` varchar(255) DEFAULT NULL,
  `animalId` int NOT NULL,
  `animalName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
