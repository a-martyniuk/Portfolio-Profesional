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
        title: "Senior Analytics Engineer (Contractor)",
        company: "Mazz Soluciones (Data Rayders)",
        location: "CABA, Argentina",
        period: "Jun 2022 – Jul 2024",
        description: [
            "Arquitectura y desarrollo del MAC (Modelo Analítico Corporativo) para Laboratorios Bagó, integrando ecosistemas híbridos (Oracle, AWS, Snowflake).",
            "Optimización de pipelines ETL con Oracle Data Integrator 12c, logrando un aumento del 20% en la eficiencia de líneas de producción farmacéutica.",
            "Automatización de procesos críticos de misión fija mediante orquestación compleja entre nubes y APIs corporativas."
        ]
    },
    {
        title: "Infrastructure & Analytics Specialist",
        company: "Ministerio de Seguridad de la Prov. de Buenos Aires",
        location: "Buenos Aires, Argentina",
        period: "May 2014 – May 2022",
        description: [
            "Diseño y operación de la plataforma de análisis criminal provincial (SID), infraestructura crítica de Estado para la seguridad pública.",
            "Liderazgo técnico en la detección de hotspots y patrones delictivos mediante análisis geoespacial y volumétrico de datos sensibles.",
            "Desarrollo de sistemas de apoyo a la decisión táctica para altos mandos ministeriales basándose en evidencia y análisis predictivo."
        ]
    },
    {
        title: "Senior Developer (Mainframe Systems)",
        company: "TGV / CDA Informática (BBVA / Isban)",
        location: "Buenos Aires, Argentina",
        period: "2011 – 2013",
        description: [
            "Ingeniería de software en sistemas bancarios de alta transaccionalidad (Mainframe z/OS, COBOL, DB2).",
            "Modernización y mantenimiento de núcleos financieros para BBVA Regional e Isban (Ingeniería Bancaria Santander).",
            "Garantía de integridad y performance en procesos batch críticos para el ecosistema financiero internacional."
        ]
    },
    {
        title: "Ingeniero en Automatización (Proyectos Especiales)",
        company: "MJ Instalaciones",
        location: "Buenos Aires, Argentina",
        period: "Jul 2024 – Actualidad",
        description: [
            "Aplicación práctica de ingeniería de automatización y redes para sistemas inteligentes de alta complejidad.",
            "Diseño de infraestructuras WiFi Mesh y ecosistemas IoT industriales para optimización energética.",
            "Coordinación técnica de implementaciones tecnológicas avanzadas en entornos residenciales y corporativos prime."
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
