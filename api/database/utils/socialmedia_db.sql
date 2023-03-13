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
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  KEY `postId_idx` (`postId`),
  CONSTRAINT `comment_postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (10,'Peaceful location','2023-01-18 20:45:00',16,17),(11,'Omfg...','2023-01-18 22:04:44',12,19),(12,'Looks nice','2023-01-18 22:06:22',13,17),(13,':D','2023-01-18 22:07:36',14,21),(14,'D:','2023-01-18 22:07:40',14,20),(15,'Yes sir','2023-01-18 22:08:06',14,19),(16,'Mario chomped...','2023-01-18 22:08:15',14,18),(17,'holly Molly','2023-01-18 22:08:41',14,17),(18,'That\'s a good one','2023-03-13 13:18:18',15,22),(19,'Nice picture','2023-01-18 22:10:54',15,21),(20,'is that... KapPython?','2023-01-18 22:11:20',15,20),(21,'y ahora','2023-01-18 22:18:00',15,21),(22,'uum','2023-01-18 22:45:21',14,24),(23,'What a joke','2023-01-18 22:46:38',12,24),(24,'Suturittsu','2023-01-18 22:46:48',12,23),(25,'Looks pretty nice','2023-03-13 13:18:18',12,22),(26,'Huge improvements','2023-03-13 13:18:18',12,20),(27,'Does it works?','2023-03-13 13:18:18',12,21);
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follows`
--

LOCK TABLES `follows` WRITE;
/*!40000 ALTER TABLE `follows` DISABLE KEYS */;
INSERT INTO `follows` VALUES (12,11,11),(13,11,11),(14,11,11),(15,11,11),(17,13,11),(18,13,14),(19,13,16),(20,12,15),(21,12,14),(22,12,13),(23,14,11),(24,14,13),(25,14,15),(26,15,11),(27,15,12),(28,15,14);
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (11,13,17),(12,14,19),(13,14,17),(14,15,23),(15,15,21),(16,15,20),(17,14,24),(18,12,24),(19,12,23);
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
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (17,16,'Good morning','https://images.pexels.com/photos/236171/pexels-photo-236171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56'),(18,12,'Mountains','https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56'),(19,12,'Sasha it\'s you?','https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56'),(20,14,'Computers','https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56'),(21,14,'Montains','https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg','2023-03-13 13:16:56'),(22,15,'Yea brah','https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56'),(23,15,'Rap is the Poetry of the streets','https://images.pexels.com/photos/730981/pexels-photo-730981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56'),(24,14,'Whattabout na?','https://images.pexels.com/photos/3229452/pexels-photo-3229452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56'),(25,11,'Lamuerrrrrte','https://images.pexels.com/photos/12228827/pexels-photo-12228827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-13 13:16:56');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
INSERT INTO `stories` VALUES (1,12,'1674080900640street.jpg'),(2,14,'1674082522742cover02.jpg'),(3,15,'1674080439928av02.jpeg'),(4,16,'1674080324817cover01.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'FNC','fc@gmail.com','$2a$10$JkYTaBxnTg9yHvqH.DCd1u01PpRgGGuLInZpXgd.mf/PmR1RTabBe','Tina Tao','05.jpg','https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','WRTFFF','www.exampuru.com'),(12,'FNC2','fc2@gmail.com','$2a$10$IB7r0vNBSWpzcRNvZYL7duVACWR6X8uO4F6.dGjP8wGRInfRF/yoK','Fede','01.jpg','https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','US','www.example.com'),(13,'FNC3','fc3@gmail.com','$2a$10$vnt1DhDN3Ed9I0q7IfIu.eTpfo8/2qoqdDgtSbRFBp2bNmazFvKuC','Dahler Mehndi','02.jpg','https://images.pexels.com/photos/2994869/pexels-photo-2994869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Mubahdyayad','www.truluktruluk.dadada'),(14,'FNC4','fc4@gmail.com','$2a$10$YIddeie3CubsDNbqwTJ0HeGbylzFpVTpeMjI3jqd71iYXjChjVFQi','Sasha Grey','https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png','https://images.pexels.com/photos/3522693/pexels-photo-3522693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','NY','www.sasha.com'),(15,'FNC5','fc5@gmail.com','$2a$10$rVrbmrey6FpCmYZBT0z.QOhjK4EePBvT2LBky0gdVtInz1XNtr4M.','Cecille Williams','03.jpg','https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Bronx','www.bbb.com'),(16,'FNC6','fc6@gmail.com','$2a$10$Ht5jaFt9P5n6/Lhbwd813uFt30dpg6x80KBEm8KYeItR5JTViU1HG','Micky V','04.jpg','https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','dasd','ddddddsss');
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

-- Dump completed on 2023-03-13 13:18:55
