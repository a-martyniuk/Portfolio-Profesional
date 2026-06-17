'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, BarChart3, CheckCircle2, Server, HelpCircle, Activity } from 'lucide-react';

interface PipelineStage {
    id: string;
    title: string;
    icon: React.ReactNode;
    subtitle: string;
    description: string;
    techStack: string[];
    metrics: string[];
    projects: { name: string; desc: string }[];
}

const PIPELINE_STAGES: PipelineStage[] = [
    {
        id: 'ingestion',
        title: '01. Fuentes & Ingesta',
        icon: <Server className="w-5 h-5 text-amber-500" />,
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
        icon: <Cpu className="w-5 h-5 text-amber-500" />,
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
        icon: <Database className="w-5 h-5 text-amber-500" />,
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
        icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
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
            { name: 'SNIC Streamlit Dashboard', desc: 'Panel interactivo de análisis criminal provincial con mapas coropléticos y modelos predictivos.' }
        ]
    }
];

export function CriticalDashboard() {
    const [activeStageId, setActiveStageId] = useState<string>('ingestion');

    const activeStage = PIPELINE_STAGES.find(stage => stage.id === activeStageId) || PIPELINE_STAGES[0];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8 font-sans">
            {/* Header del Visualizador */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-border bg-muted/40 p-4 rounded-t-xl border-b-0">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <h3 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5" /> PIPELINE_MONITOR // ARQUITECTURA DE DATOS
                    </h3>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground mt-2 sm:mt-0">
                    STATUS: OPERATIONAL | REPLICA: STANDBY | DB: CODE-DRIVEN
                </div>
            </div>

            {/* Layout del Diagrama */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-border bg-background divide-y md:divide-y-0 md:divide-x divide-border">
                {PIPELINE_STAGES.map((stage) => {
                    const isActive = stage.id === activeStageId;
                    return (
                        <button
                            key={stage.id}
                            onClick={() => setActiveStageId(stage.id)}
                            className={`p-6 text-left transition-all relative overflow-hidden group cursor-pointer ${
                                isActive 
                                ? 'bg-amber-500/5 dark:bg-amber-500/[0.03] border-l-2 md:border-l-0 md:border-t-2 border-primary' 
                                : 'hover:bg-muted/30'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded border border-border/80 bg-muted/50 group-hover:border-primary/50 transition-colors">
                                    {stage.icon}
                                </div>
                                {isActive && (
                                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
                                        Active
                                    </span>
                                )}
                            </div>
                            <h4 className="font-heading font-bold text-base mb-1 text-foreground">
                                {stage.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                                {stage.subtitle}
                            </p>
                        </button>
                    );
                })}
            </div>

            {/* Panel de Detalles */}
            <div className="border border-border border-t-0 bg-muted/10 p-6 sm:p-8 rounded-b-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.01] rounded-full blur-3xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStage.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        {/* Columna Principal - Descripción */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                                    {activeStage.subtitle}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {activeStage.description}
                                </p>
                            </div>

                            {/* Stack Tecnológico */}
                            <div>
                                <h4 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-3">
                                    {"// TECNOLOGÍAS CLAVE"}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeStage.techStack.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-2.5 py-1 rounded border border-border bg-background font-mono text-xs text-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Proyectos Asociados */}
                            <div>
                                <h4 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-3">
                                    {"// PROYECTOS DONDE SE APLICA"}
                                </h4>
                                <div className="space-y-3">
                                    {activeStage.projects.map((proj) => (
                                        <div key={proj.name} className="p-3 rounded border border-border/60 bg-background/50">
                                            <span className="text-sm font-bold text-foreground block mb-0.5">
                                                {proj.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground block leading-relaxed">
                                                {proj.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha - Métricas e Indicadores de Rendimiento */}
                        <div className="space-y-6 lg:border-l lg:border-border lg:pl-8">
                            <div>
                                <h4 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-4">
                                    {"// CRITERIOS DE INGENIERÍA"}
                                </h4>
                                <div className="space-y-4">
                                    {activeStage.metrics.map((metric, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="p-0.5 rounded-full bg-amber-500/10 text-primary mt-0.5 shrink-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs text-muted-foreground leading-relaxed">
                                                {metric}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border">
                                <div className="p-4 rounded border border-amber-500/20 bg-amber-500/[0.02] flex items-start gap-3">
                                    <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-xs font-bold text-foreground block mb-1">
                                            Diseño Decisivo
                                        </span>
                                        <span className="text-[11px] text-muted-foreground leading-relaxed block">
                                            Cada componente se selecciona para garantizar la idempotencia, evitar gaps en cargas de datos transaccionales e implementar alertas tempranas proactivas ante caídas de servicio.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
