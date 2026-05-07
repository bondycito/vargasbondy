// src/data/navigation.ts
export type NavLink = {
    label: string;
    to: string;
};

export const navLinks: NavLink[] = [
    { label: "Inicio", to: "/" },
    { label: "Noticias", to: "/noticias" },
    { label: "Partidos", to: "/partidos" },
    { label: "Plantilla", to: "/plantilla" },
    { label: "Historia", to: "/historia" },
    // { label: "Tienda", to: "/tienda" },
    // { label: "Socios", to: "/socios" },
];

export const ctaButton = {
    //label: "Tienda",
    //to: "/",
};
