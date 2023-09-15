-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-09-2023 a las 20:46:59
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bomberos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bomberos`
--

CREATE TABLE `bomberos` (
  `idBomberos` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `idIncendio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bomberos`
--

INSERT INTO `bomberos` (`idBomberos`, `nombre`, `telefono`, `idIncendio`) VALUES
(2, 'El agua que no vez', '555555555', 2),
(3, 'Apaga fuegos', '111111111', 3),
(4, 'El barrio helado', '222222222', 4),
(5, 'Bororo', '333333333', 5),
(6, 'Las ratas rojas', '333333333', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `causa`
--

CREATE TABLE `causa` (
  `idCausa` int(11) NOT NULL,
  `causaGeneral` varchar(100) NOT NULL,
  `causaEspecifica` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `causa`
--

INSERT INTO `causa` (`idCausa`, `causaGeneral`, `causaEspecifica`) VALUES
(1, 'Actividades humanas', 'Accidente de transcito'),
(3, 'Actividades humanas', 'Quema no controlada de vegetación'),
(4, 'Condiciones climáticas desfavorables', 'Quema no controlada de vegetación'),
(5, 'Actividades humanas', 'Fallo mecánico en maquinaria'),
(6, 'Condiciones climáticas desfavorables', 'Quema no controlada de vegetación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incendio`
--

CREATE TABLE `incendio` (
  `idIncendio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  `idReporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incendio`
--

INSERT INTO `incendio` (`idIncendio`, `fecha`, `hora`, `area`, `idReporte`) VALUES
(2, '2023-09-16', '14:34', '4000 km', 2),
(3, '2023-09-17', '16:00', '3000 km', 6),
(4, '2023-09-18', '18:20', '35050 km', 4),
(5, '2023-09-19', '20:10', '1230 km', 5),
(6, '2023-09-15', '12:30', '30537 km', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participacion`
--

CREATE TABLE `participacion` (
  `idParticipacion` int(11) NOT NULL,
  `participacionBomberos` varchar(100) NOT NULL,
  `idCausa` int(11) NOT NULL,
  `idBomberos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `participacion`
--

INSERT INTO `participacion` (`idParticipacion`, `participacionBomberos`, `idCausa`, `idBomberos`) VALUES
(2, 'Mala', 4, 2),
(3, 'Se quemo mi casa', 3, 3),
(4, 'Inacectable', 4, 4),
(5, 'Buena labor', 5, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `idReporte` int(11) NOT NULL,
  `informante` varchar(100) NOT NULL,
  `zona` varchar(100) NOT NULL,
  `peligro` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reporte`
--

INSERT INTO `reporte` (`idReporte`, `informante`, `zona`, `peligro`) VALUES
(1, 'Juan Mauricio Alvarez', 'Puertochico', 'Peligro de luz'),
(2, 'Juan Mauricio Alvarez', 'Puertochico', 'Peligro de luz'),
(4, 'Juan Mario Alvarez', 'Puertochico', 'Peligro de luz'),
(5, 'Alejandra Herrera', 'Peñacastillo', 'Riesgo Ordinario'),
(6, 'Dulce Quiñonez', 'Alisal', 'Peligro de luz'),
(7, 'Pedro Chavarria', 'Nueva montaña', 'Riesgo ordinario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bomberos`
--
ALTER TABLE `bomberos`
  ADD PRIMARY KEY (`idBomberos`),
  ADD KEY `idIncendio` (`idIncendio`);

--
-- Indices de la tabla `causa`
--
ALTER TABLE `causa`
  ADD PRIMARY KEY (`idCausa`);

--
-- Indices de la tabla `incendio`
--
ALTER TABLE `incendio`
  ADD PRIMARY KEY (`idIncendio`),
  ADD KEY `idReporte` (`idReporte`);

--
-- Indices de la tabla `participacion`
--
ALTER TABLE `participacion`
  ADD PRIMARY KEY (`idParticipacion`),
  ADD KEY `idCausa` (`idCausa`),
  ADD KEY `idBomberos` (`idBomberos`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`idReporte`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bomberos`
--
ALTER TABLE `bomberos`
  MODIFY `idBomberos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `causa`
--
ALTER TABLE `causa`
  MODIFY `idCausa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `incendio`
--
ALTER TABLE `incendio`
  MODIFY `idIncendio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `participacion`
--
ALTER TABLE `participacion`
  MODIFY `idParticipacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `idReporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bomberos`
--
ALTER TABLE `bomberos`
  ADD CONSTRAINT `bomberos_ibfk_1` FOREIGN KEY (`idIncendio`) REFERENCES `incendio` (`idIncendio`);

--
-- Filtros para la tabla `incendio`
--
ALTER TABLE `incendio`
  ADD CONSTRAINT `incendio_ibfk_1` FOREIGN KEY (`idReporte`) REFERENCES `reporte` (`idReporte`);

--
-- Filtros para la tabla `participacion`
--
ALTER TABLE `participacion`
  ADD CONSTRAINT `participacion_ibfk_1` FOREIGN KEY (`idCausa`) REFERENCES `causa` (`idCausa`),
  ADD CONSTRAINT `participacion_ibfk_2` FOREIGN KEY (`idBomberos`) REFERENCES `bomberos` (`idBomberos`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
