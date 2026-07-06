'use client';

import React, { useState } from 'react';
import { Server, Database, Cpu, Bot, Monitor, Key, RefreshCw, FileText, ArrowRight, ArrowDown, UserCheck, Wine, Clock, Activity } from "lucide-react";

interface DFDStep {
    id: string;
    title: string;
    icon: React.ReactNode;
    summary: string;
    rules: string[];
}

export function ScraperDataFlowDiagram({ language }: { language: 'es' | 'en' }) {
    const [activeStep, setActiveStep] = useState(0);

    const stepsEs: DFDStep[] = [
        {
            id: "playwright",
            title: "01. Playwright Scrapers",
            icon: <Globe className="w-5 h-5 text-cyan-400" />,
            summary: "Extracción paralela y paginada en portales inmobiliarios (Cabaprop, Argenprop, Clarín). Control de reintentos y evasión de bloqueos.",
            rules: [
                "Evasión de Antibot: Navegación en modo headless con emulación de agentes de usuario estándar.",
                "Paginación Automatizada: Identificación del botón 'Siguiente' y control dinámico de fin de catálogo.",
                "Robustez de Extracción: Reintentos automáticos ante timeouts de red o elementos DOM ausentes.",
                "Generación de Smart Key: Hash único de dirección y características para control de duplicidades entre portales."
            ]
        },
        {
            id: "supabase",
            title: "02. Sync Supabase",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Persistencia de estado en base PostgreSQL. Registro histórico de variación de precios y estados de publicación.",
            rules: [
                "Control de Estados: Transición automática de propiedades (ACTIVO -> OFFLINE -> RE-PUB) en base al descolgado de anuncios.",
                "Auditoría de Precios: Cada cambio en el precio genera una nueva fila en el historial de precios con marca de tiempo.",
                "Sincronización Eficiente: Operaciones de Upsert masivos para reducir transacciones y latencia de red."
            ]
        },
        {
            id: "analyzer",
            title: "03. Analizador de Mercado",
            icon: <Cpu className="w-5 h-5 text-cyan-400" />,
            summary: "Algoritmos en Python de detección de oportunidades por dirección y manzana, comparando con la media local.",
            rules: [
                "Cálculo de Ganga: Evalúa si una propiedad está >15% por debajo del promedio del edificio o del radio de 3 manzanas.",
                "Detección de Dueño Directo: Filtra por texto y números de teléfono para identificar anuncios sin comisiones de inmobiliaria.",
                "Scoring de Oportunidad: Puntuación del 1 al 10 detallando las razones físicas ('Cerca del subte', 'Bajo precio de expensas')."
            ]
        },
        {
            id: "telegram",
            title: "04. Telegram Alerts",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "Notificación proactiva e inmediata de oportunidades y reportes diarios de salud de los portales.",
            rules: [
                "Alertas en Tiempo Real: Mensajes inmediatos con link directo si se detectan gangas o bajas de precio abruptas.",
                "Reporte de Salud Diario: Estadísticas de duración del scrapeo, tasa de éxito y detección de layout roto (<50% de efectividad).",
                "Autocuración (Self-Healing): Alerta proactiva al detectar cambios en el DOM de los portales para su corrección."
            ]
        },
        {
            id: "dashboard",
            title: "05. React Dashboard",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Visualización en mapa interactivo de ofertas, filtros avanzados de búsqueda y gráficos de tendencias históricas.",
            rules: [
                "Mapa Interactivo: Agrupación geoespacial de ofertas reales basadas en latitud y longitud normalizadas.",
                "Gráfico de Precios: Gráficos dinámicos con Chart.js/Recharts de la fluctuación histórica de precios por propiedad.",
                "Filtros de Negocio: Búsqueda rápida por expensas, cantidad de ambientes y detección de gangas de alta prioridad."
            ]
        }
    ];

    const stepsEn: DFDStep[] = [
        {
            id: "playwright",
            title: "01. Playwright Scrapers",
            icon: <Globe className="w-5 h-5 text-cyan-400" />,
            summary: "Parallelized and paginated scraping across portals (Cabaprop, Argenprop, Clarín). Built with retry logic and antibot bypass.",
            rules: [
                "Antibot Evasion: Headless navigation with randomized user-agents and browser fingerprinting mockups.",
                "Automated Pagination: Node location and dynamic end-of-catalog triggers.",
                "Extraction Robustness: Configured automatic retries on connection timeouts or missing DOM elements.",
                "Smart Key Generation: Unique address and specifications hash to avoid duplicates across multiple portals."
            ]
        },
        {
            id: "supabase",
            title: "02. Supabase Sync",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "State persistence in PostgreSQL database. Logs price variation history and publication states.",
            rules: [
                "State Management: Automated transition of listing state (ACTIVO -> OFFLINE -> RE-PUB) based on portal availability.",
                "Price Audit: Every detected price change writes a new timestamped row in price_history.",
                "Efficient Syncing: Database upserts to optimize performance and reduce transaction overhead."
            ]
        },
        {
            id: "analyzer",
            title: "03. Market Analyzer",
            icon: <Cpu className="w-5 h-5 text-cyan-400" />,
            summary: "Python algorithms executing geo-level bargains analysis comparing prices with building and block averages.",
            rules: [
                "Bargain Detection: Flags properties priced >15% below the average of the same building or 3-block radius.",
                "Direct Owner Discovery: Parses text tags and numbers to locate commission-free properties.",
                "Opportunity Scoring: 1-10 grade highlighting direct criteria ('Close to subway stations', 'Below average fees')."
            ]
        },
        {
            id: "telegram",
            title: "04. Telegram Alerts",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "Proactive real-time opportunity alerts and daily portal crawler integrity reports.",
            rules: [
                "Instant Notifications: Telegram direct links for newly discovered deals or sudden price drops.",
                "Daily Health Check: Aggregates crawl duration, count metrics, and broken portal alerts (crawl success <50%).",
                "Self-Healing Alerts: Sends alert when DOM changes break selector paths, minimizing downtime."
            ]
        },
        {
            id: "dashboard",
            title: "05. React Dashboard",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Map-based visualizations, advanced filters, and historical price trend chart overlays.",
            rules: [
                "Interactive Map: Spatial visualizer plotting coordinates and color-coding bargains.",
                "Price History Charts: Plots multi-source historical pricing over time for individual listings.",
                "Refined Filters: Rapid filtering by maintenance fees, rooms, and high-confidence opportunities."
            ]
        }
    ];

    const steps = language === 'es' ? stepsEs : stepsEn;
    const activeData = steps[activeStep];

    return (
        <div className="space-y-6 font-sans">
            <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                    {language === 'es' ? "Diagrama de Flujo de Datos (DFD) - Scraper" : "Data Flow Diagram (DFD) - Scraper"}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    {language === 'es' 
                        ? "Haz clic en cada fase para ver las reglas y lógica de la tubería ETL."
                        : "Click on each phase to reveal the crawler ETL pipeline rules."
                    }
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-border/40 bg-muted/10">
                {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    return (
                        <React.Fragment key={step.id}>
                            <button
                                onClick={() => setActiveStep(index)}
                                className={`flex-1 w-full lg:w-auto p-4 rounded-xl border text-left transition-all relative ${
                                    isActive
                                        ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                        : 'bg-background border-border hover:border-primary/40 text-foreground hover:bg-muted/10'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg border transition-colors ${isActive ? 'bg-primary/20 border-primary/40' : 'bg-muted/40 border-border'}`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h5 className="font-heading font-bold text-xs uppercase tracking-wider">{step.title}</h5>
                                        <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">{step.id.toUpperCase()}</p>
                                    </div>
                                </div>
                            </button>
                            {index < steps.length - 1 && (
                                <div className="text-muted-foreground/30 flex items-center justify-center shrink-0">
                                    <span className="hidden lg:block"><ArrowRight size={16} /></span>
                                    <span className="lg:hidden"><ArrowDown size={16} /></span>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="p-6 rounded-2xl border border-border/50 bg-accent/20 backdrop-blur-md relative overflow-hidden transition-all duration-300">
                <div className="absolute top-[-50%] left-[-20%] h-full w-full bg-primary/5 blur-[50px] -z-10" />
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {activeData.icon}
                    </div>
                    <div className="space-y-4 flex-1">
                        <div>
                            <h5 className="font-heading font-extrabold text-sm text-foreground uppercase tracking-wider">
                                {activeData.title}
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                {activeData.summary}
                            </p>
                        </div>
                        <div className="space-y-2 border-t border-border/10 pt-4">
                            <h6 className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                                {language === 'es' ? "// REGLAS DE NEGOCIO Y PROCESAMIENTO" : "// BUSINESS LOGIC & PROCESSING"}
                            </h6>
                            <ul className="space-y-2">
                                {activeData.rules.map((rule, i) => (
                                    <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                                        <span className="text-primary select-none mt-0.5">▸</span>
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MeliAioDataFlowDiagram({ language }: { language: 'es' | 'en' }) {
    const [activeStep, setActiveStep] = useState(0);

    const stepsEs: DFDStep[] = [
        {
            id: "fastapi",
            title: "01. FastAPI Async Server",
            icon: <Server className="w-5 h-5 text-cyan-400" />,
            summary: "Backend asíncrono en Python estructurado en monorepo. Gestiona conexiones de red concurrentes, endpoints y workers.",
            rules: [
                "Cómputo Concurrente: Utiliza controladores asíncronos para peticiones de red rápidas sin bloqueo de hilos.",
                "Estructura Modular: Rutas y controladores divididos por contexto (auth, billing, products, orders).",
                "Versionado de Esquema: Cambios e integraciones en PostgreSQL versionados mediante Alembic."
            ]
        },
        {
            id: "oauth",
            title: "02. Rotación de Tokens",
            icon: <Key className="w-5 h-5 text-cyan-400" />,
            summary: "Integración OAuth 2.0 con Mercado Libre. Proceso automatizado en segundo plano para evitar desautorizaciones.",
            rules: [
                "Almacenamiento Seguro: Tokens de acceso y refresco cifrados a nivel de celda en PostgreSQL.",
                "Cron de Renovación: Tarea programada en segundo plano que refresca el token antes de cumplirse el plazo de expiración (6 horas).",
                "Protección de Concurrencia: Bloqueos de base de datos (locks) para evitar llamadas concurrentes redundantes de renovación."
            ]
        },
        {
            id: "orders",
            title: "03. Polling de Ventas",
            icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
            summary: "Worker en segundo plano que sondea las APIs oficiales de Mercado Libre para sincronizar nuevas compras.",
            rules: [
                "Idempotencia de Órdenes: Inserta órdenes de compra verificando contra clave primaria única de Mercado Libre.",
                "Extracción de Datos de Comprador: Almacena datos fiscales para automatizar facturación sin requerir interacción manual.",
                "Manejo de Rate Limits: Algoritmo de desescalada (backoff) ante límites de llamadas de la API de Mercado Libre."
            ]
        },
        {
            id: "billing",
            title: "04. Automatización de Facturas",
            icon: <FileText className="w-5 h-5 text-cyan-400" />,
            summary: "Generación de comprobantes, descarga y organización jerárquica en la nube de Google Drive.",
            rules: [
                "Generación Automática: Automatización de comprobantes con datos fiscales extraídos.",
                "Mapeo Jerárquico: Subida automática de documentos organizando carpetas por año, mes e identificación del cliente.",
                "Validación de Carga: Registra el hash MD5 del archivo subido en Google Drive para auditar y prevenir corrupción."
            ]
        },
        {
            id: "client",
            title: "05. Next.js 15 Client",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Dashboard administrativo premium con estadísticas comerciales, estado de inventario y descargas directas.",
            rules: [
                "Server Actions: Comunicación segura con el backend FastAPI para procesos interactivos de actualización.",
                "Filtros de Logística: visualización rápida de estados de envío y links de facturación.",
                "Diseño Glassmorphic: Panel de control traslúcido estilizado con componentes altamente accesibles."
            ]
        }
    ];

    const stepsEn: DFDStep[] = [
        {
            id: "fastapi",
            title: "01. FastAPI Async Server",
            icon: <Server className="w-5 h-5 text-cyan-400" />,
            summary: "Asynchronous Python backend organized in monorepo, processing concurrent network requests and worker queues.",
            rules: [
                "Concurrent Computation: Harnesses async/await syntax to handle concurrent API endpoints without blocking worker threads.",
                "Modular Contexts: Controllers partitioned cleanly (auth, billing, products, orders).",
                "Schema Migrations: Structural modifications persisted securely via SQLAlchemy and Alembic schema histories."
            ]
        },
        {
            id: "oauth",
            title: "02. Token Rotation Flow",
            icon: <Key className="w-5 h-5 text-cyan-400" />,
            summary: "Secure Mercado Libre OAuth 2.0 integration. Automated background flow to guarantee session longevity.",
            rules: [
                "Encrypted Storage: Access and refresh tokens encrypted before database write operations.",
                "Rotation Worker: Background task updating tokens automatically before the 6-hour expiration mark.",
                "Race Condition Guards: Database locks ensuring multiple threads don't trigger simultaneous updates."
            ]
        },
        {
            id: "orders",
            title: "03. Sales Order Polling",
            icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
            summary: "Background polling worker fetching new marketplace sales orders at scheduled intervals.",
            rules: [
                "Order Idempotency: Validates uniqueness against the Mercado Libre global Order ID key before persistence.",
                "Metadata Extraction: Stores tax and billing client specifications required for automated document generation.",
                "API Rate Limits: Adaptive backoff delays when executing heavy polling requests against the platform."
            ]
        },
        {
            id: "billing",
            title: "04. Billing Automation",
            icon: <FileText className="w-5 h-5 text-cyan-400" />,
            summary: "Document generation and backup to hierarchically mapped Google Drive folders.",
            rules: [
                "Automated Invoicing: Generates PDFs based on fetched tax data from transactions.",
                "Hierarchical Storage: Mapped directory writing (Google Drive API) structured by Year > Month > Client ID.",
                "Upload Audits: Compares MD5 checksums of uploads to ensure data integrity."
            ]
        },
        {
            id: "client",
            title: "05. Next.js 15 Client",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Premium admin dashboard overlay with business metrics, inventory charts, and direct download links.",
            rules: [
                "Next.js Server Actions: Safe, server-side data fetching communicating with the FastAPI background server.",
                "Fulfillment Filters: Visual representation of order statuses, shipping routes, and tracking logs.",
                "Aesthetic Glassmorphism: Dark-themed interface prioritizing user interactions and accessibility."
            ]
        }
    ];

    const steps = language === 'es' ? stepsEs : stepsEn;
    const activeData = steps[activeStep];

    return (
        <div className="space-y-6 font-sans">
            <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                    {language === 'es' ? "Diagrama de Flujo de Datos (DFD) - Mercado Libre AIO" : "Data Flow Diagram (DFD) - Mercado Libre AIO"}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    {language === 'es' 
                        ? "Haz clic en cada fase para ver las reglas y lógica de la automatización."
                        : "Click on each phase to reveal the automation logic rules."
                    }
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-border/40 bg-muted/10">
                {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    return (
                        <React.Fragment key={step.id}>
                            <button
                                onClick={() => setActiveStep(index)}
                                className={`flex-1 w-full lg:w-auto p-4 rounded-xl border text-left transition-all relative ${
                                    isActive
                                        ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                        : 'bg-background border-border hover:border-primary/40 text-foreground hover:bg-muted/10'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg border transition-colors ${isActive ? 'bg-primary/20 border-primary/40' : 'bg-muted/40 border-border'}`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h5 className="font-heading font-bold text-xs uppercase tracking-wider">{step.title}</h5>
                                        <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">{step.id.toUpperCase()}</p>
                                    </div>
                                </div>
                            </button>
                            {index < steps.length - 1 && (
                                <div className="text-muted-foreground/30 flex items-center justify-center shrink-0">
                                    <span className="hidden lg:block"><ArrowRight size={16} /></span>
                                    <span className="lg:hidden"><ArrowDown size={16} /></span>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="p-6 rounded-2xl border border-border/50 bg-accent/20 backdrop-blur-md relative overflow-hidden transition-all duration-300">
                <div className="absolute top-[-50%] left-[-20%] h-full w-full bg-primary/5 blur-[50px] -z-10" />
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {activeData.icon}
                    </div>
                    <div className="space-y-4 flex-1">
                        <div>
                            <h5 className="font-heading font-extrabold text-sm text-foreground uppercase tracking-wider">
                                {activeData.title}
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                {activeData.summary}
                            </p>
                        </div>
                        <div className="space-y-2 border-t border-border/10 pt-4">
                            <h6 className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                                {language === 'es' ? "// REGLAS DE NEGOCIO Y PROCESAMIENTO" : "// BUSINESS LOGIC & PROCESSING"}
                            </h6>
                            <ul className="space-y-2">
                                {activeData.rules.map((rule, i) => (
                                    <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                                        <span className="text-primary select-none mt-0.5">▸</span>
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function BrandProtectionDataFlowDiagram({ language }: { language: 'es' | 'en' }) {
    const [activeStep, setActiveStep] = useState(0);

    const stepsEs: DFDStep[] = [
        {
            id: "ingesta",
            title: "01. Catálogo Base",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Ingesta y normalización de catálogos oficiales SKU e información maestra desde Excel (BPP master data skus.xlsx).",
            rules: [
                "Estructura maestra: Carga de marcas oficiales (Nutrilon, Vital, Fortini), EANs asociados, y contenido neto (gramos).",
                "Políticas MAP: Definición de Precios Mínimos Sugeridos (MAP) para auditar desvíos comerciales.",
                "Soporte de Canales: Registro de distribuidores y tiendas oficiales autorizadas para la venta.",
                "Actualizaciones periódicas: Sincronización incremental hacia las tablas relacionales de Supabase."
            ]
        },
        {
            id: "descubrimiento",
            title: "02. Descubrimiento",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "Búsqueda híbrida de publicaciones combinando la API de MercadoLibre y Playwright Stealth.",
            rules: [
                "API de Búsqueda Rápida: Consulta masiva utilizando palabras clave de las marcas principales.",
                "Evasión Playwright: Navegador simulado headless que recopila atributos profundos y descripciones sin disparar bloqueos de IP.",
                "Tokens OAuth 2.0: Manejo del flujo oficial con rotación y refresco programado automático de tokens de acceso.",
                "Guardado Incremental: Ingesta en lote de ítems encontrados en 'meli_listings' de Supabase."
            ]
        },
        {
            id: "asociación",
            title: "03. Asociación SKU",
            icon: <Cpu className="w-5 h-5 text-cyan-400" />,
            summary: "Motor Fuzzy Logic que vincula publicaciones informales o mal nombradas con productos reales del catálogo.",
            rules: [
                "Fuzzy Matching: Cálculo de similitud mediante fuzz.token_set_ratio entre el título del listado y el nombre oficial.",
                "Clasificación por Confianza: Asignación de Match Level (1: Exacto, 2: Alta similitud, 3: Coincidencia de palabra clave).",
                "Detector de Ruido: Descarte absoluto e inmediato de categorías ajenas (libros de autores homónimos, consolas, juguetes).",
                "Exclusión Estricta: Gateways basados en marcas que rechazan publicaciones ajenas al catálogo Nutricia Bagó."
            ]
        },
        {
            id: "normalización",
            title: "04. Normalización",
            icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
            summary: "Extracción Regex sintáctica de unidades de empaque y volumen real a partir de títulos y descripciones.",
            rules: [
                "Volumetría por Regex: Extracción automática del peso unitario especificado (ej. '800g', '400g', 'grs', 'ml').",
                "Multiplicadores de Pack: Identificación de patrones de cantidad (ej. 'Pack x6', 'Combo x2', '12 unidades') en títulos.",
                "Coeficiente de Densidad: Multiplicación por densidad física para estandarizar gramos de fórmulas infantiles líquidas.",
                "Fusión de Atributos: Cruce del peso total calculado contra los atributos estructurados obtenidos por Playwright."
            ]
        },
        {
            id: "auditoría",
            title: "05. Auditoría BPP",
            icon: <FileText className="w-5 h-5 text-cyan-400" />,
            summary: "Detección de infracciones y preparación de evidencias estructuradas listas para el portal BPP de MercadoLibre.",
            rules: [
                "Política de Precios: Alertas instantáneas si el precio por unidad (total / qty) es inferior al listado MAP oficial.",
                "Control de Canal (Gray Market): Detección de productos donados a ONGs, insumos de programas sociales o robados.",
                "Integridad de Marca: Búsqueda de discrepancias entre la marca oficial y las propiedades declaradas en el listado.",
                "Generación de Motivos BPP: Mapeo automático de violaciones a motivos oficiales (ej. Código 703: Precios, Código 704: Engaño)."
            ]
        }
    ];

    const stepsEn: DFDStep[] = [
        {
            id: "ingesta",
            title: "01. Base Catalog",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Ingestion and normalization of official SKU catalogs and master metadata from Excel (BPP master data skus.xlsx).",
            rules: [
                "Master structure: Imports official brands (Nutrilon, Vital, Fortini), associated EANs, and net weight specifications.",
                "MAP Policies: Definition of Minimum Advertised Prices (MAP) to audit market pricing deviations.",
                "Channel Registry: Database of distributors and official stores authorized to sell the brand.",
                "Scheduled Sync: Incremental writing to relational Supabase tables."
            ]
        },
        {
            id: "descubrimiento",
            title: "02. Discovery",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "Hybrid search combining the MercadoLibre API and Playwright Stealth scrapers.",
            rules: [
                "Fast Search API: Mass indexing using keyword targets of primary brands.",
                "Playwright Evasion: Simulates browser sessions in headless mode to collect deep description fields without triggering IP bans.",
                "OAuth 2.0 Tokens: Integrates the platform's authentication flow with automatic token refreshing and rotation.",
                "Incremental Storage: Bulk write operations inserting newly discovered listings into Supabase."
            ]
        },
        {
            id: "asociación",
            title: "03. SKU Matching",
            icon: <Cpu className="w-5 h-5 text-cyan-400" />,
            summary: "Fuzzy Logic engine mapping informal or poorly written listings back to the official SKU catalog.",
            rules: [
                "Fuzzy Matching: Similarity ratio computation using fuzz.token_set_ratio between listing title and catalog name.",
                "Confidence Classification: Classifies matches into Match Levels (1: Exact, 2: High similarity, 3: Keyword match).",
                "Noise Filter: Absolute discard of irrelevant categories (books with homonym authors, consoles, toys).",
                "Strict Exclusions: Gateways built on brand signatures to block non-Nutricia listings."
            ]
        },
        {
            id: "normalización",
            title: "04. Normalization",
            icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
            summary: "Regex-based semantic extraction of packing units and actual weight from titles and descriptions.",
            rules: [
                "Regex Volumetrics: Automatic parsing of specified weights (e.g. '800g', '400g', 'grs', 'ml').",
                "Pack Multipliers: Scans title strings for quantity markers (e.g. 'Pack x6', 'Combo x2', '12 units').",
                "Density Coefficient: Applies density multipliers to compute dry weight equivalent of liquid infant formulas.",
                "Attribute Fusion: Cross-references calculated weight against structural attributes extracted by Playwright."
            ]
        },
        {
            id: "auditoría",
            title: "05. BPP Audit",
            icon: <FileText className="w-5 h-5 text-cyan-400" />,
            summary: "Violation detection and evidence generation ready for the MercadoLibre Brand Protection Program.",
            rules: [
                "Pricing Audits: Triggers alert if unit price (total price / quantity) falls below the official MAP threshold.",
                "Channel Controls (Gray Market): Flags products from social welfare programs, donations to NGOs, or stolen goods.",
                "Brand Integrity: Validates brand mismatches between official names and listing metadata.",
                "BPP Reason Code Mapping: Maps violations to official reason codes (e.g., Code 703: Pricing, Code 704: Deceptive quantity)."
            ]
        }
    ];

    const steps = language === 'es' ? stepsEs : stepsEn;
    const activeData = steps[activeStep];

    return (
        <div className="space-y-6 font-sans">
            <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                    {language === 'es' ? "Diagrama de Flujo de Datos (DFD) - Brand Protection Engine" : "Data Flow Diagram (DFD) - Brand Protection Engine"}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    {language === 'es' 
                        ? "Haz clic en cada fase para ver las reglas de auditoría y lógica de procesamiento de la PoC."
                        : "Click on each phase to reveal the audit rules and processing logic of the PoC."
                    }
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded border border-border/40 bg-muted/10">
                {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    return (
                        <React.Fragment key={step.id}>
                            <button
                                onClick={() => setActiveStep(index)}
                                className={`flex-1 w-full lg:w-auto p-4 rounded border text-left transition-all relative ${
                                    isActive
                                        ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                        : 'bg-background border-border hover:border-primary/40 text-foreground hover:bg-muted/10'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded border transition-colors ${isActive ? 'bg-primary/20 border-primary/40' : 'bg-muted/40 border-border'}`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h5 className="font-heading font-bold text-xs uppercase tracking-wider">{step.title}</h5>
                                        <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">{step.id.toUpperCase()}</p>
                                    </div>
                                </div>
                            </button>
                            {index < steps.length - 1 && (
                                <div className="text-muted-foreground/30 flex items-center justify-center shrink-0">
                                    <span className="hidden lg:block"><ArrowRight size={16} /></span>
                                    <span className="lg:hidden"><ArrowDown size={16} /></span>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="p-6 rounded border border-border/50 bg-accent/20 backdrop-blur-md relative overflow-hidden transition-all duration-300">
                <div className="absolute top-[-50%] left-[-20%] h-full w-full bg-primary/5 blur-[50px] -z-10" />
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {activeData.icon}
                    </div>
                    <div className="space-y-4 flex-1">
                        <div>
                            <h5 className="font-heading font-extrabold text-sm text-foreground uppercase tracking-wider">
                                {activeData.title}
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                {activeData.summary}
                            </p>
                        </div>
                        <div className="space-y-2 border-t border-border/10 pt-4">
                            <h6 className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                                {language === 'es' ? "// REGLAS DE NEGOCIO Y PROCESAMIENTO" : "// BUSINESS LOGIC & PROCESSING"}
                            </h6>
                            <ul className="space-y-2">
                                {activeData.rules.map((rule, i) => (
                                    <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                                        <span className="text-primary select-none mt-0.5">▸</span>
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Add fake components for dynamic import compatibility if needed, or simple custom icons

export function BagoMigrationDataFlowDiagram({ language }: { language: 'es' | 'en' }) {
    const [activeStep, setActiveStep] = useState(0);

    const stepsEs: DFDStep[] = [
        {
            id: "sources",
            title: "01. Orígenes Transaccionales",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Extracción y consolidación de datos desde bases de datos relacionales (Oracle/SQL Server) y sistemas ERP locales.",
            rules: [
                "Extracción Batch: Mapeo programado de tablas transaccionales de ventas, inventario y facturación.",
                "Estandarización DDL: Homogeneización de tipos de datos antes del procesamiento para evitar incompatibilidades.",
                "CDC (Change Data Capture): Captura incremental de registros modificados desde la última ejecución para optimizar volumen."
            ]
        },
        {
            id: "odi",
            title: "02. Oracle ODI 12c",
            icon: <Cpu className="w-5 h-5 text-cyan-400" />,
            summary: "Procesamiento, limpieza y estructuración de datos mediante flujos ETL locales de alto rendimiento.",
            rules: [
                "Orquestación Centralizada: Monitoreo de dependencias de ejecución de paquetes y control de logs transaccionales.",
                "Validación de Calidad: Filtro automático de registros inconsistentes, nulos críticos o duplicados.",
                "Preparación de Cargas: Generación de datasets optimizados listos para transferir a almacenamiento cloud."
            ]
        },
        {
            id: "s3",
            title: "03. AWS S3 Cloud Staging",
            icon: <Server className="w-5 h-5 text-cyan-400" />,
            summary: "Persistencia de staging e histórico inmutable en la nube para auditoría y almacenamiento en frío.",
            rules: [
                "Almacenamiento Seguro: Encriptación en reposo y políticas estrictas de acceso IAM (ISO 27001).",
                "Staging Inmutable: Archivos CSV/Parquet versionados para auditorías históricas y reprocesamientos sin impacto.",
                "Alta Disponibilidad: Infraestructura cloud redundante que garantiza el acceso del Data Warehouse."
            ]
        },
        {
            id: "snowflake",
            title: "04. Snowflake DWH",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Carga en Data Warehouse y modelado dimensional (Copo de Nieve) para analítica corporativa.",
            rules: [
                "Carga Automatizada: Snowpipe realiza la ingesta automatizada desde buckets S3 al detectar nuevos archivos.",
                "Modelado de Negocio: Estructuración en tablas de hechos y dimensiones con vistas analíticas pre-agregadas.",
                "Escalabilidad Dinámica: Cómputo independiente y virtual que evita interferencias con las queries de reportes."
            ]
        },
        {
            id: "bi",
            title: "05. Visualización de Negocio",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Reportes interactivos en Power BI y Tableau consumiendo Snowflake para toma de decisiones tácticas.",
            rules: [
                "Acceso en Tiempo Real: Conexión optimizada (DirectQuery/Extracts) con tiempos de respuesta menores a 1 segundo.",
                "Dashboards Ejecutivos: Paneles consolidados de ventas, inventario y logística para directivos.",
                "Autoservicio Analítico: Vistas limpias preparadas para que usuarios de negocio realicen reportes ad-hoc."
            ]
        }
    ];

    const stepsEn: DFDStep[] = [
        {
            id: "sources",
            title: "01. Transactional Sources",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Extraction and consolidation from local relational databases (Oracle/SQL Server) and ERP systems.",
            rules: [
                "Batch Extraction: Scheduled mapping of sales, inventory, and invoicing tables.",
                "DDL Standardization: Datatype homogenization before processing to avoid incompatibilities.",
                "CDC (Change Data Capture): Incremental capture of modified records since last run to optimize volumes."
            ]
        },
        {
            id: "odi",
            title: "02. Oracle ODI 12c",
            icon: <Cpu className="w-5 h-5 text-cyan-400" />,
            summary: "High-performance local ETL processing, cleansing, and structuring.",
            rules: [
                "Centralized Orchestration: Monitoring package dependencies and transactional logs.",
                "Quality Validation: Filtering of inconsistent entries, critical nulls, or duplicates.",
                "Load Preparation: Generating optimized datasets ready for cloud storage transfer."
            ]
        },
        {
            id: "s3",
            title: "03. AWS S3 Cloud Staging",
            icon: <Server className="w-5 h-5 text-cyan-400" />,
            summary: "Immutable staging and historical cloud persistence for auditing and cold storage.",
            rules: [
                "Secure Storage: Encryption at rest and strict IAM policies (ISO 27001).",
                "Immutable Staging: Versioned CSV/Parquet files for historical auditing and reprocessing.",
                "High Availability: Redundant cloud storage structure ensuring steady DWH access."
            ]
        },
        {
            id: "snowflake",
            title: "04. Snowflake DWH",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Data Warehouse loading and dimensional modeling (Snowflake Schema) for business intelligence.",
            rules: [
                "Automated Loading: Snowpipe automates ingestion from S3 buckets as soon as files land.",
                "Business Modeling: Structuring fact and dimension tables with pre-aggregated analytic views.",
                "Dynamic Compute: Independent and virtual compute that avoids dashboard query lag."
            ]
        },
        {
            id: "bi",
            title: "05. Business Dashboards",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Interactive Power BI & Tableau dashboards consuming Snowflake for tactical decisions.",
            rules: [
                "Real-Time Analytics: Optimized connections (DirectQuery/Extracts) with sub-second response times.",
                "Executive Dashboards: Consolidated sales, inventory, and logistics panels for leadership.",
                "Analytical Self-Service: Clean business views prepared for ad-hoc user queries."
            ]
        }
    ];

    const steps = language === 'es' ? stepsEs : stepsEn;
    const active = steps[activeStep];

    return (
        <div className="font-mono text-sm border border-border/40 rounded bg-background p-6">
            <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">
                {language === 'es' ? '// DIAGRAMA DE FLUJO DE DATOS (MIGRACIÓN DWH)' : '// DATA FLOW DIAGRAM (DWH MIGRATION)'}
            </h4>
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Steps selection */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                    {steps.map((step, idx) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            className={`flex items-center gap-3 p-3 rounded border text-left transition-all cursor-pointer ${
                                activeStep === idx
                                    ? 'bg-primary/10 border-primary text-foreground shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                                    : 'bg-muted/10 border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                            }`}
                        >
                            {step.icon}
                            <span className="font-bold text-xs">{step.title}</span>
                        </button>
                    ))}
                </div>

                {/* Step Details */}
                <div className="lg:col-span-8 border border-border/40 rounded p-5 bg-muted/5 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-3 border-b border-border/30 pb-3">
                            {active.icon}
                            <h5 className="font-bold text-primary">{active.title}</h5>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                            {active.summary}
                        </p>
                        <div>
                            <span className="text-xxs text-primary uppercase font-bold tracking-widest block mb-2">
                                {language === 'es' ? 'Reglas de Ingeniería:' : 'Engineering Rules:'}
                            </span>
                            <ul className="space-y-1.5 list-disc pl-4 text-xxs text-muted-foreground">
                                {active.rules.map((rule, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CordobaDataFlowDiagram({ language }: { language: 'es' | 'en' }) {
    const [activeStep, setActiveStep] = useState(0);

    const stepsEs: DFDStep[] = [
        {
            id: "scraper",
            title: "01. Ingestor Airbnb",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "Script Python que extrae tarifas, reviews, calendario y superhost status evadiendo bloqueos mediante TLS fingerprinting (curl_cffi).",
            rules: [
                "Evasión de Antibots: Emulación de firma TLS Chrome 120 para evitar CAPTCHAs y bloqueos automáticos.",
                "Extracción de JSON-LD: Parseo de metadatos estructurados en la landing de Airbnb para recuperar descripciones y fotos oficiales.",
                "Estructura Diferida: Extracción del estado diferido (state-0) de React para capturar ratings de limpieza, comunicación y ubicación exactos."
            ]
        },
        {
            id: "cache",
            title: "02. Sync de Datos (Cache)",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Sincroniza la información de Airbnb a archivos JSON locales y une los catálogos de minibar (CSV) y mapas (POIs).",
            rules: [
                "Inmutabilidad de Caché: Escritura a airbnb-details.json consumido de forma estática en tiempo de compilación por Next.js.",
                "Base de Datos de Inventario: Mapeo de inventario.csv para sincronizar stock y precios de las bebidas y consumibles del departamento.",
                "Normalización de POIs: Conversión de mapas_puntos.csv en capas geográficas interactivas (Mapbox/Google Maps)."
            ]
        },
        {
            id: "checkin",
            title: "03. Check-In Digital",
            icon: <UserCheck size={18} className="text-cyan-400" />,
            summary: "Portal donde el huésped realiza su registro, declara acompañantes y firma digitalmente el reglamento de copropiedad.",
            rules: [
                "Validación de Identidad: Captura de foto de documento y pasaporte para el registro legal del huésped.",
                "Firma de Reglamento: Módulo interactivo de firma digital para validar el reglamento interno de copropiedad (Reglamento.txt).",
                "Integración WhatsApp: Notificación automática al anfitrión una vez que el check-in es aprobado."
            ]
        },
        {
            id: "cava",
            title: "04. Cava & Minibar",
            icon: <Wine className="w-5 h-5 text-cyan-400" />,
            summary: "Menú interactivo de bebidas en la heladera accesible mediante códigos QR impresos dinámicamente.",
            rules: [
                "Menú Autogenerado: Lectura de inventario.csv para desplegar catálogo y precios de vinos, cervezas y golosinas.",
                "Registro de Consumo: El huésped selecciona los consumos y estos se asocian de forma transaccional a la reserva.",
                "Generador de QRs: Script automatizado en Python (qrcode + Pillow) que genera etiquetas impresas con la URL correcta del minibar."
            ]
        },
        {
            id: "concierge",
            title: "05. Conserje IA",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Chatbot asistente web contextualizado con la base de conocimientos del departamento para responder dudas 24/7.",
            rules: [
                "Base de Conocimiento Local: Contexto estricto del departamento (instrucciones de lavarropas, clave de Wi-Fi, check-out).",
                "Timezone-Aware: Cálculo dinámico de saludos basados en la hora oficial de Buenos Aires (GMT-3).",
                "Redirección de Soporte: Escalado a llamada telefónica o chat de WhatsApp si la consulta requiere intervención humana."
            ]
        }
    ];

    const stepsEn: DFDStep[] = [
        {
            id: "scraper",
            title: "01. Airbnb Scraper",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "Python script that extracts pricing, reviews, calendar, and superhost status, bypassing blockages via TLS fingerprinting (curl_cffi).",
            rules: [
                "Antibot Evasion: Chrome 120 TLS client fingerprint emulation to bypass CAPTCHAs and cloud blocks.",
                "JSON-LD Extraction: Parsing structured metadata on the Airbnb listing page to recover official descriptions and photos.",
                "Deferred State Extraction: Parsing React deferred state-0 to capture specific ratings for cleanliness, communication, and location."
            ]
        },
        {
            id: "cache",
            title: "02. Data Sync (Cache)",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Synchronizes Airbnb details into local JSON cache and joins the minibar (CSV) and neighborhood POIs catalogs.",
            rules: [
                "Cache Immutability: Writing to airbnb-details.json consumed statically at build time by Next.js.",
                "Inventory Database: Mapping inventario.csv to sync stock and prices of drinks and snacks in the apartment.",
                "POI Normalization: Converting mapas_puntos.csv to interactive geographical map coordinates (Mapbox/Google Maps)."
            ]
        },
        {
            id: "checkin",
            title: "03. Digital Check-In",
            icon: <UserCheck size={18} className="text-cyan-400" />,
            summary: "Portal where guests register, declare companions, and digitally sign the building code of conduct.",
            rules: [
                "Identity Verification: Upload passport and ID documents for host legal compliance.",
                "Agreement Signature: Interactive digital signature panel validating the building rules agreement (Reglamento.txt).",
                "WhatsApp Alerting: Automated webhook notifying the host once the check-in is complete."
            ]
        },
        {
            id: "cava",
            title: "04. Cava & Minibar",
            icon: <Wine className="w-5 h-5 text-cyan-400" />,
            summary: "Fridge beverage interactive menu accessible via dynamically printed QR codes.",
            rules: [
                "Menu Auto-generation: Reads inventario.csv to display available inventory and pricing of wines, beers, and snacks.",
                "Consumption Tracker: Guest records consumption and tags it transactionally to their ongoing reservation.",
                "QR Code Generator: Python script (qrcode + Pillow) generating printable tags with the exact minibar URL."
            ]
        },
        {
            id: "concierge",
            title: "05. AI Concierge",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Web assistant chatbot pre-loaded with the apartment knowledge base to resolve guest questions 24/7.",
            rules: [
                "Local Knowledge base: Context-bound answers regarding apartment appliances, Wi-Fi password, and checkout guidelines.",
                "Timezone-Aware: Dynamically computes greetings depending on Buenos Aires timezone (GMT-3).",
                "Support Routing: Escalates to phone call or WhatsApp link if queries require manual host action."
            ]
        }
    ];

    const steps = language === 'es' ? stepsEs : stepsEn;
    const active = steps[activeStep];

    return (
        <div className="font-mono text-sm border border-border/40 rounded bg-background p-6">
            <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">
                {language === 'es' ? '// DIAGRAMA DE FLUJO DE DATOS (CONSERJERÍA SMART)' : '// DATA FLOW DIAGRAM (SMART CONCIERGE)'}
            </h4>
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Steps selection */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                    {steps.map((step, idx) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            className={`flex items-center gap-3 p-3 rounded border text-left transition-all cursor-pointer ${
                                activeStep === idx
                                    ? 'bg-primary/10 border-primary text-foreground shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                                    : 'bg-muted/10 border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                            }`}
                        >
                            {step.icon}
                            <span className="font-bold text-xs">{step.title}</span>
                        </button>
                    ))}
                </div>

                {/* Step Details */}
                <div className="lg:col-span-8 border border-border/40 rounded p-5 bg-muted/5 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-3 border-b border-border/30 pb-3">
                            {active.icon}
                            <h5 className="font-bold text-primary">{active.title}</h5>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                            {active.summary}
                        </p>
                        <div>
                            <span className="text-xxs text-primary uppercase font-bold tracking-widest block mb-2">
                                {language === 'es' ? 'Reglas de Ingeniería:' : 'Engineering Rules:'}
                            </span>
                            <ul className="space-y-1.5 list-disc pl-4 text-xxs text-muted-foreground">
                                {active.rules.map((rule, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SarmientoDataFlowDiagram({ language }: { language: 'es' | 'en' }) {
    const [activeStep, setActiveStep] = useState(0);

    const stepsEs: DFDStep[] = [
        {
            id: "scheduler",
            title: "01. Planificador GitHub Actions",
            icon: <Clock className="w-5 h-5 text-cyan-400" />,
            summary: "Dispara flujos programados en la nube: 4 veces al día para auditar servicios públicos y del 1 al 5 de cada mes para expensas.",
            rules: [
                "Programación de Tareas (cron): Actualización de red eléctrica, agua y gas cada 6 horas.",
                "Barrido Mensual Preventivo: Intentos automáticos de extracción de expensas los primeros días del mes.",
                "Ejecución Serverless: Corridas aisladas en contenedores efímeros sin requerir hosting activo permanente."
            ]
        },
        {
            id: "orchestrator",
            title: "02. Coordinador Inteligente",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "Script cron_update.py que comprueba si los datos ya existen antes de consultar APIs o descargar archivos para ahorrar ancho de banda.",
            rules: [
                "Predicción de Período: Determina dinámicamente cuál es el período vencido esperado (ej: Año-Mes).",
                "Control de Redundancia: Consulta gastos.json. Si el período ya existe, detiene la ejecución inmediatamente.",
                "Fallback Seguro: Lanza la cadena de scraping y parseo si el período no está registrado."
            ]
        },
        {
            id: "ingestion",
            title: "03. Descarga y Parseo PDF",
            icon: <FileText className="w-5 h-5 text-cyan-400" />,
            summary: "download_historico.py descarga el PDF usando payloads cifrados en Base64. extract_data.py usa pdfplumber y Regex para estructurar gastos y prorrateo.",
            rules: [
                "Cifrado Base64: Encripta identificadores predictivos y credenciales dummy para interactuar de forma segura con la API de la administración.",
                "Estructuración pdfplumber: Lee celdas de tablas no tabuladas y las segmenta por conceptos, U.F. y prorrateos.",
                "Categorización Inteligente: Algoritmo heurístico que clasifica gastos en categorías homogéneas (Sueldos, Seguros, Mantenimiento, etc.)."
            ]
        },
        {
            id: "db",
            title: "04. Base de Datos JSON",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Escribe la información limpia a gastos.json y prorrateo.json. El pipeline realiza commits automáticos a GitHub tras actualizar.",
            rules: [
                "Esquema Plano y Relacional: Archivos JSON optimizados para carga ultra rápida y estructurados de forma asociativa.",
                "Persistencia Git: Acciones automáticas ejecutan 'git commit' de vuelta a la rama principal ante cambios detectados.",
                "Cero Costo: Despliegue estático de bases de datos estáticas, reduciendo a cero el costo y la complejidad de base de datos relacional."
            ]
        },
        {
            id: "services",
            title: "05. Auditor de Suministros",
            icon: <Activity className="w-5 h-5 text-cyan-400" />,
            summary: "check_servicios.py audita cortes activos de Edesur, AySA y Metrogas en la zona geográfica del consorcio mediante Web Scraping y búsquedas RegExp.",
            rules: [
                "Estrategias SSL Alternativas: Contextos SSL adaptativos compatibles tanto en entornos Windows locales como contenedores Linux.",
                "Scraping de ENRE/AySA/Metrogas: Análisis de páginas de estado de red eléctrica, agua potable y gas natural en busca de coincidencias con el municipio del edificio.",
                "Actualización de Estado: Guarda el resultado en servicios_status.json consumido dinámicamente por la UI."
            ]
        },
        {
            id: "dashboard",
            title: "06. Frontend Estático",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Index.html y dashboard.js (Vanilla CSS & JS, ApexCharts) renderizan gráficos históricos de egresos e intereses de U.F. calculados en vivo.",
            rules: [
                "Cero Frameworks: Vanilla JS (ES6+) que elimina dependencias y asegura velocidad máxima de carga.",
                "Cálculos en Caliente: Motor financiero que liquida intereses punitorios retroactivos por unidad funcional directo en el navegador.",
                "Visualizaciones ApexCharts: Gráficos dinámicos interactivos de series temporales y distribución patrimonial."
            ]
        }
    ];

    const stepsEn: DFDStep[] = [
        {
            id: "scheduler",
            title: "01. GitHub Actions Scheduler",
            icon: <Clock className="w-5 h-5 text-cyan-400" />,
            summary: "Triggers scheduled workflows in the cloud: 4 times a day to audit public services and from the 1st to the 5th of each month for expenses.",
            rules: [
                "Cron Job Tasking: Updates electricity, water, and gas network status every 6 hours.",
                "Monthly Sweep Strategy: Automatically checks for newly released expense statements during the first days of the month.",
                "Serverless Execution: Isolated runs in ephemeral containers without requiring active permanent hosting."
            ]
        },
        {
            id: "orchestrator",
            title: "02. Intelligent Orchestrator",
            icon: <Bot className="w-5 h-5 text-cyan-400" />,
            summary: "cron_update.py checks if target data exists before querying APIs or downloading files to optimize bandwidth and API usage.",
            rules: [
                "Period Prediction: Dynamically calculates the expected past period to process (e.g. Year-Month).",
                "Redundancy Block: Inquires gastos.json. If the period is present, halts execution immediately.",
                "Safe Fallback: Fires the scraping and parsing chain if the period is not yet cached."
            ]
        },
        {
            id: "ingestion",
            title: "03. Ingestion & PDF Parsing",
            icon: <FileText className="w-5 h-5 text-cyan-400" />,
            summary: "download_historico.py retrieves the PDF using Base64 encrypted payloads. extract_data.py uses pdfplumber and Regex to structure expenses.",
            rules: [
                "Base64 Encryption: Encrypts predictive identifiers and dummy credentials to securely fetch statements from the administrator API.",
                "pdfplumber Extraction: Reads tabular but non-formatted PDF grids and slices them by concepts, units, and debt.",
                "Smart Classification: Heuristic algorithm classifying unstructured expenses into homogeneous groups (Salaries, Insurance, Maintenance, etc.)."
            ]
        },
        {
            id: "db",
            title: "04. JSON Database Cache",
            icon: <Database className="w-5 h-5 text-cyan-400" />,
            summary: "Writes structured details to gastos.json and prorrateo.json. The pipeline auto-commits updates back to Git.",
            rules: [
                "Flat-File Schema: Light JSON structures optimized for near-instant rendering.",
                "Git Autocommit: Actions pipeline executes 'git commit' back to the main branch when new statements are compiled.",
                "Zero Cost DWH: Serverless DWH utilizing static file hosting, dropping database hosting costs to absolute zero."
            ]
        },
        {
            id: "services",
            title: "05. Supply Status Auditor",
            icon: <Activity className="w-5 h-5 text-cyan-400" />,
            summary: "check_servicios.py audits active outages for Edesur, AySA, and Metrogas in the building's geographic zone via Web Scraping and Regex.",
            rules: [
                "Adaptive SSL Contexts: Flexible SSL environments compatible with both local Windows and Linux container execution.",
                "ENRE/AySA/Metrogas Scraping: Scans official service outage maps searching for matches in the building's municipality area.",
                "Live Status Updates: Writes outputs to servicios_status.json consumed dynamically on the page."
            ]
        },
        {
            id: "dashboard",
            title: "06. Static UI & Engine",
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            summary: "Index.html and dashboard.js (Vanilla CSS & JS, ApexCharts) render interactive financial timelines and compute interest on the fly.",
            rules: [
                "Zero Frameworks: Strict Vanilla JS (ES6+) removing all dependencies and yielding lightning-fast rendering speeds.",
                "On-the-fly Math: Financial runtime computing interest rates per unit directly inside the guest browser.",
                "ApexCharts Timelines: High-fidelity visualizations of historical costs and category trends."
            ]
        }
    ];

    const steps = language === 'es' ? stepsEs : stepsEn;
    const active = steps[activeStep];

    return (
        <div className="font-mono text-sm border border-border/40 rounded bg-background p-6">
            <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">
                {language === 'es' ? '// DIAGRAMA DE FLUJO DE DATOS (AUDITORÍA FINANCIERA)' : '// DATA FLOW DIAGRAM (FINANCIAL AUDIT)'}
            </h4>
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Steps selection */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                    {steps.map((step, idx) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            className={`flex items-center gap-3 p-3 rounded border text-left transition-all cursor-pointer ${
                                activeStep === idx
                                    ? 'bg-primary/10 border-primary text-foreground shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                                    : 'bg-muted/10 border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                            }`}
                        >
                            {step.icon}
                            <span className="font-bold text-xs">{step.title}</span>
                        </button>
                    ))}
                </div>

                {/* Step Details */}
                <div className="lg:col-span-8 border border-border/40 rounded p-5 bg-muted/5 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-3 border-b border-border/30 pb-3">
                            {active.icon}
                            <h5 className="font-bold text-primary">{active.title}</h5>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                            {active.summary}
                        </p>
                        <div>
                            <span className="text-xxs text-primary uppercase font-bold tracking-widest block mb-2">
                                {language === 'es' ? 'Reglas de Ingeniería:' : 'Engineering Rules:'}
                            </span>
                            <ul className="space-y-1.5 list-disc pl-4 text-xxs text-muted-foreground">
                                {active.rules.map((rule, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    );
}

