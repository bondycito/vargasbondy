export type NavItem = { href: string; label: string };
export type NewsCategory = "Todas" | "Plantel" | "Institución" | "Academia" | "Resultados";

export type SquadGroup = "Porteros" | "Defensas" | "Mediocampistas" | "Delanteros";
export type ProductCategory = "Todos" | "Camisetas" | "Accesorios" | "Equipamiento" | "Edición especial";
export type MembershipTier = "Hincha" | "Chanka" | "Guerrero";

export interface NewsItem {
  id: number;
  slug: string;
  category: Exclude<NewsCategory, "Todas">;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  featured?: boolean;
}

export interface SquadMember {
  id: number;
  name: string;
  role: SquadGroup;
  number: number;
  age: number;
  nationality: string;
  image: string;
  stats: string;
  captain?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  tag: string;
  description: string;
  image: string;
}

export interface ProductItem {
  id: number;
  category: Exclude<ProductCategory, "Todos">;
  name: string;
  subtitle: string;
  price: string;
  badge?: string;
  image: string;
  available: boolean;
}

export interface MembershipPlan {
  id: MembershipTier;
  tagline: string;
  price: string;
  highlight?: string;
  featured?: boolean;
  dark?: boolean;
  features: string[];
}

export const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/noticias", label: "Noticias" },
  { href: "/partidos", label: "Partidos" },
  { href: "/plantilla", label: "Plantilla" },
  { href: "/historia", label: "Historia" },
  { href: "/tienda", label: "Tienda" },
  { href: "/socios", label: "Socios" },
];

export const homeStats = [
  { value: "32", label: "años", sublabel: "de historia" },
  { value: "5", label: "títulos", sublabel: "regionales" },
  { value: "480", label: "partidos", sublabel: "disputados" },
  { value: "12.5k", label: "hinchas", sublabel: "en el estadio" },
];

export const sponsors = [
  "Cerveza Apurimeña",
  "New Athletic",
  "UD Trucks",
  "Caja Ica",
  "ANYPSA",
  "El Cisne",
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "victoria-historica-semifinales",
    category: "Resultados",
    title: "Los Chankas jugarán en casa",
    excerpt: "Este lunes 4 se jugará contra Deportivo Garcilaso en el estadio de Andahuaylas.",
    date: "29 abril, 2026",
    image: "../public/noti/1.webp",
    featured: true,
  },
  {
    id: 2,
    slug: "acuerdo-apurimac",
    category: "Institución",
    title: "Feliz aniversario, Apurímac",
    excerpt: "Los Chankas CYC saludan a Apurímac y celebran con orgullo una nueva fecha especial para la región.",
    date: "28 abril, 2026",
    image: "../public/noti/2.webp",
    featured: true,
  },
  {
    id: 3,
    slug: "renovacion-capitan",
    category: "Plantel",
    title: "Ahora Los Chankas quedó segundo",
    excerpt: "Tras esa derrota, Los Chankas bajó al segundo lugar del Torneo Apertura 2026, empatando en puntos con Alianza Lima.",
    date: "26 abril, 2026",
    image: "../public/noti/3.webp",
    featured: true,
  },
  {
    id: 4,
    slug: "pretemporada-liga",
    category: "Plantel",
    title: "Pretemporada intensa: el equipo afina detalles para el gran desafío de la liga",
    excerpt: "Dobles jornadas, trabajo táctico y exigencia física marcan la preparación del primer equipo en altura.",
    date: "3 abril, 2026",
    image: "https://images.unsplash.com/photo-1761258772330-7de60cf3f07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 5,
    slug: "academia-captacion",
    category: "Academia",
    title: "La Academia Chankas lanza su programa de captación 2026 para menores",
    excerpt: "El club recorrerá provincias de Apurímac para detectar talento joven y reforzar su proyecto formativo.",
    date: "1 abril, 2026",
    image: "https://images.unsplash.com/photo-1721679231400-236d99c09429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 6,
    slug: "victoria-casa-deportivo-cusco",
    category: "Resultados",
    title: "Chankas CYC 2 - 0 Deportivo Cusco: solidez en casa y tres puntos clave",
    excerpt: "El equipo mostró orden defensivo y eficacia en el área para sostener una victoria muy celebrada por la hinchada.",
    date: "29 marzo, 2026",
    image: "https://images.unsplash.com/photo-1772707681004-ebbce15554d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 7,
    slug: "sala-prensa-estadio",
    category: "Institución",
    title: "Se inaugura la nueva sala de prensa del Estadio Comunal de Andahuaylas",
    excerpt: "La renovación incorpora mejores espacios para medios y eleva el estándar institucional del club.",
    date: "25 marzo, 2026",
    image: "https://images.unsplash.com/photo-1642193012279-2cf0d38df5e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 8,
    slug: "analisis-tactico-dt",
    category: "Plantel",
    title: "Análisis táctico: cómo el DT Mamani está transformando el juego del equipo",
    excerpt: "Presión alta, salida asociativa y amplitud ofensiva definen la nueva identidad futbolística de Chankas CYC.",
    date: "22 marzo, 2026",
    image: "https://images.unsplash.com/photo-1585757318177-0570a997dc3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 9,
    slug: "promesas-academia",
    category: "Academia",
    title: "Tres promesas de la Academia firman su primer contrato profesional",
    excerpt: "El salto al primer equipo confirma el peso que empieza a tener la cantera dentro del proyecto.",
    date: "20 marzo, 2026",
    image: "https://images.unsplash.com/photo-1748112202471-8aab237fc7f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
];

export const squadMembers: SquadMember[] = [
  { id: 2, name: "Hairo Camacho", role: "Porteros", number: 1, age: 32, nationality: "Perú", image: "../../public/jugadores/Hairo_Camacho.jpg", stats: "20 PJ · 0 atajadas · 0 goles recibidos" },
  { id: 3, name: "Jorge Pretel", role: "Porteros", number: 12, age: 23, nationality: "Perú", image: "../../public/jugadores/Jorge_Pretel.webp", stats: "0 PJ · Sin minutos registrados" },
  { id: 5, name: "Héctor González", role: "Defensas", number: 2, age: 33, nationality: "Argentina", image: "../../public/jugadores/Héctor González.webp", stats: "6 PJ · 0 goles · 0 asistencias" },
  { id: 6, name: "Brayan Guevara", role: "Defensas", number: 14, age: 27, nationality: "Perú", image: "../../public/jugadores/Brayan_Guevara.webp", stats: "3 PJ · 0 goles · 0 asistencias" },
  { id: 8, name: "Gonzalo Rizzo", role: "Defensas", number: 24, age: 30, nationality: "Uruguay", image: "../../public/jugadores/Gonzalo_Rizzo.png", stats: "4 PJ · 2 goles · 0 asistencias" },
  { id: 9, name: "David González", role: "Defensas", number: 26, age: 29, nationality: "Perú", image: "../../public/jugadores/David_Gonzales.png", stats: "20 PJ · 0 goles · 0 asistencias" },
  { id: 10, name: "Kenyi Barrios", role: "Defensas", number: 27, age: 30, nationality: "Perú", image: "../../public/jugadores/Kenyi Barrios.webp", stats: "9 PJ · 1 gol · 0 asistencias" },
  { id: 11, name: "Michel Kaufman", role: "Defensas", number: 30, age: 24, nationality: "Perú", image: "../../public/jugadores/Michel Kaufman.webp", stats: "8 PJ · 0 goles · 0 asistencias" },
  { id: 12, name: "Ayrthon Quintana", role: "Defensas", number: 31, age: 25, nationality: "Perú", image: "../../public/jugadores/Ayrthon_Quintana.jpg", stats: "20 PJ · 0 goles · 6 asistencias" },
  { id: 13, name: "Carlos Pimienta", role: "Defensas", number: 33, age: 34, nationality: "Uruguay", image: "../../public/jugadores/Carlos_Pimienta.jpg", stats: "20 PJ · 2 goles · 0 asistencias" },
  { id: 4, name: "José Cárdenas", role: "Defensas", number: 37, age: 31, nationality: "Perú", image: "../../public/jugadores/José Cárdenas.webp", stats: "0 PJ · Sin minutos registrados" },
  { id: 14, name: "Jorge Palomino", role: "Mediocampistas", number: 5, age: 30, nationality: "Perú", image: "../../public/jugadores/Jorge_palomino.jpg", stats: "20 PJ · 0 goles · 0 asistencias" },
  { id: 15, name: "Abdiel Ayarza", role: "Mediocampistas", number: 6, age: 33, nationality: "Panamá", image: "../../public/jugadores/Abdiel Ayarza.webp", stats: "9 PJ · 5 goles · 0 asistencias" },
  { id: 16, name: "Adrián Quiroz", role: "Mediocampistas", number: 8, age: 26, nationality: "Perú", image: "../../public/jugadores/Adrian_Quiroz.webp", stats: "20 PJ · 2 goles · 4 asistencias" },
  { id: 17, name: "Kelvin Sánchez", role: "Mediocampistas", number: 15, age: 27, nationality: "Perú", image: "../../public/jugadores/Kelvin_Sanchez.jpg", stats: "20 PJ · 0 goles · 0 asistencias" },
  { id: 18, name: "Christian Velarde", role: "Mediocampistas", number: 17, age: 27, nationality: "Estados Unidos", image: "../../public/jugadores/Christian Velarde.webp", stats: "1 PJ · 0 goles · 0 asistencias" },
  { id: 19, name: "Sebastián Zarabia", role: "Mediocampistas", number: 22, age: 21, nationality: "Perú", image: "../../public/jugadores/Sebastián Zarabia.webp", stats: "0 PJ · Sin minutos registrados" },
  { id: 20, name: "Juan Ospina", role: "Delanteros", number: 7, age: 24, nationality: "Colombia", image: "../../public/jugadores/Juan Ospina.webp", stats: "3 PJ · 0 goles · 0 asistencias" },
  { id: 21, name: "Franco Torres", role: "Delanteros", number: 10, age: 26, nationality: "Argentina", image: "../../public/jugadores/Franco_Torres.jpg", stats: "20 PJ · 12 goles · 2 asistencias", captain: true },
  { id: 22, name: "Jarlín Quintero", role: "Delanteros", number: 11, age: 32, nationality: "Colombia", image: "../../public/jugadores/Jarlín Quintero.webp", stats: "12 PJ · 2 goles · 0 asistencias" },
  { id: 23, name: "Oshiro Takeuchi", role: "Delanteros", number: 18, age: 31, nationality: "Perú", image: "../../public/jugadores/Oshiro_Takeuchi.jpg", stats: "20 PJ · 4 goles · 2 asistencias" },
  { id: 7, name: "Marlon Torres", role: "Delanteros", number: 20, age: 29, nationality: "Colombia", image: "../../public/jugadores/Marlon Torres.webp", stats: "8 PJ · 2 goles · 2 asistencias" },
  { id: 24, name: "Félix Espinoza", role: "Delanteros", number: 77, age: 26, nationality: "Perú", image: "../../public/jugadores/Félix Espinoza.webp", stats: "0 PJ · Sin minutos registrados" },
  { id: 25, name: "Janio Posito", role: "Delanteros", number: 89, age: 36, nationality: "Perú", image: "../../public/jugadores/Janio Posito.webp", stats: "6 PJ · 0 goles · 1 asistencia" },
];

export const staffMembers = [
  { name: "Walter Paolella", role: "Entrenador principal", image: "../../Entrenadores/Walter Paolella.webp" },
  { name: "Sebastián Montivero", role: "Asistente técnico", image: "../../Entrenadores/Sebastián_Montivero.png" },
  { name: "Edinzon Cunyas", role: "Entrenador de porteros", image: "../../Entrenadores/Edinzon_Cunyas.png" },
];

export const timeline: TimelineItem[] = [
  {
    year: "1989",
    title: "Fundación del club",
    tag: "Orígenes",
    description: "El club fue fundado el 30 de agosto de 1989 en Andahuaylas, inicio oficial de una institución que hoy representa a Apurímac en el fútbol profesional peruano.",
    image: "https://images.unsplash.com/photo-1770834038131-cd7ed7145a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    year: "2015",
    title: "Campaña histórica en Copa Perú",
    tag: "Crecimiento",
    description: "Como Cultural Santa Rosa, el club alcanzó los octavos de final de la Copa Perú 2015, una campaña que marcó el salto a una etapa más competitiva.",
    image: "https://images.unsplash.com/photo-1725531142479-f8362c36d577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    year: "2016",
    title: "Ingreso a la Segunda División",
    tag: "Profesionalización",
    description: "Después de su rendimiento en la Copa Perú, el club pasó a competir desde 2016 en la Segunda División del fútbol peruano, abriendo una nueva fase institucional.",
    image: "https://images.unsplash.com/photo-1546957221-3896babc5c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    year: "2021",
    title: "Golpe nacional en Copa Bicentenario",
    tag: "Hazaña",
    description: "El 11 de junio de 2021, el equipo eliminó a Alianza Lima por penales en la Copa Bicentenario y firmó uno de los triunfos más resonantes de su historia reciente.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    year: "2021",
    title: "Identidad Los Chankas CYC",
    tag: "Identidad",
    description: "Durante 2021 se consolidó la denominación Los Chankas CYC, reforzando el vínculo del club con la identidad histórica y cultural de Andahuaylas y Apurímac.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    year: "2023",
    title: "Ascenso histórico a la Liga 1",
    tag: "Hito",
    description: "El 27 de octubre de 2023, Los Chankas vencieron a Alianza Universidad en la final del playoff y lograron el primer ascenso de su historia a la máxima categoría.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    year: "2024",
    title: "Apurímac llega a Primera",
    tag: "Presente",
    description: "Desde la temporada 2024, Los Chankas compiten en la Liga 1 y se convirtieron en el primer representante de Apurímac en la Primera División del Perú.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c643e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
];

export const products: ProductItem[] = [
  {
    id: 1,
    category: "Camisetas",
    name: "Camiseta Home 2026",
    subtitle: "Equipación oficial local",
    price: "S/. 180",
    badge: "Nuevo",
    image: "https://images.unsplash.com/photo-1577212017184-80cc0da11082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    available: true,
  },
  {
    id: 2,
    category: "Camisetas",
    name: "Camiseta Away 2026",
    subtitle: "Equipación oficial visitante",
    price: "S/. 180",
    image: "https://images.unsplash.com/photo-1578434479660-7dbfe9b50f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    available: true,
  },
  {
    id: 3,
    category: "Edición especial",
    name: "Camiseta Retro 1985",
    subtitle: "Edición aniversario",
    price: "S/. 220",
    badge: "Especial",
    image: "https://images.unsplash.com/photo-1578434479660-7dbfe9b50f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    available: true,
  },
  {
    id: 4,
    category: "Equipamiento",
    name: "Polo Training Pro",
    subtitle: "Entrenamiento técnico",
    price: "S/. 95",
    image: "https://images.unsplash.com/photo-1750698544805-d0190a33a0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    available: true,
  },
  {
    id: 5,
    category: "Accesorios",
    name: "Bufanda Oficial CYC",
    subtitle: "Temporada 2026",
    price: "S/. 45",
    badge: "Nuevo",
    image: "https://images.unsplash.com/photo-1775725181784-da61e5517b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    available: true,
  },
  {
    id: 6,
    category: "Equipamiento",
    name: "Mochila Oficial 2026",
    subtitle: "Compartimento para balón",
    price: "S/. 120",
    badge: "Agotado",
    image: "https://images.unsplash.com/photo-1649813603207-854179e02af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    available: false,
  },
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: "Hincha",
    tagline: "Para quien recién empieza",
    price: "Gratis",
    features: ["Registro oficial de socio", "Newsletter del club", "5% de descuento en tienda", "Acceso a noticias y preventas"],
  },
  {
    id: "Chanka",
    tagline: "El favorito de la comunidad",
    price: "S/. 30 / mes",
    highlight: "Más popular",
    featured: true,
    features: ["Carnet digital", "15% de descuento en tienda", "Preventa de entradas", "Contenido exclusivo y comunidad privada"],
  },
  {
    id: "Guerrero",
    tagline: "La experiencia más completa",
    price: "S/. 60 / mes",
    dark: true,
    highlight: "Premium",
    features: ["Todo lo anterior", "30% de descuento en tienda", "Preventa preferente", "Eventos y experiencias especiales"],
  },
];

