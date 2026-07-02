export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    alt: string;
    challenge: string;
    solution: string;
    impact: string;
    architecture: string[];
    link?: string;
    linkType?: 'article' | 'demo';
    github?: string;
    metric?: string;
    video?: string;
}


export interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
}

export interface EducationItem {
    degree: string;
    school: string;
    status: string;
}

export interface Publication {
    title: string;
    source: string;
    date: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
}

export interface TranslationDict {
    nav: {
        projects: string;
        experience: string;
        stack: string;
        contact: string;
    };
    hero: {
        status: string;
        available: string;
        ctaProjects: string;
        ctaContact: string;
        description: string;
    };
    quote: {
        text: string;
        author: string;
        subtext: string;
    };
    titles: {
        projects: string;
        projectsSubtitle: string;
        experience: string;
        stack: string;
        stackSubtitle: string;
        education: string;
        languages: string;
        curatedCode: string;
        curatedCodeSubtitle: string;
        contact: string;
        contactSubtitle: string;
        contactDesc: string;
        contactCTA: string;
        copyEmail: string;
        copied: string;
        featuredOracle: string;
        fullSpecs: string;
        press: string;
        pressSubtitle: string;
        pipelineSection: string;
        pipelineSectionSubtitle: string;
    };
    metrics: {
        experience: string;
        projects: string;
        uptime: string;
        technologies: string;
    };
    languages: {
        spanish: string;
        spanishLevel: string;
        english: string;
        englishLevel: string;
        portuguese: string;
        portugueseLevel: string;
    };
    pipeline: {
        title: string;
        status: string;
        active: string;
        keyTech: string;
        appliedProjects: string;
        studyCase: string;
        techArchitecture: string;
        viewOfficial: string;
        viewLiveDemo: string;
        stages: Array<{
            id: string;
            title: string;
            subtitle: string;
            description: string;
            techStack: string[];
            metrics: string[];
            projects: Array<{ name: string; desc: string }>;
        }>;
    };
    mainProjects: Project[];
    secondaryProjects: Project[];
    publications: Publication[];
    experience: ExperienceItem[];
    education: EducationItem[];
}

export const translations: Record<'es' | 'en', TranslationDict> = {
    es: {
        nav: {
            projects: "Proyectos",
            experience: "Experiencia",
            stack: "Stack",
            contact: "Contacto"
        },
        hero: {
            status: "SYSTEM: ONLINE",
            available: "// DISPONIBLE PARA NUEVOS PROYECTOS",
            ctaProjects: "VER PROYECTOS",
            ctaContact: "ESTABLECER CONEXIÓN",
            description: "Diseño, opero y automatizo plataformas de datos escalables. Especializado en migración de pipelines (ETL/ELT), arquitecturas dimensionales de nube (Snowflake/Azure/Fabric) y optimización de flujos corporativos de alta transaccionalidad."
        },
        quote: {
            text: "La civilización avanza al aumentar el número de operaciones que podemos realizar sin tener que pensar en ellas.",
            author: "Alfred North Whitehead",
            subtext: "Diseño sistemas de datos para que eso ocurra."
        },
        titles: {
            projects: "Logros y Proyectos",
            projectsSubtitle: "Proyectos de misión crítica utilizados por organizaciones públicas y privadas.",
            experience: "Trayectoria Profesional",
            stack: "Experticia Técnica",
            stackSubtitle: "Desde mainframes COBOL/DB2 hasta nubes Snowflake/AWS: modernización de ecosistemas completos sin romper operaciones críticas.",
            education: "Formación Académica",
            languages: "Idiomas",
            curatedCode: "Código Curado & Herramientas de Ingeniería",
            curatedCodeSubtitle: "Repositorios seleccionados que contienen herramientas, automatizaciones y prototipos desarrollados para resolver problemas reales de negocio, datos y productividad técnica.",
            contact: "Hablemos de tu Próximo Desafío",
            contactSubtitle: "¿Necesitás a alguien que diseñe, implemente y mantenga tu plataforma de datos sin romper producción?",
            contactDesc: "Estoy disponible para proyectos de arquitectura de datos, migración a la nube y consultoría estratégica para sistemas de alta complejidad.",
            contactCTA: "Agenda una llamada o escribime",
            copyEmail: "Copiar Email",
            copied: "¡Copiado!",
            featuredOracle: "Destacado por Oracle",
            fullSpecs: "ESPECIFICACIONES COMPLETAS",
            press: "Apariciones en Prensa & Casos de Éxito",
            pressSubtitle: "Menciones oficiales y publicaciones de ingeniería sobre arquitecturas de misión crítica implementadas.",
            pipelineSection: "Arquitectura de Pipelines de Datos",
            pipelineSectionSubtitle: "Monitoreo técnico de fases: haga clic en los casos de estudio aplicados para explorar su diseño."
        },
        metrics: {
            experience: "Años de Experiencia",
            projects: "Proyectos Completados",
            uptime: "Uptime Promedio",
            technologies: "Tecnologías Dominadas"
        },
        languages: {
            spanish: "Español",
            spanishLevel: "Nativo",
            english: "Inglés",
            englishLevel: "C1 (Avanzado)",
            portuguese: "Portugués",
            portugueseLevel: "B1 (Intermedio)"
        },
        pipeline: {
            title: "PIPELINE_MONITOR // ARQUITECTURA DE DATOS",
            status: "STATUS: OPERATIONAL | REPLICA: STANDBY | DB: CODE-DRIVEN",
            active: "Activo",
            keyTech: "// TECNOLOGÍAS CLAVE",
            appliedProjects: "// PROYECTOS DONDE SE APLICA",
            studyCase: "Caso de Estudio",
            techArchitecture: "Arquitectura Técnica",
            viewOfficial: "Ver publicación oficial",
            viewLiveDemo: "Probar Demo en Vivo",
            stages: [
                {
                    id: 'ingestion',
                    title: '01. Fuentes & Ingesta',
                    subtitle: 'Conexión a orígenes heterogéneos',
                    description: 'Extracción segura de datos desde sistemas legacy bancarios (Mainframe DB2), APIs transaccionales con OAuth2 (VTEX, Mercado Libre, Rappi), archivos comerciales (Google Drive API) y web scrapers de alta velocidad con evasión de bloqueos.',
                    techStack: ['REST APIs', 'OAuth 2.0', 'Playwright', 'Drive API', 'Mainframe DB2/CICS'],
                    metrics: [
                        'Procesamiento incremental',
                        'Descargas en streaming de gran volumen',
                        'Validación automática de consistencia e integridad (Gap Analysis)'
                    ],
                    projects: [
                        { name: 'Digital Sales Tracking: Pipelines de Sell-Out (BeOn)', desc: 'Descarga en streaming de datos comerciales y EANs mediante APIs de marketplaces.' },
                        { name: 'PepsiCo: Ingestor Multimarketplace (BeOn)', desc: 'Scrapers configurables para iFood BR, Rappi y DiDi Food con rotación de proxies.' },
                        { name: 'Brand Protection & Compliance (BeOn)', desc: 'Auditoría automatizada en MercadoLibre y NLP para Nutricia Bagó.' }
                    ]
                },
                {
                    id: 'transformation',
                    title: '02. Procesamiento & ETL',
                    subtitle: 'Cómputo, transformación y limpieza',
                    description: 'Normalización, limpieza y enriquecimiento de flujos de datos. Orquestación batch robusta e idempotente en Spark y motores ETL licenciados, con esquemas centralizados de auditoría y manejo transaccional de excepciones.',
                    techStack: ['PySpark (Fabric)', 'Oracle ODI 12c', 'Python (Pandas)', 'Pentaho ETL', 'KNIME'],
                    metrics: [
                        '99.9% disponibilidad operativa de cargas batch complejas',
                        'Alertas proactivas ante anomalías en logs históricos',
                        'Modelos de auditoría de ejecución centralizados'
                    ],
                    projects: [
                        { name: 'Omnichannel Analytics (BeOn)', desc: 'Refactorización y unificación de consultas con procesos idempotentes de backfill.' },
                        { name: 'Modelo Analítico Corporativo (Laboratorios Bagó)', desc: 'Orquestación de flujos globales con ODI y consolidación de inventarios en tiempo real.' }
                    ]
                },
                {
                    id: 'storage',
                    title: '03. Storage & Warehousing',
                    subtitle: 'Arquitecturas dimensionales y Cloud',
                    description: 'Estructuración de datos bajo arquitectura Medallion (OneLake Delta Tables) y Data Warehouses tradicionales. Implementación de infraestructuras Database-as-Code (GitOps) seguras bajo regulaciones ISO 27001.',
                    techStack: ['OneLake (Medallion)', 'Snowflake', 'Azure SQL (Dacpac)', 'PostgreSQL (PostGIS)', 'Delta Tables'],
                    metrics: [
                        'Modelado dimensional robusto (Star Schema / Snowflake)',
                        'Infraestructura inmutable: Database-as-Code y CI/CD con GitHub Actions',
                        'Optimización de índices y vistas materializadas complejas'
                    ],
                    projects: [
                        { name: 'Azure SQL Version Control & GitOps (BeOn)', desc: 'Respaldo automático de esquemas DDL e inmutabilidad de logs mediante Actions y PowerShell SMO.' },
                        { name: 'Reingeniería SQL & ISO 27001 (BeOn)', desc: 'Rediseño seguro de bases de datos relacionales, stored procedures modulares y checksums.' }
                    ]
                },
                {
                    id: 'analytics',
                    title: '04. Analítica & Negocio',
                    subtitle: 'Visualización y toma de decisiones',
                    description: 'Traducción de millones de filas procesadas en tableros interactivos de autoservicio para la toma de decisiones críticas corporativas, optimización de recursos y automatización administrativa.',
                    techStack: ['Power BI', 'Streamlit', 'Tableau', 'Looker Studio', 'Automated Excels'],
                    metrics: [
                        '+20% productividad operativa y reducción de tiempos de decisión (Bagó)',
                        '-90% en la carga manual de planillas comerciales (BeOn)',
                        'Análisis de desvíos y KPIs del scheduler (ETL Observability)'
                    ],
                    projects: [
                        { name: 'ETL Observability: Auditoría & Monitor de KPIs (BeOn)', desc: 'Reportes automatizados de cumplimiento de SLAs, tasas de éxito y análisis de desvíos.' },
                        { name: 'Plataforma GIS de Seguridad Pública (Ministerio de Seguridad)', desc: 'Base de datos centralizada de delincuencia y patrullaje para asignación de recursos.' },
                        { name: 'SNIC: Dashboard de Inteligencia & PWA', desc: 'Panel interactivo Next.js/Plotly con mapas coropléticos y soporte offline PWA.' }
                    ]
                }
            ]
        },
        mainProjects: [
            {
                title: "Digital Sales Tracking: Pipelines de Sell-Out (BeOn)",
                description: "Flujos unificados de ingesta diaria, validaciones de esquema (Schema Enforcement) e integración de sell-out para Beiersdorf (BDF), con lógica avanzada de apertura de combos.",
                tags: ["Microsoft Fabric", "PySpark", "OneLake", "Data Quality", "ETL / ELT"],
                image: "/images/projects/sellout-dashboard.png",
                alt: "Pipelines de Sell-Out y Digital Shelf en Microsoft Fabric con PySpark y APIs de e-commerce",
                challenge: "Beiersdorf necesitaba procesar e integrar diariamente información de ventas y stock (sell-out) proveniente de diversos distribuidores y retailers. El proceso manual era propenso a errores, con esquemas inconsistentes y problemas de duplicidad de ventas debido a la apertura de combos comerciales.",
                solution: "Diseñé e implementé un pipeline diario automatizado en Microsoft Fabric con PySpark y Delta Lake. Implementé validaciones estrictas de esquema (11 columnas requeridas), limpieza de nulos y un algoritmo de desglose para combos comerciales que distribuye los componentes y preserva la venta financiera en una única fila para evitar duplicaciones.",
                impact: "Aseguramiento de la integridad de los datos de ventas al 100%, disponibilidad del pipeline a las 09:00 AM ART de forma consistente y eliminación total de la duplicidad de ingresos en Power BI.",
                architecture: ["Google Drive API (Landing Ingest)", "Silver Layer Delta (dbo.sl_bdf_sellouts)", "Join Dimensional & Fallback Match (EAN/Cliente)", "Apertura de Combos (Desglose en N-filas)", "Auditoría de Huérfanos (dbo.audit_bdf_comboshuerfanos)"],
                metric: "SLA Ingesta: 09:00 AM",
                video: "/videos/pipeline-medallion.mp4"
            },
            {
                title: "PepsiCo: Ingestor Multimarketplace (BeOn)",
                description: "Ingesta automatizada y normalización de catálogos, stock y precios de marketplaces (iFood BR, Rappi LATAM, DiDi Food MX) para análisis competitivo de marcas PepsiCo.",
                tags: ["Python", "Ingesta de APIs", "Calidad de Datos", "PyTest"],
                image: "/images/projects/pepsico-ingestor.png",
                alt: "Estructura de ingesta multi-marketplace PepsiCo con Python y APIs",
                challenge: "PepsiCo requería recopilar información competitiva de catálogos, disponibilidad de stock y variaciones de precio en múltiples plataformas de delivery (iFood, Rappi, DiDi Food) en Latinoamérica de manera automatizada y evasiva contra bloqueos.",
                solution: "Desarrollé un motor modular en Python utilizando scrapers avanzados para APIs móviles y web. Integré rotación de proxies, control de sesiones dinámicas, suite de pruebas con PyTest y normalización en formatos optimizados para análisis corporativo.",
                impact: "Automatización del monitoreo de precios y stock en tres países, reduciendo a cero el esfuerzo manual y garantizando la recolección diaria de datos sin bloqueos.",
                architecture: ["Motor Ingestor de APIs (Requests/OAuth2)", "Ejecutor Basado en Configuración (JSON)", "Normalizador y Transformador de Datos", "Manejador de Codificación (Excel UTF-8 BOM)", "Pruebas Unitarias PyTest"],
                metric: "Evasión: Proxy Rotativo"
            },
            {
                title: "Brand Protection & Compliance (BeOn)",
                description: "Plataforma de auditoría automatizada en MercadoLibre para Nutricia Bagó. Identifica desvíos de precios (MAP), fraude de volumen y reventa no autorizada de donaciones mediante NLP y Playwright.",
                image: "/images/projects/brand-protection.png",
                alt: "Dashboard de Brand Protection para Nutricia Bagó con Supabase y React",
                tags: ["Playwright", "Supabase", "React", "Fuzzy Matching", "NLP Regex", "OAuth 2.0"],
                challenge: "Nutricia Bagó necesitaba identificar y mitigar la venta no autorizada de sus productos en MercadoLibre, incluyendo desvíos de precios (MAP), adulteración de empaques y reventa ilegal de insumos originalmente donados a ONGs.",
                solution: "Creé una plataforma híbrida que combina Playwright Stealth para scraping web robusto con procesamiento de lenguaje natural (NLP) y coincidencia difusa (Fuzzy Matching). Esto permite identificar publicaciones informales y calcular cantidades netas exactas.",
                impact: "Precisión de clasificación del 98.4%, permitiendo al equipo legal detectar y remover de inmediato publicaciones en infracción con total trazabilidad.",
                architecture: ["Catálogo Maestro Excel (BPP SKU Ingest)", "Scraper Híbrido (Meli API + Playwright Stealth)", "Identificador Difuso de SKUs (Fuzzy Matching)", "Validador Volumétrico y Coeficiente de Densidad", "Clasificador BPP de Infracciones (Precios/Fraude)"],
                github: "https://github.com/a-martyniuk/brand-protection-poc",
                metric: "Precisión: 98.4% Clasificación"
            },
            {
                title: "ETL Observability: Auditoría & Monitor de KPIs (BeOn)",
                description: "Solución de observabilidad de procesos críticos corporativos. Audita la ejecución diaria, calcula tasas de éxito, mide SLA y detecta desvíos de calendarización.",
                tags: ["Python", "PowerShell", "Stored Procedures", "ETL Logs"],
                image: "/images/projects/ecoreport-audit.png",
                alt: "Dashboard de auditoría de pipelines ETL y logs de ejecución",
                challenge: "Falta de visibilidad unificada sobre el estado y rendimiento de los procesos batch ETL multimarca (Danone, Unilever, Essity), dificultando el cumplimiento de SLAs de entrega de datos y la detección temprana de fallos.",
                solution: "Construí un framework de observabilidad que extrae y unifica logs de bases de datos relacionales mediante PowerShell y Python. Mapea la variación diaria y realiza análisis de brechas (Gap Analysis) entre las ejecuciones programadas y las reales.",
                impact: "Reducción del tiempo de diagnóstico de fallos en pipelines y garantía del 99.9% de disponibilidad operativa a través del monitoreo proactivo.",
                architecture: ["Extractor de Logs SQL (PowerShell/Python)", "Motor de Cálculo de KPIs de SLA", "Algoritmo de Gap Analysis (Schedules vs Logs)", "Log de Variación Diaria de Modelos", "Reportes Markdown Automatizados"],
                metric: "Auditoría: Logs SQL"
            },
            {
                title: "Modelo Analítico Corporativo (Laboratorios Bagó)",
                description: "Plataforma de datos de misión crítica para una de las mayores farmacéuticas de Argentina, que permitió aumentar en 20% la productividad y reducir tiempos de decisión operativa.",
                tags: ["Oracle", "ODI 12c", "AWS", "Snowflake"],
                link: "https://blogs.oracle.com/oracle-latinoamerica/post/laboratorios-bag-elev-su-produccin-en-un-20-con-el-apoyo-de-la-nube-de-oracle",
                linkType: "article",
                image: "/images/projects/bago-dashboard.png",
                alt: "Plataforma ETL Laboratorios Bagó con Oracle ODI, AWS y Snowflake - Dashboard analítico corporativo",
                challenge: "Existencia de sistemas legacy aislados que ralentizaban la toma de decisiones comerciales y operativas en una de las farmacéuticas líderes de Argentina.",
                solution: "Lideré la migración del ecosistema analítico tradicional a una arquitectura en la nube con Oracle ODI 12c, AWS S3 y Snowflake, estandarizando el modelo de datos corporativo.",
                impact: "Aumento documentado del 20% en la productividad operativa de líneas clave y consolidación en tiempo real de inventarios.",
                architecture: ["Sistemas Transaccionales", "Oracle ODI (ETL)", "AWS S3 Staging", "Snowflake DWH", "Dashboards Ejecutivos"],
                metric: "Productividad: +20%"
            },
            {
                title: "Plataforma GIS de Seguridad Pública (Ministerio de Seguridad)",
                description: "Plataforma provincial de análisis criminal utilizada por fuerzas de seguridad para asignación de recursos, detección de hotspots y toma de decisiones tácticas en tiempo real.",
                tags: ["PostgreSQL", "ArcGIS", "Python", "Sistemas de Misión Crítica"],
                image: "/images/projects/ministerio-heatmap.png",
                alt: "Sistema de análisis criminal con PostgreSQL PostGIS y ArcGIS mostrando mapas de calor geoespacial",
                challenge: "Dificultad para asignar de manera eficiente los recursos de patrullaje policial en 135 municipios debido a la falta de análisis criminal georreferenciado en tiempo real.",
                solution: "Diseñé pipelines de ingesta espacial en Pentaho y Python para consolidar estadísticas criminales (SNIC) en PostgreSQL/PostGIS, integrando mapas de calor interactivos en ArcGIS.",
                impact: "Optimización del 15% en la distribución territorial de fuerzas de seguridad y automatización del flujo de denuncias con el poder judicial.",
                architecture: ["Reportes Policiales", "Python Scripts", "PostgreSQL PostGIS", "ArcGIS API", "Centros de Operaciones"],
                metric: "Eficiencia: +15%"
            }
        ],
        secondaryProjects: [
            {
                title: "Azure SQL Version Control & GitOps (BeOn)",
                description: "Solución automatizada de base de datos como código mediante GitHub Actions y scripts PowerShell (SMO/T-SQL) para el respaldo de esquemas DDL e inmutabilidad de logs bajo estándares ISO 27001.",
                image: "/images/projects/gitops-azure.png",
                alt: "Versionado de esquemas Azure SQL y Database-as-Code con GitHub Actions",
                tags: ["GitHub Actions", "PowerShell SMO", "Azure SQL", "GitOps"],
                challenge: "Falta de control de cambios y trazabilidad sobre los esquemas de bases de datos relacionales, lo que dificultaba el cumplimiento de las normativas de seguridad ISO 27001.",
                solution: "Desarrollé una solución de base de datos como código (GitOps) usando PowerShell SMO y GitHub Actions para versionar automáticamente todas las DDL (tablas, stored procedures, vistas) en cada deploy.",
                impact: "Garantía de auditoría e inmutabilidad de logs requeridas para certificar la norma de seguridad de la información ISO 27001.",
                architecture: ["GitHub Actions (CI/CD)", "PowerShell SMO", "Base de datos Azure SQL", "Respaldo de esquema DDL", "Inmutabilidad de logs"],
                github: "https://github.com/a-martyniuk/azure-sql-version-control",
                metric: "Seguridad: ISO 27001",
                video: "/videos/gitops-database.mp4"
            },
            {
                title: "SNIC: Dashboard de Inteligencia & PWA",
                description: "Dashboard de inteligencia de seguridad con mapas coropléticos interactivos, análisis de correlación y modelos predictivos sobre datos oficiales del SNIC.",
                image: "/images/projects/snic-dashboard.png",
                alt: "Dashboard de análisis criminal con Next.js, Plotly, Service Workers y mapas coropléticos interactivos",
                tags: ["Next.js", "Plotly.js", "PWA", "TypeScript"],
                challenge: "Facilitar el acceso y análisis offline de estadísticas criminales oficiales para personal de campo sin depender de conexiones de red estables.",
                solution: "Desarrollé una aplicación Next.js y Plotly adaptada como Progressive Web App (PWA) con mapas coropléticos interactivos y soporte offline total mediante Service Workers.",
                impact: "Acceso instantáneo a mapas de calor criminales y modelos predictivos sin conectividad, aumentando la movilidad operativa.",
                architecture: ["Fuentes SNIC (CSV & GeoJSON locales)", "Next.js (App Router)", "Plotly.js (Visualización)", "Service Worker (Caché offline)", "Despliegue en la nube de Vercel"],
                github: "https://github.com/a-martyniuk/snic-analisis-criminal",
                link: "https://snic-web.vercel.app/",
                linkType: "demo",
                metric: "Soporte: Offline PWA"
            },
            {
                title: "MELI AIO Dashboard",
                description: "Panel integral para la gestión y automatización de facturación e inventario en Mercado Libre. Backend en Python y flujos OAuth 2.0 con rotación de tokens.",
                image: "/images/projects/meli-automation.png",
                alt: "MELI AIO Dashboard con backend en FastAPI y base PostgreSQL",
                tags: ["FastAPI", "PostgreSQL", "OAuth 2.0", "Next.js"],
                challenge: "Vendedores de Mercado Libre con altos volúmenes de venta necesitaban unificar la facturación, el control de inventario y la analítica en un panel centralizado.",
                solution: "Creé un panel integral con frontend Next.js y un backend en FastAPI con PostgreSQL, implementando integraciones directas a la API de Mercado Libre con flujos OAuth 2.0 y rotación automática de tokens.",
                impact: "Automatización del control de stock y generación de facturas, eliminando la gestión manual y mejorando la consistencia operativa.",
                architecture: ["Mercado Libre API (OAuth 2.0)", "Backend FastAPI", "PostgreSQL (Inventario)", "Frontend Next.js", "Motor de rotación de tokens"],
                github: "https://github.com/a-martyniuk/meli-aio",
                metric: "Auth: OAuth 2.0"
            },
            {
                title: "Reingeniería SQL & ISO 27001 (BeOn)",
                description: "Reestructuración de bases de datos relacionales bajo estándares de seguridad ISO 27001. Implementación de stored procedures T-SQL modulares, control transaccional de logs y queries de integridad mediante Checksums.",
                image: "/images/projects/sql-reengineering.png",
                alt: "Rediseño y reingeniería SQL Server bajo estándares de seguridad ISO 27001",
                tags: ["SQL Server", "T-SQL", "ISO 27001", "Integrity"],
                challenge: "Bases de datos legacy con stored procedures monolíticos y sin control transaccional adecuado, vulnerando normativas de integridad y auditoría.",
                solution: "Refactoricé la arquitectura relacional a diseños modulares T-SQL con control estructurado de logs transaccionales y validación de integridad de datos sensibles mediante checksums.",
                impact: "Cumplimiento estricto del estándar ISO 27001 y reducción del riesgo de alteración de registros históricos.",
                architecture: ["Base de datos legacy SQL Server", "Procedimientos almacenados T-SQL (Modulares)", "Log transaccional", "Consultas de integridad con Checksums", "Cumplimiento ISO 27001"],
                github: "https://github.com/a-martyniuk/sql-reengineering-iso27001",
                link: "/articles/sql-reengineering-transactional-auditing",
                linkType: "article",
                metric: "Integridad: Checksums"
            },
            {
                title: "CABA Real Estate Scraper & Analyzer",
                description: "Scraper inmobiliario automatizado para Buenos Aires con Playwright, Supabase, dashboard en React/Vite, algoritmos de detección de ofertas y alertas autocurativas en Telegram.",
                image: "/images/projects/scraper-dashboard.png",
                alt: "Dashboard de CABA Real Estate Scraper con mapa interactivo en React y métricas de mercado",
                tags: ["Playwright", "Supabase", "Vite / React", "Telegram Bot"],
                challenge: "Identificar oportunidades reales en el mercado de alquileres de Buenos Aires requería revisar manualmente múltiples portales diariamente.",
                solution: "Desarrollé un flujo automatizado con Playwright y GitHub Actions que extrae propiedades, calcula el promedio de precios de la zona y envía alertas a Telegram ante ofertas de valor.",
                impact: "Identificación en tiempo real de propiedades publicadas a más de un 15% por debajo del precio promedio del vecindario de manera 100% automatizada.",
                architecture: ["Scrapers Headless (Playwright)", "Base de Datos Supabase", "Algoritmos de Oportunidad (Python)", "Notificador de Alertas (Telegram API)", "Dashboard Map-based (React/Vite)"],
                github: "https://github.com/a-martyniuk/caba-real-estate-scraper",
                link: "/articles/caba-real-estate-scraper-postmortem",
                linkType: "article",
                metric: "Alertas: Telegram Bot"
            }
        ],
        publications: [
            {
                title: "Laboratorios Bagó elevó su producción en un 20% con el apoyo de la nube de Oracle",
                source: "Oracle Blog Latinoamerica",
                date: "Noviembre 2023",
                description: "Caso de éxito corporativo oficial publicado por Oracle que describe la migración integral de bases de datos analíticas heredadas a una arquitectura moderna en Snowflake y la orquestación global mediante Oracle Data Integrator (ODI).",
                link: "https://blogs.oracle.com/oracle-latinoamerica/post/laboratorios-bag-elev-su-produccin-en-un-20-con-el-apoyo-de-la-nube-de-oracle",
                image: "/images/projects/oracle_bago_publication.png",
                tags: ["Oracle Cloud", "ODI 12c", "Snowflake", "Caso de Éxito"]
            }
        ],
        experience: [
            {
                title: "Senior Data Engineer (Proyecto Acotado)",
                company: "BeOn Digital Transformation Partners",
                location: "Buenos Aires, Argentina",
                period: "Feb 2026 – Actualidad",
                description: [
                    "Diseño de pipelines en Fabric (PySpark) y arquitecturas híbridas bajo Medallion (Bronze/Silver/Gold) en OneLake, estructurando modelos Star Schema y Snowflake.",
                    "Refactorización del modelo analítico de compliance y sell-out (Danone, Unilever, PepsiCo), migrando consultas a procedimientos T-SQL parametrizados e idempotentes con control transaccional.",
                    "Resolución de incidente crítico en Azure SQL para PerfectEStores: Optimización de sp_PriceIndexCompliance (reducción de ejecución de >3 horas a 210ms, aceleración 50,000x) y corrección de concurrencia y reconexión en el orquestador Python.",
                    "Implementación de ingesta incremental desde APIs complejas de marketplaces (Mercado Libre, Rappi, VTEX) con flujos OAuth2 y Google Workspace APIs.",
                    "Diseño de arquitectura Database-as-Code (GitOps) para Azure SQL bajo ISO 27001 con GitHub Actions y PowerShell SMO."
                ]
            },
            {
                title: "Ingeniero de Sistemas IoT (Automatización & Smart Grids)",
                company: "MJ Instalaciones (Emprendimiento familiar)",
                location: "Buenos Aires, Argentina",
                period: "Jul 2024 – Actualidad",
                description: [
                    "Diseño y desarrollo de redes de automatización IoT y smart grids, optimizando la ingesta de telemetría y eficiencia energética de dispositivos distribuidos.",
                    "Implementación de micro-pipelines para el procesamiento en tiempo real de métricas de consumo de energía, seguridad y redes WiFi Mesh."
                ]
            },
            {
                title: "Senior Data Engineer & Analytics Engineer",
                company: "Mazz Soluciones SRL (Data Raiders)",
                location: "CABA, Argentina",
                period: "Jun 2022 – Jul 2024",
                description: [
                    "Desarrollo de pipelines ETL/ELT híbridos y productivos (Oracle Data Integrator 12c e integraciones Python), procesando millones de registros diarios desde AWS S3 hacia DWH.",
                    "Participación en el desarrollo del Modelo Analítico Corporativo (MAC) para Laboratorios Bagó, estandarizando modelos que impulsaron 20% la productividad de líneas clave.",
                    "Diseño y optimización de modelos dimensionales robustos, vistas materializadas y procedimientos almacenados (PL/SQL) para analítica compleja."
                ]
            },
            {
                title: "Data Engineer & GIS Specialist",
                company: "Ministerio de Seguridad de la Provincia de Buenos Aires",
                location: "Buenos Aires, Argentina",
                period: "May 2014 – May 2022",
                description: [
                    "Diseño de pipelines de ingesta (ETL) en Pentaho, KNIME y Python (Pandas) para estadísticas criminales (SNIC), procesando 50k+ registros en Parquet hacia BigQuery.",
                    "Construcción de tableros interactivos e indicadores de hotspots en ArcGIS, optimizando un 15% la asignación territorial de recursos policiales en 135 municipios.",
                    "Participación en el SID (Sistema de Información Delictual) digitalizando denuncias para automatizar la interoperabilidad con el sistema judicial (SIMP)."
                ]
            },
            {
                title: "Desarrollador COBOL / CICS / DB2",
                company: "TGV / CDA Informática (BBVA / MasterCard / Isban)",
                location: "Buenos Aires, Argentina",
                period: "Ene 2011 – Dic 2013",
                description: [
                    "Análisis técnico, codificación y pruebas unitarias de aplicaciones críticas de procesamiento financiero y bancario (proyectos MasterCard, FirstData, BBVA y Santander).",
                    "Mantenimiento y aseguramiento de performance de procesos batch complejos en Mainframe z/OS, CICS, JCL y DB2."
                ]
            }
        ],
        education: [
            {
                degree: "Licenciatura en TICs para la Seguridad Pública",
                school: "IUPFA - Instituto Universitario PFA",
                status: "Tesis Pendiente (Graduación esperada: Diciembre 2026)"
            },
            {
                degree: "Tecnicatura Superior en Análisis de Sistemas",
                school: "CAEEP (2017 - 2019)",
                status: "Completado"
            },
            {
                degree: "Técnico en Informática Personal y Profesional",
                school: "EET N°5 de Lanús (2005 - 2009)",
                status: "Completado"
            },
            {
                degree: "Tecnicatura Superior en Seguridad Pública",
                school: "Escuela de Policía Juan Vucetich (2014 - 2017)",
                status: "Investigaciones de Delitos Complejos"
            }
        ]
    },
    en: {
        nav: {
            projects: "Projects",
            experience: "Experience",
            stack: "Stack",
            contact: "Contact"
        },
        hero: {
            status: "SYSTEM: ONLINE",
            available: "// AVAILABLE FOR NEW PROJECTS",
            ctaProjects: "VIEW PROJECTS",
            ctaContact: "ESTABLISH CONNECTION",
            description: "I design, operate, and automate scalable data platforms. Specialized in migrating pipelines (ETL/ELT), cloud dimensional architectures (Snowflake/Azure/Fabric), and optimizing high-transaction corporate data flows."
        },
        quote: {
            text: "Civilization advances by extending the number of important operations which we can perform without thinking about them.",
            author: "Alfred North Whitehead",
            subtext: "I design data systems to make that happen."
        },
        titles: {
            projects: "Achievements & Projects",
            projectsSubtitle: "Mission-critical projects utilized by public and private organizations.",
            experience: "Professional Experience",
            stack: "Technical Expertise",
            stackSubtitle: "From legacy COBOL/DB2 mainframes to Snowflake/AWS clouds: modernizing entire ecosystems without breaking critical production operations.",
            education: "Academic Education",
            languages: "Languages",
            curatedCode: "Curated Code & Engineering Tools",
            curatedCodeSubtitle: "Selected repositories containing tools, automations, and prototypes developed to solve real business, data, and technical productivity problems.",
            contact: "Let's Talk About Your Next Challenge",
            contactSubtitle: "Do you need someone to design, implement, and maintain your data platform without breaking production?",
            contactDesc: "I am available for data architecture projects, cloud migration, and strategic consulting for highly complex systems.",
            contactCTA: "Schedule a call or write to me",
            copyEmail: "Copy Email",
            copied: "Copied!",
            featuredOracle: "Featured by Oracle",
            fullSpecs: "FULL SPECIFICATIONS",
            press: "Featured Press & Success Stories",
            pressSubtitle: "Official corporate press releases and engineering publications showcasing my database migrations and integrations.",
            pipelineSection: "Data Pipeline Architecture",
            pipelineSectionSubtitle: "Technical phase monitoring: click on the applied case studies to explore their design."
        },
        metrics: {
            experience: "Years of Experience",
            projects: "Completed Projects",
            uptime: "Average Uptime",
            technologies: "Mastered Technologies"
        },
        languages: {
            spanish: "Spanish",
            spanishLevel: "Native",
            english: "English",
            englishLevel: "C1 (Advanced)",
            portuguese: "Portuguese",
            portugueseLevel: "B1 (Intermediate)"
        },
        pipeline: {
            title: "PIPELINE_MONITOR // DATA ARCHITECTURE",
            status: "STATUS: OPERATIONAL | REPLICA: STANDBY | DB: CODE-DRIVEN",
            active: "Active",
            keyTech: "// KEY TECHNOLOGIES",
            appliedProjects: "// APPLIED PROJECTS",
            studyCase: "Study Case",
            techArchitecture: "Technical Architecture",
            viewOfficial: "View official article",
            viewLiveDemo: "Try Live Demo",
            stages: [
                {
                    id: 'ingestion',
                    title: '01. Sources & Ingestion',
                    subtitle: 'Connecting to heterogeneous sources',
                    description: 'Secure data extraction from legacy banking systems (Mainframe DB2), transactional APIs with OAuth2 (VTEX, Mercado Libre, Rappi), commercial spreadsheets (Google Drive API), and high-speed web scrapers with anti-blocking evasion.',
                    techStack: ['REST APIs', 'OAuth 2.0', 'Playwright', 'Drive API', 'Mainframe DB2/CICS'],
                    metrics: [
                        'Incremental processing',
                        'High-volume streaming downloads',
                        'Automated consistency and integrity validation (Gap Analysis)'
                    ],
                    projects: [
                        { name: 'Digital Sales Tracking: Sell-Out Pipelines (BeOn)', desc: 'Streaming download of commercial data and EANs using marketplace APIs.' },
                        { name: 'PepsiCo: Multi-Marketplace Ingestor (BeOn)', desc: 'Configurable scrapers for iFood BR, Rappi, and DiDi Food with proxy rotation.' },
                        { name: 'Brand Protection & Compliance (BeOn)', desc: 'Automated compliance auditing on MercadoLibre with NLP regex matching for Nutricia Bagó.' }
                    ]
                },
                {
                    id: 'transformation',
                    title: '02. Processing & ETL',
                    subtitle: 'Compute, transformation, and cleaning',
                    description: 'Normalization, cleaning, and enrichment of data flows. Robust and idempotent batch orchestration in Spark and licensed ETL engines, with centralized audit schemas and transactional exception handling.',
                    techStack: ['PySpark (Fabric)', 'Oracle ODI 12c', 'Python (Pandas)', 'Pentaho ETL', 'KNIME'],
                    metrics: [
                        '99.9% operational uptime of complex batch loads',
                        'Proactive alerts for historical log anomalies',
                        'Centralized execution audit models'
                    ],
                    projects: [
                        { name: 'Omnichannel Analytics (BeOn)', desc: 'Refactoring and unification of queries with idempotent backfill processes.' },
                        { name: 'Corporate Analytical Model (Laboratorios Bagó)', desc: 'Global flow orchestration with ODI and real-time inventory consolidation.' }
                    ]
                },
                {
                    id: 'storage',
                    title: '03. Storage & Warehousing',
                    subtitle: 'Dimensional architectures & Cloud',
                    description: 'Data structuring under Medallion architecture (OneLake Delta Tables) and traditional Data Warehouses. Implementation of secure Database-as-Code (GitOps) infrastructures under ISO 27001 regulations.',
                    techStack: ['OneLake (Medallion)', 'Snowflake', 'Azure SQL (Dacpac)', 'PostgreSQL (PostGIS)', 'Delta Tables'],
                    metrics: [
                        'Robust dimensional modeling (Star Schema / Snowflake)',
                        'Immutable infrastructure: Database-as-Code and CI/CD with GitHub Actions',
                        'Optimization of indexes and complex materialized views'
                    ],
                    projects: [
                        { name: 'Azure SQL Version Control & GitOps (BeOn)', desc: 'Automatic backup of DDL schemas and log immutability via Actions and PowerShell SMO.' },
                        { name: 'SQL Reengineering & ISO 27001 (BeOn)', desc: 'Secure redesign of relational databases, modular stored procedures, and checksums.' }
                    ]
                },
                {
                    id: 'analytics',
                    title: '04. Analytics & Business',
                    subtitle: 'Visualization and decision making',
                    description: 'Translating millions of processed rows into interactive self-service dashboards for critical corporate decision-making, resource optimization, and administrative automation.',
                    techStack: ['Power BI', 'Streamlit', 'Tableau', 'Looker Studio', 'Automated Excels'],
                    metrics: [
                        '+20% operational productivity and reduction in decision time (Bagó)',
                        '-90% in manual workload of commercial spreadsheets (BeOn)',
                        'Analysis of deviations and KPIs from the scheduler (ETL Observability)'
                    ],
                    projects: [
                        { name: 'ETL Observability: Audit & KPI Monitor (BeOn)', desc: 'Automated reports of SLA compliance, success rates, and deviation analysis.' },
                        { name: 'Public Safety GIS Platform (Ministry of Security)', desc: 'Centralized crime database and geographic resource mapping for tactical deployment.' },
                        { name: 'SNIC: Security Intelligence Dashboard & PWA', desc: 'Interactive Next.js/Plotly dashboard with choropleth maps and offline PWA support.' }
                    ]
                }
            ]
        },
        mainProjects: [
            {
                title: "Digital Sales Tracking: Sell-Out Pipelines (BeOn)",
                description: "Unified daily ingestion pipelines, strict schema enforcement, and sell-out integration for Beiersdorf (BDF) with advanced commercial combo exploding logic.",
                tags: ["Microsoft Fabric", "PySpark", "OneLake", "Data Quality", "ETL / ELT"],
                image: "/images/projects/sellout-dashboard.png",
                alt: "Sell-Out and Digital Shelf pipelines in Microsoft Fabric with PySpark and e-commerce APIs",
                challenge: "Beiersdorf needed to integrate and process daily sell-out sales and stock data from multiple retail channels. The manual pipeline was error-prone, suffered from schema inconsistency, and suffered from duplicate sales reporting due to retail promo packages (combos).",
                solution: "Designed and developed an automated Medallion pipeline in Microsoft Fabric using PySpark and Delta Lake. Implemented strict schema validation (checking 11 mandatory columns), null standardization, and a combo-exploding Spark algorithm that splits bundles while preserving sales revenue only on the first row to prevent financial duplicates in BI dashboards.",
                impact: "Ensured 100% sales data integrity, established a consistent daily ingestion SLA of 9:00 AM ART, and completely eliminated revenue double-counting in Power BI.",
                architecture: ["Google Drive API (Landing Ingest)", "Silver Layer Delta (dbo.sl_bdf_sellouts)", "Join Dimensional & Fallback Match (EAN/Cliente)", "Combo Exploding (N-Row Breakdown & Split)", "Orphans Audit Tables (dbo.audit_bdf_comboshuerfanos)"],
                metric: "Ingestion SLA: 09:00 AM",
                video: "/videos/pipeline-medallion.mp4"
            },
            {
                title: "PepsiCo: Multi-Marketplace Ingestor (BeOn)",
                description: "Automated ingestion and normalization of catalogs, stock, and pricing from marketplaces (iFood BR, Rappi LATAM, DiDi Food MX) for competitive brand analysis for PepsiCo.",
                tags: ["Python", "APIs Ingestion", "Data Quality", "PyTest"],
                image: "/images/projects/pepsico-ingestor.png",
                alt: "PepsiCo multi-marketplace ingestion structure with Python and APIs",
                challenge: "PepsiCo needed to automatically extract pricing, catalog, and stock data from various mobile delivery APIs (iFood, Rappi, DiDi Food) across Latin America while evading blocking mechanisms.",
                solution: "Developed a config-driven Python engine equipped with custom headless scrapers for mobile and web APIs, featuring proxy rotation, session handling, dynamic cookies, and a PyTest verification suite.",
                impact: "Fully automated daily price index tracking across three countries with zero manual maintenance and high resilience to platform updates.",
                architecture: ["API Ingestor Engine (Requests/OAuth2)", "Config-driven Runner (JSON configs)", "Data Normalizer & Transformer", "Encoding Handler (Excel UTF-8 BOM)", "PyTest Unit Testing"],
                metric: "Evasion: Proxy Rotation"
            },
            {
                title: "Brand Protection & Compliance (BeOn)",
                description: "Automated compliance auditing platform on MercadoLibre for Nutricia Bagó. Identifies price deviations (MAP), packaging fraud, and unauthorized resale of NGO donations using NLP and Playwright.",
                image: "/images/projects/brand-protection.png",
                alt: "Brand Protection Dashboard for Nutricia Bagó with Supabase and React",
                tags: ["Playwright", "Supabase", "React", "Fuzzy Matching", "NLP Regex", "OAuth 2.0"],
                challenge: "Nutricia Bagó required an automated way to audit MercadoLibre listings to detect unauthorized sellers, Minimum Advertised Price (MAP) violations, and the illegal resale of products donated to NGOs.",
                solution: "Built a hybrid intelligence engine using Playwright Stealth for web scraping combined with regex-based physical density extraction and fuzzy matching against the master SKU catalog.",
                impact: "Achieved a 98.4% classification accuracy, enabling the legal team to immediately identify and take action against compliance violations.",
                architecture: ["Excel Master Catalog (BPP SKU Ingest)", "Hybrid Scraper (Meli API + Playwright Stealth)", "Fuzzy SKU Matcher (Fuzzy Matching)", "Volumetric & Density Validator (NLP Regex)", "BPP Violation Classifier (Price/Quantity)"],
                github: "https://github.com/a-martyniuk/brand-protection-poc",
                metric: "Precision: 98.4% Match Rate"
            },
            {
                title: "ETL Observability: Audit & KPI Monitor (BeOn)",
                description: "Observability solution for critical corporate processes. Audits daily execution, calculates success rates, measures SLA, and detects scheduling deviations.",
                tags: ["Python", "PowerShell", "Stored Procedures", "ETL Logs"],
                image: "/images/projects/ecoreport-audit.png",
                alt: "Auditing dashboard for ETL pipelines and execution logs",
                challenge: "Lack of centralized tracking for multi-brand ETL pipelines (Danone, Unilever, Essity), making it difficult to detect failures early and enforce data SLAs.",
                solution: "Developed an observability framework querying SQL Server logs via PowerShell and Python, implementing a Gap Analysis algorithm to track actual vs scheduled runtimes.",
                impact: "Reduced pipeline diagnostics time significantly and maintained a 99.9% operational uptime via proactive alerting.",
                architecture: ["SQL Log Extractor (PowerShell/Python)", "SLA KPI Calculation Engine", "Gap Analysis Algorithm (Schedules vs Logs)", "Daily Model Variation Log", "Automated Markdown Reports"],
                metric: "Audit: SQL Logs"
            },
            {
                title: "Corporate Analytical Model (Laboratorios Bagó)",
                description: "Mission-critical data platform for one of the largest pharmaceutical companies in Argentina, boosting productivity by 20% and reducing operational decision times.",
                tags: ["Oracle", "ODI 12c", "AWS", "Snowflake"],
                link: "https://blogs.oracle.com/oracle-latinoamerica/post/laboratorios-bag-elev-su-produccin-en-un-20-con-el-apoyo-de-la-nube-de-oracle",
                linkType: "article",
                image: "/images/projects/bago-dashboard.png",
                alt: "Laboratorios Bagó ETL platform with Oracle ODI, AWS, and Snowflake - Corporate analytical dashboard",
                challenge: "Isolated legacy operational systems were slowing down critical inventory and sales analysis at one of Argentina's largest pharmaceutical groups.",
                solution: "Led the migration of legacy data architectures to a modern cloud data platform using Oracle ODI 12c, AWS S3, and Snowflake, standardizing the corporate analytical model.",
                impact: "Boosted key manufacturing line operational productivity by 20% and enabled near real-time inventory consolidation.",
                architecture: ["Transactional Systems", "Oracle ODI (ETL)", "AWS S3 Staging", "Snowflake DWH", "Executive Dashboards"],
                metric: "Productivity: +20%"
            },
            {
                title: "Public Safety GIS Platform (Ministry of Security)",
                description: "Provincial crime analysis platform utilized by security forces for resource assignment, hotspot detection, and real-time tactical decision making.",
                tags: ["PostgreSQL", "ArcGIS", "Python", "Mission-Critical Systems"],
                image: "/images/projects/ministerio-heatmap.png",
                alt: "Crime analysis system with PostgreSQL PostGIS and ArcGIS showing geospatial heatmaps",
                challenge: "Difficulty in crime hotspot analysis and police patrol allocation across 135 municipalities due to scattered, non-geolocated data.",
                solution: "Designed spatial ETL pipelines in Pentaho and Python to load crime stats (SNIC) into PostgreSQL/PostGIS, rendering interactive heatmaps in ArcGIS.",
                impact: "Improved patrol resource allocation efficiency by 15% and automated report sync with the judicial system.",
                architecture: ["Police Reports", "Python Scripts", "PostgreSQL PostGIS", "ArcGIS API", "Operations Centers"],
                metric: "Efficiency: +15%"
            }
        ],
        secondaryProjects: [
            {
                title: "Azure SQL Version Control & GitOps (BeOn)",
                description: "Automated database-as-code solution using GitHub Actions and PowerShell scripts (SMO/T-SQL) for DDL schema backups and log immutability under ISO 27001 standards.",
                image: "/images/projects/gitops-azure.png",
                alt: "Azure SQL schema versioning and Database-as-Code with GitHub Actions",
                tags: ["GitHub Actions", "PowerShell SMO", "Azure SQL", "GitOps"],
                challenge: "Lack of version control and tracking over relational database schemas, hindering compliance with ISO 27001 security audits.",
                solution: "Built a Database-as-Code pipeline using PowerShell SMO and GitHub Actions to automatically backup and version all DDL changes (tables, views, stored procedures) upon deploy.",
                impact: "Provided the immutable log history and schema auditing necessary to satisfy strict ISO 27001 information security compliance.",
                architecture: ["GitHub Actions (CI/CD)", "PowerShell SMO", "Azure SQL Database", "DDL Schema Backup", "Log Immutability"],
                github: "https://github.com/a-martyniuk/azure-sql-version-control",
                metric: "Security: ISO 27001",
                video: "/videos/gitops-database.mp4"
            },
            {
                title: "SNIC: Security Intelligence Dashboard & PWA",
                description: "Security intelligence dashboard with interactive choropleth maps, correlation analysis, and predictive models based on official SNIC data.",
                image: "/images/projects/snic-dashboard.png",
                alt: "Crime analysis dashboard with Next.js, Plotly, Service Workers, and interactive choropleth maps",
                tags: ["Next.js", "Plotly.js", "PWA", "TypeScript"],
                challenge: "Field officers needed criminal intelligence data and predictive hotspot maps on the go without relying on stable internet connections.",
                solution: "Created a Next.js and Plotly.js intelligence portal configured as a Progressive Web App (PWA) with offline caching via Service Workers.",
                impact: "Allowed instant mobile access to maps and predictive policing charts offline, enhancing operational mobility.",
                architecture: ["SNIC Sources (Local CSV & GeoJSON)", "Next.js (App Router)", "Plotly.js (Visualisation)", "Service Worker (Offline Caching)", "Vercel Cloud Deploy"],
                github: "https://github.com/a-martyniuk/snic-analisis-criminal",
                link: "https://snic-web.vercel.app/",
                linkType: "demo",
                metric: "Support: Offline PWA"
            },
            {
                title: "MELI AIO Dashboard",
                description: "All-in-one panel for managing and automating invoicing and inventory in Mercado Libre. Python backend and OAuth 2.0 flows with token rotation.",
                image: "/images/projects/meli-automation.png",
                alt: "MELI AIO Dashboard with FastAPI backend and PostgreSQL database",
                tags: ["FastAPI", "PostgreSQL", "OAuth 2.0", "Next.js"],
                challenge: "High-volume Mercado Libre sellers needed a centralized dashboard to automate invoices, manage inventory, and track sales performance.",
                solution: "Developed an all-in-one Next.js web application and FastAPI backend connected to PostgreSQL, integrating Mercado Libre's API with OAuth 2.0 and token rotation.",
                impact: "Automated invoice generation and stock tracking, eliminating manual spreadsheets and reducing management overhead.",
                architecture: ["Mercado Libre API (OAuth 2.0)", "FastAPI Backend", "PostgreSQL (Inventory)", "Next.js Frontend", "Token Rotation Engine"],
                github: "https://github.com/a-martyniuk/meli-aio",
                metric: "Auth: OAuth 2.0"
            },
            {
                title: "SQL Reengineering & ISO 27001 (BeOn)",
                description: "Restructuring of relational databases under ISO 27001 security standards. Implementation of modular T-SQL stored procedures, transactional log control, and checksum integrity queries.",
                image: "/images/projects/sql-reengineering.png",
                alt: "SQL Server redesign and reengineering under ISO 27001 security standards",
                tags: ["SQL Server", "T-SQL", "ISO 27001", "Integrity"],
                challenge: "Monolithic, untransacted legacy database procedures were prone to failures, data corruption, and lacked audit trails.",
                solution: "Refactored legacy code into modular T-SQL stored procedures with structured error logs and checksum-based data integrity checks.",
                impact: "Brought databases into full compliance with ISO 27001 standards and reduced system exceptions.",
                architecture: ["Legacy SQL Server DB", "T-SQL Stored Procedures (Modular)", "Transactional Log", "Checksum Integrity Queries", "ISO 27001 Compliance"],
                github: "https://github.com/a-martyniuk/sql-reengineering-iso27001",
                link: "/articles/sql-reengineering-transactional-auditing",
                linkType: "article",
                metric: "Integrity: Checksums"
            },
            {
                title: "CABA Real Estate Scraper & Analyzer",
                description: "Automated real estate scraper for Buenos Aires with Playwright, Supabase, React/Vite dashboard, bargain detection algorithms, and self-healing Telegram alerts.",
                image: "/images/projects/scraper-dashboard.png",
                alt: "CABA Real Estate Scraper Dashboard with interactive React map and market metrics",
                tags: ["Playwright", "Supabase", "Vite / React", "Telegram Bot"],
                challenge: "Manually scanning multiple real estate websites for underpriced apartments in Buenos Aires was inefficient and slow.",
                solution: "Created an automated Playwright crawler that extracts listings daily, runs valuation algorithms to detect bargain properties, and fires Telegram alerts.",
                impact: "Instantly identifies properties listed at least 15% below market average, operating 100% autonomously.",
                architecture: ["Headless Scrapers (Playwright)", "Supabase Storage & Sync", "Market Valuation Algorithms (Python)", "Telegram Notification Bot", "React/Vite Map UI"],
                github: "https://github.com/a-martyniuk/caba-real-estate-scraper",
                link: "/articles/caba-real-estate-scraper-postmortem",
                linkType: "article",
                metric: "Alerts: Telegram Bot"
            }
        ],
        publications: [
            {
                title: "Laboratorios Bagó boosted its production by 20% supported by Oracle Cloud",
                source: "Oracle Blog Latinoamerica",
                date: "November 2023",
                description: "Official corporate success story published by Oracle describing the full migration of legacy analytical databases to a modern architecture in Snowflake and global ETL orchestration using Oracle Data Integrator (ODI).",
                link: "https://blogs.oracle.com/oracle-latinoamerica/post/laboratorios-bag-elev-su-produccin-en-un-20-con-el-apoyo-de-la-nube-de-oracle",
                image: "/images/projects/oracle_bago_publication.png",
                tags: ["Oracle Cloud", "ODI 12c", "Snowflake", "Success Story"]
            }
        ],
        experience: [
            {
                title: "Senior Data Engineer (Time-Bounded Project)",
                company: "BeOn Digital Transformation Partners",
                location: "Buenos Aires, Argentina",
                period: "Feb 2026 – Present",
                description: [
                    "Designed Fabric pipelines (PySpark) and hybrid architectures under Medallion (Bronze/Silver/Gold) on OneLake, structuring Star Schema and Snowflake models.",
                    "Refactored compliance and sell-out analytical models (Danone, Unilever, PepsiCo), migrating queries to parameterized, idempotent T-SQL stored procedures with transactional control.",
                    "Resolved critical Azure SQL scheduling incident for PerfectEStores: Optimized sp_PriceIndexCompliance (reduced execution time from >3 hours to 210ms, a 50,000x speedup) and fixed script concurrency & reconnection logic in the Python orchestrator.",
                    "Implemented incremental ingestion from complex marketplace APIs (Mercado Libre, Rappi, VTEX) with OAuth2 flows and Google Workspace APIs.",
                    "Designed Database-as-Code (GitOps) architecture for Azure SQL under ISO 27001 with GitHub Actions and PowerShell SMO."
                ]
            },
            {
                title: "IoT Systems Engineer (Smart Grids & Automation)",
                company: "MJ Instalaciones (Family Business)",
                location: "Buenos Aires, Argentina",
                period: "Jul 2024 – Present",
                description: [
                    "Designed and developed smart grids and IoT automation networks, optimizing telemetry data ingestion and device energy efficiency.",
                    "Implemented micro-pipelines for real-time processing of smart grids consumption, security, and WiFi Mesh networking metrics."
                ]
            },
            {
                title: "Senior Data Engineer & Analytics Engineer",
                company: "Mazz Soluciones SRL (Data Raiders)",
                location: "CABA, Argentina",
                period: "Jun 2022 – Jul 2024",
                description: [
                    "Developed hybrid, production-ready ETL/ELT pipelines (Oracle Data Integrator 12c and Python integrations), processing millions of daily records from AWS S3 to DWH.",
                    "Contributed to the Corporate Analytical Model (MAC) for Laboratorios Bagó, standardizing models that boosted key production line productivity by 20%.",
                    "Designed and optimized robust dimensional models, materialized views, and stored procedures (PL/SQL) for complex analytical requirements."
                ]
            },
            {
                title: "Data Engineer & GIS Specialist",
                company: "Ministry of Security of Buenos Aires Province",
                location: "Buenos Aires, Argentina",
                period: "May 2014 – May 2022",
                description: [
                    "Designed ingestion pipelines (ETL) in Pentaho, KNIME, and Python (Pandas) for crime statistics (SNIC), processing 50k+ records in Parquet to BigQuery.",
                    "Built interactive dashboards and hotspot indicators in ArcGIS, optimizing police resource deployment in 135 municipalities by 15%.",
                    "Contributed to the SID (Crime Information System), digitizing reports to automate interoperability with the judicial system (SIMP)."
                ]
            },
            {
                title: "COBOL / CICS / DB2 Developer",
                company: "TGV / CDA Informática (BBVA / MasterCard / Isban)",
                location: "Buenos Aires, Argentina",
                period: "Jan 2011 – Dec 2013",
                description: [
                    "Technical analysis, coding, and unit testing of critical financial and banking processing applications (MasterCard, FirstData, BBVA, and Santander projects).",
                    "Maintained and performance-tuned complex batch processes in Mainframe z/OS, CICS, JCL, and DB2."
                ]
            }
        ],
        education: [
            {
                degree: "Bachelor's Degree in ICTs for Public Safety",
                school: "IUPFA - Instituto Universitario PFA",
                status: "Thesis Pending (Expected Graduation: December 2026)"
            },
            {
                degree: "Higher Technical Degree in Systems Analysis",
                school: "CAEEP (2017 - 2019)",
                status: "Completed"
            },
            {
                degree: "IT Technician (Personal & Professional)",
                school: "EET N°5 of Lanús (2005 - 2009)",
                status: "Completed"
            },
            {
                degree: "Higher Technical Degree in Public Safety",
                school: "Escuela de Policía Juan Vucetich (2014 - 2017)",
                status: "Complex Crime Investigation Studies"
            }
        ]
    }
};
