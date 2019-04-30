/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : eggjwt

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2019-04-30 16:32:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `name` varchar(255) DEFAULT NULL COMMENT '角色名',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='角色';

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '用户密码',
  `phone` int(11) DEFAULT NULL COMMENT '手机号码',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `sex` int(1) NOT NULL DEFAULT '0' COMMENT '0:男，1:女',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
