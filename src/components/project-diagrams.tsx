'use client';

import React, { useState } from 'react';
import { Server, Database, Cpu, Bot, Monitor, Key, RefreshCw, FileText, ArrowRight, ArrowDown } from "lucide-react";

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
            icon: <Globe className="w-5 h-5 text-slate-400" />,
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
            icon: <Database className="w-5 h-5 text-slate-400" />,
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
            icon: <Cpu className="w-5 h-5 text-slate-400" />,
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
            icon: <Bot className="w-5 h-5 text-slate-400" />,
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
            icon: <Monitor className="w-5 h-5 text-slate-400" />,
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
            icon: <Globe className="w-5 h-5 text-slate-400" />,
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
            icon: <Database className="w-5 h-5 text-slate-400" />,
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
            icon: <Cpu className="w-5 h-5 text-slate-400" />,
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
            icon: <Bot className="w-5 h-5 text-slate-400" />,
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
            icon: <Monitor className="w-5 h-5 text-slate-400" />,
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
                                        ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(245,158,11,0.15)]'
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
            icon: <Server className="w-5 h-5 text-slate-400" />,
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
            icon: <Key className="w-5 h-5 text-slate-400" />,
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
            icon: <RefreshCw className="w-5 h-5 text-slate-400" />,
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
            icon: <FileText className="w-5 h-5 text-slate-400" />,
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
            icon: <Monitor className="w-5 h-5 text-slate-400" />,
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
            icon: <Server className="w-5 h-5 text-slate-400" />,
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
            icon: <Key className="w-5 h-5 text-slate-400" />,
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
            icon: <RefreshCw className="w-5 h-5 text-slate-400" />,
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
            icon: <FileText className="w-5 h-5 text-slate-400" />,
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
            icon: <Monitor className="w-5 h-5 text-slate-400" />,
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
                                        ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(245,158,11,0.15)]'
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

// Add fake components for dynamic import compatibility if needed, or simple custom icons
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
