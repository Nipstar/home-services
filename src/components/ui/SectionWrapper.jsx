import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionWrapper({ children, bg = 'white', className = '', id }) {
    const ref = useScrollReveal();

    const bgClasses = {
        white: 'bg-white',
        soft: 'bg-surface-soft',
        dark: 'bg-dark text-white',
        accent: 'bg-[#F0EBFF]',
        gradient: 'bg-gradient-to-br from-dark via-[#2D1B69] to-primary',
    };

    return (
        <section
            id={id}
            ref={ref}
            className={`py-20 md:py-28 lg:py-36 fade-in-up ${bgClasses[bg]} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                {children}
            </div>
        </section>
    );
}
