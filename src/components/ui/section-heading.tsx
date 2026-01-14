import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string | React.ReactNode;
    centered?: boolean;
    className?: string;
}

export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
    return (
        <div className={cn('mb-12 relative', centered ? 'text-center' : 'text-left', className)}>
            <div className={cn('absolute -z-10 w-24 h-24 bg-primary/10 blur-3xl opacity-50', centered ? 'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : 'left-0 top-0')} />
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className={cn('h-1.5 w-12 bg-primary mt-6 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]', centered ? 'mx-auto' : 'mr-auto')} />
        </div>
    );
}
