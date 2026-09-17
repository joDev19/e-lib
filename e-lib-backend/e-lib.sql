-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 17 sep. 2026 à 13:15
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `e-lib`
--

-- --------------------------------------------------------

--
-- Structure de la table `livres`
--

CREATE TABLE `livres` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `date_publication` date NOT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `livres`
--

INSERT INTO `livres` (`id`, `titre`, `auteur`, `date_publication`, `disponible`) VALUES
(1, 'Les Misérables', 'Victor Hugo', '1862-01-01', 1),
(2, 'Le Petit Prince', 'Antoine de Saint-Exupéry', '1943-04-06', 1),
(3, 'L’Étranger', 'Albert Camus', '1942-05-19', 1),
(4, 'Harry Potter à l’école des sorciers', 'J.K. Rowling', '1997-06-26', 1),
(6, 'la tragedi', 'yvan kamdem', '1949-06-08', 1),
(7, 'major', 'alime sophie', '1949-09-01', 1),
(8, 'le fontaine', 'eric courbertin', '1949-10-12', 1),
(9, 'ciam', 'salomon stephane', '1949-06-08', 1),
(10, 'tam-tam', 'le requin blanc', '1949-06-08', 1),
(11, 'ciam', 'jordi', '0000-00-00', 1),
(12, 'ciam', 'jordi', '0000-00-00', 1),
(13, 'ciam', 'jordi', '0000-00-00', 1),
(14, 'ciam', 'jordi', '0000-00-00', 1),
(15, 'ciam', 'jordi', '0000-00-00', 1),
(16, 'ciam', 'jordi', '0000-00-00', 1),
(17, 'exellence', 'alphonce', '0000-00-00', 1),
(18, 'exellence', 'alphonce', '0000-00-00', 1),
(20, 'exellence', 'alphonce', '0000-00-00', 1),
(21, 'exellence', 'alphonce', '0000-00-00', 1),
(22, 'exellence', 'alphonce', '0000-00-00', 1),
(23, 'exellence', 'alphonce', '0000-00-00', 1),
(24, 'exellence', 'alphonce', '0000-00-00', 1),
(25, 'exellence', 'alphonce', '0000-00-00', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `livres`
--
ALTER TABLE `livres`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `livres`
--
ALTER TABLE `livres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
