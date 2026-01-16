import { Variants } from 'framer-motion';

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Fade in from left
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Fade in from right
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Scale up
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// Progress bar fill
export const progressBar: Variants = {
    hidden: { width: 0 },
    visible: (width: number) => ({
        width: `${width}%`,
        transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 }
    })
};

// Counter animation helper
export const animateCounter = (
    from: number,
    to: number,
    duration: number = 2000,
    onUpdate: (value: number) => void
) => {
    const startTime = Date.now();
    const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(from + (to - from) * easeOutQuad);

        onUpdate(current);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
};

// 3D Tilt effect configuration
export const tiltConfig = {
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 400,
    transition: true,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)'
};

// Slide variants for carousel
export const slideVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

// Hover lift effect
export const hoverLift = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
    }
};

// Pulse animation
export const pulse: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};
