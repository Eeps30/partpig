-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 20, 2018 at 03:09 AM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `partpig2`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(10) UNSIGNED NOT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `street_address` varchar(50) NOT NULL,
  `apt_suite` varchar(20) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `state_abbr` varchar(4) NOT NULL,
  `zipcode` varchar(12) NOT NULL,
  `country` varchar(50) NOT NULL DEFAULT 'United States'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `company_name`, `street_address`, `apt_suite`, `city`, `state`, `state_abbr`, `zipcode`, `country`) VALUES
(1, 'PartPig Tech', '4422 Irvine Road', 'apt c', 'Irvine', 'California', 'CA', '92627', 'USA'),
(2, 'a', '2105', 'apartment', 'a', 'aalifornia', 'aA', '1115', 'USA'),
(3, NULL, '3rd street', 'Suite 3003', 'Irvine', 'California', 'CA', '92618', 'USA'),
(4, 'PartPig Tech', '4422 Irvine Road', 'apt c', 'Irvine', 'California', 'CA', '92627', 'USA');

-- --------------------------------------------------------

--
-- Table structure for table `api_spec`
--

CREATE TABLE `api_spec` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `value` decimal(10,3) UNSIGNED NOT NULL,
  `part_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `subcategory_id` int(10) UNSIGNED DEFAULT NULL,
  `specifications` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `subcategory_id`, `specifications`) VALUES
(1, 'engine', NULL, NULL),
(2, 'suspension', NULL, NULL),
(3, 'brakes', NULL, NULL),
(4, 'drivetrain', NULL, NULL),
(5, 'interior', NULL, NULL),
(6, 'exterior', NULL, NULL),
(7, 'wheels and tires', NULL, NULL),
(8, 'other', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `condition`
--

CREATE TABLE `condition` (
  `id` int(10) NOT NULL,
  `part_condition` varchar(80) NOT NULL DEFAULT 'acceptable',
  `subcondition_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `condition`
--

INSERT INTO `condition` (`id`, `part_condition`, `subcondition_id`) VALUES
(1, 'acceptable', NULL),
(2, 'good', NULL),
(3, 'very good', NULL),
(4, 'like new', NULL),
(5, 'new', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `url` varchar(300) NOT NULL,
  `alt` varchar(50) DEFAULT NULL,
  `part_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `name`, `url`, `alt`, `part_id`) VALUES
(1, '99-04 JDM Subaru Legacy BH5 Manual Trans Axle', 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part2/part2a.jpg', 'Subaru Legacy BH5 Manual Trans Axle', 2),
(3, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part2/part2b.jpg', NULL, 2),
(4, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part3/part3a.jpg', NULL, 3),
(5, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part3/part3b.jpg', NULL, 3),
(6, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part3/part3c.jpg', NULL, 3),
(7, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part3/part3d.jpg', NULL, 3),
(8, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part4/part4a.jpg', NULL, 4),
(9, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part4/part4b.jpg', NULL, 4),
(10, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part4/part4c.jpg', NULL, 4),
(11, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part4/part4d.jpg', NULL, 4),
(12, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part5/part5a.jpg', NULL, 5),
(13, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part5/part5b.jpg', NULL, 5),
(14, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part5/part5c.jpg', NULL, 5),
(15, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part5/part5d.jpg', NULL, 5),
(16, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part5/part5e.jpg', NULL, 5),
(17, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part5/part5f.jpg', NULL, 5),
(18, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part6/part6a.jpg', NULL, 6),
(19, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part6/part6b.jpg', NULL, 6),
(20, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part6/part6c.jpg', NULL, 6),
(21, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part7/part7a.jpg', NULL, 7),
(22, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part8/part8a.jpg', NULL, 8),
(23, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part8/part8b.jpg', NULL, 8),
(24, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part8/part8c.jpg', NULL, 8),
(25, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part8/part8d.jpg', NULL, 8),
(26, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part9/part9a.jpg', NULL, 9),
(27, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part9/part9b.jpg', NULL, 9),
(28, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part9/part9c.jpg', NULL, 9),
(29, NULL, 'https://s3.us-east-2.amazonaws.com/teampartpig/images/part9/part9d.jpg', NULL, 9),
(54, 'KEEP OUR MASCOT ALIVE', 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-13/user2/AWS_IMG_1523659610', NULL, 80),
(55, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-13/user2/AWS_IMG_1523660718', NULL, 81),
(56, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-13/user2/AWS_IMG_1523661559', NULL, 82),
(57, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-14/user2/AWS_IMG_1523669647', NULL, 83),
(58, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-14/user2/AWS_IMG_1523669829', NULL, 84),
(59, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-14/user2/AWS_IMG_1523669830', NULL, 85),
(60, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-14/user2/AWS_IMG_1523679281', NULL, 86),
(61, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-14/user2/AWS_IMG_1523730915', NULL, 87),
(62, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-14/user2/AWS_IMG_1523731046', NULL, 88),
(64, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-14/user2/AWS_IMG_1523739486', NULL, 90),
(65, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-15/user2/AWS_IMG_1523757704', NULL, 91),
(66, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-15/user2/AWS_IMG_1523832094', NULL, 92),
(92, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524097315', NULL, 109),
(93, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_1_1524097317', NULL, 109),
(94, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524098529', NULL, 110),
(95, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524101323', NULL, 111),
(96, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524105479', NULL, 112),
(97, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_1_1524105483', NULL, 112),
(98, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524105574', NULL, 113),
(99, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_1_1524105575', NULL, 113),
(100, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524107249', NULL, 114),
(101, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524119674', NULL, 115),
(102, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524119880', NULL, 116),
(103, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-19/user2/AWS_IMG_0_1524163824', NULL, 117),
(104, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_0_1524176969', NULL, 118),
(105, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_1_1524176972', NULL, 118),
(106, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_0_1524177121', NULL, 119),
(107, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_0_1524186373', NULL, 120),
(108, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_1_1524186374', NULL, 120),
(109, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_0_1524187246', NULL, 121),
(110, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_0_1524187251', NULL, 122),
(111, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_0_1524190828', NULL, 123),
(112, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_0_1524192046', NULL, 124),
(113, NULL, 'https://teampartpig.s3.us-east-2.amazonaws.com/images/2018-04-20/anonymous/AWS_IMG_1_1524192047', NULL, 124);

-- --------------------------------------------------------

--
-- Table structure for table `loggedinusers`
--

CREATE TABLE `loggedinusers` (
  `ID` int(10) UNSIGNED NOT NULL,
  `userID` int(10) UNSIGNED NOT NULL,
  `token` varchar(40) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_tracker` varchar(100) DEFAULT NULL,
  `buyer_id` int(10) UNSIGNED DEFAULT NULL,
  `seller_id` int(10) UNSIGNED DEFAULT NULL,
  `part_id` int(10) UNSIGNED NOT NULL,
  `cost` decimal(10,3) UNSIGNED NOT NULL,
  `status` enum('Order Received','Order being processed','Shipped','Delayed','Transaction complete') NOT NULL,
  `transaction_processed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_tracker`, `buyer_id`, `seller_id`, `part_id`, `cost`, `status`, `transaction_processed`) VALUES
(57, NULL, 1, 1, 5, '85.000', 'Transaction complete', '2018-04-17 17:52:09'),
(58, NULL, 1, 3, 7, '85.000', 'Transaction complete', '2018-04-17 17:52:09'),
(60, '5ad63443a0e3c', 2, 1, 6, '189.000', 'Transaction complete', '2018-04-17 17:52:51'),
(61, '5ad63443a0e3c', 2, 2, 8, '300.000', 'Transaction complete', '2018-04-17 17:52:51'),
(63, '5ad634d9617d0', 2, 1, 6, '189.000', 'Transaction complete', '2018-04-17 17:54:32'),
(64, '5ad634d9617d0', 2, 2, 8, '300.000', 'Transaction complete', '2018-04-17 17:54:32'),
(66, '5ad63783aa45f', 1, 2, 85, '99.000', 'Transaction complete', '2018-04-17 18:06:40'),
(67, '5ad637d2ba451', 1, 2, 85, '99.000', 'Transaction complete', '2018-04-17 18:07:59'),
(68, '5ad638400339a', 1, 3, 82, '80.000', 'Transaction complete', '2018-04-17 18:09:49'),
(69, '5ad6409a6dbf1', 1, 1, 87, '1000.000', 'Transaction complete', '2018-04-17 18:45:27'),
(70, '5ad640b6459ba', 1, 1, 87, '1000.000', 'Transaction complete', '2018-04-17 18:45:55'),
(71, '5ad64131b9970', 1, 3, 88, '10000.000', 'Transaction complete', '2018-04-17 18:47:58'),
(72, '5ad67f91950b5', 1, 3, 3, '110.000', 'Transaction complete', '2018-04-17 23:14:07'),
(73, '5ad67f91950b5', 1, 1, 9, '149.990', 'Transaction complete', '2018-04-17 23:14:07'),
(75, '5ad68cf4dd8fb', 1, 2, 92, '20000.000', 'Transaction complete', '2018-04-18 00:11:14'),
(76, '5ad6c00ab586d', 1, 2, 85, '99.000', 'Transaction complete', '2018-04-18 03:48:25'),
(77, '5ad6d5bd06bc7', 1, 3, 82, '80.000', 'Transaction complete', '2018-04-18 05:21:47'),
(78, '5ad6d5bd06bc7', 1, 1, 91, '0.000', 'Transaction complete', '2018-04-18 05:21:47'),
(80, '5ad6d6a603a45', 1, 3, 101, '3.000', 'Transaction complete', '2018-04-18 05:25:40'),
(81, '5ad6d6f15ae03', 1, 2, 81, '0.000', 'Transaction complete', '2018-04-18 05:26:55'),
(82, '5ad6d71dd35ec', 1, 2, 83, '0.000', 'Transaction complete', '2018-04-18 05:27:40'),
(83, '5ad6da820673c', 1, 3, 90, '666.000', 'Transaction complete', '2018-04-18 05:42:08'),
(84, '5ad6dbe1a52bd', 1, 1, 87, '1000.000', 'Transaction complete', '2018-04-18 05:48:00'),
(85, '5ad7a5612c869', 1, 2, 80, '99999.000', 'Transaction complete', '2018-04-18 20:06:55'),
(86, '5ad7a6ad1a1d8', 1, 2, 86, '9876543.000', 'Transaction complete', '2018-04-18 20:12:27'),
(87, '5ad7ab117f58f', 1, 2, 83, '0.000', 'Transaction complete', '2018-04-18 20:31:12'),
(88, '5ad7ab3402d1f', 1, 2, 81, '0.000', 'Transaction complete', '2018-04-18 20:31:46'),
(89, '5ad7ab9f001c3', 1, 2, 85, '99.000', 'Transaction complete', '2018-04-18 20:33:33'),
(90, '5ad7b5a4f082d', 1, 2, 80, '99999.000', 'Transaction complete', '2018-04-18 21:16:19'),
(91, '5ad7b86fd5fbb', 1, 2, 86, '9876543.000', 'Transaction complete', '2018-04-18 21:28:14'),
(92, '5ad7b8958950b', 1, 1, 87, '1000.000', 'Transaction complete', '2018-04-18 21:28:52'),
(93, '5ad7baa91a04a', 1, 2, 81, '0.000', 'Transaction complete', '2018-04-18 21:37:43'),
(94, '5ad7bb1f235ac', 1, 2, 83, '0.000', 'Transaction complete', '2018-04-18 21:39:41'),
(95, '5ad7bb312236b', 1, 2, 85, '99.000', 'Transaction complete', '2018-04-18 21:39:59'),
(96, '5ad7bbe76a610', 1, 3, 7, '85.000', 'Transaction complete', '2018-04-18 21:43:02'),
(97, '5ad7bcd5616f4', 1, 3, 82, '80.000', 'Transaction complete', '2018-04-18 21:47:00'),
(98, '5ad7bd1e826dd', 1, 3, 3, '110.000', 'Transaction complete', '2018-04-18 21:48:13'),
(99, '5ad7bd8370205', 1, 1, 91, '0.000', 'Transaction complete', '2018-04-18 21:49:54'),
(100, '5ad7be315a1b0', 1, 2, 83, '0.000', 'Transaction complete', '2018-04-18 21:52:47'),
(101, '5ad7c3ed8fca8', 1, 1, 91, '0.000', 'Transaction complete', '2018-04-18 22:17:16'),
(102, '5ad7c423ef702', 1, 3, 101, '3.000', 'Transaction complete', '2018-04-18 22:18:10'),
(103, '5ad7c47ccf2f1', 1, 3, 82, '80.000', 'Transaction complete', '2018-04-18 22:19:39'),
(104, '5ad7c4d3bcc4b', 1, 2, 85, '99.000', 'Transaction complete', '2018-04-18 22:21:06'),
(105, '5ad7c51972fd4', 1, 3, 3, '110.000', 'Transaction complete', '2018-04-18 22:22:16'),
(106, '5ad7c52307155', 1, 3, 3, '110.000', 'Transaction complete', '2018-04-18 22:22:25'),
(107, '5ad7c52398423', 1, 3, 3, '110.000', 'Transaction complete', '2018-04-18 22:22:26'),
(108, '5ad7c565f1bab', 1, 2, 81, '0.000', 'Transaction complete', '2018-04-18 22:23:32'),
(109, '5ad7c67df037e', 1, 1, 6, '189.000', 'Transaction complete', '2018-04-18 22:28:12'),
(110, '5ad7c67df037e', 1, 2, 86, '9876543.000', 'Transaction complete', '2018-04-18 22:28:12'),
(112, '5ad7caa91f856', 1, 2, 8, '300.000', 'Transaction complete', '2018-04-18 22:45:59'),
(113, '5ad7cbb73c978', 1, 1, 87, '1000.000', 'Transaction complete', '2018-04-18 22:50:29'),
(114, '5ad7cc3a40a5e', 1, 3, 90, '666.000', 'Transaction complete', '2018-04-18 22:52:40'),
(115, '5ad7ce3a34773', 1, 2, 83, '0.000', 'Transaction complete', '2018-04-18 23:01:12'),
(116, '5ad7ce8580781', 1, 2, 85, '99.000', 'Transaction complete', '2018-04-18 23:02:28'),
(117, '5ad7f9ffee68c', 2, 2, 110, '56.500', 'Transaction complete', '2018-04-19 02:08:46'),
(118, '5ad7fab88ef01', 3, 2, 111, '323.000', 'Transaction complete', '2018-04-19 02:11:03'),
(119, '5ad7fda85394e', 3, 1, 109, '199.990', 'Transaction complete', '2018-04-19 02:23:34'),
(120, '5ad8083962026', 1, 3, 7, '85.000', 'Transaction complete', '2018-04-19 03:08:40'),
(121, '5ad8e525de484', 3, 3, 117, '110.000', 'Transaction complete', '2018-04-19 18:51:16'),
(122, '5ad90fb076239', 3, 1, 87, '1000.000', 'Transaction complete', '2018-04-19 21:52:47'),
(123, '5ad91ad44b2e5', 3, 3, 118, '1.000', 'Transaction complete', '2018-04-19 22:40:18'),
(124, '5ad91ad44b2e5', 3, 3, 119, '334.000', 'Transaction complete', '2018-04-19 22:40:18'),
(126, '5ad9403281e22', 1, 2, 84, '99.000', 'Transaction complete', '2018-04-20 01:19:45'),
(127, '5ad9403281e22', 1, 2, 116, '89.000', 'Transaction complete', '2018-04-20 01:19:45'),
(129, '5ad954b3d3856', 1, 2, 115, '55.000', 'Transaction complete', '2018-04-20 02:47:14');

-- --------------------------------------------------------

--
-- Table structure for table `part`
--

CREATE TABLE `part` (
  `id` int(10) UNSIGNED NOT NULL,
  `part_name` varchar(50) NOT NULL,
  `category_id` smallint(5) UNSIGNED NOT NULL,
  `description` text,
  `part_condition` enum('1','2','3','4','5') NOT NULL DEFAULT '1',
  `status` enum('available','incheckout','sold','shipped','incart','draft','deleted') NOT NULL,
  `brand` varchar(30) DEFAULT 'Other',
  `make` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `year` year(4) NOT NULL,
  `seller_id` int(10) UNSIGNED NOT NULL,
  `listing_ID` varchar(300) DEFAULT NULL,
  `buyer_id` int(10) UNSIGNED DEFAULT NULL,
  `part_number` varchar(40) DEFAULT NULL,
  `sku` varchar(40) DEFAULT NULL,
  `price_usd` decimal(10,3) NOT NULL,
  `msrp_usd` decimal(10,3) DEFAULT NULL,
  `original_purchase_date` date DEFAULT NULL,
  `listed_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sold_date` datetime DEFAULT NULL,
  `part_data` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `part`
--

INSERT INTO `part` (`id`, `part_name`, `category_id`, `description`, `part_condition`, `status`, `brand`, `make`, `model`, `year`, `seller_id`, `listing_ID`, `buyer_id`, `part_number`, `sku`, `price_usd`, `msrp_usd`, `original_purchase_date`, `listed_date`, `sold_date`, `part_data`) VALUES
(2, 'Catback Exhaust and Mufflers', 1, '2015 SUBARU IMPREZA WRX STI SEDAN OEM CATBACK EXHAUST w/ MUFFLERS. Taken off at 27k miles. $1600 obo. SERIOUS BUYERS ONLY', '1', 'incheckout', 'OEM', 'Subaru', 'Impreza WRX STI', 2015, 2, NULL, NULL, 'V038411128', NULL, '1800.000', NULL, '2016-05-13', '2018-04-03 01:28:47', NULL, NULL),
(3, 'Lowering springs', 2, 'Complete set, rears are complete with shock/strut still assembled, Just unbolt and swap. Fronts are just the springs, go onto your stock struts.', '3', 'incheckout', 'Tein', 'Subaru', 'Impreza WRX STI', 2008, 3, NULL, NULL, 'V0384641728', NULL, '110.000', NULL, '2009-03-19', '2018-04-03 01:36:47', NULL, NULL),
(4, '17x7 ENKEI OZ F1 CUP Wheels', 7, 'Legit OZ F1 CUP wheels, repainted. Made in Italy. 17x7 - 4x100/4x114. No curb rash, dings or dents.', '4', 'available', 'ENKEI', 'Honda', 'Civic', 2012, 2, NULL, NULL, 'V0389644871', NULL, '350.000', NULL, '2013-05-07', '2018-04-03 01:43:42', NULL, NULL),
(5, 'Volkswagen Jetta/Golf O.E.M. Instrument-Cluster', 5, 'This is an original VW OEM. part. Fits 1999-2001 Jettas & Golfs. 160m.p.h. speedometer. O.E.M. part# is : 1J0 920 905JX. These are selling on eBay for between $550.- to $650. Price negotiable(cash or trade)\n', '2', 'incheckout', 'OEM', 'Volkswagen', 'Jetta', 1999, 1, NULL, NULL, '1J0 920 905JX', NULL, '85.000', NULL, '1999-02-17', '2018-04-03 01:43:42', NULL, NULL),
(6, 'Catalytic Converter Front Pipe', 1, 'OEM Mazda Part - 3.0 L Mazda 6 front pipe converter. Year 2003 to 2005. New.', '5', 'available', 'OEM', 'Mazda', 'Mazda 6', 2003, 1, NULL, NULL, 'V0389244137', NULL, '189.000', NULL, '2014-02-16', '2018-04-03 01:52:06', NULL, NULL),
(7, '2017 Jeep Wrangler OEM Font Rear Bumper', 6, 'I\'m selling OEM front and rear bumper for $80. Front bumper has a dent at right corner. Serious buyers only.', '1', 'sold', 'OEM', 'Jeep', 'Wrangler', 2017, 3, NULL, NULL, 'V0365294691', NULL, '85.000', NULL, '2016-11-21', '2018-04-03 01:52:06', NULL, NULL),
(8, 'BMW 335i injectors 6', 1, 'BMW 335i E92 set of 6 working injectors 3 of them are index 11 and the other 3 are index 10. No issues with them. Asking $300, call or text.', '2', 'sold', 'OEM', 'BMW', '335i', 2015, 2, NULL, NULL, 'V0311542693', NULL, '300.000', NULL, '2015-03-21', '2018-04-03 02:00:41', NULL, NULL),
(9, '2002 Mercedes Benz ml320 driver side headlight', 6, '2002 Mercedes Benz ml320 driver side headlight will fit from 2002 to 2005 also will fit ml430, asking $149.99. Call or text.', '2', 'available', 'OEM', 'Mercedes', 'ml320', 2002, 1, NULL, NULL, 'MB2503114', NULL, '149.990', NULL, '2002-09-18', '2018-04-03 02:00:41', NULL, NULL),
(80, 'PartPig Mascot', 4, '&amp;quot;Real pig with a mixed past.\';DROP TABLE users\'--', '1', 'available', 'I', '', '', 2000, 2, NULL, NULL, 'Priceless', NULL, '99999.000', NULL, NULL, '2018-04-13 22:46:48', NULL, NULL),
(81, 'testpartHeart', 4, 'There is no description for this part.', '3', 'incheckout', 'Other', '', '', 2000, 2, NULL, NULL, '', NULL, '0.000', NULL, NULL, '2018-04-13 23:05:16', NULL, NULL),
(82, 'Lots of things', 4, 'This is not a real subaru. Its just a stack of pancakes?', '2', 'incheckout', 'Love', 'Subaru', 'Impreza WRX STI', 2008, 3, NULL, NULL, 'PancakesÂ ', NULL, '80.000', NULL, NULL, '2018-04-13 23:19:17', NULL, NULL),
(83, '', 4, 'There is no description for this part.', '2', 'sold', 'Other', '', '', 2000, 2, NULL, NULL, '', NULL, '0.000', NULL, NULL, '2018-04-14 01:34:08', NULL, NULL),
(84, 'Pacman', 4, 'There is no description for this part.', '3', 'sold', 'Perrin', 'Subaru', 'Impreza WRX STI', 2019, 2, NULL, NULL, 'C -----', NULL, '99.000', NULL, NULL, '2018-04-14 01:37:53', NULL, NULL),
(85, 'Pacman', 4, 'There is no description for this part.', '5', 'sold', 'Perrin', 'Subaru', 'Impreza WRX STI', 2019, 2, NULL, NULL, 'C -----', NULL, '99.000', NULL, NULL, '2018-04-14 01:37:54', NULL, NULL),
(86, 'big fat tire', 4, 'so big, so tire', '1', 'deleted', 'Perrin', 'Subaru', 'Impreza WRX STI', 2019, 2, NULL, NULL, 'Verytire-999', NULL, '9843.000', NULL, NULL, '2018-04-14 04:14:49', NULL, NULL),
(87, 'Arcade Machine', 4, 'There is no description for this part.', '4', 'sold', 'The', 'Ferrari', 'Focus', 2019, 1, NULL, NULL, 'ARC4050454', NULL, '1000.000', NULL, NULL, '2018-04-14 18:36:00', NULL, NULL),
(88, 'The Piece of tetris', 4, 'This is Alex\'s favorite piece. Almost priceless. That\'s true, because you can rotate in so many different ways... and the color is so pretty!', '2', 'incheckout', 'Pagination', 'Ferrari', 'Focus', 1904, 3, NULL, NULL, 'wut', NULL, '10000.000', NULL, NULL, '2018-04-14 18:38:09', NULL, NULL),
(90, 'namespacing', 4, 'There is a typo in that code!', '5', 'sold', 'Alex!', '', '', 2000, 3, NULL, NULL, '123456789Â ', NULL, '666.000', NULL, NULL, '2018-04-14 20:58:06', NULL, NULL),
(91, 'FULLSTACK', 4, 'Will Cheng', '2', 'sold', 'Alex', '', '', 1904, 1, NULL, NULL, '1.00', NULL, '0.000', NULL, NULL, '2018-04-15 02:01:45', NULL, NULL),
(92, 'Partpig part pig', 4, 'real fast and dangerous', '1', 'draft', 'Cool', '', '', 2000, 2, NULL, NULL, 'fast', NULL, '20000.000', NULL, NULL, '2018-04-15 22:41:37', NULL, NULL),
(109, 'Arcade', 7, 'Old atari games', '2', 'sold', 'Atari', 'Subaru', 'Impreza', 2008, 1, NULL, NULL, 'ARC4050454', NULL, '199.990', NULL, NULL, '2018-04-19 00:22:44', NULL, NULL),
(110, 'Gosth', 5, 'Booooooooooooo', '1', 'sold', 'Casper', 'Subaru', 'Impreza', 2008, 2, NULL, NULL, 'G3252525252', NULL, '56.500', NULL, NULL, '2018-04-19 00:42:57', NULL, NULL),
(111, 'Test', 1, 'ada', '1', 'sold', 'add', 'Subaru', 'Impreza', 2008, 2, NULL, NULL, 'TRT434092', NULL, '323.000', NULL, NULL, '2018-04-19 01:29:31', NULL, NULL),
(112, 'Updating condition', 6, 'abc', '1', 'available', 'Other', 'Ford', 'Echo', 1999, 3, NULL, NULL, '', NULL, '100.000', NULL, NULL, '2018-04-19 02:38:02', NULL, NULL),
(113, 'More cool parts', 8, 'There is no description for this part.', '4', 'available', 'Other', 'Subaru', 'Impreza WRX STI', 2005, 3, NULL, NULL, '', NULL, '1738.000', NULL, NULL, '2018-04-19 02:39:34', NULL, NULL),
(114, ';lakjeajer', 1, 'There is no description for this part.', '1', 'incheckout', 'Other', 'Toyota', 'Camry', 2001, 1, NULL, NULL, '', NULL, '3543.000', NULL, NULL, '2018-04-19 03:07:28', NULL, NULL),
(115, 'Wheels', 7, 'OOOOOO', '1', 'sold', 'OEM', 'Subaru', 'Impreza WRX STI', 2015, 2, NULL, NULL, 'W3943502', NULL, '55.000', NULL, NULL, '2018-04-19 06:35:23', NULL, NULL),
(116, 'fast', 7, 'asdad', '2', 'sold', 'Michelin', 'Subaru', 'Impreza WRX STI', 2015, 2, NULL, NULL, 'dsf234242', NULL, '89.000', NULL, NULL, '2018-04-19 06:38:48', NULL, NULL),
(117, 'test', 3, 'pig', '3', 'sold', 'Other', 'Toyota', 'Corolla', 2001, 3, NULL, NULL, '', NULL, '110.000', NULL, NULL, '2018-04-19 18:50:27', NULL, NULL),
(118, 'refactor test', 2, 'da', '3', 'sold', 'abc', 'Toyota', 'Camry', 2001, 3, NULL, NULL, 'abc', NULL, '1.000', NULL, NULL, '2018-04-19 22:29:31', NULL, NULL),
(119, 'adf', 1, 'daf', '1', 'sold', '', 'Toyota', 'Camry', 2002, 3, NULL, NULL, 'adf', NULL, '334.000', NULL, NULL, '2018-04-19 22:32:01', NULL, NULL),
(120, 'Test', 1, 'Best thing ever', '2', 'available', 'Perrin', 'Toyota', 'Corolla', 2002, 1, NULL, NULL, '999', NULL, '400.000', NULL, NULL, '2018-04-20 01:06:13', NULL, NULL),
(121, 'New part', 3, 'This part is cool', '3', 'available', 'Dave', 'Toyota', 'Camry', 2001, 1, NULL, NULL, '999', NULL, '99.000', NULL, NULL, '2018-04-20 01:20:49', NULL, NULL),
(122, 'New part', 3, 'This part is cool', '3', 'deleted', 'Dave', 'Toyota', 'Camry', 2001, 1, NULL, NULL, '999', NULL, '99.000', NULL, NULL, '2018-04-20 01:20:54', NULL, NULL),
(123, 'TGV Delete', 1, 'There is no description for this part.', '1', 'available', 'Perrin', 'Subaru', 'Impreza WRX STI', 2005, 1, NULL, NULL, '33314', NULL, '30.000', NULL, NULL, '2018-04-20 02:20:28', NULL, NULL),
(124, 'TGV Delete', 1, 'This was on my car for 10 miles', '3', 'available', 'Perrin', 'Subaru', 'Impreza WRX STI', 2005, 1, NULL, NULL, '931', NULL, '311.000', NULL, NULL, '2018-04-20 02:40:46', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `seller_spec`
--

CREATE TABLE `seller_spec` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `value` decimal(10,3) NOT NULL,
  `part_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `id` int(10) UNSIGNED NOT NULL,
  `buyer_id` int(10) UNSIGNED NOT NULL,
  `part_id` int(10) UNSIGNED NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `count` smallint(5) UNSIGNED NOT NULL,
  `status` enum('Order received','Order being processed','Shipped','Delayed','Transaction complete') NOT NULL,
  `shipping_charge` decimal(10,3) UNSIGNED NOT NULL DEFAULT '10.000'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shoppingcart`
--

INSERT INTO `shoppingcart` (`id`, `buyer_id`, `part_id`, `created`, `count`, `status`, `shipping_charge`) VALUES
(89, 2, 112, '2018-04-19 22:50:40', 1, 'Order received', '9.990');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `billing_address_id` int(10) UNSIGNED NOT NULL,
  `shipping_address_id` int(10) UNSIGNED NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `rating` decimal(3,2) UNSIGNED NOT NULL,
  `facebook_link` varchar(80) NOT NULL,
  `create_date` datetime NOT NULL,
  `lastBadLogin` datetime NOT NULL,
  `badLoginAttempts` tinyint(3) UNSIGNED NOT NULL,
  `rights` tinyint(3) UNSIGNED NOT NULL,
  `status` enum('active','inactive','deleted','joined','banned') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`, `password`, `email`, `first_name`, `middle_name`, `last_name`, `billing_address_id`, `shipping_address_id`, `phone_number`, `rating`, `facebook_link`, `create_date`, `lastBadLogin`, `badLoginAttempts`, `rights`, `status`) VALUES
(1, 'user1', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', 'ehudbengera24@gmail.com', 'Andy', 'A.', 'Anderson', 1, 3, '(949)-111-1111', '3.65', '', '2018-04-03 12:02:57', '2018-04-03 12:02:57', 0, 255, 'active'),
(2, 'user2', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', 'ehudbengera24@gmail.com', 'Charlie', NULL, 'Charles', 2, 2, '333-333-3333', '4.90', '', '2018-04-02 19:04:54', '0000-00-00 00:00:00', 0, 0, 'active'),
(3, 'user3', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', 'ehudbengera24@gmail.com', 'Bobby', 'Buck', 'Barclay', 3, 3, '(949)-222-2222', '4.65', '', '2018-03-24 18:48:47', '0000-00-00 00:00:00', 0, 0, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `oauth_provider` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `oauth_uid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `oauth_provider`, `oauth_uid`, `first_name`, `last_name`, `email`, `gender`, `locale`, `picture`, `link`, `created`, `modified`) VALUES
(1, 'google', '109878340491628367809', 'Brian', 'Morris', 'briantmorr@gmail.com', '', 'en', 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg', '', '2018-04-09 18:26:02', '2018-04-09 18:47:52'),
(2, 'google', '107169402548020804462', 'Brian', 'Morris', 'brianmorris.tech@gmail.com', '', 'en', 'https://lh5.googleusercontent.com/-9to4suHNycA/AAAAAAAAAAI/AAAAAAAAAAg/uIGcv-NcKU8/photo.jpg', '', '2018-04-09 18:34:30', '2018-04-10 01:23:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `api_spec`
--
ALTER TABLE `api_spec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `condition`
--
ALTER TABLE `condition`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loggedinusers`
--
ALTER TABLE `loggedinusers`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `part`
--
ALTER TABLE `part`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_spec`
--
ALTER TABLE `seller_spec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `api_spec`
--
ALTER TABLE `api_spec`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `condition`
--
ALTER TABLE `condition`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;
--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;
--
-- AUTO_INCREMENT for table `part`
--
ALTER TABLE `part`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;
--
-- AUTO_INCREMENT for table `seller_spec`
--
ALTER TABLE `seller_spec`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `shoppingcart`
--
ALTER TABLE `shoppingcart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
