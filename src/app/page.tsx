'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CriticalDashboard } from "@/components/critical-dashboard";
import { ProjectCard } from "@/components/project-card";
import { ProjectSlider } from "@/components/project-slider";
import { SkillChart } from "@/components/skill-chart";
import { MetricsGrid } from "@/components/animated-metrics";
import { SectionHeading } from "@/components/ui/section-heading";
import dynamic from 'next/dynamic';

const Experience = dynamic(() => import("@/components/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="py-24 text-center text-muted-foreground">Cargando experiencia...</div>
});
import { SectionTracker } from "@/components/providers/section-tracker";
import { Modal } from "@/components/ui/modal";
import { VisualEffects } from "@/components/visual-effects";
import { Mail, Linkedin, Github, GraduationCap, Globe, ArrowRight, Copy, CheckCircle } from "lucide-react";
import Image from "next/image";
import type { Project } from '@/types/project';

// Dynamic import removed - using InteractiveTimeline instead


export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("alexis.martyniuk@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "MELI AIO (E-Commerce Suite)",
      description: "Plataforma integral de gestión para Mercado Libre. Dashboard unificado para facturación, inventario y logística con automatización de fondo.",
      tags: ["FastAPI", "Next.js", "PostgreSQL", "MercadoPago"],
      image: "/images/projects/meli-dashboard.png",
      alt: "Dashboard de gestión e-commerce MELI AIO con FastAPI y Next.js mostrando facturación e inventario",
      details: "Automatización de procesos críticos de e-commerce. Sincronización de facturas en tiempo real, respaldo en Google Drive y análisis de inventario predictivo. Arquitectura Monorepo escalable.",
      architecture: ["Backend FastAPI Async", "Cola de Tareas (Workers)", "Base de Datos PostgreSQL", "Frontend Next.js SSR", "Integración OAuth 2.0"]
    },
    {
      title: "Scraper Inmobiliario (Market Intelligence)",
      description: "Herramienta de análisis de mercado que consolida listings de Zonaprop, Argenprop y Mercado Libre en un dataset unificado.",
      tags: ["Python", "Playwright", "Data Engineering", "Pandas"],
      image: "/images/projects/scraper-dashboard.png",
      alt: "Scraper inmobiliario con Python y Playwright para análisis de mercado y extracción de datos",
      details: "Motor de extracción de datos masivos con evasión de bloqueos (Stealth). Normalización de direcciones, detección de precios históricos y generación automática de reportes Excel.",
      architecture: ["Orquestador Python", "Playwright (Headless Browser)", "Rotate Proxy / User-Agent", "Pandas Data Processing", "Exportación OpenPyXL"]
    },
    // ... (rest of the projects array remains same)
    {
      title: "Modelo Analítico Corporativo (Laboratorios Bagó)",
      description: "Plataforma de datos de misión crítica para una de las mayores farmacéuticas de Argentina, que permitió aumentar en 20% la productividad y reducir tiempos de decisión operativa.",
      tags: ["Oracle", "ODI 12c", "AWS", "Snowflake"],
      link: "https://blogs.oracle.com/oracle-latinoamerica/post/laboratorios-bag-elev-su-produccin-en-un-20-con-el-apoyo-de-la-nube-de-oracle",
      image: "/images/projects/bago-dashboard.png",
      alt: "Plataforma ETL Laboratorios Bagó con Oracle ODI, AWS y Snowflake - Dashboard analítico corporativo",
      details: "Migración de ecosistema legacy a una arquitectura moderna de datos. El proyecto incluyó la orquestación de flujos globales y la consolidación de inventarios y ventas en tiempo real.",
      architecture: ["Sistemas Transaccionales", "Oracle ODI (ETL)", "AWS S3 Staging", "Snowflake DWH", "Dashboards Ejecutivos"]
    },
    {
      title: "Infraestructura de Estado (Ministerio de Seguridad)",
      description: "Plataforma provincial de análisis criminal utilizada por fuerzas de seguridad para asignación de recursos, detección de hotspots y toma de decisiones tácticas en tiempo real.",
      tags: ["PostgreSQL", "ArcGIS", "Python", "Sistemas de Misión Crítica"],
      image: "/images/projects/ministerio-heatmap.png",
      alt: "Sistema de análisis criminal con PostgreSQL PostGIS y ArcGIS mostrando mapas de calor geoespaciales",
      details: "Desarrollo de una base de datos centralizada para el análisis criminal. Integración de capas geográficas para la visualización de delitos y patrullas en vivo.",
      architecture: ["Reportes Policiales", "Python Scripts", "PostgreSQL PostGIS", "ArcGIS API", "Centros de Operaciones"]
    },
    {
      title: "Automatización y Redes de Alta Disponibilidad",
      description: "Implementación de ecosistemas IoT y redes WiFi Mesh para infraestructuras inteligentes, aplicando principios de automatización industrial y monitoreo proactivo.",
      tags: ["IoT", "Networking", "Automatización", "Sistemas Inteligentes"],
      image: "/images/projects/iot-network.png",
      alt: "Infraestructura IoT y WiFi Mesh para automatización industrial con sensores y monitoreo",
      details: "Diseño de redes redundantes para entornos críticos. Uso de protocolos de comunicación industrial para asegurar un 99.9% de uptime en dispositivos conectados.",
      architecture: ["Sensores/Dispositivos", "Protocolos MQTT/HTTP", "WiFi Mesh Nodes", "Monitoring Server", "Alert System"]
    },
  ];

  const skills = [
    { name: "Oracle Data Integrator 12c", level: 95, category: "Data" as const },
    { name: "Python & PL/SQL", level: 90, category: "Backend" as const },
    { name: "Snowflake & AWS", level: 85, category: "Cloud" as const },
    { name: "Power BI & Tableau", level: 88, category: "Data" as const },
    { name: "PostgreSQL", level: 92, category: "Backend" as const },
    { name: "Next.js & TypeScript", level: 87, category: "Frontend" as const },
    { name: "FastAPI & Node.js", level: 85, category: "Backend" as const },
    { name: "Docker & CI/CD", level: 80, category: "Cloud" as const },
  ];

  const metrics = [
    { value: 8, label: "Años de Experiencia", suffix: "+" },
    { value: 20, label: "Proyectos Completados", suffix: "+" },
    { value: 99.9, label: "Uptime Promedio", suffix: "%", decimals: 1 },
    { value: 15, label: "Tecnologías Dominadas", suffix: "+" },
  ];

  const education = [
    {
      degree: "Licenciatura en TICs para la Seguridad Pública",
      school: "IUPFA - Instituto Universitario PFA",
      status: "Tesis Pendiente",
    },
    {
      degree: "Tecnicatura Superior en Análisis de Sistemas",
      school: "CAEEP (2017 - 2019)",
      status: "Completado",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <SectionTracker />
      <VisualEffects />
      <Navbar />

      <Hero />
      <CriticalDashboard />

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Logros y Proyectos"
            subtitle={
              <span>
                Proyectos de misión crítica utilizados por organizaciones públicas y privadas.
                <br />
                <span className="inline-block mt-2 py-1 px-3 rounded-md bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider border border-red-500/20">
                  Featured by Oracle
                </span>
              </span>
            }
            centered
          />
          {/* Project Slider */}
          <ProjectSlider projects={projects} onProjectClick={setSelectedProject} />

          {/* Metrics Grid */}
          <div className="mt-16">
            <MetricsGrid metrics={metrics} />
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <Experience />

      {/* Stack & Education Section */}
      <motion.section
        id="stack"
        className="py-24 border-y border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Stack */}
            <div>
              <SectionHeading
                title="Experticia Técnica"
                subtitle="Desde mainframes COBOL/DB2 hasta nubes Snowflake/AWS: modernización de ecosistemas completos sin romper operaciones críticas."
              />
              <SkillChart skills={skills} />
            </div>

            {/* Education & Languages */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Formación Académica</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.degree} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/30">
                      <h4 className="font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-primary font-medium">{edu.school}</p>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{edu.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Idiomas</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-2xl border border-border bg-background">
                    <p className="text-xs uppercase text-muted-foreground mb-1 text-nowrap">Español</p>
                    <p className="font-bold">Nativo</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl border border-border bg-background">
                    <p className="text-xs uppercase text-muted-foreground mb-1 text-nowrap">Inglés</p>
                    <p className="font-bold">C1</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl border border-border bg-background">
                    <p className="text-xs uppercase text-muted-foreground mb-1 text-nowrap">Portugués</p>
                    <p className="font-bold">B1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Curated Code & Tools Section */}
      <motion.section
        id="curated-code"
        className="py-24 border-y border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Código Curado & Herramientas de Ingeniería"
            subtitle="Repositorios seleccionados que contienen herramientas, automatizaciones y prototipos desarrollados para resolver problemas reales de negocio, datos y productividad técnica."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Most relevant: Data Engineering & ETL */}
            <ProjectCard
              title="SNIC Análisis Criminal"
              description="Dashboard de inteligencia de seguridad con ETL automatizado, mapas coropléticos interactivos y modelos predictivos sobre datos oficiales."
              image="/images/projects/snic-dashboard.png"
              alt="Dashboard de análisis criminal con Streamlit, Python ETL y mapas coropléticos interactivos"
              tags={["Python", "Streamlit", "Docker", "Pandas"]}
              github="https://github.com/a-martyniuk/snic-analisis-criminal"
              link="https://alexismartyniuk-snic.streamlit.app/"
            />
            {/* Business Automation */}
            <ProjectCard
              title="Descarga-Facturas-ML"
              description="Bot de automatización contable para Mercado Libre. Descarga facturas, clasifica por fecha y respalda en Google Drive automáticamente."
              image="/images/projects/meli-automation.png"
              alt="Bot de automatización Python para descarga de facturas de Mercado Libre con integración Google Drive"
              tags={["Python", "APIs", "Automatización de Negocio"]}
              github="https://github.com/a-martyniuk/Descarga-Facturas-ML"
            />
            {/* Data Extraction */}
            <ProjectCard
              title="GOG Galaxy Export HTML"
              description="Extrae tu librería local de GOG Galaxy a un dashboard HTML interactivo y offline. Sin APIs ni dependencias externas."
              image="/images/projects/gog-pipeline.png"
              alt="Herramienta de extracción de datos SQLite de GOG Galaxy con exportación a HTML"
              tags={["Python", "SQLite", "Data Extraction"]}
              github="https://github.com/a-martyniuk/GOG-Galaxy-Export-HTML"
            />
            {/* Full-Stack Development */}
            <ProjectCard
              title="Portfolio Profesional"
              description="Portafolio de alto rendimiento construido con Next.js 15 (App Router), Tailwind CSS v4 y React 19. Puntuación perfecta en Lighthouse."
              image="/images/projects/portfolio-v2.png"
              alt="Portfolio profesional con Next.js 15, React 19 y Tailwind CSS v4 optimizado para performance"
              tags={["Next.js", "React", "Product Building"]}
              github="https://github.com/a-martyniuk/Portfolio-Profesional"
            />
            {/* Utility Tools */}
            <ProjectCard
              title="Orden-Archivos"
              description="Script de limpieza digital de alto rendimiento (O(1)). Organiza automáticamente archivos de escritorio y descargas en categorías lógicas."
              image="/images/projects/file-organizer.png"
              alt="Script Python de organización automática de archivos con algoritmo O(1)"
              tags={["Python", "OS", "Ingeniería de Archivos"]}
              github="https://github.com/a-martyniuk/Orden-Archivos"
            />
            {/* Experimental */}
            <ProjectCard
              title="Brújula-QR"
              description="HUD de Navegación AR estilo Cyberpunk. Integra brújula GPS, Scanner QR y efectos visuales reactivos sin apps nativas."
              image="/images/projects/webar-compass.png"
              alt="Aplicación web AR con brújula GPS, scanner QR y efectos visuales usando sensores del navegador"
              tags={["JavaScript", "Prototipo Experimental", "Sensores"]}
              github="https://github.com/a-martyniuk/Brujula-QR"
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Hablemos de tu Próximo Desafío"
            subtitle="¿Necesitás a alguien que diseñe, implemente y mantenga tu plataforma de datos sin romper producción?"
            centered
          />
          <div className="max-w-2xl mx-auto rounded-3xl border border-border/50 bg-accent/20 backdrop-blur-md p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_50px_-15px_rgba(99,102,241,0.2)]">
            {/* Decorative blob */}
            <div className="absolute top-[-50%] left-[-20%] h-full w-full bg-primary/10 blur-[80px] -z-10" />

            <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
              Estoy disponible para proyectos de arquitectura de datos, migración a la nube y consultoría estratégica para sistemas de alta complejidad.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <a
                href="mailto:alexis.martyniuk@gmail.com"
                className="flex items-center justify-center gap-3 bg-primary px-6 h-16 rounded-2xl font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 w-full sm:w-auto whitespace-nowrap"
              >
                <Mail size={18} /> Agenda una llamada o escribime
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-3 px-6 h-16 rounded-2xl border border-border bg-background hover:bg-muted transition-all font-bold w-full sm:w-auto min-w-[180px] whitespace-nowrap"
              >
                {copied ? (
                  <span className="text-emerald-500 flex items-center gap-2 italic">
                    <CheckCircle size={18} /> ¡Copiado!
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Copy size={18} /> Copiar Email
                  </span>
                )}
              </button>
              <div className="flex items-center gap-3 h-16">
                <a href="https://linkedin.com/in/alexismartyniuk/" target="_blank" className="flex items-center justify-center w-16 h-16 rounded-2xl border border-border bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
                <a href="https://github.com/a-martyniuk" target="_blank" className="flex items-center justify-center w-16 h-16 rounded-2xl border border-border bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"><Github size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-heading font-black tracking-tighter text-primary">AM.</span>
            <p className="text-muted-foreground text-sm font-medium">
              © {new Date().getFullYear()} Alexis Martyniuk.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="https://linkedin.com/in/alexismartyniuk/" target="_blank" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/a-martyniuk" target="_blank" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Caso de Estudio</h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject?.details}
              </p>
            </div>

            <div className="pt-6 border-t border-border/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Arquitectura Técnica</h4>
              <div className="space-y-4">
                {selectedProject?.architecture?.map((step: string, i: number) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                      0{i + 1}
                    </div>
                    <div className="flex-1 text-sm font-medium">{step}</div>
                    {i < selectedProject.architecture.length - 1 && (
                      <div className="hidden md:block text-muted-foreground/30"><ArrowRight size={14} /></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
              {selectedProject?.image && (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-accent text-[10px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {selectedProject?.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Ver publicación oficial <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      </Modal>
    </main>
  );
}
