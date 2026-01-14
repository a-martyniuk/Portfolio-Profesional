import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Real Estate Scraper Pro",
      description: "Scraper inmobiliario avanzado multi-fuente con notificaciones por email automáticas y consolidación de datos en Excel.",
      tags: ["Python", "Playwright", "Pandas", "Automatización"],
      github: "https://github.com",
    },
    {
      title: "ML Invoice Automator",
      description: "Herramienta lista para SaaS para vendedores de Mercado Libre que automatiza la descarga de facturas y reportes mensuales.",
      tags: ["Next.js", "OAuth2", "PostgreSQL", "Google Drive API"],
      link: "https://example.com",
    },
    {
      title: "GOG Galaxy Exporter",
      description: "Extractor de base de datos local para datos de juegos de GOG Galaxy con metadatos detallados y carátulas.",
      tags: ["SQLite", "TypeScript", "React"],
      github: "https://github.com",
    },
  ];

  const stack = [
    "Next.js 15 (App Router)",
    "TypeScript",
    "Tailwind CSS v4",
    "Framer Motion",
    "PostgreSQL",
    "Vercel Edge",
    "PostHog Analytics",
    "Stripe Payments",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Proyectos Destacados"
            subtitle="Una selección de mi trabajo reciente en automatización y desarrollo de aplicaciones web."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeading
                title="Experticia Técnica"
                subtitle="Aprovechando las últimas tecnologías para crear aplicaciones escalables y de alto rendimiento."
              />
              <p className="text-muted-foreground mb-8">
                Mi enfoque se centra en crear sistemas robustos que resuelven problemas del mundo real.
                Desde scrapers complejos hasta aplicaciones SaaS full-stack, priorizo el rendimiento y la experiencia del usuario.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stack.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl bg-primary/5 border border-primary/10 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-4xl font-bold text-primary mb-2">99</span>
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Puntaje Lighthouse</span>
              </div>
              <div className="aspect-square rounded-3xl bg-indigo-500/5 border border-indigo-500/10 flex flex-col items-center justify-center p-8 text-center mt-8">
                <span className="text-4xl font-bold text-indigo-500 mb-2">Zero</span>
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">CI/CD Sin Interrupciones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Ponte en Contacto"
            subtitle="¿Interesado en colaborar o contratarme para tu próximo proyecto?"
            centered
          />
          <div className="max-w-xl mx-auto rounded-3xl border border-border bg-accent/30 p-8 md:p-12">
            <p className="mb-8 text-muted-foreground">
              Siempre estoy abierto a discutir nuevas oportunidades, ideas de SaaS o consultoría técnica.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@alexismartyniuk.com.ar"
                className="w-full flex items-center justify-center gap-3 bg-primary py-4 rounded-2xl font-bold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <Mail size={20} /> Enviar un Email
              </a>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="p-4 rounded-2xl border border-border hover:bg-muted transition-colors"><Linkedin /></a>
                <a href="#" className="p-4 rounded-2xl border border-border hover:bg-muted transition-colors"><Github /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Alexis Martyniuk. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground">Política de Privacidad</a>
            <a href="#" className="hover:text-foreground">Términos de Servicio</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
