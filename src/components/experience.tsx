'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    isLast?: boolean;
}

const experiences: ExperienceItem[] = [
    {
        title: "Data Engineer / Analytics Engineer (Proyecto Acotado)",
        company: "BeOn Digital Transformation Partners",
        location: "Buenos Aires, Argentina",
        period: "Feb 2026 – Actualidad",
        description: [
            "Diseño de pipelines en Fabric (PySpark) y arquitecturas híbridas bajo Medallion (Bronze/Silver/Gold) en OneLake, estructurando modelos Star Schema y Snowflake.",
            "Refactorización del modelo analítico de compliance y sell-out (Danone, Unilever, PepsiCo), migrando consultas a procedimientos T-SQL parametrizados e idempotentes con control transaccional.",
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
        title: "Data Engineer / Analytics Engineer",
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
        title: "Data Engineer / Analytics Engineer",
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
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center">Trayectoria Profesional</h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 hidden md:block" />

                                    {/* Content Card */}
                                    <div className="flex-1 md:w-[45%]">
                                        <div className="p-6 rounded-2xl border border-border bg-accent/30 hover:border-primary/50 transition-colors">
                                            <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                                <Briefcase size={16} />
                                                <span>{exp.title}</span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                                                <span className="flex items-center gap-1 font-medium text-foreground">
                                                    {exp.company}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {exp.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    {exp.location}
                                                </span>
                                            </div>
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Spacer for Desktop */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
