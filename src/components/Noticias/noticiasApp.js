// src/components/noticias/newsApp.js
export default function newsApp() {
    return {
        filtroActivo: 'TODAS',
        paginaActual: 1,
        noticias: [],
        imagenesMap: {},
        filtrosDisponibles: [],
        itemsPorPagina: 6,
        isReady: false,  // ← AGREGAR ESTO

        // Mapeo de meses español -> inglés
        mesesMap: {
            'Enero': 'January', 'Febrero': 'February', 'Marzo': 'March',
            'Abril': 'April', 'Mayo': 'May', 'Junio': 'June',
            'Julio': 'July', 'Agosto': 'August', 'Septiembre': 'September',
            'Octubre': 'October', 'Noviembre': 'November', 'Diciembre': 'December'
        },

        // Convertir fecha en español a timestamp
        fechaATimestamp(fechaStr) {
            let fechaModificada = fechaStr;
            // Reemplazar mes en español por inglés
            for (const [es, en] of Object.entries(this.mesesMap)) {
                if (fechaStr.includes(es)) {
                    fechaModificada = fechaStr.replace(es, en);
                    break;
                }
            }
            return new Date(fechaModificada).getTime();
        },

        // Ordenar noticias por fecha (más reciente primero)
        ordenarNoticias(noticiasArray) {
            return [...noticiasArray].sort((a, b) => {
                return this.fechaATimestamp(b.fecha) - this.fechaATimestamp(a.fecha);
            });
        },

        get noticiasFiltradas() {
            let filtradas;
            if (this.filtroActivo === 'TODAS') {
                filtradas = this.noticias;
            } else {
                filtradas = this.noticias.filter(n => n.categoria === this.filtroActivo);
            }
            // Mantener orden cronológico después de filtrar
            return this.ordenarNoticias(filtradas);
        },

        get totalPages() {
            return Math.ceil(this.noticiasFiltradas.length / this.itemsPorPagina);
        },

        get noticiasPaginadas() {
            const start = (this.paginaActual - 1) * this.itemsPorPagina;
            const end = start + this.itemsPorPagina;
            return this.noticiasFiltradas.slice(start, end);
        },

        init() {
            const el = this.$el;
            console.log("Inicializando newsApp...");

            if (el.dataset.noticias) {
                const noticiasCargadas = JSON.parse(el.dataset.noticias);
                // Ordenar al cargar inicialmente
                this.noticias = this.ordenarNoticias(noticiasCargadas);
                console.log(`✅ Cargadas ${this.noticias.length} noticias`);
            }
            if (el.dataset.imagenes) {
                this.imagenesMap = JSON.parse(el.dataset.imagenes);
                console.log("✅ Imágenes cargadas");
            }
            if (el.dataset.filtros) {
                this.filtrosDisponibles = JSON.parse(el.dataset.filtros);
                console.log(`✅ Filtros: ${this.filtrosDisponibles.join(', ')}`);
            }
            
            // Mostrar el componente cuando todo está listo
            this.isReady = true;
            console.log("✅ Componente listo, mostrando...");
        },

        cambiarFiltro(filtro) {
            this.filtroActivo = filtro;
            this.paginaActual = 1;
        }
    };
}