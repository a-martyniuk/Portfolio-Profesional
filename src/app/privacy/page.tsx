import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Database, UserCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Mi Kanban Web - Alexis Martyniuk',
  description:
    'Política de privacidad y tratamiento de datos para Mi Kanban Web y servicios de Google Tasks de Alexis Martyniuk.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>

        <header className="space-y-4 border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
            <Shield className="w-3.5 h-3.5" />
            Políticas de Privacidad y Tratamiento de Datos
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Política de Privacidad — Mi Kanban Web
          </h1>
          <p className="text-muted-foreground text-sm">
            Última actualización: 2 de Octubre de 2026. Responsable: Alexis Martyniuk (alexis.martyniuk@gmail.com).
          </p>
        </header>

        <section className="space-y-6 leading-relaxed text-sm text-foreground/90">
          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-primary" />
              1. Arquitectura Zero-DB y Privacidad Total
            </h2>
            <p className="text-muted-foreground">
              <strong>Mi Kanban Web</strong> está diseñado bajo una arquitectura sin base de datos intermedia (Zero-DB). 
              Esto significa que <strong>no almacenamos tus credenciales, contraseñas, correos, notas ni tareas</strong> en ningún servidor propio ni de terceros.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-primary" />
              2. Uso de Permisos y API de Google Tasks
            </h2>
            <p className="text-muted-foreground mb-2">
              Cuando decides vincular tu cuenta de Google, la aplicación solicita exclusivamente los permisos mínimos necesarios:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-primary">https://www.googleapis.com/auth/tasks</code>: 
                Permite leer tus listas existentes y mover tus tareas entre las 4 columnas del tablero (Para hacer, En progreso, En revisión, Terminado).
              </li>
              <li>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-primary">profile</code> y <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-primary">email</code>: 
                Únicamente para mostrar tu foto y nombre en la barra de navegación del tablero mientras la sesión esté activa en tu navegador.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground flex items-center gap-2 mb-3">
              <UserCheck className="w-5 h-5 text-primary" />
              3. Cumplimiento con la Política de Datos de Google (Limited Use)
            </h2>
            <p className="text-muted-foreground">
              El uso y la transferencia a cualquier otra aplicación de la información recibida a través de las APIs de Google por parte de Mi Kanban Web cumple rigurosamente con la{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                Política de Datos de Usuario de los Servicios de API de Google
              </a>
              , incluidos los requisitos de Uso Limitado (Limited Use Requirements). No utilizamos datos obtenidos para entrenar modelos de Inteligencia Artificial ni para publicidad.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              4. Revocación del Consentimiento
            </h2>
            <p className="text-muted-foreground">
              Puedes revocar el acceso de Mi Kanban Web a tu cuenta de Google en cualquier momento ingresando a la configuración de seguridad de Google en:{' '}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                https://myaccount.google.com/permissions
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              5. Contacto
            </h2>
            <p className="text-muted-foreground">
              Si tienes dudas o consultas sobre esta política de privacidad, puedes contactar al desarrollador en:{' '}
              <a href="mailto:alexis.martyniuk@gmail.com" className="text-primary font-mono">
                alexis.martyniuk@gmail.com
              </a>.
            </p>
          </div>
        </section>

        <footer className="border-t border-border pt-6 flex justify-between items-center text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Alexis Martyniuk</span>
          <Link href="/kanban" className="hover:text-primary transition-colors">
            Ir a Mi Kanban Web &rarr;
          </Link>
        </footer>
      </div>
    </main>
  );
}
