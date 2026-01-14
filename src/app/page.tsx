import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Real Estate Scraper Pro",
      description: "Advanced multi-source real estate scraper with automated email notifications and data consolidation into Excel.",
      tags: ["Python", "Playwright", "Pandas", "Automation"],
      github: "https://github.com",
    },
    {
      title: "ML Invoice Automator",
      description: "SaaS-ready tool for Mercado Libre sellers to automate invoice downloads, cloud storage, and monthly reporting.",
      tags: ["Next.js", "OAuth2", "PostgreSQL", "Google Drive API"],
      link: "https://example.com",
    },
    {
      title: "GOG Galaxy Exporter",
      description: "Local database extractor for GOG Galaxy gaming data with detailed metadata and cover art fetching.",
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
            title="Featured Projects"
            subtitle="A selection of my recent work in automation and web application development."
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
                title="Technical Expertise"
                subtitle="Leveraging the latest technologies to build high-performance, scalable applications."
              />
              <p className="text-muted-foreground mb-8">
                My approach focuses on creating robust systems that solve real-world problems.
                From complex scrapers to full-stack SaaS applications, I prioritize performance and user experience.
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
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Lighthouse Score</span>
              </div>
              <div className="aspect-square rounded-3xl bg-indigo-500/5 border border-indigo-500/10 flex flex-col items-center justify-center p-8 text-center mt-8">
                <span className="text-4xl font-bold text-indigo-500 mb-2">Zero</span>
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Downtime CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Get In Touch"
            subtitle="Interested in collaborating or hiring for your next project?"
            centered
          />
          <div className="max-w-xl mx-auto rounded-3xl border border-border bg-accent/30 p-8 md:p-12">
            <p className="mb-8 text-muted-foreground">
              Always open to discussing new opportunities, SaaS ideas, or technical consulting.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@alexismartyniuk.com.ar"
                className="w-full flex items-center justify-center gap-3 bg-primary py-4 rounded-2xl font-bold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <Mail size={20} /> Send an Email
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
            © {new Date().getFullYear()} Alexis Martyniuk. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
