-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 26, 2018 at 06:34 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `partpig_test_lz`
--

-- --------------------------------------------------------

--
-- Table structure for table `part`
--

CREATE TABLE `part` (
  `id` int(10) UNSIGNED NOT NULL,
  `part_name` varchar(50) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `part_condition` tinyint(3) UNSIGNED DEFAULT NULL,
  `status` enum('For sale','In storage','Sold','Shipped') NOT NULL,
  `brand` varchar(30) DEFAULT NULL,
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
  `weight_lb` decimal(9,4) DEFAULT NULL,
  `width_inch` decimal(6,3) DEFAULT NULL,
  `height_inch` decimal(6,3) DEFAULT NULL,
  `depth_inch` decimal(6,3) DEFAULT NULL,
  `original_purchase_date` date DEFAULT NULL,
  `insert_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sold_date` datetime NOT NULL,
  `image` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `part`
--

INSERT INTO `part` (`id`, `part_name`, `description`, `part_condition`, `status`, `brand`, `make`, `model`, `year`, `seller_id`, `listing_ID`, `buyer_id`, `part_number`, `sku`, `price_usd`, `msrp_usd`, `weight_lb`, `width_inch`, `height_inch`, `depth_inch`, `original_purchase_date`, `insert_date`, `sold_date`, `image`) VALUES
(1, 'Roctection Hitch Mounted Mud Flaps', 'Access Rockstar Roctection Universal (Fits Most P/Us & SUVs) 80in. Wide Hitch Mounted Mud Flaps', 1, '', 'Agricover', 'Toyota', 'Camry', 2018, 1, NULL, 3, 'accC100001', 'C100001', 209.250, 279.000, 28.0000, 33.000, 13.000, 5.000, NULL, '2018-03-25 01:51:31', '0000-00-00 00:00:00', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `part`
--
ALTER TABLE `part`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `part`
--
ALTER TABLE `part`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
