'use client';

import React, { useState, useRef } from 'react';
import { Maximize2, Minimize2, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface ArchifyViewerProps {
  src: string;
  title: string;
  subtitle?: string;
  diagramType?: 'architecture' | 'dataflow' | 'workflow' | 'sequence' | 'lifecycle';
  language?: 'es' | 'en';
}

export function ArchifyViewer({
  src,
  title,
  subtitle,
  diagramType = 'architecture',
  language = 'es'
}: ArchifyViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const typeLabels: Record<string, { es: string; en: string }> = {
    architecture: { es: 'Arquitectura de Sistemas', en: 'System Architecture' },
    dataflow: { es: 'Flujo de Datos (Data Flow)', en: 'Data Flow Pipeline' },
    workflow: { es: 'Flujo de Trabajo (GitOps)', en: 'Workflow Pipeline' },
    sequence: { es: 'Secuencia de Eventos', en: 'Sequence Diagram' },
    lifecycle: { es: 'Ciclo de Vida de Estados', en: 'Lifecycle State Machine' }
  };

  const currentTypeLabel = typeLabels[diagramType] || { es: 'Diagrama Técnico', en: 'Technical Diagram' };

  return (
    <div
      ref={containerRef}
      className={`relative transition-all duration-300 font-sans ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-background/95 backdrop-blur-xl p-4 md:p-8 flex flex-col'
          : 'space-y-3'
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border border-border/40 bg-muted/20 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                {title}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" />
                Showcase 9/9
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              {subtitle || (language === 'es' ? currentTypeLabel.es : currentTypeLabel.en)}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            title={language === 'es' ? 'Abrir diagrama independiente en nueva pestaña' : 'Open standalone diagram in new tab'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border/50 bg-background hover:bg-muted hover:border-primary/40 text-foreground transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">
              {language === 'es' ? 'Abrir en Pestaña' : 'Open in Tab'}
            </span>
          </a>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? (language === 'es' ? 'Salir de pantalla completa' : 'Exit fullscreen') : (language === 'es' ? 'Maximizar vista' : 'Maximize')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border/50 bg-background hover:bg-primary/10 hover:border-primary/40 text-foreground transition-all duration-200"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden md:inline">{language === 'es' ? 'Restaurar' : 'Restore'}</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden md:inline">{language === 'es' ? 'Pantalla Completa' : 'Fullscreen'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Diagram IFrame Container */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 shadow-2xl transition-all ${
          isFullscreen ? 'flex-1 h-full min-h-0' : 'h-[520px] sm:h-[560px]'
        }`}
      >
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {language === 'es' ? 'Renderizando diagrama vectorial...' : 'Rendering vector diagram...'}
            </span>
          </div>
        )}

        <iframe
          src={src}
          title={title}
          onLoad={() => setIsLoading(false)}
          className="w-full h-full border-0 rounded-2xl"
        />
      </div>

      {/* Instructions footer */}
      <div className="flex items-center justify-between px-1 text-[11px] text-muted-foreground">
        <span>
          {language === 'es'
            ? '💡 Haz clic en los nodos para inspeccionarlos, navega por capítulos o haz zoom con la rueda del ratón.'
            : '💡 Click nodes to inspect, navigate chapters or scroll to zoom in/out.'}
        </span>
        <span className="hidden sm:inline font-mono text-[10px] text-primary/70">
          Powered by Archify Engine
        </span>
      </div>
    </div>
  );
}
