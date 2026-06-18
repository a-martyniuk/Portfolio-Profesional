export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    alt: string;
    details: string;
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
            pressSubtitle: "Menciones oficiales y publicaciones de ingeniería sobre arquitecturas de misión crítica implementadas."
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
                        { name: 'Digital Shelf & Sell-Out Seguros (BeOn)', desc: 'Descarga en streaming de datos comerciales y EANs mediante APIs de marketplaces.' },
                        { name: 'PepsiCo: Ingestor Multimarketplace', desc: 'Scrapers configurables para iFood BR, Rappi y DiDi Food con rotación de proxies.' }
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
                        { name: 'Modelo Analítico (Laboratorios Bagó)', desc: 'Orquestación de flujos globales con ODI y consolidación de inventarios en tiempo real.' }
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
                        { name: 'Azure SQL Version Control & GitOps', desc: 'Respaldo automático de esquemas DDL e inmutabilidad de logs mediante Actions y PowerShell SMO.' },
                        { name: 'Reingeniería SQL & ISO 27001', desc: 'Rediseño seguro de bases de datos relacionales, stored procedures modulares y checksums.' }
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
                        { name: 'ETL Observability: Auditoría & KPIs', desc: 'Reportes automatizados de cumplimiento de SLAs, tasas de éxito y análisis de desvíos.' },
                        { name: 'SNIC Web Dashboard', desc: 'Panel interactivo de análisis criminal provincial con mapas coropléticos, correlaciones y modelos predictivos.' }
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
                details: "Desarrollo de un pipeline de datos diario incremental (09:00 AM ART) en Microsoft Fabric que extrae datos de ventas y productos de Beiersdorf desde Google Drive y FTPs. El flujo implementa validaciones estrictas de esquema (11 columnas), estandarización de nulos y un complejo procesamiento de apertura de combos comerciales en N filas para retailers autorizados (Farmacity, Leloir, Selma, Simplex, Farmaonline), distribuyendo EANs individuales y garantizando que el Monto original se preserve únicamente en la primera fila para evitar duplicaciones financieras.",
                architecture: ["Google Drive API (Landing Ingest)", "Silver Layer Delta (dbo.sl_bdf_sellouts)", "Join Dimensional & Fallback Match (EAN/Cliente)", "Apertura de Combos (Desglose en N-filas)", "Auditoría de Huérfanos (dbo.audit_bdf_comboshuerfanos)"],
                metric: "SLA Ingesta: 09:00 AM",
                video: "/videos/pipeline-medallion.mp4"
            },
            {
                title: "PepsiCo: Ingestor Multimarketplace",
                description: "Ingesta automatizada y normalización de catálogos, stock y precios de marketplaces (iFood BR, Rappi LATAM, DiDi Food MX) para análisis competitivo de marcas PepsiCo.",
                tags: ["Python", "Ingesta de APIs", "Calidad de Datos", "PyTest"],
                image: "/images/projects/pepsico-ingestor.png",
                alt: "Estructura de ingesta multi-marketplace PepsiCo con Python y APIs",
                details: "Desarrollo de scrapers modulares e interactivos para APIs móviles y web. Gestión de sesiones complejas, cookies dinámicas, rotación de proxies y normalización en CSV (UTF-8 BOM) con suite de testing robusta.",
                architecture: ["Motor Ingestor de APIs (Requests/OAuth2)", "Ejecutor Basado en Configuración (JSON)", "Normalizador y Transformador de Datos", "Manejador de Codificación (Excel UTF-8 BOM)", "Pruebas Unitarias PyTest"],
                metric: "Evasión: Proxy Rotativo"
            },
            {
                title: "ETL Observability: Auditoría & Monitor de KPIs",
                description: "Solución de observabilidad de procesos críticos corporativos. Audita la ejecución diaria, calcula tasas de éxito, mide SLA y detecta desvíos de calendarización.",
                tags: ["Python", "PowerShell", "Stored Procedures", "ETL Logs"],
                image: "/images/projects/ecoreport-audit.png",
                alt: "Dashboard de auditoría de pipelines ETL y logs de ejecución",
                details: "Framework de auditoría para bases transaccionales e históricas (SQL Server). Análisis de logs para marcas CPG (Danone, Softys, Unilever, Essity), control de excepciones en ExecuteSP y reportes KPI de desviaciones.",
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
                details: "Migración de ecosistema legacy a una arquitectura moderna de datos. El proyecto incluyó la orquestación de flujos globales y la consolidación de inventarios y ventas en tiempo real.",
                architecture: ["Sistemas Transaccionales", "Oracle ODI (ETL)", "AWS S3 Staging", "Snowflake DWH", "Dashboards Ejecutivos"],
                metric: "Productividad: +20%"
            },
            {
                title: "Infraestructura de Estado (Ministerio de Seguridad)",
                description: "Plataforma provincial de análisis criminal utilizada por fuerzas de seguridad para asignación de recursos, detección de hotspots y toma de decisiones tácticas en tiempo real.",
                tags: ["PostgreSQL", "ArcGIS", "Python", "Sistemas de Misión Crítica"],
                image: "/images/projects/ministerio-heatmap.png",
                alt: "Sistema de análisis criminal con PostgreSQL PostGIS y ArcGIS mostrando mapas de calor geoespacial",
                details: "Desarrollo de una base de datos centralizada para el análisis criminal (SNIC). Integración de capas geográficas para la visualización de delitos y patrullas en vivo.",
                architecture: ["Reportes Policiales", "Python Scripts", "PostgreSQL PostGIS", "ArcGIS API", "Centros de Operaciones"],
                metric: "Eficiencia: +15%"
            }
        ],
        secondaryProjects: [
            {
                title: "Azure SQL Version Control & GitOps",
                description: "Solución automatizada de base de datos como código mediante GitHub Actions y scripts PowerShell (SMO/T-SQL) para el respaldo de esquemas DDL e inmutabilidad de logs bajo estándares ISO 27001.",
                image: "/images/projects/gitops-azure.png",
                alt: "Versionado de esquemas Azure SQL y Database-as-Code con GitHub Actions",
                tags: ["GitHub Actions", "PowerShell SMO", "Azure SQL", "GitOps"],
                details: "Automatización completa de backup de esquemas DDL (tablas, vistas, stored procedures) mediante PowerShell SMO. Pipeline CI/CD con GitHub Actions que versiona los objetos de base de datos en cada deploy, garantizando trazabilidad e inmutabilidad bajo ISO 27001.",
                architecture: ["GitHub Actions (CI/CD)", "PowerShell SMO", "Base de datos Azure SQL", "Respaldo de esquema DDL", "Inmutabilidad de logs"],
                github: "https://github.com/a-martyniuk/azure-sql-version-control",
                metric: "Seguridad: ISO 27001",
                video: "/videos/gitops-database.mp4"
            },
            {
                title: "SNIC Análisis Criminal",
                description: "Dashboard de inteligencia de seguridad con mapas coropléticos interactivos, análisis de correlación y modelos predictivos sobre datos oficiales del SNIC.",
                image: "/images/projects/snic-dashboard.png",
                alt: "Dashboard de análisis criminal con Next.js, Plotly, Service Workers y mapas coropléticos interactivos",
                tags: ["Next.js", "Plotly.js", "PWA", "TypeScript"],
                details: "Aplicación web moderna y optimizada (Next.js) de análisis criminal sobre datos oficiales del SNIC. Incluye mapas coropléticos, correlación de delitos con índices socioeconómicos (pobreza y densidad), proyecciones polinómicas y soporte offline PWA.",
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
                details: "Herramienta de gestión para vendedores de Mercado Libre. Backend FastAPI con autenticación OAuth 2.0 y rotación automática de tokens. Base de datos PostgreSQL para historial de ventas, inventario y generación automatizada de reportes de facturación.",
                architecture: ["Mercado Libre API (OAuth 2.0)", "Backend FastAPI", "PostgreSQL (Inventario)", "Frontend Next.js", "Motor de rotación de tokens"],
                github: "https://github.com/a-martyniuk/meli-aio",
                metric: "Auth: OAuth 2.0"
            },
            {
                title: "Reingeniería SQL & ISO 27001",
                description: "Reestructuración de bases de datos relacionales bajo estándares de seguridad ISO 27001. Implementación de stored procedures T-SQL modulares, control transaccional de logs y queries de integridad mediante Checksums.",
                image: "/images/projects/sql-reengineering.png",
                alt: "Rediseño y reingeniería SQL Server bajo estándares de seguridad ISO 27001",
                tags: ["SQL Server", "T-SQL", "ISO 27001", "Integrity"],
                details: "Rediseño integral de bases de datos SQL Server bajo normativa ISO 27001. Refactorización de stored procedures a diseño modular, implementación de control transaccional, auditoría de accesos y checksums para verificación de integridad de datos sensibles.",
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
                details: "Pipeline de datos automatizado (GitHub Actions) que extrae propiedades de múltiples portales (Cabaprop, Argenprop, Clarín). Calcula métricas de mercado a nivel de dirección para identificar oportunidades (>15% bajo el promedio local) y envía notificaciones en tiempo real vía Telegram. Incluye una UI en React con mapa interactivo y sistema de alertas autocurativas de portal roto.",
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
                image: "/images/projects/bago-dashboard.png",
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
                title: "Ingeniero en Automatización Domótica",
                company: "MJ Instalaciones (Emprendimiento familiar)",
                location: "Buenos Aires, Argentina",
                period: "Jul 2024 – Actualidad",
                description: [
                    "Diseño e implementación de sistemas domóticos e IoT (iluminación, climatización y seguridad) optimizando la eficiencia energética.",
                    "Configuración de infraestructuras de red WiFi Mesh y gestión de integración tecnológica de dispositivos inteligentes en propiedades."
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
            pressSubtitle: "Official corporate press releases and engineering publications showcasing my database migrations and integrations."
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
                        { name: 'Digital Shelf & Sell-Out Seguros (BeOn)', desc: 'Streaming download of commercial data and EANs using marketplace APIs.' },
                        { name: 'PepsiCo: Multi-marketplace Ingestor', desc: 'Configurable scrapers for iFood BR, Rappi, and DiDi Food with proxy rotation.' }
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
                        { name: 'Analytic Model (Laboratorios Bagó)', desc: 'Global flow orchestration with ODI and real-time inventory consolidation.' }
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
                        { name: 'Azure SQL Version Control & GitOps', desc: 'Automatic backup of DDL schemas and log immutability via Actions and PowerShell SMO.' },
                        { name: 'SQL Reengineering & ISO 27001', desc: 'Secure redesign of relational databases, modular stored procedures, and checksums.' }
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
                        { name: 'ETL Observability: Audit & KPIs', desc: 'Automated reports of SLA compliance, success rates, and deviation analysis.' },
                        { name: 'SNIC Web Dashboard', desc: 'Interactive provincial crime analysis panel with choropleth maps, correlations, and predictive models.' }
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
                details: "Development of an incremental daily data pipeline (09:00 AM ART) in Microsoft Fabric processing Beiersdorf sell-out sales and master catalogs from Google Drive and FTPs. The pipeline implements strict schema verification (11 mandatory columns), null normalization, and an advanced combo exploding algorithm that splits bundled transactions into individual product EANs for authorized retailers (Farmacity, Leloir, Selma, Simplex, Farmaonline), preserving the original sales amount only on the first row to prevent duplicate revenue reporting.",
                architecture: ["Google Drive API (Landing Ingest)", "Silver Layer Delta (dbo.sl_bdf_sellouts)", "Join Dimensional & Fallback Match (EAN/Client)", "Combo Exploding (N-Row Breakdown & Split)", "Orphans Audit Tables (dbo.audit_bdf_comboshuerfanos)"],
                metric: "Ingestion SLA: 09:00 AM",
                video: "/videos/pipeline-medallion.mp4"
            },
            {
                title: "PepsiCo: Multi-Marketplace Ingestor",
                description: "Automated ingestion and normalization of catalogs, stock, and pricing from marketplaces (iFood BR, Rappi LATAM, DiDi Food MX) for competitive brand analysis for PepsiCo.",
                tags: ["Python", "APIs Ingestion", "Data Quality", "PyTest"],
                image: "/images/projects/pepsico-ingestor.png",
                alt: "PepsiCo multi-marketplace ingestion structure with Python and APIs",
                details: "Development of modular and interactive scrapers for mobile and web APIs. Management of complex sessions, dynamic cookies, proxy rotation, and CSV normalization (UTF-8 BOM) with a robust testing suite.",
                architecture: ["API Ingestor Engine (Requests/OAuth2)", "Config-driven Runner (JSON configs)", "Data Normalizer & Transformer", "Encoding Handler (Excel UTF-8 BOM)", "PyTest Unit Testing"],
                metric: "Evasion: Proxy Rotation"
            },
            {
                title: "ETL Observability: Audit & KPI Monitor",
                description: "Observability solution for critical corporate processes. Audits daily execution, calculates success rates, measures SLA, and detects scheduling deviations.",
                tags: ["Python", "PowerShell", "Stored Procedures", "ETL Logs"],
                image: "/images/projects/ecoreport-audit.png",
                alt: "Auditing dashboard for ETL pipelines and execution logs",
                details: "Auditing framework for transactional and historical databases (SQL Server). Log analysis for CPG brands (Danone, Softys, Unilever, Essity), exception handling in ExecuteSP, and KPI deviation reporting.",
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
                details: "Migration of legacy ecosystem to a modern data architecture. The project included the orchestration of global data flows and real-time sales and inventory consolidation.",
                architecture: ["Transactional Systems", "Oracle ODI (ETL)", "AWS S3 Staging", "Snowflake DWH", "Executive Dashboards"],
                metric: "Productivity: +20%"
            },
            {
                title: "State Infrastructure (Ministry of Security)",
                description: "Provincial crime analysis platform utilized by security forces for resource assignment, hotspot detection, and real-time tactical decision making.",
                tags: ["PostgreSQL", "ArcGIS", "Python", "Mission-Critical Systems"],
                image: "/images/projects/ministerio-heatmap.png",
                alt: "Crime analysis system with PostgreSQL PostGIS and ArcGIS showing geospatial heatmaps",
                details: "Development of a centralized database for crime analysis (SNIC). Integration of geographic layers for live visualization of crimes and patrol deployments.",
                architecture: ["Police Reports", "Python Scripts", "PostgreSQL PostGIS", "ArcGIS API", "Operations Centers"],
                metric: "Efficiency: +15%"
            }
        ],
        secondaryProjects: [
            {
                title: "Azure SQL Version Control & GitOps",
                description: "Automated database-as-code solution using GitHub Actions and PowerShell scripts (SMO/T-SQL) for DDL schema backups and log immutability under ISO 27001 standards.",
                image: "/images/projects/gitops-azure.png",
                alt: "Azure SQL schema versioning and Database-as-Code with GitHub Actions",
                tags: ["GitHub Actions", "PowerShell SMO", "Azure SQL", "GitOps"],
                details: "Full automation of DDL schema backups (tables, views, stored procedures) using PowerShell SMO. CI/CD pipeline with GitHub Actions that versions database objects on each deploy, ensuring traceability and immutability under ISO 27001.",
                architecture: ["GitHub Actions (CI/CD)", "PowerShell SMO", "Azure SQL Database", "DDL Schema Backup", "Log Immutability"],
                github: "https://github.com/a-martyniuk/azure-sql-version-control",
                metric: "Security: ISO 27001",
                video: "/videos/gitops-database.mp4"
            },
            {
                title: "SNIC Crime Analysis",
                description: "Security intelligence dashboard with interactive choropleth maps, correlation analysis, and predictive models based on official SNIC data.",
                image: "/images/projects/snic-dashboard.png",
                alt: "Crime analysis dashboard with Next.js, Plotly, Service Workers, and interactive choropleth maps",
                tags: ["Next.js", "Plotly.js", "PWA", "TypeScript"],
                details: "Modern and optimized web application (Next.js) for crime analysis over official SNIC data. Includes choropleth maps, crime correlation with socioeconomic indices (poverty and density), polynomial projections, and offline PWA support.",
                architecture: ["SNIC Sources (Local CSV & GeoJSON)", "Next.js (App Router)", "Plotly.js (Visualization)", "Service Worker (Offline Caching)", "Vercel Cloud Deploy"],
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
                details: "Management tool for Mercado Libre sellers. FastAPI backend with OAuth 2.0 authentication and automatic token rotation. PostgreSQL database for sales history, inventory management, and automated invoicing report generation.",
                architecture: ["Mercado Libre API (OAuth 2.0)", "FastAPI Backend", "PostgreSQL (Inventory)", "Next.js Frontend", "Token Rotation Engine"],
                github: "https://github.com/a-martyniuk/meli-aio",
                metric: "Auth: OAuth 2.0"
            },
            {
                title: "SQL Reengineering & ISO 27001",
                description: "Restructuring of relational databases under ISO 27001 security standards. Implementation of modular T-SQL stored procedures, transactional log control, and checksum integrity queries.",
                image: "/images/projects/sql-reengineering.png",
                alt: "SQL Server redesign and reengineering under ISO 27001 security standards",
                tags: ["SQL Server", "T-SQL", "ISO 27001", "Integrity"],
                details: "Comprehensive SQL Server database redesign under ISO 27001 regulations. Refactoring of stored procedures to a modular design, implementation of transactional control, access auditing, and checksums for sensitive data integrity verification.",
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
                details: "Automated ETL pipeline (GitHub Actions) that extracts property listings from major portals (Cabaprop, Argenprop, Clarín). It computes neighborhood and address-level price averages to detect bargains (>15% below market), triggers real-time Telegram alerts, and displays data on a React map dashboard with self-healing degraded source checks.",
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
                image: "/images/projects/bago-dashboard.png",
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
                title: "Home Automation Engineer",
                company: "MJ Instalaciones (Family Business)",
                location: "Buenos Aires, Argentina",
                period: "Jul 2024 – Present",
                description: [
                    "Designed and implemented IoT and smart home systems (lighting, HVAC, security), optimizing energy efficiency.",
                    "Configured WiFi Mesh network infrastructures and managed technological integration of smart devices across properties."
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
