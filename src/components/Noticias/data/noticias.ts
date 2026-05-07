// src/data/noticias.ts
import type { NombreImagen } from './imagenes';

export type Categoria = "TODAS" | "PLANTEL" | "INSTITUCIÓN" | "RESULTADOS";
export type CategoriaSinTodas = Exclude<Categoria, "TODAS">;

export interface Noticia {
    id: number;
    categoria: CategoriaSinTodas;
    titulo: string;
    contenido: string;
    fecha: string;
    imagen: NombreImagen;
    destacada?: boolean;
}

export const todasLasNoticias: Noticia[] = [
    {
        id: 1,
        categoria: "RESULTADOS",
        titulo: "Los Chankas aseguran un empate valioso en su visita a Cajamarca",
        contenido: "En un duelo de altura, el equipo de Andahuaylas sumó un punto importante ante UTC, manteniendo la regularidad en el torneo clausura.",
        fecha: "15 Abril, 2026",
        imagen: "1",
        destacada: true,
    },
    {
        id: 2,
        categoria: "RESULTADOS",
        titulo: "Goleada histórica en Andahuaylas: Chankas 6-0 Sport Huancayo",
        contenido: "La ofensiva guerrera estuvo imparable en el Estadio Los Chankas, firmando una de las mayores goleadas del club en la máxima categoría.",
        fecha: "10 Abril, 2026",
        imagen: "2",
        destacada: true,
    },
    {
        id: 3,
        categoria: "RESULTADOS",
        titulo: "Triunfo clave ante Sport Boys consolida a Los Chankas en zona de Sudamericana",
        contenido: "Con un gol agónico en los minutos finales, el cuadro granate se llevó los tres puntos y escala posiciones en la tabla acumulada.",
        fecha: "3 Abril, 2026",
        imagen: "3",
    },
    {
        id: 4,
        categoria: "RESULTADOS",
        titulo: "Derrota ajustada en Lima frente a Universitario de Deportes",
        contenido: "A pesar del gran despliegue táctico, el equipo no pudo sostener el empate en el Monumental y cayó por la mínima diferencia.",
        fecha: "28 Marzo, 2026",
        imagen: "4",
    },
    {
        id: 5,
        categoria: "RESULTADOS",
        titulo: "Empate con sabor a victoria frente a Alianza Lima en casa",
        contenido: "Ante un estadio repleto, Los Chankas demostraron jerarquía y frenaron al líder del campeonato en una tarde llena de emociones.",
        fecha: "20 Marzo, 2026",
        imagen: "5",
    },
    {
        id: 6,
        categoria: "PLANTEL",
        titulo: "Carlos López se mantiene como el máximo asistidor del equipo",
        contenido: "El extremo colombiano sigue siendo pieza fundamental en el esquema ofensivo, liderando las estadísticas de pases gol en la Liga 1.",
        fecha: "17 Abril, 2026",
        imagen: "6",
    },
    {
        id: 7,
        categoria: "PLANTEL",
        titulo: "Parte médico: José Luján inicia proceso de recuperación",
        contenido: "El defensor central sufrió una molestia muscular y estará bajo observación del cuerpo médico por las próximas dos semanas.",
        fecha: "14 Abril, 2026",
        imagen: "7",
    },
    {
        id: 8,
        categoria: "PLANTEL",
        titulo: "Abel Casquete destaca la unión del grupo para lograr los objetivos",
        contenido: "En conferencia de prensa, el volante creativo resaltó el compromiso de sus compañeros para clasificar a un torneo internacional.",
        fecha: "12 Abril, 2026",
        imagen: "8",
    },
    {
        id: 9,
        categoria: "PLANTEL",
        titulo: "Los Chankas refuerzan su arco con la llegada de un nuevo portero",
        contenido: "Buscando competitividad interna, la dirigencia anunció la incorporación de un guardameta nacional con experiencia en primera división.",
        fecha: "5 Abril, 2026",
        imagen: "9",
    },
    {
        id: 10,
        categoria: "PLANTEL",
        titulo: "Entrenamiento a doble turno bajo la dirección de Pablo Bossi",
        contenido: "El comando técnico intensifica los trabajos físicos y tácticos aprovechando el parón de selecciones para ajustar la defensa.",
        fecha: "25 Marzo, 2026",
        imagen: "10",
    },
    {
        id: 11,
        categoria: "INSTITUCIÓN",
        titulo: "Modernización del Estadio Los Chankas: nuevas luminarias LED",
        contenido: "La directiva confirmó la instalación de un moderno sistema de iluminación para permitir partidos en horario nocturno por Copa Sudamericana.",
        fecha: "18 Abril, 2026",
        imagen: "11",
    },
    {
        id: 12,
        categoria: "INSTITUCIÓN",
        titulo: "Los Chankas CYC lanzan campaña de socios 'Guerrero de Sangre'",
        contenido: "El club busca fortalecer su base de abonados con beneficios exclusivos, descuentos en tiendas oficiales y acceso a preventas.",
        fecha: "16 Abril, 2026",
        imagen: "12",
    },
    {
        id: 13,
        categoria: "INSTITUCIÓN",
        titulo: "Alianza estratégica con empresas locales para fortalecer el club",
        contenido: "Se firmaron convenios con marcas de Apurímac para potenciar el transporte y la logística del primer equipo durante la temporada.",
        fecha: "11 Abril, 2026",
        imagen: "13",
    },
    {
        id: 14,
        categoria: "INSTITUCIÓN",
        titulo: "Responsabilidad social: visita del equipo a centros educativos",
        contenido: "Jugadores y directivos compartieron una jornada deportiva con niños de Andahuaylas promoviendo los valores institucionales.",
        fecha: "2 Abril, 2026",
        imagen: "14",
    },
    {
        id: 15,
        categoria: "INSTITUCIÓN",
        titulo: "Balance positivo en la Asamblea General de Socios 2026",
        contenido: "El presidente del club presentó el informe financiero, destacando la estabilidad económica y el crecimiento de la marca Chankas.",
        fecha: "15 Marzo, 2026",
        imagen: "15",
    },
    {
        id: 16,
        categoria: "RESULTADOS",
        titulo: "Los Chankas vencen 2-0 a Atlético Grau y se consolidan en la cima de la Liga 1",
        contenido: "Con goles de sus defensores centrales, el equipo de Andahuaylas sumó su séptima victoria consecutiva y lidera el Torneo Apertura con 26 unidades.",
        fecha: "17 Abril, 2026",
        imagen: "16",
    },
    {
        id: 17,
        categoria: "INSTITUCIÓN",
        titulo: "Duelo intenso en Andahuaylas: Chankas vs Deportivo Garcilaso",
        contenido: "Los Guerreros Chankas saltarán al campo hoy para defender su casa en un partido crucial del Torneo Apertura, buscando mantener el protagonismo en la tabla.",
        fecha: "4 Mayo, 2026",
        imagen: "17",
        destacada: true,
    },
    {
        id: 18,
        categoria: "RESULTADOS",
        titulo: "¡Orgullosos de nuestra entrega! Los Chankas pelearon hasta el último minuto",
        contenido: "En un partido intenso en Andahuaylas, nuestro equipo buscó el arco rival incesantemente. A pesar del resultado adverso ante Garcilaso, la actitud guerrera del plantel nos mantiene firmes en la lucha por los primeros puestos.",
        fecha: "4 Mayo, 2026",
        imagen: "18",
    },
    {
        id: 19,
        categoria: "INSTITUCIÓN",
        titulo: "Andahuaylas es una fiesta: Agradecimiento total a nuestra hinchada",
        contenido: "Queremos agradecer el aliento incondicional de los miles de guerreros que llenaron nuestras tribunas hoy. Su energía es el motor que nos impulsa a seguir representando con orgullo los colores de nuestra región.",
        fecha: "4 Mayo, 2026",
        imagen: "19",
    },
    {
        id: 20,
        categoria: "PLANTEL",
        titulo: "Unidad y enfoque: el plantel ya mentalizado en el próximo desafío en Cusco",
        contenido: "Tras el pitazo final, el grupo se mostró unido y fortalecido. Bajo la dirección de nuestro comando técnico, mañana mismo inicia la preparación para el trascendental duelo del 10 de mayo frente a Cusco FC.",
        fecha: "4 Mayo, 2026",
        imagen: "20",
    },
    {
        id: 21,
        categoria: "RESULTADOS",
        titulo: "Seguimos en la pelea: Los Chankas se mantienen en el top de la Liga 1",
        contenido: "Pese al traspié de hoy, nuestra gran campaña nos permite sostenernos en el segundo lugar de la tabla con 29 puntos. ¡Nada está dicho y seguiremos luchando en las jornadas restantes!",
        fecha: "4 Mayo, 2026",
        imagen: "21",
    },
    {
        id: 22,
        categoria: "PLANTEL",
        titulo: "Jarlín Quintero: 'Nuestra fe y nuestro fútbol están intactos'",
        contenido: "Nuestro goleador destacó el volumen ofensivo generado hoy y aseguró que el equipo mantiene la convicción necesaria para cerrar el Torneo Apertura con la frente en alto.",
        fecha: "4 Mayo, 2026",
        imagen: "22",
    },
];

export const filtros: Categoria[] = ["TODAS", "PLANTEL", "INSTITUCIÓN", "RESULTADOS"];
export const ITEMS_POR_PAGINA = 6;
