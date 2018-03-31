-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 31, 2018 at 06:25 AM
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
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `street` varchar(50) NOT NULL,
  `unit_number` varchar(10) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `state_abbr` varchar(4) NOT NULL,
  `zipcode` varchar(12) NOT NULL,
  `country` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `street`, `unit_number`, `city`, `state`, `state_abbr`, `zipcode`, `country`) VALUES
(1, 'Main street', '101', 'Irvine', 'California', 'CA', '92617', 'USA'),
(3, '1st street', '202', 'Irvine', 'California', 'CA', '92618', 'USA');

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
  `subcategory_id` int(10) UNSIGNED NOT NULL,
  `specifications` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `url` varchar(300) NOT NULL,
  `alt` varchar(50) NOT NULL,
  `part_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `name`, `url`, `alt`, `part_id`) VALUES
(1, '99-04 JDM Subaru Legacy BH5 Manual Trans Axle', 'https://i.ebayimg.com/images/g/74EAAOSw53NY~ea5/s-l300.jpg', 'Subaru Legacy BH5 Manual Trans Axle', 2);

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

-- --------------------------------------------------------

--
-- Table structure for table `part_category`
--

CREATE TABLE `part_category` (
  `part_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `billing_address_id` mediumint(8) UNSIGNED NOT NULL,
  `shipping_address_id` mediumint(8) UNSIGNED NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `rating` decimal(3,2) UNSIGNED NOT NULL,
  `facebook_link` varchar(80) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`, `password`, `email`, `first_name`, `last_name`, `billing_address_id`, `shipping_address_id`, `phone_number`, `rating`, `facebook_link`, `create_date`) VALUES
(1, 'user1', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', 'user1@partpig.com', 'Andy', 'Anderson', 1, 1, '(949)-111-1111', 3.65, '', '2018-03-25 00:58:15'),
(3, 'user2', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', 'user2@partpig.com', 'Bobby', 'Barclay', 2, 2, '(949)-222-2222', 4.65, '', '2018-03-25 01:48:47');

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
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `part`
--
ALTER TABLE `part`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `part_category`
--
ALTER TABLE `part_category`
  ADD PRIMARY KEY (`part_id`);

--
-- Indexes for table `seller_spec`
--
ALTER TABLE `seller_spec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `api_spec`
--
ALTER TABLE `api_spec`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `part`
--
ALTER TABLE `part`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `part_category`
--
ALTER TABLE `part_category`
  MODIFY `part_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `seller_spec`
--
ALTER TABLE `seller_spec`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
