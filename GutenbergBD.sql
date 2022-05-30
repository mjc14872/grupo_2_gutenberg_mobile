-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2022 a las 04:24:39
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
-- Base de datos: `gutenberg`
--
CREATE DATABASE IF NOT EXISTS `gutenberg` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `gutenberg`;

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
  `titulo` varchar(45) DEFAULT NULL,
  `editorial` varchar(45) DEFAULT NULL,
  `medios_id` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `descuento` tinyint(1) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `usuarios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `titulo`, `editorial`, `medios_id`, `cantidad`, `descuento`, `precio`, `total`, `estado`, `usuarios_id`) VALUES
(1, 'LOS 7 MARIDOS DE EVELYN HUGO', 'UMBRIEL', 1, 1, 10, 2195, 1975, 'p', 1);

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
  `isbn` varchar(25) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `imagen` longblob DEFAULT NULL,
  `generos_id` int(11) NOT NULL,
  `idiomas_id` int(11) NOT NULL,
  `formatos_id` int(11) NOT NULL,
  `autores_id` int(11) NOT NULL,
  `medios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `editorial`, `precio_unitario`, `descuento`, `bestSeller`, `resenia`, `paginas`, `peso`, `edicion`, `isbn`, `cantidad`, `imagen`, `generos_id`, `idiomas_id`, `formatos_id`, `autores_id`, `medios_id`) VALUES
(1, 'LOS 7 MARIDOS DE EVELYN HUGO', 'UMBRIEL', 2195, 1, 0, 'Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. Por qué ella? Por qué ahora ? Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza. Aún ignorando por que Evelyn la ha elegido para escribir su biografía. Monique esta decidida a aprovechar esa oportunidad para dar impulso a su carrera. Convocada al lujoso apartamento de Evelyn, Monique escucha fascinada mientras la actriz le cuenta su historia. Desde su llegada a Los Angeles en los años 50 hasta su decisión de abandonar su carrera en el espectáculo en los 80 - y desde luego, los siete maridos que tuvo en ese tiempo - Evelyn narra una historia de ambición implacable, amistad inesperada y un gran amor prohibido.', 384, 510, 2020, '9789874777737', 30, 0x696d67313634373931303530343939302e737667, 1, 1, 1, 1, 1),
(2, 'HEARTSTOPPER', 'VRYA', 3000, 1, 1, 'Charlie y Nick van al mismo colegio; aunque nunca se habían cruzado hasta el día en que los hacen sentarse juntos en su grupo de estudio. Muy pronto se vuelven amigos y más pronto aún Charlie comienza a sentir cosas por Nick; aunque sabe que es un imposible.', 296, 260, 2020, '9789877475876', 40, 0x696d67313634373930363632393133372e737667, 2, 1, 1, 2, 2),
(3, 'EL CLUB DE LOS PSICÓPATAS', 'UMBRIEL', 3500, 1, 1, 'Alpha; Bravo; Charlie; Delta y Easy se hacen llamar los Muchachos de Jack; en honor a Jack el Destripador. Entre ellos no se conocen más que por un chat en la Dark Web donde comparten su verdadera pasión: ser artistas del asesinato. Cuando Connor y Niki irrumpen en la intimidad de su chat; la furia de estos psicópatas comienza a crecer y no se detendrán ante nada. Con una inteligencia feroz; los Muchachos de Jack planean como venganza la muerte de los dos adolescentes y sus familias. Sin embargo; Connor y Niki no son como el resto de las víctimas de estos asesinos seriales. La pesadilla comienza y solo hay dos opciones: dejarse cazar o sobrevivir.', 632, 680, 2021, '9788466670371', 20, 0x696d67313634373930363737393336332e737667, 3, 1, 1, 3, 2),
(4, 'EL LIBRO MAS LINDO DEL MUNDO', 'VERGARA', 2600, 1, 1, 'Elisa está por casarse con el novio ideal; hasta que la lectura de una novela la devuelve como un imán a otros tiempos. Muy a su pesar recuerda -una y otra vez- a un amor que todavía está vivo en ella: Sebastian; aquel cliente enigmático que conoció en Three Loves; la pequeña librería neoyorquina donde ella trabajaba. ¿Cuánto tiempo debe pasar para que las viejas heridas cierren? ¿Olvidamos a una persona en brazos de otra? Elisa cree que la lectura y la pasión la pueden salvar de la tristeza; pero el pasado vuelve a hacerse presente; como un perfume que nos lleva sin escalas al momento justo que creíamos ya superado. El libro más lindo del mundo es una bella historia de amor a través del tiempo; que demuestra que todo lo que amamos se convierte en ficción. Rosario Oyhanarte nos transporta a la ciudad de Nueva York tras el rastro de una trama sorprendente y enamora en cada esquina.', 191, 240, 1999, '9501516903', 40, 0x696d67313634373930373132343339312e737667, 6, 1, 1, 4, 2),
(5, 'LA VIDA INVISIBLE', 'UMBRIEL', 2500, 0, 0, 'Una vida que nadie recuerda. Una historia que nunca olvidarás.Tras hacer un pacto con el diablo, Addie entrega su alma a cambio de la inmortalidad. Sin embargo, ningún trato faustiano está exento de consecuencias: el diablo le entregará la inmortalidad que tanto desea, pero le quitará algo que ella anhelará durante toda su existencia: la posibilidad de ser recordada. Addie abandona su pequeño pueblo natal en la Francia del siglo xviii y comienza un viaje que la lleva por todo el mundo, mientras aprende a vivir una vida en la que nadie la recuerda y todo lo que posee acaba perdido o roto. Durante trescientos años, Addie LaRue no será más que la musa de numerosos artistas a lo largo de la historia, y tendrá que aprender a enamorarse de nuevo cada día, y a ser olvidada a la mañana siguiente. Su único compañero en este viaje es su oscuro demonio de hipnóticos ojos verdes, quien la visita cada año en el día del aniversario de su trato. Completamente sola, a Addie no le queda más remedio que enfrentarse a él, comprenderlo y, tal vez, ganarle la partida.', 504, 730, 2021, '9789874777751', 50, 0x696d67313634373930373032363735332e737667, 5, 1, 1, 5, 1),
(6, 'TODO LO QUE NUNCA FUIMO', 'PLANETA', 2100, 0, 0, 'Primera parte de la bilogía de Alice Kellen:Leah está rota. Leah ya no pinta. Leah es un espejismo desde el accidente que se llevó a sus padres.Axel es el mejor amigo de su hermano mayor y, cuando accede a acogerla en su casa durante unos meses, quiere ayudarla a encontrar y unir los pedazos de la chica llena de color que un día fue. Pero no sabe que ella siempre ha estado enamorada de él, a pesar de que sean casi familia, ni de que toda su vida está a punto de cambiar. Porque ella está prohibida, pero le despierta la piel. Porque es el mar, noches estrelladas y vinilos de los Beatles. Porque a veces basta un «deja que ocurra» para tenerlo todo.', 352, 400, 2021, '9789504973737', 50, 0x696d67313634373930363932373139372e737667, 1, 1, 1, 2, 1),
(7, 'LOS CUATRO ACUERDOS', 'URANO', 2090, 0, 0, 'El conocimiento tolteca surge de la misma unidad esencial de la verdad de la que parten todas las tradiciones esotéricas sagradas del mundo. Aunque no es una religión, respeta a todos los maestros espirituales que han enseñado en la tierra, y si bien abraza el espíritu, resulta más preciso describirlo como una manera de vivir que se distingue por su fácil acceso a la felicidad y el amor. El doctor Miguel Ruiz nos propone en este libro un sencillo procedimiento para eliminar todas aquellas creencias heredadas que nos limitan y substituirlas por otras que responden a nuestra realidad interior y nos conducen a la libertad.', 384, 510, 2020, '9789874777737', 30, 0x696d67313634373330323831373239382e706e67, 7, 1, 1, 7, 2),
(8, 'MAL EDUCADAS', 'PLANETA', 1670, 0, 0, '¿Las mujeres estamos reescribiendo la historia y espero que este libro te ayude a reescribir la tuya. El conocimiento nos hará libres¿ ¿Cómo se ha educado a las mujeres por siglos? ¿Para qué se las ha educado? Hasta fines del siglo XIX las mujeres no asistieron a la escuela; su única formación tendía a que fueran ¿buenas¿: buenas esposas; concubinas; amantes; madres; hijas; abuelas... Esta educación inorgánica; esta ¿mala¿ educación; se vuelve un sustrato permanente y fortísimo que sigue formando a las mujeres aún hoy para cumplir miles de mandatos. Esto es lo que sostiene María Florencia Freijo en (Mal) Educadas: que las mujeres han sido y aún son preparadas; tanto desde la educación formal como la informal; para amar sin condiciones a riesgo de quedarse ¿solas¿; y para limitar su propio poder y sus posibilidades expansivas. Con una aguda mirada histórica y una escritura lúcida y personal; la autora encuentra en el concepto de ¿mala educación¿ un punto de partida que consolida una serie de prejuicios sobre las mujeres. Así se construyeron y se sostienen los arquetipos de la mala mujer: puta; bruja; vividora; loca... María Florencia Freijo muestra y explica en este libro imprescindible la línea que une la historia silenciada de las mujeres; en busca de descubrir el porqué de esto que aparece como un destino; pero que es en realidad un mandato que sólo con conocimiento se podrá cambiar; para que cada mujer pueda trazar una historia propia más libre y más consciente.', 272, 245, 2020, '9789504971290', 45, 0x696d67313634373739303535343339372e706e67, 9, 1, 1, 8, 2),
(9, 'BOULEVARD', 'MONTENA', 2199, 0, 0, 'Luke Howland, lleno de problemas y sumido en una desesperación profunda, y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo de pareja perfecta. Como si cada uno fuese un cielo, uno es tormenta y el otro, un día soleado: él es oscuridad. Ella, un rayo de sol. Y, sin embargo, juntos decidieron ponerle nombre a lo que habían creado: un boulevard teñido de tonos grisáceos y de azules celestes y eléctricos preparándose para la tormenta. Ella era para él y él era para ella.', 360, 400, 2022, '9789874924995', 50, 0x696d67313634373739303535343339372e706e67, 12, 1, 1, 9, 2),
(10, 'LAS COSAS QUE PERDIMOS EN EL FUEGO', 'ANAGRAMA', 1495, 0, 0, 'El mundo de Mariana Enriquez no tiene por qué ser el nuestro, y, sin embargo, lo termina siendo. Bastan pocas frases para pisarlo, respirarlo y no olvidarlo gracias a una viveza emocional insólita. Con la cotidianidad hecha pesadilla, el lector se despierta abatido, perturbado por historias e imágenes que jamás conseguirá sacarse de la cabeza. Las autodenominadas ´mujeres ardientes´, que protestan contra una forma extrema de violencia doméstica que se ha vuelto viral; una estudiante que se arranca las uñas y las pestañas, y otra que intenta ayudarla; los años de apagones dictados por el gobierno durante los cuales se intoxican tres amigas que lo serán hasta que la muerte las separe; el famoso asesino en serie llamado Petiso Orejudo, que sólo tenía nueve años; hikikomori, magia negra, los celos, el desamor, supersticiones rurales, edificios abandonados o encantados... En estos once cuentos el lector se ve obligado a olvidarse de sí mismo para seguir las peripecias e investigaciones de cuerpos que desaparecen o bien reaparecen en el momento menos esperado. Ya sea una trabajadora social, una policía o un guía turístico, los protagonistas luchan por apadrinar a seres socialmente invisibles, indagando así en el peso de la culpa, la compasión, la crueldad, las dificultades de la convivencia, y en un terror tan hondo como verosímil. Mariana Enriquez es una de las narradoras más valientes y sorprendentes del siglo XXI, no sólo de la nueva literatura argentina a cargo de escritores nacidos durante la dictadura sino de la literatura.', 200, 160, 2016, '9788433998064', 50, 0x696d67313634373739313132313634392e706e67, 14, 1, 1, 10, 2),
(11, 'REINO DE PAPEL', 'VRYA', 1799, 0, 0, 'Para quien la mire no es otra cosa que perfecta e inquebrantable. Popular. Bonita. Inalcanzable. Toda una profesional de la mentira. Pero cuando todo a su alrededor se vuelve un caos y los muros que tan perfectamente ha construido en su interior comienzan a resquebrajarse; un chico y su gato malhumorado entran como un rayo de sol a su cielo nublado y ponen su vida de cabeza. Aaron llena sus días de color y ruiseñores. Le muestra caras de sí misma que no sabía que tenía. Que la aterran. Que la increpan. Que la hacen desear ser esa chica que nunca creyó poder ser. ¿Podrá una nueva Aspen surgir de entre tanta oscuridad y tantas mentiras?', 480, 500, 2022, '9789877477986', 40, 0x696d67313634373739313730343831352e706e67, 15, 1, 1, 11, 2),
(12, 'VIOLETA', 'SUDAMERICANA', 3499, 0, 0, 'Violeta, la primera niña de una familia de cinco bulliciosos hermanos, viene al mundo un tormentoso día de 1920. Desde el principio su vida estará marcada por acontecimientos extraordinarios, pues todavía se sienten las ondas expansivas de la Gran Guerra cuando la gripe española llega a las orillas de su país sudamericano natal, casi en el momento exacto de su nacimiento. Gracias a la clarividencia del padre, la familia saldrá indemne de esta crisis para enfrentarse a una nueva, cuando la Gran Depresión altera la elegante vida urbana que Violeta ha conocido hasta ahora. Lo perderán todo y se verán obligados a retirarse a una región salvaje y remota del país. Allí Violeta alcanzará la mayoría de edad y tendrá su primer pretendiente... En una larga carta dirigida a una persona a la que ama por encima de todas las demás, Violeta rememora devastadores desengaños amorosos y romances apasionados, momentos de pobreza y también de prosperidad, pérdidas terribles e inmensas alegrías. Moldearán su vida algunos de los grandes sucesos de la historia: la lucha por los derechos de la mujer, el auge y la caída de tiranos y, en última instancia, no una sino dos pandemias.', 400, 460, 2021, '9789500766647', 30, 0x696d67313634373739323339373036312e706e67, 17, 1, 1, 12, 2),
(13, 'LA BAILARINA DE AUSCHWITZ', 'PLANETA', 2390, 0, 1, 'Una emocionante historia de superación sobre la capacidad del ser humano para sanar y vencer la adversidad. Un libro sobrecogedor, potente e inspirador que busca ayudar a todos aquellos cuyos traumas les impiden vivir en plenitud. Como su mentor Viktor Frankl, Edith Eger es una superviviente cuya experiencia vital y trayectoria como psicóloga le han permitido ayudar a miles de personas que viven incapacitadas por sus cicatrices emocionales.', 416, 400, 2018, '9789504962137', 50, 0x696d67313634373739323731383337362e706e67, 18, 1, 1, 13, 2),
(14, 'UNA OBSESIÓN PERVERSA', 'LIMONERO', 2390, 0, 0, 'Víctor y Eli eran dos estudiantes universitarios brillantes pero arrogantes que reconocían, el uno en el otro, la misma agudeza y la misma ambición. En el último año de su carrera, el interés compartido por la adrenalina, las experiencias cercanas a la muerte y los acontecimientos en apariencia sobrenaturales plantean una posibilidad intrigante: que, dadas ciertas condiciones, sería posible desarrollar habilidades extraordinarias. Pero cuando la tesis pasa de lo académico a lo experimental, las cosas salen horriblemente mal. Diez años más tarde, Víctor escapa de la cárcel, decidido a encontrar a su antiguo amigo (ahora enemigo), con la ayuda de una muchachita cuyo carácter reservado esconde una capacidad asombrosa. Mientras tanto, Eli se ha propuesto erradicar a todas las demás personas con superpoderes que pueda encontrar... salvo a su compañera, una mujer enigmática de voluntad inquebrantable. Ambos armados con inmenso poder, impulsados por el recuerdo de la traición y la pérdida, los archienemigos están decididos a vengarse... pero ¿quién quedará vivo al final?', 384, 400, 2021, '9789874831309', 60, 0x696d67313634373739333037313033372e706e67, 13, 1, 1, 14, 2),
(15, 'AVENGERS: VISION SCARLET WITCH', 'PANINI COMICS ARGENTINA', 1450, 0, 0, 'Su relación ya no es más que ruinas, pero, ¿Cómo comenzó todo? ¡Presencia cómo una pareja perfecta comenzó con una boda en el Limbo y cómo un horror de Halloween demostró que la magia nunca abandonó este matrimonio! ¡Con apariciones especiales de los Avengers, los Inhumanos y otros héroes contra Dormammu! ¡Un misterio de la Edad de Oro es resuelto! Visión está unido a sus hermanos en todo excepto la sangre, ¿pero quién es el padre de Scarlet Witch? ¡La pareja más extraña de Marvel nos muestra que los héroes empiezan en el hogar!', 136, 250, 2021, '9786075687803', 20, 0x696d67313634373739333530373832322e706e67, 4, 1, 1, 15, 2),
(16, 'EL AMOR DE MOBUKO#1', 'KITSUNE BOOKS', 1890, 0, 0, 'A Mobuko Tanaka nunca la han sacado a bailar. Siempre ha sido una chica callada y tímida, un personaje secundario en la obra de su propia vida. Pero ahora, con veinte años, Mobuko se ha enamorado por primera vez. El chico de sus sueños es Irie, un compañero del supermercado en el que trabaja. Aunque Mobuko trata de mantener las distancias, cuando otra compañera del supermercado descubre lo que siente por él, la anima a acercarse a Irie. ¿Tendrá Mobuko el valor suficiente para deshacerse de su timidez y conquistar al chico por el que se le derrite el corazón?', 160, 400, 2021, '9788418524158', 40, 0x696d67313634373739333736373331312e706e67, 19, 1, 1, 16, 2);

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
  `categoria` varchar(45) DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `novedades` tinyint(1) DEFAULT NULL,
  `administrador` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `email`, `password`, `categoria`, `image`, `novedades`, `administrador`) VALUES
(1, 'Liz', 'Moran', 'l@gmail.com', '$2a$10$BYiIUmZn7YWvQpIJ8V4aa.WXD9k9SyjkdBlkQ8', 'publicar libros', 0x696d67313634383432333230353333392e706e67, 1, 0),
(2, 'Sarai', 'Franco', 's@gmail.com', '$2a$10$MlUlnSec9r7Jvmi88C/xVuq40lJocG2YuSKbKB', 'leer libros', 0x696d67313634393034303639303634392e706e67, 0, 1),
(3, 'Maggi', 'Molina', 'm@gmail.com', '$2a$10$QE9VEmxJF3oQh.dhBGqp8.uzBbRLu7ps9zjNWE', 'publicar libros', 0x696d67313634383432333230353333392e706e67, 0, 1);

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
  ADD KEY `fk_libros_medios1_idx` (`medios_id`),
  ADD KEY `fk_libros_usuarios_1_idx` (`usuarios_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
