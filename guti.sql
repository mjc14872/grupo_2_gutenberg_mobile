-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-05-2022 a las 02:15:06
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
--
-- Base de datos: `guti`
--
CREATE DATABASE IF NOT EXISTS `guti` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `guti`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autores`
--

CREATE TABLE `autores` (
  `id` int(11) NOT NULL,
  `nombres` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `autores`
--

INSERT INTO `autores` (`id`, `nombres`, `apellidos`) VALUES
(1, 'Taylor', 'Jenkins Reid'),
(2, 'Alice', 'Oseman'),
(3, 'John', 'Katzenbach'),
(4, 'Rosario', 'Oyhanarte'),
(5, 'Victoria', 'Schwab'),
(6, 'Alice', 'Kellen'),
(7, 'Miguel', 'Ruiz'),
(8, 'María Florencia', 'Freijó'),
(9, 'Flor', 'Salvador'),
(10, 'Mariana', 'Enriquez'),
(11, 'Victoria', 'Resco'),
(12, 'Isabel', 'Allende'),
(13, 'Edith Eva', 'Eger'),
(14, 'Victoria', 'Schwab'),
(15, 'Steve', 'Englehart'),
(16, 'Akane', 'Tamura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `rfc` varchar(45) DEFAULT NULL,
  `cuit` varchar(45) DEFAULT NULL,
  `fecha_orden` varchar(45) DEFAULT NULL,
  `domicilio` varchar(45) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `codigo_postal` int(11) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `clientes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombres` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombres`, `apellidos`, `email`) VALUES
(1, 'CESAR', 'LÓPEZ', 'cesar.lpz@gmail.com'),
(2, 'MARISOL', 'JUÁREZ', 'mju4rez@gmail.com'),
(3, 'KARLA', 'MÉNDEZ', 'karla.mendez@gmail.com'),
(4, 'RAÚL', 'VILLAGÓMEZ', 'rulo.villa@gmail.com'),
(5, 'JULIA', 'MARTÍNEZ', 'sagarpa@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuidad`
--

CREATE TABLE `cuidad` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `estados_id` int(11) DEFAULT NULL,
  `pais_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cuidad`
--

INSERT INTO `cuidad` (`id`, `descripcion`, `estados_id`, `pais_id`) VALUES
(1, 'Barracas', 1, 1),
(2, 'Retiro', 1, 1),
(3, 'Chacarita', 1, 1),
(4, 'Colegiales', 1, 1),
(5, 'Cabildo', 1, 1),
(6, 'Barquisimeto', 7, 2),
(7, 'Tocuyo', 7, 2),
(8, 'Carora', 7, 2),
(9, 'Duaca', 7, 2),
(10, 'Cabudare', 7, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `pais_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `descripcion`, `pais_id`) VALUES
(1, 'CABA', 1),
(2, 'Prov. Buenos Aires', 1),
(3, 'Cordoba', 1),
(4, 'Santa Fe', 1),
(5, 'Tierra del Fuego', 1),
(6, 'Caracas', 2),
(7, 'Lara', 2),
(8, 'Maracay', 2),
(9, 'Velencia', 2),
(10, 'Zulia', 2),
(11, 'Cuidad de Mexico', 3),
(12, 'Jalisco', 3),
(13, 'Yucatan', 3),
(14, 'Guerrero', 3),
(15, 'Oaxaca', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formatos`
--

CREATE TABLE `formatos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `formatos`
--

INSERT INTO `formatos` (`id`, `nombre`) VALUES
(1, 'Rústico'),
(2, 'Fresada'),
(3, 'Cartoné'),
(4, 'Tela'),
(5, 'Blanda o bolsillo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id`, `nombre`) VALUES
(1, 'Ficción'),
(2, 'Novelas'),
(3, 'General'),
(4, 'Comics'),
(5, 'Novela gráfica'),
(6, 'Suspenso'),
(7, 'Salud y desarrollo personal'),
(8, 'Autoayuda'),
(9, 'Humanidades'),
(10, 'Sociología'),
(11, 'Estudios de género'),
(12, 'Literatura juvenil'),
(13, 'Narrativa'),
(14, 'Argentina'),
(15, 'Infantil'),
(16, 'Jóvenes lectores'),
(17, 'Latinoamericana'),
(18, 'Histórica'),
(19, 'Manga');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id`, `nombre`) VALUES
(1, 'ESP'),
(2, 'ING'),
(3, 'POR'),
(4, 'ITA'),
(5, 'FRA'),
(6, 'ALE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `editorial` varchar(45) DEFAULT NULL,
  `precio_unitario` float DEFAULT NULL,
  `descuento` tinyint(1) DEFAULT NULL,
  `bestSeller` tinyint(1) DEFAULT NULL,
  `resenia` text DEFAULT NULL,
  `paginas` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `edicion` int(11) DEFAULT NULL,
  `isbn` int(13) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `imagen` longblob DEFAULT NULL,
  `generos_id` int(11) NOT NULL,
  `idiomas_id` int(11) NOT NULL,
  `formatos_id` int(11) NOT NULL,
  `autores_id` int(11) NOT NULL,
  `medios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `guti`.`libros` 
CHANGE COLUMN `imagen` `imagen` VARCHAR(200) NULL DEFAULT NULL ;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `editorial`, `precio_unitario`, `descuento`, `bestSeller`, `resenia`, `paginas`, `peso`, `edicion`, `isbn`, `cantidad`, `imagen`, `generos_id`, `idiomas_id`, `formatos_id`, `autores_id`, `medios_id`) VALUES
(1, 'LOS 7 MARIDOS DE EVELYN HUGO', 'UMBRIEL', 2195, 1, 0, 'Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. Por qué ella? Por qué ahora ? Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza. Aún ignorando por que Evelyn la ha elegido para escribir su biografía. Monique esta decidida a aprovechar esa oportunidad para dar impulso a su carrera. Convocada al lujoso apartamento de Evelyn, Monique escucha fascinada mientras la actriz le cuenta su historia. Desde su llegada a Los Angeles en los años 50 hasta su decisión de abandonar su carrera en el espectáculo en los 80 - y desde luego, los siete maridos que tuvo en ese tiempo - Evelyn narra una historia de ambición implacable, amistad inesperada y un gran amor prohibido.', 384, 510, 2020, 2147483647, 30, 0x696d67313634373931303530343939302e737667, 1, 1, 1, 1, 1),
(2, 'HEARTSTOPPER', 'VRYA', 3000, 1, 1, 'Charlie y Nick van al mismo colegio; aunque nunca se habían cruzado hasta el día en que los hacen sentarse juntos en su grupo de estudio. Muy pronto se vuelven amigos y más pronto aún Charlie comienza a sentir cosas por Nick; aunque sabe que es un imposible.', 296, 260, 2020, 2147483647, 40, 0x696d67313634373930363632393133372e737667, 1, 1, 1, 2, 2),
(3, 'EL CLUB DE LOS PSICÓPATAS', 'UMBRIEL', 3500, 1, 1, 'Alpha; Bravo; Charlie; Delta y Easy se hacen llamar los Muchachos de Jack; en honor a Jack el Destripador. Entre ellos no se conocen más que por un chat en la Dark Web donde comparten su verdadera pasión: ser artistas del asesinato. Cuando Connor y Niki irrumpen en la intimidad de su chat; la furia de estos psicópatas comienza a crecer y no se detendrán ante nada. Con una inteligencia feroz; los Muchachos de Jack planean como venganza la muerte de los dos adolescentes y sus familias. Sin embargo; Connor y Niki no son como el resto de las víctimas de estos asesinos seriales. La pesadilla comienza y solo hay dos opciones: dejarse cazar o sobrevivir.', 632, 680, 2021, 978846667, 20, 0x696d67313634373930363737393336332e737667, 6, 1, 1, 3, 2),
(4, 'EL LIBRO MAS LINDO DEL MUNDO', 'VERGARA', 2600, 1, 1, 'Elisa está por casarse con el novio ideal; hasta que la lectura de una novela la devuelve como un imán a otros tiempos. Muy a su pesar recuerda -una y otra vez- a un amor que todavía está vivo en ella: Sebastian; aquel cliente enigmático que conoció en Three Loves; la pequeña librería neoyorquina donde ella trabajaba. ¿Cuánto tiempo debe pasar para que las viejas heridas cierren? ¿Olvidamos a una persona en brazos de otra? Elisa cree que la lectura y la pasión la pueden salvar de la tristeza; pero el pasado vuelve a hacerse presente; como un perfume que nos lleva sin escalas al momento justo que creíamos ya superado. El libro más lindo del mundo es una bella historia de amor a través del tiempo; que demuestra que todo lo que amamos se convierte en ficción. Rosario Oyhanarte nos transporta a la ciudad de Nueva York tras el rastro de una trama sorprendente y enamora en cada esquina.', 191, 240, 1999, 950151690, 40, 0x696d67313634373930373132343339312e737667, 2, 1, 1, 4, 2),
(5, 'LA VIDA INVISIBLE', 'UMBRIEL', 2500, 0, 0, 'Una vida que nadie recuerda. Una historia que nunca olvidarás.Tras hacer un pacto con el diablo, Addie entrega su alma a cambio de la inmortalidad. Sin embargo, ningún trato faustiano está exento de consecuencias: el diablo le entregará la inmortalidad que tanto desea, pero le quitará algo que ella anhelará durante toda su existencia: la posibilidad de ser recordada. Addie abandona su pequeño pueblo natal en la Francia del siglo xviii y comienza un viaje que la lleva por todo el mundo, mientras aprende a vivir una vida en la que nadie la recuerda y todo lo que posee acaba perdido o roto. Durante trescientos años, Addie LaRue no será más que la musa de numerosos artistas a lo largo de la historia, y tendrá que aprender a enamorarse de nuevo cada día, y a ser olvidada a la mañana siguiente. Su único compañero en este viaje es su oscuro demonio de hipnóticos ojos verdes, quien la visita cada año en el día del aniversario de su trato. Completamente sola, a Addie no le queda más remedio que enfrentarse a él, comprenderlo y, tal vez, ganarle la partida.', 504, 730, 2021, 978987477, 50, 0x696d67313634373930373032363735332e737667, 5, 1, 1, 5, 1),
(6, 'TODO LO QUE NUNCA FUIMO', 'PLANETA', 2100, 0, 0, 'Primera parte de la bilogía \'Deja que ocurra\' de Alice Kellen:Leah está rota. Leah ya no pinta. Leah es un espejismo desde el accidente que se llevó a sus padres.Axel es el mejor amigo de su hermano mayor y, cuando accede a acogerla en su casa durante unos meses, quiere ayudarla a encontrar y unir los pedazos de la chica llena de color que un día fue. Pero no sabe que ella siempre ha estado enamorada de él, a pesar de que sean casi familia, ni de que toda su vida está a punto de cambiar. Porque ella está prohibida, pero le despierta la piel. Porque es el mar, noches estrelladas y vinilos de los Beatles. Porque a veces basta un «deja que ocurra» para tenerlo todo.', 352, 400, 2021, 978950497, 50, 0x696d67313634373930363932373139372e737667, 2, 1, 1, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios`
--

CREATE TABLE `medios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medios`
--

INSERT INTO `medios` (`id`, `nombre`) VALUES
(1, 'Digital'),
(2, 'Impreso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id`, `descripcion`) VALUES
(1, 'Argentina'),
(2, 'Venezuela'),
(3, 'Mexico'),
(4, 'Colombia'),
(5, 'Chile');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `comedia` tinyint(1) DEFAULT NULL,
  `accion` tinyint(1) DEFAULT NULL,
  `romance` tinyint(1) DEFAULT NULL,
  `infantiles` tinyint(1) DEFAULT NULL,
  `editoriales` tinyint(1) DEFAULT NULL,
  `categoria` varchar(45) DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `novedades` tinyint(1) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `administrador` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `email`, `password`, `comedia`, `accion`, `romance`, `infantiles`, `editoriales`, `categoria`, `image`, `novedades`, `fecha_creacion`, `administrador`) VALUES
(1, 'Liz', 'Moran', 'l@gmail.com', '$2a$10$BYiIUmZn7YWvQpIJ8V4aa.WXD9k9SyjkdBlkQ8', 1, 0, 0, 1, 0, 'publicar libros', 0x696d67313634383432333230353333392e706e67, 1, '2022-04-26', 0),
(2, 'Sarai', 'Franco', 's@gmail.com', '$2a$10$MlUlnSec9r7Jvmi88C/xVuq40lJocG2YuSKbKB', 1, 0, 0, 1, 0, 'leer libros', 0x696d67313634393034303639303634392e706e67, 0, '2022-04-01', 1),
(3, 'Maggi', 'Molina', 'm@gmail.com', '$2a$10$QE9VEmxJF3oQh.dhBGqp8.uzBbRLu7ps9zjNWE', 1, 0, 0, 1, 0, 'publicar libros', 0x696d67313634383432333230353333392e706e67, 0, '2022-04-01', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_carrito_clientes1_idx` (`clientes_id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cuidad`
--
ALTER TABLE `cuidad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cuidad_pais1_idx` (`pais_id`),
  ADD KEY `fk_cuidad_estados1_idx` (`estados_id`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_estados_pais1_idx` (`pais_id`);

--
-- Indices de la tabla `formatos`
--
ALTER TABLE `formatos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_libros_generos_idx` (`generos_id`),
  ADD KEY `fk_libros_idiomas1_idx` (`idiomas_id`),
  ADD KEY `fk_libros_formatos1_idx` (`formatos_id`),
  ADD KEY `fk_libros_autores1_idx` (`autores_id`),
  ADD KEY `fk_libros_medios1_idx` (`medios_id`);

--
-- Indices de la tabla `medios`
--
ALTER TABLE `medios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autores`
--
ALTER TABLE `autores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cuidad`
--
ALTER TABLE `cuidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `formatos`
--
ALTER TABLE `formatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `medios`
--
ALTER TABLE `medios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_carrito_clientes1` FOREIGN KEY (`clientes_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuidad`
--
ALTER TABLE `cuidad`
  ADD CONSTRAINT `fk_cuidad_estados1` FOREIGN KEY (`estados_id`) REFERENCES `estados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_cuidad_pais1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `estados`
--
ALTER TABLE `estados`
  ADD CONSTRAINT `fk_estado_pais1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `fk_libros_autores1` FOREIGN KEY (`autores_id`) REFERENCES `autores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_libros_formatos1` FOREIGN KEY (`formatos_id`) REFERENCES `formatos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_libros_generos_libros` FOREIGN KEY (`generos_id`) REFERENCES `generos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_libros_idiomas1` FOREIGN KEY (`idiomas_id`) REFERENCES `idiomas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_libros_medios1` FOREIGN KEY (`medios_id`) REFERENCES `medios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

ALTER TABLE `guti`.`libros` 
DROP FOREIGN KEY `fk_libros_autores1`;
ALTER TABLE `guti`.`libros` 
ADD CONSTRAINT `fk_libros_autores1`
  FOREIGN KEY (`autores_id`)
  REFERENCES `guti`.`autores` (`id`)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;


ALTER TABLE `guti`.`libros` -- esta sí!!!
ADD COLUMN `autor` VARCHAR(45) NULL AFTER `titulo`;

UPDATE `guti`.`libros` SET `autor` = 'Taylor Jenkins Reid' WHERE (`id` = '1');
UPDATE `guti`.`libros` SET `autor` = 'Alice Oseman' WHERE (`id` = '2');
UPDATE `guti`.`libros` SET `autor` = 'Jon Katzenbach' WHERE (`id` = '3');
UPDATE `guti`.`libros` SET `autor` = 'Rosario Oyhanarte' WHERE (`id` = '4');
UPDATE `guti`.`libros` SET `autor` = 'V. E. Schwab' WHERE (`id` = '5');
UPDATE `guti`.`libros` SET `autor` = 'Alice Kellen' WHERE (`id` = '6');

ALTER TABLE `guti`.`libros` 
DROP FOREIGN KEY `fk_libros_autores1`;
ALTER TABLE `guti`.`libros` 
DROP COLUMN `autores_id`,
DROP INDEX `fk_libros_autores1_idx` ;
;
  
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

