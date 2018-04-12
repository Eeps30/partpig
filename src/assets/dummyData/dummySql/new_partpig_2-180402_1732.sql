-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 04, 2018 at 12:31 AM
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
-- Database: `new_partpig_2-180402`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(10) UNSIGNED NOT NULL,
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

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `subcategory_id`, `specifications`) VALUES
(3, 'Exhaust', 0, NULL),
(4, 'Springs', 0, NULL),
(5, 'Wheels', 0, NULL),
(6, 'accessories', 0, NULL),
(7, 'fuel and air', 0, NULL),
(8, 'body', 0, NULL),
(9, 'brakes', 0, NULL),
(10, 'suspension', 0, NULL);

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
  `part_id` int(10) UNSIGNED NOT NULL,
  `cost` decimal(10,3) UNSIGNED NOT NULL,
  `status` enum('Order Received','Order being processed','Shipped','Delayed','Transaction complete') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_meta`
--

CREATE TABLE `order_meta` (
  `id` int(10) UNSIGNED NOT NULL,
  `buyer_id` int(10) UNSIGNED NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `count` smallint(5) UNSIGNED NOT NULL,
  `total` decimal(10,3) UNSIGNED NOT NULL,
  `tax` decimal(10,3) NOT NULL,
  `status` enum('Order received','Order being processed','Shipped','Delayed','Transaction complete') NOT NULL,
  `address_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `part`
--

CREATE TABLE `part` (
  `id` int(10) UNSIGNED NOT NULL,
  `part_name` varchar(50) NOT NULL,
  `description` text,
  `part_condition` enum('1 -- Heavily used','2 -- Mediumly used','3 -- Fair','4 -- Good','5 -- Like New') NOT NULL,
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
  `original_purchase_date` date DEFAULT NULL,
  `listed_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sold_date` datetime DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `part_data` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `part`
--

INSERT INTO `part` (`id`, `part_name`, `description`, `part_condition`, `status`, `brand`, `make`, `model`, `year`, `seller_id`, `listing_ID`, `buyer_id`, `part_number`, `sku`, `price_usd`, `msrp_usd`, `original_purchase_date`, `listed_date`, `sold_date`, `image`, `part_data`) VALUES
(1, 'Roctection Hitch Mounted Mud Flaps', 'Access Rockstar Roctection Universal (Fits Most P/Us & SUVs) 80in. Wide Hitch Mounted Mud Flaps', '1 -- Heavily used', '', 'Agricover', 'Toyota', 'Camry', 2018, 1, NULL, 3, 'accC100001', 'C100001', 209.250, 279.000, NULL, '2018-03-25 01:51:31', '0000-00-00 00:00:00', '', NULL),
(2, 'Catback Exhaust and Mufflers', '2015 SUBARU IMPREZA WRX STI SEDAN OEM CATBACK EXHAUST w/ MUFFLERS. Taken off at 27k miles. $160 obo. SERIOUS BUYERS ONLY\r\n    ', '', 'For sale', 'OEM', 'Subaru', 'Impreza WRX STI', 2015, 2, NULL, NULL, 'V0384111928', NULL, 160.000, NULL, '2016-05-13', '2018-04-03 01:28:47', '0000-00-00 00:00:00', '[\r\n        \"images/part1/part1a.jpg\",\r\n        \"images/part1/part1b.jpg\",\r\n    ]', NULL),
(4, 'Lowering springs', 'Complete set, rears are complete with shock/strut still assembled, Just unbolt and swap. Fronts are just the springs, go onto your stock struts.', '', 'Shipped', 'Tein', 'Subaru', 'Impreza WRX STI', 2008, 3, NULL, NULL, 'V0384641728', NULL, 110.000, NULL, '2009-03-19', '2018-04-03 01:36:47', '0000-00-00 00:00:00', '[\r\n        \"images/part2/part2a.jpg\",\r\n        \"images/part2/part2b.jpg\",\r\n        \"images/part2/part2c.jpg\",\r\n        \"images/part2/part2d.jpg\",\r\n    ]', NULL),
(6, '17x7 ENKEI OZ F1 CUP Wheels', 'Legit OZ F1 CUP wheels, repainted. Made in Italy. 17x7 - 4x100/4x114. No curb rash, dings or dents.\r\n', '', 'Sold', 'ENKEI', 'Honda', 'Civic', 2012, 4, NULL, NULL, 'V0389644871', NULL, 330.000, NULL, '2013-05-07', '2018-04-03 01:43:42', '0000-00-00 00:00:00', '[\r\n        \"images/part3/part3a.jpg\",\r\n        \"images/part3/part3b.jpg\",\r\n        \"images/part3/part3c.jpg\",\r\n        \"images/part3/part3d.jpg\",\r\n    ]', NULL),
(7, 'Volkswagen Jetta/Golf O.E.M. Instrument-Cluster', 'This is an original VW OEM. part. Fits 1999-2001 Jettas & Golfs. 160m.p.h. speedometer. O.E.M. part# is : 1J0 920 905JX. These are selling on eBay for between $550.- to $650. Price negotiable(cash or trade)\r\n', '', 'In storage', 'OEM', 'Volkswagen', 'Jetta', 1999, 5, NULL, NULL, '1J0 920 905JX', NULL, 85.000, NULL, '1999-02-17', '2018-04-03 01:43:42', '0000-00-00 00:00:00', NULL, NULL),
(8, 'Catalytic Converter Front Pipe', 'OEM Mazda Part - 3.0 L Mazda 6 front pipe converter. Year 2003 to 2005. New.', '', 'For sale', 'OEM', 'Mazda', 'Mazda 6', 2003, 2, NULL, NULL, 'V0389244137', NULL, 189.000, NULL, '2014-02-16', '2018-04-03 01:52:06', NULL, '[\r\n        \"images/part1/image1.jpg\",\r\n        \"images/part1/image2.jpg\",\r\n        \"images/part1/image3.jpg\"\r\n    ]', NULL),
(9, '2017 Jeep Wrangler OEM Font Rear Bumper', 'I\'m selling OEM front and rear bumper for $80. Front bumper has a dent at right corner. Serious buyer only.', '', 'Sold', 'OEM', 'Jeep', 'Wrangler', 2017, 4, NULL, NULL, 'V0365294691', NULL, 80.000, NULL, '2016-11-21', '2018-04-03 01:52:06', NULL, '[\r\n        \"images/part2/image1.jpg\"\r\n    ]', NULL),
(10, 'BMW 335i injectors 6', 'BMW 335i E92 set of 6 working injectors 3 of them are index 11 and the other 3 are index 10. No issues with them. Asking $300, call or text.', '', 'For sale', 'OEM', 'BMW', '335i', 2015, 5, NULL, NULL, 'V0311542693', NULL, 300.000, NULL, '2015-03-21', '2018-04-03 02:00:41', NULL, '[\r\n        \"images/part3/image1.jpg\",\r\n        \"images/part3/image2.jpg\",\r\n        \"images/part3/image3.jpg\",\r\n        \"images/part3/image4.jpg\"\r\n    ]', NULL),
(11, '2002 Mercedes Benz ml320 driver side headlight', '2002 Mercedes Benz ml320 driver side headlight will fit from 2002 to 2005 also will fit ml430, asking $149.99. Call or text.', '', 'In storage', 'OEM', 'Mercedes', 'ml320', 2002, 4, NULL, NULL, 'MB2503114', NULL, 149.990, NULL, '2002-09-18', '2018-04-03 02:00:41', NULL, '[\r\n        \"images/part4/image1.jpg\",\r\n        \"images/part4/image2.jpg\",\r\n        \"images/part4/image3.jpg\",\r\n        \"images/part4/image4.jpg\"\r\n    ]', NULL);

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
  `id` int(10) UNSIGNED NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `billing_address_id` int(10) UNSIGNED NOT NULL,
  `shipping_address_id` int(10) UNSIGNED NOT NULL,
  `phone_number` varchar(20) NOT NULL,
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

INSERT INTO `user` (`id`, `user_name`, `password`, `email`, `first_name`, `last_name`, `billing_address_id`, `shipping_address_id`, `phone_number`, `rating`, `facebook_link`, `create_date`, `lastBadLogin`, `badLoginAttempts`, `rights`, `status`) VALUES
(1, 'user1', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', 'user1@partpig.com', 'Andy', 'Anderson', 1, 1, '(949)-111-1111', 3.65, '', '2018-04-03 12:02:57', '2018-04-03 12:02:57', 0, 255, 'active'),
(2, 'user2', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', '3@3.com', 'Charlie', 'Charles', 3, 3, '333-333-3333', 4.90, '', '2018-04-02 19:04:54', '0000-00-00 00:00:00', 0, 0, 'active'),
(3, 'user2', '35f70aa4378db2f783ccf575e2f6ce0cf5545aca', 'user2@partpig.com', 'Bobby', 'Barclay', 2, 2, '(949)-222-2222', 4.65, '', '2018-03-24 18:48:47', '0000-00-00 00:00:00', 0, 0, 'active');

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
-- Indexes for table `order_meta`
--
ALTER TABLE `order_meta`
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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `api_spec`
--
ALTER TABLE `api_spec`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_meta`
--
ALTER TABLE `order_meta`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `part`
--
ALTER TABLE `part`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
