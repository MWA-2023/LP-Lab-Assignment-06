-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 04:11 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dob` date DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `gender` enum('M','F','Other') DEFAULT NULL,
  `dept` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `dob`, `mobile`, `gender`, `dept`, `address`) VALUES
(3, 'FM', 'fm99@gmail.com', '@1234', '2023-03-12', '9146665334', '', 'IT', 'Junnar,Pune,Maharashtra'),
(4, 'abc', 'qbc89@gmail.com', '@1234', '2023-03-12', '+91-9146665334', 'M', 'COMP', 'Junnar,Pune,Maharashtra'),
(6, 'shubhamasbe', 'asbeshubham143@gmail.com', '123', '2023-05-31', '+91-08698816985', '', 'COMP', 'Trambakraj building, Pimple Nilakh, panchashil nagar'),
(7, 'shubhamasbe', 'asbeshubham143@gmail.com', '123', '2023-05-31', '+91-08698816985', '', 'COMP', 'Trambakraj building, Pimple Nilakh, panchashil nagar'),
(8, 'shubhamasbe', 'asbeshubham143@gmail.com', '123', '2023-05-31', '+91-08698816985', '', 'COMP', 'Trambakraj building, Pimple Nilakh, panchashil nagar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;