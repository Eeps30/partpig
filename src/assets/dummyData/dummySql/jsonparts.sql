-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 26, 2018 at 06:22 AM
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
-- Database: `teampptest`
--

-- --------------------------------------------------------

--
-- Table structure for table `jsonparts`
--

CREATE TABLE `jsonparts` (
  `ID` mediumint(9) NOT NULL,
  `sellerID` int(20) NOT NULL,
  `listingID` int(50) NOT NULL,
  `make` varchar(80) DEFAULT NULL,
  `modelName` char(120) DEFAULT NULL,
  `year` date DEFAULT NULL,
  `title` varchar(80) DEFAULT NULL,
  `price` mediumint(9) DEFAULT NULL,
  `partCondition` enum('New','Like New','Good','Fair') DEFAULT NULL,
  `mileage_used` mediumint(9) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `categories` varchar(200) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `images` varchar(200) DEFAULT NULL,
  `data` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jsonparts`
--

INSERT INTO `jsonparts` (`ID`, `sellerID`, `listingID`, `make`, `modelName`, `year`, `title`, `price`, `partCondition`, `mileage_used`, `purchase_date`, `categories`, `description`, `images`, `data`) VALUES
(1, 1, 1, 'Subaru', 'XV Crosstrek', '2015-03-29', '4 Subaru Stock Wheels', 500, 'Like New', 5, NULL, '[\r\n				\"Tires\",\r\n				\"Rims\",\r\n				\"Wheels\",\r\n				\"Crosstrek\",\r\n				\"Impreza\",\r\n				\"Outback\",\r\n				\"Subaru\",\r\n				\"Parts\"\r\n			]', '\"Hello!I have 4 stock wheels from my 2014 Crosstrek that I took off a few months after buying and stashed in the garage when I upgraded to different wheels.\"', '[\r\n				\"../images/part1/subaruWheelsMain1.jpg\",\r\n				\"../images/part1/subaruWheels2.jpg\",\r\n				\"../images/part1/subarWheels3.jpg\",\r\n				\"../images/part1/subarWheels4.jpg\"\r\n			]', NULL),
(3, 2, 2, 'Subaru', 'Impreza WRX STI', '2014-03-05', 'Brembo Brake Calipers', 1200, 'Like New', 15, NULL, '[\r\n				\"Tires\",\r\n				\"Rims\",\r\n				\"Wheels\",\r\n				\"Crosstrek\",\r\n				\"Impreza\",\r\n				\"Outback\",\r\n				\"Subaru\",\r\n				\"Parts\"\r\n			]', '\"These brake calipers were removed from my 2017 ', ' [\r\n				\"../images/part2/part2a.jpg\",\r\n				\"../images/part2/part2b.jpg\",\r\n				\"../images/part2/part2c.jpg\",\r\n				\"../images/part2/part2d.jpg\",\r\n				\"../images/part2/part2e.jpg\"\r\n			]', NULL),
(4, 3, 3, 'Subaru', 'Impreza WRX STI', '2014-03-20', 'OEM STI Control Arms', 1200, 'Good', 45, NULL, '[\r\n				\"Tires\",\r\n				\"Rims\",\r\n				\"Wheels\",\r\n				\"Crosstrek\",\r\n				\"Impreza\",\r\n				\"Outback\",\r\n				\"Subaru\",\r\n				\"Parts\"\r\n			]', 'These control arms were removed because I upgraded them to cusco control arms', '[\r\n				\"../images/part3/part3a.jpg\",\r\n				\"../images/part3/part3b.jpg\",\r\n				\"../images/part3/part3c.jpg\"\r\n			]', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jsonparts`
--
ALTER TABLE `jsonparts`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jsonparts`
--
ALTER TABLE `jsonparts`
  MODIFY `ID` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
