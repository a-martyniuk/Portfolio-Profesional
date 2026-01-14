import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string | React.ReactNode;
    centered?: boolean;
    className?: string;
}

export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
    return (
        <div className={cn('mb-12', centered ? 'text-center' : 'text-left', className)}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn('h-1.5 w-12 bg-primary mt-4 rounded-full', centered ? 'mx-auto' : 'mr-auto')} />
        </div>
    );
}
