import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Experience } from "@/components/experience";
import { Mail, Linkedin, Github, GraduationCap, Globe } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Modelo Analítico Corporativo (Laboratorios Bagó)",
      description: "Plataforma de datos de misión crítica para una de las mayores farmacéuticas de Argentina, que permitió aumentar en 20% la productividad y reducir tiempos de decisión operativa.",
      tags: ["Oracle", "ODI 12c", "AWS", "Snowflake"],
      link: "https://blogs.oracle.com/oracle-latinoamerica/post/laboratorios-bag-elev-su-produccin-en-un-20-con-el-apoyo-de-la-nube-de-oracle",
    },
    {
      title: "Infraestructura de Estado (Ministerio de Seguridad)",
      description: "Plataforma provincial de análisis criminal utilizada por fuerzas de seguridad para asignación de recursos, detección de hotspots y toma de decisiones tácticas en tiempo real.",
      tags: ["PostgreSQL", "ArcGIS", "Python", "Sistemas de Misión Crítica"],
    },
    {
      title: "Automatización y Redes de Alta Disponibilidad",
      description: "Implementación de ecosistemas IoT y redes WiFi Mesh para infraestructuras inteligentes, aplicando principios de automatización industrial y monitoreo proactivo.",
      tags: ["IoT", "Networking", "Automatización", "Sistemas Inteligentes"],
    },
  ];

  const stack = [
    "Oracle Data Integrator 12c",
    "Python & PL/SQL",
    "Snowflake & AWS",
    "Power BI & Tableau",
    "Mainframe (COBOL/DB2)",
    "PostgreSQL",
    "Next.js & TypeScript",
    "Metodologías Ágiles (Scrum)",
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
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-accent/30">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Stack & Education Section */}
      <section id="stack" className="py-24 border-y border-border bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Stack */}
            <div>
              <SectionHeading
                title="Experticia Técnica"
                subtitle="Desde mainframes COBOL/DB2 hasta nubes Snowflake/AWS: modernización de ecosistemas completos sin romper operaciones críticas."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {stack.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Hablemos de tu Próximo Desafío"
            subtitle="¿Necesitás a alguien que diseñe, implemente y mantenga tu plataforma de datos sin romper producción?"
            centered
          />
          <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-accent/30 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-[-50%] left-[-20%] h-full w-full bg-primary/10 blur-[80px] -z-10" />

            <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
              Estoy disponible para proyectos de arquitectura de datos, migración a la nube y consultoría estratégica para sistemas de alta complejidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alexis.martyniuk@gmail.com"
                className="flex items-center justify-center gap-3 bg-primary px-8 py-5 rounded-2xl font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 shrink-0"
              >
                <Mail size={20} /> Agenda una llamada o escribime
              </a>
              <div className="flex justify-center gap-4">
                <a href="https://linkedin.com/in/alexismartyniuk/" target="_blank" className="p-4 rounded-2xl border border-border bg-background hover:bg-muted transition-colors"><Linkedin /></a>
                <a href="https://github.com/a-martyniuk" target="_blank" className="p-4 rounded-2xl border border-border bg-background hover:bg-muted transition-colors"><Github /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
