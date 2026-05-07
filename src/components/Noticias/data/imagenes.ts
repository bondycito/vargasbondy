// src/data/imagenes.ts
import type { ImageMetadata } from 'astro';

// Importar TODAS las imágenes automáticamente (eager: true carga en build time)
const imagenesModule = import.meta.glob<{ default: ImageMetadata }>(
    '../assets/img/*.{jpg,jpeg,png,webp}',
    { eager: true } // Esto hace que las imágenes estén disponibles inmediatamente
);

// Construir el mapa de imágenes automáticamente
export const mapaImagenes: Record<string, ImageMetadata> = {};

// Recorrer todas las imágenes encontradas
for (const [path, modulo] of Object.entries(imagenesModule)) {
    // Extraer el nombre del archivo sin extensión
    // Ej: '../../assets/images/noticias/match-utc.jpg' -> 'match-utc'
    const fileName = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
    mapaImagenes[fileName] = modulo.default;
}

// Buscar una imagen default (cualquier imagen que se llame default o la primera encontrada)
const defaultImage = mapaImagenes['default'] || Object.values(mapaImagenes)[0];
mapaImagenes['default'] = defaultImage;

// Helper type-safe para obtener imágenes
export function obtenerImagen(key: string): ImageMetadata {
    return mapaImagenes[key] || mapaImagenes.default;
}

// Tipo para autocompletado en noticias.ts
export type NombreImagen = keyof typeof mapaImagenes;