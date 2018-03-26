-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 25, 2018 at 01:52 AM
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
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(300) NOT NULL,
  `part_condition` enum('Excellent','Good','Fair') DEFAULT NULL,
  `status` enum('In stock','Out of stock','Backordered') NOT NULL,
  `brand` varchar(30) NOT NULL,
  `make` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `year` year(4) NOT NULL,
  `seller_id` mediumint(8) UNSIGNED NOT NULL,
  `buyer_id` mediumint(8) UNSIGNED NOT NULL,
  `part_number` varchar(40) NOT NULL,
  `sku` varchar(40) NOT NULL,
  `price_usd` decimal(10,3) NOT NULL,
  `msrp_usd` decimal(10,3) NOT NULL,
  `weight_lb` decimal(9,4) NOT NULL,
  `width_inch` decimal(6,3) NOT NULL,
  `height_inch` decimal(6,3) NOT NULL,
  `depth_inch` decimal(6,3) NOT NULL,
  `insert_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sold_date` datetime NOT NULL,
  `image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `part`
--

INSERT INTO `part` (`id`, `name`, `description`, `part_condition`, `status`, `brand`, `make`, `model`, `year`, `seller_id`, `buyer_id`, `part_number`, `sku`, `price_usd`, `msrp_usd`, `weight_lb`, `width_inch`, `height_inch`, `depth_inch`, `insert_date`, `sold_date`, `image`) VALUES
(1, 'Roctection Hitch Mounted Mud Flaps', 'Access Rockstar Roctection Universal (Fits Most P/Us & SUVs) 80in. Wide Hitch Mounted Mud Flaps', 'Excellent', 'In stock', 'Agricover', 'Toyota', 'Camry', 2018, 1, 3, 'accC100001', 'C100001', 209.250, 279.000, 28.0000, 33.000, 13.000, 5.000, '2018-03-25 01:51:31', '0000-00-00 00:00:00', '');

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
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
