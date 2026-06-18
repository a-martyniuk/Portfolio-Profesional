'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CriticalDashboard } from "@/components/critical-dashboard";
import { ProjectCard } from "@/components/project-card";
import { ProjectSlider } from "@/components/project-slider";
import { PressCard } from "@/components/press-card";
import { ScraperDataFlowDiagram, MeliAioDataFlowDiagram } from "@/components/project-diagrams";
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
import { Mail, Linkedin, Github, GraduationCap, Globe, ArrowRight, Copy, CheckCircle, Server, Cpu, Database, Split, AlertTriangle, ArrowDown } from "lucide-react";
import Image from "next/image";
import type { Project } from '@/types/project';
import { useLanguage } from '@/components/providers/language-provider';

interface DFDStep {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  rules: string[];
}

function DataFlowDiagram({ language }: { language: 'es' | 'en' }) {
  const [activeStep, setActiveStep] = useState(0);

  const stepsEs: DFDStep[] = [
    {
      id: "landing",
      title: "01. Capa Landing",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      summary: "Ingesta diaria incremental (09:00 AM) desde Drive/FTPs. Schema Enforcement estricto: valida 11 columnas del archivo Excel o aborta el proceso.",
      rules: [
        "Planificación Automatizada: Ejecutado diariamente a las 9 AM ART en Microsoft Fabric.",
        "Validación de Columnas: Requiere estrictamente 11 columnas específicas (FECHA, EAN, COD CLIENTE, UNIDADES, etc.).",
        "Mapeo de Cliente: Extrae dinámicamente el nombre del retail del prefijo del archivo (ej. 'Farmacity_202603.xlsx' -> 'FARMACITY').",
        "Control de Nulos: Limpieza de representaciones de nulos de Excel mapeándolas a NULL físico."
      ]
    },
    {
      id: "silver",
      title: "02. Capa Silver",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      summary: "Normalización de textos descriptivos, conversión de formatos de fecha, control de valores numéricos nulos y tipado universal.",
      rules: [
        "Normalización de Texto: Forzado a MAYÚSCULAS en campos agrupadores (MARCA, CATEGORÍA, BANDERA) para evitar duplicidad de casing.",
        "Tipado Seguro: Conversión obligatoria de EAN y COD CLIENTE a String puro para evitar notación científica de Excel y joins inestables.",
        "Fallback Numérico: Si el campo de Monto o unidades contiene valores nulos o 'nan', se inicializa por defecto en 0.0."
      ]
    },
    {
      id: "gold",
      title: "03. Capa Gold / Joins",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      summary: "Enriquecimiento de hechos con el Maestro de Productos mediante cruces secuenciales y control de huérfanos.",
      rules: [
        "Cruce Principal: Match exacto por EAN contra la dimensión de productos (dbo.dim_bdf_productos).",
        "Cruce Fallback: Si no hay match por EAN, se busca coincidencia utilizando el COD CLIENTE del retail.",
        "Detección de Huérfanos: Si ambos fallan, el registro es catalogado como huérfano y escrito en dbo.audit_bdf_productoshuerfanos."
      ]
    },
    {
      id: "combos",
      title: "04. Apertura de Combos",
      icon: <Split className="w-5 h-5 text-cyan-400" />,
      summary: "Desglose financiero en N filas para combos en clientes autorizados, distribuyendo EANs individuales y montos de forma segura.",
      rules: [
        "Condición de Activación: TIPO = 'COMBO' y Cliente pertenece al grupo autorizado (Farmacity, Leloir, Selma, Simplex, Farmaonline).",
        "Multiplicación de Registros: El registro original se duplica N veces en base a la cantidad de componentes del combo en el Maestro.",
        "Distribución de EANs: Cada registro resultante recibe secuencialmente el EAN individual del producto componente.",
        "Preservación de Monto: El Monto y unidades originales se preservan únicamente en la primera fila. En las restantes se setea en NULL para evitar duplicación de ventas en Power BI.",
        "Trazabilidad de Código: El código del combo base se copia en COD CLIENTE en todas las filas desglosadas."
      ]
    },
    {
      id: "audit",
      title: "05. Audit & Alertas",
      icon: <AlertTriangle className="w-5 h-5 text-cyan-400" />,
      summary: "Sistema de calidad in situ. El pipeline se interrumpe y envía alertas de email automáticas ante la aparición de huérfanos.",
      rules: [
        "Control Final de Calidad: Una celda Spark final consulta las tablas dbo.audit_bdf_comboshuerfanos y dbo.audit_bdf_productoshuerfanos.",
        "Excepción del Pipeline: Si detecta registros huérfanos, lanza una excepción del sistema que marca el Job como Fallido.",
        "Notificación Inmediata: Fabric Scheduler envía un mail de alerta con el listado de EANs faltantes en los catálogos oficiales."
      ]
    }
  ];

  const stepsEn: DFDStep[] = [
    {
      id: "landing",
      title: "01. Landing Layer",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      summary: "Incremental daily ingest (09:00 AM) from Drive/FTP. Strict Schema Enforcement checks 11 mandatory columns or aborts the run.",
      rules: [
        "Automated Scheduling: Executed daily at 9:00 AM ART in Microsoft Fabric scheduler.",
        "Column Validation: Enforces exactly 11 mandatory columns (FECHA, EAN, COD CLIENTE, UNIDADES, etc.).",
        "Dynamic Client Mapping: Automatically extracts the retail client name from the filename prefix (e.g. 'Farmacity_202603.xlsx' -> 'FARMACITY').",
        "Null Standardization: Cleans Excel textual nulls mapping them into physical database NULLs."
      ]
    },
    {
      id: "silver",
      title: "02. Silver Layer",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      summary: "Text normalization, date parsing, null values control, and universal key string conversion.",
      rules: [
        "Text Normalization: Enforces UPPERCASE on grouping fields (MARCA, CATEGORÍA, BANDERA) to avoid duplicates due to casing.",
        "Safe Typing: Forces EAN and COD CLIENTE to pure String to avoid Excel scientific notation issues and ensure stable joins.",
        "Fallback Values: If amount or units contain null or 'nan' values, they default to 0.0."
      ]
    },
    {
      id: "gold",
      title: "03. Gold Layer / Joins",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      summary: "Enriching fact data with the Master Product catalog using sequential matching and orphan tracking.",
      rules: [
        "Primary Join: Exact match by EAN against the product dimension catalog (dbo.dim_bdf_productos).",
        "Fallback Match: If EAN match fails, the pipeline attempts to match using the retail's COD CLIENTE.",
        "Orphan Detection: If both matches fail, the record is flagged as an orphan and written to dbo.audit_bdf_productoshuerfanos."
      ]
    },
    {
      id: "combos",
      title: "04. Combo Exploding",
      icon: <Split className="w-5 h-5 text-cyan-400" />,
      summary: "Splitting bundled transactions into N product rows for authorized retailers, managing pricing securely.",
      rules: [
        "Activation Condition: TIPO = 'COMBO' and Client belongs to the authorized group (Farmacity, Leloir, Selma, Simplex, Farmaonline).",
        "N-Row Replication: Duplicates the combo row based on the number of components specified in dbo.dim_bdf_combos.",
        "EAN Distribution: Assigns the individual product component EAN to each split row sequentially.",
        "Revenue Protection: Keeps the original sale Monto and units only on the first row. Other rows are set to NULL to prevent duplicate revenue in Power BI.",
        "Combo Code Heritage: Inherits the original combo code into the COD CLIENTE column of all split rows for full traceability."
      ]
    },
    {
      id: "audit",
      title: "05. Audit & Alerts",
      icon: <AlertTriangle className="w-5 h-5 text-cyan-400" />,
      summary: "Quality assurance system. The pipeline fails and triggers emails automatically if orphans are detected.",
      rules: [
        "Final Quality Check: A final Spark cell queries the audit tables dbo.audit_bdf_comboshuerfanos and dbo.audit_bdf_productoshuerfanos.",
        "Pipeline Exception: If orphans are found, it raises a system exception, failing the Fabric Job execution.",
        "Immediate Notification: Fabric Scheduler triggers an automated alert email with the list of missing EANs."
      ]
    }
  ];

  const steps = language === 'es' ? stepsEs : stepsEn;
  const activeData = steps[activeStep];

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
          {language === 'es' ? "Diagrama de Flujo de Datos (DFD) Interactivo" : "Interactive Data Flow Diagram (DFD)"}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {language === 'es' 
            ? "Hacé clic en cada fase del pipeline Medallion para ver las reglas de negocio reales aplicadas en Microsoft Fabric."
            : "Click on each phase of the Medallion pipeline to reveal the actual business rules applied in Microsoft Fabric."
          }
        </p>
      </div>

      {/* DFD Flow Timeline */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-border/40 bg-muted/10">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <React.Fragment key={step.id}>
              {/* Step Node */}
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

              {/* Connector Arrow (not after the last step) */}
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

      {/* Selected Node Details Card */}
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
                {language === 'es' ? "// REGLAS DE NEGOCIO DETALLADAS" : "// DETAILED BUSINESS RULES"}
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

export default function Home() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("alexis.martyniuk@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills = [
    // Data Engineering & Analytics
    { name: "SQL & T-SQL / PL/SQL", level: 95, category: "Data Engineering & Analytics" },
    { name: "Python / PySpark", level: 85, category: "Data Engineering & Analytics" },
    { name: "Oracle Data Integrator 12c", level: 95, category: "Data Engineering & Analytics" },
    { name: "PostgreSQL & PostGIS", level: 85, category: "Data Engineering & Analytics" },
    { name: "Delta Lake / Delta Tables", level: 80, category: "Data Engineering & Analytics" },
    { name: language === 'es' ? "Modelado Dimensional (Star/Snowflake)" : "Dimensional Modeling (Star/Snowflake)", level: 90, category: "Data Engineering & Analytics" },
    { name: "Pentaho ETL & KNIME", level: 85, category: "Data Engineering & Analytics" },
    { name: "ArcGIS", level: 75, category: "Data Engineering & Analytics" },

    // Cloud Platforms & Enterprise Data
    { name: "Microsoft Fabric & OneLake", level: 80, category: "Cloud Platforms & Enterprise Data" },
    { name: "Microsoft Azure (Blob, ADLS, KeyVault)", level: 80, category: "Cloud Platforms & Enterprise Data" },
    { name: "Snowflake", level: 85, category: "Cloud Platforms & Enterprise Data" },
    { name: "AWS Cloud & On-Premise S3", level: 75, category: "Cloud Platforms & Enterprise Data" },
    { name: "Google Cloud Platform (GCS, BigQuery)", level: 75, category: "Cloud Platforms & Enterprise Data" },

    // Business Intelligence & Data Visualization
    { name: "Power BI", level: 90, category: "Business Intelligence & Data Visualization" },
    { name: "Tableau", level: 85, category: "Business Intelligence & Data Visualization" },
    { name: "Google Looker Studio", level: 75, category: "Business Intelligence & Data Visualization" },
    { name: language === 'es' ? "Diseño de KPIs & Tableros Ejecutivos" : "KPI & Executive Dashboard Design", level: 90, category: "Business Intelligence & Data Visualization" },

    // DevOps, Versioning & Documentation
    { name: "Git & GitHub (Actions, CI/CD)", level: 85, category: "DevOps, Versioning & Documentation" },
    { name: "GitOps / Database-as-Code", level: 85, category: "DevOps, Versioning & Documentation" },
    { name: "Jira & Confluence (Agile/Scrum)", level: 85, category: "DevOps, Versioning & Documentation" },
    { name: "Docker", level: 75, category: "DevOps, Versioning & Documentation" },

    // Sistemas Legacy & Mainframe
    { name: "COBOL & Mainframe z/OS", level: 80, category: "Sistemas Legacy & Mainframe" },
    { name: "CICS & JCL", level: 80, category: "Sistemas Legacy & Mainframe" },
    { name: "DB2", level: 75, category: "Sistemas Legacy & Mainframe" }
  ];

  const metrics = [
    { value: 8, label: t.metrics.experience, suffix: "+" },
    { value: 20, label: t.metrics.projects, suffix: "+" },
    { value: 99.9, label: t.metrics.uptime, suffix: "%", decimals: 1 },
    { value: 15, label: t.metrics.technologies, suffix: "+" },
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <SectionTracker />
      <VisualEffects />
      <Navbar />

      <Hero />
      <CriticalDashboard />

      {/* Inspirational Quote */}
      <motion.section
        className="py-16 pb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <blockquote className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl italic text-muted-foreground/80 leading-relaxed">
              &ldquo;{t.quote.text}&rdquo;
            </p>
            <footer className="text-sm text-muted-foreground/60 uppercase tracking-widest" style={{ fontVariant: 'small-caps' }}>
              — {t.quote.author}
            </footer>
            <p className="text-lg md:text-xl text-primary font-semibold pt-4">
              {t.quote.subtext}
            </p>
          </blockquote>
        </div>
      </motion.section>

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
            title={t.titles.projects}
            subtitle={
              <span>
                {t.titles.projectsSubtitle}
                <br />
                <span className="inline-block mt-2 py-1 px-3 rounded-md bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider border border-red-500/20">
                  {t.titles.featuredOracle}
                </span>
              </span>
            }
            centered
          />
          {/* Project Slider */}
          <ProjectSlider projects={t.mainProjects} onProjectClick={setSelectedProject} />

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
                title={t.titles.stack}
                subtitle={t.titles.stackSubtitle}
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
                  <h3 className="text-2xl font-bold">{t.titles.education}</h3>
                </div>
                <div className="space-y-6">
                  {t.education.map((edu) => (
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
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{t.titles.languages}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 font-sans">
                  <div className="text-center p-4 rounded-lg border border-border bg-background">
                    <p className="text-[10px] uppercase text-muted-foreground mb-1 text-nowrap">{t.languages.spanish}</p>
                    <p className="font-bold text-sm">{t.languages.spanishLevel}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg border border-border bg-background">
                    <p className="text-[10px] uppercase text-muted-foreground mb-1 text-nowrap">{t.languages.english}</p>
                    <p className="font-bold text-sm">{t.languages.englishLevel}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg border border-border bg-background">
                    <p className="text-[10px] uppercase text-muted-foreground mb-1 text-nowrap">{t.languages.portuguese}</p>
                    <p className="font-bold text-sm">{t.languages.portugueseLevel}</p>
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
            title={t.titles.curatedCode}
            subtitle={t.titles.curatedCodeSubtitle}
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.secondaryProjects.map((proj) => (
              <ProjectCard
                key={proj.title}
                title={proj.title}
                description={proj.description}
                image={proj.image}
                alt={proj.alt}
                tags={proj.tags}
                github={proj.github}
                link={proj.link}
                linkType={proj.linkType}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Press & Publications Section */}
      <motion.section
        id="press"
        className="py-24 border-t border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t.titles.press}
            subtitle={t.titles.pressSubtitle}
            centered
          />
          <div className={`${t.publications.length === 1 ? 'max-w-5xl mx-auto' : 'grid md:grid-cols-2 gap-8'}`}>
            {t.publications.map((pub) => (
              <PressCard
                key={pub.title}
                publication={pub}
                featured={t.publications.length === 1}
              />
            ))}
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
            title={t.titles.contact}
            subtitle={t.titles.contactSubtitle}
            centered
          />
          <div className="max-w-4xl mx-auto rounded border border-border/50 bg-accent/20 backdrop-blur-md p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_50px_-15px_rgba(6,182,212,0.25)] group">
            {/* Corner Decorative Tech Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Decorative blob */}
            <div className="absolute top-[-50%] left-[-20%] h-full w-full bg-primary/10 blur-[80px] -z-10" />

            <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
              {t.titles.contactDesc}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <a
                href="mailto:alexis.martyniuk@gmail.com"
                className="flex items-center justify-center gap-3 bg-primary px-6 h-16 rounded font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 w-full sm:w-auto whitespace-nowrap cursor-pointer"
              >
                <Mail size={18} /> {t.titles.contactCTA}
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-3 px-6 h-16 rounded border border-border bg-background hover:bg-muted transition-all font-bold w-full sm:w-auto min-w-[180px] whitespace-nowrap cursor-pointer"
              >
                {copied ? (
                  <span className="text-emerald-500 flex items-center gap-2 italic">
                    <CheckCircle size={18} /> {t.titles.copied}
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Copy size={18} /> {t.titles.copyEmail}
                  </span>
                )}
              </button>
              <div className="flex items-center gap-3 h-16">
                <a href="https://linkedin.com/in/alexismartyniuk/" target="_blank" className="flex items-center justify-center w-16 h-16 rounded border border-border bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
                <a href="https://github.com/a-martyniuk" target="_blank" className="flex items-center justify-center w-16 h-16 rounded border border-border bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"><Github size={20} /></a>
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
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{t.pipeline.studyCase}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject?.details}
              </p>
            </div>

            <div className="pt-6 border-t border-border/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">{t.pipeline.techArchitecture}</h4>
              <div className="space-y-4">
                {selectedProject?.architecture?.map((step: string, i: number) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                      0{i + 1}
                    </div>
                    <div className="flex-1 text-sm font-medium">{step}</div>
                    {selectedProject.architecture && i < selectedProject.architecture.length - 1 && (
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

            <div className="flex flex-wrap gap-1.5">
              {selectedProject?.tags.map((tag: string) => (
                <span key={tag} className="px-2 py-0.5 rounded border border-border/80 bg-muted/30 text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
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
                {t.pipeline.viewOfficial} <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>

        {selectedProject && (selectedProject.title.includes("Digital Sales Tracking") || selectedProject.title.includes("Sell-Out")) && (
          <div className="mt-12 pt-12 border-t border-border/10">
            <DataFlowDiagram language={language} />
          </div>
        )}

        {selectedProject && selectedProject.title.includes("Real Estate Scraper") && (
          <div className="mt-12 pt-12 border-t border-border/10">
            <ScraperDataFlowDiagram language={language} />
          </div>
        )}

        {selectedProject && selectedProject.title.includes("MELI AIO") && (
          <div className="mt-12 pt-12 border-t border-border/10">
            <MeliAioDataFlowDiagram language={language} />
          </div>
        )}
      </Modal>
    </main>
  );
}

