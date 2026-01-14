import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-9xl font-heading font-black text-primary/20 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Página No Encontrada</h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                La página que buscas no existe o ha sido movida a otra URL.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
                <ArrowLeft size={18} /> Volver al Inicio
            </Link>
        </div>
    );
}
