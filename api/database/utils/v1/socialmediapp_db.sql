CREATE DATABASE  IF NOT EXISTS `socialmedia_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `socialmedia_db`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: socialmedia_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  KEY `postId_idx` (`postId`),
  CONSTRAINT `comment_postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`),
  CONSTRAINT `comment_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follows`
--

DROP TABLE IF EXISTS `follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follows` (
  `id` int NOT NULL AUTO_INCREMENT,
  `followerUser` int NOT NULL,
  `followedUser` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `followerUser_idx` (`followerUser`),
  KEY `followedUser_idx` (`followedUser`),
  CONSTRAINT `followedUser` FOREIGN KEY (`followedUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `followerUser` FOREIGN KEY (`followerUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follows`
--

LOCK TABLES `follows` WRITE;
/*!40000 ALTER TABLE `follows` DISABLE KEYS */;
INSERT INTO `follows` VALUES (1,2,8),(2,8,2),(3,9,2),(4,9,8);
/*!40000 ALTER TABLE `follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `likes_userId_idx` (`userId`),
  KEY `likes_postId_idx` (`postId`),
  CONSTRAINT `likes_postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,8,'Nos llena de orgullo y satisfacción anunciar que nuestro último trabajo HOGAR se encuentra disponible al módico precio de 10 euros en el Bar Sanatorio y a cambio te ponen una caña pagada por tí. Ea.','https://images.unsplash.com/photo-1672643195976-225a511ce2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80\'','2023-01-11 06:05:19'),(3,9,'Mismo sitio y distintos momentos. Conciertos en la antigua Sala Goya y en La Mecánica. Diseño de Alberto Bizarro.','https://images.unsplash.com/photo-1672659382440-5a030f208eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80','2023-01-12 01:03:27'),(4,9,'El próximo sábado 12 de Noviembre, a las 12 de la mañana os espero en el Museo de Jaén  en el cierre del \"Ciclo A Solas\", que une música y colecciones.','https://images.unsplash.com/photo-1672651158855-f225fe553b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80','2023-01-12 04:10:01'),(5,2,'Proximo concierto al aire libre a 2 cuadras del estadio de Argentinos Juniors','https://images.unsplash.com/photo-1672659878782-5862ce1d70d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80','2023-01-12 10:30:31'),(6,8,'Probando 1, 2, 3...canelones, chichuline...','https://images.unsplash.com/photo-1619719304744-2858f324351c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','2023-01-12 11:30:31'),(7,9,'loque sea','https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80','2023-01-12 16:34:01'),(8,2,'Probando la nueva app de la red social. Estamos probando la funcionalidad de los posts. Esperamos terminar pronto y seguir avanzando','https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80','2023-01-12 16:01:31');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `stories_userId_idx` (`userId`),
  CONSTRAINT `stories_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cover` varchar(300) DEFAULT 'https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png',
  `avatar` varchar(300) DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  `city` varchar(45) DEFAULT NULL,
  `website` varchar(75) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Johhny V','johnnyvargas@gmail.com','$2a$10$Hkw/mhiToyJO27JOOKNdQusSPVdZ2xLQ5g17eG8nkFcCP/q83cury','Johnny Vargas','https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80','https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',NULL,NULL),(8,'Marito','mario@gmail.com','$2a$10$jlO6eVc1tng75AKT8LJYguMZtuBnSLek.CgpVySHKmKBeDvHxC0fC','Mario Das Neves','https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png','https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',NULL,NULL),(9,'FNC','fc@gmail.com','$2a$10$sFJo92g4rToUAjJAnrKgEuBsC6nzBDfI6f4MQJ/04946BGovsC8n2','Fede Craviotto','https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png','https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-12 16:52:52
