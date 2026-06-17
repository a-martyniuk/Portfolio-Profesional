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
import { useLanguage } from '@/components/providers/language-provider';

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
          <blockquote className="max-w-3xl mx-auto text-center space-y-6">
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
          <div className="max-w-2xl mx-auto rounded-3xl border border-border/50 bg-accent/20 backdrop-blur-md p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_50px_-15px_rgba(99,102,241,0.2)]">
            {/* Decorative blob */}
            <div className="absolute top-[-50%] left-[-20%] h-full w-full bg-primary/10 blur-[80px] -z-10" />

            <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
              {t.titles.contactDesc}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <a
                href="mailto:alexis.martyniuk@gmail.com"
                className="flex items-center justify-center gap-3 bg-primary px-6 h-16 rounded-2xl font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 w-full sm:w-auto whitespace-nowrap cursor-pointer"
              >
                <Mail size={18} /> {t.titles.contactCTA}
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-3 px-6 h-16 rounded-2xl border border-border bg-background hover:bg-muted transition-all font-bold w-full sm:w-auto min-w-[180px] whitespace-nowrap cursor-pointer"
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
                {t.pipeline.viewOfficial} <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      </Modal>
    </main>
  );
}
